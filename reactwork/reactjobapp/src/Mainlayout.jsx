import React from "react";
import { Link, Outlet } from "react-router-dom";
function Mainlayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <link link to="/login">
              Login
            </link>
          </li>
          <li>
            <link link to="/registration">
              Registration
            </link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Mainlayout;
