import Carousel from "../../Components/International_Network/USA/Carousel";
import Events from "../../Components/International_Network/USA/Events";
import Lp4YEvents from '../../Components/International_Network/USA/Lp4YEvents';
import DonationandSocials from '../../Components/International_Network/USA/DonationandSocials';
import Socials from '../../Components/International_Network/USA/Socials';
import UsaSection from "../../Components/International_Network/USA/UsaSection";


function Usa() {
  return (
    <div className="text-[#333]">
      <UsaSection />
      <Carousel />
      <Events />
      <Lp4YEvents />
      <DonationandSocials />
      <Socials />
    </div>
  )
}

export default Usa;
