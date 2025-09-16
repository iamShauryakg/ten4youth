import Head3 from "../Components/Head3";


function Get_involved() {
  return (
    <div className="max-h-screen bg-gray-90">
      {/* Hero Image Section */}
      <Head3 bgimg="https://static.wixstatic.com/media/69220e_6fb156f664bc4d308a83732b2db846fc~mv2.jpg/v1/fill/w_1897,h_954,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/69220e_6fb156f664bc4d308a83732b2db846fc~mv2.jpg" main_text="Get Involved with TEN4Youth" />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-semibold text-gray-700 mb-2">
            GET INVOLVED WITH TEN4YOUTH
         
         <div className ="text-[36px] mb-[0.5rem]">🤝</div>
         </h1>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Join the Team */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img 
              src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
              alt="Team collaboration"
              className="w-full h-50 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
                JOIN THE TEN4YOUTH TEAM
              </h2>
            <div className="p-6">
              
            </div>
          </div>

          {/* Become a Partner */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
              alt="Partnership meeting"
              className="w-full h-50 object-cover"
            />
            <h2 className="text-l font-semibold text-gray-800 mb-3">
                BECOME A PARTNER
              </h2>
            <div className="p-6">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Get_involved;