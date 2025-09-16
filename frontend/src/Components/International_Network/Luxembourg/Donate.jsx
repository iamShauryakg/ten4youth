// Donate.jsx
const Donate = ({ data }) => {
  return (
    <div className="container flex flex-col items-center px-4 md:px-10 py-10 mx-auto">
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl mb-4 text-gray-500 flex flex-col md:flex-row items-center gap-2 text-center">
        {data.heading}
        <img
          src={data.headingImg}
          alt="donate"
          className="h-16 md:h-20 mt-2 md:mt-0"
        />
      </h1>

      {/* Description */}
      <p className="text-center mb-10 w-full md:w-[70%] text-sm md:text-base leading-relaxed">
        {data.description}
      </p>

      {/* 2 Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full bg-gray-100 p-6 md:p-10 rounded-lg">
        
        {/* Left Box */}
        <div className="flex flex-col items-center text-center">
          <h2 className="font-semibold mb-4 text-base md:text-lg">
            {data.leftBox.title}
          </h2>
          <img
            src={data.leftBox.qrCode}
            alt="QR Code"
            className="w-32 h-32 md:w-40 md:h-40 object-contain mb-4"
          />
          <p className="text-xs md:text-sm text-gray-600 w-[90%] md:w-[80%]">
            {data.leftBox.note}
          </p>
        </div>

        {/* Right Box */}
        <div className="flex flex-col items-center text-center">
          <h2 className="font-semibold mb-4 text-base md:text-lg">
            {data.rightBox.title}
          </h2>
          <button className="bg-blue-500 text-white px-6 py-2 rounded mb-4 text-sm md:text-base">
            {data.rightBox.buttonText}
          </button>

          {/* Payment Icons */}
          <div className="flex gap-2 mb-3 flex-wrap justify-center">
            {data.rightBox.paymentIcons.map((icon, i) => (
              <img key={i} src={icon} alt="payment" className="h-5 md:h-6" />
            ))}
          </div>

          <p className="text-xs text-gray-500 mb-4">{data.rightBox.madeWith}</p>

          {/* Steps */}
          <div className="text-left text-xs md:text-sm text-gray-700 space-y-3">
            {data.rightBox.steps.map((step, i) => (
              <p key={i}>
                <b>{step.step}</b>
                <br />
                {step.content}
                {/* Links agar hain to render karo */}
                {step.links && (
                  <>
                    <br />
                    <a href={step.links.onlineForm} className="text-blue-500 underline">
                      online form
                    </a>{" "}
                    OR
                    <br />
                    <a href={step.links.supportVoucher} className="text-blue-500 underline">
                      Support Voucher
                    </a>{" "}
                    and send it by email to{" "}
                    <a href={step.links.email} className="text-blue-500 underline">
                      {step.links.email.replace("mailto:", "")}
                    </a>
                  </>
                )}

                {step.bankDetails && (
                  <>
                    <br />
                    IBAN: {step.bankDetails.IBAN}
                    <br />
                    IC: {step.bankDetails.IC}
                    <br />
                    <b>{step.bankDetails.note}</b>
                  </>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
