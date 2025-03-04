import React from 'react';
import  MyFooter  from '../../components/footer';
export default function gallery() {
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
            <section className='sm:grid sm:grid-cols-4 sm:gap-5 sm:w-screen sm:px-10 py-10  '>
                <img src='/images/car.webp' alt='closeup shot of a toy car'className='flex'></img>
                <img src='/images/ole.webp' alt='close up shot of a Jewellery'className='flex'></img>
                <img src='/images/apple.webp' alt='close up shot of an apple'className='flex'></img>
                <img src='/images/oldman.webp' alt='picture of a street vendor selling clothes'className='flex'></img>
                <img src='/images/trash.webp' alt='picture of an abandoned street'className='flex'></img>
                <img src='/images/boat2.webp' alt='picure of a boat during sunset'className='flex'></img>
                <img src='/images/light.webp' alt='shot of a light in darkness'className='flex'></img>
                <img src='/images/window.webp' alt='rays of sun pouring in through a window'className='flex'></img>
                <img src='/images/tree.webp' alt='a blurred image a tree during rain'className='flex'></img>
                <img src='/images/lens.webp' alt='macro shot of a camera lens'className='flex'></img>
                <img src='/images/lego.webp' alt='cinematic image of a lego plane model'className='flex'></img>
                <img src='/images/leaf.webp' alt='close up shot of water droplets on a green leaf'className='flex'></img>
            </section>
            
  
        </div>
          <div className="flex justify-center py-6 ">
            <MyFooter/>
          </div>
      </div>
      
    );
  }
  