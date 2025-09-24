import React from "react";
export default function MyFooter() {
  return (
    <>
      <div className="flex my-5 w-[100%] justify-center py-8 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 border-t-4 border-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300">
        <footer className="text-sm bg-gradient-to-r from-pink-50 to-purple-50 px-6 py-3 rounded-full shadow-lg border-2 border-transparent bg-gradient-to-r from-pink-200 to-purple-200">
          <span className="colorful-text-gradient font-semibold">UwU Made with love by</span>
          <a href="https://github.com/arjav0703"
          className="px-2 py-1 mx-1 colorful-hover-rainbow rounded-md font-bold transition-all duration-300">
          Arjav ✨</a>
          <span className="colorful-text-gradient font-semibold">:3 🌈💖</span>
        </footer>
      </div>
    </>
  )
}
