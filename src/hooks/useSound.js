import { useEffect, useState } from "react";

const useSound = (url, options) => {
  const [sound, setSound] = useState(null);
  useEffect(() => {
    const audio = new Audio(url);
    audio.volume = options.volume || 1;
    setSound(audio);

    audio.load();
  }, [url, options.volume]);

  return () => {
    if (sound ) {
      sound.play().catch((err) => {
        console.error("Audio play failed:", err);
      });
    }
    setTimeout(()=>{
      sound.pause();
      sound.currentTime = 0;
    }, options.timeout)
  };
};

export default useSound;

