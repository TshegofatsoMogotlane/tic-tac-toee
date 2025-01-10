import React, { useState, useRef, useEffect, useContext } from "react";
import { MusicPlayerWrapper } from "../musicPlayer/MusicPlayer.styled";
import playlist from "../../utils/MusicUtils/playlist";
import { randomizedIndex } from "../../utils/MusicUtils";
import { PlayIcon, PauseIcon, NextIcon} from "../musicPlayer/MusicPlayer.styled";
import { SoundEffectContext } from "../../contexts/SoundEffectContect";
const MusicPlayer = () => {
  const { hoverSfx} = useContext(SoundEffectContext)
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(randomizedIndex(playlist));
  const playerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      playerRef.current.play().catch((err) => {
        console.error("Audio play failed:", err);
      });
    }else {
      playerRef.current.pause(); // Ensure the audio pauses when isPlaying is false
    }
  }, [isPlaying, currentSong]); // Re-running whenever song or play state changes

  // Handling play/pause toggle
  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  // Handling next song
  const handleNext = () => {
    const nextSongIndex = randomizedIndex(playlist);
    setCurrentSong(nextSongIndex);
    setIsPlaying(false); // Resetting play state when changing songs
  };

  const displaySong = playlist[currentSong].split("/")[3]
  return (
    <MusicPlayerWrapper>
      {isPlaying ? <PauseIcon onClick={handlePlayPause} onMouseEnter={()=> hoverSfx()}/> : <PlayIcon onClick={handlePlayPause} onMouseEnter={()=> hoverSfx()}/>}
      <NextIcon onClick={handleNext} onMouseEnter={()=> hoverSfx()}/>
      <audio ref={playerRef} src={playlist[currentSong]} />
      <p>{displaySong}</p>
    </MusicPlayerWrapper>
  );
};

export default MusicPlayer;

