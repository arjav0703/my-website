export default function MyNav() {
    return(
        <div className="flex justify-end py-5 px-18 ">
            <nav className="flex flex-row gap-5">
            <a href='./' className="hover:underline">about</a>
            <a href='./gallery' className="hover:underline">gallery</a>
            <a href='https://knowledgebase.arjav.dino.icu' className="hover:underline">knowledgebase</a>
            <a href='./contact' className="hover:underline">contact</a>
            </nav>
        </div>
    )
}