export default function Home() {
  return (
    <div>
    <div className="py-20 flex flex-col items-center bg-amber-50 h-screen px-18">
      
      <div>
        <h1 className="text-5xl">ARJAV JAIN</h1>

        <div className="flex flex-row py-1">
          <p className="underline mx-2">photograper</p> 
          <p className="underline mx-2">ethical hacker</p>
          <p className="underline mx-2">programmer</p>

        </div>
          <p className="py-5 text-xl">
          i am a 14 year old from Vidisha. i really dont't have a fav language but i love to try almost everything from 3D modelling to functional programming, linux and tons of other cool stuff.
          </p>
        
        <p className="text-xl">i am a<a href='https://hackclub.com' className=" mx-1 hover:bg-amber-500 hover:underline">[Hackclubber]</a>and the co-leader at<a href="https://vidisha.hackclub.com" className=" ml-1 hover:bg-amber-500 hover:underline">[hackclub vidisha]</a>.</p>

        <p className="text-xl py-5">i started my journey in tech when i was 12 and learnt photo editing in lightroom. later, pirating pc games made me even more enthusiastic. i ditched windows and switched to<a className='mx-1 hover:bg-amber-500 hover:underline'href="https://itsfoss.com/linux-better-than-windows/">[linux]</a>which got me into programming with python with the help of<a className="mx-1 hover:bg-amber-500 hover:underline" href='https://www.harvardonline.harvard.edu/course/cs50s-introduction-programming-python'>[CS50P]</a>. in november 2024, i attended <a className='mx-1 hover:bg-amber-500 hover:underline'href='https://counterspell.hackclub.com'>[counterspell]</a>by hackclub and started my journey with hackclub. at hackclub, i leart many things like react, tailwind, C, designing in figma.</p>
      </div>

    </div>
        <div className="flex justify-center bg-amber-50 py-6 ">
        <footer>Made with love by<a href="https://github.com/arjav0703" 
            className=" px-1 hover:bg-amber-500 hover:underline ">
            Arjav</a>
        </footer>
        </div>
    </div>
    
  );
}
