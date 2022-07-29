import React, { useEffect, useState } from "react";
import codigoIcon from "../resources/codiGo.png";

import "./drive.css";
import cloudImage from "../resources/cloud.gif";
import { db } from "../fireBase";
import { Link } from "react-router-dom";

const MyDrive = () => {
  let [certificateModal, setCertificateModal] = useState(false);

  let [History, setHistory] = useState([]);
  let userDetails = JSON.parse(localStorage.getItem("User"));

  db.collection(`Recommendations/${userDetails.email}/WatchHistory`)
    .get()
    .then((querySnapshot) => {
      let InArr = [];
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        InArr.push(data);
      });
      setHistory(InArr);
    });

  return (
    <div className="driveContainer" data-aos="fade-in" data-aos-delay="200">
      <h1 className="hh">Partner Collaboration Watch History</h1>
      <div className="InitialShow">
        {History.map((vid) => (
          
          <Link to={`/VideoPlayer?${vid.VidLink}`}>
            <div className="HistoryVid">
              <img src={vid.Thumbnail} />
              <h3>{vid.Name}</h3>
              <p>{vid.Channel}</p>
              <p>{vid.Category}</p>
            </div>
          </Link>
        ))}
        {/* <h1>Welcome to códiGo Cloud </h1>
        <h2>Launching soon</h2>
        <button
          onClick={() => {
            setCertificateModal(true);
          }}
          className='QuizStartButton'>
          {" "}
          Know More
        </button>
      </div>
      <div className='DriveModal' style={certificateModal ? {} : { visibility: "hidden" }}>
        <img src={codigoIcon} />
        <h2>códiGo Cloud is an announced feature and will be launched at proposed códiGo Event October 2021</h2>
        <br /> <h2>It is currently under Alpha Testing</h2>
        <br />
        <h2>We at códiGo thrive to make the best products and give you the best services as soon as possible. </h2>
        <button onClick={() => setCertificateModal(false)} className='QuizStartButton'>
          Stay Tuned
        </button> */}
      </div>

      <img src={cloudImage} id="cloudImage" />
    </div>
  );
};

export default MyDrive;
