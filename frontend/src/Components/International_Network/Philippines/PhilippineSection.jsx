import React from 'react';
import Philli from "../../../assets/Philli.avif";
import Head3 from '../../Head3';

const PhilippineSection = () => {
  return (
    <>
      <Head3 bgimg={Philli} main_text="TEN4YOUTH  PHILIPPINES" />
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
     
      <div className="mb-4 max-w-[850px] my-[10px] mx-auto text-center text-[17px] leading-1.6">
        <p className="mt-4 text-center">
          Site of the very first LP4Y training center, the entity operates in the Philippines
          under the name <strong>Life Project 4 Youth Foundation Inc, </strong> as a non-profit organization.
        </p>
        <p className="mt-4 text-center mb-8">
          With 8 Centers spread across the country, LP4Y Philippines is still one of the largest members
          of the Alliance, in terms of Youths and community members supported.
        </p>
      </div>


      <div className="flex flex-row items-center justify-center mb-8 max-w-[850px] my-[10px] mx-auto text-center">
        <div className="w-full flex flex-col md:flex-row justify-center items-start gap-30 px-6 py-10 md:px-12">
          <div className="w-[300px] flex flex-col gap-4">
            <div className="bg-orange-50 p-4 text-center">
              <div className="text-4xl font-bold text-orange-500">3 229</div>
              <div className="text-sm text-orange-500 mt-1">
                <strong>Youth supported </strong> <br />since 2010
              </div>
            </div>
            <div className="bg-orange-50 p-4 text-center">
              <div className="text-4xl font-bold text-orange-500">66%</div>
              <div className="text-sm text-orange-500 mt-1">Youth intergration</div>
            </div>
            <div className="bg-orange-50 p-4 text-center">
              <div className="text-4xl font-bold text-orange-500">2 608</div>
              <div className="text-sm text-orange-500 mt-1"><strong>Members of the community</strong> <br />positively impacted by the training<br />
                sessions run by the Youth in 2024</div>
            </div>
          </div>

          <div className="bg-orange-500 text-start text-white p-8 w-full md:w-1/2 h-[400px]">
            <div className="text-5xl font-bold mb-4">8 <br />Centers</div>
            <div className="flex flex-col gap-3 text-lg">
              <div className="font-bold text-2xl">
                <span className="font-bold mr-2">1</span>Training & <br /><span className="text-start pl-6">Development Center </span>
              </div>
              <div className="font-bold text-2xl">
                <span className="font-bold mr-2">1</span> Green Village
              </div>
              <div className="font-bold text-2xl">
                <span className="font-bold mr-2">1</span> Little Angels <br /> <span className="text-start pl-7">Academy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
  )
}

export default PhilippineSection
