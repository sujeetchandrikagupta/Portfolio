import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <div className="contact-me-container" id="contact">
      <div className="contact-me-card">
        <div className="contact-me-left">
          <h1 className="contact-heading">Contact Me</h1>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="contact-me-right">
          <h2 className="contact-subheading">Get in Touch</h2>
          <p className="contact-paragraph"><strong>Phone:</strong> +918291060219</p>
          <p className="contact-paragraph"><strong>Email:</strong> sujeetgupta48348@gmail.com</p>
          <p className="contact-paragraph"><strong>Address:</strong> Flat no: 2003, Shiv Prerana Society, Bharni Naka, Antop Hill, Wadala, Mumbai 400037</p>
          <div className="contact-me-extra">
            <h3>Follow Me</h3>
            <p className="contact-paragraph">
              <a href="https://www.linkedin.com/in/sujeet-gupta-6748a2238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
            <p className="contact-paragraph">
              <a href="https://github.com/sujeetchandrikagupta" target="_blank" rel="noopener noreferrer">GitHub </a>
            </p>

            <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100036627517115&mibextid=ZbWKwL">
                <i className="fa fa-facebook-square"></i>
              </a>
              {/* <a href="#">
                                <i className='fa fa-google-plus-square'></i>
                            </a> */}
              <a href="https://www.instagram.com/mr_sujeet_04_?igsh=MWNvMWR0ejcwOWk3aA==">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@SujeetGupta_">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://x.com/sujeetg18052003?t=RJPNg7V4Y--1G913vW-D1Q&s=08">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
