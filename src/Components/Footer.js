import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { IoFootball } from "react-icons/io5";

function Footer() {
  return (
    <div className="footer-container">
        <section className="footer-width">
            <div className="footer-contents">
                <div className="my-social-media-content">
                    <Link
                        className="social-media-icons"
                        to="//www.linkedin.com/in/sharan-sharabinth/"
                        >
                        <FaLinkedin />
                    </Link>
                    <Link
                        className="social-media-icons"
                        to="//github.com/ssha0054"
                        >
                         <FaGithub />
                    </Link>
            </div>
                <small className="footer-text">
                    By Sharan Sharabinth
                </small>
            <div className="other-social-media-content">
                <Link
                    className="social-media-icons"
                    to="//www.manutd.com/"
                    >
                    <IoFootball />
                </Link>
                <Link
                    className="social-media-icons"
                    to="//www.facebook.com/manchesterunited/"
                    >
                    <FaFacebookSquare />
                </Link>
                <Link
                className="social-media-icons"
                to="//www.instagram.com/manchesterunited/"
                >
                    <FaInstagram />
                </Link>
                <Link
                    className="social-media-icons"
                    to="//twitter.com/ManUtd/"
                    >
                    <FaTwitter />
                </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;