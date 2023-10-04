import React from "react";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function Transaction() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setTimeout(() => {
          setOrders(res.data);
          setLoading(false);
        }, 1000);
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

  return (
    <div className="userList">
      {loading ? ( // Display skeleton loading view if loading is true
        <React.Fragment>
          <Skeleton height={40} count={17} />
        </React.Fragment>
      ) : (
        <DataGrid
          rows={orders}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          getRowId={(row) => row._id}
          checkboxSelection
        />
      )}
    </div>
  );
}
