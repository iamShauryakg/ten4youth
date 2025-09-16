import Liban_bg from '../../../assets/libium_bg.avif'

function Head() {
    return (
        <div className="w-full h-[100vh]  bg-fixed bg-center bg-no-repeat bg-cover flex items-center justify-center relative"
            style={{ backgroundImage: `url(${Liban_bg})`, }}>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="z-10 text-center items-center">
                <h1 className="text-white bg-amber-500 pb-4 pt-2 px-8  text-4xl md:text-6xl font-bold">
                    Ten4Youth Liban
                </h1>
            </div>
        </div>

    )
}

export default Head;