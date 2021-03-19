import { Cell } from "./Cell";

export const Stage = ({ stage }) => (
  <div>
    {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </div>
);
