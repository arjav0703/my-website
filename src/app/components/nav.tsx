import Link from "next/link";

export default function MyNav() {
  return (
    <div className="flex justify-center items-center bg-[#212529]">
      <nav className="flex justify-center items-center px-8 py-4">
        <NavBtn textdata="about ✨" type="primary" linkto="./" />
        <NavBtn textdata="gallery 🎨" type="warning" linkto="./gallery" />
        <NavBtn
          textdata="knowledgebase 📚"
          type="success"
          linkto="./knowledgebase"
        />
        <NavBtn textdata="contact 💌" type="error" linkto="./contact" />
      </nav>
    </div>
  );
}

function NavBtn({
  textdata,
  type,
  linkto,
}: {
  textdata: string;
  type: string;
  linkto: string;
}) {
  return (
    <Link href={linkto} className="mx-1.5">
      <button type="button" className={`nes-btn is-${type}`}>
        {textdata}
      </button>
    </Link>
  );
}
