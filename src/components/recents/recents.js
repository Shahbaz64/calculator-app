import React from "react";
import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { clearHistoryHandler } from "components/actions/actions";
import NavBar from "components/home/navBar";
import "components/recents/recents.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faHistory } from "@fortawesome/free-solid-svg-icons";

const Recents = () => {
  const state = useSelector((state) => state.MyReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <NavBar />
      <div className="header">
        <h2>Recent History</h2>
        <FontAwesomeIcon
          id="del-icon"
          title="Clear History"
          icon={faTrash}
          onClick={() => dispatch(clearHistoryHandler())}
        ></FontAwesomeIcon>
      </div>
      <div className="recents">
        {state.recents[0] ? (
          <div>
            {state.recents.map(({ expression, result }) => {
              return (
                <div key={uuid()}>
                  <p className="rec-entery">
                    {expression} = {result}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="no-recents">
            <FontAwesomeIcon icon={faHistory}></FontAwesomeIcon>
            <p> No History!!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recents;
