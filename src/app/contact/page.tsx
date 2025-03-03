export default function contact() {
    return (
      <div className="bg-amber-50">
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
  