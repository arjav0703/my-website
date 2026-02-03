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
        <StuffILike />
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
          <div className="nes-text is-warning text-5xl my-4">Arjav Jain</div>
          <div className="flex">
            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
}

function StuffILike() {
  const interests = [
    { icon: "📚", label: "Book Reading" },
    { icon: "🎮", label: "Gaming" },
  ];

  return (
    <section className="nes-container is-dark is-rounded">
      <h2 className="nes-text is-primary text-2xl mb-4">Stuff I Like</h2>
      <div className="flex flex-wrap">
        {interests.map((interest, index) => (
          <span key={index} className="nes-badge mr-4 mb-2">
            <span className="is-dark">
              {interest.icon} {interest.label}
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
