import Solution_head from '../assets/Solution_header.avif'

import Head1 from "../Components/Head1";
import Integration from "../Components/Solutions/Integration";
import TrainingCenter from "../Components/Solutions/Trainingcenter";
import TrainingTools from "../Components/Solutions/TrainingTools";
import Inclusion from "../Components/Solutions/Inclution"; 
import Angles_Academy from "../Components/Solutions/Angles_Academy";




function Solution() {
    return (
        <div className="text-[#333]">
        <Head1 bgimg={Solution_head} main_text="Solution" />
        <Integration />
        <TrainingCenter />
        <TrainingTools />
        <Angles_Academy />
        <Inclusion />

        </div>
    )
}

export default Solution;
