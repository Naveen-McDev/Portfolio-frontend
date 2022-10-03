import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";

// login component
function Login() {
  // state
  const [user, setUser] = useState({
    // initial values
    userName: "",
    password: "",
  });
  const dispatch = useDispatch();

// login
  const login = async () => {
    try {
      dispatch(ShowLoading());
      // admin login api
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/portfolio/admin-login`, user);
      dispatch(HideLoading());
      // if success
      if (response.data.success) {
        message.success(response.data.message);
        // storing in local storage
        localStorage.setItem("token", JSON.stringify(response.data));
        window.location.href = "/admin";
      } else {
        // if not success
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="w-96 flex gap-5 p-5 shadow border border-gray-500 flex-col bg-white">
        {/* title */}
        <h1 className="text-2xl ">Portfolio - Admin Login</h1>
        <hr />
        {/* username field */}
        <input
          type="text"
          value={user.userName}
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
          placeholder="Username"
        />
        {/* password field */}
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />
        {/* login button */}
        <button className="bg-primary text-white p-2" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
