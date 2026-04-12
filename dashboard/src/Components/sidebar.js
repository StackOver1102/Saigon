import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <Link to="/" className="brand-wrap">
            <img
              src="https://raw.githubusercontent.com/nguyendinhtu2002/adm/e6984272c00c7b96d21df94d647e766ca9c70849/public/images/logo.svg"
              style={{ height: "46" }}
              className="logo"
              alt="Ecommerce dashboard template"
            />
          </Link>
          <div>
            <button className="btn btn-icon btn-aside-minimize">
              <i className="text-muted fas fa-stream"></i>
            </button>
          </div>
        </div>

        <nav>
          <ul className="menu-aside">

            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/events"
              >
                <i className="icon fas fa-shopping-bag"></i>
                <span className="text">Events</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/groups"
              >
                <i className="icon fas fa-bags-shopping"></i>
                <span className="text">Group</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/menu"
              >
                <i className="icon fas fa-user"></i>
                <span className="text">Menu</span>
              </NavLink>
            </li>

          </ul>
          <br />
          <br />
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
