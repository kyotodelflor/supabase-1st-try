import React from 'react';
import '../styles/Header.css';
import LogoImg from '../imgs/logo.svg';

const Header = () => {
    return (
        <header style={headerStyle}>
            <div style={logoStyle}>
                <img src={LogoImg} alt="" />
            </div>
            <nav style={navStyle}>
                <a href="#">Product</a>
                <a href="#">Developers</a>
                <a href="#">Beta</a>
                <a href="#">Pricing</a>
            </nav>
            <div style={buttonContainer}>
                <button style={projectButton}>Start your project</button>
                <a href="#">Sign in</a>
            </div>
        </header>
    );
};

const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 30px', backgroundColor: '#121212', color: '#fff', maxWidth: '100%' };
const logoStyle = { fontSize: '24px', fontWeight: 'bold', marginLeft: '100px' };
const navStyle = { display: 'flex', gap: '30px', marginLeft: '-500px' };
const buttonContainer = { display: 'flex', gap: '30px', alignItems: 'center', marginRight: '100px'};
const projectButton = { color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', };
// const signInButton = { color: '#fff', padding: '10px 20px', cursor: 'pointer' };

export default Header;
