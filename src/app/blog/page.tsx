"use client";
import CopyHandler from '../components/CopyHandler';

const blogs = [
  'how-to-make-a-pcb',
  'how-to-make-a-website',
  'how-to-make-a-game',
]

const Bloglist = () => (
  blogs.map((blog) => {
    return (
      <div key={Math.random()*10}>
        <ol>
            <li>
              <p>
              <a href={`/blog/${blog}`} >
                {blog}
              </a>
              </p>
            </li>
        </ol>
      </div>
    );
  })
);



export default function Blogpage() {
  return (
    <>
      <div className="py-8 flex flex-col min-h-screen  px-8 sm:px-48 sm:py-18" onCopy={CopyHandler}>
        <div>
          <h1 className="text-xl sm:text-3xl mb-5">BLOG</h1>
        </div>

        <Bloglist/>
      </div>  
      
    </>
    
  );
}
