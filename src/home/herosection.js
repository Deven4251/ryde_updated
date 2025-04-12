import React from 'react';
import './HeroSection.css';

function HeroSection() {
	return (
		<section className="hero">
			<div className="hero-content">
				<h1 className='bg-dark'>Drive Your Dreams with &nbsp;
				<br />
					<span className="text-danger">R</span>
					<span className="text-light">y</span>
					<span className="text-info">D</span>
					<span className="text-warning">e</span>
				</h1>
				<p>Find the perfect car for your next adventure.</p>
				
			</div>
		</section>
	);
}

export default HeroSection;