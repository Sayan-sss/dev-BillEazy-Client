import React from "react";
import "./Contact.css";
import icon from "../Assets/icon.png";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactButtom from "./ContactBottom.js";

const Contact = () => {
  return (
    <div className="contact">
      <div className="topSection">
        <img className="topSection__icon" src={icon} alt="" />
        <div className="topSection__contact">
          <div className="topSection__contactDetails">
            <p>
              <EmailIcon />
              sheerinaenterprise@gmail.com
            </p>
            <p>
              <LocationOnIcon />
              Talbaganpara, Berhampore
            </p>
            <p>
              <PhoneIcon />
              7797004695
            </p>
          </div>
        </div>
      </div>

      <div className="bottomSection">
        <ContactButtom />
      </div>
    </div>
  );
};

export default Contact;
