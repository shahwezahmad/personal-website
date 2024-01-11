import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbarItemContainer">
        <div className="navbarLogo">
          <img src="" alt="" />
        </div>

        <div className="navItemListContainer">
          <ul className="navItemList">
            <Link to="/projects">
              <li className="navItem">Projects</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
