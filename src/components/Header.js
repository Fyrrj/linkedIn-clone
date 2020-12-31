import React from "react";
import "../Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import HeaderOption from "./HeaderOption";
import WorkIcon from "@material-ui/icons/Work";
import MessageIcon from "@material-ui/icons/Chat";
import NotificationIcon from "@material-ui/icons/Notifications";
import { logout, selectUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon className="header__zoom" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={WorkIcon} title="Jobs" />
        <HeaderOption Icon={MessageIcon} title="Messages" />
        <HeaderOption Icon={NotificationIcon} title="Notifications" />
        <HeaderOption avatar={true} title="me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
