import React from "react";
import { Link } from "react-router-dom";

const Sidebar=()=>{
return (
  <aside class="menu">
    <p class="menu-label">General</p>
    <ul class="menu-list">
      <li>
        <Link to="/home">Dashboard</Link>
      </li>
      <li>
        <Link to="/myposts">Customers</Link>
      </li>
    </ul>
    {/* <p class="menu-label">Administration</p>
  <ul class="menu-list">
    <li>
      <a>Team Settings</a>
    </li>
    <li>
      <a class="is-active">Manage Your Team</a>
      <ul>
        <li>
          <a>Members</a>
        </li>
        <li>
          <a>Plugins</a>
        </li>
        <li>
          <a>Add a member</a>
        </li>
      </ul>
    </li> */}
    <p className="menu-label">Settings</p>
    <ul className="menu-list">
      <li>
        <a>Invitations</a>
      </li>
      <li>
        <a>Cloud Storage Environment Settings</a>
      </li>
      <li>
        <a>Authentication</a>
      </li>
    </ul>
  </aside>
);
}

export default Sidebar;