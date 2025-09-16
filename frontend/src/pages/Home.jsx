import VideoSection from "../components/Home/Youtubevideo";
import Card_Part from '../components/Home/Card_part';
import WorldMap from "../components/Home/WorldMap";
import SupportSection from "../Components/Home/SupportSection";
import CloneSection from "../Components/Home/CloneSection";
import StoriesSection from "../Components/Home/StoriesSection";
import GetInvolved from "../Components/Home/GetInvolved";
// If you want SeatBooking, add: import SeatBooking from "../Components/Home/SeatBooking";

function Home_page() {
    return (
        <>
            <section>
                < Card_Part />
            </section>
            <section>
                < VideoSection />
            </section>
            <section>
                < WorldMap />
            </section>
            <section>
                 <GetInvolved/>
                <SupportSection />
                 <CloneSection />
                 <StoriesSection />
            {/* If you want SeatBooking, add:
                <SeatBooking />
            */}
            </section>
        </>
    );
}

export default Home_page;