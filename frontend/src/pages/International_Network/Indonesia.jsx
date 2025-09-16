import Centers from "../../Components/International_Network/Indonesia/Centers.jsx";
import Map from "../../Components/International_Network/Indonesia/Map.jsx";
import Team from "../../Components/Teams.jsx";
import Stories from "../../Components/International_Network/Indonesia/Stories.jsx";
import Support from "../../Components/International_Network/Indonesia/Support.jsx";
import Member from "../../Components/International_Network/Indonesia/Member.jsx";
import Head3 from "../../Components/Head3.jsx";
import { IndonesiaImg1 } from "../../assets/index.js";

import {
  IndonesiaImg14,
  IndonesiaImg15,
  IndonesiaImg16,
  IndonesiaImg17,
  IndonesiaImg18,
  IndonesiaImg19,
} from "../../assets/index.js";

const teamPages = [
  [
    { name: "Klaus Raditio", role: "Treasurer", img: IndonesiaImg14 },
    { name: "Rachel F.I. Abram", role: "Secretary", img: IndonesiaImg15 },
    {
      name: "Albertine Corne",
      role: "Country Coordinator",
      img: IndonesiaImg16,
    },
  ],
  [
    { name: "Setyo Wibowo", role: "President", img: IndonesiaImg17 },
    { name: "Petrus Partono", role: "Vice President", img: IndonesiaImg18 },
    {
      name: "Bernard Leynaud",
      role: "Supervising Member",
      img: IndonesiaImg19,
    },
  ],
];

const Indonesia = () => {
  return (
    <>
      <Head3 bgimg={IndonesiaImg1} main_text={"TEN4YOUTH INDONESIA"} />
      <Centers />
      <Map />
      <Member />
      <Stories />
      <Support />
      <Team teamPages={teamPages} heading={"BOARD MEMBERS"} />
    </>
  );
};

export default Indonesia;
