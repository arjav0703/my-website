import Image from "next/image";

export default function Home() {
  return (
    <div>
    <div className="py-20 flex flex-col items-center bg-amber-50 h-screen px-18">
      
      <div>
        <h1 className="text-5xl">ARJAV JAIN</h1>

        <div className="flex flex-row py-1">
          <p className="underline mx-2">photograper</p> 
          <p className="underline mx-2">ethical hacker</p>

        </div>
          <p className="py-5 text-xl ">
          i am a 14 year old from Vidisha. i really dont't have a fav language but i love to try almost everything from 3D modelling to functional programming, linux and tons of other cool stuff.
          </p>
        
        <p>i am a<a href='https://hackclub.com' className=" px-1 hover:bg-amber-500 hover:underline">[Hackclubber]</a>and the co-leader at<a href="https://vidisha.hackclub.com" className=" px-1 hover:bg-amber-500 hover:underline">[hackclub vidisha]</a>.</p>
        

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
