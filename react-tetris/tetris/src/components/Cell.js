import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}>
    {console.log("rerender in Cell")}
  </StyledCell>
);

// React.memo prevents re-rendering; re-rendering still occurs, but only when change is detected
export default React.memo(Cell);
