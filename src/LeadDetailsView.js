import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminNav from "./AdminNav";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DownloadIcon from "@mui/icons-material/Download";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { SelectField } from "./SelectField";
import axios from "axios";
export default function LeadDetailsView() {
  const [CreditedStatus, SetCreditedStatus] = useState(false);
  const [showtarget, toggleShowtarget] = useState(false);
  const [showtarget2, toggleShowtarget2] = useState(false);
  const [showtarget3, toggleShowtarget3] = useState(false);
  const [showtimepic, toggleshowtimepic] = useState(false);
  //   const [trues, Settrues] = useState(false);
  const { Id } = useParams();
  console.log("id", Id);

  let history = useHistory();
  // console.log("total earning id", total_earning);
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  // state to set all personal info values of partners
  const [leadnames, Setleadnames] = useState([]);
  const [leadpackagename, Setleadpackagename] = useState([]);
  const [leadworkloc, Setleadworkloc] = useState([]);
  const [leadareasqft, Setleadareasqft] = useState([]);

  const [leadbookingamt, Setleadbookingamt] = useState([]);
  const [leaddpaymentstage, Setleaddpaymentstage] = useState([]);
  const [paymentdate, Setpaymentdate] = useState([]);
  // const [paymentmode, Setpaymentmode] = useState([]);
  const [paystage, Setpaystage] = useState([]);

  const [leadconststartdate, Setleadconststartdate] = useState([]);
  const [leadprestatusvalue, Setleadprestatusvalue] = useState([]);
  const [leadpoststatusvalue, Setleadpoststatusvalue] = useState([]);

  // state to set contact info
  const [leademail, Setleademail] = useState([]);
  const [leadmobileno, Setleadmobileno] = useState([]);

  const [leadconstructionstage, Setleadconstructionstage] = useState([]);
  const [tdsvalue, Settdsvalue] = useState([]);

  // stage payments
  const [stage1netearning, Setstage1netearning] = useState([]);
  const [stage2netearning, Setstage2netearning] = useState([]);
  const [stage3netearning, Setstage3netearning] = useState([]);
  const [stage2leadpaymentdatefrom, Setstage2leadpaymentdatefrom] = useState(
    []
  );
  const [stage2leadpaymentdateto, Setstage2leadpaymentdateto] = useState([]);
  const [stage3leadpaymentdatefrom, Setstage3leadpaymentdatefrom] = useState(
    []
  );
  const [approvedvalue, Setapprovedvalue] = useState([]);
  const [stage3leadpaymentdateto, Setstage3leadpaymentdateto] = useState([]);

  // ----------------------------For payment stages ----------------------------
  const [paymentstage1, Setpaymentstage1] = useState([]);
  const [paymentstage2, Setpaymentstage2] = useState([]);
  const [paymentstage3, Setpaymentstage3] = useState([]);

  const [releaserangefrom1, Setreleaserangefrom1] = useState([]);
  const [releaserangefrom2, Setreleaserangefrom2] = useState([]);
  const [releaserangefrom3, Setreleaserangefrom3] = useState([]);

  const [releaserangeto1, Setreleaserangeto1] = useState([]);
  const [releaserangeto2, Setreleaserangeto2] = useState([]);
  const [releaserangeto3, Setreleaserangeto3] = useState([]);

  const [paymentdate1, Setpaymentdate1] = useState([]);
  const [paymentdate2, Setpaymentdate2] = useState([]);
  const [paymentdate3, Setpaymentdate3] = useState([]);

  const [paymentmode1, Setpaymentmode1] = useState([]);
  const [paymentmode2, Setpaymentmode2] = useState([]);
  const [paymentmode3, Setpaymentmode3] = useState([]);

  const [stage1, Setstage1] = useState([]);
  const [stage2, Setstage2] = useState([]);
  const [stage3, Setstage3] = useState([]);

  const [creditedstat1, Setcreditedstat1] = useState([]);
  const [creditedstat2, Setcreditedstat2] = useState([]);
  const [creditedstat3, Setcreditedstat3] = useState([]);

  const [CustomerStatus, SetCustomerStatus] = useState([]);

  useEffect(() => {
    // To get data of lead by their ID's
    axios
      .get(`https://pure-wave-48602.herokuapp.com/leadbyid?_id=${Id}`)
      .then((responsedata) => {
        console.log(responsedata.data.listofcustomers);

        // Setpaymentstage1(responsedata.data.listofcustomers.stages[0]);
        //  Setpaymentstage2(responsedata.data.listofcustomers.stages[1]);
        // console.log("payem1", paymentstage1);

        // Personal info
        Setleadnames(responsedata.data.listofcustomers.name);
        Setleadpackagename(responsedata.data.listofcustomers.packagename);
        Setleadworkloc(responsedata.data.listofcustomers.location);
        Setleadareasqft(responsedata.data.listofcustomers.area);
        Setleadbookingamt(responsedata.data.listofcustomers.booking_amt);
        Setleadconststartdate(responsedata.data.listofcustomers.start_date);
        Setleadprestatusvalue(responsedata.data.listofcustomers.prestatus);
        Setleadpoststatusvalue(responsedata.data.listofcustomers.poststatus);
        Setleadconstructionstage(
          responsedata.data.listofcustomers.construction_stage
        );
        SetCustomerStatus(responsedata.data.listofcustomers.customerstatus);
        console.log(
          "CUSTOMSTATUS",
          responsedata.data.listofcustomers.customerstatus
        );
        // Contact info
        Setleademail(responsedata.data.listofcustomers.email);
        Setleadmobileno(responsedata.data.listofcustomers.contact_no);
        const len = responsedata.data.listofcustomers.stages.length - 1;
        console.log("looo", len);
        if (len >= 0) {
          Setleaddpaymentstage(
            responsedata.data.listofcustomers.stages[len].stage
          );
        } else {
          // Setleaddpaymentstage("NA");
          // Setleaddpaymentstagefrom("NA");
        }
      });

    axios
      .get(`https://pure-wave-48602.herokuapp.com/getstagedetails?_id=${Id}`)
      .then((responsedatas) => {
        // if first array is there run this
        if (responsedatas.data.Stages[0]) {
          Setpaymentmode1(responsedatas.data.Stages[0].payment_mode);
          Setpaymentstage1(responsedatas.data.Stages[0].net_earning);
          Setreleaserangefrom1(responsedatas.data.Stages[0].payment_date_from);
          Setreleaserangeto1(responsedatas.data.Stages[0].payment_date_to);
          Setpaymentdate1(responsedatas.data.Stages[0].payment_date);
          Setstage1(responsedatas.data.Stages[0].stage);
          Setcreditedstat1(responsedatas.data.Stages[0].credited);
          console.log("Reeu", responsedatas.data.Stages);
        }
        // If second array has values and populated
        if (responsedatas.data.Stages[1]) {
          //   Settrues((state) => !state);
          //   console.log("DONNNN", trues);
          Setpaymentmode2(responsedatas.data.Stages[1].payment_mode);
          Setpaymentstage2(responsedatas.data.Stages[1].net_earning);

          Setreleaserangefrom2(responsedatas.data.Stages[1].payment_date_from);

          Setreleaserangeto2(responsedatas.data.Stages[1].payment_date_to);
          Setpaymentdate2(responsedatas.data.Stages[1].payment_date);
          Setstage2(responsedatas.data.Stages[1].stage);
          Setcreditedstat2(responsedatas.data.Stages[1].credited);
        }
        if (responsedatas.data.Stages[2]) {
          Setpaymentmode3(responsedatas.data.Stages[2].payment_mode);
          Setpaymentstage3(responsedatas.data.Stages[2].net_earning);

          Setreleaserangefrom3(responsedatas.data.Stages[2].payment_date_from);

          Setreleaserangeto3(responsedatas.data.Stages[2].payment_date_to);
          Setpaymentdate3(responsedatas.data.Stages[2].payment_date);
          Setstage3(responsedatas.data.Stages[2].stage);
          Setcreditedstat3(responsedatas.data.Stages[2].credited);
        }
      });

    // Payment Stage Details

    axios
      .get(`https://pure-wave-48602.herokuapp.com/getearningdetails?_id=${Id}`)
      .then((resultvalue) => {
        console.log("Apprr val", resultvalue.data.Approved_value);
        Setapprovedvalue(resultvalue.data.Approved_value);
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
                <div className="col-md-10 d-flex align-items-center">
                  <Link to="referedlead/Id" className="partner_back_btn">
                    <span>
                      <ArrowBackIosNewIcon />
                      Back
                    </span>
                  </Link>
                </div>
              </div>
              <div className="partner_details_edit_sec">
                <div className="row">
                  <div className="col-md-9">
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
                                {leadnames}
                              </span>
                            </div>
                          </div>
                          <div className="col-6 col-md-3">
                            <div>
                              <p className="m-0 admin_type_heading">Package</p>
                              <span className="admin_type_value">
                                {" "}
                                {leadpackagename}
                              </span>
                            </div>
                          </div>
                          <div className="col-6 col-md-3">
                            <div>
                              <p className="m-0 admin_type_heading">Location</p>
                              <span className="admin_type_value">
                                {leadworkloc}
                              </span>
                            </div>
                          </div>
                          <div className="col-6 col-md-3">
                            <div>
                              <p className="m-0 admin_type_heading">Sq.ft</p>
                              <span className="admin_type_value">
                                {leadareasqft}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-6 col-md-3">
                            <div>
                              <p className="m-0 admin_type_heading">
                                Booking Amount
                              </p>
                              <span className="admin_type_value">
                                {leadbookingamt}
                              </span>
                            </div>
                          </div>
                          <div className="col-6 col-md-3">
                            <div>
                              <p className="m-0 admin_type_heading">
                                Payment Stage
                              </p>
                              <span className="admin_type_value">
                                {leaddpaymentstage != ""
                                  ? leaddpaymentstage
                                  : "-"}
                              </span>
                            </div>
                          </div>
                          <div className="col-6 col-md-3">
                            <div>
                              <p className="m-0 admin_type_heading">
                                Construction Start Date
                              </p>
                              <span className="admin_type_value">
                                {leadconststartdate}
                              </span>
                            </div>
                          </div>
                          <div className="col-6 col-md-3">
                            <div>
                              <p className="m-0 admin_type_heading">Status</p>
                              <span className="admin_type_value">
                                {CustomerStatus != "" ? CustomerStatus : "NA"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="p-3 admin_patrner_personal_info">
                      <div className="d-flex justify-content-between">
                        <p className="mb-0">Contact Info</p>
                      </div>

                      <div className="contact_info_">
                        <div>
                          <p className="m-0 admin_type_heading">Email</p>
                          <span className="admin_type_value">{leademail}</span>
                        </div>
                        <div className="ml-4">
                          <p className="m-0 admin_type_heading">Mobile No</p>
                          <span className="admin_type_value">
                            {leadmobileno}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-8">
                    <div className="content-tabs_dashboard">
                      <div
                        className={
                          toggleState === 1
                            ? "content1  active-content1"
                            : "content1"
                        }
                      >
                        <div className="p-3 admin_patrner_personal_info">
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="">Stage Payment Details</p>
                          </div>
                          <div>
                            <div
                              className=""
                              style={{
                                background: "#f4f4f4",
                                padding: "15px",
                                borderRadius: "10px",
                                paddingBottom: "25px",
                              }}
                            >
                              <div className="row">
                                <div className="col-6 col-md-3">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Amount
                                    </p>
                                    <span className="admin_type_value">
                                      {paymentstage1 != ""
                                        ? paymentstage1
                                        : "0"}
                                      /-
                                    </span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-3">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Construction Stage
                                    </p>
                                    <span className="admin_type_value">
                                      {leadconstructionstage != ""
                                        ? leadconstructionstage
                                        : "NA"}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-2">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Release %
                                    </p>
                                    <span className="admin_type_value">33</span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-4">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Release Range
                                    </p>
                                    <span className="admin_type_value">
                                      {releaserangefrom1} - {releaserangeto1}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-3 mt-3">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Payment Date
                                    </p>
                                    <span className="admin_type_value">
                                      {paymentdate1 != ""
                                        ? paymentdate1
                                        : "No date"}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-3 mt-3">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Payment Mode
                                    </p>
                                    <span className="admin_type_value">
                                      {paymentmode1 != "" ? paymentmode1 : "NA"}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-3 mt-3">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Stage
                                    </p>
                                    <span className="admin_type_value">
                                      {stage1 != "" ? stage1 : "-"}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-3 mt-3">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Credited
                                    </p>
                                    <span className="admin_type_value">
                                      {creditedstat1 == true ? "Yes" : "No"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          toggleState === 2
                            ? "content1  active-content1"
                            : "content1"
                        }
                      >
                        <div className="p-3 admin_patrner_personal_info">
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="">Stage Payment Details 2</p>
                          </div>
                          <div>
                            <div
                              className=""
                              style={{
                                background: "#f4f4f4",
                                padding: "15px",
                                borderRadius: "10px",
                                paddingBottom: "25px",
                              }}
                            >
                              <div className="row">
                                <div className="col-6 col-md-3">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Amount
                                    </p>
                                    <span className="admin_type_value">
                                      {paymentstage2 != ""
                                        ? paymentstage2
                                        : "0"}
                                      /-
                                    </span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-3">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Construction Stage
                                    </p>
                                    <span className="admin_type_value">
                                      {leadconstructionstage != ""
                                        ? leadconstructionstage
                                        : "Not available"}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-2">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Release %
                                    </p>
                                    <span className="admin_type_value">33</span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-4">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Release Range
                                    </p>
                                    <span className="admin_type_value">
                                      {releaserangefrom2} - {releaserangeto2}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-3 mt-3">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Payment Date
                                    </p>
                                    <span className="admin_type_value">
                                      {paymentdate2 != ""
                                        ? paymentdate2
                                        : "No date"}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-3 mt-3">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Payment Mode
                                    </p>
                                    <span className="admin_type_value">
                                      {paymentmode2 != "" ? paymentmode2 : "NA"}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-3 mt-3">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Stage
                                    </p>
                                    <span className="admin_type_value">
                                      {stage2 != "" ? stage2 : "Not specified"}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-3 mt-3">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Credited
                                    </p>
                                    <span className="admin_type_value">
                                      {creditedstat2 == true ? "Yes" : "No"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          toggleState === 3
                            ? "content1  active-content1"
                            : "content1"
                        }
                      >
                        <div className="p-3 admin_patrner_personal_info">
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="">Stage Payment Details 3</p>
                          </div>
                          <div>
                            <div
                              className=""
                              style={{
                                background: "#f4f4f4",
                                padding: "15px",
                                borderRadius: "10px",
                                paddingBottom: "25px",
                              }}
                            >
                              <div className="row">
                                <div className="col-6 col-md-3">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Amount
                                    </p>
                                    <span className="admin_type_value">
                                      {paymentstage3 != ""
                                        ? paymentstage3
                                        : "0"}
                                      /-
                                    </span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-3">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Construction Stage
                                    </p>
                                    <span className="admin_type_value">
                                      {leadconstructionstage != ""
                                        ? leadconstructionstage
                                        : "Not available"}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-2">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Release %
                                    </p>
                                    <span className="admin_type_value">33</span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-4">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Release Range
                                    </p>
                                    <span className="admin_type_value">
                                      {releaserangefrom3} - {releaserangeto3}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-3 mt-3">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Payment Date
                                    </p>
                                    <span className="admin_type_value">
                                      {paymentdate3 != ""
                                        ? paymentdate3
                                        : "No Date"}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-3 mt-3">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Payment Mode
                                    </p>
                                    <span className="admin_type_value">
                                      {paymentmode3 != "" ? paymentmode3 : "NA"}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-3 mt-3">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Stage
                                    </p>
                                    <span className="admin_type_value">
                                      {stage3 != "" ? stage3 : "Not specified"}
                                    </span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-3 mt-3">
                                  <div>
                                    <p className="m-0 admin_type_heading">
                                      Credited
                                    </p>
                                    <span className="admin_type_value">
                                      {creditedstat3 == true ? "Yes" : "No"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="stepper-wrapper">
                      <div class="stepper-item completed">
                        <div
                          className={toggleState === 1 ? " step-counter" : ""}
                          onClick={() => toggleTab(1)}
                          style={{ cursor: "pointer" }}
                        >
                          1
                        </div>
                        {/* <div class="step-name">First</div> */}
                      </div>
                      <div class="stepper-item completed">
                        <div
                          className={
                            toggleState === 2 ? "step-counter" : "Disabledclass"
                          }
                          onClick={() => toggleTab(2)}
                          style={{ cursor: "pointer" }}
                        >
                          2
                        </div>
                        {/* <div class="step-name">Second</div> */}
                      </div>
                      <div class="stepper-item completed">
                        <div
                          className={toggleState === 3 ? " step-counter" : ""}
                          onClick={() => toggleTab(3)}
                          style={{ cursor: "pointer" }}
                        >
                          3
                        </div>
                        {/* <div class="step-name">Third</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="p-3 admin_patrner_personal_info">
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="">Earning Details</p>
                          </div>
                          <div className="viewing_details">
                            <div className="row">
                              <div className="col-6 col-md-6">
                                <div>
                                  <p className="m-0 admin_type_heading">
                                    Approved Value
                                  </p>
                                  <span className="admin_type_value">
                                    {approvedvalue != "" ? approvedvalue : "0"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 mt-3">
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10">
                    <div className="p-3 admin_patrner_personal_info">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="">Real Time Construction Status</p>
                        <div
                          className="edit_icon"
                          onClick={() => toggleshowtimepic(!showtimepic)}
                        >
                          {!showtimepic && (
                            <div>
                              <EditIcon className="search_icons" />
                              <span> Edit</span>
                            </div>
                          )}
                          {showtimepic && (
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
                      {!showtimepic && (
                        <div className="viewing_details mt-3">
                          <div className="row">
                            <div className="col-6 col-md-2">
                              <button className="download_btn">
                                <DownloadIcon />
                                Bedroom
                              </button>
                            </div>
                            <div className="col-6 col-md-2">
                              <button className="download_btn">
                                <DownloadIcon />
                                Kitchen
                              </button>
                            </div>
                            <div className="col-6 col-md-2">
                              <button className="download_btn">
                                <DownloadIcon />
                                Living Room
                              </button>
                            </div>
                            <div className="col-6 col-md-2">
                              <button className="download_btn">
                                <DownloadIcon />
                                Bathroom
                              </button>
                            </div>
                            <div className="col-6 col-md-2">
                              <button className="download_btn">
                                <DownloadIcon />
                                Dining
                              </button>
                            </div>
                            <div className="col-6 col-md-2">
                              <button className="download_btn">
                                <DownloadIcon />
                                Staircase
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                      {showtimepic && (
                        <div className="edit_details">
                          <div className="row">
                            <div className="col-6 col-md-2">
                              <div className="input-group-custom">
                                Bedroom
                                <input
                                  type="file"
                                  className="input-area admin_partner_det_input"
                                  required
                                  id="inputName"
                                  name="name"
                                  //   value={name}
                                  onChange={(e) => {
                                    // setName(e.target.value);
                                  }}
                                />
                                Upload Photo
                              </div>
                            </div>
                            <div className="col-6 col-md-2">
                              <div className="input-group-custom">
                                Kitchen
                                <input
                                  type="file"
                                  className="input-area admin_partner_det_input"
                                  required
                                  id="inputName"
                                  name="name"
                                  //   value={name}
                                  onChange={(e) => {
                                    // setName(e.target.value);
                                  }}
                                />
                                Upload Photo
                              </div>
                            </div>
                            <div className="col-6 col-md-2">
                              <div className="input-group-custom">
                                Living Room
                                <input
                                  type="file"
                                  className="input-area admin_partner_det_input"
                                  required
                                  id="inputName"
                                  name="name"
                                  //   value={name}
                                  onChange={(e) => {
                                    // setName(e.target.value);
                                  }}
                                />
                                Upload Photo
                              </div>
                            </div>
                            <div className="col-6 col-md-2">
                              <div className="input-group-custom">
                                Bathroom
                                <input
                                  type="file"
                                  className="input-area admin_partner_det_input"
                                  required
                                  id="inputName"
                                  name="name"
                                  //   value={name}
                                  onChange={(e) => {
                                    // setName(e.target.value);
                                  }}
                                />
                                Upload Photo
                              </div>
                            </div>
                            <div className="col-6 col-md-2">
                              <div className="input-group-custom">
                                Dining
                                <input
                                  type="file"
                                  className="input-area admin_partner_det_input"
                                  required
                                  id="inputName"
                                  name="name"
                                  //   value={name}
                                  onChange={(e) => {
                                    // setName(e.target.value);
                                  }}
                                />
                                Upload Photo
                              </div>
                            </div>
                            <div className="col-6 col-md-2">
                              <div className="input-group-custom">
                                Staircase
                                <input
                                  type="file"
                                  className="input-area admin_partner_det_input"
                                  required
                                  id="inputName"
                                  name="name"
                                  //   value={name}
                                  onChange={(e) => {
                                    // setName(e.target.value);
                                  }}
                                />
                                Upload Photo
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
