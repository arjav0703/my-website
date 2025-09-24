"use client";
import React, { useState } from "react";

const CopyHandler = () => {
  alert(
    "Why are you copying it? If you want to share it, share the link to the page.",
  );
  return (
    <div>
      <h1>
        Why are you copying it? If you want to share it, share the link to the
        page.
      </h1>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <div
        className="py-8 flex flex-col items-center min-h-screen colorful-bg px-8 sm:px-48 sm:py-18"
        onCopy={CopyHandler}
      >
        <div>
          <div>
            <div className="flex">
              <img
                src="/images/me.png"
                alt="Arjav Jain"
                className="rounded-full w-40 h-40 sm:w-60 sm:h-60 colorful-border-gradient colorful-sparkle"
              />

              <div className="my-auto ml-10">
                <div className="column">
                  <h1 className="sm:text-5xl text-3xl colorful-gradient w-fit px-2 py-1 text-white inline-block rounded-lg shadow-lg">
                    ARJAV JAIN ✨
                  </h1>
                  <p className="inline-block text-purple-600 mx-3 font-bold">(he/they)</p>

                  <div className="flex flex-row py-1 mt-4 flex-wrap">
                    <span className="colorful-role-tags">photographer 📸</span>
                    <span className="colorful-role-tags">artist 🎨</span>
                    <span className="colorful-role-tags">programmer 💻</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="my-2.5 sm:text-l text-s sm:my-5 sm:pt-5 text-gray-800 bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-lg shadow-md">
            Hey there! I'm Arjav, a 15-year-old from India with a passion for technology and creativity. Welcome to my personal website where I share my journey and projects. 🚀✨
          </p>

          <p className="sm:text-l text-s my-2.5 sm:my-5 text-gray-800">
            i am a
            <a
              href="https://hackclub.com"
              className="mx-1 colorful-hover-rainbow px-2 py-1 rounded-md font-semibold"
            >
              [Hackclubber] 🦕
            </a>
            and the co-leader at
            <a
              href="https://vidisha.hackclub.com"
              className="ml-1 colorful-hover-rainbow px-2 py-1 rounded-md font-semibold"
            >
              [hackclub vidisha] 🌟
            </a>
            .
          </p>

          <p className="sm:text-l text-s my-2.5 sm:my:5 text-gray-800 bg-gradient-to-r from-blue-100 to-green-100 p-4 rounded-lg shadow-md">
            ever since childhood, i was a really curious and artistic person.
            i started my journey in tech when i was 12 and got into photo editing 📷
            . video games made me fall in love with computers 🎮
            . i started using
            <a
              className="mx-1 colorful-hover-rainbow px-2 py-1 rounded-md font-semibold"
              href="https://itsfoss.com/linux-better-than-windows/"
            >
              [linux] 🐧
            </a>
            - which eventually got me into coding. I did courses like
            <a
              className="mx-1 colorful-hover-rainbow px-2 py-1 rounded-md font-semibold"
              href="https://www.harvardonline.harvard.edu/course/cs50s-introduction-programming-python"
            >
              [CS50P] 🎓
            </a>
            .
            <br /><br /> in november 2024, i attended my first hackathon - {" "}
            <a
              className="mx-1 colorful-hover-rainbow px-2 py-1 rounded-md font-semibold"
              href="https://counterspell.hackclub.com"
            >
              [counterspell] ⚡
            </a>
            . and guess what? my team ranked 2nd!! 🥈✨
            I am learning Rust at the moment. Recently, I attended a 4 day international hackathon called
            <a
              className="mx-1 colorful-hover-rainbow px-2 py-1 rounded-md font-semibold"
              href="https://shipwrecked.hackclub.com"
            >
              [shipwrecked] 🚢
            </a>

            <img src="/images/shipwrecked.jpg" alt="shipwrecked" className="w-full mx-auto mt-10 rounded-lg shadow-lg border-4 border-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 p-1" />
          </p>
        </div>
      </div >
    </>
  );
}
