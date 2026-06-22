import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const navLinks = [
  { to: "/simple-concepts", label: "Concepts", type: "Guide" },
  { to: "/partial-derivatives/1", label: "Partials", type: "Guide" },
  { to: "/vector-calculus/1", label: "Vectors", type: "Guide" },
  { to: "/test", label: "Continuity", type: "Tool" },
  { to: "/extreme", label: "Extrema", type: "Tool" },
  { to: "/volumecalculator", label: "Integrals", type: "Tool" },
  { to: "/ai-solver", label: "AI Solver", type: "Tool" },
];

function Header({ darkMode, onToggleDark }) {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <header className="site-header" ref={headerRef}>
      <NavLink className="site-brand" to="/" onClick={() => setMenuOpen(false)}>
        <span className="brand-mark" aria-hidden="true">∂</span>
        <span className="brand-text">
          <span>CalcVoyager</span>
          <small>Multivariable tools</small>
        </span>
      </NavLink>

      <nav className="site-nav" aria-label="Primary navigation">
        {navLinks.map(({ to, label, type }) => (
          <NavLink key={to} to={to} title={type}>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="header-controls">
        <button
          className="theme-toggle"
          onClick={onToggleDark}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? "Light" : "Dark"}
        </button>

        {user ? (
          <div className="header-user">
            <Link to="/dashboard" className="header-avatar" title="Dashboard">
              {user.username[0].toUpperCase()}
            </Link>
          </div>
        ) : (
          <div className="header-auth">
            <Link to="/login" className="header-login">Sign in</Link>
            <Link to="/signup" className="header-signup">Sign up</Link>
          </div>
        )}

        <button
          className={`hamburger${menuOpen ? " hamburger--open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`mobile-nav${menuOpen ? " mobile-nav--open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navLinks.map(({ to, label }) => (
          <NavLink key={to} to={to} onClick={() => setMenuOpen(false)}>
            {label}
          </NavLink>
        ))}
        <div className="mobile-nav-divider" />
        {user ? (
          <>
            <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
            <button className="mobile-nav-logout" onClick={() => { logout(); setMenuOpen(false); }}>
              Sign out
            </button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={() => setMenuOpen(false)}>Sign in</Link>
            <Link to="/signup" onClick={() => setMenuOpen(false)}>Sign up</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;