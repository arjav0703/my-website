import React from "react";
export default function MyFooter() {
  return (
    <>
      <div>
        <footer className="w-full text-center py-4 border-t border-gruv-border mt-8">
          <p className="text-sm text-gruv-text/70">
            &copy; {new Date().getFullYear()} Arjav Jain. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  )
}
