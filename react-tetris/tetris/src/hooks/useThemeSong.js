import { useState } from "react";
import Sound from "react-sound";
import ThemeSong from "../theme-song/Twister Tetris.mp3";

export const useThemeSong = () =>
  //   handleThemeSongLoading,
  //   handleThemeSongPlaying,
  //   handleThemeSongFinishedPlaying
  {
    const [isPlaying, setIsPlaying] = useState(false);

    // handleThemeSongLoading = () => console.log("loaded song");

    // handleThemeSongPlaying = () => console.log("playing song");

    // handleThemeSongFinishedPlaying = () => console.log("song finished");

    const playSong = () => {
      setIsPlaying(!isPlaying);
    };

    return [isPlaying, playSong];

    // (
    //   <div>
    //     <button onClick={() => setIsPlaying(!isPlaying)}>
    //       {!isPlaying ? "Play" : "Stop"}{" "}
    //     </button>
    //     ;
    //     <Sound
    //       url={ThemeSong}
    //       playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
    //       onLoading={handleThemeSongLoading}
    //       onPlaying={handleThemeSongPlaying}
    //       onFinishedPlaying={handleThemeSongFinishedPlaying}
    //     />
    //   </div>
    // );
  };
