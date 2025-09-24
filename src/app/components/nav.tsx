export default function MyNav() {
    return(
        <div className="flex justify-end py-5 px-18 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
            <nav className="flex flex-row gap-5">
            <a href='./' className="colorful-hover-rainbow px-3 py-2 rounded-full font-semibold transition-all duration-300 shadow-md bg-gradient-to-r from-pink-200 to-purple-200">about ✨</a>
            <a href='./gallery' className="colorful-hover-rainbow px-3 py-2 rounded-full font-semibold transition-all duration-300 shadow-md bg-gradient-to-r from-purple-200 to-blue-200">gallery 🎨</a>
            <a href='https://knowledgebase.arjav.dino.icu' className="colorful-hover-rainbow px-3 py-2 rounded-full font-semibold transition-all duration-300 shadow-md bg-gradient-to-r from-blue-200 to-green-200">knowledgebase 📚</a>
            <a href='./contact' className="colorful-hover-rainbow px-3 py-2 rounded-full font-semibold transition-all duration-300 shadow-md bg-gradient-to-r from-green-200 to-yellow-200">contact 💌</a>
            </nav>
        </div>
    )
}