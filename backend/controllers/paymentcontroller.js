const Razorpay = require("razorpay");
const { Payment } = require("../model/paymentModel");
const crypto = require("crypto");
require("dotenv").config();

// Ensure that the key_id and key_secret are correctly set in your environment variables or directly here
const instance = new Razorpay({
	key_id: process.env.RAZORPAY_KEY_ID || "rzp_test_RahlVHO9T1FxJC",
	key_secret: process.env.RAZORPAY_KEY_SECRET || "fSJYwH3E4lbu8lmmPT0Ekzz6",
});

// const checkout = async (req, res) => {
//   const options = {
//     amount: Number(req.body.amount * 100),
//     currency: "INR",
//   };
//   const order = await instance.orders.create(options);
//   console.log(order);
//   res.status(200).json({
//     success: true,
//     order,
//   });
// };
// const paymentVerification = async (req, res) => {
//   const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
//     req.body;
//   const body = razorpay_order_id + "|" + razorpay_payment_id;
//   const hash = crypto
//     .createHmac("sha256", "YOUR_KEY_SECRET")
//     .update(body.toString().digest("hex"));
//   const isauth = hash === razorpay_signature;
//   if (isauth) {
//     await Payment.create({
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//     });
//     res.status(200).json({
//       success: true,
//     });
//   } else {
//     res.status(400).json({
//       success: false,
//     });
//   }
// };
// const getKey = (req, res) => {
//   return res.status(200).json({
//     key: "rzp_test_RahlVHO9T1FxJC",
//   });
// };

const createRazorpayOrder = async (req, res) => {
	const { userId, amount } = req.body;
	if (!userId || !amount)
		return res
			.status(400)
			.json({ message: "Provide user id.", success: false });
	const options = {
		amount: amount * 100,
		currency: "INR",
	};

	const { id, status } = await instance.orders.create(options);
	if (status !== "created")
		return res.status(400).json({ message: "Order is not created" });

	const orderData = {
		id,
		amount: amount * 100,
		currency: "INR",
		razorpayKeyId: "rzp_test_RahlVHO9T1FxJC",
	};
	// Get the current date
	const today = new Date();

	// Create an array of month names
	const monthNames = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	// Format the date
	const formattedDate = `${today.getDate()}-${monthNames[today.getMonth()]
		}-${today.getFullYear()}`;

	const createdOrder = new Payment({
		userId,
		paymentDate: formattedDate.toString(),
		totalAmount: amount,
		razorpayOrderId: id,
	});
	const result = await createdOrder.save();
	if (!result)
		return res
			.status(400)
			.json({ message: "Order is not saved", success: false });
	return res.status(200).json({ data: orderData, success: true });
};

const verifySignature = async (req, res) => {
	const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
		req.body;
	const hmac = crypto.createHmac("sha256", "fSJYwH3E4lbu8lmmPT0Ekzz6");
	hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
	const generatedSignature = hmac.digest("hex");
	if (generatedSignature === razorpay_signature) {
		const p = await Payment.findOneAndUpdate(
			{ razorpayOrderId: razorpay_order_id },
			{
				paymentStatus: "Fully Paid",
				razorpaySignature: razorpay_signature,
				razorpayPaymentId: razorpay_payment_id,
			},
			{ new: true }
		);
		return res.status(200).json({ success: true });
	}
	return res.status(400).json({ success: false });
};

module.exports = { createRazorpayOrder, verifySignature };
