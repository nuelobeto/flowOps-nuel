import "../assests/css/auth.css";
import logo from "../assests/images/flowOpsLogo.svg";
import Pulse from "react-reveal/Pulse";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {
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
                Your registration was successful. <br /> Please check your inbox
                for an email from us.
              </p>
            </div>

            <Link to="/">
              <button className="confirm-btn">I have confirmed my email</button>
            </Link>
          </div>
        </div>
      </Pulse>
    </main>
  );
};

export default RegisterSuccess;
