import React from 'react';
import './tos.css';
import Header, { Footer } from './headerfooter';

const TermsOfService = () => {
	return (
		<>
			<Header />
			<div className="container py-5">
				<h1 className='bshad text-warning bg-dark'>Terms of Service</h1>
				<p className='text-info'>
					Welcome to RyDe. These Terms of Service
					("Terms") govern your use of our website (the "Service") and the car rental services offered
					through it.
				</p>
				<section className="section">
					<h2>Eligibility</h2>
					<p>
						You must be at least 18 years old, have a valid driver's license, and meet any other
						requirements specified by us to use the Service and rent a car.
					</p>
				</section>
				<section className="section">
					<h2>Reservations and Rentals</h2>
					<p>
						To make a reservation, you must provide accurate information, including your name, contact
						details, driver's license information, and payment details. You are responsible for all
						charges associated with your reservation. We reserve the right to cancel reservations for
						any reason.
					</p>
				</section>
				<section className="section">
					<h2>Vehicle Use and Responsibility</h2>
					<p>
						You are responsible for the safe operation and care of the rented vehicle. You are liable for
						any damage caused to the vehicle during your rental period. You must comply with all traffic
						laws and regulations.
					</p>
				</section>
				<section className="section">
					<h2>Payment</h2>
					<p>
						You agree to pay all charges associated with your rental, including the base rental rate,
						taxes, fees, and any additional charges incurred during your rental period. We accept various
						payment methods as listed on our website.
						<ul>
							<li>Paytm</li>
							<li>PhonePe</li>
							<li>G Pay</li>
							<li>Bharat Pay</li>
							<li>COD</li>
						</ul>
					</p>
				</section>
				<section className="section">
					<h2>Disclaimer</h2>
					<p>
						We use reasonable efforts to ensure the accuracy of the information on our Service. However,
						we make no warranties, express or implied, regarding the accuracy, completeness, or
						reliability of such information.
					</p>
				</section>
				<p>
					These Terms constitute the entire agreement between you and us regarding your use of the
					Service and car rental services. We may update these Terms at any time. By using the Service
					after the posting of any modifications, you agree to be bound by the modified Terms.
				</p>
				<p>
					Contact us if you have any questions about these Terms.
				</p>
			</div>
			<Footer />
		</>
	);
};

export default TermsOfService;