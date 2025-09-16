import Head3 from "../../Components/Head3";
import Textcontent from "../../Components/International_Network/Luxembourg/Textcontent.jsx";
import Teams from "../../Components/Teams.jsx";
import Events from "../../Components/International_Network/Luxembourg/Events.jsx";
import Donate from "../../Components/International_Network/Luxembourg/Donate.jsx";
import Member from "../../Components/International_Network/Luxembourg/Member.jsx";
import Network from "../../Components/International_Network/Luxembourg/Network.jsx";

import {
  donateData,
  teamPages,
  eventsPageData,
  memberData,
  networkData,
  textcontentData,
} from "../../../data/luxembourg.js";

import { Luxembourg1 } from "../../assets/index.js";

const Luxembourg = () => {
  return (
    <>
      <Head3 bgimg={Luxembourg1} main_text={"TEN4YOUTH LUXEMBOURG"} />
      <Textcontent data={textcontentData} />
      <div className="bg-gray-200">
        <Teams teamPages={teamPages} heading={"THE TEAM"} />
      </div>
      <Events data={eventsPageData} />
      <Donate data={donateData} />
      <Member data={memberData} />
      <Network data={networkData} />
    </>
  );
};

export default Luxembourg;
