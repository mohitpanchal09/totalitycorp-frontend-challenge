import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const NoProducts = styled.div`
  width: 100%;
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://switch-backend-v1.vercel.app/api/products?category=${cat}`
            : "https://switch-backend-v1.vercel.app/api/products"
        );
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        setLoading(true);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {loading ? (
        // Display skeleton loading view if loading is true
        Array.from({ length: 7 }).map((_, index) => (
          <div key={index}>
            <Skeleton width={340} height={320} style={{ margin: "20px 0px" }} />
          </div>
        ))
      ) : // Display products after data is fetched
      cat && filteredProducts.length > 0 ? (
        filteredProducts.map((item) => <Product item={item} key={item.id} />)
      ) : cat && filteredProducts.length === 0 ? (
        <NoProducts>No products</NoProducts>
      ) : (
        products
          .slice(0, 8)
          .map((item) => <Product item={item} key={item.id} />)
      )}
    </Container>
  );
};

export default Products;
