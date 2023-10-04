import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
// import { Link } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li
              className={`sidebarListItem ${
                location.pathname === "/" && "active"
              }`}
            >
              <LineStyle className="sidebarIcon" />
              <Link to="/" style={{ textDecoration: "none", color: "#555" }}>
                Home
              </Link>
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li
              className={`sidebarListItem ${
                location.pathname === "/users" && "active"
              }`}
            >
              <PermIdentity className="sidebarIcon" />
              <Link
                to="/users"
                style={{ textDecoration: "none", color: "#555" }}
              >
                Users
              </Link>
            </li>
            <li
              className={`sidebarListItem ${
                location.pathname === "/productList" && "active"
              }`}
            >
              <Storefront className="sidebarIcon" />
              <Link
                to="/productList"
                style={{ textDecoration: "none", color: "#555" }}
              >
                Products
              </Link>
            </li>
            <li
              className={`sidebarListItem ${
                location.pathname === "/transactions" && "active"
              }`}
            >
              <AttachMoney className="sidebarIcon" />
              <Link
                to="/transactions "
                style={{ textDecoration: "none", color: "#555" }}
              >
                Transactions
              </Link>
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
