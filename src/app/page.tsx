"use client";
import React, { useState } from "react";
import CopyHandler from "./components/CopyHandler";
import "nes.css/css/nes.min.css";
import SocialIcons from "./components/SocialIcons";

export default function Home() {
  return (
    <>
      <div className="bg-[#212529]">
        <div
          className="pt-20 max-w-6xl mx-auto  h-screen px-8 py-4"
          onCopy={CopyHandler}
        >
          <section className="nes-container is-dark is-rounded">
            <div className="nes-text is-primary text-6xl my-4">Arjav Jain</div>
            <div className="flex ">
              <SocialIcons />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
