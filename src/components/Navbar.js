import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import styles from "../util.module.css";
import useToken from "../utils/useToken";

const Navbar = () => {
  const {token,setToken,clearToken}= useToken();
  const signoutHandler=(e)=>{
    clearToken();
  };
  const renderAuth=()=>{
    if(!token){
      return(
        <>
        <Link to="/signup" class="button is-primary">
            <strong>Sign up</strong>
          </Link>
          <Link to="/signin" class="button is-light">
            Log in
          </Link>
          </>
      );
    }else{
      return(
        <>
        <Link to="/" className="button is-danger" onClick={signoutHandler}>Sign Out</Link>
        </>
      );
    }
  };
  return (
   <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <Link class="navbar-item" to="/">
      <h1 className={styles.headingXl} width="112" height="28">WITTER</h1>
    </Link>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <Link to="/home" class="navbar-item">
        Home
      </Link>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider"/>
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          {renderAuth()}
        </div>
      </div>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
