import React from 'react';
import styled from 'styled-components';
import './headerfooter.css';

const HeaderContainer = styled.header`
  background: #3e393d;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;

  .logo {
    display: flex;
    align-items: center;

    img {		
		width:150px;
    	height: 65px;
    	margin-right: 10px;
}
    h1 {
      font-size: 24px;
      margin: 0;
    }
  }
  .nav ul {
    list-style: none;
    display: flex;
    padding: 0;

    li {
      margin-right: 20px;

     a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s;
    }
    a:hover {
    color: #ff9900;
    }
    }
	}

	@media (min-width: 768px) {
    flex-direction: row;

    .logo {
    	margin-right: auto;
    }

    .nav {
        margin-left: auto;
		}
    }
`;

const Header = () => {
	return (
		<HeaderContainer>
			<div className='logo '>
				<img src="logo.png" className="logo" alt="Your Logo" />
				<h1 className="bg-dark">
					<span className="text-danger">R</span>
					<span className="text-light">y</span>
					<span className="text-info">D</span>
					<span className="text-warning">e</span>
				</h1>
			</div>
			<nav className="nav">
				<ul>
					<li><a href="/home">Home</a></li>
					<li><a href="/cars">Cars</a></li>
					<li><a href="/blog">Blog</a></li>
					<li><a href="/contact">Contact</a></li>
					<li><a href="/">Signup</a></li>
				</ul>
			</nav>
		</HeaderContainer>
	);
};
const FooterContainer = styled.footer`
    background-color: #3e393d;color: #fff;padding: 20px;text-align: center;box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);position: sticky;bottom: 0;z-index: 100;
    a {color: #fff;text-decoration: none;font-weight: 600;transition: color 0.2s;} a:hover {color: #ff9900;}`;
const Footer = () => {
	return (
		<FooterContainer>
			<p> &copy; 2024 RyDe</p>
			<div className="text-center p-1">
				<a href="/privacy">Privacy Policy</a>
				<span className="mx-2">|</span>
				<a href="/tos">Terms of Service</a>
				{/*<span className="mx-2">|</span>
				<a href="/admin">Admin??</a>*/}
				
			</div>
		</FooterContainer>
	);
};
export default Header;
export { Footer };