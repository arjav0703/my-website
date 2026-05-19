export default function Hero() {
  return (
    <section className="nes-container is-dark is-rounded ">
      <p className="text-xl py-5 nes-text text-yellow-200">
        Hey! I'm Arjav, a 16 year old from India with a passion for technology
        and creativity. Welcome to my personal website 🚀✨ <br />I am a rust
        developer who is still learning new things. I am also an active
        communnity volunteer at Hackclub.
      </p>
      <StuffILike />
    </section>
  );
}

function StuffILike() {
  return (
    <div className=" ">
      {/*<h1 className="nes-text is-primary text-2xl">Stuff I Like</h1>*/}
      <p className="nes-text text-xl text-yellow-200">
        I enjoy storyplayer games, fiction books, and photography in my free
        time.
      </p>
    </div>
  );
}
