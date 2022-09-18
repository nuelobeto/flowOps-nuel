import axios from "axios";

// Sign up
const register = async (userData) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/register`,
    userData
  );

  return response.data;
};

// login
const login = async (userData) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/login`,
    userData
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
  login,
};

export default authService;
