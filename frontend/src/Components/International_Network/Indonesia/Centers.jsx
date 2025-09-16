import React from "react";

const Centers = () => {
  return (
    <div className="px-10 py-16">
      {/* Paragraph Section */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <p>
          ​​Since June 2023, TEN4YOUTH in Indonesia has been registered as a
          local foundation, under the name
        </p>
        <b>"Yayasan Inklusi Generasi Muda".</b>
        <p className="mt-6">
          Before that, TEN4YOUTH Jakarta operated under the umbrella of the
          Atmabrata Foundation, while TEN4YOUTH Surabaya operated as a branch of
          Yayasan Kasih Bangsa Surabaya, <b>specialized in Youth inclusion. </b>
          Thanks to increased local visibility, the centers in Surabaya and
          Jakarta are able to attract more and more Young adults.
        </p>
      </div>

      {/* Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
        {/* Left side boxes */}
        <div className="space-y-6">
          <div className="text-[#EC9000] bg-orange-50 flex items-center justify-center flex-col p-4 w-100">
            <h1 className="text-5xl font-extrabold">560</h1>
            <p className="text-xl font-semibold">Youth supported</p>
            <p>since 2013</p>
          </div>
          <div className="text-[#EC9000] bg-orange-50 flex items-center justify-center flex-col p-4 w-100">
            <h1 className="text-5xl font-extrabold ">73%</h1>
            <p className="text-xl font-semibold">Youth integrated</p>
          </div>
          <div className="text-[#EC9000] bg-orange-50 flex items-center justify-center flex-col p-4 w-100">
            <h1 className=" text-5xl font-extrabold">920</h1>
            <p className="text-xl font-semibold">Members of the community</p>
            <p className="text-center">
              positively impacted by the training sessions run by the Young
              People in 2024
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="bg-[#EC9000] text-white p-10 text-center rounded shadow-lg">
          <h2 className="text-4xl font-bold">2 Centers</h2>
          <p className="mt-4 text-xl font-semibold">
            2 Training & Development Centers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Centers;
