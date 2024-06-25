import React from "react";
import Navbar from "../navbar/Navbar";
import Analytics from "../analytics/Analytics";
import "./Homepage.css";
import Board from "../board/Board";

export default function Homepage() {
  return (
    <div>
      <div class="wrapper">
        <div class="navbar">
          <Navbar />
        </div>
        <div class="board">
          <Board />
        </div>
      </div>
    </div>
  );
}
