import React from 'react';
export default function contact() {
  return (
    <div >
      <div className="py-10 flex flex-col items-center min-h-screen px-8 sm:px-48">

        <div>
          <h1 className="text-xl sm:text-3xl">CONTACT ME</h1>
        </div>
        <div className="py-5">
          <p className="text-l sm:text-xl">You can email me at</p>
          <p className="text-l sm:text-xl"> <a href="mailto:arjavjain0703@gmail.com" className="hover:underline hover:bg-amber-100">arjavjain0703@gmail.com</a> or <a href="mailto:arjav@hackclub.app" className="hover:underline hover:bg-amber-100">arjav@hackclub.app</a></p>

          <p className="text-l sm:text-xl py-5 lg:py:2">You can also find me on Discord <a href='https://discordapp.com/users/1265239979143987273' className='hover:underline bg-gruv-blue text-white px-1'>@madmax000108</a></p>
        </div>
        <img src="/images/me_hdr.webp" alt="shipwrecked" className="w-full mx-auto mt-10 rounded-lg shadow-lg border-4 border-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 p-1" />


      </div>
    </div>

  );
}

