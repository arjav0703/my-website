export default function MyFooter() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#212529]">
      <footer className="max-w-7xl mx-auto px-8 py-6">
        <section className="nes-container is-dark is-rounded">
          <BiBar />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 flex items-center gap-1">
              Made with <i className="nes-icon is-small heart" /> and pixels
            </p>
            <p className="text-xs text-gray-400">
              &copy; {year} All rights reserved.
            </p>
          </div>
        </section>
      </footer>
    </div>
  );
}

function BiBar() {
  return (
    <div className="flex h-2 mb-4 rounded overflow-hidden">
      <div className="flex-1 bg-[#D60270]"></div>
      <div className="flex-1 bg-[#9B4F96]"></div>
      <div className="flex-1 bg-[#0038A8]"></div>
    </div>
  );
}
