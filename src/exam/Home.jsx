import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome User!</h1>
      <nav>
        <Link to="/home">Home</Link> | <Link to="/gallery">Book Gallery</Link>
      </nav>
    </div>
  );
};

export default Home;
