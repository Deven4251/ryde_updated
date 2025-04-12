import React, { useState, useEffect } from 'react';
import AdminHeader, { AdminFooter } from './admin_header';
import './track_order.css'
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";
const OrderTrack=()=> {
	const [orders, setorders] = useState([]);
	
	useEffect(() => {
		loadrecord();	
	}, []);
	
const deleteorder = async (x) => {
	
		if (window.confirm("IS ORDER FULLFILLED")) {
			const re = await fetch("http://127.0.0.1:8000/delete_order", {
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({id: x })
			});
			const rec = await re.json();
			toast.success(rec.msg);
			loadrecord();
		}
	}

	const loadrecord = async () => {
		const re = await fetch("http://127.0.0.1:8000/admin_orders", {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		});
		const rec = await re.json();
		setorders(rec);
	}

	return (
		<div>
			<AdminHeader/>
			<h1 className='bg-dark'>Order Tracking Page</h1>
			<table className="table table-bordered bg-info text-center">
				<thead className='bg-info'>
					<tr>
						<th>customerName</th>
						<th>contactNumber</th>
						<th>address</th>
						<th>payment_type</th>
						<th>qty</th>
						<th>pick_date</th>
						<th>ret_date</th>
						<th>pick_time</th>
						<th>ret_time</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
				{
					orders.map((event)=>{
						return(
							<tr>
							<td>{event.customerName}</td>
							<td>{event.contactNumber}</td>
							<td>{event.address}</td>
							<td>{event.payment_type}</td>
							<td>{event.qty}</td>
							<td>{event.pick_date}</td>
							<td>{event.ret_date}</td>
							<td>{event.pick_time}</td>
							<td>{event.ret_time}</td>
							<td>
								<button type="button" className='buttn'onClick={()=>{deleteorder(event._id)}}>fulfilled</button>
								<ToastContainer/>
								

							</td>
							</tr>
						)
					})
				}
				</tbody>
			</table>
			<AdminFooter/>
		</div>
		
	);
}

export default OrderTrack;