import Header, { Footer } from './headerfooter';
import './privacy.css'
const privacy=()=> {
	return (
		<>
		<Header />
		<div className=' container-fluid'>
		<div className="container py-5">

			<h1 className='heading bg-dark'>Privacy Policy</h1>
			<p>
				This Privacy Policy describes how RyDe we collect
				and discloses your information when you use our website (the "Service") and the choices you	have associated with that data.
			</p>
			<section>
				<h2 className='heading text-light' >Information We Collect</h2>
				<p>
					We may collect several different types of information for various purposes to improve our car rental service and user experience.
				</p>
				<ul>
					<li>Personal Data:</li>
					<ul>
						<li>Name</li>
						<li>Email address</li>
						<li>Phone number</li>
						<li>Driver's license information (collected securely)</li>
						<li>Payment information (collected securely)</li>
					</ul>
					<li>Usage Data:</li>
					<ul>
						<li>Browsing history on our website</li>
						<li>Rental preferences (vehicle type, location, etc.)</li>
						<li>IP address and device information</li>
					</ul>
				</ul>
				<p className='text-warning'>We will use this information to:</p>
				<ul>
					<li>Process your car rental reservations</li>
					<li>Provide customer support</li>
					<li>Send you relevant car rental offers and promotions (with your consent)</li>
					<li>Improve the functionality and user experience of our website</li>
				</ul>
			</section>
			<section>
				<h2 className='heading text-light'>Your Rights</h2>
				<p>
					You have certain rights regarding your personal data. You may have the right to:
				</p>
				<ul>
					<li>Request access to your personal data</li>
					<li>Request a correction of inaccuracies in your personal data</li>
					<li>Request the deletion of your personal data</li>
					<li>Opt out of receiving marketing communications</li>
				</ul>
			</section>
			<p>
				We use cookies and similar tracking technologies to track the activity on our Service and hold
				certain information. Cookies are used to remember your preferences, improve your search results,
				and track your visits to our website.
			</p>
			<p>
				You can instruct your browser to refuse all cookies or to indicate when a cookie is being
				sent. However, if you do not accept cookies, you may not be able to use some portions of our
				Service.
			</p>
			<p>
				We may update our Privacy Policy from time to time in response to legal, technological, or
				business changes. We will notify you of any changes by posting the new Privacy Policy on this
				page.
			</p>
		</div>
		</div>
		<Footer />
		</>
	);
}

export default privacy;