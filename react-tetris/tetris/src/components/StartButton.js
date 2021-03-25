import { StyledStartButton } from "./styles/StyledStartButton";

export const StartButton = ({ callback, status }) => {
  //start button will start the timer
  let text = status ? 'Restart Game?' : 'Start' ;
  return (
    <StyledStartButton onClick={callback}>{text}</StyledStartButton>
  )
};
