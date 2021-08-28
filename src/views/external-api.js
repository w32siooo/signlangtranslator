// src/views/external-api.js

import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Axios from "axios";
const baseUrl = "http://localhost:3000";

const ExternalApi = () => {
  const [message, setMessage] = useState("");
  const [SearchString, setSearchString] = useState([
    {
      value: "",
      id: 1,
    },
  ]);
  const [AllSigns, setAllSigns] = useState([
    {
      url: "https://storage.googleapis.com/aadh/individial_signs/a.png",
      key: "a",
    },
  ]);

  //Create a unique ID because react needs it.
  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const serverUrl = process.env.REACT_APP_SERVER_URL;
  function getData(val) {
    //Get input field value
    let str = val.target.value;
    //Replace spaces
    str = str.replace(/\s+/g, "");
    setSearchString(
      //Split string into array of single chars.
      str.split("").map((e) => {
        return { value: e, id: makeid(5) };
      })
    );
  }

  //useEffect that fires every time input is changed, and then fetches the image data from our JSON server.
  //useEffect(() => {}, [Searches]);

  const { getAccessTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      const response = await fetch(`${serverUrl}/api/messages/public-message`);

      const responseData = await response.json();

      setMessage(responseData.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  useEffect(() => {
    const getAllSigns = async () => {
      try {
        await Axios.get(`${baseUrl}/posts`).then((Response) => {
          const returnedData = Response.data.map((data) => {
            return { url: data.url, key: data.key };
          });
          setAllSigns(returnedData);
        });
      } catch (error) {
        console.error(error);
      }
    };
    getAllSigns();
  }, []);

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(
        `${serverUrl}/api/messages/protected-message`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = await response.json();

      setMessage(responseData.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="container">
      <h1>External API</h1>
      <p>
        Use these buttons to call an external API. The protected API call has an
        access token in its authorization header. The API server will validate
        the access token using the Auth0 Audience value.
      </p>
      <div
        className="btn-group mt-5"
        role="group"
        aria-label="External API Requests Examples"
      >
        <input
          type="text"
          placeholder="Search for a word!"
          maxLength="10"
          onChange={getData}
        ></input>

        <button type="button" className="btn btn-primary" onClick={callApi}>
          Get Public Message
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={callSecureApi}
        >
          Get Protected Message
        </button>
      </div>
      {message && (
        <div className="mt-5">
          <h6 className="muted">Result</h6>
          <div className="container-fluid">
            <div className="row">
              <code className="col-12 text-light bg-dark p-4">
                {" "}
                {SearchString.map((element) => {
                  for (let index = 0; index < AllSigns.length; index++) {
                    if (AllSigns[index].key === element.value) {
                      console.log(AllSigns[index].key, element.value);
                      return (
                        <img
                          className="mb-3 app-logo"
                          src={AllSigns[index].url}
                          alt="React logo"
                          width="120"
                          key={AllSigns[index].key}
                        />
                      );
                    }
                  }
                })}
              </code>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExternalApi;
