import React from 'react'
import Footer from '../parts/footer/Footer'
import Logo from '../components/logo/Logo'
import useTitle from '../hooks/useTitle'

const SignIn = () => {

	useTitle('SignIn')

	return (
		<div className="container text-center">
			<main className="form-signin">
				<form>
					<Logo/>
					<h1 className="h3 mb-3 fw-normal">Please sign in</h1>

					<div className="form-floating">
						<input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
						<label htmlFor="floatingInput">Email address</label>
					</div>
					<div className="form-floating">
						<input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
						<label htmlFor="floatingPassword">Password</label>
					</div>

					<div className="checkbox mb-3">
						<label>
							<input type="checkbox" value="remember-me"/> Remember me
						</label>
					</div>
					<button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
					<Footer/>
				</form>
			</main>
		</div>
	)
}

export default SignIn