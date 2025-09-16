const Network = ({ data }) => {
  const { heading, headingImg, socials, address } = data;

  return (
    <div className="px-4">
      <h1 className="relative text-xl md:text-3xl mb-4 text-gray-500 flex items-center gap-2 justify-center text-center">
        <span
          className="absolute inset-0 bg-gray-100 -z-10 h-15 md:h-15"
          style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
        ></span>
        {heading} <img src={headingImg} alt="star" className="h-8 md:h-12" />
      </h1>

      <div className="icon flex justify-center pt-5">
        <div className="flex space-x-3 text-lg flex-wrap justify-center gap-3">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EC9000] text-white"
              >
                <Icon className="cursor-pointer" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="address flex flex-col m-5 md:m-10 text-center text-sm md:text-base">
        {address.map((line, index) => (
          <span key={index} className={line.includes("@") ? "break-all" : ""}>
            {line}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Network;
