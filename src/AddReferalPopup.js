import React, { useState } from "react";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Formik, Form, Field, useField } from "formik";
import { TextField } from "./TextField";

import * as Yup from "yup";
import axios from "axios";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import $ from "jquery";
import { SelectField } from "./SelectField";
const AddReferalPopup = () => {
  const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );

  const validate = Yup.object({
    full_name: Yup.string()
      .min(3, "Name Must Be Atleast 3 characters or less")
      .max(15, "Name Must Not More Than 15 characters!!")
      .required("Name is Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    phone_number: Yup.string()
      .matches(phoneRegex, "Invalid Phone Number")
      .required("Phone Number is required")
      .max(10, "Phone Number Must Not More Than 10 Digits"),
    company_name: Yup.string().required("Company Name is required"),
    total_expernice: Yup.string().required("Total Expernice is required"),
    designation: Yup.string().required("Designation is required"),
    work_location: Yup.string().required("Work Location is required"),
    date_of_birth: Yup.string().required("Date of Birth is required"),
    joining_date: Yup.date().required("Joining Date is Required"),
    typeofref: Yup.string().required("Please Specify Type of Partner"),
    Profile: Yup.string().required("Please upload photo"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          full_name: "",
          Profile: "",
          email: "",
          phone_number: "",
          company_name: "",
          total_expernice: "",
          designation: "",
          work_location: "",
          date_of_birth: "",
          joining_date: "",
          typeofref: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log(values);
          let verify = localStorage.getItem("_id");
          console.log(verify);

          const data = {
            fullname: values.full_name,

            email: values.email,
            mobile: values.phone_number,
            companyname: values.company_name,
            experience: values.total_expernice,
            designation: values.designation,
            location: values.work_location,
            dob: values.date_of_birth,
            doj: values.joining_date,
            partnertype: values.typeofref,
          };

          console.log("Data", data);

          const headers = {
            "Content-Type": "application/json",
          };

          axios
            .post(`https://pure-wave-48602.herokuapp.com/addpartner`, data, {
              headers,
            })
            .then((res) => {
              console.log(res);
              let Status = res.data.status;
              if (Status === 200) {
                // $(".popup-add_hot-lead-added").show();
                // $(".bd-example-modal-lg_ref3").modal("hide");
              } else if (Status === "failed") {
                alert("Details are already Exists");
              }
            });
        }}
      >
        {(formik) => (
          <div>
            {console.log(formik)}
            <Form>
              <div className="d-flex justify-content-between">
                <div className="p-1" style={{ width: "100%" }}>
                  <div>
                    <div className="p-3 add_hot_lead_content">
                      <div className="row ">
                        <div className="col-md-6">
                          <div className="input-group_add_hot_lead ">
                            <TextField
                              type="text"
                              // className="input-area_add_hot_lead"
                              // required
                              // id="inputName"
                              name="full_name"
                              label="Full Name"
                              // autoComplete="off"
                              // value={formik.values.name}
                              // onChange={formik.handleChange}
                            />
                            {/* <label
                              htmlFor="inputName"
                              className="label_add_hot_lead"
                            >
                              Name
                            </label> */}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-group_add_hot_lead ">
                            <TextField
                              type="file"
                              // className="input-area_add_hot_lead"
                              // required
                              // id="inputName"
                              name="Profile"
                              label="Photo"
                              // autoComplete="off"
                              // value={formik.values.name}
                              // onChange={formik.handleChange}
                            />
                            {/* <label
                            htmlFor="inputName"
                            className="label_add_hot_lead"
                          >
                            Name
                          </label> */}
                          </div>
                        </div>
                      </div>
                      <div className="row pb-3">
                        <div className="col-6 col-sm-6">
                          <div className="input-group_add_hot_lead ">
                            <TextField
                              type="email"
                              // className="input-area_add_hot_lead"
                              // required
                              // id="inputEmail"
                              name="email"
                              label="Email"
                              // autoComplete="off"
                            />
                            {/* <label
                              htmlFor="inputEmail"
                              className="label_add_hot_lead"
                            >
                              Email
                            </label> */}
                          </div>
                        </div>

                        <div className="col-6 col-sm-6">
                          <div className="input-group_add_hot_lead ">
                            <TextField
                              type="tel"
                              // className="input-area_add_hot_lead"
                              // required
                              // id="inputNuber"
                              name="phone_number"
                              label="Phone Number"
                              // autoComplete="off"
                            />
                            {/* <label
                              htmlFor="inputNumber"
                              className="label_add_hot_lead"
                            >
                              Phone Number
                            </label> */}
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-6 col-sm-6">
                          <div className="input-group_add_hot_lead ">
                            <TextField
                              type="text"
                              // className="input-area_add_hot_lead"
                              // required
                              // id="inputPlotSize"
                              name="company_name"
                              label="Company Name"
                              // autoComplete="off"
                            />
                            {/* <label
                              htmlFor="inputPlotSize"
                              className="label_add_hot_lead"
                            >
                              Plot Size
                            </label> */}
                          </div>
                        </div>

                        <div className="col-6 col-sm-6">
                          <div className="input-group_add_hot_lead ">
                            <TextField
                              type="text"
                              // className="input-area_add_hot_lead"
                              // required
                              // id="inputDevelopmentName"
                              name="total_expernice"
                              label="Total Expernice"
                              // autoComplete="off"
                            />
                            {/* <label
                              htmlFor="inputDevelopmentName"
                              className="label_add_hot_lead"
                            >
                              Development Name
                            </label> */}
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-6 col-sm-6">
                          <div className="input-group_add_hot_lead ">
                            <TextField
                              type="text"
                              // className="input-area_add_hot_lead"
                              // required
                              // id="inputPlotSize"
                              name="designation"
                              label="Designation"
                              // autoComplete="off"
                            />
                            {/* <label
                              htmlFor="inputPlotSize"
                              className="label_add_hot_lead"
                            >
                              Plot Size
                            </label> */}
                          </div>
                        </div>

                        <div className="col-6 col-sm-6">
                          <div className="input-group_add_hot_lead ">
                            <SelectField
                              className="form-control"
                              name="typeofref"
                              label="Type Of Partner"
                              defaultValue={"select"}
                              // autoComplete="off"
                            >
                              <option value="select">Select</option>
                              <option value="RP">RP</option>
                              <option value="CP">CP</option>
                            </SelectField>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-6 col-sm-6">
                          <div className="input-group_add_hot_lead ">
                            <TextField
                              type="date"
                              // className="input-area_add_hot_lead"
                              // required
                              // id="inputLocation"
                              name="date_of_birth"
                              label="Date of Birth"
                              // autoComplete="off"
                            />
                            {/* <label
                              htmlFor="inputLocation"
                              className="label_add_hot_lead"
                            >
                              Location
                            </label> */}
                          </div>
                        </div>

                        <div className="col-6 col-sm-6">
                          <div className="input-group_add_hot_lead ">
                            <TextField
                              type="date"
                              // className="input-area_add_hot_lead"
                              // required
                              // id="inputConstructionDate"
                              name="joining_date"
                              label="Joining Date"
                              // autoComplete="off"
                            />
                            {/* <label
                              htmlFor="inputConstructionDate"
                              className="label_add_hot_lead"
                            >
                              Construction Start
                            </label> */}
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-12 col-sm-12">
                          <div className="input-group_add_hot_lead ">
                            <TextField
                              type="text"
                              // className="input-area_add_hot_lead"
                              // required
                              // id="inputPlotSize"
                              name="work_location"
                              label="Work Location"
                              // autoComplete="off"
                            />
                            {/* <label
                              htmlFor="inputPlotSize"
                              className="label_add_hot_lead"
                            >
                              Plot Size
                            </label> */}
                          </div>
                        </div>
                      </div>
                      <div>
                        <button
                          className="btn_add_hot_lead"
                          type="submit"
                          // data-1toggle="modal"
                          // data-target=".bd-lead-added-successfully"
                          // data-toggle="modal"
                          // data-target=".popup-add_hot-lead-added"
                          // data-toggle="modal"
                          // data-target="popup-add_hot-lead-added"
                          // data-dismiss="modal"
                        >
                          Add Partners
                        </button>
                      </div>

                      {/* 2nd Model */}
                      <div
                        className="modal fade bd-lead-added-successfully"
                        role="dialog"
                        aria-labelledby="myLargeModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-sm">
                          <CheckCircleIcon />
                          <span>Lead Added Successfully</span>
                        </div>
                      </div>
                      <div>
                        {/* <button
                          id="myPopupAddLead"
                          data-toggle="modal"
                          data-target=".popup-add_hot-lead-added"
                          style={{ display: "none" }}
                        >
                          Hello World
                        </button> */}
                        <div
                          className="d-flex justify-content-between"
                          style={{ height: "0" }}
                        >
                          <div className="p-3" style={{ width: "100%" }}>
                            <div className="pb-3">
                              <div
                                className="modal fade popup-add_hot-lead-added"
                                role="dialog"
                                aria-labelledby="myLargeModalLabel"
                                aria-hidden="true"
                                // id="myModal"
                                // style={{display:"none"}}
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
                                            Your Account details are
                                            <br />
                                            Received,after verification you will
                                            be notified
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <button
                          className="btn_add_hot_lead"
                          // type="submit"
                          data-toggle="modal"
                          data-target=".popup-add_hot-lead-added"
                         
                        >
                          Apop
                        </button> */}
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AddReferalPopup;
