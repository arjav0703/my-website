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

  const randomIndex = Math.floor(Math.random() * characters.length);
  const randomCharacter = characters[randomIndex];

  return <i className={randomCharacter}></i>;
}

export default function RenderCharacter() {
  return (
    <div className="fixed bottom-10 right-10">
      <RandomCharacter />
    </div>
  );
}
