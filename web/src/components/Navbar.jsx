import { Link, useLocation } from "react-router-dom";
import { Code2, Trophy, Terminal, LogIn } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Problems", path: "/problems" },
    { name: "Leaderboard", path: "/leaderboard" },
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <div className="logo-icon">
          <Code2 size={21} />
        </div>
        <span>BYTE<span>BATTLES</span></span>
      </Link>

      <div className="nav-links">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={location.pathname === link.path ? "active" : ""}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <Link to="/login" className="login-btn">
        <LogIn size={17} />
        Sign In
      </Link>
    </nav>
  );
}