"use client";
import React, { useEffect, useState } from "react";

import CopyHandler from "@/app/components/CopyHandler";
import exp from "constants";

const Post = () => {
  const [url, setUrl] = useState<string[]>([]);
  const [blogtitle, setBlogtitle] = useState<string>("");
  
  useEffect(() => {
    const selfurl = window.location.href;
    console.log('the url of this page is ', selfurl);
    const urlarray = selfurl.split('/')
    console.log('the url array is ', urlarray);
    const title = urlarray[urlarray.length - 1]
    console.log('the blog title is ', title);
    setBlogtitle(title);
  }, []);
  
  return (
    <>
      <div className="py-8 flex flex-col min-h-screen px-8 sm:px-48 sm:py-18" onCopy={CopyHandler}>
        <h1 className="text-xl sm:text-3xl mb-5">{blogtitle.toUpperCase()}</h1>
        <p>hi mate</p>
      </div>
    </>
  );
}

export default Post;
