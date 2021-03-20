import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

export const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);
