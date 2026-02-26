import React, { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {
  const [formData, setFormData] = useState({
    text1: "",
    text2: "",
  });

  const API = "http://localhost:8000/api"; // change when deployed

  // ✅ GET existing data
  useEffect(() => {
    axios.get(`${API}/getAllTexts`)
      .then((res) => {
        if (res.data.length > 0) {
          setFormData({
            text1: res.data[0].text1,
            text2: res.data[0].text2,
          });
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ UPDATE data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put("https://vishwasatra-backend.onrender.com/api/updateText", formData);
      alert(res.data.message);
    } catch (error) {
      console.log(error);
      alert("Error updating data ❌");
    }
  };

  return (
    <div className="admin-wrapper d-flex align-items-center justify-content-center">
      <div className="admin-card shadow-lg p-4">
        <h2 className="text-center mb-4 fw-bold text-primary">
          Admin Panel
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">First Text</label>
            <textarea
              name="text1"
              className="form-control custom-input"
              rows="4"
              value={formData.text1}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Second Text</label>
            <textarea
              name="text2"
              className="form-control custom-input"
              rows="4"
              value={formData.text2}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Update Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;