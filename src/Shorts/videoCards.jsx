import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db2 } from "../fire2";
import { db } from "../fireBase";

import load from './loading.gif'
import "./shorts.css";
const VideoCards = (props) => {
  let userDetails = JSON.parse(localStorage.getItem("User"));
  let [secondVid, setSecond] = useState(props.Name);

  const AddWatchHistory = (id) => {
    // db.collection(`Recommendations`)
    //   .doc(userDetails.email)
    //   .set({
    //     email: userDetails.email,
    //   })
    //   .then(() => {})
    //   .catch((error) => {
    //     alert(error.message);
    //   });
    // db.collection(`Recommendations/${userDetails.email}/WatchHistory`)
    //   .doc(props.id)
    //   .set({
    //     VideoId: props.id,
    //     Thumbnail: props.Thumbnail,
    //     Category: props.Category,
    //     Name: props.Name,
    //     Channel: props.Channel,
    //     VidLink: props.VidLink,
    //     Static: props.Static,
    //   })
    //   .then(() => {})
    //   .catch((error) => {
    //     alert(error.message);
    //   });

    db2
      .collection(`WatchHistory`)
      .doc("codigo")
      .get()
      .then((doc) => {
        {
          let InArr = doc.data().lastVideo;
          setSecond(InArr);
          db2.collection("WatchHistory").doc("codigo").set({ second: InArr });
          db2
            .collection("WatchHistory")
            .doc("codigo")
            .update({ lastVideo: props.Name });
        }
      });

    // db.collection(`Recommendations/${userDetails.email}/Recommended`)
    //   .doc(props.id)
    //   .set({
    //     VideoId: props.id,
    //     Thumbnail: props.Thumbnail,
    //     Category: props.Category,
    //     Name: props.Name,
    //     Channel: props.Channel,
    //     VidLink: props.VidLink,
    //     Static: props.Static,
    //   })
    //   .then(() => {})
    //   .catch((error) => {
    //     alert(error.message);
    //   });
  };

  let [imgg, si] = useState(props.Static);
  return (
    <Link
      to={`/VideoPlayer?${props.VidLink}`}
      onClick={() => AddWatchHistory(props.id)}
      className="vidvid"
    >
      <div className="PVideoCard">
        <img
          src={load}
        //   onMouseOver={() => si(props.Thumbnail)}
        //   onMouseLeave={() => si(props.Static)}
        />
        <h1>{props.Name}</h1>
        <p
          style={{
            color:
              props.Channel == "FreeCodeCamp"
                ? "Green"
                : props.Channel == "Edureka"
                ? "Blue"
                : props.Channel == "SimpliLearn"
                ? "Aqua"
                : props.Channel == "ProgrammingWithMosh"
                ? "Orange"
                : props.Channel == "Apna College"
                ? "DarkGoldenRod"
                : props.Channel == "TraversyMedia"
                ? "Purple"
                : "",
          }}
        >
          {props.Channel}
        </p>
        <p className="CategoryVid">{props.Category}</p>
      </div>
    </Link>
  );
};

export default VideoCards;
