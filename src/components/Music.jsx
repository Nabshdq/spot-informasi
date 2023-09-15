import React, { useState, useEffect, useRef } from "react";
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from "react-icons/ai";
import { TbPlayerTrackPrev, TbPlayerTrackNext } from "react-icons/tb";

const Music = ({ audio }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateTime);
      audioRef.current.addEventListener("loadedmetadata", updateDuration);
      return () => {
        audioRef.current.removeEventListener("timeupdate", updateTime);
        audioRef.current.removeEventListener("loadedmetadata", updateDuration);
      };
    }
  }, [audioRef.current]);

  const playPauseHandler = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const updateTime = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const updateDuration = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressChange = (e) => {
    if (audioRef.current) {
      const newTime = e.target.value;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const backward = () => {
    if (audioRef.current) {
      const newTime = audioRef.current.currentTime - 5;
      if (newTime > 0) {
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      } else {
        audioRef.current.currentTime = 0;
        setCurrentTime(0);
      }
    }
  };

  const forward = () => {
    if (audioRef.current) {
      const newTime = audioRef.current.currentTime + 5;
      if (newTime < duration) {
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      } else {
        audioRef.current.currentTime = duration;
        setCurrentTime(duration);
      }
    }
  };

  return (
    <div className="px-4 pb-4">
      <audio ref={audioRef} src={`${audio}`} />
      <div className="flex flex-col items-center space-y-4">
        <input
          type="range"
          value={currentTime}
          max={duration}
          id="progress"
          onChange={handleProgressChange}
          className="appearance-none w-full h-6 rounded-md cursor-pointer"
          style={{
            background:
              "linear-gradient(to right, #000 0%, #000 " +
              (currentTime / duration) * 100 +
              "%, #ccc " +
              (currentTime / duration) * 100 +
              "%, #ccc 100%)",
            thumb: {
              background: "#fff",
              border: "2px solid #000",
            },
          }}
        />

        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={backward}
            className="text-2xl"
            style={{ fontSize: "2rem" }}
          >
            <TbPlayerTrackPrev style={{ fontSize: "4rem" }} />
          </button>
          <button className="text-2xl" onClick={playPauseHandler}>
            {isPlaying ? (
              <AiOutlinePauseCircle style={{ fontSize: "4rem" }} />
            ) : (
              <AiOutlinePlayCircle style={{ fontSize: "4rem" }} />
            )}
          </button>
          <button
            onClick={forward}
            className="text-2xl"
            style={{ fontSize: "2rem" }}
          >
            <TbPlayerTrackNext style={{ fontSize: "4rem" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Music;
