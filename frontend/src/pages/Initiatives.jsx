// InitiativesPage.jsx
import React from "react";
import Section from "./Section";

const initiatives = [
  {
    title: "THE ENTERPRENEURSHIP NETWORK (TEN)",
    subtitle:
      "An international network of over 100 non-profit organisations in over 40 countries that develop and share operational best practices and campaign for the social and professional integration of the most excluded and vulnerable young adults.",
    image: "/pic1.avif",
    buttonText: "LEARN MORE",
    reverse: false,
  },
  {
    title: "THE ENTERPRENEURSHIP NETWORK (TEN)",
    subtitle:
      "A network of 60+ companies working to combat poverty and promote social inclusion for excluded Youth, through impactful Corporate Social Responsibility programs, forward-thinking HR policies, and inclusive business strategies.",
    image: "/pic2.avif",
    buttonText: "LEARN MORE",
    reverse: true,
  },
  {
    title: "TOGETHER WE ART",
    subtitle:
      "Created in 2018 in New York, the art exhibition Together We Art aims to make LP4Y known to a wider audience through art and raise funds to the benefit of LP4Y training programs. Building on its success and thanks to the support of loyal artists, this annual event has become a real rendez-vous in New York. It is now also deployed in Paris, Rome and London.",

    image: "/pic3.avif",
    buttonText: "LEARN MORE",
    reverse: true,
  },
  {
    title: "CATALYST CO.",
    subtitle:
      "Created in 2020 in response to numerous external requests, The Catalysts' Co. operates as a consulting social company. Through this initiative, LP4Y puts its “Youth Inclusion” expertise to the benefit of high-impact projects led by companies, institutions, NGOs, foundations and governments in the social, inclusion, environment and solidarity sectors.",

    image: "/pic4.avif",
    buttonText: null,
    reverse: true,
  },
  {
    title: "YOUTHLAB",
    subtitle:
      "Capitalizing on LP4Y Alliance's 15 years of experience, YouthLABs connect local actors working for better integration of marginalized Youth.YouthLAB Paris is an awareness hub training Catalysts, volunteers and employees of organizations or companies on the challenges faced by young marginalized people",

    image: "/pic5.avif",
    buttonText: null,
    reverse: false,
  },
  {
    title: "YOUTH VISIONS",
  subtitle: [
    "A documentary film *I am the future* (released in 2025) that follows 4 young people from India, Indonesia, Lebanon and Guinea, exploring their role in the professional world, social justice, climate change, the place of women and testifying at the United Nations.",
    "A podcast that focuses on social and environmental justice.",
    "Various events in schools, communities, associations, businesses and shanty towns, to promote Youth inclusion and to inspire concrete actions."
  ],

    image: "/pic6.avif",
    buttonText: "LEARN MORE",
    reverse: false,
  },
];

const InitiativesPage = () => {
  return (
    <div className="px-4 md:px-16 py-10 space-y-20">
      <div className="w-full">
        <img
          src="/top-banner.avif"
          alt="Top Banner"
          className="w-full h-[656px] object-cover"
        />
      </div>

      <h2 className="text-center text-lg md:text-xl font-medium">
        To facilitate the full professional and social integration of young adults, TEN has developed <span className="font-bold">a set of initiatives designed to engage more stakeholders</span> in favor of Youth inclusion.
      </h2>
      {initiatives.map((item, index) => (
        <React.Fragment key={index}>
          <Section {...item} />

          {item.title === "TOGETHER WE ART" && (
            <div className="w-full">
              <img
                src="/middle-banner.avif"
                alt="Middle Banner"
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default InitiativesPage;