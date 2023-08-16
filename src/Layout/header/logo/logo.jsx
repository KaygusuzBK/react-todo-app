import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="logo">
      <img
        className="h-16 w-16"
        src="https://cdn1.ftimg.com/images/logos/big/en_US/country-indonesia-logo.png"
        alt="logo"
      />
    </Link>
  );
}

export default Logo;
