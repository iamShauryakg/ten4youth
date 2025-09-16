import React from 'react';
import lplogo from "../../../assets/lplogo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-orange-400 text-white py-10">
      <div className="max-w-7xl mx-auto pl-42 pr-22">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-row">
            <div>
              <div className="flex flex-col justify-center items-center">
                <img src={lplogo} alt="lplogo" className="w-15 h-12" />
                <h2 className="text-sm text-center font-bold leading-tight mb-2">
                  LIFE PROJECT <br /> 4 YOUTH
                </h2>
              </div>
              <p className="text-sm">
                TEN4YOUTH is a founding member of the<span className="underline">Youth 4 Change Network</span> (100+ CSO <br />
                in 40+ countries) and founder of the
                <span className="underline">Youth Inclusion Network</span> (60+
                International Companies).<br />
                TEN4YOUTH holds a special consultative status with the United Nations<br />
                Economic and Social Council.
              </p>
            </div>

            <div className="w-px h-40 bg-white bg-opacity-30 mb-4 mx-auto"></div>
          </div>

          <div className="flex flex-row gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-8">FOLLOW TEN4YOUTH</h3>
              <div className="flex gap-4 mb-6">
                {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-white text-orange-500 rounded-full flex items-center justify-center hover:bg-opacity-80 transition"
                  >
                    <Icon size={25} />
                  </div>
                ))}
              </div>
            </div>


            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-bold">Y<span className="inline-block w-14 items-center h-3 bg-white rounded-full"></span>UTH <br />VISI<span className="inline-block w-14 items-center h-3 bg-white rounded-full"></span>NS</h4>
              </div>
              <div className="flex gap-4">
                {[FaTiktok, FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-white text-orange-500 rounded-full flex items-center justify-center hover:bg-opacity-80 transition"
                  >
                    <Icon size={18} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <br /><br />
        <div>
          <div className="flex flex-row justify-center text-center gap-4">
            <h3 className="text-lg font-semibold text-center mb-4">CONTACT TEN4TOUTH</h3>

            <div className="w-8 h-8 bg-white text-orange-500 rounded-full flex items-center justify-center">
              ☎
            </div>
          </div>

          <p className="text-sm text-center">
            Belgium – Bangladesh – Egypt – France – India – Indonesia –
            Lebanon – Luxembourg – Myanmar – Nepal – Philippines – Sri Lanka – USA
          </p>
        </div>


        <br />
        <div className="flex flex-col md:flex-row px-5 justify-between items-center text-sm gap-4">
          <div>© TEN4YOUTH 2025</div>
          <a href="#" className="hover:underline">
            Impact report
          </a>
          <a href="#" className="hover:underline">
            Publications
          </a>
          <a href="#" className="hover:underline">
            Data protection policy
          </a>
          <a href="#" className="hover:underline">
            Legal documents
          </a>
          <a href="#" className="hover:underline">
            Legal Notice
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
