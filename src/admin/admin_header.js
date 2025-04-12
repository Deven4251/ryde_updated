import React from 'react';
import './admin_header.css'


const AdminHeader = () => {
	return (
		<header className="admin-header">
			<div>
				<img src="logo.png" className="logo" alt="Admin Logo" />
			</div>
			<nav className="nav">
				<ul>
					<li><a href="../dashboard">Dashboard</a></li>
					<li><a href="../add products">Products</a></li>
					<li><a href="../track_order">Track Order</a></li>
				</ul>
			</nav>
			<div className="user-profile">
				<span>Welcome, Admin!</span>
				<button className="btn logout">Logout</button>
			</div>
		</header>
	);
};

export default AdminHeader;

const AdminFooter = () => {
	return (
		<footer className="admin-footer">
			<p>&copy; 2024 Admin Panel. All rights reserved.</p>
			<ul>
				<li><a href="#">Terms of Service</a></li>
				<li><a href="#">Privacy Policy</a></li>
				<li><a href="#">Contact Us</a></li>
			</ul>
		</footer>
	);
};

export { AdminFooter };