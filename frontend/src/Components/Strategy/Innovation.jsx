import React from 'react';
import { Award, Handshake, Users, Lightbulb, Settings } from 'lucide-react';

const Innovation = () => {
  const features = [
    {
      icon: <Handshake className="w-8 h-8 text-orange-600" />,
      title: "Global Partnership",
      description: "Leveraging the commitment of diverse partners to fight global poverty through Youth empowerment."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Collective Action",
      description: "Since its creation, more than 700 Catalysts have actively refined the organization's model through knowledge sharing and impact analysis."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-600" />,
      title: "Youth Innovation",
      description: "Youth Inclusion International Forum (YIIF) events serve as platforms for collective reflection, enabling stakeholders to co-create future strategies."
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-600" />,
      title: "Sustainable Impact",
      description: "LP4Y created several initiatives to bring together various inclusion actors such as the Youth 4 Change Network and the Youth Inclusion Network."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Award className="w-12 h-12 text-orange-600 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              COLLECTIVE INNOVATION FOR A<br />
              SUSTAINABLE CHANGE
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The LP4Y movement grows its strength from collective action:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 group-hover:bg-orange-200 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            LP4Y'S INITIATIVES
          </button>
        </div>
      </div>
    </section>
  );
};

export default Innovation;