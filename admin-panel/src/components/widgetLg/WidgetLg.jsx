import React from "react";
import "./WidgetLg.css";
import { format } from "timeago.js";
import { useState, useEffect } from "react";
import { userRequest } from "../../requestMethods";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        // Simulate a delay to see the skeleton view
        setTimeout(() => {
          setOrders(res.data);
          setLoading(false);
        }, 1000);
      } catch (err) {
        console.log(err); // Set loading to false even if an error occurs
      }
    };
    getOrders();
  }, []);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  console.log(orders);

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {loading ? (
          // Display skeleton loading view
          <React.Fragment>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <Skeleton width={100} />
              </td>
              <td className="widgetLgDate">
                <Skeleton width={80} />
              </td>
              <td className="widgetLgAmount">
                <Skeleton width={60} />
              </td>
              <td className="widgetLgStatus">
                <Skeleton width={80} />
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <Skeleton width={100} />
              </td>
              <td className="widgetLgDate">
                <Skeleton width={80} />
              </td>
              <td className="widgetLgAmount">
                <Skeleton width={60} />
              </td>
              <td className="widgetLgStatus">
                <Skeleton width={80} />
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <Skeleton width={100} />
              </td>
              <td className="widgetLgDate">
                <Skeleton width={80} />
              </td>
              <td className="widgetLgAmount">
                <Skeleton width={60} />
              </td>
              <td className="widgetLgStatus">
                <Skeleton width={80} />
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <Skeleton width={100} />
              </td>
              <td className="widgetLgDate">
                <Skeleton width={80} />
              </td>
              <td className="widgetLgAmount">
                <Skeleton width={60} />
              </td>
              <td className="widgetLgStatus">
                <Skeleton width={80} />
              </td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <Skeleton width={100} />
              </td>
              <td className="widgetLgDate">
                <Skeleton width={80} />
              </td>
              <td className="widgetLgAmount">
                <Skeleton width={60} />
              </td>
              <td className="widgetLgStatus">
                <Skeleton width={80} />
              </td>
            </tr>
          </React.Fragment>
        ) : (
          // Display order data after it is fetched
          orders.slice(0, 5).map((order) => (
            <tr className="widgetLgTr" key={order._id}>
              <td className="widgetLgUser">
                <span className="widgetLgName">{order.userId}</span>
              </td>
              <td className="widgetLgDate">{format(order.createdAt)}</td>
              <td className="widgetLgAmount">₹{order.amount}</td>
              <td className="widgetLgStatus">
                <Button type={order.status} />
              </td>
            </tr>
          ))
        )}
      </table>
    </div>
  );
}
