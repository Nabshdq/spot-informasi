import { useState, useEffect, useRef } from "react";
import { IoPlayCircleSharp, IoPauseCircleSharp, IoPlayForwardCircleSharp, IoPlayBackCircleSharp } from "react-icons/io5"

const Music = ({ audio }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    const updateTime = () => {
      if (audioElement) {
        setCurrentTime(audioElement.currentTime);
      }
    };

    const updateDuration = () => {
      if (audioElement) {
        setDuration(audioElement.duration);
      }
    };

    if (audioElement) {
      audioElement.addEventListener("timeupdate", updateTime);
      audioElement.addEventListener("loadedmetadata", updateDuration);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("timeupdate", updateTime);
        audioElement.removeEventListener("loadedmetadata", updateDuration);
      }
    };
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
    <div className="px-4 py-6 md:px-24 lg:px-96 ">
      <audio ref={audioRef} src={`${audio}`} />
      <div className="flex flex-col items-center space-y-3 px-3">
        <input
          type="range"
          value={currentTime}
          max={duration}
          id="progress"
          onChange={handleProgressChange}
          className="appearance-none w-full h-3 rounded-md cursor-pointer"
          style={{
            background:
              "linear-gradient(to right, #000 0%, #000 " +
              (currentTime / duration) * 100 +
              "%, #ccc " +
              (currentTime / duration) * 100 +
              "%, #ccc 100%)"
          }}
        />
        

        <div className="flex justify-center items-center space-x-6">
          <button
            onClick={backward}
            className="text-2xl"
          >
            <IoPlayBackCircleSharp style={{ fontSize: "5rem",  color: "black"}} />
          </button>
          <button className="text-2xl" onClick={playPauseHandler}>
            {isPlaying ? (
              <IoPauseCircleSharp style={{ fontSize: "5rem",  color: "black" }} />
            ) : (
              <IoPlayCircleSharp style={{ fontSize: "5rem",  color: "black" }} />
            )}
          </button>
          <button
            onClick={forward}
            className="text-2xl"
            style={{ fontSize: "2rem" }}
          >
            <IoPlayForwardCircleSharp style={{ fontSize: "5rem",  color: "black" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Music;
