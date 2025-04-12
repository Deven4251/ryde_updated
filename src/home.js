import React from "react";
import Header, { Footer } from "./headerfooter";
import "./home.css";
import Bookcar from "./home/bookcar";
import HeroSection from "./home/herosection";
import FeaturedCars from "./home/featuredcars";
import ServicesSection from "./home/services";
import AboutUsSection from "./home/aboutus";
import HowItWorksSection from "./home/howitworks";

const Home = () => {
	return (
		<div className="home-container">
			<Header />
			<section className="container-fluid">
				<div className="row booking-section">
					<div className="col-lg-6 left-side">
						<HeroSection />
					</div>
					<div className="col-lg-6 right-side">
					<Bookcar/>
					</div>
					</div>
			</section>
			<FeaturedCars />
			<ServicesSection />
			<AboutUsSection />
			<HowItWorksSection />
			<Footer />
		</div>
	);
};
export default Home;