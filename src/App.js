import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import PowerIcon from "@material-ui/icons/Power";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./App.css";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SatelliteIcon from "@material-ui/icons/Satellite";
import PlayForWorkIcon from "@material-ui/icons/PlayForWork";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import BuildIcon from "@material-ui/icons/Build";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import BrushIcon from "@material-ui/icons/Brush";
import CallToActionIcon from "@material-ui/icons/CallToAction";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";

import AmpStoriesIcon from "@material-ui/icons/AmpStories";
import Imageone from "./Imageone";
import Imagetwo from "./Imagetwo";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Router path="/Login"></Router>
          {/*This is the defaukt route,*/}
          <Route path="/">
            <Header />
            <div className="sidebar">
              <SidebarOption Icon={PowerIcon} text="Power Tool" />
              <SidebarOption
                Icon={DriveEtaIcon}
                text="Automative Maintenace and Accessories "
              />
              <SidebarOption Icon={SatelliteIcon} text="Solar" />
              <SidebarOption Icon={PlayForWorkIcon} text="Office Supplies" />
              <SidebarOption
                Icon={FilterNoneIcon}
                text="Material handling and Packaging"
              />
              <SidebarOption Icon={InvertColorsIcon} text="Pumps" />
              <SidebarOption Icon={BuildIcon} text="Handle Tool" />
              <SidebarOption
                Icon={LocalHospitalIcon}
                text="Medical Supplies and Equipments"
              />
              <SidebarOption
                Icon={BuildIcon}
                text="Testing and Measuring Instruments"
              />
              <SidebarOption
                Icon={BuildIcon}
                text="Agriculture gardening & Landscaping"
              />
              <SidebarOption Icon={BrushIcon} text="Cleaning" />
              <SidebarOption Icon={CallToActionIcon} text="Safety" />
              <SidebarOption Icon={PowerIcon} text="Electrical" />
              <SidebarOption Icon={InvertColorsIcon} text="Plumbing" />
              <SidebarOption Icon={LocalCafeIcon} text="Lubricants and Oils" />
              <SidebarOption Icon={AmpStoriesIcon} text="Packaging Material" />
              <a href="#" className="a">
                Categories
              </a>
              <div className="b">
                <img src={Imagetwo} />
                <span className="c">Product</span>
                <span className="d">Name</span>
                <p className="f">Rs999</p>
                <h3 className="g">Rs499</h3>
              </div>
            </div>
          </Route>

          <Route path="m">
            <Sidebar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

{
  /*We need React_Router */
}
{
  /* localhost.com/ */
}
{
  /*localhost.com/checkout*/
}
{
  /*localhost.com/login*/
}
export default App;
