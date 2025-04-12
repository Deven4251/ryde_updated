import React from "react";
import { Link } from "react-router-dom";
import AdminHeader, { AdminFooter } from "../admin/admin_header";
import './dashboard.css';

const Dashboard = () => {
	return (
		<>
			<AdminHeader />
			<h3 className="text-center"><Link to="/admin">Dashboard</Link></h3>
			<h3 className="text-center display-6">
				<span className="text-danger">R</span>
				<span className="text-light">y</span>
				<span className="text-info">D</span>
				<span className="text-warning">e</span>
			</h3>
			<div className="row">
				<div className="col-md-3">
					<div id="accordion">
						<div className="card">
							<div className="card-header">
								<a className="btn transparent-btn" data-bs-toggle="collapse" href="#m1">
									Admin Entry
								</a>
							</div>
							<div id="m1" className="collapse show" data-bs-parent="#accordion">
								<div className="card-body">
									<ul>
										<li><Link to="/add products">Add Product</Link></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-header">
								<a className="btn transparent-btn" data-bs-toggle="collapse" href="#m2">
									Admin Order
								</a>
							</div>
							<div id="m2" className="collapse show" data-bs-parent="#accordion">
								<div className="card-body">
									<Link to="/track_order">Track Order</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-9">
					<div className="jumbotron jumbotron-fluid">
						<div className="container">
							<h1 className="display-1 text-left bg-dark">Welcome to Admin Dashboard!</h1>
							<p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Manage Users</h5>
									<p className="card-text">View, edit, and manage all registered users.</p>
									<br/>
									<Link to="/manage_users" className="btn btn-primary">Manage Users</Link>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">View Reports</h5>
									<p className="card-text">Generate and view reports on user activity, sales, and more.</p>
									<Link to="/view_reports" className="btn btn-primary">View Reports</Link>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
			<br/>
			<br/>
			<AdminFooter />
		</>
	)
}

export default Dashboard;
