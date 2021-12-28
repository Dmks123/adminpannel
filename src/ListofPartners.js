import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import axios from "axios";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import profilepic from "./Assets/profilepic.png";
import profilepic2 from "./Assets/profilepic2.png";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AddReferalPopup from "./AddReferalPopup";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AddLeadPopup from "./AddLeadPopup";
import { useParams } from "react-router";
import UserNav from "./UserNav";
export default function ListofCustomer() {
  const [partnerdata, Setpartnerdata] = useState([]);
  const [searchterm, Setsearchterm] = useState("");
  const { Id } = useParams();
  let history = useHistory();
  console.log("REDD", Id);
  useEffect(() => {
    const valid = localStorage.getItem("username");
    if (valid === null) {
      history.push("/login");
    }
    axios
      .get(`https://pure-wave-48602.herokuapp.com/getpartnerdata`)
      .then((responselistpat) => {
        Setpartnerdata(responselistpat.data.partners);
        console.log("Customer data", partnerdata);
      });
  }, []);
  return (
    <div>
      <div>
        <UserNav />
      </div>
      <div className="main">
        <div className="content-tabs">
          <div>
            <div className="ml-3">
              <h3>List Of Partners</h3>
            </div>
            <div className="top_menu_bar">
              <div>
                <Link to="/rpdetails" className="partner_back_btn">
                  <span>
                    <ArrowBackIosNewIcon />
                    Back
                  </span>
                </Link>
              </div>
              <div>
                <div className="d-flex justify-content-around">
                  <div className="search_div" style={{ width: "100%" }}>
                    <SearchIcon />
                    <input
                      type="text"
                      className="top_menu_search"
                      placeholder="Search Here.."
                      onChange={(event) => {
                        Setsearchterm(event.target.value);
                      }}
                    />
                  </div>

                  {/* <button
                    className="delete_btn"
                    data-toggle="modal"
                    data-target=".exampleModal"
                  >
                    <DeleteIcon className="del_icons" />
                    Delete
                  </button> */}
                  <div
                    className="modal fade exampleModal"
                    role="dialog"
                    aria-labelledby="myLargeModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog  modal-dialog-centered ">
                      <div
                        className="modal-content modal_content_whole"
                        style={{ background: "white" }}
                      >
                        <div className="modal-body">
                          <div>
                            <div className="popup_icon_center">
                              <InfoRoundedIcon className="popup_unlinkbankdetails_icon" />
                            </div>
                            <div className="popup_text_center">
                              <span className="popup_addbankdetails_text">
                                Are you sure want to Delete this Partners ?
                              </span>
                            </div>
                            <div className="pt-3 d-flex">
                              <div
                                style={{ width: "50%", textAlign: "center" }}
                              >
                                <button
                                  type="button"
                                  className="popup_btn_unlinkaccount"
                                  // onClick={deletebankdetails}
                                  data-toggle="modal"
                                  data-target=".popup-bank-details-deleted"
                                  data-dismiss="modal"
                                >
                                  Delete
                                </button>
                              </div>
                              <div
                                style={{ width: "50%", textAlign: "center" }}
                              >
                                <button
                                  // type="button"
                                  className="popup_btn_close"
                                  data-dismiss="modal"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sucuesfully deleted */}
                  <div
                    className="modal fade popup-bank-details-deleted"
                    role="dialog"
                    aria-labelledby="myLargeModalLabel"
                    aria-hidden="true"
                    id="myModal"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div
                        className="modal-content modal_content_whole"
                        style={{ background: "white" }}
                      >
                        <div className="modal-body">
                          <div>
                            <div className="popup_icon_center">
                              <CheckCircleRoundedIcon className="popup_addbankdetails_icon" />
                            </div>
                            <div className="popup_text_center">
                              <span className="popup_addbankdetails_text">
                                Lead Deleted Successfully
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal fade popup-bank-details-deleted-1"
                    role="dialog"
                    aria-labelledby="myLargeModalLabel"
                    aria-hidden="true"
                    id="myModal"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div
                        className="modal-content modal_content_whole"
                        style={{ background: "white" }}
                      >
                        <div className="modal-body">
                          <div>
                            <div className="popup_icon_center">
                              <CheckCircleRoundedIcon className="popup_addbankdetails_icon" />
                            </div>
                            <div className="popup_text_center">
                              <span className="popup_addbankdetails_text">
                                Lead Added Successfully
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="table_div">
                <table className="table leaderboard_table">
                  <tbody>
                    <tr>
                      <th>Partner Name</th>
                      <th>Mobile No</th>
                      <th>Partner Id</th>
                      <th>Kyc</th>
                      <th>
                        Rank <ArrowUpwardIcon />
                      </th>
                      <th className="text-center">Actions</th>
                    </tr>

                    {partnerdata != "" ? (
                      partnerdata
                        .filter((cust) => {
                          if (searchterm == "") {
                            return cust;
                          } else if (
                            cust.fullname
                              .toLowerCase()
                              .includes(searchterm.toLowerCase())
                          ) {
                            return cust;
                          }
                        })
                        .map((cust, index) => {
                          return (
                            <tr>
                              <td>
                                {/* <input type="checkbox"/> */}
                                {cust.fullname}
                              </td>
                              <td>{cust.mobile}</td>
                              <td>{cust._id}</td>
                              <td>
                                {cust.verified == true ? (
                                  <button class="verified_btn">Verified</button>
                                ) : (
                                  <button class="pending_btn">Pending</button>
                                )}
                              </td>
                              <td>{cust.partner_rank}</td>
                              <td>
                                <Link
                                  to={`/rpdetailsview/${cust._id}`}
                                  className="admin_panel_viewmore_list"
                                >
                                  View More
                                </Link>
                              </td>
                            </tr>
                          );
                        })
                    ) : (
                      <div>
                        <h3>No records found for Pre Customer </h3>
                      </div>
                    )}
                    {/* <tr className="value_row">
                      <td>
                        <div className="d-flex align-items-center">
                          <img src={profilepic} className="profile_pic" />
                          <span> Devom Lame </span>
                        </div>
                      </td>
                      <td>15000/-</td>
                      <td>4012</td>
                      <td>
                        <button className="admin_lead_package_btn1">
                          Cendrol Plus
                        </button>
                      </td>
                      <td>01/12/2021</td>
                      <td>
                        <Link
                          to="/leadetails"
                          className="admin_panel_viewmore_list"
                        >
                          View More
                        </Link>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
