import '../CSS/Footer.css';

const Footer = (props) => {
  const { text } = props;

  return (
    <div className="tjah">
      <hr />
      <p className="contactInfo">{text}</p>
    </div>
  );
};

export default Footer;
