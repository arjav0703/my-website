import React from "react";
import { DiscordSection, EmailSection } from "./util";

function Contact() {
  return (
    <div className="bg-[#212529] min-h-screen">
      <div className="pt-10 pb-20 flex flex-col items-center px-8 max-w-7xl mx-auto">
        <section className="nes-container is-dark is-rounded w-full mb-8">
          <h1 className="nes-text is-warning text-2xl sm:text-4xl mb-4">
            CONTACT ME
          </h1>
          <p className="text-gray-300">
            Want to get in touch? Here&apos;s how you can reach me!
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <EmailSection />

          <DiscordSection />

          <Meeee />
        </div>
      </div>
    </div>
  );
}

function Meeee() {
  return (
    <section className="nes-container is-dark is-rounded w-full mt-8">
      <div className="flex items-center gap-2 mb-4">
        <i className="nes-icon trophy is-small"></i>
        <span className="nes-text is-warning">That&apos;s me!</span>
      </div>
      <img
        src="/images/me_hdr.webp"
        alt="Arjav"
        className="w-full rounded-lg pixelated"
      />
    </section>
  );
}

export default Contact;
