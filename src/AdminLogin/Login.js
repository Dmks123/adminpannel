import React from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Logos from "../Assets/Group 488889.png";
export default function Login() {
  const [userid, Setuserid] = useState("");
  const [passwords, Setpassword] = useState("");
  let history = useHistory();
  function logind() {
    const headers = {
      "Content-Type": "application/json",
    };
    const cred = {
      username: userid,
      password: passwords,
    };
    axios
      .post("https://pure-wave-48602.herokuapp.com/userlogin", cred, {
        headers,
      })
      .then((responsedata) => {
        console.log("NEW STATUS", responsedata.data.status);
        let Status = responsedata.data.status;

        if (Status == "success") {
          let roless = responsedata.data.role;
          console.log("ROLES OUTPUT", roless);
          if (roless == "FSE") {
            history.push("/listofpartners");
          }
          if (roless == "BD") {
            history.push("/listofcustomer");
          }
          if (roless == "Admin") {
            history.push("/dashadmin");
          }
          alert("Login success..!!");
          localStorage.setItem("username", Setuserid);
          // history.push("/dash");
          // $(".popup-add_hot-lead-added").show();
          // $(".bd-example-modal-lg_ref3").modal("hide");
        }
        // else if (Status == "success" && roles === "FSE") {
        //   history.push("/listofcustomer");
        // }
        else if (Status == "failed") {
          alert("Login Failed Please Check the Credentials");
        }
      });
  }
  return (
    <div className="Login_bg">
      <div className="login ">
        {/* <h3 className="text-center text-white pt-5">Login form</h3> */}
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div
              id="login-column"
              className="col-md-5"
              style={{
                border: "1px solid #000",
                padding: "30px",
                borderRadius: "10px",
                backgroundColor: "#fff",
              }}
            >
              <div id="login-box" className="col-md-12 formlogin">
                <div className="d-flex justify-content-center">
                  <img src={Logos} width="35%" style={{ marginTop: "-90px" }} />
                </div>
                {/* <form className="form formlogin" action="" method="post"> */}
                <h3 className="text-dark text-center pb-4">
                  <b>Login</b>
                </h3>
                <div className="form-group">
                  <label for="username " className="text-dark">
                    <b>UserId</b>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control login_input_fileds"
                    onChange={(e) => Setuserid(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <label for="password" className="text-dark">
                    <b>Password</b>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="password"
                    id="password"
                    className="form-control login_input_fileds"
                    onChange={(e) => Setpassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label for="remember-me" className="text-info">
                    {/* <span>Remember me</span> 
                      <span>
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                        />
                      </span> */}
                  </label>
                  <br />
                  <button onClick={logind} className="submit_btn">
                    Login
                  </button>
                </div>
                {/* <div id="register-link" className="text-right">
                    <a href="#" className="text-info">
                      Register here
                    </a>
                  </div> */}
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">csc</div>
        <div className="col-6">dssdff</div>
      </div>
    </div>
  );
}
