import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function AdminLogin() {
    let navigate = useNavigate()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

//   const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    let res = await axios.post("https://vishwasatra-backend.onrender.com/api/userlogin",form)

   console.log(res.data);
   alert(res.data.message)

   localStorage.setItem(
    'token',res.data.token
   )
   navigate("/admin-dashboard")
    
  };

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="card login-card shadow p-4">
        <h3 className="text-center mb-4">Admin Login</h3>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <input
                type="password"
                className="form-control"
                name="password"
                value={form.password}
                onChange={handleChange}
                autoComplete="password"
                placeholder="Enter password"
              />
              {/* <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button> */}
            </div>
          </div>

          {/* Remember Me */}
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">
              Remember me
            </label>
          </div>

          {/* Button */}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;