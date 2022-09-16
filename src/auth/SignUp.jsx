import "../assests/css/auth.css";
import logo from "../assests/images/flowOpsLogo.svg";
import { Puff } from "react-loader-spinner";
import Pulse from "react-reveal/Pulse";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [loading, setloading] = useState(false);
  return (
    <main className="auth-main">
      <Pulse>
        <div className="auth-box-wrapper">
          <div className="auth-box-inner">
            <div className="auth-box-header">
              <div className="auth-logo">
                <img src={logo} alt="flowOps" />
              </div>
              <h2>Create your free account</h2>
              <p>
                Join thousands of teams and individuals already working better
                and faster with flow0ps.
              </p>
            </div>

            <form className="auth-form">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>

              <button type="submit" disabled={loading} hidden={loading}>
                Sign Up
              </button>
              {loading && (
                <Puff
                  height="50"
                  width="50"
                  radius={1}
                  color="black"
                  ariaLabel="puff-loading"
                  wrapperStyle={{ display: "block" }}
                  wrapperClass=""
                  visible={true}
                />
              )}
            </form>
          </div>
          <p className="alt-action">
            Don't have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </Pulse>
    </main>
  );
};

export default SignUp;
