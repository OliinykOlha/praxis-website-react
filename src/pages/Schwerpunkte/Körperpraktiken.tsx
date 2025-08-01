import "./styles.css";
import img from "../../assets/Körperpraktiken/Körperpraktiken.jpg";
import MyVideo from "..//../assets/Video/istockphoto-1410441629-640_adpp_is.mp4";
import Variant from "../../components/Variants/Variants";
import GridBlock from "../../components/Grid/Grid";

function Körperpraktiken() {
  return (
    <div className="wrapper">
      <div className="hero">
      <div
        className="background"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>

      <div className="overlay">
      <Variant />
      </div>
      </div>
      <video
        className="video"
        controls
        width="640"
        height="400"
        poster="poster.jpg"
        src={MyVideo}
        autoPlay
        loop
      ></video>
      <div className="grid-wrapper">
        <GridBlock />
      </div>
      </div>
    
  );
}

export default Körperpraktiken;
