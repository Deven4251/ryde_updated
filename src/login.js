import  { Footer } from "./headerfooter"
import  {useNavigate}  from "react-router-dom";
import Header from "./signupheaders/header";
import React, { useState } from "react";
import './login.css'

const Login = () => {
	const jump=useNavigate();
    const [frm,setfrm]=useState({"txtemail":"","txtpassword":""});
    const fun1=(e)=>{
        setfrm({...frm,[e.target.id]:e.target.value});
    }
	const login=async()=>{
		const rec=await fetch("http://localhost:8000/loginuser",{
            method:'POST',
			headers:{"Content-type":"application/json"},
            body:JSON.stringify({email:frm.txtemail,psw:frm.txtpassword})
});
        const data=await rec.json();
        if(data.msg==="Valid Login"){
            jump("/cars")
			
        }
        else{
            alert(data.msg);
        }
    }
	return (
		<>
			<Header />
					<div class="wrapper">
						<div class="login-box">
							<form action="post">
								<h2>Login</h2>
								<div class="input-box">
									<span class="icon">
										<ion-icon name="mail"></ion-icon>
									</span>
									<input type="email" id="txtemail" required onChange={fun1}/>
										<label>Email</label>
								</div>
								<div class="input-box">
									<span class="icon">
										<ion-icon name="lock-closed"></ion-icon>
									</span>
									<input type="password" id="txtpassword" required onChange={fun1}/>
										<label>Password</label>
								</div>

								{/*<div class="remember-forgot">*/}
									{/*<label><input type="checkbox"/> Remember me</label>*/}
									{/*<a href="#">Forgot Password?</a>*/}
								{/*</div>*/}
								<button type="button" onClick={login} >Login</button>

								<div class="register-link">
									<p>Don't have an account? <a href="/signup">Register</a></p>
								</div>
							</form>
						</div>
					</div>
			<Footer />
		</>
	)
}
export default Login