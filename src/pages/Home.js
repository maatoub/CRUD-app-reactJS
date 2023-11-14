import React from "react";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
