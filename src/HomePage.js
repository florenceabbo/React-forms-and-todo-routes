import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Logo from "./todotask/logo";

export function HomePage() {
  return (
    <div>
      <div className="image">
      <Logo/>
      </div>
      
      <div className="Home">
        <div className="Homediv1"></div>
        <div className="Homediv2">
          <h1>Woow..Welcome to the world of Reactjs with me..Abbo Fulumera</h1>
          <h1>Get started with my app</h1>
          <h2>
            Explore more by clicking the buttons below or using the navigation
          </h2>
        </div>
        <div className="navbuttons">
          <Link to="/app2" className="todoview">
            Go To Todos
          </Link>
          <Link to="/forms" className="formview">
            Go To Forms
          </Link>
          <Link to="/profile" className="formview">
            Go To Aboutus
          </Link>
        </div>
      </div>
      <footer>
        <div className="footer">
          <div className="footer1">
            <div>HOMEPAGE</div>
            <div>PROFILEPAGE</div>
          </div>
          <div className="footer2">
            <div>TODOPAGE</div>
            <div>FORMPAGE</div>
          </div>
          <div className="footer3">
            <div>CONTACTUS</div>
            <div>ABOUTUS</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
