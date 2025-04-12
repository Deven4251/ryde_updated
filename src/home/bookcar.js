const Bookcar=()=>{
	return(
	<>
	<div className="background">
							<h1 className="bg-dark">Book Car</h1>
							<div className="booking-details">
								<div className="form-group pickup-location row">
									<label>
										Pick-up location:
								
									</label>
										<input
											type="text"
											className="form-control city"
											id="pickup-location"
											name="pickup-location"
											placeholder="City"
											required
										/>
								</div>
								<div className="row booking-row">
									<div className="col-lg-6 booking-column">
										<div className="form-group">
											<label
												htmlFor="pickup-date"
												className="text-success labelDate col-form-label"
											>
												Pick-up Date:
											</label>
											<input
												type="date"
												className="form-control "
												id="pickup-date"
												name="pickup-date"
												required
												aria-label="Pick-up date"
											/>
											<label
												htmlFor="pickup-time"
												className="text-success labelDate col-form-label"
											>
												Pick-up Time:
											</label>
											<input
												type="time"
												className="form-control mt-3"
												id="pickup-time"
												name="pickup-time"
												required
												aria-label="Pick-up time"
											/>
										</div>
									</div>
									<div className="col-lg-6 booking-column">
										<div className="form-group">
											<label
												htmlFor="return-date"
												className="text-warning labelDate col-form-label"
											>
												Return Date:
											</label>
											<input
												type="date"
												className="form-control"
												id="return-date"
												name="return-date"
												required
												aria-label="Return date"
											/>
											<label
												htmlFor="return-time"
												className="text-warning labelDate col-form-label"
											>
												Return Time:
											</label>
											<input
												type="time"
												className="form-control mt-3"
												id="return-time"
												name="return-time"
												aria-label="Return time"
												required
											/>
										</div>
									</div>
								</div>
								{/*<a href="/login">*/}
								<button className="btn btn-primary mt-3">Book Car</button>
								{/*</a>*/}
							</div>
						</div>
	</>
	)
}
export default Bookcar;