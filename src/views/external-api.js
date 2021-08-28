// src/views/external-api.js

import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Axios from "axios";
import axios from "axios";
const baseUrl = "http://localhost:3000";

const ExternalApi = () => {
  const [message, setMessage] = useState("");
  const [StringToStore, setStringToStore] = useState("");
  const [SearchString, setSearchString] = useState(null);
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
    setStringToStore(str);
    setSearchString(
      //Split string into array of single chars.
      str.split("").map((e) => {
        return { value: e, id: makeid(5) };
      })
    );
  }

  //useEffect that fires every time input is changed, and then fetches the image data from our JSON server.
  //useEffect(() => {}, [Searches]);

  const { getAccessTokenSilently, user } = useAuth0();
  //Destructuring the name,picture and email form the user object.
  const { name, picture, email } = user;

  const dispatchTranslation = async () => {
    try {
      Axios.post(`${baseUrl}/searches`, {
        value: StringToStore,
        user: name,
      });
    } catch (error) {
      console.error(error);
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
          maxLength="40"
          onChange={getData}
        ></input>

        <button
          type="button"
          className="btn btn-primary"
          onClick={dispatchTranslation}
        >
          Save Search
        </button>
      </div>
      {SearchString && (
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
                          key={element.id}
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
