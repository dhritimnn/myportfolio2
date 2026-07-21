import React from "react";
import { Link } from "react-router-dom";
import "./HomeBlogs.css";

const HomeBlogs = () => {
  return (
    <div className="home-blogs">
      <div className="title">
        <h2>Latest Blogs</h2>
        <hr />
      </div>
      <div className="container">
        <div className="item">
          <img src="https://picsum.photos/200/160" alt="Blog Image" />
          <div className="item-txt">
            <p>Blog Post Title</p>
          </div>
        </div>
        <div className="item">
          <img src="https://picsum.photos/200/160" alt="Blog Image" />
          <div className="item-txt">
            <p>Blog Post Title</p>
          </div>
        </div>
        <div className="item">
          <img src="https://picsum.photos/200/160" alt="Blog Image" />
          <div className="item-txt">
            <p>Blog Post Title</p>
          </div>
        </div>
      </div>
      <Link to="/">View More</Link>
    </div>
  );
};

export default HomeBlogs;
