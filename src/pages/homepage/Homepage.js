import React from "react";
import Navbar from "../navbar/Navbar";

import "./Homepage.css";

export default function Homepage() {
  return (
    <div>
      <div class="wrapper">
        <div class="navbar">
          <Navbar />
        </div>
        <div class="board">board</div>
      </div>
    </div>
  );
}
