import React from "react";
import "./AgentForm.css";
import { IoMdClose } from "react-icons/io";

function AgentForm({ closeForm }) {
  return (
    <>
      <div className="formModal">
        <div className="modal">
          <div className="top">
            <div></div>
            <h1>Become a Agent</h1>
            <IoMdClose
              size={40}
              style={{ cursor: "pointer" }}
              onClick={() => {
                closeForm(false);
              }}
            />
          </div>
          <div className="container">
            <div className="inputStyle">
              <label>First name</label>
              <input type="text" placeholder="Enter your first name" />
            </div>
            <div className="inputStyle">
              <label>Last name</label>
              <input type="text" placeholder="Enter your first name" />
            </div>
            <div className="inputStyle">
              <label>Email</label>
              <input type="text" placeholder="Enter your last name" />
            </div>
            <div className="inputStyle">
              <label>Email</label>
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="inputStyle">
              <label>Address</label>
              <input type="text" placeholder="Enter your home Address" />
            </div>
            <div className="inputStyle">
              <label>State</label>
              <input type="text" placeholder="Choose State" />
            </div>
            <div className="inputStyle">
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AgentForm;
