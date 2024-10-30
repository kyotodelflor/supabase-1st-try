import React from 'react';
import '../styles/Bottom.css';
import LogoImg from '../imgs/logo.svg';
import twitImg from '../imgs/twit.svg';
import catImg from '../imgs/cat.svg';

const Bottom = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={LogoImg} alt="" id='logo2' />
                    <div className="contactUsss">
                        <img src={twitImg} alt="" id='log33' />
                        <img src={catImg} alt="" id='log33' />
                    </div>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-github"></i></a>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Product</h4>
                        <a href="#">Database</a>
                        <a href="#">Authentication</a>
                        <a href="#">Storage</a>
                        <a href="#">Functions</a>
                        <a href="#">Coming soon</a>
                        <a href="#">Pricing</a>
                    </div>
                    <div className="footer-column">
                        <h4>Resources</h4>
                        <a href="#">Support</a>
                        <a href="#">Case Studies</a>
                        <a href="#">System Status</a>
                        <a href="#">Terms of service</a>
                    </div>
                    <div className="footer-column">
                        <h4>Developers</h4>
                        <a href="#">Documentation</a>
                        <a href="#">API Reference</a>
                        <a href="#">Guides</a>
                    </div>
                    <div className="footer-column">
                        <h4>Company</h4>
                        <a href="#">Blog</a>
                        <a href="#">Open Source</a>
                        <a href="#">Humans.txt</a>
                        <a href="#">Lawyers.txt</a>
                    </div>
                </div>
            </div>
            <div id='liiine'></div>
            <div className="footer-bottom">
                <p>© Supabase Inc</p>
                <div className="theme-toggle">
                    <i className="fas fa-sun"></i>
                    <i className="fas fa-moon"></i>
                </div>
            </div>
        </footer>
    );
};

export default Bottom;
