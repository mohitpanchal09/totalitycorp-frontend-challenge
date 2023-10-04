import "./WidgetSm.css";
import { Visibility } from "@mui/icons-material";
import { useEffect } from "react";
import { useState } from "react";
import { userRequest } from "../../requestMethods";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        // Simulate a delay to see the skeleton view
        setTimeout(() => {
          setUsers(res.data);
          setLoading(false);
        }, 1000); // Adjust the delay time as needed
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {loading ? (
          <React.Fragment>
            <Skeleton count={5} height={80} />
          </React.Fragment>
        ) : (
          users.map((user) => (
            <li className="widgetSmListItem" key={user._id}>
              <img
                src={
                  user.img ||
                  "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                }
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.username}</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
