

function Head3({bgimg, main_text}) {
    return (
        <section
                className="relative h-[80vh] bg-center bg-cover bg-fixed flex items-center justify-center"
                style={{ backgroundImage: `url(${bgimg})` }}
              >
                <div className="bg-orange-400 px-6 py-4 md:px-10 md:py-6 rounded shadow-lg">
                  <h1 className="text-2xl md:text-4xl text-white text-center font-bold m-2">
                    {main_text}
                  </h1>
                </div>
        </section>
    )
}

export default Head3;