

function Card_Part() {
    return (
        <div>
            {/* card section */}
        <section className= "text-center p-5">

            <div className="flex flex-col">
            <p className = "max-w-[990px] mt-0 mx-auto mb-[5px] text-[13px]" >
            Life Project 4 Youth Alliance is a federation of 17 organizations in 14 countries whose aim is the development of innovative solutions for the <strong> Comprehensive inclusion </strong>(professional and social) <strong> of young adults </strong> (18-24 years old) 
            <strong> living in extreme poverty and suffering from exclusion.</strong>
            </p>
            <p className ="mt-4 text-[14px]">
            LP4Y is a consultative member of the United Naitons Economic and Social Council.
            </p>
            </div>


            {/* card Heading */}
            <h2 className= "text-2xl font-thin my-[5px] pt-10 pb-4"> 3 MISSION <span>🎯</span> </h2>

            {/* card Part */}
            <div className ="flex flex-row items-start gap-6 justify-center "> 
                <div className= 'bg-gray-200 p-6 w-[280px] rounded-[5px] shadow-[0_2px_5px_rgba(0,0,0,0.1)]' >
                    <div className= "flex flex-col justify-center pb-4">

                    <div className ="text-[36px] mb-[0.5rem]">🤝</div>
                    <h3 className ="text-orange-400 font-bold mb-[1rem]">ACCOMPANY </h3>
                    </div>
                    <p>
                        the most excluded Youth using a tested pedagogy and a n ecosystem that allows them to find sustainable jobs on their own and to be socially included in the ddecent world.
                    </p>
                </div>

                <div className= 'bg-gray-200 p-6 w-[280px] rounded-[5px] shadow-[0_2px_5px_rgba(0,0,0,0.1)]'>
                    <div className= "flex flex-col justify-center pb-4 font-bold">

                    <div className = "text-[36px] mb-[0.5rem] ">🔊</div>
                    <h3 className="text-red-950 font-bold mb-[1rem] ">CAMPAIGN </h3>
                    </div>
                    <p>
                        with excluded Youth, giving them a platform and offering concrete, grassroots solutions to problems related to exclusion.
                    </p>
                </div>

                <div className= 'bg-gray-200 p-6 w-[280px] rounded-[5px] shadow-[0_2px_5px_rgba(0,0,0,0.1)]'>
                <div className= "flex flex-col justify-center pb-4">

                     <div className ="text-[36px] mb-[0.5rem] ">📈</div>
                    <h3 className="text-[rgb(255,187,86)] font-bold mb-[1rem]">ENGAGE </h3>
                    </div>
                    <p>
                        witgh all stakeholderes to find innovative solutions for the sustainable inclusion of young adults living in extreme poverty and suffering from exlusion.
                    </p>
                </div>
            </div>
        </section>

        </div>

    )
}

export default Card_Part;