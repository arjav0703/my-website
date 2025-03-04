import React from 'react';
import  MyFooter  from '../../components/footer';
export default function contact() {
    return (
      <div className="bg-gruv-bg text-gruv-text selection:bg-gruv-selection">
        <div className="flex justify-end py-5 px-18">
          <nav className="flex flex-row gap-5">
            <a href='./' className="hover:underline">about</a>
            <a href='./gallery' className="hover:underline">gallery</a>
            <a href='./contact' className="hover:underline">contact</a>
          </nav>
        </div>
        <div className="py-10 flex flex-col items-center h-screen px-8 sm:px-48">

            <div>
                <h1 className="text-xl sm:text-3xl">CONTACT ME</h1>
            </div>
            <div className="py-5">
                <p className="text-l sm:text-xl">You can email me at</p>
                <p className="text-l sm:text-xl"> <a href="mailto:arjavjain0703@gmail.com" className="hover:underline hover:bg-amber-100">arjavjain0703@gmail.com</a> or <a href="mailto:arjav@hackclub.app" className="hover:underline hover:bg-amber-100">arjav@hackclub.app</a></p>
            </div>
  
        </div>
        <div className="flex justify-center py-6 ">
          <MyFooter/>
        </div>
      </div>
      
    );
  }
  