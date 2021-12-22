import React from "react";
import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { clearHistoryHandler } from "components/actions/actions";
import NavBar from "components/home/navBar";
import "components/recents/recents.css";

const Recents = () => {
  const state = useSelector((state) => state.MyReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <NavBar />
      <div className="header">
        <h2>Recent History</h2>
        <i
          id="del-icon"
          title="Clear History"
          className="fa fa-trash-o"
          aria-hidden="true"
          onClick={() => dispatch(clearHistoryHandler())}
        ></i>
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
            <i className="fa fa-history" aria-hidden="true"></i>
            <p> No History!!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recents;
