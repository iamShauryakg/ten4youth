import {
  IndonesiaImg5,
  IndonesiaImg6,
  IndonesiaImg7,
} from "../../../assets/index.js";

const Stories = () => {
  return (
    <div className="max-w-5xl mx-auto py-12">
      {/* Heading */}
      <div className="flex items-center justify-center space-x-2 mb-12">
        <h2 className="text-xl font-semibold text-gray-800 uppercase">
          YOUTHS' TESTIMONIES
        </h2>
        <img src={IndonesiaImg5} alt="Message Icon" className="w-6 h-6" />
      </div>

      {/* Testimonials */}
      <div className="space-y-12">
        {/* First Testimonial */}
        <div className="flex items-center gap-6">
          <img
            src={IndonesiaImg6}
            alt="Profile 1"
            className="w-32 h-32 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-800">
              Fonda Briliana Gani, Training & Development Center Surabaya
            </p>
            <p className="italic text-gray-600 text-sm">
              "I come from a large family in Surabaya. At TEN4YOUTH, I learned about
              how to build my confidence speaking in public during LPPP and
              convey my opinion when attending senior meetings. My biggest dream
              is to have my own fashion business and open up jobs for everyone."
            </p>
          </div>
        </div>

        {/* Second Testimonial */}
        <div className="flex items-center gap-6">
          <div className="text-right flex-1">
            <p className="font-semibold text-gray-800">
              Meidina, Training & Development Center Surabaya
            </p>
            <p className="italic text-gray-600 text-sm">
              "My name is Meidina, a graduate of TEN4YOUTH training program, which
              has helped me develop my professional skills and confidence. Now,
              I work as a store crew at Alfamart, living my career with passion
              and new hope."
            </p>
          </div>
          <img
            src={IndonesiaImg7}
            alt="Profile 2"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-[#EC9000] text-white font-semibold px-8 py-2 rounded-full hover:bg-orange-600 transition">
          READ TEN4YOUTH STORIES
        </button>
      </div>
    </div>
  );
};

export default Stories;
