import Variants from "../../components/Variants/Variants";
import "./styles.css";
import img from "../../assets/Körperpraktiken/Körperpraktiken.jpg";
import MyVideo from "..//../assets/Video/istockphoto-1410441629-640_adpp_is.mp4";

function Körperpraktiken() {
  return (
    <div className="wrapper">
      <div
        className="background"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>

      <div className="overlay">
      <Variants />
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
      </div>
    
  );
}

export default Körperpraktiken;
