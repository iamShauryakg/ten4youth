import IndiaSection from "../../Components/International_Network/India/IndiaSection";
import IndiaMap from "../../Components/International_Network/India/IndiaMap";
import YouthsTestimonials from "../../Components/International_Network/India/YouthsTestimonials";
import SupportSection from "../../Components/International_Network/India/SupportSection";
import Teams from "../../Components/Teams";

import Arup from "../../assets/Arup.avif";
import Anna from "../../assets/Anna.avif";
import Swarup from "../../assets/Swarup.avif";
import Vaswati from "../../assets/Vaswati.avif";
import Subhankar from "../../assets/Subhankar.avif";
import vimal from "../../assets/vimal.avif";

const teamPages = [
  [
    {
      name: "Arup Ghosh",
      role: "Founder of",
      role1: "Tomorrow’s Foundation",
      img: Arup,
    },
    {
      name: "Swarup Ghosh",
      role: "Founder of",
      role1: "Tomorrow’s Foundation",
      img: Swarup,
    },
    {
      name: "Vimal Sharma",
      role: "TEN4YOUTH Finance",
      role1: "Tomorrow’s Foundation",
      img: vimal,
    },
  ],
  [
    {
      name: "Vaswati Banerjee",
      role: "Human Resources Manager",
      role1: "Tomorrow’s Foundation",
      img: Vaswati,
    },
    {
      name: "Subhankar Duta",
      role: "Manager",
      role1: "Tomorrow’s Foundation",
      img: Subhankar,
    },
    {
      name: "Anna Arsène",
      role: "Country Coordinator",
      role1: "TEN4YOUTH Inde",
      img: Anna,
    },
  ],
];

const India = () => {
  return (
    <div>
      <IndiaSection />
      <IndiaMap />
      <YouthsTestimonials />
      <SupportSection />
      <Teams teamPages={teamPages} heading={"BOARD MEMBERS"}/>
    </div>
  );
};

export default India;
