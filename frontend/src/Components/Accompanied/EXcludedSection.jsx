import Feminine from "../../assets/Feminine.avif";
import youg from "../../assets/youg.avif";

const EXcludedSection = () => {
    return (
        <div className="lla-section mt-20 p-4">
            <div className="flex flex-row items-center gap-8 mt-15 justify-center mb-10 text-[17px] leading-[1.6] text-center">
                <h2 className="text-4xl text-gray-600">EXCLUDED WOMEN</h2>
                <img src={Feminine} alt="Feminine" className="w-16 h-16" />
            </div>
            <div className="flex flex-col items-center gap-5 mb-8 mt-10 justify-center mx-auto max-w-[800px] text-center text-[16px] leading-[1.6]">
                <p>Worldwide, <strong>nearly one in three women are not in education, employment or training</strong> (NEET). However, a <a href="https://www.un.org/youthaffairs/en" target="_blank" className="underline ml-1">UN study</a> revealed that when a woman has access to decent work, she invests over 90% of her salary in her children's education and household budget, compared to less than 40% for men.</p>
                <p>Since its inception, LP4Y has focused on supporting young women in building their life projects. To enable young mothers to follow the training, LP4Y has developed LITTLE ANGELS ACADEMIES, daycare centers for children aged 6 months to 4 years.</p>
            </div>
            <div className="w-full h-[80vh] bg-cover bg-no-repeat mb-12 bg-center flex flex-col items-center justify-center relative"
                style={{
                    backgroundImage: `url(${youg})`
                }}
            >
                <div className="absolute inset-0"></div>
                <div className="flex flex-row gap-8">
                    <div className="z-10 text-center">
                        <div className="inline-block bg-orange-500 text-white font-bold w-100 h-60 justify-center items-center text-center px-5 py-5 shadow-md">
                            <div className="p-10">
                                <h1 className="text-6xl">81%</h1>
                                of young people supported<br />
                                by TEN4YOUTH are women
                            </div>
                        </div>
                    </div>

                    <div className="z-10 text-center">
                        <div className="inline-block bg-gray-500 text-white font-bold w-100 h-60 justify-center items-center text-center px-5 py-5 shadow-md">
                            <div className="p-10">
                                <h1 className="text-6xl">14/22</h1>
                                centers exclusively dedicated to<br />
                                supporting young women
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EXcludedSection
