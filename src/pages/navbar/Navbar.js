import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <div class="nav-wrapper">
        <div class="logo-name">
          <img src="codesandbox.png" />
          <h1>Pro Manage</h1>
        </div>
        <a class="submenu">
          <img src="layout.png" />
          <h1>Board</h1>
        </a>
        <a class="submenu">
          <img src="database.png" />
          <h1>Analytics</h1>
        </a>
        <a class="submenu">
          <img src="settings.png" />
          <h1>Settings</h1>
        </a>
        <a class="logout submenu">
          <img src="Logout.png" />
          <h1>Logout</h1>
        </a>
      </div>
    </div>
  );
}
