import AdminNav from "./AdminNav";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import profilepic from "./Assets/profilepic.png";
import profilepic2 from "./Assets/profilepic2.png";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AddReferalPopup from "./AddReferalPopup";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FileTesting from "./FileTesting";
export default function RefPartners() {
  const [refdata, Setrefdata] = useState([]);
  const [cpdata, Setcpdata] = useState([]);
  const [searchterm, Setsearchterm] = useState("");
  // const [idforleaddetails, Setidforleaddetails] = useState([]);
  let history = useHistory();
  useEffect(() => {
    const valid = localStorage.getItem("email");
    if (valid === null) {
      history.push("/login");
    }
    axios
      .get(`https://pure-wave-48602.herokuapp.com/rppartners`)
      .then((rep) => {
        Setrefdata(rep.data.RPdata);
        // SetIdforleaddetails(rep.data.RPdata._id);
        console.log("repdata", refdata);
      });
  }, []);

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
                <h4>List of Referal Partners</h4>
              </div>
              <div>
                <div className="d-flex justify-content-around">
                  <div className="search_div">
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
                  <button
                    className="add_btn"
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg_ref3"
                  >
                    <AddIcon className="search_icons" />
                    Add
                  </button>
                  <div
                    className="modal fade bd-example-modal-lg_ref3"
                    role="dialog"
                    aria-labelledby="myLargeModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg modal-dialog-centered  ">
                      <div
                        className="modal-content modal_content_whole"
                        style={{ background: "white" }}
                      >
                        {/*  */}
                        <div className="modal-body">
                          <div className="pb-3">
                            <span className="add_hot_lead_label">
                              {/* <LocalFireDepartmentIcon
                        style={{
                          color: "red",
                        }}
                      /> */}
                              Add Referal Partner
                            </span>
                            <span
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                              id="CloseAddHotLeadPopup"
                              style={{
                                background: "transparent",
                                float: "right",
                                color: "red",
                              }}
                            >
                              <span aria-hidden="true">X Close</span>
                            </span>
                          </div>
                          <div className="row">
                            {" "}
                            <div className="col-md-5 col-5 d-flex align-items-center justify-content-center">
                              <FileTesting />
                            </div>
                            <div className="col-md-1 col-1 d-flex align-items-center justify-content-center flex-column">
                              <div
                                style={{
                                  height: "200px",
                                  border: "1px solid #969696",
                                }}
                              ></div>
                              <div>OR</div>
                              <div
                                style={{
                                  height: "200px",
                                  border: "1px solid #969696",
                                }}
                              ></div>
                            </div>
                            <div className="col-md-6 col-6">
                              <AddReferalPopup />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                      <th>KYC</th>
                      <th>
                        Rank <ArrowUpwardIcon />
                      </th>
                      <th className="text-center">Actions</th>
                    </tr>
                    {refdata != "" ? (
                      refdata
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
                                  to={`/rpdetails/${cust._id}`}
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
