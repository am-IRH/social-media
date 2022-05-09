import "./register.css"

const Register = () => {
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
                    <input type="username" placeholder="username" className="loginInput"/>
                    <input type="email" placeholder="email" className="loginInput"/>
                    <input type="password" placeholder="password" className="loginInput"/>
                    <input type="password" placeholder="confirm password" className="loginInput"/>
                    <button className="loginButton">sign up</button>
                    <button className="loginRegisterButton">
                        LOGIN
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register