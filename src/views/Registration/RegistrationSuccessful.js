import React from "react";
import { Link } from "react-router-dom";

import "./RegistrationSuccessful.css";
import logo from "images/r.svg";

const RegistrationSuccessful = () => (
    <main>
        <div className="mid-container">
            <img src={logo} className="successful-image" alt="Logo" />
            <h2 className="successful-heading">Registration Successful!</h2>
            <p className="successful-text">Thank you for registering.</p>
            <div className="successful-footer">
                <p className="successful-text">
                    Click <Link to="/login">here</Link> to login.
                </p>
            </div>
        </div>
    </main>
);

export default RegistrationSuccessful;
