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
import AddFsePopup from "./AddFsePopup";
import Fserow from "./Fserow";
export default function Fselist() {
  const [fsedata, Setfsedata] = useState([]);
  const [searchterm, Setsearchterm] = useState("");
  let history = useHistory();
  useEffect(() => {
    const valid = localStorage.getItem("email");
    if (valid === null) {
      history.push("/login");
    }
    getCustomer();
  }, []);

  const getCustomer = () => {
    axios
      .get("https://pure-wave-48602.herokuapp.com/getfse")
      .then((repe) => {
        console.log("dsdssdsdsdds", repe);
        let customer = repe.data.FSE;
        console.log("ITS EMP ID", customer);
        Setfsedata(
          customer.map((d) => {
            return {
              select: false,
              id: d._id,
              name: d.name,
              mobile: d.mobile,
              empid: d.employee_id,
              doj: d.doj,
            };
          })
        );
      })
      .catch((err) => alert(err));
  };

  const deletemultiplerecords = async () => {
    alert("for del");
    let arrayids = [];
    await fsedata.forEach((d) => {
      if (d.select) {
        arrayids.push(d.id);
      }
    });
    console.log("for del", arrayids);
    axios
      // .post(`https://pure-wave-48602.herokuapp.com/deletemore`, {
      .post(`https://pure-wave-48602.herokuapp.com/deletemore`, {
        arrayids,
      })
      .then((resultdeleted) => {
        alert("HEHHE");
        console.log("FSE deleted", resultdeleted);
        getCustomer();
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
                <h4>List Of Field Sales Executive</h4>
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
                      deletemultiplerecords();
                    }}
                    // data-target=".bd-example-modal-fse"
                  >
                    {/* <AddIcon className="search_icons" /> */}
                    Delete
                  </button>
                  <button
                    className="add_btn"
                    data-toggle="modal"
                    data-target=".bd-example-modal-fse"
                  >
                    <AddIcon className="search_icons" />
                    Add
                  </button>
                  <div
                    className="modal fade bd-example-modal-fse"
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
                              Add Field Sales Executive
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
                          <AddFsePopup />
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
                            Setfsedata(
                              fsedata.map((d) => {
                                d.select = value;
                                return d;
                              })
                            );
                          }}
                          className="mr-2"
                        />
                      </th>
                      <th>Partner Name</th>
                      <th>Mobile No</th>
                      <th>Employee Id</th>
                      <th>Date of Joining</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  {fsedata != "" ? (
                    // fsedata.map((custo, index) => {
                    //   return (
                    //     <tr key={custo._id}>
                    //       <td>
                    //         <input
                    //           type="checkbox"
                    //           checked={d.select}
                    //           onChange={(e) => {
                    //             let value = e.target.checked;
                    //             Setfsedata(
                    //               fsedata.map((sd) => {
                    //                 if (sd.id === d.id) {
                    //                   sd.select = value;
                    //                 }
                    //                 return sd;
                    //               })
                    //             );
                    //           }}
                    //         />
                    //       </td>
                    //       <td>{custo.name}</td>
                    //       <td>{custo.mobile}</td>
                    //       <td>{custo.employee_id}</td>
                    //       <td>{custo.doj}</td>
                    //       <td>
                    //         <Link
                    //           to={`/fsedetails/${custo._id}`}
                    //           className="admin_panel_viewmore_list"
                    //         >
                    //           View More
                    //         </Link>
                    //       </td>
                    //     </tr>
                    //   );
                    // })ff
                    // dff
                    <tbody>
                      <Fserow
                        fsedata={fsedata}
                        Setfsedata={Setfsedata}
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
