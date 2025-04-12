import React from 'react';
import './contact.css';
import Header, { Footer } from "../headerfooter";


const Contact = () => {
	return (
		<>
			<Header />
			<section id="contact" className="contact">
				<div className="container section-title">
					<h2>Contact</h2>
					<p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
				</div>

				<div className="container">

					<div className="row gy-4">

						<div className="col-lg-6">

							<div className="row gy-4">
								<div className="col-md-6">
									<div className="info-item" data-aos="fade" data-aos-delay="200">
										<i className="bi bi-geo-alt"></i>
										<h3>Address</h3>
										<p>A108 Adam Street</p>
										<p>New York, NY 535022</p>
									</div>
								</div>

								<div className="col-md-6">
									<div className="info-item" data-aos="fade" data-aos-delay="400">
										<i className="bi bi-envelope"></i>
										<h4>Email Us</h4>
										<a href="mailto:devendramishra0204@gmail.com">Mail devendra </a>
										<br/>
										<a href="mailto:kshitijmaddheshiya3@gmail.com">Mail Kshitij</a>
										<br/>
										<a href="mailto:Anjaliyadav11sep@gmail.com">Mail Anjali</a>
										<br/>
										<a href="mailto:akashkumarverma13@gmail.com">Mail Akash</a>
										<br/>
										
									</div>
								</div>

								<div className="col-md-6">
									<div className="info-item" data-aos="fade" data-aos-delay="500">
										<i className="bi bi-clock"></i>
										<h3>Open Hours</h3>
										<p>Monday - Friday</p>
										<p>9:00AM - 05:00PM</p>
									</div>
								</div>

							</div>

						</div>

						<div className="col-lg-6">

							<div className="row gy-4">

								<div className="col-md-6">
									<input type="text" name="name" className="form-control" placeholder="Your Name" required />
								</div>

								<div className="col-md-6 ">
									<input type="email" className="form-control" name="email" placeholder="Your Email" required />
								</div>

								<div className="col-md-12">
									<input type="text" className="form-control" name="subject" placeholder="Subject" required />
								</div>

								<div className="col-md-12">
									<textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
								</div>
								<div className="col-md-12 text-center">
									<button type="submit">Send Message</button>
								</div>
							</div>
						</div>
					</div>

				</div>
			</section>
			<div className='google location'>
			
			</div>
			<Footer />
		</>
	);
};

export default Contact;
