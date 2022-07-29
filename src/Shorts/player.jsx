import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./shorts.css";

import codiGoIcon from "../resources/codiGo.png";
import searchIcon from "../resources/search.png";
import menuIcon from "../resources/menuRes.png";
const PlayerBox = () => {
  let [menu, setMenu] = useState(false);

  let urlParameter = window.location.href.split("?");

  let IDRequested = urlParameter[1];

  return (
    <div className="PlayerBox">
      <div className="dashboard-navbar">
        <div className="dashboard-icon">
          <Link to="/">
            <img className="dashboard-pic" src={codiGoIcon}></img>
          </Link>
        </div>
        <div className="dashboard-links">
          <ul>
            <Link to="/all-courses">
              <li>All Courses</li>
            </Link>
            <Link to="/partnerships">
              <li>Colabs</li>
            </Link>

            
           
            <a href="https://pixta-codigo.netlify.app" target="_blank">
              <li>Pixta</li>
            </a>
            <Link to="/dashboard">
              <li id="DashBoard">
                <strong>Dashboard</strong>
              </li>
            </Link>
          </ul>
        </div>
        <div className="res-NavButton">
          <img src={menuIcon} onClick={() => setMenu(!menu)}></img>
          <div
            style={{ display: menu ? "flex" : "none" }}
            data-aos="fade-up"
            data-aos-duration="5000"
          >
            <ul>
              <a href="https://community-codigo.netlify.app" target="_blank">
                {" "}
                <li>Community</li>{" "}
              </a>
              <a href="https://ide-codigo.netlify.app" target="_blank">
                <li>Kōdo</li>
              </a>
              <a href="https://pixta-codigo.netlify.app" target="_blank">
                <li>Pixta</li>
              </a>
              <Link to="/dashboard">
                <li id="DashBoard">
                  <strong>Dashboard</strong>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="VideoBox">
        <iframe
          src={`https://www.youtube.com/embed/${IDRequested}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default PlayerBox;
