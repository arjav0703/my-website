"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import CopyHandler from "./components/CopyHandler";
import SocialIcons from "./components/SocialIcons";
import Hero from "./components/Hero";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrambleTextPlugin);

    const nameElement = document.getElementsByClassName(
      "nameScramble",
    ) as HTMLCollectionOf<HTMLElement>;

    // const message = "Arjav Jain";
    const scrambleChars = "upperAndLowerCase";

    if (nameElement) {
      gsap.from(nameElement, {
        duration: 2,
        scrambleText: {
          text: "radiosilence21",
          chars: scrambleChars,
          revealDelay: 0.5,
          speed: 1,
        },
        ease: "power2.inOut",
      });
    }

    return () => { };
  }, []);

  return (
    <div className="bg-[#212529] min-h-screen flex flex-col">
      <div
        className="pt-8 max-w-7xl mx-auto grow px-8 py-4 flex flex-col gap-10"
        onCopy={CopyHandler}
      >
        <NameSection />
        <Hero />
        <SkillSection />
      </div>
    </div>
  );
}

function NameSection() {
  return (
    <section className="nes-container is-dark is-rounded">
      <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-8">
        <img
          src="/images/me3.jpeg"
          alt="Avatar"
          className="h-70 w-70 object-cover rounded-full shrink-0"
        />
        <div className="flex flex-col">
          <div className="nes-text text-pink-400 text-5xl my-4">
            <span className="nameScramble">Arjav Jain</span>
          </div>
          <div className="flex justify-center md:justify-start">
            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillSection() {
  return (
    <section className="nes-container is-rounded is-dark ">
      <div className="text-2xl flex is-success nes-text flex-row gap-5 my-3">
        Skills
      </div>
      <div className="lists is-success my-3">
        <ul className="nes-list is-circle">
          {/*<p className="text-xl">*/}
          <li>- Backend Development (Rust)</li>
          <li>- Film making and Photography</li>
          <li>- Web Development</li>
          {/*</p>*/}
        </ul>
      </div>
    </section>
  );
}
