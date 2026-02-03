"use client";
import React, { useState } from "react";
import CopyHandler from "./components/CopyHandler";
// script.js
import "nes.css/css/nes.min.css";

export default function Home() {
  return (
    <>
      <div className="flex text-6xl" onCopy={CopyHandler}>
        Hey there!
      </div>
    </>
  );
}
