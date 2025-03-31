import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './signup.css';
import { Footer } from './headerfooter';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Header from './signupheaders/header';
const Signup = () => {
	const [frm, setfrm] = useState({ "name": "", "phonenumber": "", "email": "", "psw": "" });
	const [data, setdata] = useState("");
	const [formData, setformdata] = useState("");
	const initialText = 'Create account';
	const [buttonText, setButtonText] = useState(initialText);

	const handleChange = (e) => {
		setfrm({ ...frm, [e.target.id]: e.target.value });
	};
	const saveuser = async () => {
		setButtonText('wait a while');
		setTimeout(() => {
			setButtonText(initialText);
		}, 2000);
		const rec = await fetch("http://localhost:8000/signup", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(frm),
		});
		const data = await rec.json();
		toast.success(data.msg);
	}

	const animatedProps = useSpring({
		opacity: 1,
		from: { opacity: 0 },
	});

	return (
		<>
			<Header />
			<div className='container p-2 text-center'> for booking pls login </div>
			<div className="dev"></div>
			<div className='fltr'>
				<div className="signup-container bg-dark">
					<animated.div style={animatedProps} className="signup-form">
						<h2 className='text-danger input'>Sign Up</h2>
						<div className="form-group">
							<input
								type="text"
								name="name"
								id='name'
								className='input'
								onChange={handleChange}
								placeholder="Name"
							/>
						</div>
						<div className="form-group">
							<input
								type="number"
								name="phoneNumber"
								id='phonenumber'
								className='input'
								onChange={handleChange}
								placeholder="Phone Number"
							/>
						</div>
						<div className="form-group">
							<input
								type="email"
								name="email"
								id='email'
								className='input'
								onChange={handleChange}
								placeholder="Email"
							/>
						</div>
						<div className="form-group">
							<input
								type="password"
								name="password"
								className='input'
								id="psw"
								onChange={handleChange}
								placeholder="Password"
							/>
						</div>
						<button className="button" onClick={saveuser}>{buttonText}</button>
						<ToastContainer />
						<br></br>
						<button className='button'>
							<Link to="/login" className="link">Login Page</Link>
						</button>
					</animated.div>

				</div>
			</div>
			<Footer />
		</>
	);
};

export default Signup;
