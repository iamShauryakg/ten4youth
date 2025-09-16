import React from 'react';
import pict1 from "../../../assets/pict1.png";
import pict2 from "../../../assets/pict2.png";
import pict3 from "../../../assets/pict3.png";
import Annuel from "../../../assets/Annuel.png";
import donate from "../../../assets/donate.png";

const Lp4YEvents = () => {
    const events = [
        {
            title: 'WHITE NIGHT',
            description:
                'A dinner wearing white held every year at the end of September in an idyllic seaside location in Mamaroneck, Westchester.',
            details:
                "It's the perfect opportunity to introduce newly arrived people in NY to TEN4YOUTH and help them settle at the start of the school year.",
            imageClass: pict1,
        },
        {
            title: 'YOUTH INCLUSION INTERNATIONAL FORUM',
            description:
                'A forum for companies and NGOs to meet and share their experiences about youth inclusion.',
            details:
                'It takes place in mid-October to coincide with the United Nations International Day for the Eradication of Poverty, celebrated each year on 17 October.',
            imageClass: pict2,
        },
        {
            title: 'TOGETHER WE ART',
            description:
                'A contemporary art fair organized by TEN4YOUTH, bringing together more than 20 artists living in New York and exhibiting a total of almost 300 works in a Manhattan gallery.',
            details:
                'Art is used here as a means of informing a wide audience about TEN4YOUTH\'s actions at the UN and in the field.',
            imageClass: pict3,
        },
        {
            title: 'GALA ANNUEL',
            description:
                'A fundraising evening attended by around 400 people, including corporate partners, individual supporters, volunteers and young students.',
            details:
                'This evening raises around 1/3 of TEN4YOUTH\'s overall operating budget, which is enough to fund the training of 500+ young people each year.',
            imageClass: Annuel,
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
                        <div className="relative z-10 mb-25 bg-white p-3.5 h-[340px] w-full">
                            <h2 className="text-xl font-bold mb-3 text-center text-orange-500">{event.title}</h2>
                            <p className="text-1xl text-center mb-4">{event.description}</p>
                            <p className="text-1x text-center">{event.details}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mb-8 max-w-[850px] my-[10px] mx-auto p-6 mt-4 text-center text-[16px] leading-1.6">
                <p>
                    Since 2020, TEN4YOUTH has held <strong>Special Consultative Status with the Economic and Social Council</strong> (ECOSOC) of the United Nations (UN). This status recognizes TEN4YOUTH as an expert in Youth inclusion, representing civil society at the UN, with the official legitimacy <strong>to carry the voice of young people</strong> living in extreme poverty and victims of exclusion.
                </p><br />
                <p>
                    The TEN4YOUTH USA team is at the heart of the TEN4YOUTH Alliance's institutional advocacy strategy and is a key player in representing the interests of marginalized young people around the world.
                </p>
            </div>
            <div className="flex flex-row justify-center items-center gap-5">
                <h2 className="text-3xl mb-2">DONATE FROM THE US</h2>
                <img src={donate} alt="donate us" className="w-25 h-22 mb-4" />
            </div>
            <div className="mb-4 max-w-[850px] mx-auto text-center text-[16px] leading-1.6">
                <h2>Your donations are eligible for a tax deduction (TEN4YOUTH USA is unincorporated association 501(c)3).</h2>
            </div>
        </div>
    );
};

export default Lp4YEvents;