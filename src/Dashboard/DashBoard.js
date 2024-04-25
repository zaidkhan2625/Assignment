import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "../Dashboard/Dash.css";

function DashBoard() {
  const [count, setCount] = useState(0);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [userName , SetuserName] = useState("");
  const [formData, setFormData] = useState({
    address: "",
    email: "",
    number: "",
  });
  const [uniqueId, setUniqueId] = useState(null);

  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => setCount(0);

  const fillStyle = {
    width: `${(count / 20) * 100}%`,
    backgroundColor: "green",
    height: "40px",
    borderRadius: "5px",
  };

  const toggleBold = () => {
    setIsBold(!isBold);
  };

  const toggleItalic = () => {
    setIsItalic(!isItalic);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName !== "") {
      const id = uuidv4();
      setUniqueId(id);
    }
  };

  return (
    <div className="maindivdashboard">
      <div className="partone">
        <div className="counterSide">
          <h1>Counter: {count}</h1>
          <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
          </div>
        </div>
        <div className="textside">
          <p style={{ fontWeight: isBold ? "bold" : "normal", fontStyle: isItalic ? "italic" : "normal" }}>
            Addres: {formData.address}
          </p>
          <p style={{ fontWeight: isBold ? "bold" : "normal", fontStyle: isItalic ? "italic" : "normal" }}>
            Email: {formData.email}
          </p>
          <p style={{ fontWeight: isBold ? "bold" : "normal", fontStyle: isItalic ? "italic" : "normal" }}>
            Phone: {formData.number}
          </p>
          <div className="button">
            <button onClick={toggleBold}>{isBold ? "Normal" : "Bold"}</button>
            <button onClick={toggleItalic}>{isItalic ? "Normal" : "Italic"}</button>
          </div>
        </div>
      </div>
      <div className="partone">
        <div className="Userside">
          <div className="userdata">
            <p>Name : {userName}</p>
            {uniqueId && <p>ID: {uniqueId}</p>}
            <input type="text" placeholder="Name"
            onChange={(e) => SetuserName(e.target.value)}
            ></input>
            <button onClick={handleSubmit}>Create Unique ID</button>
          </div>
        </div>
        <div className="AdressDetails">
          <form onSubmit={handleSubmit} className="formDetailindash">
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="inputfeild"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="inputfeild"
            />
            <input
              type="text"
              name="number"
              placeholder="Number"
              value={formData.number}
              onChange={handleChange}
              className="inputfeild"
            />
            <button type="submit" className="btn">
              Save
            </button>
          </form>
        </div>
      </div>
      <div className="divforcolor">
        <div style={fillStyle} className="divcolorfill"></div>
      </div>
    </div>
  );
}

export default DashBoard;
