import { StyledStartButton } from "./styles/StyledStartButton";

export const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);
