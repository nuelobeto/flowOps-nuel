import "../assests/css/auth.css";
import logo from "../assests/images/flowOpsLogo.svg";
import { Puff } from "react-loader-spinner";
import Pulse from "react-reveal/Pulse";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "./../feature/authSlice";
import { toast } from "react-toastify";

const SignUp = () => {
  const { error, loading, message, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const { firstname, lastname, email, password } = formData;

  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!firstname || !lastname || !email || !password) {
      toast.warn("Please ensure you fill all fields");
    } else {
      const userData = {
        firstname,
        lastname,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(message);
    }

    if (success) {
      navigate("/success");
    }
  }, [success, error, navigate, message, dispatch]);

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

            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={firstname}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={lastname}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
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
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </Pulse>
    </main>
  );
};

export default SignUp;
