import Header, { Footer } from "./headerfooter";
import "./style.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import './admin.css'
import { ToastContainer, toast } from "react-toastify";

const Admin = () => {
	const [frm, setfrm] = useState({ "txtuname": "", "txtpsw": "" })
	const jump = useNavigate();
	const fun1 = (e) => {
		setfrm({ ...frm, [e.target.id]: e.target.value });
	}
	const admin = async () => {
		const rec = await fetch("http://localhost:8000/adminlogin", {
			method: 'POST',
			headers: { "Content-Type": 'application/json' },
			body: JSON.stringify({ uname: frm.txtuname, psw: frm.txtpsw }),
			credentials: "include"
		})
		const data = await rec.json();
		if (data.msg === "Valid User") {
			toast.success("welcome to dashboard ");
			jump("/dashboard")
		}
		else {
			toast.success(data.msg);
		}
	}
	return (
		<>
			<Header />
			<div className="container">
				<center><h1 className="bg-dark">Admin Page</h1></center>
				<section className="sec1">
					<div className="container padd">
						<div className="row mt-5 ms-5" >
							<div className="col-md-4 bg-dark text-light text-center anchr">
								<h1 className="bg-dark"><a href="/" className="anchr"><span className="text-danger">R</span><span className="text-light">y</span><span className="text-info">D</span><span className="text-warning">e</span></a></h1>
								<h4 className="text-end">Dashboard</h4>
							</div>
							<div className="col-md-4" style={{ boxShadow: "5px 5px 5px black" }}>
								<div className="form-group">
									<label>User Name</label>
									<input type="text" id="txtuname" className="form-control" onChange={fun1} />
								</div>
								<div className="form-group">
									<label>Password</label>
									<input type="password" id="txtpsw" className="form-control" onChange={fun1} />
								</div>
								<div className="form-group"><br />
									<button type="button" className="btn transparent-btn text-light mb-2" onClick={admin}>Login</button>
									<ToastContainer />
								</div>

							</div>
						</div>
					</div>
				</section>
			</div>
			<br />
			<Footer />
		</>
	)
}

export default Admin;