import React, { useEffect ,useState} from "react";
import { Link } from "react-router-dom";
import styles from "../util.module.css";
import useToken from "../utils/useToken";

const Navbar = () => {
  const { token, setToken, clearToken } = useToken();
  const [menu,setMenu]= useState(false);
  const signoutHandler = (e) => {
    clearToken();
  };
  const menuHandler=()=>{
    setMenu(!menu);
  }
  const renderAuth = () => {
    if (!token) {
      return (
        <>
          <Link to="/signup" onClick={menuHandler} class="button is-primary button-s">
            <i class="fas fa-user-plus"></i>
            <strong>Sign up</strong>
          </Link>
          <Link to="/signin" onClick={menuHandler} class="button is-light button-s">
            <i class="fas fa-sign-in-alt"></i>
            Log in
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/" className="button is-danger" onClick={signoutHandler}>
            <i class="fas fa-sign-out-alt"></i> Sign Out{" "}
          </Link>
        </>
      );
    }
  };
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <Link class="navbar-item" to="/">
          <h1 className={styles.headingXl} width="112" height="28">
            WITTER
          </h1>
        </Link>

        <a
          role="button"
          class={menu?"navbar-burger is-active":"navbar-burger"}
          onClick={menuHandler}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class={menu ?"navbar-menu is-active":"navbar-menu"}>
        <div class="navbar-start">
          <Link to="/home" class="navbar-item">
            Home
          </Link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link is-arrowless">More</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">About</a>
              <a class="navbar-item">Jobs</a>
              <a class="navbar-item">Contact</a>
              <hr class="navbar-divider" />
              <a class="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">{renderAuth()}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
