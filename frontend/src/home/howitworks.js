import React from 'react';
import './howitworks.css'
function HowItWorksSection() {
	return (
		<section className="how-it-works">
			<h2>How It Works</h2>
			<div className="steps ">
				<Step title="Step 1: Connect Your Accounts" image="/images/services/1.png">
					<ul>
						<li className='text-primary'>click on signup setion above</li>
						&nbsp;
						<li className='text-primary'>Signup and make your account</li>
						&nbsp;
						<li className='text-primary'>after signup you can use our facilities</li>
					</ul>
				</Step>
				<Step title="Step 2: Login Your Accounts" image="/images/services/3.png">
					<ol>
						<li className='text-primary'>Login Your account,as shown in image</li>
						&nbsp;
						<li className='text-primary'> Enter your email and password</li>
						&nbsp;
						<li className='text-primary'>Login by clicking on login button</li>
					</ol>
				</Step>
				<Step title="Step 3: Stay on Track and book your car" image="/images/services/2.png">
					Booking a car has never been easier with the Stay on Track system. As a top-tier AI Assistant, I can help you quickly and conveniently reserve a vehicle for your next journey.
					<br />
					With <strong className='text-dark'>RyDe</strong>&nbsp;
					you can just book car in one click
				</Step>
			</div>
		</section>
	);
}

function Step({ title, image, children }) {
	return (
		<div className="step">
			<img src={image} alt={title} className="step-image" />
			<div className="step-content">
				<h3 className="step-title">{title}</h3>
				<p className="step-description">{children}</p>
			</div>
		</div>
	);
}

export default HowItWorksSection;