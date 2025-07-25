import './styles.css';

const PhoneButton = () => {
  return (
  <a href="tel:+00033600" className="phone-button">
    <span className="phone-number">000 33600</span>
    <span className="phone-icon">
         <i className="bi bi-telephone-fill"></i>
    </span>

  </a>
  )
};

export default PhoneButton;
