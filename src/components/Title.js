import React from "react";
// import { ParallaxLayer } from "@react-spring/web";
import { Parallax } from "react-parallax";
import img1 from "../images/bg2.jpg";
import img2 from "../images/bg3.jpg";
import "./Title.css";


function Title() {
  return (
    <>
      <div className="title_container">
      <Parallax strength={-500}>
          <div className="img1">
            <img src={img1} alt="bg1" />
          </div>
        </Parallax>

        <Parallax strength={500}>
        <div className="title">
          Walchand Linux User's Group
          <br />
          <p className="presents">Presents</p>
          <div className="techno_heading">TechnoTweet 2k23</div>
        </div>
        </Parallax>
        <Parallax strength={-500}>
          <div className="img2">
            <img src={img2} alt="bg2" />
          </div>
        </Parallax>
      </div>
    </>
  );
}

export default Title;
