"use client";

import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contactSection">
      <div className="container">
        <div className="textCenter">
          <span className="subtitle">Contact</span>
          <h2 className="heading">Ready to Elevate Your Vision?</h2>
          <p className="description">
            Connect with AshNoire to discuss your next luxury project or event.
          </p>
        </div>

        <div className="flexWrapper">
          <div className="formWrapper">
            <form className="form">
              <div className="grid">
                <div>
                  <label htmlFor="name" className="label">Full Name</label>
                  <input type="text" id="name" placeholder="Your name" className="input" />
                </div>
                <div>
                  <label htmlFor="email" className="label">Email Address</label>
                  <input type="email" id="email" placeholder="Your email" className="input" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="label">Subject</label>
                <input type="text" id="subject" placeholder="Subject" className="input" />
              </div>

              <div>
                <label htmlFor="message" className="label">Message</label>
                <textarea id="message" rows={5} placeholder="Your message" className="textarea"></textarea>
              </div>

              <div>
                <button type="submit" className="button">
                  Send Message <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </div>
            </form>
          </div>

          <div className="contactInfo">
            <h3 className="infoHeading">Get in Touch</h3>
            <div className="infoGroup">
              <div className="infoItem">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4 className="infoTitle">Location</h4>
                  <p className="infoText">Atlanta, GA | Serving Clients Worldwide</p>
                </div>
              </div>

              <div className="infoItem">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4 className="infoTitle">Email</h4>
                  <p className="infoText">hello@ashnoire.com</p>
                </div>
              </div>

              <div className="infoItem">
                <i className="fas fa-phone-alt"></i>
                <div>
                  <h4 className="infoTitle">Phone</h4>
                  <p className="infoText">(404) 555-0123</p>
                </div>
              </div>

              <div className="infoItem">
                <i className="fas fa-calendar-alt"></i>
                <div>
                  <h4 className="infoTitle">Availability</h4>
                  <p className="infoText">Monday-Friday: 10am - 6pm EST</p>
                </div>
              </div>
            </div>

            <div className="socials">
              <h4 className="infoTitle">Follow AshNoire</h4>
              <div className="socialIcons">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-pinterest"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-tiktok"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
