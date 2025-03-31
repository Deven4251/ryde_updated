const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const Razorpay = require("razorpay");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const signupmodel = require("./model/signupmodel");
const ordermodel = require("./model/ordermodel");
const productmodel = require("./model/productmodel");
const adminmodel = require("./model/adminmodel");
const cartmodel = require("./model/cartmodel");
const nodemailer = require("nodemailer");
const {
	createRazorpayOrder,
	verifySignature,
} = require("./controllers/paymentcontroller");
const con = mongoose.connect("mongodb+srv://devendramishra778585:4ZHiLFT7NZE70Bfo@cluster0.th9bqqi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

con.then(() => {
	console.log("Conection Established");
});
con.catch(() => {
	console.log("ERROR");
});
const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use("/uploades", express.static("uploades"));

const CLIENT_ID = "";
const CLIENT_SECRET = "";



app.post("/create-razorpay-order", createRazorpayOrder);
app.post("/verify-signature", verifySignature);

app.post("/signup", async (req, res) => {
	const name = req.body.name;
	const phnumber = req.body.phonenumber;
	const email = req.body.email;
	const psw = await bcrypt.hash(req.body.psw.trim(), 12);
	const useremail = await signupmodel.find({ email });
	if (!useremail[0]) {
		const rec = await new signupmodel({
			name: name,
			phonenumber: phnumber,
			email: email,
			psw: psw,
		});
		const data = await rec.save();
		if (data) {
			res.json({ msg: "signup success" });
		} else {
			res.json({ msg: "technical error" });
		}
	} else {
		res.json({ msg: "User Already Exist" });
	}
});

app.post("/loginuser", async (req, res) => {
	const email = req.body.email.trim();
	const psw = req.body.psw.trim();
	const rec = await signupmodel.find({ email: email });
	if (rec) {
		if (await bcrypt.compare(psw, rec[0].psw)) {
			res.cookie("usercookie", email).json({ msg: "Valid Login" });
		} else {
			res.json({ msg: "Invalid Login" });
		}
	} else {
		res.json({ msg: "Invalid Login" });
	}
});

//admin login model
app.post("/adminlogin", async (req, res) => {
	const uname = req.body.uname.trim();
	const psw = req.body.psw.trim();
	const rec = await adminmodel.findOne({ username: uname });
	if (rec) {
		if (psw === rec.password) {
			res.cookie("mycookie", uname).json({ msg: "Valid User" });
		} else {
			res.json({ msg: "Invalid Login" });
		}
	} else {
		res.json({ msg: "Invalid Login" });
	}
});

app.get("/findprofile", async (req, res) => {
	const rec = await loginmodel.find();
	res.json(rec);
});

const myfilter = (req, file, cb) => {
	const ext = file.mimetype.split("/")[1];
	if (ext === "jpg" || ext === "jpeg" || ext === "png") {
		cb(null, true);
	} else {
		cb("Please select image file only in jpg, jpeg, or png form only", false);
	}
};

const mystorage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./uploades");
	},
	filename: function (req, file, cb) {
		const ext = file.mimetype.split("/")[1];
		cb(null, "car_" + Date.now() + "." + ext);
	},
});

const upload = multer({
	storage: mystorage,
	fileFilter: myfilter,
});
app.post("/addcar", upload.single("carimage"), async (req, res) => {
	const proname = req.body.proname;
	const proprice = req.body.rentprice;
	const ownername = req.body.ownername;
	const carnumber = req.body.carnumber;
	const fueltype = req.body.fueltype;
	const sit_no = req.body.sit_no;
	const carimage = req.file.filename;
	const carno = await productmodel.find({ carnumber });
	if (carno[0]) {
		res.json({ msg: "Car Alraedy Exist" });
	} else {
		const rec = await new productmodel({
			carname: proname,
			rentprice: proprice,
			ownername: ownername,
			carnumber: carnumber,
			fueltype: fueltype,
			sit_no: sit_no,
			carimage: carimage,
		});
		const data = await rec.save();
		res.json({ msg: "New Product Saved" });
	}
});

app.post("/checkout", async (req, res) => {
	const options = {
		amount: Number(req.body.amount * 100),
		currency: "INR",
	};
	const order = await RazorpayInstance.orders.create(options);
});

const RazorpayInstance = new Razorpay({
	key_id: "rzp_test_RahlVHO9T1FxJC",
	key_secret: "fSJYwH3E4lbu8lmmPT0Ekzz6",
});

app.post("/order", async (req, res) => {
	const customerName = req.body.customerName;
	const address = req.body.address;
	const contactNumber = req.body.contactNumber;
	const payment_type = req.body.payment_type;
	const qty = req.body.qty;
	const pick_date = req.body.pick_date;
	const ret_time = req.body.ret_time;
	const pick_time = req.body.pick_time;
	const ret_date = req.body.ret_date;

	try {
		let order = await new ordermodel({
			customerName: customerName,
			address: address,
			contactNumber: contactNumber,
			payment_type: payment_type,
			qty: qty,
			pick_date: pick_date,
			ret_time: ret_time,
			pick_time: pick_time,
			ret_date: ret_date,
		});
		const data = order.save();
		if (data) {
			res.json({ msg: "order placed" });
		} else {
			res.json({ msg: "Failed" });
		}
	} catch (e) {
		res.json({ msg: "Failed" });
	}
});

app.get("/admin_orders", async (req, res) => {
	let order_details = await ordermodel.find();
	res.json(order_details);
});

app.delete("/delete_order", async (req, res) => {
	try {
		const dlt = await ordermodel.findByIdAndDelete({ _id: req.body.id });
		res.json({ msg: "order deleted" });
	} catch (e) {
		res.send({ msg: "Failed" });
	}
});
app.get("/order_details/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const order = await ordermodel.findById(id);
		if (!order) {
			res.send({ error: "Order not found" });
		}
		res.send(order);
	} catch (error) {
		res.send({ error: "An error occurred while retrieving the order" });
	}
});

app.get("/getcar", async (req, res) => {
	let data = await productmodel.find();
	res.send(data);
});

app.patch("/getcar", async (req, res) => {
	const id = req.body.id;
	let data = await productmodel.findOne({ _id: id });
	res.send(data);
});

app.put("/updatecar", async (req, res) => {
	const id = req.body.id;
	const carname = req.body.carname;
	const rentprice = req.body.rentprice;
	const carnumber = req.body.carnumber;
	let data = await productmodel.findOneAndUpdate(
		{ _id: id },

		{
			carname: carname,
			rentprice: rentprice,
			carnumber: carnumber,
		}
	);
	res.send({ msg: "Record Updated" });
});

app.delete("/deletecar", async (req, res) => {
	try {
		const dlt = await productmodel.findByIdAndDelete({ _id: req.body.id });
		res.json({ msg: "Record Deleted" });
	} catch (e) {
		res.json({ msg: "technical error " });
	}
});
PORT=process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log("SERVER STARTED on ", PORT);
});
