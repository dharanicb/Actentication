import Google from "../img/google.png";
import Facebook from "../img/facebook.png";
import Github from "../img/github.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
const [name , setName] = useState("")
const [password , setPassword] = useState("")

const navigate = useNavigate()

const onSubmit = (e) => {
  e.preventDefault()
  navigate("/") 

  console.log("home")
}

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <form onSubmit={onSubmit} className="right">
          <input type="text" placeholder="Username" 
          value={name} onChange={(e)=> setName(e.target.value)} required
          />
          <input type="password" placeholder="Password" 
          value={password} onChange={(e)=> setPassword(e.target.value)} required
          />
          <button className="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
