import "./login.css"

const Login = () => {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">AMIR social</h3>
                <span className="loginDesc">
                    connect with friends and the world around you an on social
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="email" className="loginInput"/>
                    <input type="password" className="loginInput"/>
                    <button className="loginButton">Log in</button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className="loginRegisterButton">
                        create a new account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login