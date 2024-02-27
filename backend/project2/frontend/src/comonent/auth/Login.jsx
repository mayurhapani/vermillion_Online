import React from "react";
import { Link } from "react-router-dom";
import "../../style/register.css";

export default function Login() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 login-box">
          <div className="col-lg-12 login-key">
            <i className="fa fa-key" aria-hidden="true"></i>
          </div>
          <div className="col-lg-12 login-title">Login Your Account</div>

          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">
              <div>
                <div className="form-group">
                  <label className="form-control-label">USERNAME</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="form-control-label">PASSWORD</label>
                  <input type="password" className="form-control" />
                </div>

                <div className="col-lg-12 loginbttm">
                  <div className="col-lg-6 login-btm login-text"></div>
                  <div className="col-lg-6 login-btm login-button">
                    <button className="btn btn-outline-primary">LOGIN</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-12">
            <Link to="/register">Don't Have Account? Singup</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
