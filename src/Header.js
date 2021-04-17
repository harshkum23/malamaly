import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { Dropdown } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
import { Avatar } from "@material-ui/core";
import Imageone from "./Imageone";

function Header() {
  return (
    <nav className="header">
      <span className="header__logo">Logo Here</span>

      {/* Seacrh box*/}
      <a href="#" className="header__searchLink">
        Categories
      </a>
      <input type="text" className="header__searchInput" />
      <SearchIcon className="header__searchIcon" />

      <Link>
        <span className="header__link">My Account </span>
        <span className="header__pink">Sign in</span>
      </Link>
      <Link>
        <span className="header__rink">order </span>
        <span className="header__tink">Track</span>
      </Link>
      <Link>
        <span className="header__tink">Your order </span>
      </Link>
    </nav>
  );
}

export default Header;
