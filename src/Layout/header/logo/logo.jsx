import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        className="h-12 m-3"
        src="https://play-lh.googleusercontent.com/jD8waDJPN1yv4OdcB6_ILw9M4kyNPdtgBYtoTiPrYhxA1l4FLSKXXe4kAcDCjmtZmQ4"
        alt="logo"
      />
    </Link>
  );
}

export default Logo;
