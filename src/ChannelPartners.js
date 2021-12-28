import React from "react";
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
export default function ChannelPartners() {
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
                <h4>List of Channel Partners</h4>
              </div>
              <div>
                <div className="d-flex justify-content-around">
                  <div className="search_div">
                    <SearchIcon />
                    <input
                      type="text"
                      className="top_menu_search"
                      placeholder="Search Here.."
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
                    <div className="modal-dialog  modal-dialog-centered ">
                      <div
                        className="modal-content modal_content_whole"
                        style={{ background: "white" }}
                      >
                        {/*  */}
                        <div className="modal-body">
                          <form
                            method="post"
                            action="#"
                            className="add_ref_partner_form"
                          >
                            <div>
                              <div className="d-flex justify-content-between">
                                <div className="p-3" style={{ width: "100%" }}>
                                  <div className="pb-3">
                                    <span className="add_hot_lead_label">
                                      Add Referal Partner
                                    </span>
                                    <button
                                      type="button"
                                      className="close"
                                      data-dismiss="modal"
                                      aria-label="Close"
                                      style={{
                                        background: "transparent",
                                        float: "right",
                                        color: "red",
                                        border: "none",
                                      }}
                                    >
                                      <span aria-hidden="true">X Close</span>
                                    </button>
                                  </div>

                                  <div>
                                    <div className="p-3 add_hot_lead_content">
                                      <div className="pb-3">
                                        <div className="input-group_add_hot_lead ">
                                          <input
                                            type="text"
                                            className="input-area_add_hot_lead"
                                            required
                                            id="inputName"
                                          />
                                          <label
                                            htmlFor="inputName"
                                            className="label_add_hot_lead"
                                          >
                                            Full Name
                                          </label>
                                        </div>
                                      </div>
                                      <div className="row pb-3">
                                        <div className="col-6 col-sm-6">
                                          <div className="input-group_add_hot_lead ">
                                            <input
                                              type="email"
                                              className="input-area_add_hot_lead"
                                              required
                                              id="inputEmail"
                                            />
                                            <label
                                              htmlFor="inputEmail"
                                              className="label_add_hot_lead"
                                            >
                                              Email
                                            </label>
                                          </div>
                                        </div>

                                        <div className="col-6 col-sm-6">
                                          <div className="input-group_add_hot_lead ">
                                            <input
                                              type="tel"
                                              className="input-area_add_hot_lead"
                                              required
                                              id="inputNuber"
                                            />
                                            <label
                                              htmlFor="inputNumber"
                                              className="label_add_hot_lead"
                                            >
                                              Phone Number
                                            </label>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="row pb-3">
                                        <div className="col-6 col-sm-6">
                                          <div className="input-group_add_hot_lead ">
                                            <input
                                              type="text"
                                              className="input-area_add_hot_lead"
                                              required
                                              id="inputPlotSize"
                                            />
                                            <label
                                              htmlFor="inputPlotSize"
                                              className="label_add_hot_lead"
                                            >
                                              Company Name
                                            </label>
                                          </div>
                                        </div>

                                        <div className="col-6 col-sm-6">
                                          <div className="input-group_add_hot_lead ">
                                            <input
                                              type="text"
                                              className="input-area_add_hot_lead"
                                              required
                                              id="inputDevelopmentName"
                                            />
                                            <label
                                              htmlFor="inputDevelopmentName"
                                              className="label_add_hot_lead"
                                            >
                                              Total Experience
                                            </label>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="row pb-3">
                                        <div className="col-6 col-sm-6">
                                          <div className="input-group_add_hot_lead ">
                                            <input
                                              type="text"
                                              className="input-area_add_hot_lead"
                                              required
                                              id="inputLocation"
                                            />
                                            <label
                                              htmlFor="inputLocation"
                                              className="label_add_hot_lead"
                                            >
                                              Work Location
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-6 col-sm-6">
                                          <div className="input-group_add_hot_lead ">
                                            <input
                                              type="date"
                                              className="input-area_add_hot_lead"
                                              required
                                              id="inputConstructionDate"
                                            />
                                            <label
                                              htmlFor="inputConstructionDate"
                                              className="label_add_hot_lead"
                                            >
                                              Construction Start
                                            </label>
                                          </div>
                                        </div>
                                        <div className="col-6 col-sm-6">
                                          <div className="input-group_add_hot_lead ">
                                            <input
                                              type="date"
                                              className="input-area_add_hot_lead"
                                              required
                                              id="inputConstructionDate"
                                            />
                                            <label
                                              htmlFor="inputConstructionDate"
                                              className="label_add_hot_lead"
                                            >
                                              Construction Start
                                            </label>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="pt-3 d-flex">
                                        <div
                                          style={{
                                            width: "100%",
                                            textAlign: "center",
                                          }}
                                        >
                                          <button
                                            type="button"
                                            className="btn_add_hot_lead"
                                            // onClick={deletebankdetails}
                                            data-toggle="modal"
                                            data-target=".popup-bank-details-deleted-1"
                                            data-dismiss="modal"
                                          >
                                            Add Partner
                                          </button>
                                        </div>
                                      </div>
                                      {/* MODAL POPUP FOR LEAD ADDED SUCESSFULLY */}
                                      <div
                                        className="modal fade popup-bank-details"
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
                                      {/*  */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    className="delete_btn"
                    data-toggle="modal"
                    data-target=".exampleModal"
                  >
                    <DeleteIcon className="del_icons" />
                    Delete
                  </button>
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
                    </tr>
                    <tr className="value_row">
                      <td>
                        <div className="d-flex align-items-center">
                          <img src={profilepic} className="profile_pic" />
                          <span> Devom Lame </span>
                        </div>
                      </td>
                      <td>856887510</td>
                      <td>40</td>
                      <td>
                        <button className="pending_btn">Pending</button>
                      </td>
                      <td>01</td>
                    </tr>
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
