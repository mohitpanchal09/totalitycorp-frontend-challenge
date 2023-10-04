import React from "react";
import PreLoader from "../assets/__Iphone-spinner-1.gif";
export default function Loader() {
  return (
    <div className="loader" style={{ marginLeft: "auto", marginRight: "auto" }}>
      <img src={PreLoader} alt="apple loader" className="logo" />
    </div>
  );
}
