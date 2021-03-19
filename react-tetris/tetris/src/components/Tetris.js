import { Stage } from "./Stage";
import { Display } from "./Display";
import { StartButton } from "./StartButton";

export const Tetris = () => {
  return (
    <div>
      <Stage />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Score" />
        </div>
        <StartButton />
      </aside>
    </div>
  );
};
