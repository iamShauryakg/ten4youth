import React from "react";
import image1 from "../assets/ten4youth.png";
import mission1 from "../assets/mission1.png";
import mission2 from "../assets/mission2.png";
import mission3 from "../assets/mission3.png";
import group_photo from "../assets/group_photo.jpg";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.jpg";

import Head3 from "../Components/Head3";

const JoinTen4Youth = () => {
  const missions = [
    {
      image: mission1,
      title: "13 months minimum commitment",
      description:
        "Under a local contract or a voluntary contract for international Catalysts (VSI or Civic Service).",
    },
    {
      image: mission2,
      title: "+ More than 130 full-time Catalysts",
      description:
        "Based in an LP4Y entity: UK, Belgium, Bangladesh, USA, France, India, Indonesia, Philippines, Lebanon, Luxembourg, Madagascar, Myanmar, and Nepal.",
    },
    {
      image: mission3,
      title: "50% local volunteers and 50% international volunteers",
      description:
        "Our teams are made up of 50% local volunteers and 50% international volunteers on full-time or part-time assignments.",
    },
  ];

  return (
    <div className="w-full text-gray-800">
      <Head3 bgimg={image1} main_text="JOIN TEN4YOUTH TEAM" />

      {/* Intro */}
      <section className="bg-white py-10 text-center max-w-4xl mx-auto">
        <p className="text-lg leading-relaxed">
          <b>Come and get involved with the Youth</b> who live on the margins of
          society. Put your skills to good use in the field and join our{" "}
          <b>teams of volunteers</b>, known as Catalysts, because of the effect
          that they have in the field!
        </p>
        <br />
        <p className="text-lg leading-relaxed">
          Catalysts are vectors of positive energy who have a{" "}
          <b>strong impact on the Youth</b>, communities, and partners with whom
          they work on a daily basis.
        </p>
        <br />
        <p className="text-lg leading-relaxed">
          To apply, send your cover letter and resume at:
        </p>
        <h2 className="text-2xl font-semibold mt-4">
          becomeacatalyst@ten4youth.org
        </h2>
      </section>

      {/* Missions */}
      <section className="bg-white py-12">
        <h2 className="text-3xl font-semibold text-center mb-12 text-black">
          FULL-TIME MISSION
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {missions.map((mission, index) => (
            <div key={index} className="text-center">
              <img
                src={mission.image}
                alt={mission.title}
                className="w-24 h-24 object-contain mx-auto"
              />
              <h3 className="mt-6 font-semibold text-lg">{mission.title}</h3>
              <p className="mt-3 text-gray-600">{mission.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Middle Image */}
      <img
        src={group_photo}
        className="w-full h-[30vh] object-cover my-10"
        alt="Group"
      />

      {/* Section 1: 5 Reasons */}
      <section className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto pb-25 pt-5">
        <img
          src={team2}
          alt="5 Reasons"
          className="h-[34vh]"
        />
        <div className="items-start mt-1 flex-1">
          <h2 className="text-3xl font-light mb-5">
            5 REASONS TO GET INVOLVED WITH LP4Y{" "}
            <span role="img" aria-label="emoji">
              🧑‍🤝‍🧑
            </span>
          </h2>
          <ol className="list-decimal list-outside ">
            <li>
              <span className="font-bold">To enrich your career:</span>{" "}
              assignments with responsibilities in a non-hierarchical,
              collaborative working environment in which each Catalyst is
              encouraged to take initiatives.
            </li>
            <li>
              <span className="font-bold">
                To develop cross-disciplinary skills,
              </span>{" "}
              which may be related to your professional sector (finance,
              communication, partnership management and fundraising, etc.).
            </li>
            <li>
              <span className="font-bold">
                To experience a strong philosophy
              </span>{" "}
              of sharing and community.
            </li>
            <li>
              <span className="font-bold">
                To work alongside an organization that has been specializing
              </span>{" "}
              for 15 years in the inclusion of the most vulnerable Youth; an
              organization that is fast-growing and recognized for the dynamism
              of its ecosystem.
            </li>
            <li>
              <span className="font-bold">
                To benefit from ongoing training
              </span>{" "}
              and support in building your career plan.
            </li>
          </ol>
        </div>
      </section>

      {/* Section 2: Profile */}
      <section className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto py-12">
        <div className="items-start mt-[-7vh]">
          <h2 className="text-4xl font-light mb-5">
            PROFILE OF A FUTURE CATALYST{" "}
            <span role="img" aria-label="target">
              🎯
            </span>
          </h2>
          <p className="mb-4">
            Our missions would appeal to candidates who are{" "}
            <span className="font-bold">
              passionate about development and entrepreneurship
            </span>
            , and who have existing professional experience.
          </p>
          <p>
            Candidates will typically be{" "}
            <span className="font-bold">
              open-minded, dynamic and entrepreneurial
            </span>{" "}
            looking for opportunities to develop their personal and professional
            skills in an intercultural context.{" "}
            <span className="font-bold">Fluent English is required.</span>
          </p>
        </div>
        <img src={team1} alt="Profile" className="h-[30vh] w-[34vh]" />
      </section>
    </div>
  );
};

export default JoinTen4Youth;
