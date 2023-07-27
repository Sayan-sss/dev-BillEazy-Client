import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "./Contact.css";

const Contact = () => {
  return (
    <div class="contact-container">
      <div class="main-title">
        <h2>
          Contact <span>Me</span>
          <span class="bg-text">Contact</span>
        </h2>
      </div>
      <div class="contact-content-con">
        <div class="left-contact">
          <h4>Contact me here</h4>
          <p>For any quarries, please contact me.</p>
          <div class="contact-info">
            <div class="contact-item">
              <div class="icon">
                <LocationOnIcon />

                <span>Location</span>
              </div>
              <p>:Talbaganpara, Berhampore</p>
            </div>
            <div class="contact-item">
              <div class="icon">
                <EmailIcon />
                <span>Email</span>
              </div>
              <p>
                <span>: sheerinaenterprise@gmail.com</span>
              </p>
            </div>

            <div class="contact-item">
              <div class="icon">
                <LocalPhoneIcon />
                <span>Mobile Number</span>
              </div>
              <p>
                <span>: 7797004695</span>
              </p>
            </div>
          </div>
          <div class="contact-icons">
            {/* <div class="contact-icon">
              <a
                href="https://www.facebook.com/profile.php?id=100036248618544"
                target="_blank"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/sayan__sss/" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://github.com/Sayan-sss" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/sayan-mondal-10a734221/"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </div> */}
          </div>
        </div>
        <div class="right-contact">
          <form action="" class="contact-form" id="contact-form">
            <div class="input-control i-c-2">
              <input
                type="text"
                name="from_name"
                id="contact-name"
                required
                placeholder="YOUR NAME"
              />
              <input
                type="email"
                name="from_email"
                id="contact-email"
                required
                placeholder="YOUR EMAIL"
              />
            </div>

            <div class="input-control">
              <textarea
                name="from_message"
                id="contact-message"
                cols="15"
                rows="8"
                placeholder="Message Here..."
              ></textarea>
            </div>

            <p class="contact__sms" id="contact-sms"></p>

            <div class="submit-btn">
              {/* <a
                href="https://firebasestorage.googleapis.com/v0/b/sayan-mondal.appspot.com/o/Sayan's%20Resume.pdf?alt=media&token=eca8c312-5bea-458f-ba63-aaa238216760"
                target="_blank"
                class="main-btn"
              >
                <span class="btn-text">Download CV</span>
                <span class="btn-icon">
                  <i class="fas fa-download"></i>
                </span>
              </a> */}
              <button type="submit" class="send">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
