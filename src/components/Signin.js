
import React,{useEffect,useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import witter from "../apis/witter";
import useToken from "../utils/useToken";
const Signin = () => {
  let navigate= useNavigate();
  const [credentials,setCredentials]=useState({email:"",password:""});
  const { token, setToken } = useToken();
  const [namee,setNamee]= useState(false);
  
  const changeHandler=e=>{
    e.preventDefault();
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setNamee(true);
    witter.post("/login", { ...credentials })
    .then((response) => {
        setToken(response.data.token,credentials.email);
        navigate("/home");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setNamee(false);
      });
    };

  return (
    <form class="box signin" onSubmit={handleSubmit}>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            class="input"
            type="email"
            name="email"
            placeholder="e.g. alex@example.com"
            onChange={changeHandler}
            value={credentials.email}
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input
            class="input"
            name="password"
            type="password"
            placeholder="********"
            onChange={changeHandler}
            value={credentials.password}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <button
            class={
              namee
                ? "button button-signin spacing is-primary control is-medium is-loading"
                : " button button-signin spacing is-primary"
            }
            onClick={handleSubmit}
            type="submit"
          >
            {namee ? "" : "Signin"}
          </button>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <Link to="/" className={`button button-signin spacing is-light`}>
            Forgot Password?
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Signin;
