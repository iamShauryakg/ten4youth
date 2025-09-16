import event from "../src/assets/pix2.png";
import star2 from "../src/assets/star2.png";
import {
  image1,
  image2,
  image3,
  image4,
  IndonesiaImg10,
  IndonesiaImg12,
  Campaign,
  box,
  supportaction,
  belgium1,
  belgium2,
  belgium3,
  belgium4,
  belgium5,
} from "../src/assets/index.js";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

//  textcontent data
export const textcontentData = {
  first: `The TEN4YOUTH Belgium team relies on the commitment and skills of its members to develop fundraising and advocacy initiatives in Belgium for the professional and social inclusion
of excluded Young adults. `,

  second: [``],

  heading: "In 2024, it counts:",

  missions: [
    {
      content: 6,
      title: "Awareness campaigns",
      description: "about Youth inclusion",
    },
    {
      content: 400,
      title: "People positively impacted",
      description: "by its awareness campaigns regarding Youth inclusion",
    },
    {
      content: 19,
      title: "Volunteers",
      description: "including 69% of women",
    },
  ],
};

// for team data
export const teamPages = [
  [
    {
      name: "Bénédicte Declerck",
      role: "President",
      role1:
        "Benedicte is Accessibility Lead at a digital agency; she loves TEN4YOUTH's constructive spirit. She started as volunteer in 2022 and became President of TEN4YOUTH Belgium in 2023, with a wonderful and committed team.",
      img: belgium2,
    },
    {
      name: "Christine Blin",
      role: "Vice-president",
      role1:
        "Trained as a psychotherapist, Christine now works with young people and adults individually and in groups, mainly to help them build their self-esteem. She have been involved with TEN4YOUTH Belgium since 2018. ",
      img: belgium3,
    },
    {
      name: "Niels Claudy",
      role: "Secretary",
      role1:
        "Student in political science, and currently working on a master's degree in international relations, Niels joined TEN4YOUTH Belgium in 2024 as an intern and then secretary.",
      img: belgium4,
    },
  ],
  [
    {
      name: "Agnes Lefort Germond",
      role: "Treasurer",
      role1:
        "Agnès, Chief Financial Officer at a leading IT company, has been deeply connected to TEN4YOUTH for several years. In 2024, she joined TEN4YOUTH Belgium as treasurer, bringing her leadership and analytical expertise.",
      img: belgium5,
    },
  ],
];

// Data for Luxembourg event section
export const eventsPageData = {
  heading: "MAIN EVENTS",
  headingIcon: event,

  cards: [
    {
      img: image1,
      title: "YOUTH INCLUSION FORUM",
      description:
        "Since 2019, TEN4YOUTH Belgium has been periodically bringing together companies, associations and public actors for conferences and round tables to work together on solutions for the social and professional integration of young people victims of exclusion in Brussels.",
    },
    {
      img: image2,
      title: "UCCLE 10K",
      description:
        "Every spring, a team of runners and walkers wearing the TEN4YOUTH colors take part in the 10K race in Uccle (Brussels). This very popular family sports event attracts around 4,000 participants.",
    },
    {
      img: image3,
      title: "CINEMA",
      description:
        "Film previews are regularly organized at Brussels cinemas, followed by a drink to continue the evening in a friendly atmosphere. All proceeds from these evenings support TEN4YOUTH's projects in the field. ",
    },
    {
      img: image4,
      title: "ANNUAL INFORMATION EVENING",
      description:
        "On the occasion of the TEN4YOUTH Belgium general meeting, we organize an evening to present the latest news regarding TEN4YOUTH in Belgium and around the world, and to exchange ideas with our members and supporters over an 'aperitif' and dinner.",
    },
  ],
};

// LUXEMBOURG MemberData
export const memberData = {
  heading: "MEMBERSHIP",
  headingImg: IndonesiaImg12,

  paragraphs: [
    "Until 2023, TEN4YOUTH Belgium was mainly dedicated to raise funds to support TEN4YOUTH centers internationally. Aware of local exclusion, we decided to capitalize on TEN4YOUTH's incredible expertise to start supporting projects in the Brussels area.",
    "The Youth Inclusion Forum, initiated in 2019, mobilizes companies, politicians and associations for the inclusion of young people. We hope to inspire young Belgians to get involved as volunteers (Catalysts), in Belgium or in TEN4YOUTH centers around the world.",
  ],

  missions: [
    {
      img: supportaction,
      title: "Support the actions",
      description:
        "of the TEN4YOUTH movement by playing a part in the inclusion of young adults",
    },
    {
      img: box,
      title: "Have a voice",
      description: "in the TEN4YOUTH Luxembourg General Assembly",
    },
    {
      img: Campaign,
      title: "Campaign",
      description:
        "for the inclusion of excluded young adults by helping us to publicize TEN4YOUTH's missions to the general public",
    },
  ],

  button: {
    text: "CONTACT US",
    link: "/contact",
  },
};

// LUXEMBOURG network data
export const networkData = {
  heading: "SOCIAL NETWORKS",
  headingImg: star2,

  socials: [
    {
      icon: FaFacebookF,
      link: "#",
    },
    {
      icon: FaInstagram,
      link: "#",
    },
    {
      icon: FaLinkedinIn,
      link: "#",
    },
    {
      icon: FaYoutube,
      link: "#",
    },
  ],

  address: ["", "", "", ""],
};
