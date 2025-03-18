"use client";
import CopyHandler from '../components/CopyHandler';
import { useEffect } from 'react';

const blogs = [
  'how-to-make-a-pcb',
  'how-to-make-a-website',
  'how-to-make-a-game',
]

const Bloglist = () => (
  <ol className="list-decimal list-inside">
    {blogs.map((blog) => {
      return (
        <li key={blog}>
         
            <a href={`/blog/${blog}`} id='bloglist'>
              {blog}
            </a>
          
        </li>
      );
    })}
  </ol>
);



export default function Blogpage() {
  useEffect(() => {
    alert("This page is under construction");
  }, []);

  return (
    <>
      <div className="py-8 flex flex-col min-h-screen px-8 sm:px-48 sm:py-18" onCopy={CopyHandler}>
        <div>
          <h1 className="text-xl sm:text-3xl mb-5">BLOGS</h1>
        </div>

        <Bloglist />
      </div>
    </>
  );
}
