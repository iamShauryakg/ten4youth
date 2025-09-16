

import Head1 from "../Components/Head1";
import Mission from "../components/Strategy/Mission";   
import Innovation from "../components/Strategy/Innovation";


function Strategy_pages() {
  return (
    <div className="min-h-screen bg-white">
      <Head1 bgimg="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" main_text="Strategy" />
      <Mission />
      <Innovation />

    </div>
  );
}

export default Strategy_pages;