import Variants from "../../components/Variants/Variants";
import './styles.css';
import img from "../../assets/Körperpraktiken/Körperpraktiken.jpg";

function Körperpraktiken() {
  return (
    <div className="wrapper">
      <div className="background"
       style={{
          backgroundImage: `url(${img})`,
        }}
      >  
      </div>
      <Variants />
    </div>
  );
}

export default Körperpraktiken;
