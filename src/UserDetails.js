import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminNav from "./AdminNav";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DownloadIcon from "@mui/icons-material/Download";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import $ from "jquery";
import { SelectField } from "./SelectField";
export default function UserDetails() {
  const [show, toggleShow] = useState(false);
  //   const [SelectedPhoto, setSelectedPhoto] = useState([]);
  const [fseuserdetails, Setuserdetails] = useState([]);

  // state to set all personal info values of partners
  const [usersname, Setusersname] = useState([]);
  const [usersid, Setusersid] = useState([]);
  const [userpassword, Setuserpassword] = useState([]);
  const [userrole, Setuserrole] = useState([]);

  const { Id } = useParams();
  console.log("id", Id);
  // var DownloadButton = require('downloadbutton/es5');
  let history = useHistory();

  useEffect(() => {
    const valid = localStorage.getItem("email");
    if (valid === null) {
      history.push("/login");
    }
    axios
      .get(`https://pure-wave-48602.herokuapp.com/getuserbyid?_id=${Id}`)
      .then((userdetailsvalue) => {
        Setuserdetails(userdetailsvalue.data.User);
        Setusersname(userdetailsvalue.data.User[0].name);
        Setusersid(userdetailsvalue.data.User[0].userId);
        Setuserpassword(userdetailsvalue.data.User[0].password);
        Setuserrole(userdetailsvalue.data.User[0].role);
        console.log("User details of each user", userdetailsvalue.data.User);
      });
  }, []);

  // To update the details
  const updateuserdetails = (e) => {
    // alert("hello World");
    e.preventDefault();
    const updatedres = {
      name: usersname,
      userId: usersid,
      password: userpassword,
      role: userrole,
    };
    console.log("data", updatedres);
    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post(
        `https://pure-wave-48602.herokuapp.com/updateuser?_id=${Id}`,
        updatedres,
        {
          headers,
        }
      )
      .then((resultfse) => {
        console.log("Hello Don", resultfse);
        let Status = resultfse.data.status;
        if (Status === "success") {
          alert("Profile Details are edited sucessfully");
        } else if (Status === "failed") {
          alert("Profile Details are already exists");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Some Internal Error", err);
      });
  };

  const deleteuserdetails = () => {
    axios
      .delete(`https://pure-wave-48602.herokuapp.com/deleteuser?_id=${Id}`)
      .then((resultuserdeleted) => {
        console.log("FSE deleted", resultuserdeleted);
        $(".modal-backdrop").remove();
        history.push("/manageuser");
      });
  };
  return (
    <div>
      <div>
        <AdminNav />
      </div>
      <div>
        <div className="main">
          <div className="content-tabs">
            <div>
              <div className="row top_menu_bar">
                <div className="col-md-8 d-flex align-items-center">
                  <Link to="/rplist" className="partner_back_btn">
                    <span>
                      <ArrowBackIosNewIcon />
                      Back
                    </span>
                  </Link>
                </div>
                <div className="col-md-4">
                  <div className="d-flex justify-content-end">
                    <button
                      className="delete_btn"
                      data-toggle="modal"
                      data-target=".partner_details_delete"
                    >
                      <DeleteIcon className="del_icons" />
                      Delete
                    </button>
                    <div
                      className="modal fade partner_details_delete"
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
                                  Are you sure want to Delete this User ?
                                </span>
                              </div>
                              <div className="pt-3 d-flex">
                                <div
                                  style={{ width: "50%", textAlign: "center" }}
                                >
                                  <button
                                    type="button"
                                    className="popup_btn_unlinkaccount"
                                    onClick={deleteuserdetails}
                                    data-toggle="modal"
                                    data-target=".partner-details-deleted-success"
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
                                  Please contact Field Sales Executive to valid
                                  FSE Code
                                </span>
                              </div>
                              <div className="pt-3 d-flex justify-content-center">
                                {/* <div
                                  style={{ width: "50%", textAlign: "center" }}
                                >
                                  <button
                                    type="button"
                                    className="popup_btn_unlinkaccount"
                                    onClick={deletefsedetails}
                                    data-toggle="modal"
                                    data-target=".partner-details-deleted-success"
                                    data-dismiss="modal"
                                  >
                                    Delete
                                  </button>
                                </div> */}
                                <div
                                  style={{ width: "50%", textAlign: "center" }}
                                >
                                  <button
                                    // type="button"
                                    className="popup_btn_close"
                                    data-dismiss="modal"
                                  >
                                    OK
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
                      className="modal fade partner-details-deleted-success"
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
                  </div>
                </div>
              </div>
              <div className="partner_details_edit_sec">
                <form>
                  <div className="row">
                    <div className="col-md-9">
                      <div className="p-3 admin_patrner_personal_info">
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="">Personal Info</p>
                          <div
                            className="edit_icon"
                            onClick={() => toggleShow(!show)}
                          >
                            {!show && (
                              <div>
                                <EditIcon className="search_icons" />
                                <span> Edit</span>
                              </div>
                            )}
                            {show && (
                              <div>
                                <button
                                  type="submit"
                                  className="edit_icon"
                                  onClick={updateuserdetails}
                                >
                                  Save
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                        {!show && (
                          <div className="viewing_details">
                            <div className="row">
                              <div className="col-6 col-md-3">
                                <div>
                                  <p className="m-0 admin_type_heading">
                                    Full Name
                                  </p>
                                  <span className="admin_type_value">
                                    {usersname}
                                  </span>
                                </div>
                              </div>
                              <div className="col-6 col-md-3">
                                <div>
                                  <p className="m-0 admin_type_heading">
                                    User Id
                                  </p>
                                  <span className="admin_type_value">
                                    {usersid}
                                  </span>
                                </div>
                              </div>
                              <div className="col-6 col-md-3">
                                <div>
                                  <p className="m-0 admin_type_heading">
                                    Password
                                  </p>
                                  <span className="admin_type_value">
                                    {userpassword != "" ? "****" : "NA"}
                                  </span>
                                </div>
                              </div>
                              <div className="col-6 col-md-3">
                                <div>
                                  <p className="m-0 admin_type_heading">Role</p>
                                  <span className="admin_type_value">
                                    {userrole}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {show && (
                          <div className="edit_details">
                            <div className="row">
                              <div className="col-6 col-md-3">
                                <div className="input-group-custom">
                                  <label htmlFor="inputName" className="label">
                                    Full Name
                                  </label>
                                  <input
                                    type="text"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="inputName"
                                    name="name"
                                    value={usersname}
                                    onChange={(e) => {
                                      Setusersname(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-6 col-md-3">
                                <div className="input-group-custom">
                                  <label htmlFor="inputName" className="label">
                                    User Id
                                  </label>
                                  <input
                                    type="text"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="inputName"
                                    name="userid"
                                    value={usersid}
                                    onChange={(e) => {
                                      Setusersid(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-6 col-md-3">
                                <div className="input-group-custom">
                                  <label htmlFor="comp" className="label">
                                    Password
                                  </label>
                                  <input
                                    type="password"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="comp"
                                    name="password"
                                    value={userpassword}
                                    onChange={(e) => {
                                      Setuserpassword(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-6 col-md-3">
                                <div className="input-group-custom">
                                  <label htmlFor="exp" className="label">
                                    Role
                                  </label>
                                  <input
                                    type="text"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="exp"
                                    name="role"
                                    value={userrole}
                                    onChange={(e) => {
                                      Setuserrole(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
