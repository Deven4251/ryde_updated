import React from 'react';
import styled from 'styled-components';

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
      width: 150px;
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
			<div className='logo'>
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
					<li><a href="/">Home</a></li>
					<li><a href="/blog">Blog</a></li>
					<li><a href="/contact">Contact</a></li>
					<li><a href="/signup">Signup</a></li>
					<li><a href="/login">Login</a></li>
				</ul>
			</nav>
		</HeaderContainer>
	);
};

export default Header;
