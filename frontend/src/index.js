import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './signup';
import Home from './home';
import AboutUsPage from './AboutUsPage';
import Admin from './admin';
import Privacy from './privacy';
import Contact from './admin/contact';
import Addproducts from './admin/add products';
import Blogs from './blog';
import Login from './login';
import Car from './cars';
import TermsOfService from './tos';
import App from './App';
import Dashboard from './MODALS/dashboard';
import OrderTrack from './admin/track_order';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
			<Route exact path='/' element={<Signup />} />
			<Route exact path='/home' element={<Home />} />
			<Route exact path='/App' element={<App />} />
			<Route exact path='/tos' element={<TermsOfService />}/>
			<Route exact path='/privacy' element={<Privacy />}/>
			<Route exact path='/signup' element={<Signup />}/>
			<Route exact path='/AboutUsPage' element={<AboutUsPage />}/>
			<Route exact path='/admin' element={<Admin />}/>
			<Route exact path='/track_order' element={<OrderTrack />}/>
			<Route exact path='/cars' element={<Car />}/>
			<Route exact path='/dashboard' element={<Dashboard />}/>
			<Route exact path='/login' element={<Login />}/>
			<Route exact path='/contact' element={<Contact />}/>
			<Route exact path='/add products' element={<Addproducts />}/>
			<Route exact path='/blog' element={<Blogs />}/>
			<Route exact path='/privacy' element={<privacy/>}/>
	
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

reportWebVitals();
