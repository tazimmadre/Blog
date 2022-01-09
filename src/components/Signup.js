import React,{useState} from "react";
import useToken from "../utils/useToken";
import { useNavigate } from "react-router-dom";
import witter from "../apis/witter";
const Signup = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    mobileNo: "",
    address: "",
  });
  const { token, setToken } = useToken();
  const [namee, setNamee] = useState(false);

  const changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
    const handleSubmit = (e) => {
    e.preventDefault();
    setNamee(true);
    witter.post("/register", { ...credentials },{
        headers: {
          Authorization: `Bearer ${token?.token}`,
        }
      })
    .then((response) => {
        console.log(response);
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
        setNamee(false);
      });
    };
  return (
    <div className="box signup">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div class="field">
          <label class="label">First Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Alex" 
              required
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Last Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              onChange={changeHandler}
              name="lastName"
              placeholder="Dsouza"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Address</label>
          <div class="control">
            <input
              class="input"
              type="text"
              onChange={changeHandler}
              name="address"
              placeholder="04,MKH plot,NJ"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Mobile No</label>
          <input
            class="input"
            type="number"
            onChange={changeHandler}
            name="mobileNo"
            placeholder="956145454"
          />
        </div>

        <div class="field">
          <label class="label">Email</label>
          <input
            class="input"
            type="email"
            onChange={changeHandler}
            name="email"
            placeholder="alex@gmail.com"
          />
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input
              class="input"
              type="password"
              onChange={changeHandler}
              name="password"
              placeholder="********"
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button
              class={
                namee
                  ? "button button-signin is-primary control is-medium is-loading"
                  : " button button-signin is-primary"
              }
              type="submit"
            >
              {namee ? "" : "Register"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
