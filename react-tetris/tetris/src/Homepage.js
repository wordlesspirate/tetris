import React from "react";
import { Link } from "react-router-dom";
import { StyledHomepage } from "./components/styles/StyledHomepage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";

const blocks = <FontAwesomeIcon icon={faCubes} size="3x" />;

export const Homepage = () => {
  return (
    <StyledHomepage>
      This is the homepage.
      <p></p>
      <div>
        <button>
          <Link to={`/tetris`}>Play Game {blocks}</Link>
        </button>
      </div>
      <p></p>
      Links to Team's Socials:
      <ul>
        <li>
          <a href="https://linkedin.com/">Team Member 1</a>
        </li>
        <li>
          <a href="https://linkedin.com/">Team Member 2</a>
        </li>
        <li>
          <a href="https://linkedin.com/">Team Member 3</a>
        </li>
      </ul>
    </StyledHomepage>
  );
};
