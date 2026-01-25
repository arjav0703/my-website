"use client";
import React, { useState } from "react";
import CopyHandler from "./components/CopyHandler";

export default function Home() {
  return (
    <>
      <div className="flex" onCopy={CopyHandler}>
        Hey there!
      </div>

    </>
  );
}
