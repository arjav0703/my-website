"use client";
import React, {useState} from 'react';
import  MyFooter  from '../components/footer';
import CopyHandler from '../components/CopyHandler';

const blogs = [
  'how-to-make-a-pcb',
  'how-to-make-a-website',
  'how-to-make-a-game',
]

const Bloglist = () => (
  blogs.map((blog) => {
    return (
      <div className="flex flex-col items-center">
        <a href={`/${blog}`} className="text-xl sm:text-3xl mb-5">
          {blog}
        </a>
      </div>
    );
  })
);



export default function Home() {
  return (
    <>
      <div className="py-8 flex flex-col items-center min-h-screen  px-8 sm:px-48 sm:py-18" onCopy={CopyHandler}>
      <div>
        <h1 className="text-xl sm:text-3xl mb-5">BLOG</h1>

      </div>

      <Bloglist/>

      </div>
      <div className="flex justify-center mb-0 py-6 ">
        <MyFooter/>
      </div>
    </>
    
  );
}
