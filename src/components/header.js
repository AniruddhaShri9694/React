import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light HeaderNav">
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link to="/" className="nav-link">Home <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
      <Link to="/Box" className="nav-link">Box<span className="sr-only"></span></Link>
      </li>
      
    </ul>
  </div>
</nav>
  );
}

export default Header;
