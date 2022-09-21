



const Login = () =>{

    return (
        <div className="container">
            <div className="form_container">
                <div>
                    <form>
                        <h1>Login to Your Account</h1>
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
                            Sign in
                        </button>
                            
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login