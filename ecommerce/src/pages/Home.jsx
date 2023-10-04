import Slider from "../components/Slider";
import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../Newsletter";
import Footer from "../components/Footer";
import CategoryItem from "../components/CategoryItem";
import Product from "../components/Product";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
