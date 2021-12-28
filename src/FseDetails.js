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
export default function FseDetails() {
  const [show, toggleShow] = useState(false);
  const [showedit, toggleShowedit] = useState(false);
  const [showprofilepic, toggleShowProfilepic] = useState(false);
  // var DownloadButton = require('downloadbutton/es5')
  const [SelectedPhoto, setSelectedPhoto] = useState([]);
  const [fsefulldetails, Setfsefulldetails] = useState([]);

  // state to set all personal info values of partners
  const [fsename, Setfsename] = useState([]);
  const [fsejoiningdate, Setfsejoiningdate] = useState([]);
  const [fsedesgination, Setfsedesgination] = useState([]);
  const [fseemployeeid, Setfseemployeeid] = useState([]);
  const [fsemobileno, Setfsemobileno] = useState([]);
  const [fsecodevalue, Setfsecodevalue] = useState([]);
  const { Id } = useParams();
  // console.log("id", Id);
  // var DownloadButton = require('downloadbutton/es5');
  let history = useHistory();

  // const changePhotos = (e) => {
  //   setSelectedPhoto(e.target.files[0]);
  //   // console.log(photo);
  // };

  useEffect(() => {
    const valid = localStorage.getItem("email");
    if (valid === null) {
      history.push("/login");
    }
    axios
      .get(`https://pure-wave-48602.herokuapp.com/getfsebyid?_id=${Id}`)
      .then((resultdsvalue) => {
        Setfsefulldetails(resultdsvalue.data.FSE);
        Setfsename(resultdsvalue.data.FSE[0].name);
        Setfsejoiningdate(resultdsvalue.data.FSE[0].doj);
        Setfsedesgination(resultdsvalue.data.FSE[0].designation);
        Setfseemployeeid(resultdsvalue.data.FSE[0].employee_id);
        Setfsemobileno(resultdsvalue.data.FSE[0].mobile);
        Setfsecodevalue(resultdsvalue.data.FSE[0].fsecode);
        console.log(
          "FSE details of each customer",
          resultdsvalue.data.FSE[0].name
        );
      });
  }, []);

  // To update the details
  const updatefsedetails = (e) => {
    // alert("hello World");
    e.preventDefault();
    const upddata = {
      name: fsename,
      mobile: fsemobileno,
      employee_id: fseemployeeid,
      designation: fsedesgination,
      doj: fsejoiningdate,
      fsecode: fsecodevalue,
    };
    console.log("data", upddata);
    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post(
        `https://pure-wave-48602.herokuapp.com/updatefse?_id=${Id}`,
        upddata,
        {
          headers,
        }
      )
      .then((resultfse) => {
        console.log("Hello Don", resultfse);
        let Status = resultfse.data.status;
        if (Status === "success") {
          alert("Profile Details are edited sucessfully");
          // window.setTimeout(function () {
          //   window.location.reload();
          // }, 100);
        } else if (Status === "failed") {
          alert("Profile Details are already exists");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Some Internal Error", err);
      });
  };

  const deletefsedetails = () => {
    axios
      .delete(`https://pure-wave-48602.herokuapp.com/deletefse?_id=${Id}`)
      .then((resultdel) => {
        console.log("FSE deleted", resultdel);
        $(".modal-backdrop").remove();
        history.push("/fselist");
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
                                    onClick={deletefsedetails}
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
                                  onClick={updatefsedetails}
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
                                    {fsename}
                                  </span>
                                </div>
                              </div>
                              <div className="col-6 col-md-2">
                                <div>
                                  <p className="m-0 admin_type_heading">
                                    Joining Date
                                  </p>
                                  <span className="admin_type_value">
                                    {fsejoiningdate}
                                  </span>
                                </div>
                              </div>
                              <div className="col-6 col-md-3">
                                <div>
                                  <p className="m-0 admin_type_heading">
                                    Designation
                                  </p>
                                  <span className="admin_type_value">
                                    {fsedesgination}
                                  </span>
                                </div>
                              </div>
                              <div className="col-6 col-md-2">
                                <div>
                                  <p className="m-0 admin_type_heading">
                                    Employee Id
                                  </p>
                                  <span className="admin_type_value">
                                    {fseemployeeid}
                                  </span>
                                </div>
                              </div>
                              <div className="col-6 col-md-2">
                                <div>
                                  <p className="m-0 admin_type_heading">
                                    Mobile Number
                                  </p>
                                  <span className="admin_type_value">
                                    {fsemobileno}
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
                                    value={fsename}
                                    onChange={(e) => {
                                      Setfsename(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-6 col-md-2">
                                <div className="input-group-custom">
                                  <label htmlFor="date" className="label">
                                    Joining Date
                                  </label>
                                  <input
                                    type="date"
                                    className="input-area admin_partner_det_input"
                                    name="joining_date"
                                    value={fsejoiningdate}
                                    onChange={(e) => {
                                      Setfsejoiningdate(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-6 col-md-3">
                                <div className="input-group-custom">
                                  <label htmlFor="comp" className="label">
                                    Designation
                                  </label>
                                  <input
                                    type="text"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="comp"
                                    name="company_name"
                                    value={fsedesgination}
                                    onChange={(e) => {
                                      Setfsedesgination(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-6 col-md-2">
                                <div className="input-group-custom">
                                  <label htmlFor="exp" className="label">
                                    Employee Id
                                  </label>
                                  <input
                                    type="text"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="exp"
                                    name="total_expernice"
                                    value={fseemployeeid}
                                    onChange={(e) => {
                                      Setfseemployeeid(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-6 col-md-2">
                                <div className="input-group-custom">
                                  <label htmlFor="exp" className="label">
                                    Mobile No
                                  </label>
                                  <input
                                    type="number"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="exp"
                                    name="total_expernice"
                                    value={fsemobileno}
                                    onChange={(e) => {
                                      Setfsemobileno(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="p-3 admin_patrner_personal_info">
                        <div className="d-flex justify-content-between">
                          <p className="mb-0">FSE Code</p>
                          <div
                            className="edit_icon"
                            onClick={() => toggleShowedit(!showedit)}
                          >
                            {!showedit && (
                              <div>
                                <EditIcon className="search_icons" />
                                <span> Edit</span>
                              </div>
                            )}
                            {showedit && (
                              <div>
                                <button
                                  type="submit"
                                  className="edit_icon"
                                  onClick={updatefsedetails}
                                >
                                  Save
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                        {!showedit && (
                          <div className="contact_info_">
                            <div className="mt-2 fsc_code">
                              <span className="admin_type_value">
                                {fsecodevalue}
                              </span>
                            </div>
                          </div>
                        )}
                        {showedit && (
                          <div className="d-flex justify-content-between flex-wrap contact_info_admin">
                            <div className="input-group-custom">
                              <label htmlFor="loc" className="label">
                                FSC
                              </label>
                              <br />
                              <input
                                type="text"
                                className="input-area"
                                required
                                id="inputName"
                                name="fsecode"
                                value={fsecodevalue}
                                onChange={(e) => {
                                  Setfsecodevalue(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-3">
                      <div className="p-3 admin_patrner_personal_info">
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="">Profile Pic</p>
                          <div
                            className="edit_icon"
                            onClick={() =>
                              toggleShowProfilepic(!showprofilepic)
                            }
                          >
                            {!showprofilepic && (
                              <div>
                                <EditIcon className="search_icons" />
                                <span> Edit</span>
                              </div>
                            )}
                            {showprofilepic && (
                              <div>
                                <button
                                  type="submit"
                                  className="edit_icon"
                                  // onClick={mydetails}
                                >
                                  Save
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                        {!showprofilepic && (
                          <div className="viewing_details">
                            <div className="row">
                              <div className="col-6 col-md-6">
                                <button className="download_btn">
                                  <DownloadIcon />
                                  Photo
                                </button>
                                {/* <DownloadButton
                                  className="waves-effect waves-light btn"
                                  genFile={makeFile} /> */}
                              </div>
                            </div>
                          </div>
                        )}
                        {showprofilepic && (
                          <div className="edit_details">
                            <div className="row">
                              <div className="col-6 col-md-6">
                                <input type="file" className="file" />
                                Upload Photo
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
