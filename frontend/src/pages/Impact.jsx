import image4 from '../assets/image4.png'

import Head2 from "../Components/Head2";
import ImpactCards from "../Components/Impacts/ImpactCards";
import BottomCards from "../Components/Impacts/BottomCards";

function Impact() {
    return (
        <div className="text-[#333]">
            <Head2 bgimg={image4} main_text="Impact" />
            <ImpactCards />
            <BottomCards />
        </div>
    )
}

export default Impact;