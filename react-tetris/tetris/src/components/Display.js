import { StyledDisplay } from "./styles/StyledDisplay";
import {StopWatch} from "./StopWatch";

export const Display = ({ gameOver, text, clock }) => (
  <StyledDisplay gameOver={gameOver}>{!clock ? text : <StopWatch/>}</StyledDisplay>
);
