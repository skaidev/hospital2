import React, { useState } from "react";
import "@fortawesome/fontawesome-free/js/all";
import MIN from "./MIN";

const Header = () => {
  const [minmenu, setMinmenu] = useState(false);

  return (
    <>
      <header>
        <div className="contact-sec">
          <div className="_contact-sec">
            <div className="num-mail">
              <div className="tel">
                <span>Call: </span>+2349012624162
              </div>
              <div className="mail">
                <span>Support: </span>info@yourcompany.com
              </div>
            </div>
            <div className="reg-login">
              <a href="." className="login">
                Log In
              </a>
              <a href="." className="signup">
                Register
              </a>
            </div>
          </div>
        </div>
        <div className="main-header">
          <div className="_mainheader">
            <div className="logo-sec">
              <img src="./images/logo.svg" alt="" />
              <div className="menu" onClick={() => setMinmenu(true)}>
                <div className="bar-1"></div>
                <div className="bar-2"></div>
                <div className="bar-3"></div>
              </div>
            </div>
            <div className="list">
              <ul>
                <li>
                  <a href="?">Home</a>
                </li>
                <li>
                  <a href="?">
                    About Us <i className="fas fa-chevron-down"></i>
                    <div className="drop-d">
                      <div>
                        <p>...</p> About us
                      </div>
                      <div>
                        <p>...</p> FAQs
                      </div>
                      <div>
                        <p>...</p> Sign In
                      </div>
                      <div>
                        <p>...</p> Sign Up
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="?">
                    Services <i className="fas fa-chevron-down"></i>
                    <div className="drop-d">
                      <div>
                        <p>...</p> Services
                      </div>
                      <div>
                        <p>...</p> Services Details
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="?">
                    Department <i className="fas fa-chevron-down"></i>
                    <div className="drop-d">
                      <div>
                        <p>...</p> Department
                      </div>
                      <div>
                        <p>...</p> Department Details
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="?">
                    Doctors <i className="fas fa-chevron-down"></i>
                    <div className="drop-d">
                      <div>
                        <p>...</p> Doctors
                      </div>
                      <div>
                        <p>...</p> Doctor Details
                      </div>
                      <div>
                        <p>...</p> Doctor Appointment
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="?">
                    Blog <i className="fas fa-chevron-down"></i>
                    <div className="drop-d">
                      <div>
                        <p>...</p> Blog
                      </div>
                      <div>
                        <p>...</p> Blog Detail
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="?">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {minmenu && <MIN setMinmenu={setMinmenu} />}
    </>
  );
};

export default Header;
