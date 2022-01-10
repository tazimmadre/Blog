import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import witter from "../apis/witter";
import useToken from "../utils/useToken";
const Password = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ oldpassword: "", newpassword: "" });
  const { token, setToken } = useToken();
  const [namee, setNamee] = useState(false);

  const changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setNamee(true);
    witter
      .post("/login", { ...credentials })
      .then((response) => {
        setToken(response.data.token, credentials.email);
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
        <label class="label">Current Password</label>
        <div class="control">
          <input
            class="input"
            type="password"
            name="oldpassword"
            placeholder="*********"
            onChange={changeHandler}
            value={credentials.oldpassword}
          />
        </div>
      </div>

      <div class="field">
        <label class="label">New Password</label>
        <div class="control">
          <input
            class="input"
            name="newpassword"
            type="password"
            placeholder="********"
            onChange={changeHandler}
            value={credentials.newpassword}
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
    </form>
  );
};

export default Password;
