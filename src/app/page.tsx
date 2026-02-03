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
        <RenderCharacter />
      </div>
    </div>
  );
}

function NameSection() {
  return (
    <section className="nes-container is-dark is-rounded">
      <div className="nes-text is-warning text-5xl my-4">Arjav Jain</div>
      <div className="flex">
        <SocialIcons />
      </div>
    </section>
  );
}
