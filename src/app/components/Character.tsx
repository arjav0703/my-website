"use client";

import { useState, useEffect } from "react";

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
  return (
    <div
      className="fixed bottom-10 right-10 hover:scale-110 active:scale-90"
      onClick={() => PlayAudio()}
    >
      <RandomCharacter />
    </div>
  );
}

function PlayAudio() {
  const audio = new Audio("/retro_sound.mp3");
  audio.play();
}
