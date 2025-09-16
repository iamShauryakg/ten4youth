
import Head3 from "../Components/Head3";
import image1 from '../assets/trainingimage.avif';
import WorldMap from '../Components/Home/WorldMap';

const International_Network_Page = () => {

    return (
        <>
        <Head3 bgimg={image1} main_text="INTERNATIONAL NETWORK" />
        <br />
        <WorldMap />
        </>
    )
}
export default International_Network_Page;