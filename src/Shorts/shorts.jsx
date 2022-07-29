import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./shorts.css";

import codiGoIcon from "../resources/codiGo.png";
import searchIcon from "../resources/search.png";
import menuIcon from "../resources/menuRes.png";
import { db } from "../fireBase";
import { db2 } from "../fire2";

import VideoCards from "./videoCards";

import randomizer from "../randomizer";
import Footer from "../footer";

const ShortsPage = () => {
  let [menu, setMenu] = useState(false);

  let [RecommendedVideos, setRecommend] = useState([]);
  let [WebDevelopment, setWebDev] = useState([]);
  let [MachineLearning, setML] = useState([]);
  let [DataScience, setDS] = useState([]);
  let [InterviewTraining, setInterview] = useState([]);

  let userDetails = JSON.parse(localStorage.getItem("User"));

  const PageSet = () => {
    db2
      .collection(`Recommendations`)
      .doc("codigo")
      .get()
      .then((doc) => {
        {
          let InArr = doc.data().list;

          if (InArr.length == 0) {
          } else {
            setRecommend(InArr);
          }
        }
      });
    db2
      .collection(`Videos`)
      .doc("interview")
      .get()
      .then((doc) => {
        {
          let InArr = doc.data().list;

          if (InArr.length == 0) {
          } else {
            setInterview(InArr);
          }
        }
      });
    db2
      .collection(`Videos`)
      .doc("ml")
      .get()
      .then((doc) => {
        {
          let InArr = doc.data().list;

          if (InArr.length == 0) {
          } else {
            setML(InArr);
          }
        }
      });
    db2
      .collection(`Videos`)
      .doc("ds")
      .get()
      .then((doc) => {
        {
          let InArr = doc.data().list;

          if (InArr.length == 0) {
          } else {
            setDS(InArr);
          }
        }
      });
    db2
      .collection(`Videos`)
      .doc("web")
      .get()
      .then((doc) => {
        {
          let InArr = doc.data().list;

          if (InArr.length == 0) {
          } else {
            setWebDev(InArr);
          }
        }
      });
    
    // db.collection("Partners")
    //   .get()
    //   .then((querySnapshot) => {
    //     let Web = [];
    //     let ML = [];
    //     let DS = [];
    //     let IntT = [];
    //     let InArr = [];

    //     querySnapshot.forEach((doc) => {
    //       let data = doc.data();
    //       if (data.Category == "WebDevelopment") Web.push(data);
    //       if (data.Category == "DataScience") DS.push(data);
    //       if (data.Category == "MachineLearning") ML.push(data);
    //       if (data.Category == "InterviewTraining") IntT.push(data);
    //     });
    //     setWebDev(randomizer(Web));
    //     setML(randomizer(ML));
    //     setDS(randomizer(DS));
    //     setInterview(randomizer(IntT));
    //     InArr = DS.concat(ML).concat(Web).concat(IntT);
    //     setRecommend(randomizer(InArr));
    //   });
  };

  useEffect(() => {
    setTimeout(PageSet, 3);
  }, []);

  // let VidArray = [
  //   {
  //     VideoId: "InterviewJava",
  //     Category: "InterviewTraining",
  //     Name: "Java Interview",
  //     Channel: "Edureka",
  //     VidLink: "oYXivKMSEqM",
  //     Thumbnail:
  //       "https://drive.google.com/uc?export=download&id=1nb8BICNfMtQUuFUF3grpZbnuhxpw2ad-",
  //     Static:
  //       "https://drive.google.com/uc?export=download&id=1nb8BICNfMtQUuFUF3grpZbnuhxpw2ad-",
  //   },
  //   {
  //     VideoId: "InterviewSQL",
  //     Category: "InterviewTraining",
  //     Name: "SQL Interview",
  //     Channel: "Edureka",
  //     VidLink: "WEpWH1NHGU",
  //     Thumbnail:
  //       "https://drive.google.com/uc?export=download&id=16P9beyNsOV1XDAwed-Ouc84tRYKUe-Wx",
  //     Static:
  //       "https://drive.google.com/uc?export=download&id=16P9beyNsOV1XDAwed-Ouc84tRYKUe-Wx",
  //   },
  //   {
  //     VideoId: "InterviewDBMS",
  //     Category: "InterviewTraining",
  //     Name: "DBMS Interview",
  //     Channel: "Edureka",
  //     VidLink: "BHmoFa-YSzw",
  //     Thumbnail:
  //       "https://drive.google.com/uc?export=download&id=189s3rqC3Zc_UflrQzGzTZEiN_d3UD9Mt",
  //     Static:
  //       "https://drive.google.com/uc?export=download&id=189s3rqC3Zc_UflrQzGzTZEiN_d3UD9Mt",
  //   },
  //   {
  //     VideoId: "InterviewC",
  //     Category: "InterviewTraining",
  //     Name: "C Programming Interview",
  //     Channel: "Edureka",
  //     VidLink: "MJ2N2CjHb4U",
  //     Thumbnail:
  //       "https://drive.google.com/uc?export=download&id=1l0YtV0u_5nZuabSpfXNwFbDlelZX_huE",
  //     Static:
  //       "https://drive.google.com/uc?export=download&id=1l0YtV0u_5nZuabSpfXNwFbDlelZX_huE",
  //   },

  //   {
  //     VideoId: "InterviewSkills",
  //     Category: "InterviewTraining",
  //     Name: "Interview Prep",
  //     Channel: "Edureka",
  //     VidLink: "12Prc9ZA81w",
  //     Thumbnail:
  //       "https://drive.google.com/uc?export=download&id=1Sry89Pq3MpXI4QQpbd-RsuarcAj8vyLx",
  //     Static:
  //       "https://drive.google.com/uc?export=download&id=1Sry89Pq3MpXI4QQpbd-RsuarcAj8vyLx",
  //   },
  //   {
  //     VideoId: "InterviewReactJS",
  //     Category: "InterviewTraining",
  //     Name: "ReactJs Interview",
  //     Channel: "Edureka",
  //     VidLink: "9exK6rLAR7g",
  //     Thumbnail:
  //       "https://drive.google.com/uc?export=download&id=1y3bvojW0Z8Ug7sqAel9LY8aJDfWPR_cJ",
  //     Static:
  //       "https://drive.google.com/uc?export=download&id=1y3bvojW0Z8Ug7sqAel9LY8aJDfWPR_cJ",
  //   },
  //   {
  //     VideoId: "InterviewPython",
  //     Category: "InterviewTraining",
  //     Name: "Python Interview",
  //     Channel: "Edureka",
  //     VidLink: "B_17_RORoiI",
  //     Thumbnail:
  //       "https://drive.google.com/uc?export=download&id=11W7Pw6CCPfwMlUSgJsuibp1yf5PnmR8T",
  //     Static:
  //       "https://drive.google.com/uc?export=download&id=11W7Pw6CCPfwMlUSgJsuibp1yf5PnmR8T",
  //   },
  //   {
  //     VideoId: "InterviewDSA",
  //     Category: "InterviewTraining",
  //     Name: "DSA Interview",
  //     Channel: "Edureka",
  //     VidLink: "ZV1GwGA1QlY",
  //     Thumbnail:
  //       "https://drive.google.com/uc?export=download&id=1RAKvjwAKGH6sf_rsRksZRhI3JaeISN3B",
  //     Static:
  //       "https://drive.google.com/uc?export=download&id=1RAKvjwAKGH6sf_rsRksZRhI3JaeISN3B",
  //   },

  //   {
  //     VideoId: "InterviewNodeJS",
  //     Category: "InterviewTraining",
  //     Name: "NodeJS Interview",
  //     Channel: "Edureka",
  //     VidLink: "6WYEmUVhiwQ",
  //     Thumbnail:
  //       "https://drive.google.com/uc?export=download&id=1cdZpOSKxjv4mqwJSHE4B7FX1f2uk2ab1",
  //     Static:
  //       "https://drive.google.com/uc?export=download&id=1cdZpOSKxjv4mqwJSHE4B7FX1f2uk2ab1",
  //   },
  //   {
  //     VideoId: "InterviewML",
  //     Category: "InterviewTraining",
  //     Name: "ML Interview",
  //     Channel: "Edureka",
  //     VidLink: "t6gOpFLt-Ks",
  //     Thumbnail:
  //       "https://drive.google.com/uc?export=download&id=17ZGe__sruHDs9bT7_BHIUEaU8kXfeSRi",
  //     Static:
  //       "https://drive.google.com/uc?export=download&id=17ZGe__sruHDs9bT7_BHIUEaU8kXfeSRi",
  //   },
  //   {
  //     VideoId: "InterviewHTML",
  //     Category: "InterviewTraining",
  //     Name: "HTML Interview",
  //     Channel: "Edureka",
  //     VidLink: "WzAgkVmVHQw",
  //     Thumbnail:
  //       "https://drive.google.com/uc?export=download&id=1CdmNDvZUgWWld-3gnfUBp6ByStSrrvVq",
  //     Static:
  //       "https://drive.google.com/uc?export=download&id=1CdmNDvZUgWWld-3gnfUBp6ByStSrrvVq",
  //   },
  //   {
  //     VideoId: "InterviewCSS",
  //     Category: "InterviewTraining",
  //     Name: "CSS Interview",
  //     Channel: "Edureka",
  //     VidLink: "-njOpdpIpGI",
  //     Thumbnail:
  //       "https://drive.google.com/uc?export=download&id=10V9dxCCFSDq2O2Pwrcpo8yA2AsieTI9H",
  //     Static:
  //       "https://drive.google.com/uc?export=download&id=10V9dxCCFSDq2O2Pwrcpo8yA2AsieTI9H",
  //   },
  //   {
  //     VideoId: "InterviewJavascript",
  //     Category: "InterviewTraining",
  //     Name: "Javascript Interview",
  //     Channel: "Edureka",
  //     VidLink: "9rmL_DsqAZQ",
  //     Thumbnail:
  //       "https://drive.google.com/uc?export=download&id=1N_JZeDbOtNnoO28qFg3OVQifOwuaxZU7",
  //     Static:
  //       "https://drive.google.com/uc?export=download&id=1N_JZeDbOtNnoO28qFg3OVQifOwuaxZU7",
  //   },
  // ];
  // let Asach = () => {
  //   VidArray.forEach((props) => {
  //     db.collection(`Partners`)
  //       .doc(props.VideoId)
  //       .set({
  //         VideoId: props.VideoId,
  //         Thumbnail: props.Thumbnail,
  //         Category: props.Category,
  //         Name: props.Name,
  //         Channel: props.Channel,
  //         VidLink: props.VidLink,
  //         Static: props.Static,
  //       })
  //       .then(() => {})
  //       .catch((error) => {
  //         alert(error.message);
  //       });
  //   });
  // };

  let [partner, setpartner] = useState("WebDevelopment");
  let [alerty, setAlert] = useState(false);
  return (
    <div className="MainHolder">
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

            <a href="https://community-codigo.netlify.app" target="_blank">
              {" "}
              <li>Community</li>{" "}
            </a>

            {/* <a href="https://ide-codigo.netlify.app" target="_blank">
              <li>Kōdo</li>
            </a> */}
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
      <div className="MainBox">
        <div className="ShortContent">
          <h5>códiGo Partner Programme</h5>
          {/* <button onClick={() => Asach()}>Try</button> */}
          <h3>Videos to Get You Started</h3>
          <div className="RecommendedVideos">
            {console.log(RecommendedVideos)}
            {RecommendedVideos.slice(0, 8).map((vid) => (
              <VideoCards
                id={vid.VideoId}
                Thumbnail={vid.Thumbnail}
                Category={vid.Category}
                Name={vid}
                Channel={vid.Channel}
                VidLink={vid.VidLink}
                Static={vid.Static}
              />
            ))}
          </div>
          <div className="Rate">
            <h4>How Useful are our Recommendations</h4>
            <div>
              <h4 className="Box" onClick={() => setAlert(true)}>
                1
              </h4>
              <h4 className="Box" onClick={() => setAlert(true)}>
                2
              </h4>
              <h4 className="Box" onClick={() => setAlert(true)}>
                3
              </h4>
              <h4 className="Box" onClick={() => setAlert(true)}>
                4
              </h4>
              <h4 className="Box" onClick={() => setAlert(true)}>
                5
              </h4>
            </div>
            <p>
              {alerty
                ? "Thank you for your response. We will keep improving"
                : ""}
            </p>
          </div>
          <br />
          <br />
          <br />
          <br />

          <h3>Collaboration Resources</h3>
          <div className="CategorySelect">
            <h4
              onClick={() => setpartner("WebDevelopment")}
              style={{
                color: partner == "WebDevelopment" ? "aqua" : "",
                borderColor: partner == "WebDevelopment" ? "aqua" : "",
              }}
            >
              Web Development
            </h4>
            <h4
              onClick={() => setpartner("DataScience")}
              style={{
                color: partner == "DataScience" ? "aqua" : "",
                borderColor: partner == "DataScience" ? "aqua" : "",
              }}
            >
              {" "}
              Data Science
            </h4>
            <h4
              style={{
                color: partner == "MachineLearning" ? "aqua" : "",
                borderColor: partner == "MachineLearning" ? "aqua" : "",
              }}
              onClick={() => setpartner("MachineLearning")}
            >
              Machine Learning
            </h4>
            <h4
              style={{
                color: partner == "InterviewTraining" ? "aqua" : "",
                borderColor: partner == "InterviewTraining" ? "aqua" : "",
              }}
              onClick={() => setpartner("InterviewTraining")}
            >
              Interview Training
            </h4>
          </div>
          {partner == "WebDevelopment" && (
            <div className="RecommendedVideos">
              {WebDevelopment.map((vid) => (
                <VideoCards
                  id={vid.VideoId}
                  Thumbnail={vid.Thumbnail}
                  Category={vid.Category}
                  Name={vid}
                  Channel={vid.Channel}
                  VidLink={vid.VidLink}
                  Static={vid.Static}
                />
              ))}
            </div>
          )}
          {partner == "MachineLearning" && (
            <div className="RecommendedVideos">
              {MachineLearning.map((vid) => (
                <VideoCards
                  id={vid.VideoId}
                  Thumbnail={vid.Thumbnail}
                  Category={vid.Category}
                  Name={vid}
                  Channel={vid.Channel}
                  VidLink={vid.VidLink}
                  Static={vid.Static}
                />
              ))}
            </div>
          )}
          {partner == "DataScience" && (
            <div className="RecommendedVideos">
              {DataScience.map((vid) => (
                <VideoCards
                  id={vid.VideoId}
                  Thumbnail={vid.Thumbnail}
                  Category={vid.Category}
                  Name={vid}
                  Channel={vid.Channel}
                  VidLink={vid.VidLink}
                  Static={vid.Static}
                />
              ))}
            </div>
          )}
          {partner == "InterviewTraining" && (
            <div className="RecommendedVideos">
              {InterviewTraining.map((vid) => (
                <VideoCards
                  id={vid.VideoId}
                  Thumbnail={vid.Thumbnail}
                  Category={vid.Category}
                  Name={vid}
                  Channel={vid.Channel}
                  VidLink={vid.VidLink}
                  Static={vid.Static}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShortsPage;
