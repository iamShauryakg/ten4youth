


const VideoSection = () => {
    return (
        <div className="bg-[#f4f4f4] py-[60px] px-[20px] text-center">
            <p className="max-w-[800px] mx-auto mb-[20px] text-[18px] text-[#333] ">
                Over 10 years of field experiendce have shown that developing these three missions simultaneously creates a powerful, lasting impact 
                on the inclusion of excluded Youth
            </p>

            <button className="bg-[#f89d13] hover:bg-[#f8c313] text-[16px]/[28px] hover:text-[17px] text-[#fff] font-bold border-none mb-[40px] w-[250px]  py-22px px-3px rounded-[20px] hover:rounded-[5px] cursor-pointer transition-all duration-399 ease ">
                DISCOVER LP4Y ALLIANCE
            </button>
            <div className="flex justify-center items-center">
                <iframe src="https://www.youtube.com/embed/2a7OU-W-ePo" className="h-[400px] w-[600px] border-none max-w-[100%]"  title="2024 - LP4Y" allow="accelerometer; autoplay; clipboard-write;" allowFullScreen ></iframe>
            </div>
        </div>
    )
}

export default VideoSection;