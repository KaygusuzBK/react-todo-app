import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="logo">
      <img
        className="h-10 m-2"
        src="https://play-lh.googleusercontent.com/jD8waDJPN1yv4OdcB6_ILw9M4kyNPdtgBYtoTiPrYhxA1l4FLSKXXe4kAcDCjmtZmQ4"
        alt="logo"
      />
    </Link>
  );
}

export default Logo;
