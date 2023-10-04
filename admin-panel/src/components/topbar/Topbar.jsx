import React from "react";
import "./topbar.css";
import { logout } from "../../redux/userRedux";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
export default function Topbar() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    localStorage.removeItem(user);
    localStorage.clear();
    e.preventDefault();
    dispatch(logout()); // Dispatch the logout action
    // console.log(user);

    alert("You have been logged out");
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>

          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
          <div className="topbarIconContainer">
            <button
              onClick={handleLogout}
              style={{
                cursor: "pointer",
                border: "none",
                backgroundColor: "white",
              }}
            >
              {" "}
              <LogoutIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
