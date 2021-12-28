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
import UserRow from "./UserRow";
import { useHistory } from "react-router-dom";
import AddFsePopup from "./AddFsePopup";
import Fserow from "./Fserow";
import AddUserPopup from "./AddUserPopup";
import { SelectField } from "./SelectField";
export default function ManageUser() {
  const [userdata, Setuserdata] = useState([]);
  let history = useHistory();
  const [searchterm, Setsearchterm] = useState("");
  useEffect(() => {
    // const valid = localStorage.getItem("email");
    // if (valid === null) {
    //   history.push("/login");
    // }
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get("https://pure-wave-48602.herokuapp.com/getusers")
      .then((resusers) => {
        let customer = resusers.data.Users;
        console.log("ITS EMP ID", customer);
        Setuserdata(resusers.data.Users);
        customer.map((de) => {
          return {
            select: false,
            id: de._id,
            name: de.name,
            userid: de.userId,
            password: de.password,
            role: de.role,
            permision: de.permissions,
          };
        });
      })
      .catch((err) => alert(err));
  };

  // const deletemultipleuserrecords = async () => {
  //   alert("for del");
  //   let userids = [];
  //   await userdata.forEach((de) => {
  //     if (de.select) {
  //       userids.push(de.id);
  //     }
  //   });
  //   console.log("for del", userids);
  //   axios
  //     // .post(`https://pure-wave-48602.herokuapp.com/deletemore`, {
  //     // .post(`http://10.10.2.118:3030/deletemore`, {
  //     .post(
  //       `https://pure-wave-48602.herokuapp.com/deletemultipleusers`,
  //       userids
  //     )
  //     .then((resultdeleteduser) => {
  //       console.log("Users deleted", resultdeleteduser);
  //       getUsers();
  //     })
  //     .catch((err) => alert(err));
  // };
  const deletemultipleuserrecords = () => {
    alert("for del");
    let userids = [];
    userdata.forEach((de) => {
      if (de.select) {
        userids.push(de._id);
      }
    });
    console.log("for del", userids);
    axios
      // .post(`https://pure-wave-48602.herokuapp.com/deletemore`, {
      .post(`https://pure-wave-48602.herokuapp.com/deletemultipleusers`, {
        userids,
      })
      .then((resultdeleteds) => {
        alert("HEHHE");
        console.log("FSE deleted", resultdeleteds);
        getUsers();
      })
      .catch((err) => alert(err));
  };
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
                <h4>
                  <b>Manage Users</b>
                </h4>
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
                    // data-toggle="modal"
                    onClick={() => {
                      deletemultipleuserrecords();
                    }}
                    // data-target=".bd-example-modal-fse"
                  >
                    <DeleteIcon className="del_icons" />
                    Delete
                  </button>
                  <button
                    className="add_btn"
                    data-toggle="modal"
                    data-target=".bd-example-modal-user"
                  >
                    <AddIcon className="search_icons" />
                    Add
                  </button>
                  <div
                    className="modal fade bd-example-modal-user"
                    role="dialog"
                    aria-labelledby="myLargeModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered  ">
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
                              Add User
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
                          <AddUserPopup />
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
                  <thead>
                    <tr>
                      <th>
                        <input
                          type="checkbox"
                          onChange={(e) => {
                            let value = e.target.checked;
                            Setuserdata(
                              userdata.map((de) => {
                                de.select = value;
                                return de;
                              })
                            );
                          }}
                          className="mr-2"
                        />
                      </th>
                      <th>Username</th>
                      <th>Role</th>
                      <th>UserId</th>
                      <th>Password</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  {userdata != "" ? (
                    <tbody>
                      <UserRow
                        userdata={userdata}
                        Setuserdata={Setuserdata}
                        searchterm={searchterm}
                      />
                    </tbody>
                  ) : (
                    <div>
                      <h3>No records found for Pre Customer </h3>
                    </div>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
