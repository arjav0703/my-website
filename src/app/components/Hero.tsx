export default function Hero() {
  return (
    <section className="nes-container is-dark is-rounded ">
      <p className="text-xl py-5 nes-text text-yellow-200">
        Hey! I'm Arjav, a 15-year-old from India with a passion for technology
        and creativity. Welcome to my personal website 🚀✨
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
        In my free time, I enjoy reading fiction books, watching movies, and
        playing video games. Some noteble mentions from the video games category
        would be COD Black Ops, GTA V, Resident Evil 4, Rise of the Tomb Raider,
        and Cyberpunk 2077
      </p>
    </div>
  );
}
