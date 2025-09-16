import Head3 from "../../Components/Head3"
import Textcontent from "../../Components/International_Network/Luxembourg/Textcontent";
import Teams from "../../Components/Teams";
import Events from "../../Components/International_Network/Luxembourg/Events";
import Donate from "../../Components/International_Network/Belgium/Donate";
import Member from "../../Components/International_Network/Luxembourg/Member";
import Network from "../../Components/International_Network/Luxembourg/Network";

import {textcontentData, eventsPageData, memberData, networkData, teamPages} from "../../../data/belgium.js"

import {belgium1} from "../../assets/index.js";

const Belgium = () => {
  return (
    <div>
      <Head3 bgimg={belgium1} main_text={"TEN4YOUTH BELGIUM"} />
      <Textcontent data={textcontentData} />
      <div className="bg-gray-200">
        <Teams teamPages={teamPages} heading={"THE TEAM"} />
      </div>
      <Events data={eventsPageData} />
      <Donate/>
      <Member data={memberData} />
      <Network data={networkData} />
    </div>
  )
}

export default Belgium
