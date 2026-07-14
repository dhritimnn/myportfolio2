import React from "react";
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
    </div>
  );
};

export default HomeBlogs;
