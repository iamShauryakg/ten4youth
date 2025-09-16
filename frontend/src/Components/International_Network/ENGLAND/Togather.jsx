import React from 'react';
import Art from "../../../assets/Art.avif";
import DINE from "../../../assets/DINE.avif";
import Raise from "../../../assets/Raise.avif";
import PLAY from "../../../assets/PLAY.avif";
import donate from "../../../assets/donate.png";

const Togather = () => {
    const events = [
        {
            title: 'TOGETHER WE PLAY',
            description:
                'A multi-generational tennis tournament running from May to September',
            imageClass: PLAY,
        },
        {
            title: 'TOGETHER WE DINE',
            description:
                'A serie of garden parties in May/June to campaign and raise funds through auctioning of "individual talents"',
            imageClass: DINE,
        },
        {
            title: 'TOGETHER WE RAISE',
            description:
                'Engaging with corporate partners throughout the year to raise funds through corporate foundations',
            imageClass: Raise,
        },
        {
            title: 'TOGETHER WE ART',
            description:
                'The London premium art exhibition to raise public awareness about TEN4Youth mission and bring people together to enjoy art',
            imageClass: Art,
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <div className="flex">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={`relative overflow-hidden shadow-lg p-6 min-h-[1200px] flex flex-col justify-end bg-cover bg-center bg-fixed`}
                        style={{ backgroundImage: `url(${event.imageClass})` }}

                    >
                        <div className="absolute inset-0"></div>
                        <div className="relative z-10 mb-25 bg-white p-3.5 h-[200px] w-full">
                            <h2 className="text-xl font-bold mb-3 text-center text-orange-500">{event.title}</h2>
                            <p className="text-1xl text-center mb-4">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-row justify-center mt-12 items-center gap-5">
                <h2 className="text-3xl mb-2">DONATE FROM THE US</h2>
                <img src={donate} alt="donate us" className="w-25 h-22 mb-4" />
            </div>
            <div className="mb-6 max-w-[850px] mx-auto text-center text-[16px] leading-1.6">
                <h2>TEN4Youth England is registered with the UK Charity Commission. You can therefore Gift-Aid your donation. <strong>Gift Aid</strong> can <strong>increase the value of your donations by 25%, so you can give even more to the cause you care about.</strong> In other words, LP4Y England will claim an extra 25p for every £1 you donate, at no extra-cost to you.</h2>
                <br />
                <h2>All you have to do is pay the basic rate of tax and make the donation from your own funds.</h2>
            </div>
        </div>
    );
};

export default Togather;