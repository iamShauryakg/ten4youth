

function Head1({bgimg, main_text}) {
    return (
         <div className="w-full h-[50vh] bg-center bg-no-repeat bg-cover flex items-center justify-center relative" style={{ backgroundImage: `url(${bgimg})`,}}>
                        <div className="absolute inset-0 bg-black/30"></div>
                        <div className="z-10 text-center items-center">
                            <h1 className="text-white bg-amber-500 pb-4 pt-2 px-8  text-4xl md:text-6xl font-bold">
                                {main_text}
                            </h1>
                        </div>
                    </div>

    )
}

export default Head1;