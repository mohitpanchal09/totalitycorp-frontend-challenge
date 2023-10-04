import React, { useEffect, useState } from "react";
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { userRequest } from "../../requestMethods";
export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(null);
  const [sales, setSales] = useState(null);
  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch (err) {}
    };
    getIncome();
  }, []);

  useEffect(() => {
    const getSales = async () => {
      try {
        const res = await userRequest.get("orders/sales");
        setSales(res.data);
      } catch (err) {}
    };
    getSales();
  }, []);
  console.log(income);
  return (
    <div className="featured">
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">Revenue</span>
          <div className="featuredMoneyContainer">
            <span className="featurdMoney">₹{income[1]?.total}</span>
            <span className="featuredMoneyRate">
              %{Math.floor(perc)}{" "}
              {perc < 0 ? (
                <ArrowDownward className="featuredIcon negative" />
              ) : (
                <ArrowUpward className="featuredIcon" />
              )}
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
      </div>
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">Sales</span>
          <div className="featuredMoneyContainer">
            <span className="featurdMoney">Rs. 4502</span>
            <span className="featuredMoneyRate">
              -11.4 <ArrowDownward className="featuredIcon negative" />
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
      </div>
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
            <span className="featurdMoney">Rs. 4502</span>
            <span className="featuredMoneyRate">
              -11.4 <ArrowUpward className="featuredIcon" />
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
      </div>
    </div>
  );
}
