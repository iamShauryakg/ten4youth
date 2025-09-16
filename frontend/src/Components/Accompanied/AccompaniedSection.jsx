import quali from "../../assets/quali.avif";
import emp from "../../assets/emp.png";
import clubb from "../../assets/clubb.avif";
import slums from "../../assets/slums.avif";
import recrui from "../../assets/recrui.avif";
import Talented from "../../assets/Talented.avif";

const AccompaniedSection = () => {
    return (
        <div className="w-full mb-20">
            <div
                className="w-full h-[80vh] bg-cover bg-no-repeat mb-12 bg-center flex flex-col items-center justify-center relative"
                style={{
                    backgroundImage: `url(${quali})`
                }}
            >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="z-10 text-center">
                    <h1 className="inline-block bg-orange-500 text-white font-bold text-3xl px-25 py-5 shadow-md">
                        SUPPORTED YOUTH
                    </h1>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center mx-auto max-w-[900px] mb-16 text-[17px] leading-[1.6] text-center">
                <h2 className="text-4xl text-gray-500">WHO ARE THE YOUTHS?</h2>
                <img src={emp} alt="emp" className="w-16 h-16" />
            </div>
            <div className="flex min-h-[300px] flex-row gap-4 items-stretch mx-auto max-w-[900px] mb-16 text-[14px] leading-[1.6] text-center">

                <div className="flex-1 min-h-[320px] bg-orange-600 text-white flex p-2">
                    <p className="mt-6">
                        Nearly <strong>2,000 Youths between 18 and 24 years old</strong> supported per year:
                        18 years old is the minimum age to access decent employment
                    </p>
                </div>


                <div className="flex-1 flex min-h-[320px] items-center justify-center">
                    <img src={clubb} alt="start_club" className="h-full object-cover" />
                </div>


                <div className="flex-1 min-h-[320px] bg-gray-600 text-white flex p-2">
                    <p className="mt-6">
                        Living in <strong>slums or in excluded rural areas,</strong> in extreme poverty not in school,
                        involved in informal work, with physical or mental disabilities, orphans, young mothers,
                        incarcerated, migrants, etc
                    </p>
                </div>


                <div className="flex-1 flex min-h-[320px] items-center justify-center">
                    <img src={slums} alt="slums" className="h-full object-cover" />
                </div>


                <div className="flex-1 min-h-[320px] bg-orange-600 text-white flex p-2">
                    <p className="mt-6">
                        <strong>Without qualification</strong> (not a prerequisite for joining TEN4YOUTH) and highly motivated
                        to learn, find a decent job and financially support their families
                    </p>
                </div>
            </div>

            <div className="flex flex-row items-center gap-8 justify-center mx-auto max-w-[900px] mb-6 text-[16px] leading-[1.6] text-center">
                <h2 className="text-4xl text-gray-600">YOUTHS RECRUITMENT</h2>
                <img src={recrui} alt="recruitment" className="w-16 h-16" />
            </div>
            <div className="flex flex-col items-center gap-5 justify-center mx-auto max-w-[900px] mb-12 text-[17px] leading-[1.6] text-center">
                <p><strong>The young people currently in training are fully involved in the recruitment process</strong> and organize mobilization sessions: door-to-door in the most vulnerable and marginalized communities, word of mouth, events, communication on social media, etc.</p>
                <p>LP4Y also benefits from the <strong>support of a strong network of local NGOs</strong> with complementary expertise which regularly refer young people to LP4Y training centers.</p>
            </div>

            <div className="mx-auto max-w-[900px] w-full mb-12 h-[80vh] items-center justify-center">
                <div className="flex justify-center items-center">
                    <iframe src="https://video.wixstatic.com/video/69220e_f311fa66e0d4432bb6ceb2db75ef953c/1080p/mp4/file.mp4" className="h-[345px] w-[600px] border-none max-w-[100%]" title="2024 - TEN4Youth" allowFullScreen ></iframe>
                </div>
            </div>
            <div className="flex flex-col items-center gap-5 justify-center mx-auto max-w-[900px] mb-20">
                <div className="flex flex-row items-center gap-4 justify-center mb-6 text-[17px] leading-[1.6] text-center">
                    <h2 className="text-4xl text-gray-600">UNLEASHING POTENTIALS</h2>
                    <img src={Talented} alt="talented" className="w-16 h-16" />
                </div>
                <div className="flex flex-row items-center justify-center gap-12">
                    <div className="flex flex-col gap-5 items-center justify-center w-full max-auto max-w-[450px]">
                        <p>Young people living in conditions of extreme poverty and victims of exclusion are <strong>experts in resilience,</strong> often at the front lines of natural disasters and political crises.</p>
                        <p>However, working in a decent work environment requires skills and knowledge to which they rarely have access.</p>
                        <p><strong>TEN4YOUTH's training programs help them develop these transversal skills:</strong> IT, English, self-confidence, communication, project management, critical thinking, adaptability, teamwork, etc.</p>
                    </div>
                    <div className="items-center justify-center max-auto max-w-[450px]">
                        <div className="flex justify-center items-center">
                            <iframe src="https://video.wixstatic.com/video/69220e_10f4d12976f64753853989afd9f10bde/1080p/mp4/file.mp4" className="h-[235px] w-[600px] border-none max-w-[100%]" title="2024 -TEN4Youth" allowFullScreen ></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default AccompaniedSection
