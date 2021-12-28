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
export default function PartnerDetails() {
  var impdata;
  // var DownloadButton = require('downloadbutton/es5')
  const [show, toggleShow] = useState(false);
  const [showbank, toggleShowbank] = useState(false);
  const [showedit, toggleShowedit] = useState(false);
  const [showeditkyc, toggleShoweditkyc] = useState(false);
  const [showtarget, toggleShowtarget] = useState(false);
  const [showref, toggleShowref] = useState(false);
  const [showreftds, toggleshowreftds] = useState(false);
  const [showprofilepic, toggleShowProfilepic] = useState(false);
  const [showeditsqft, toggleshoweditsqft] = useState(false);
  const [showperprojectamt, toggleshowperprojectamt] = useState(false);
  const { Id } = useParams();
  console.log("id", Id);
  // var DownloadButton = require('downloadbutton/es5');
  let history = useHistory();

  // state to set all personal info values of partners
  const [refnames, Setrefnames] = useState([]);
  const [refjoiningdate, Setrefjoiningdate] = useState([]);
  const [refcompname, Setrefcompname] = useState([]);
  const [reftotalexp, Setreftotalexp] = useState([]);
  const [refdob, Setrefdob] = useState([]);
  const [refdesg, Setrefdesg] = useState([]);
  const [reftype, Setreftype] = useState([]);
  const [refworkloc, Setrefworkloc] = useState([]);

  // state to set contact info
  const [refemail, Setrefemail] = useState([]);
  const [refmobile, Setrefmobile] = useState([]);

  // Bank details
  const [refbankdetails, Setrefbankdetails] = useState([]);
  const [refpatname, Setrefpatname] = useState([]);
  const [refbankname, Setrefbankname] = useState([]);
  const [refbranchname, Setrefbranchname] = useState([]);
  const [refaccno, Setrefaccno] = useState([]);
  const [refifsccode, Setrefifsccode] = useState([]);
  const [refbankacctype, Setrefbankacctype] = useState([]);

  // To set KYC Details
  const [refpanno, Setrefpanno] = useState([]);
  const [refaadharno, Setrefaadharno] = useState([]);
  const [refdobnew, Setrefdobnew] = useState([]);

  const [photo, setSelectedPhoto] = useState([]);
  const [panphoto, setSelectedPanPhoto] = useState([]);
  const [aadhaarphoto, setSelectedAadharPhoto] = useState([]);
  // const [isFilePicked, setIsFilePicked] = useState(false);

  const [msg, Setmsg] = useState([]);
  const [referalcode, Setreferalcode] = useState([]);

  const changePhoto = (e) => {
    setSelectedPhoto(e.target.files[0]);
    console.log(photo);
  };

  const changePanPhoto = (e) => {
    setSelectedPanPhoto(e.target.files[0]);
  };

  const changeAadhaarPhoto = (e) => {
    setSelectedAadharPhoto(e.target.files[0]);
  };

  // Target
  const [targetdetails, Settargetdetails] = useState([]);
  const [noofdays, Setnoofdays] = useState([]);
  const [targettobeachieved, Settargettobeachieved] = useState([]);
  const [tdsvalue, Settdsvalue] = useState(1);
  const [Persfamt, SetPersfamt] = useState([50]);
  const [Perprojectamt, SetPerprojectamt] = useState([100000]);
  useEffect(() => {
    const valid = localStorage.getItem("email");
    if (valid === null) {
      history.push("/login");
    }
    console.log(refjoiningdate);
    axios
      .get(`https://pure-wave-48602.herokuapp.com/getpartnersbyid?_id=${Id}`)
      .then((reps) => {
        // Personal
        Setrefnames(reps.data.partners[0].fullname);
        Setrefjoiningdate(reps.data.partners[0].doj);
        Setrefcompname(reps.data.partners[0].companyname);
        Setreftotalexp(reps.data.partners[0].experience);
        Setrefdob(reps.data.partners[0].dob);
        Setrefdesg(reps.data.partners[0].designation);
        Setreftype(reps.data.partners[0].partnertype);
        Setrefworkloc(reps.data.partners[0].location);

        // Contact info
        Setrefemail(reps.data.partners[0].email);
        Setrefmobile(reps.data.partners[0].mobile);

        SetPersfamt(reps.data.partners[0].persfamt);
        SetPerprojectamt(reps.data.partners[0].perprojectamt);
        console.log("Persfamt", reps.data.partners[0].persfamt);
      });

    // to fetch bank details api
    axios
      .get(`https://pure-wave-48602.herokuapp.com/getbankdetailsbyid?_id=${Id}`)
      .then((res) => {
        // Bank Detais
        // var impdata = res.data.length;
        console.log("rrrr", res.data);
        var bankdetailslength = res.data;
        var lengthofbank = res.data.documents.length;
        console.log("dssd", lengthofbank);
        localStorage.setItem("lengthofbank", lengthofbank);
        if (lengthofbank > 0 && lengthofbank != "") {
          Setrefbankdetails(res.data.documents[0]);
          Setrefpatname(res.data.documents[0].partnerName);
          Setrefbankname(res.data.documents[0].bankName);
          Setrefbranchname(res.data.documents[0].branch);
          Setrefaccno(res.data.documents[0].accountNumber);
          Setrefifsccode(res.data.documents[0].ifscCode);
          Setrefbankacctype(res.data.documents[0].accountType);
          Setrefpanno(res.data.documents[0].panNumber);
          Setrefaadharno(res.data.documents[0].adharNumber);
          Setrefdobnew(res.data.documents[0].dob);
          console.log("NEWDOBB", res.data.documents[0].dob);
        } else {
          Setrefbankdetails("");
          Setrefpatname("");
          Setrefbankname("");
          Setrefbranchname("");
          Setrefaccno("");
          Setrefifsccode("");
          Setrefbankacctype("");
          Setrefpanno("");
          Setrefaadharno("");
        }
      });

    axios
      .get(`https://pure-wave-48602.herokuapp.com/target?_id=${Id}`)
      .then((respons) => {
        console.log("TARGGGEET IZZ", respons.data);
        Settargetdetails(respons.data);
        Setnoofdays(respons.data.noOfdays);
        Settargettobeachieved(respons.data.noOfTarget);
        console.log("s", respons.data.noOfdays);
      });

    // TDS Value API

    axios
      .get(`https://pure-wave-48602.herokuapp.com/tdsbyid?_id=${Id}`)
      .then((resultds) => {
        Setmsg(resultds.data.msg);
        console.log("TDS", resultds);
      });

    // Fetch Referal Code
    axios
      .get(`https://pure-wave-48602.herokuapp.com/getrefcode?_id=${Id}`)
      .then((resultrefcode) => {
        Setreferalcode(resultrefcode.data.referralcode);
        console.log("REF COde", resultrefcode);
      });
  }, []);

  // Update referal code

  const updatereferalcode = (e) => {
    // alert("hello World");
    e.preventDefault();
    const updateref = {
      referralcode: referalcode,
    };
    console.log("data", updateref);
    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post(
        `https://pure-wave-48602.herokuapp.com/updaterefcode?_id=${Id}`,
        updateref,
        {
          headers,
        }
      )
      .then((res) => {
        console.log("Hello Don", res);
        let Status = res.data.status;
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

  const verifyit = () => {
    console.log("insside that verify btn function");
    axios
      .get(`https://pure-wave-48602.herokuapp.com/updateverified?_id=${Id}`)
      .then((resultsverified) => {
        console.log("verified orr", resultsverified);
      })
      .catch((err) => {
        console.log(err);
        alert("Some Internal Error", err);
      });
  };
  const updatetdsval = (e) => {
    e.preventDefault();
    const tdsdata = {
      tds: tdsvalue,
    };
    console.log("data", tdsdata);

    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post(
        `https://pure-wave-48602.herokuapp.com/updatetds?_id=${Id}`,
        tdsdata,
        {
          headers,
        }
      )
      .then((resul) => {
        console.log("Hello Don", resul);
        let Status = resul.data.status;
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

  const deletepartnerdetails = () => {
    axios
      .delete(`https://pure-wave-48602.herokuapp.com/deletepartner?_id=${Id}`)
      .then((res) => {
        console.log("KK", res);
        $(".modal-backdrop").remove();
        history.push("/rplist");
      });
  };

  // To update the details
  const mydetails = (e) => {
    // alert("hello World");
    e.preventDefault();
    const upddata = {
      fullname: refnames,
      doj: refjoiningdate,
      companyname: refcompname,
      experience: reftotalexp,
      dob: refdob,
      designation: refdesg,
      partnertype: reftype,
      location: refworkloc,
      email: refemail,
      mobile: refmobile,
      noOfdays: targetdetails.noOfdays,
      noOfTarget: targetdetails.noOfTarget,
      persfamt: Persfamt,
      perprojectamt: Perprojectamt,
    };
    console.log("data", upddata);
    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post(
        `https://pure-wave-48602.herokuapp.com/updatepartner?_id=${Id}`,
        upddata,
        {
          headers,
        }
      )
      .then((res) => {
        console.log("Hello Don", res);
        let Status = res.data.status;
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

  const bankmydetails = (e) => {
    var length = localStorage.getItem("lengthofbank");

    console.log("New len", length);
    console.log("fd", impdata);

    if (length > 0) {
      const updbankdata = {
        partnerName: refpatname,
        bankName: refbankname,
        branch: refbranchname,
        accountNumber: refaccno,
        ifscCode: refifsccode,
        accountType: refbankacctype,
        panNumber: refpanno,
        adharNumber: refaadharno,
        dob: refdob,
        noOfTarget: targetdetails.noOfTarget,
      };

      console.log("data", updbankdata);
      const headers = {
        "Content-Type": "application/json",
      };
      axios
        .post(
          `https://pure-wave-48602.herokuapp.com/updatedocument?_id=${Id}`,
          updbankdata,
          {
            headers,
          }
        )
        .then((respon) => {
          console.log("Hello Don", respon);
          let Status = respon.data.status;
          if (Status === "success") {
            alert("Bank Details are edited sucessfully");
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
    } else {
      const bankdata = {
        name: refpatname,
        bank_name: refbankname,
        branch_name: refbranchname,
        account_no: refaccno,
        accountType: refbankacctype,
        ifscCode: refifsccode,
        panNumber: refpanno,
        adharNumber: refaadharno,
        dob: refdob,
      };

      console.log("Data", bankdata);

      const headers = {
        "Content-Type": "application/json",
      };

      axios
        .post(
          `https://pure-wave-48602.herokuapp.com/adddocumentsbyid?_id=${Id}`,
          bankdata,
          {
            headers,
          }
        )
        .then((results) => {
          console.log(results);
          let Status = results.data.status;
          if (Status === 200) {
            console.log("Details added suceesfully");
            // $(".popup-add_hot-lead-added").show();
            // $(".bd-example-modal-lg_ref3").modal("hide");
          } else if (Status === "failed") {
            alert("Details are already Exists");
          }
        });
    }
  };

  const addkycdetails = (e) => {
    var length = localStorage.getItem("lengthofbank");
    if (length > 0) {
      const updbankdatas = {
        partnerName: refpatname,
        bankName: refbankname,
        branch: refbranchname,
        accountNumber: refaccno,
        ifscCode: refifsccode,
        accountType: refbankacctype,
        panNumber: refpanno,
        adharNumber: refaadharno,
        dob: refdob,
        noOfTarget: targetdetails.noOfTarget,
      };

      console.log("data", updbankdatas);
      const headers = {
        "Content-Type": "application/json",
      };
      axios
        .post(
          `https://pure-wave-48602.herokuapp.com/updatedocument?_id=${Id}`,
          updbankdatas,
          {
            headers,
          }
        )
        .then((respon) => {
          console.log("Hello Don", respon);
          let Status = respon.data.status;
          if (Status === "success") {
            alert("Bank Details are edited sucessfully");
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
    } else {
      const updkyc = {
        panNumber: refpanno,
        adharNumber: refaadharno,
        dob: refdob,
      };

      console.log("Data", updkyc);

      const headers = {
        "Content-Type": "application/json",
      };

      axios
        .post(
          `https://pure-wave-48602.herokuapp.com/addKycDetails?_id=${Id}`,
          updkyc,
          {
            headers,
          }
        )
        .then((results) => {
          console.log(results);
          let Status = results.data.status;
          if (Status === 200) {
            console.log("Details added suceesfully");
            // $(".popup-add_hot-lead-added").show();
            // $(".bd-example-modal-lg_ref3").modal("hide");
          } else if (Status === "failed") {
            alert("Details are already Exists");
          }
        });
    }
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
                <div className="col-md-5 d-flex align-items-center">
                  <Link to="/rplist" className="partner_back_btn">
                    <span>
                      <ArrowBackIosNewIcon />
                      Back
                    </span>
                  </Link>
                </div>
                <div className="col-md-7">
                  <div className="d-flex justify-content-around">
                    <button
                      className="add_btn"
                      data-toggle="modal"
                      data-target=".bd-example-modal-lg_ref3"
                    >
                      <div
                        className="edit_icon"
                        onClick={() => toggleshoweditsqft(!showeditsqft)}
                      >
                        {!showeditsqft && (
                          <div>
                            {Persfamt != undefined ? Persfamt : 50}/Sq. ft
                            <EditIcon className="search_icons" />
                          </div>
                        )}
                        {showeditsqft && (
                          <div>
                            <input
                              type="text"
                              value={Persfamt}
                              onChange={(e) => {
                                SetPersfamt(e.target.value);
                              }}
                            />
                            <button
                              type="submit"
                              className="edit_icon"
                              onClick={mydetails}
                            >
                              Save
                            </button>
                          </div>
                        )}
                      </div>
                    </button>
                    <button
                      className="add_btn"
                      data-toggle="modal"
                      data-target=".bd-example-modal-lg_ref3"
                    >
                      <div
                        className="edit_icon"
                        onClick={() =>
                          toggleshowperprojectamt(!showperprojectamt)
                        }
                      >
                        {!showperprojectamt && (
                          <div>
                            {Perprojectamt != undefined
                              ? Perprojectamt
                              : 100000}
                            /Per Project Amount
                            <EditIcon className="search_icons" />
                          </div>
                        )}
                        {showperprojectamt && (
                          <div>
                            <input
                              type="text"
                              value={Perprojectamt}
                              onChange={(e) => {
                                SetPerprojectamt(e.target.value);
                              }}
                            />
                            <button
                              type="submit"
                              className="edit_icon"
                              onClick={mydetails}
                            >
                              Save
                            </button>
                          </div>
                        )}
                      </div>
                    </button>
                    <div className="dropdown verify_btn">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <CheckCircleIcon className="verify_icons" />
                        Verified
                        {/* <KeyboardArrowDownIcon /> */}
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a href="" onClick={verifyit}>
                          Verify
                        </a>
                      </div>
                    </div>

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
                                    onClick={deletepartnerdetails}
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
                    <div className="col-md-8">
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
                                  onClick={mydetails}
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
                                    {refnames}
                                  </span>
                                </div>
                              </div>
                              <div className="col-6 col-md-3">
                                <div>
                                  <p className="m-0 admin_type_heading">
                                    Joining Date
                                  </p>
                                  <span className="admin_type_value">
                                    {refjoiningdate}
                                  </span>
                                </div>
                              </div>
                              <div className="col-6 col-md-3">
                                <div>
                                  <p className="m-0 admin_type_heading">
                                    Company Name
                                  </p>
                                  <span className="admin_type_value">
                                    {refcompname}
                                  </span>
                                </div>
                              </div>
                              <div className="col-6 col-md-3">
                                <div>
                                  <p className="m-0 admin_type_heading">
                                    Total Experience
                                  </p>
                                  <span className="admin_type_value">
                                    {reftotalexp}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-6 col-md-3">
                                <div>
                                  <p className="m-0 admin_type_heading">
                                    Date of Birth
                                  </p>
                                  <span className="admin_type_value">
                                    {refdob}
                                  </span>
                                </div>
                              </div>
                              <div className="col-6 col-md-3">
                                <div>
                                  <p className="m-0 admin_type_heading">
                                    Designation
                                  </p>
                                  <span className="admin_type_value">
                                    {refdesg}
                                  </span>
                                </div>
                              </div>
                              <div className="col-6 col-md-3">
                                <div>
                                  <p className="m-0 admin_type_heading">
                                    Type of Partner
                                  </p>
                                  <span className="admin_type_value">
                                    {reftype}
                                  </span>
                                </div>
                              </div>
                              <div className="col-6 col-md-3">
                                <div>
                                  <p className="m-0 admin_type_heading">
                                    Work Location
                                  </p>
                                  <span className="admin_type_value">
                                    {refworkloc}
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
                                    value={refnames}
                                    onChange={(e) => {
                                      Setrefnames(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-6 col-md-3">
                                <div className="input-group-custom">
                                  <label htmlFor="date" className="label">
                                    Joining Date
                                  </label>
                                  <input
                                    type="date"
                                    className="input-area admin_partner_det_input"
                                    name="joining_date"
                                    value={refjoiningdate}
                                    onChange={(e) => {
                                      Setrefjoiningdate(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-6 col-md-3">
                                <div className="input-group-custom">
                                  <label htmlFor="comp" className="label">
                                    Company Name
                                  </label>
                                  <input
                                    type="text"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="comp"
                                    name="company_name"
                                    value={refcompname}
                                    onChange={(e) => {
                                      Setrefcompname(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-6 col-md-3">
                                <div className="input-group-custom">
                                  <label htmlFor="exp" className="label">
                                    Total Experience
                                  </label>
                                  <input
                                    type="text"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="exp"
                                    name="total_expernice"
                                    value={reftotalexp}
                                    onChange={(e) => {
                                      Setreftotalexp(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-6 col-md-3">
                                <div className="input-group-custom">
                                  <label htmlFor="dob" className="label">
                                    Date of Birth
                                  </label>
                                  <input
                                    type="date"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="dob"
                                    name="dob"
                                    defaultValue={refdob}
                                    onChange={(e) => {
                                      Setrefdob(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-6 col-md-3">
                                <div className="input-group-custom">
                                  <label htmlFor="des" className="label">
                                    Designation
                                  </label>
                                  <input
                                    type="text"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="des"
                                    name="designation"
                                    value={refdesg}
                                    onChange={(e) => {
                                      Setrefdesg(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-6 col-md-3">
                                <div className="input-group-custom">
                                  <label htmlFor="type" className="label">
                                    Type of Partner
                                  </label>
                                  <input
                                    type="text"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="type"
                                    name="type_of_partner"
                                    value={reftype}
                                    onChange={(e) => {
                                      Setreftype(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-6 col-md-3">
                                <div className="input-group-custom">
                                  <label htmlFor="loc" className="label">
                                    Work Location
                                  </label>
                                  <input
                                    type="text"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="loc"
                                    name="work_location"
                                    value={refworkloc}
                                    onChange={(e) => {
                                      Setrefworkloc(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-3 admin_patrner_personal_info">
                        <div className="d-flex justify-content-between">
                          <p className="mb-0">Contact Info</p>
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
                                  onClick={mydetails}
                                >
                                  Save
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                        {!showedit && (
                          <div className="contact_info_">
                            <div>
                              <p className="m-0 admin_type_heading">Email</p>
                              <span className="admin_type_value">
                                {refemail}
                              </span>
                            </div>
                            <div className="ml-4">
                              <p className="m-0 admin_type_heading">
                                Mobile No
                              </p>
                              <span className="admin_type_value">
                                {refmobile}
                              </span>
                            </div>
                          </div>
                        )}
                        {showedit && (
                          <div className="d-flex justify-content-between flex-wrap contact_info_admin">
                            <div className="input-group-custom">
                              <label htmlFor="loc" className="label">
                                Email
                              </label>
                              <br />
                              <input
                                type="email"
                                className="input-area"
                                required
                                id="email"
                                name="email"
                                value={refemail}
                                onChange={(e) => {
                                  Setrefemail(e.target.value);
                                }}
                                // value={MyPersonalDetails.email}
                                // onChange={handleChange("email")}
                              />
                            </div>
                            <div className="input-group-custom">
                              <label htmlFor="mob" className="label">
                                Mobile No
                              </label>
                              <br />
                              <input
                                type="text"
                                className="input-area"
                                required
                                id="mob"
                                name="mobile_no"
                                value={refmobile}
                                onChange={(e) => {
                                  Setrefmobile(e.target.value);
                                }}
                                // value={MyPersonalDetails.mobile_no}
                                // onChange={handleChange("mobile_no")}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <div className="p-3 admin_patrner_personal_info">
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="">Bank Details</p>
                          <div
                            className="edit_icon"
                            onClick={() => toggleShowbank(!showbank)}
                          >
                            {!showbank && (
                              <div>
                                <EditIcon className="search_icons" />
                                <span> Edit</span>
                              </div>
                            )}
                            {showbank && (
                              <div>
                                <button
                                  type="submit"
                                  className="edit_icon"
                                  onClick={bankmydetails}
                                >
                                  Save
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                        {!showbank && (
                          <div className="viewing_details">
                            <div className="row">
                              <div className="col-6 col-md-4">
                                <div>
                                  <p className="m-0 admin_type_heading">Name</p>
                                  <span className="admin_type_value">
                                    {refpatname}
                                  </span>
                                </div>
                              </div>
                              <div className="col-6 col-md-4">
                                <div>
                                  <p className="m-0 admin_type_heading">
                                    Bank Name
                                  </p>
                                  <span className="admin_type_value">
                                    {" "}
                                    {refbankname}
                                  </span>
                                </div>
                              </div>
                              <div className="col-6 col-md-4">
                                <div>
                                  <p className="m-0 admin_type_heading">
                                    Branch Name
                                  </p>
                                  <span className="admin_type_value">
                                    {" "}
                                    {refbranchname}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-6 col-md-4">
                                <div>
                                  <p className="m-0 admin_type_heading">
                                    Account Number
                                  </p>
                                  <span className="admin_type_value">
                                    {refaccno}
                                  </span>
                                </div>
                              </div>
                              <div className="col-6 col-md-4">
                                <div>
                                  <p className="m-0 admin_type_heading">IFSC</p>
                                  <span className="admin_type_value">
                                    {refifsccode}
                                  </span>
                                </div>
                              </div>
                              <div className="col-6 col-md-4">
                                <div>
                                  <p className="m-0 admin_type_heading">
                                    Type of Account
                                  </p>
                                  <span className="admin_type_value">
                                    {refbankacctype}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {showbank && (
                          <div className="edit_details">
                            <div className="row">
                              <div className="col-6 col-md-4">
                                <div className="input-group-custom">
                                  <label htmlFor="inputName" className="label">
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="inputName"
                                    name="name"
                                    value={refpatname}
                                    onChange={(e) => {
                                      Setrefpatname(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>

                              <div className="col-6 col-md-4">
                                <div className="input-group-custom">
                                  <label htmlFor="comp" className="label">
                                    Bank Name
                                  </label>
                                  <input
                                    type="text"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="comp"
                                    name="company_name"
                                    value={refbankname}
                                    onChange={(e) => {
                                      Setrefbankname(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-6 col-md-4">
                                <div className="input-group-custom">
                                  <label htmlFor="exp" className="label">
                                    Branch Name
                                  </label>
                                  <input
                                    type="text"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="exp"
                                    name="total_expernice"
                                    value={refbranchname}
                                    onChange={(e) => {
                                      Setrefbranchname(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-6 col-md-4">
                                <div className="input-group-custom">
                                  <label htmlFor="dob" className="label">
                                    Account Number
                                  </label>
                                  <input
                                    type="number"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="dob"
                                    name="dob"
                                    value={refaccno}
                                    onChange={(e) => {
                                      Setrefaccno(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-6 col-md-4">
                                <div className="input-group-custom">
                                  <label htmlFor="des" className="label">
                                    IFSC Code
                                  </label>
                                  <input
                                    type="text"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="des"
                                    name="designation"
                                    value={refifsccode}
                                    onChange={(e) => {
                                      Setrefifsccode(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-6 col-md-4">
                                <div className="input-group-custom">
                                  <label htmlFor="type" className="label">
                                    Type of Account
                                  </label>
                                  <input
                                    type="text"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="type"
                                    name="type_of_partner"
                                    value={refbankacctype}
                                    onChange={(e) => {
                                      Setrefbankacctype(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 admin_patrner_personal_info">
                        <div className="d-flex justify-content-between">
                          <p className="">KYC Details</p>
                          <div
                            className="edit_icon"
                            onClick={() => toggleShoweditkyc(!showeditkyc)}
                          >
                            {!showeditkyc && (
                              <div>
                                <EditIcon className="search_icons" />
                                <span> Edit</span>
                              </div>
                            )}
                            {showeditkyc && (
                              <div>
                                <button
                                  type="submit"
                                  className="edit_icon"
                                  onClick={addkycdetails}
                                >
                                  Save
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                        {!showeditkyc && (
                          <>
                            <div className="row">
                              <div className="col-6 col-md-3">
                                <div>
                                  <p className="m-0 admin_type_heading">
                                    PAN Number
                                  </p>
                                  <span className="admin_type_value">
                                    {refpanno}
                                  </span>
                                </div>
                              </div>
                              <div className="col-6 col-md-3">
                                <div>
                                  <p className="m-0 admin_type_heading">Dob</p>
                                  <span className="admin_type_value">
                                    {refdobnew}
                                  </span>
                                </div>
                              </div>
                              <div className="col-6 col-md-3">
                                <div>
                                  <p className="m-0 admin_type_heading">
                                    Aadhar Number
                                  </p>
                                  <span className="admin_type_value">
                                    {refaadharno}
                                  </span>
                                </div>
                              </div>
                              <div className="col-6 col-md-3">
                                <div>
                                  <p className="m-0 admin_type_heading">IFSC</p>
                                  <span className="admin_type_value">
                                    {" "}
                                    {refifsccode}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-md-4">
                                <button className="download_btn">
                                  <DownloadIcon />
                                  Photo
                                </button>
                              </div>
                              <div className="col-md-4">
                                <button className="download_btn">
                                  <DownloadIcon />
                                  Pan Card
                                </button>
                              </div>
                              <div className="col-md-4">
                                <button className="download_btn">
                                  <DownloadIcon />
                                  Aadhar Card
                                </button>
                              </div>
                            </div>
                          </>
                        )}
                        {showeditkyc && (
                          <div className="d-flex justify-content-between flex-wrap contact_info_admin">
                            <div className="row">
                              <div className="col-md-3">
                                <div className="input-group-custom">
                                  <label
                                    htmlFor="type"
                                    className="label kyc_detail_title"
                                  >
                                    Pan Number
                                  </label>
                                  <input
                                    type="text"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="type"
                                    name="type_of_partner"
                                    value={refpanno}
                                    onChange={(e) => {
                                      Setrefpanno(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="input-group-custom">
                                  <label
                                    htmlFor="date"
                                    className="label kyc_detail_title"
                                  >
                                    Dob
                                  </label>
                                  <input
                                    type="date"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="type"
                                    name="type_of_partner"
                                    value={refdob}
                                    onChange={(e) => {
                                      Setrefdob(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="input-group-custom">
                                  <label
                                    htmlFor="type"
                                    className="label kyc_detail_title"
                                  >
                                    Aadhar Number
                                  </label>
                                  <input
                                    type="text"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="type"
                                    name="type_of_partner"
                                    value={refaadharno}
                                    onChange={(e) => {
                                      Setrefaadharno(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="input-group-custom">
                                  <label
                                    htmlFor="type"
                                    className="label kyc_detail_title"
                                  >
                                    IFSC
                                  </label>
                                  <input
                                    type="text"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="type"
                                    name="type_of_partner"
                                    value={refifsccode}
                                    onChange={(e) => {
                                      Setrefifsccode(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row mt-3" style={{}}>
                              <div className="col-md-4">
                                <div>
                                  <input
                                    type="file"
                                    className="file"
                                    onChange={changePhoto}
                                  />
                                  Upload Photo
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div>
                                  <input
                                    type="file"
                                    className="file"
                                    onChange={changeAadhaarPhoto}
                                  />
                                  Upload Pan
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div>
                                  <input
                                    type="file"
                                    className="file"
                                    onChange={changePanPhoto}
                                  />
                                  Upload Aadhar
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <div className="p-3 admin_patrner_personal_info">
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="">Target Details</p>
                          <div
                            className="edit_icon"
                            onClick={() => toggleShowtarget(!showtarget)}
                          >
                            {!showtarget && (
                              <div>
                                <EditIcon className="search_icons" />
                                <span> Edit</span>
                              </div>
                            )}
                            {showtarget && (
                              <div>
                                <button
                                  type="submit"
                                  className="edit_icon"
                                  onClick={mydetails}
                                >
                                  Save
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                        {!showtarget && (
                          <div className="viewing_details">
                            <div className="row">
                              <div className="col-6 col-md-6">
                                <div>
                                  <p className="m-0 admin_type_heading">
                                    Target Assigned
                                  </p>
                                  <span className="admin_type_value">
                                    {targettobeachieved}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {showtarget && (
                          <div className="edit_details">
                            <div className="row">
                              <div className="col-6 col-md-6">
                                <div className="input-group-custom">
                                  <label htmlFor="comp" className="label">
                                    Target Assigned
                                  </label>
                                  <input
                                    type="number"
                                    className="input-area admin_partner_det_input"
                                    required
                                    id="comp"
                                    name="company_name"
                                    value={targettobeachieved}
                                    onChange={(e) => {
                                      Settargettobeachieved(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="p-3 admin_patrner_personal_info">
                            <div className="d-flex justify-content-between align-items-center">
                              <p className="">Referal Code</p>
                              <div
                                className="edit_icon"
                                onClick={() => toggleShowref(!showref)}
                              >
                                {!showref && (
                                  <div>
                                    <EditIcon className="search_icons" />
                                    <span> Edit</span>
                                  </div>
                                )}
                                {showref && (
                                  <div>
                                    <button
                                      type="submit"
                                      className="edit_icon"
                                      onClick={updatereferalcode}
                                    >
                                      Save
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                            {!showref && (
                              <div className="viewing_details">
                                <div className="row">
                                  <div className="col-6 col-md-6">
                                    <div>{referalcode}</div>
                                  </div>
                                </div>
                              </div>
                            )}
                            {showref && (
                              <div className="edit_details">
                                <div className="row">
                                  <div className="col-6 col-md-6">
                                    <div className="input-group-custom">
                                      <input
                                        type="text"
                                        className="input-area admin_partner_det_input"
                                        required
                                        id="inputName"
                                        name="name"
                                        value={referalcode}
                                        onChange={(e) => {
                                          Setreferalcode(e.target.value);
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
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
                    </div>
                    <div className="row mt-3">
                      <div className="col-4">
                        <div className="p-3 admin_patrner_personal_info">
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="">Earning Details</p>
                            <div
                              className="edit_icon"
                              onClick={() => toggleshowreftds(!showreftds)}
                            >
                              {!showreftds && (
                                <div>
                                  <EditIcon className="search_icons" />
                                  <span> Edit</span>
                                </div>
                              )}
                              {showreftds && (
                                <div>
                                  <button
                                    type="submit"
                                    className="edit_icon"
                                    onClick={updatetdsval}
                                  >
                                    Save
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                          {!showreftds && (
                            <div className="viewing_details">
                              <div className="row">
                                <div className="col-6 col-md-6">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Tds
                                    </p>
                                    <span className="admin_type_value">
                                      {tdsvalue}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-6">{msg}</div>
                              </div>
                            </div>
                          )}
                          {showreftds && (
                            <div className="edit_details">
                              <div className="row">
                                <div className="col-6 col-md-6">
                                  <div className="input-group-custom">
                                    <label htmlFor="loc" className="label">
                                      tds
                                    </label>
                                    <input
                                      type="text"
                                      className="input-area admin_partner_det_input"
                                      required
                                      id="inputName"
                                      name="name"
                                      value={tdsvalue}
                                      onChange={(e) => {
                                        Settdsvalue(e.target.value);
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
                    <div className="mt-3">
                      <div>
                        <Link to={`/referedlead/${Id}`}>
                          <button className="refered_lead_btn">
                            Refered Leads
                          </button>
                        </Link>
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
