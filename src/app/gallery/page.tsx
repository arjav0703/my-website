import React from 'react';
export default function gallery() {
    return (
      <>
        
        <div className="py-10 flex flex-col items-center min-h-screen px-8 sm:px-48">

            <div>
                <h1 className="text-xl sm:text-3xl mb-5">GALLERY</h1>
            </div>
            <section className='flex-col columns-2 md:columns-3 lg:columns-4 gap-5'>
                <img src='/images/car.webp' alt='closeup shot of a toy car'className='my-5 w-[100%]'></img>
                <img src='/images/ole.webp' alt='close up shot of a Jewellery'className='my-5 w-[100%]'></img>
                <img src='/images/apple.webp' alt='close up shot of an apple'className='my-5 w-[100%]'></img>
                <img src='/images/oldman.webp' alt='picture of a street vendor selling clothes'className='my-5 w-[100%]'></img>
                <img src='/images/trash.webp' alt='picture of an abandoned street'className='my-5 w-[100%]'></img>
                <img src='/images/boat2.webp' alt='picure of a boat during sunset'className='my-5 w-[100%]'></img>
                <img src='/images/light.webp' alt='shot of a light in darkness'className='my-5 w-[100%]'></img>
                <img src='/images/window.webp' alt='rays of sun pouring in through a window'className='my-5 w-[100%]'></img>
                <img src='/images/tree.webp' alt='a blurred image a tree during rain'className='my-5 w-[100%]'></img>
                <img src='/images/lens.webp' alt='macro shot of a camera lens'className='my-5 w-[100%]'></img>
                <img src='/images/lego.webp' alt='cinematic image of a lego plane model'className='my-5 w-[100%]'></img>
                <img src='/images/leaf.webp' alt='close up shot of water droplets on a green leaf'className='my-5 w-[100%]'></img>
            </section>
            
  
        </div>
      </>
      
    );
  }
  