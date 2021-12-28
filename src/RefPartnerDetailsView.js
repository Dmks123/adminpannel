import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AdminNav from "./AdminNav";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import DownloadIcon from "@mui/icons-material/Download";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import $ from "jquery";
import { SelectField } from "./SelectField";
export default function RefPartnerDetailsView() {
  var impdata;
  // var DownloadButton = require('downloadbutton/es5')

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

  const [referedleadscount, Setreferedleadscount] = useState([]);
  const [VerifiedStatus, SetVerifiedStatus] = useState([]);
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

        Setreferedleadscount(reps.data.Referred_leads);
        console.log("countedr!!!!!!!!!", referedleadscount);

        SetVerifiedStatus(reps.data.partners[0].verified);
        console.log("veriiif!!!!!!!!!", VerifiedStatus);
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
                <div className="col-md-9 d-flex align-items-center">
                  <Link to="/rplist" className="partner_back_btn">
                    <span>
                      <ArrowBackIosNewIcon />
                      Back
                    </span>
                  </Link>
                </div>
                <div className="col-md-3 d-flex justify-content-end">
                  <div className="d-flex justify-content-around">
                    <div className="dropdown verify_btn">
                      <button
                        className="btn"
                        type="button"
                        id="dropdownMenuButton"
                      >
                        {/* {VerifiedStatus ? == "true" ? <CheckCircleIcon className="verify_icons" />
                        Verified : "Not Verified" } */}
                        {VerifiedStatus != false ? (
                          <div>
                            <CheckCircleIcon className="verify_icons" />
                            Verified
                          </div>
                        ) : (
                          <div>
                            <CancelIcon className="del_icons" />
                            Verification Pending
                          </div>
                        )}
                      </button>
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
                        </div>
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
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-3 admin_patrner_personal_info">
                        <div className="d-flex justify-content-between">
                          <p className="mb-0">Contact Info</p>
                        </div>
                        <div className="contact_info_">
                          <div>
                            <p className="m-0 admin_type_heading">Email</p>
                            <span className="admin_type_value">{refemail}</span>
                          </div>
                          <div className="ml-4">
                            <p className="m-0 admin_type_heading">Mobile No</p>
                            <span className="admin_type_value">
                              {refmobile}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="p-3 admin_patrner_personal_info">
                            <div className="d-flex justify-content-between align-items-center">
                              <p className="">Profile Pic</p>
                            </div>
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
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="p-3 admin_patrner_personal_info">
                            <div className="d-flex justify-content-between align-items-center">
                              <p className="">Refered Contacts</p>
                            </div>
                            <div className="viewing_details">
                              <div className="d-flex justify-content-first">
                                <div className="referedleads_count">
                                  <b> {referedleadscount}</b>
                                </div>
                              </div>
                            </div>
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
      </div>
    </div>
  );
}
