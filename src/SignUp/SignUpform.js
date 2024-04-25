import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../SignUp/SignUp.css';
function SignUpform() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save user data to local storage
    localStorage.setItem("user", JSON.stringify(formData));
    // Redirect to login page
    navigate("/login");
  };

  return (
   <div className="homepg">
     <div className="signupform">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="formDetail">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="inputfeild"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="inputfeild"
        />
        <button type="submit"
        className="btn"
        >Sign Up</button>
      </form>
    </div>
   </div>
  );
}

export default SignUpform;
