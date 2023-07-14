import React from "react";
import AboutUs from "../About/AboutUs";
import bg from "../../images/bg.jpg"
import "./Home.css"

function Home() {
  return (
    <>
      <div className="imageContainer">
        <img src={bg} style={{ width: "100vw", opacity: "0.5", position: "relative", height: "80vh" }} alt='loading'></img>
        <div class="caption center">Welcome to JEET <br /> A website by RKSS organization to provide free and quality education in a single platform</div>
        {/* <h3>Are you a Student or a Creator</h3> */}
      </div>
      <AboutUs />
    </>
  );
}

export default Home;
