import AdminHeader,{AdminFooter} from './admin_header';
import './add products.css'
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";
const Addproducts = () => {
	useEffect(() => {
		loadrecord();
	}, [])
	const [fileData, setfileData] = useState();
	const [frm, setfrm] = useState({ "carname": "", "rentprice": "", "ownername": "", "carnumber": "", "carimage": "", "fueltype": "", "sit_no": "" });
	const [edtrentprice, setedtrentprice] = useState("");
	const [edtcarname, setedtcarname] = useState("");
	const [edtid, setedtid] = useState("");
	const [edtcarnumber, setedtcarnumber] = useState("");

	const [getdata, setgetdata] = useState([]);


	const fun1 = (event) => {
		setfrm({ ...frm, [event.target.id]: event.target.value });
	}
	const fun2 = (event) => {
		setfileData(event.target.files[0]);
	}

	const updaterecord = async () => {
		const re = await fetch("http://127.0.0.1:8000/updatecar", {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: edtid, carname: edtcarname, rentprice: edtrentprice, carnumber: edtcarnumber })
		});
		const rec = await re.json();
		toast.success(rec.msg);
		loadrecord();
	}

	const deleterecord = async (x) => {
		if (window.confirm("Want to delete")) {
			const re = await fetch("http://127.0.0.1:8000/deletecar", {
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ id: x })
			});
			const rec = await re.json();
			toast.success(rec.msg);
			loadrecord();
		}
	}


	const saverecord = async () => {
		const fdata = new FormData();
		fdata.append("proname", frm.carname);
		fdata.append("rentprice", frm.rentprice);
		fdata.append("ownername", frm.ownername);
		fdata.append("carnumber", frm.carnumber);
		fdata.append("fueltype", frm.fueltype);
		fdata.append("sit_no", frm.sit_no);
		fdata.append("carimage", fileData);

		const re = await fetch("http://127.0.0.1:8000/addcar", {
			method: 'POST',
			body: fdata
		});
		const Data = await re.json();
		toast.success(Data.msg);
		loadrecord();
	}

	const editRecord = async (x) => {
		const re = await fetch("http://127.0.0.1:8000/getcar", {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: x })
		});
		const rec = await re.json();
		setedtcarname(rec.carname);
		setedtcarnumber(rec.carnumber);
		setedtrentprice(rec.rentprice);
		setedtid(x);
	}

	const loadrecord = async () => {
		const re = await fetch("http://127.0.0.1:8000/getcar", {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		});
		const rec = await re.json();
		setgetdata(rec);
	}
	return (
		<>
			<AdminHeader />
			<div className="container-fluid p-3">
				<div className="row">
					<div className="col-md-12 text-end">
						<button className="btn btn-primary addcar" data-bs-toggle="modal" data-bs-target="#exampleModal">ADD YOUR CAR</button>
					</div>
				</div>
			</div>

			<table className="container-fluid table table-bordered text-center">
				<thead className="table-info">
					<tr>
						<th className="p-2">CAR Image</th>
						<th className="p-2">CAR BRAND</th>
						<th className="p-2">OWNER NAME</th>
						<th className="p-2">CAR NUMBER</th>
						<th className="p-2">HOURLY RENT</th>
						<th className="p-2">ACTION</th>
					</tr>
				</thead>
				<tbody>
					{
						getdata.map((e) => {
							return (
								<tr>
									<td><img src={"http://localhost:8000/uploades/" + e.carimage} style={{ width: "130px", height: "80px" }} /></td>
									<td>{e.carname}</td>
									<td>{e.ownername}</td>
									<td>{e.carnumber}</td>
									<td>{e.rentprice}</td>
									<td>
										<button className="btn btnsize" onClick={() => { editRecord(e._id) }} data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
										&nbsp; &nbsp;
										<button className="btn btn-danger rejection" onClick={() => { deleterecord(e._id) }}>DELETE</button>
									</td>
								</tr>
							)
						})
					}
				</tbody>
			</table>

			<div class="modal" tabindex="-1" role="dialog" id="exampleModal">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 className="modal-title"><b>Add Car</b>
							</h5>
						</div>
						<div class="modal-body">
							<label><b>CAR Name:</b> <br /></label>

							<input type="search" onChange={fun1} id="carname" placeholder="Enter The Car Name" />

							<label><b>Hourly rent:</b></label> <br />

							<input type="text" onChange={fun1}
								id="rentprice" placeholder="hourly rental" className="container text-info" />

							<label><b>Owner Name:</b> <br />
							</label>

							<input type="search" onChange={fun1} id="ownername" className="text-info" placeholder="Enter The name of Car Owner" />

							<label><b> Car Number: </b> <br /></label>

							<input type="search" id="carnumber" onChange={fun1} className="text-danger" placeholder="Enter The Car Number" />

							<label><b> Fuel Type: </b> <br /></label>

							<input type="search" id="fueltype" onChange={fun1} className="text-danger" placeholder="Enter The Car Number" />

							<label><b>Sitting Capacity: </b> <br /></label>

							<input type="search" id="sit_no" onChange={fun1} className="text-danger" placeholder="Enter The Car Number" />

							<label><b> Car Image: </b> <br /></label>

							<input type="file" id="carimage" onChange={fun2} className="border border-danger" placeholder="Enter The Car Number" />
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-primary" onClick={saverecord}>Save changes</button>
							<ToastContainer />
						</div>
					</div>
				</div>
			</div>


			<div class="modal" id="editModal">
				<div class="modal-dialog">
					<div class="modal-content">

						<div class="modal-header">
							<h4 class="modal-title">Update Category</h4>
							<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
						</div>

						<div class="modal-body">
							<form className="form-group">
								<label>Car Name</label>
								<input id="edtcarname" value={edtcarname} onChange={(e) => { setedtcarname(e.target.value) }} type="text" className="form-control" />
								<label>rent price</label>
								<input id="edtrentprice" value={edtrentprice} onChange={(e) => { setedtrentprice(e.target.value) }} type="text" className="form-control" />
								<label>Car Number</label>
								<input id="edtcarnumber" value={edtcarnumber} onChange={(e) => { setedtcarnumber(e.target.value) }} type="text" className="form-control" />
							</form>
						</div>

						<div class="modal-footer">
							<button type="button" class="btn btn-danger" onClick={updaterecord}>Update</button>
						</div>
					</div>
				</div>
			</div>
			<AdminFooter />
		</>
	)
}
export default Addproducts;