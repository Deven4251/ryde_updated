import React from "react";
import Header, { Footer } from "./headerfooter"

const AboutUsPage = () => {
	return (
		<>
			<Header />
			
				<div className="">
						<h1 className="text-center text-success">About Our Website</h1>
						<p>
							Welcome to our website! We are dedicated to providing valuable
							content and services to our visitors. Learn more about us and
							what we have to offer.
						</p>
					</div>
			<Footer />
		</>
	);
};

export default AboutUsPage;
