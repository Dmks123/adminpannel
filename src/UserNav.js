import React from "react";
import profilepic from "./Assets/profilepic.png";
import PieChartIcon from "@mui/icons-material/PieChart";
import GroupIcon from "@mui/icons-material/Group";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AddReferalPopup from "./AddReferalPopup";
import { useHistory } from "react-router-dom";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Link } from "react-router-dom";
import adminprofile from "./Assets/adminprofile.png";
import LogoutIcon from "@mui/icons-material/Logout";
export default function UserNav() {
  let history = useHistory();
  function logout() {
    localStorage.removeItem("email");
    history.push("/login");
  }
  return (
    <div>
      <div className="sidenav">
        <div>
          <div className="d-flex">
            <div>
              <img src={adminprofile} className="profile_pic_sidenav" />
            </div>
            <div className="p-2 profile_details">
              <span>Robert Fox </span>
              <p className="mb-0">robert12@gmail.com</p>
            </div>
          </div>
          <div className="pt-5">
            <div className="">
              <Link to="/dashuser" className="side_menu_dashboardbtn">
                <PieChartIcon className="" />
                Dashboard
              </Link>
            </div>
          </div>

          <div className="mt-3">
            <Link to="/listofpartners" className="side_menu_dashboardbtn">
              <PieChartIcon className="" />
              List of Partners
            </Link>
          </div>
          <div className="pt-3">
            {/* <Link to="/login" className="side_menu_dashboardbtn1" onClick={logout}> */}
            <div onClick={logout} className="side_menu_dashboardbtn1">
              <LogoutIcon />
              Logout
            </div>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
