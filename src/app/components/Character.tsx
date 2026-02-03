"use client";

import { useState, useEffect, useRef } from "react";

function RandomCharacter() {
  const characters = [
    "nes-mario",
    "nes-ash",
    "nes-pokeball",
    "nes-bulbasaur",
    "nes-charmander",
    "nes-squirtle",
    "nes-kirby",
  ];

  const [randomCharacter, setRandomCharacter] = useState(characters[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    setRandomCharacter(characters[randomIndex]);
  }, []);

  return <i className={randomCharacter}></i>;
}

export default function RenderCharacter() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/retro_sound.mp3");

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audioRef.current.addEventListener("ended", handleEnded);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleEnded);
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className="fixed bottom-10 right-10 hover:scale-110 active:scale-90"
      onClick={toggleAudio}
    >
      <RandomCharacter />
    </div>
  );
}
