import Image from "next/image";

export default function Home() {
  return (
    <div className="py-20 flex flex-col items-center bg-amber-50 h-screen px-18">
      
      <div>
        <h1 className="text-6xl">ARJAV JAIN</h1>
        <p className="py-10 text-xl ">
        I am a 14 year old from Vidisha. I really dont't have a fav language and love to try almost everything from 3D modelling to functional programming and linux.
        </p>
        <p>another para <a href="https://vidisha.hackclub.com" className=" px-1 hover:bg-amber-500 hover:underline">Hackclub Vidisha</a> </p>
      </div>
    </div>
  );
}
