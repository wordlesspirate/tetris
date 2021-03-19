import { StyledDisplay } from "./styles/StyledDisplay";

export const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);
