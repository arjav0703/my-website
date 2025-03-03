export default function Home() {
  return (
    <div className="bg-amber-50">
      <div className="flex justify-end py-5 px-18">
        <nav className="flex flex-row gap-5">
          <a href='./' className="hover:underline">about</a>
          <a href='./gallery' className="hover:underline">gallery</a>
          <a href='./contact' className="hover:underline">contact</a>
        </nav>
      </div>
      <div className="py-8 flex flex-col items-center h-screen px-8 sm:px-48 sm:py-18">
        
        <div>
          <h1 className="sm:text-5xl text-3xl">ARJAV JAIN</h1>

          <div className="flex flex-row py-1">
            <p className="underline mx-2">photograper</p> 
            <p className="underline mx-2">ethical hacker</p>
            <p className="underline mx-2">coder</p>

          </div>
          <p className="my-2.5 sm:text-xl text-s sm:my-5 sm:pt-5">
          i am a 14 year old from Vidisha. i really dont't have a fav language but i love to try almost everything from 3D modelling to functional programming, linux and tons of other cool stuff.
          </p>
          
          <p className="sm:text-xl text-s my-2.5 sm:my-5">i am a<a href='https://hackclub.com' className="mx-1 hover:bg-amber-500 hover:underline">[Hackclubber]</a>and the co-leader at<a href="https://vidisha.hackclub.com" className=" ml-1 hover:bg-amber-500 hover:underline">[hackclub vidisha]</a>.</p>

          <p className="sm:text-xl text-s my-2.5 sm:my:5">i started my journey in tech when i was 12 and learnt photo editing in lightroom. later, pirating pc games made me even more enthusiastic. i switched to<a className='mx-1 hover:bg-amber-500 hover:underline'href="https://itsfoss.com/linux-better-than-windows/">[linux]</a>which got me into coding with python from<a className="mx-1 hover:bg-amber-500 hover:underline" href='https://www.harvardonline.harvard.edu/course/cs50s-introduction-programming-python'>[CS50P]</a>. in november 2024, i attended <a className='mx-1 hover:bg-amber-500 hover:underline'href='https://counterspell.hackclub.com'>[counterspell]</a>by hackclub and started my journey at hackclub. i leart many things like react, tailwind, C, designing in figma.</p>
        </div>

      </div>
      <div className="flex justify-center bg-amber-50 py-6 ">
        <footer className="text-xs">Made with love by<a href="https://github.com/arjav0703" 
            className=" px-1 hover:bg-amber-500 hover:underline ">
            Arjav</a>. Arch btw
        </footer>
      </div>
    </div>
    
  );
}
