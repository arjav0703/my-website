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
                <h1 className="text-xl sm:text-3xl">GALLERY</h1>
            </div>
            
  
        </div>
        <div className="flex justify-cente py-6 ">
          <MyFooter/>
        </div>
      </div>
      
    );
  }
  