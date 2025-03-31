import React, { useState } from 'react';
import Header, { Footer } from './headerfooter';
import './blog.css';
import { Container, Row, Col } from 'react-bootstrap';

const Blogs = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const filteredBlogPosts = blogPosts.filter((post) => {
		return post.title.toLowerCase().includes(searchTerm.toLowerCase());
	});

	return (
		<>
			<Header />
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6 text-center">
						<h1 className='bg-dark'>Blog Posts</h1>
						{/*<p className="txt">Here you can find articles about cars.</p>*/}
						<input type="text" placeholder="Search posts..." value={searchTerm} onChange={handleSearch} />
						<div className='macho'>
							<p className='text-warning text'>
							Thanking you for visiting this page
							</p>
						
							<img src="./images/frame.png" className='pic' alt="" />
							<br />
							<h1 className='bg-dark'>SCAN ME:🫡</h1>
						</div>
					</div>
					<div className="col-md-6 text-center">
						<div className="animate-img">
							<img src="./images/BACKGROUND.jpg" alt="" className="img-fluid" />
						</div>
					</div>
				</div>
			</div>
			{/* Render the filtered blog posts */}
			{filteredBlogPosts.map((post) => {
				return (
					<Container fluid className="mt-5">
						<Row>
							<Col>
								<h2 className="text-info fnt">{post.title}</h2>
								<p className="text-left txt">{post.content}</p>
							</Col>
						</Row>
					</Container>
				);
			})}
			<Footer />
		</>
	);
};


	const blogPosts = [
		{
			title: 'How to Choose the Perfect Rental Car for Your Next Adventure',
			content: 'Planning a trip can be an exhilarating experience, filled with anticipation for the adventures that lie ahead. Whether you\'re embarking on a cross-country road trip, exploring a new city, or simply need a reliable set of wheels for your business trip, selecting the right rental car can significantly enhance your travel experience. With a plethora of options available, finding the perfect match for your needs might seem daunting. Fear not! Our comprehensive guide is here to steer you in the right direction and ensure your journey is smooth from start to finish.'
		},
		{
			title: 'The Importance of Car Rental Insurance',
			content: 'Discuss the different types of car rental insurance available, such as collision damage waiver, liability insurance, and personal accident insurance. Explain the benefits of each type of insurance and why it is important to have coverage when renting a car'
		},
		{
			title: 'The Pros and Cons of Renting a Luxury Car for a Special Occasion or Business Trip',
			content: 'Explain the benefits and drawbacks of renting a luxury car for a special occasion or business trip. Discuss the costs involved, such as higher rental fees and insurance rates, and provide tips for finding and renting a luxury car.'
		},
		{
			title: 'How to Navigate Car Rental Policies and Fees',
			content: 'Break down the common policies and fees associated with car rentals, such as additional driver fees, young driver surcharges, and toll road fees. Provide tips for avoiding unexpected charges and negotiating fees with rental car companies.'
		},
		{
			title: 'How to Choose the Right Car Seat for Your Rental Car',
			content: 'Discuss the importance of using a car seat for young children in rental cars. Provide tips for choosing the right car seat for your rental car, such as checking the car seat laws in your destination and measuring the car seat dimensions.'
		},
		{
			title: 'How to Prepare Your Car for a Long Road Trip',
			content: 'Provide tips and tricks for preparing a rental car for a long road trip. Discuss important considerations such as car maintenance, emergency supplies, and roadside assistance.'
		},
		{
			title: 'The Pros and Cons of Renting an SUV',
			content: 'Discuss the benefits and drawbacks of renting an SUV for a family vacation or off-road adventure. Explain the costs involved, such as higher rental fees and fuel costs, and provide tips for finding and renting an SUV.'
		},
		{
			title: 'How to Choose the Right Car Seat for Your Rental Car',
			content: 'Discuss the importance of using a car seat for young children in rental cars. Provide tips for choosing the right car seat for your rental car, such as checking the car seat laws in your destination and measuring the car seat dimensions.'
		},
		{
			title: 'The Benefits of Renting a Convertible Car',
			content: 'Discuss the advantages of renting a convertible car for a road trip or vacation. Explain how a convertible car can enhance the driving experience and provide tips for finding and renting a convertible car.'
		},
		{
			title: 'How to Avoid Common Car Rental Scams',
			content: 'Discuss common car rental scams, such as hidden fees, damage claims, and upselling, and provide tips for avoiding them. Explain how to read and understand car rental contracts, and provide advice for negotiating fees and disputes with rental car companies.'
		},
		{
			title: 'The Pros and Cons of Renting a Hybrid Car for Business Travel',
			content: 'Discuss the financial and environmental benefits of renting a hybrid car for business travel. Explain how hybrid cars can save money on fuel costs and reduce carbon emissions, and provide tips for finding and renting a hybrid car.'
		},
		{
			title: 'How to Prepare Your Car for a Long Road Trip',
			content: 'Provide tips and tricks for preparing a rental car for a long road trip. Discuss important considerations such as car maintenance, emergency supplies, and roadside assistance.'
		},
		{
			title: 'The Pros and Cons of Renting a Minivan',
			content: 'Discuss the benefits and drawbacks of renting a minivan for a family vacation or group trip. Explain the costs involved, such as higher rental fees and fuel costs, and provide tips for finding and renting a minivan.'
		}
	];

	export default Blogs;