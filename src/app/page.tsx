"use client";
import React from "react";
import CopyHandler from "./components/CopyHandler";
import "nes.css/css/nes.min.css";
import SocialIcons from "./components/SocialIcons";
import Hero from "./components/Hero";
import RenderCharacter from "./components/Character";

export default function Home() {
  return (
    <div className="bg-[#212529] min-h-screen flex flex-col">
      <div
        className="pt-20 max-w-7xl mx-auto grow px-8 py-4 flex flex-col gap-10"
        onCopy={CopyHandler}
      >
        <NameSection />
        <Hero />
        <SkillSection />
        <RenderCharacter />
      </div>
    </div>
  );
}

function NameSection() {
  return (
    <section className="nes-container is-dark is-rounded">
      <div className="flex flex-row items-center ">
        <img
          src="/images/me2.jpeg"
          alt="Avatar"
          className="h-70 w-80 object-cover mr-6 rounded-full"
        />
        <div className="flex flex-col">
          <div className="nes-text text-pink-400 text-5xl my-4">Arjav Jain</div>
          <div className="flex">
            <SocialIcons />
          </div>
        </div>
      </div>
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
          {/*<p className="text-xl">*/}
          <li>- Rust</li>
          <li>- Film making and Photography</li>
          <li>- Web Development</li>
          {/*</p>*/}
        </ul>
      </div>
    </section>
  );
}
