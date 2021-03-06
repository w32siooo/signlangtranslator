import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import CardComp from "../components/card-comp";
import { fetchAllSearches } from "../store/actions";
import { useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  //Auth0 hook where we get the user object from.

  const Searches = useSelector((state) => state.saveAllSearches);

  const deleted = useSelector((state) => state.hideSearch);

  const [lastTen, setlastTen] = useState([]);

  const { user } = useAuth0();
  //Destructuring the name,picture and email form the user object.
  const { name, picture, email } = user;
  //state to store all searches made by the user in question

  useEffect(() => {
    if (Searches.length > 10) {
      let max = Searches[Searches.length - 1];
      let min = Searches[Searches.length - 11];
      setlastTen(Searches.slice(min.id, max.id));
    }
  }, [Searches]);

  useEffect(() => {
    dispatch(fetchAllSearches(name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <div className="text-center hero">
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>
            {name}, so many have been deleted{deleted}
          </h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          List of all translations:
          {lastTen.map((e, index) => {
            //list only 10

            if (e.deleted) {
              return null;
            } else {
              return (
                <div className="searchCard" id={index} key={index}>
                  {index}
                  <CardComp e={e} />
                </div>
              );
            }
          })}
        </pre>
      </div>
    </div>
  );
};

export default Profile;
