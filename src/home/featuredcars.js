import React from 'react';
import './featuredcars.css';
const FeaturedCars = () => {

	const featuredCars = [
		{
			id: 1,
			name: 'Tata Safari',
			image: 'https://rb.gy/8v9ti9',
			description: 'Luxury sedan with cutting-edge technology.',
			availability: 'Available',
			rentalRate: '₹200/day',
			owner:'Rakesh'
		},
		{
			id: 2,
			name: 'BMW M5',
			image: './images/featuredcars/WagonR.jpg',
			description: 'High-performance luxury sedan with a powerful engine.',
			owner:'Mukesh',
			availability: 'Available',
			rentalRate: '₹250/day',
		},
		{
			id: 3,
			name: 'Audi R8',
			owner:'Shrikant',
			image: './images/tavera.jpeg',
			description: 'Exotic sports car known for its stunning design and performance.',
			availability: 'Unavailable',
			rentalRate: '₹400/day',
		},
	];

	return (
		<div className="featured-cars ">
			<h2>Featured Cars</h2>
			<div className='separator m-3'></div>
			<div className="row car-list p-3">
				{featuredCars.map(car => (
					<div key={car.id} className="car-item row">
						<div className="col-md-5 p-1 ">
							<img src={car.image} alt={car.name} className="img-fluid size2 csss" />
						</div>
					
						<div className="col-md-7 p-3">
							<div className="car-details">
								<h2 className="text-warning">{car.name}</h2>
								<h4>Description: {car.description}</h4>
								<h3>Availability:<span className='bg-success '> {car.availability}</span></h3>
								<h5>Owner: {car.owner}</h5>
								<h5>Rental Rate: {car.rentalRate}</h5>
							</div>
						</div>
<div className='separator m-3'></div>
					</div>

				))}

			</div>

		</div>
	);
};

export default FeaturedCars;
