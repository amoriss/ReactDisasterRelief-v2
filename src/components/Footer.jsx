import React from 'react';
import './styles/Footer.css';
import facebookIcon from '../assets/icons/icons8-facebook-24.png';
import instagramIcon from '../assets/icons/icons8-instagram-24.png';
import tiktokIcon from '../assets/icons/icons8-tiktok-24.png';
import twitterxIcon from '../assets/icons/icons8-twitterx-24.png';

function Footer() {
    return (
        <footer>
            <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="footer-image-container">
            <div className="footer-image">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook" />
                </a>
            </div>
            <div className="footer-image">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" />
                </a>
            </div>
            <div className="footer-image">
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                    <img src={tiktokIcon} alt="TikTok" />
                </a>
            </div>
            <div className="footer-image">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <img src={twitterxIcon} alt="Twitter X" />
                </a>
                </div>
                </div>
            </div>

            <div className="footer-column">
                <h3>Get In Touch</h3>
                <p>1234 SomeStreet</p>
                <p>SomeWhere, TX 12345</p>
            </div>
            <div className="footer-column">
                <h3>About</h3>
                <p>Leadership</p>
                <p>Overview of Our Work</p>
            </div>
            <div className="footer-column">
                <h3>Latest</h3>
                <p>Careers</p>
                <p>Podcasts</p>
                <p>Newsroom & Stories</p>
            </div>
            <div className="footer-column">
                <h3>Sign Up</h3>
                <p>Sign-Up Email Here</p>
                <p>Input box goes here</p>
            </div>
            <div className="block-address">Copyright 2024</div>
        </footer>
    );
}

export default Footer;