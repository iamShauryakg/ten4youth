import gifImage from "../../assets/clone.gif";

const CloneSection = () => {
  return (
    <section className="bg-white w-full flex justify-center items-center py-10 px-4">
      <div className="max-w-6xl w-full">
        <img
          src={gifImage}
          alt="Demo animation"
          className="w-full md:w-3/4 lg:w-1/2 h-auto mx-auto object-contain rounded-2xl"
        />
      </div>
    </section>
  );
};

export default CloneSection;
