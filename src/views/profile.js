// src/views/profile.js

import React, { useEffect, useState } from "react";
import Axios from "axios";

import { useAuth0 } from "@auth0/auth0-react";
const baseUrl = "http://localhost:3000";
const Profile = () => {
  //Auth0 hook where we get the user object from.
  const { user } = useAuth0();
  //Destructuring the name,picture and email form the user object.
  const { name, picture, email } = user;
  //state to store all searches made by the user in question

  const [Searches, setSearches] = useState([{ value: "hello", id: 1 }]);
  async function fetchMyApi() {
    try {
      await Axios.get(`${baseUrl}/searches?user=${name}`).then((Response) => {
        const searches = Response.data.map((data) => {
          return { value: data.value, id: data.id };
        });
        setSearches(searches);
      });
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchMyApi();
  }, [name]);

  const deleteSearch = async (idToDelete) => {
    try {
      await Axios.delete(`${baseUrl}/searches/${idToDelete}`);
      await fetchMyApi();
    } catch (error) {}
  };

  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
          List of all searches:{" "}
          {Searches.map((e) => {
            return (
              <div className="searchCard">
                Search string: {e.value}
                <br />
                Search Id {e.id}{" "}
                <button onClick={() => deleteSearch(e.id)}>
                  {" "}
                  Delete Search{" "}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Profile;
