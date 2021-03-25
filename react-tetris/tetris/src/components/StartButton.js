import { StyledStartButton } from "./styles/StyledStartButton";

export const StartButton = ({ callback, status }) => {
  let text = status ? 'Restart Game?' : 'Start' ;
  return (
    <StyledStartButton onClick={callback}>{text}</StyledStartButton>
  )
};
