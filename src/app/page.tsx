"use client";
import React, {useState} from 'react';
import  MyFooter  from '../components/footer';


const CopyHandler = () => {
  alert("Why are you copying it? If you want to share it, share the link to the page.");
  return(
    <div>
      <h1>Why are you copying it? If you want to share it, share the link to the page.</h1>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <div className="py-8 flex flex-col items-center min-h-screen  px-8 sm:px-48 sm:py-18" onCopy={CopyHandler}>
        
        <div>
          <div className='column'> 
          <h1 className="sm:text-5xl text-3xl bg-gruv-accent w-fit p-2 text-black inline-block">ARJAV JAIN</h1>
          <p className='inline-block text-gray-600 mx-3'>(he/they)</p>
          </div>

          <div className="flex flex-row py-1">
            <p className="underline mx-2">photograper</p> 
            <p className="underline mx-2">ethical hacker</p>
            <p className="underline mx-2">coder</p>

          </div>
          <p className="my-2.5 sm:text-l text-s sm:my-5 sm:pt-5">
          i am a 14 year old from Vidisha. i really dont't have a fav language but i love to try almost everything from 3D modelling to functional programming, linux and tons of other cool stuff.
          </p>
          
          <p className="sm:text-l text-s my-2.5 sm:my-5">i am a<a href='https://hackclub.com' className="mx-1 hover:bg-amber-500 hover:underline">[Hackclubber]</a>and the co-leader at<a href="https://vidisha.hackclub.com" className=" ml-1 hover:bg-amber-500 hover:underline">[hackclub vidisha]</a>.</p>

          <p className="sm:text-l text-s my-2.5 sm:my:5">i started my journey in tech when i was 12 and learnt photo editing in lightroom. later, pirating pc games made me even more enthusiastic. i switched to<a className='mx-1 hover:bg-amber-500 hover:underline'href="https://itsfoss.com/linux-better-than-windows/">[linux]</a>which got me into coding with python from<a className="mx-1 hover:bg-amber-500 hover:underline" href='https://www.harvardonline.harvard.edu/course/cs50s-introduction-programming-python'>[CS50P]</a>. in november 2024, i attended <a className='mx-1 hover:bg-amber-500 hover:underline'href='https://counterspell.hackclub.com'>[counterspell]</a>by hackclub and started my journey at hackclub. i leart many things like react, tailwind, C, designing in figma.</p>
        </div>

      </div>
      <div className="flex justify-center mb-0 py-6 ">
        <MyFooter/>
      </div>
    </>
    
  );
}
