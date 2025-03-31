import React from 'react'

const RazorPayComponent = () => {

	useEffect(() => {
		const script = document.createElement('script');
		script.src = "https://checkout.razorpay.com/v1/checkout.js";
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		}
	}, []);

	const openRazorpay = () => {
		var options = {
			"key": "rzp_test_RahlVHO9T1FxJC", 
			"amount": "50000", 
			"currency": "INR",
			"name": "RyDe",
			"description": "Test Transaction",
			"image": "https://example.com/your_logo",
			"order_id": "order_Nz0y7TyPfcBXBg", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
			"callback_url": "http://localhost:8000/verify-order",
			"prefill": {
				"name": "RYDE",
				"email": "dev@gmail.com",
				"contact": "7398043147"
			},
			"notes": {
				"address": "Razorpay Corporate Office"
			},
			"theme": {
				"color": "#3399cc"
			}
		};
		var rzp1 = new window.Razorpay(options);
		rzp1.open();
	};


	return (
		<>
			<button id="rzp-button1" className="btn" type="button" onClick={openRazorpay}>
				Pay with Razorpay
			</button>
		</>
	)
}

export default RazorPayComponent