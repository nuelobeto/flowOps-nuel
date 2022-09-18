import "../assests/css/auth.css";
import logo from "../assests/images/flowOpsLogo.svg";
import { Puff } from "react-loader-spinner";
import Pulse from "react-reveal/Pulse";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../feature/authSlice";

const Login = () => {
  const { user, error, loading, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      toast.warn("Please ensure you fill all fields");
    } else {
      const userData = {
        email,
        password,
      };

      dispatch(login(userData));
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(message);
    }

    if (user) {
      navigate("/dashboard");
    }
  }, [user, error, navigate, message, dispatch]);

  return (
    <main className="auth-main">
      <Pulse>
        <div className="auth-box-wrapper">
          <div className="auth-box-inner">
            <div className="auth-box-header">
              <div className="auth-logo">
                <img src={logo} alt="flowOps" />
              </div>
              <h2>Welcome back</h2>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
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

              <h4 className="forgot">
                <Link to="/reset">Forgot your password?</Link>
              </h4>

              <button type="submit" disabled={loading} hidden={loading}>
                Login
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
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </Pulse>
    </main>
  );
};

export default Login;
