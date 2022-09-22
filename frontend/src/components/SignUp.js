




const SignUp = () =>{

    return (
        <div className="signup_container">
            <div className="signup_form">
            <form className="form_container">
                <h1>Create Account</h1>
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    // onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    // onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    // onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    // onChange={handleChange}
                />
                <button type="submit" className="button">
							Sing Up
						</button>
					

            </form>
            </div>  
        </div>
    )
}

export default SignUp