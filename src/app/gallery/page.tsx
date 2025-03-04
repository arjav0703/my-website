import React from 'react';
import  MyFooter  from '../../components/footer';
export default function contact() {
    return (
      <div className="bg-gruv-bg text-gruv-text selection:bg-gruv-selection w-full">
        <div className="flex justify-end py-5 px-18">
          <nav className="flex flex-row gap-5">
            <a href='./' className="hover:underline">about</a>
            <a href='./gallery' className="hover:underline">gallery</a>
            <a href='./contact' className="hover:underline">contact</a>
          </nav>
        </div>
        <div className="py-10 flex flex-col items-center min-h-screen px-8 sm:px-48">

            <div>
                <h1 className="text-xl sm:text-3xl">GALLERY</h1>
            </div>
            <div className='sm:grid sm:grid-cols-4 sm:grid-rows-4 sm:gap-5 sm:w-screen sm:px-10 py-10'>
                <img src='/images/car.webp'></img>
                <img src='/images/ole.webp'></img>
                <img src='/images/apple.webp'></img>
                <img src='/images/oldman.webp'></img>
                <img src='/images/trash.webp'></img>
                <img src='/images/boat2.webp'></img>
                <img src='/images/light.webp'></img>
                <img src='/images/window.webp'></img>
                <img src='/images/tree.webp'></img>
                <img src='/images/IMG.webp'></img>
                <img src='/images/lens.webp'></img>
                <img src='/images/lego.webp'></img>
                <img src='/images/leaf.webp'></img>
            </div>
            
  
        </div>
          <div className="flex justify-center py-6 ">
            <MyFooter/>
          </div>
      </div>
      
    );
  }
  