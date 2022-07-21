import React, { useContext } from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthActions";
import { Link } from "react-router-dom";
export default function Topbar() {
  const {  dispatch } = useContext(AuthContext);
  const handleLogout=()=>{
    dispatch(logout());
  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
            </div>
            <Link to="/login">
          <div className="topbarIconContainer">
            <button onClick={handleLogout}>Đăng xuất</button> 
          </div>
          
          </Link>
          
        </div>
      </div>
    </div>
  );
}
