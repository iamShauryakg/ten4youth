import pix2 from "../../../assets/pix2.png";
import React from 'react'

const Events = () => {
  return (
    <div className="p-4">
      <div className="flex flex-row justify-center items-center gap-8">
        <h2 className="text-3xl mb-2">MAIN EVENTS</h2>
        <img src={pix2} alt="pix2" className="w-30 h-25 mb-4" />
      </div>
      <div className="mb-4 max-w-[900px] my-[10px] mx-auto text-center text-[16px] leading-1.6">
        <p>
          Beyond the financial dimension, each TEN4YOUTH USA's initiative is an opportunity for many individuals, companies and institutions to meet, exchange ideas and discover the experiences of young people, who most often come to speak in person. It is a chance to <strong>understand a different reality as well as their potential and the effectiveness of LP4Y methods,</strong> to network and identify different possibilities for supporting the inclusion of young people. LP4Y USA helps <strong>to establish new local and international partnerships, strengthening actions in the USA and local support for LP4Y training centers</strong> (training, sharing good practice, professional exposure, recruitment, etc).
        </p>
        <br />
        <p>
          TEN4YOUTH USA is multiplying the opportunities for creating partnerships between players in New York and sharing good practice, in particular through the organization of the <strong>Youth Inclusion International Forum,</strong> which brings together many actors interested in Youth inclusion.
        </p>
        <p>
          These events lead to the development of new collaborations and local initiatives that give young excluded Americans access <strong>to work experience and a sustainable integration in the labour market.</strong>
        </p>
      </div>
    </div>
  )
}

export default Events;
