import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer"; // Import your Footer component
import { useLocation } from "react-router-dom";
import { userRequest } from "../requestMethods";
import { DataGrid } from "@mui/x-data-grid";
import "./Orders.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Orders() {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("/orders/find/" + id);
        setOrders(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(true);
      }
    };
    getOrders();
  }, []);

  const columns = [
    { field: "_id", headerName: "Order Id", width: 420 },
    {
      field: "amount",
      headerName: "Amount",
      width: 400,
      valueGetter: (params) => `₹${params.value}`,
    },
    {
      field: "createdAt",
      headerName: "Date",
      width: 160,
      valueGetter: (params) => {
        const date = new Date(params.value);
        return date.toLocaleDateString();
      },
    },
  ];

  const urlParams = new URLSearchParams(window.location.search);
  const isSuccess = urlParams.get("success");

  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="content-container">
        {" "}
        {/* Wrap content in a container */}
        {loading ? (
          <React.Fragment>
            <Skeleton height={40} count={17} />
          </React.Fragment>
        ) : (
          <div className="container">
            {orders.length > 0 ? (
              <DataGrid
                rows={orders}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                getRowId={(row) => row._id}
                checkboxSelection
              />
            ) : (
              <h4 style={{ margin: "auto" }}>No orders</h4>
            )}
          </div>
        )}
      </div>
      {/* <div style={{ position: "absolute", bottom: "0" }}> */}
      <Footer />
      {/* </div> */}
      {isSuccess === "true" && <p>Your order was successful!</p>}
    </div>
  );
}
