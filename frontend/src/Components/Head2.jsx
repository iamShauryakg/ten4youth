

function Head2({ bgimg, main_text }) {
    return (
        <div
            className="w-full h-[80vh] bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center relative"
            style={{
            backgroundImage: `url(${bgimg})`,
            }}
        >
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="z-10 text-center">
                <h1 className="inline-block bg-orange-400 text-white font-semibold text-4xl px-8 py-2 shadow-md">
                    {main_text}
                </h1>
            </div>
        </div>
    )
}

export default Head2;