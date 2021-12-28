import React, { useState } from "react";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Formik, Form, Field, useField } from "formik";
import { TextField } from "./TextField";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import $ from "jquery";
import { SelectField } from "./SelectField";
const AddUserPopup = ({ ids }) => {
  const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );
  let history = useHistory();
  const validate = Yup.object({
    full_name: Yup.string()
      .min(3, "Name Must Be Atleast 3 characters or less")
      .max(15, "Name Must Not More Than 15 characters!!")
      .required("Name is Required"),
    // email: Yup.string().email("Email is invalid").required("Email is required"),
    userId: Yup.string().required("UserId is required"),
    password: Yup.string().required("Enter Password"),

    role: Yup.string().required("Please Select Type/Role of user"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          full_name: "",
          userId: "",
          password: "",
          role: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log("REDDDDD122", ids);
          console.log(values);
          let verify = localStorage.getItem("_id");
          console.log(verify);

          const addusers = {
            name: values.full_name,
            userId: values.userId,
            password: values.password,
            role: values.role,
          };

          console.log("Data", addusers);

          const headers = {
            "Content-Type": "application/json",
          };

          axios
            // .post(`https://pure-wave-48602.herokuapp.com/addfse`, datafse, {
            .post(
              `https://pure-wave-48602.herokuapp.com/createuser`,
              addusers,
              {
                headers,
              }
            )
            .then((res) => {
              console.log(res);
              let Status = res.data.status;
              if (Status === "success") {
                alert("added sucessfully");
                // history.push("/fselist");
                // $(".popup-add_hot-lead-added").show();
                // $(".bd-example-modal-lg_ref3").modal("hide");
              } else if (Status === "failed") {
                alert(" Details are already Exists");
              }
            });
        }}
      >
        {(formik) => (
          <div>
            {console.log(formik)}
            <Form>
              <div className="d-flex justify-content-between">
                <div className="p-3" style={{ width: "100%" }}>
                  <div>
                    <div className="p-3 add_hot_lead_content">
                      <div className="row ">
                        <div className="col-md-12">
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
                      </div>
                      <div className="row pb-3">
                        <div className="col-12 col-sm-12">
                          <div className="input-group_add_hot_lead ">
                            <TextField
                              type="text"
                              // className="input-area_add_hot_lead"
                              // required
                              // id="inputEmail"
                              name="userId"
                              label="User Id"
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
                      </div>
                      <div className="row">
                        <div className="col-6 col-sm-6">
                          <div className="input-group_add_hot_lead ">
                            <TextField
                              type="password"
                              // className="input-area_add_hot_lead"
                              // required
                              // id="inputNuber"
                              name="password"
                              label="Password"
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
                        <div className="col-6 col-sm-6">
                          <div className="input-group_add_hot_lead ">
                            <SelectField
                              className="form-control"
                              name="role"
                              label="Role"
                              defaultValue={"select"}
                              // autoComplete="off"
                            >
                              <option value="select" disabled>
                                Select
                              </option>
                              <option value="Admin">Admin</option>
                              <option value="BD">BD</option>
                              <option value="FSE">FSE</option>
                            </SelectField>
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
                          Add User
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
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AddUserPopup;
