import { Alert } from "@mui/material";
import React, { useState, useEffect } from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/hello")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div>
      <Announcement />

      {data ? (
        <Alert
          sx={{
            position: "fixed",
            top: 0,
            left: 10,
            height: 15,
            fontSize: 10,
            alignItems: "center",
            backgroundColor: "#8bc34a",
            color: "black",
            opacity: 0.8,
          }}
          variant="filled"
          severity="info"
          icon={false}
        >
          {data}
        </Alert>
      ) : (
        <></>
      )}
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
