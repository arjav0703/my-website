import React from "react";
import "nes.css/css/nes.min.css";

function Experience() {
  return (
    <div className="bg-[#212529] min-h-screen">
      <div className="pt-10 pb-20 flex flex-col items-center px-8 max-w-7xl mx-auto">
        <section className="nes-container is-dark is-rounded mb-10">
          <h1 className="nes-text is-warning text-4xl sm:text-6xl text-center">
            <i className="nes-octocat animate" /> Experience{" "}
            <i className="nes-icon star is-medium" />
          </h1>
          <p className="text-center text-gray-400 mt-4">
            My journey and achievements in tech, leadership, and creativity.
          </p>
        </section>

        <section className="nes-container is-dark is-rounded w-full mb-8">
          <div className="lists is-success my-3">
            <h1 className="text-2xl flex is-success nes-text flex-row gap-5 my-3">
              Hackathons Attended
            </h1>
            <ul className="nes-list is-circle">
              {Hackathons.map((hackathon, index) => (
                <li key={index}>{"- " + hackathon}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="nes-container is-dark is-rounded w-full mb-8">
          <div className="lists is-success my-3">
            <h1 className="text-2xl flex is-warning nes-text flex-row gap-5 my-3">
              Volunteer Experience
            </h1>
            Community Volunteer at{" "}
            <a href="https://hackclub.com" target="_blank">
              Hackclub
            </a>
            . Organized and participated in multiple events and workshops. Lead
            organizer of the{" "}
            <a href="https://reactive.hackclub.com" target="_blank">
              Reactive YSWS
            </a>
            . Mentor and Leader at{" "}
            <a href="https://vidisha.hackclub.com" target="_blank">
              Hackclub Vidisha
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Experience;

const Hackathons = [
  "Counterspell Vidisha - Nov 2024",
  "Shipwrecked - Aug 2025, Boston, MA, USA",
  "Build Guild Bhopal - Apr 2026",
];
