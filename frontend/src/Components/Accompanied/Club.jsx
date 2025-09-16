import Job_search from "../../assets/Job_search.avif";
import transparent from "../../assets/transparent.avif";
import { Link } from "react-router-dom";


const Club = () => {
    return (
        <div className="relative w-full h-screen mt-12">
            {/* Background YouTube Video */}
            <div className="absolute top-0 left-5 w-[950px] h-[600px] overflow-hidden">
                <iframe
                    src="https://www.youtube.com/embed/gY5ISHDoO8I?autoplay=1&mute=1&loop=1&playlist=gY5ISHDoO8I&controls=0&modestbranding=1&showinfo=0"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    title="TEN4Youth"
                    allow="autoplay; fullscreen;"
                ></iframe>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col p-8 place-items-end">
                <div className="bg-gray-200 bg-opacity-90 w-full max-w-[700px] mt-5 h-[500px] mb-8 rounded-xl shadow-lg p-6">
                    <div className="flex flex-row gap-8">
                        <div className="flex flex-col">
                            <div className="flex flex-row items-center pl-10 max-w-[400px] gap-4 mt-10 justify-center text-[17px] leading-[1.6] text-center">
                                <h2 className="text-2xl text-gray-700">AFTER TEN4YOUTH...</h2>
                                <img src={Job_search} alt="job_search" className="w-20 h-20" />
                            </div>
                            <div className="flex flex-col pl-10 gap-8 max-w-[420px] text-gray-800">
                                <p>
                                    After completing a TEN4YOUTH program,{" "}
                                    <strong>72% of young people find a first decent job</strong> in commerce,
                                    administration, data entry, call centers, hospitality, food and beauty industries,
                                    and many other fields.
                                </p>
                                <p>
                                    They can also join the <strong>STAR Club,</strong> an alumni network managed locally
                                    by its members. This network allows them to stay in touch and continue to participate
                                    in the life of the center through events, mobilization sessions, or inspiring
                                    testimonies.
                                </p>

                                <Link to="/">
                                    <div className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-8 text-lg rounded-full mb-8 transition duration-300">
                                        DISCOVER THEIR STORIES
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <img src={transparent} alt="club_transparent" className="max-h-[400px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Club
