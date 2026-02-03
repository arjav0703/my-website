export default function Hero() {
  return (
    <section className="nes-container is-dark is-rounded">
      <p className="text-xl py-5 nes-text is-warning">
        Hey! I'm Arjav, a 15-year-old from India with a passion for technology
        and creativity. Welcome to my personal website where I share my journey
        and projects. 🚀✨
      </p>
      <SkillSection />
    </section>
  );
}

function SkillSection() {
  return (
    <section className="nes-container is-dark ">
      <div className="text-2xl flex is-success nes-text flex-row gap-5 my-3">
        Skills
      </div>
      <div className="lists is-success my-3">
        <ul className="nes-list is-circle">
          <p className="text-xl">
            <li>- Rust</li>
            <li>- Film making and Photography</li>
            <li>- Web Development</li>
          </p>
        </ul>
      </div>
    </section>
  );
}
