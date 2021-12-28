import React, { useEffect, useState } from "react";
import "./dashboard.css";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import profilepic from "./Assets/profilepic.png";
import profilepic2 from "./Assets/profilepic2.png";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AddReferalPopup from "./AddReferalPopup";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Link } from "react-router-dom";
import AdminNav from "./AdminNav";
export default function Dashboard() {
  let history = useHistory();
  useEffect(() => {
    const valid = localStorage.getItem("email");
    console.log("dsdsdsdsdsds", valid);
    if (valid === null) {
      history.push("/login");
    }
  });
  return (
    <div>
      <div>
        <AdminNav />
      </div>
      <div className="main">
        <div className="content-tabs">
          <div>
            <div className="top_menu_bar">
              <div>
                <h4>Dashboard</h4>
              </div>
            </div>
            <div className="mt-3">
              <div className="table_div"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
