import "./register.css";
import {useNavigate} from 'react-router-dom';
import { toast } from "react-toastify";

export default function Register() {

  const navigate = useNavigate();

  const collectData = () => {
    toast.success("Signup Succesfully");
    navigate("/login")
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Friendlies</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="text" placeholder="Username" className="loginInput" />
            <input type="text" placeholder="Email" className="loginInput" />
            <input type="password" placeholder="Password" className="loginInput" />
            <input type="password" placeholder="Password Again" className="loginInput" />
            <button onClick={collectData} className="loginButton">Sign Up</button>
            <button onClick={collectData} className="loginRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
