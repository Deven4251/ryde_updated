import Header, { Footer } from "./headerfooter";
import React, { useState, useEffect } from "react";
import "./cars.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Location from "./location";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { message } from "antd";

const Car = () => {
	const [cardata, setcardata] = useState([]);
	const [selectedCar, setSelectedCar] = useState({});

	const loadrecord = async () => {
		const re = await fetch("http://127.0.0.1:8000/getcar", {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		});
		const rec = await re.json();
		setcardata(rec);
	};

	const getrecord = async () => {
		const re = await fetch("http://127.0.0.1:8000/getcar", {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		});
		const res = await re.json();
		loadrecord();
	};

	useEffect(() => {
		getrecord();
		loadrecord();
	}, []);

	const handleInfoClick = (car) => {
		setSelectedCar(car);
	};

	return (
		<>
			<Header />
			<div className="container-fluid">
				<div className="row">
					{cardata.map((e) => (
						<div className="col-md-12 mb-4" key={e.id}>
							<div className="row align-items-center">
								<div className="col-md-4">
									<img
										src={"http://localhost:8000/uploades/" + e.carimage}
										className="image"
										alt={e.carname}
									/>
								</div>
								<div className="col-md-8">
									<h5 className="card-title">{e.carname}</h5>
									<p className="card-text">Car Number: {e.carnumber}</p>
									<p className="card-text">
										Owner Name: <b className="text-warning">{e.ownername}</b>
									</p>
									<p className="card-text ">
										Rent Price:&nbsp;
										<strong className="text-success bold">
											₹ {e.rentprice} /day
										</strong>
									</p>
									&nbsp;
									<div className="container-fluid">
										<button
											className="btn btn-warning bn5 buttn1"
											data-bs-toggle="modal"
											data-bs-target="#myModal"
											onClick={(e) => handleInfoClick(e)}
										>
											<b>Book Car</b>
										</button>
									</div>
								</div>
								<div className="separator m-2"></div>
							</div>
						</div>
					))}
				</div>
			</div>

			<Footer />

			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Book a Meeting
							</h5>
						</div>
						<div className="modal-body">
							<form action="" method="post">
								<label>Name:</label>
								<br />
								<input type="text" placeholder="name pls" required />
								<br />
								<br />
								<label>Contact:</label>
								<br />
								<input type="number" name="usercontact" required />
								<br />
								<br />
								<label>Address:</label>
								<br />
								<textarea rows="4" cols="50" name="useradderss"></textarea>
								<br />
							</form>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
							>
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Book
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="modal modal-lg" id="myModal">
				<div className="modal-dialog">
					<div className="modal-content text-light">
						<div className="modal-header">
							<h4 className="modal-title">CAR INFO</h4>
						</div>
						<div className="modal-body">
							<CarInfo car={selectedCar} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const CarInfo = ({ car }) => {
	const [frm, setfrm] = useState({
		customerName: "",
		contactNumber: "",
		address: "",
		payment_type: "",
		qty: "",
		pick_date: "",
		ret_date: "",
		pick_time: "",
		ret_time: "",
	});

	console.log(frm, "FORM")

	const fun1 = (event) => {
		setfrm({ ...frm, [event.target.id]: event.target.value });
	};
	const bookcar = async () => {
		const re = await fetch("http://127.0.0.1:8000/order", {
			method: "POST",
			body: JSON.stringify({
				customerName: frm.customerName,
				contactNumber: frm.contactNumber,
				address: frm.address,
				payment_type: frm.payment_type,
				qty: frm.qty,
				pick_date: frm.pick_date,
				pick_time: frm.pick_time,
				ret_date: frm.ret_date,
				ret_time: frm.ret_time,
			}),
			headers: { "content-Type": "Application/json" },
		});
		const Data = await re.json();
		toast.success(Data.msg);
	};

	const loadscript = (src) => {
		return new Promise((resolve) => {
			const script = document.createElement("script");
			script.src = src;
			script.onload = () => {
				resolve(true);
			};
		});
	};
	const [amount, setAmount] = useState("");
	const showrazorpay = async (e) => {
		try {
			const res = await axios.post("checkout", { amount: amount });
			const { data } = res;

			const options = {
				key: "rzp_test_RahlVHO9T1FxJC",
				currency: "INR",
				amount: amount * 100,
				name: "RyDe online car booking platform",
				description: "Thanks for booking",
				image: "./logo.png",

				handler: function (response) {
					toast.success(response.razorpay_payment_id);
					toast.success("payment successful");
				},

				prefill: {
					name: "devendra",
					contact: "7398043147",
				},
				//if(response.razorpay_payment_id)
				//{
				//code to send the details to database
				//}
			};
			const paymentObject = new window.Razorpay(options);
			paymentObject.open();
		} catch (e) {
			console.log(e);
		}
	};

	const openRazorpay = async () => {
		const userData = {
			userId: "user_id",
			amount: "50",
		};
		const order = await axios.post(
			"http://localhost:8000/create-razorpay-order",
			userData
		);
		console.log(order);
		if (!order.data.success) {
			alert("Order failed!");
			return;
		}
		const options = {
			key: "rzp_test_RahlVHO9T1FxJC",
			amount: 500 * 100,
			currency: "INR",
			name: "Car Rental",
			description: "Test Transaction",
			image: "https://1000logos.net/wp-content/uploads/2023/09/Rapido-Logo.jpg",
			order_id: order.data.data.id,
			handler: async function (response) {
				const userData = {
					razorpay_payment_id: response.razorpay_payment_id,
					razorpay_order_id: response.razorpay_order_id,
					razorpay_signature: response.razorpay_signature,
				};
				const orderResult = await axios.post(
					"http://localhost:8000/verify-signature",
					userData
				);
				if (orderResult.data.success) {
					message.success("Payment Success");
					bookcar();
				}
			},
			prefill: {
				name: "Test User",
				email: "Test mail",
				contact: "Test Phone",
			},
			notes: {
				address: "Lucknow",
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.on("payment.failed", function (response) {
			message.error("Payment Failed");
		});
		rzp1.open();
	};
	return (
		<div className="row">
			<div className="col-md-6">
				<p>
					<img
						src={"http://localhost:8000/uploades/" + car.carimage}
						style={{ width: "350px", height: "300px" }}
						alt={car.carname}
					/>
				</p>
			</div>
			<div className="col-md-6">
				<p>Car Name: {car.carname}</p>

				<p>Car Number: {car.carnumber}</p>
				<p>Owner Name: {car.ownername}</p>
				<p>Rent Price:₹{car.rentprice}/day</p>
				<p>
					Fuel Type:<b className=""> {car.fueltype}</b>
				</p>
				<p>
					Sitting Capacity: <b className="text-danger">{car.sit_no}</b>
				</p>
				<button className="bg-warning">Exit</button>
			</div>

			<div>
				<div>
					<label htmlFor="name" className="sie2">
						NAME:
					</label>
					<input
						type="name"
						onChange={fun1}
						id="customerName"
						placeholder="customer name pls "
						required
					/>
					<label htmlFor="contact" className="sie2">
						Contact:
					</label>
					<input
						type="number"
						onChange={fun1}
						id="contactNumber"
						placeholder="contact pls"
						required
					/>
					<label htmlFor="name" className="sie2">
						Location:
					</label>
					<Location onChange={setfrm} />
					<input
						type="address"
						onChange={fun1}
						id="address"
						placeholder="house no, area, district,pincode,state "
						value={frm['address']}
						required
					/>
					<br />
					<label htmlFor="name" className="sie2">
						payment_type:
					</label>
					<input
						type="address"
						onChange={fun1}
						id="payment_type"
						placeholder="pls enter payment type"
						required
					/>
					<br />
					<label htmlFor="name" className="sie2">
						Quantity:
					</label>
					<input
						type="address"
						onChange={fun1}
						id="qty"
						placeholder="pls enter the qty of cars"
						required
					/>
					<br />
					<label htmlFor="name" className="sie2">
						pick_date:
					</label>
					<input
						type="address"
						onChange={fun1}
						id="pick_date"
						placeholder="pls enter date of pickup"
						required
					/>
					<label htmlFor="name" className="sie2">
						ret_date:
					</label>
					<input
						type="address"
						onChange={fun1}
						id="ret_date"
						placeholder="pls enter date of return"
						required
					/>
					<label htmlFor="name" className="sie2">
						pickup_time:
					</label>
					<input
						type="pick_time"
						onChange={fun1}
						id="pick_time"
						placeholder="pls enter the time of pickup"
						required
					/>
					<br />
					<label htmlFor="name" className="sie2">
						ret_time:
					</label>
					<input
						type="address"
						onChange={fun1}
						id="ret_time"
						placeholder="pls enter the time of return "
						required
					/>
					<br />
					<br />
					<button className="bn5" onClick={openRazorpay}>
						Book
					</button>

					{/*<label htmlFor="name" className="sie2">payment:</label>
						<button className="btn" onClick={showrazorpay}>Book Car</button>*/}

					<ToastContainer />
				</div>
			</div>
		</div>
	);
};

export default Car;
