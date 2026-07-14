import React from "react";
import "./HomeBlogs.css";

const HomeBlogs = () => {
  return (
    <div>
      <h2>Latest Blogs</h2>
      <p>Here are the latest blog posts...</p>
      <div className="container">
        <div className="item">
          <img src="blog-image.jpg" alt="Blog Image" />
          <h3>Blog Post Title</h3>
        </div>
      </div>
    </div>
  );
};

export default HomeBlogs;
