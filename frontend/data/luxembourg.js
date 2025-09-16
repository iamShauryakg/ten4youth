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
  book,
  box,
  supportaction,
  luxembourgimg1,
  luxembourgimg2,
  luxembourgimg3,
  luxembourgimg4,
  luxembourgimg5,
  luxembourgimg6,
  luxembourgimg7,
  luxembourgimg8,
  luxembourgimg9,
  luxembourgimg10,
  luxembourgimg11,
  luxembourgimg12,
} from "../src/assets/index.js";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";






// Data for Luxembourg event section
export const eventsPageData = {
  heading: "MAIN EVENTS",
  headingIcon: event,
  description: `The aim of Agora 4 Youth, initiated by TEN4YOUTH Luxembourg, is to
  listen to excluded Youths, give them a voice and guide them towards a
  better life. We are working with our partners such as the government,
  companies and individuals to move the whole TEN4YOUTH movement forward,
  especially in Nepal, so that the voice of excluded Youths are better
  taken into account.`,

  cards: [
    {
      img: image1,
      title: "SCHOOL ACTION",
      description:
        "Through TEN4YOUTH's experience and expertise, the aim is to initiate a dialogue on education for Citizenship and International Solidarity.",
    },
    {
      img: image2,
      title: "AGORA 4 YOUTH",
      description:
        "Find sustainable solutions and support their integration, as well as developing and sharing operational best practice in favor of their social and professional inclusion.",
    },
    {
      img: image3,
      title: "CHARITY EVENTS",
      description:
        "We organize charity events to raise funds as well as awareness regarding the challenges faced by excluded Youth. It can be wine-tasting evenings, concerts, or private screenings — all proceeds go to TEN4YOUTH Luxembourg.",
    },
    {
      img: image4,
      title: "TOGETHER WE CAN MEETING",
      description:
        "This evening allows participants to discover TEN4YOUTH’s projects and meet the Luxembourg team. It’s an opportunity to discuss ways to support excluded Youth.",
    },
  ],
};







// LUXEMBOURG donate data
export const donateData = {
  heading: "DONATE FROM LUXEMBOURG",
  headingImg: IndonesiaImg10,

  description:
    "If you are a taxable individual, 66% of your donation is deductible from your taxes up to 20% of your taxable income. A business donation is deductible up to 60% of the payments made, up to a limit of 5% of the turnover realized in respect of the financial year.",

  leftBox: {
    title: "I donate online, by credit card",
    qrCode:
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=DemoQR",
    note: "You have a right of access, rectification and deletion on simple written request to: TEN4YOUTH Luxembourg: 50 rue Basse, Steinsel, L-7307",
  },

  rightBox: {
    title: "I donate by credit card",
    buttonText: "DONATE",
    paymentIcons: [
      "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Discover_Card_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    ],
    madeWith: "Made with POWR",
    steps: [
      {
        step: "STEP 1: Complete the online form to benefit from the tax deduction",
        content: `Complete the online form OR Download the Support Voucher and send it by email to dons.lux@TEN4YOUTH.org or by post to: Life Project 4 Youth Luxembourg – 50 rue Basse, L-7307 Steinsel`,
        links: {
          onlineForm: "#",
          supportVoucher: "#",
          email: "mailto:dons.lux@TEN4YOUTH.org",
        },
      },
      {
        step: "STEP 2: Finalize your donation by bank transfer",
        content: `Life Project 4 Youth Luxembourg, 50 rue Basse, L-7307 Steinsel, Luxembourg`,
        bankDetails: {
          IBAN: "LU68 0030 3647 0721 0000",
          IC: "BGLLLULL",
          note: "NB: Prefer donations by transfer to avoid commission fees.",
        },
      },
    ],
  },
};






// LUXEMBOURG MemberData
export const memberData = {
  heading: "BECOME A MEMBER",
  headingImg: IndonesiaImg12,

  paragraphs: [
    "The TEN4YOUTH Luxembourg team has a wide range of commitments and ways of taking action that are accessible to everyone. Choose the means of action that suits you best and get involved to bring our projects to life!",
    "Whether you're an individual, a company, a school or an association, or if you want to pass on your principles through a legacy, you too can play a part in integrating young people from excluded backgrounds. Let's discuss during our next event. Let's take action together!",
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
      img: book,
      title: "Receive news",
      description:
        "from Youths and Catalysts in the field in Asia and the Middle East",
    },
    {
      img: Campaign,
      title: "Campaign",
      description:
        "for the inclusion of excluded young adults by helping us to publicize TEN4YOUTH's missions to the general public",
    },
  ],

  button: {
    text: "JOIN AND SUPPORT",
    link: "/jointen4yOUTHouth",
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

  address: [
    "Life Project 4 Youth Luxembourg (ONGD)",
    "N° RCS: F8583 50 rue Basse, Steinsel, L-7307, Luxembourg",
    "+352 33 33 01 44",
    "info.luxembourg@lp4y.org",
  ],
};






// LUXEMBOURG textcontent data
export const textcontentData = {
  first: `As an accredited NGDO, TEN4YOUTH Luxembourg is committed to designing and
  implementing strategic programmes dedicated to the professional and
  social integration of young adults in Asia and the Mediterranean
  basin, with support from the Ministry of Foreign Affairs (MAE).`,

  second: [
    `Our flagship initiative in Luxembourg, Agora 4 Youth, symbolizes our
    commitment to mobilizing and sharing our expertise with local players
    to strengthen inclusion.`,

    `Our team's aim is to actively contribute to the development and
    dissemination of good practices, underlining how crucial is the
    inclusion of excluded Young adults for everyone's future.`,
  ],

  heading: "In 2024, TEN4YOUTH Luxembourg counts:",

  missions: [
    {
      content: 1,
      title: "Awareness campaigns",
      description: "about Youth inclusion",
    },
    {
      content: 41,
      title: "People positively impacted",
      description: "by awareness campaigns regarding Youth inclusion",
    },
    {
      content: 15,
      title: "Volunteers",
      description: "including 67% of women",
    },
  ],
};





// for team data 
export const teamPages = [
  [
    {
      name: "Marc De Crouy-Chanel",
      role: "President",
      role1:
        "Entrepreneur and President of TEN4YOUTH Luxembourg, Marc has been supporting the inclusion of at-risk Youth for 15 years. Under his leadership, TEN4YOUTH Luxembourg co-finances projects in Asia and leads advocacy efforts, including the Agora 4 Youth initiative.",
      img: luxembourgimg1,
    },
    {
      name: "Jean-Marie Demeure",
      role: "Vice-president",
      role1:
        "A founding member of TEN4YOUTH and TEN4YOUTH Alliance, Jean-Marie brings his expertise in strategy, partnerships, and advocacy, backed by 30 years of experience in banking and wealth management.",
      img: luxembourgimg2,
    },
    {
      name: "Florian Mantovani",
      role: "Secretary",
      role1:
        "Florian is Vice President at Brown Brothers Harriman, an organization where philanthropy is at the core of its values, and which fosters a spirit of service among its employees.",
      img: luxembourgimg3,
    },
  ],
  [
    {
      name: "Elodie Vanesson",
      role: "Treasurer",
      role1:
        "With 17 years of experience in finance, Elodie is responsible for finance and projects at Colruyt Luxembourg and is a member of the Luxembourg Jazz Voices choir. She also shares her expertise with the TEN4YOUTH teams during field visits.",
      img: luxembourgimg4,
    },
    {
      name: "Samia Leguet",
      role: "Communication",
      role1:
        "As Project Manager at TEN4YOUTH Luxembourg for the past 5 years, Samia leverages her 30 years of experience in social and event project management. She coordinates communication, social media, and the Agora 4 Youth and Action Ecole projects.",
      img: luxembourgimg5,
    },
    {
      name: "Margaux Roure",
      role: "MAEE Project",
      role1:
        "Margaux began volunteering in 2018 with a service project in Argentina (8 months). In charge of project follow-up with the MAEE, she coordinates TEN4YOUTH Luxembourg's 2025 strategic plan while also working at Candriam.",
      img: luxembourgimg6,
    },
  ],
  [
    {
      name: "Valérie de Saintignon",
      role: "Action Ecole",
      role1:
        "A member of Action École, she shares her experience as a trainer and coach for at-risk Youth. As an external consultant for ADEM, she develops programs for young people. She is also the founder of the Shape UP project for ALDIC, supported by the Losch Foundation.",
      img: luxembourgimg7,
    },
    {
      name: "Christine Schmitt-Brach",
      role: "School Project (Action Ecole)",
      role1:
        "For over 18 years, Christine has been guiding young people (ages 15-30) in their life projects and towards employment. She specializes in coaching students and refugees, particularly in the Life.lu and ONIS projects. She also contributes her expertise to the Action École project.",
      img: luxembourgimg8,
    },
    {
      name: "Emine Din",
      role: "Projet Action Ecole",
      role1:
        "As a Principal Insurance Agent at Foyer, Emine was there at the beginning of the TEN4YOUTH adventure alongside Laure and Jean-Marc Delaporte. She is an active member of the Action École project.",
      img: luxembourgimg9,
    },
  ],
  [
    {
      name: "Nathalie Binet",
      role: "Administratrice, Agora 4 Youth",
      role1:
        "Natalie is a senior climate advisor at the European Investment Bank (EIB) and is involved in organizing Agora 4 Youth.",
      img: luxembourgimg10,
    },
    {
      name: "Adrien de Hautecloque",
      role: "School Project (Action Ecole)",
      role1:
        "A board member since 2014, Adrien is Chief of Staff and President of the Tribunal at the Court of Justice of the European Union, a non-governmental advisor to the French Competition Authority (RIC), a professor at the School of Regulation in Florence, and an associate researcher at the University of Paris-Dauphine.",
      img: luxembourgimg11,
    },
    {
      name: "Philippe Aymer",
      role: "Administrateur, gestion RH",
      role1:
        "Philippe is the Chief Financial Officer at BACKBONE, an investment company with a focus on social impact. He also manages Human Resources at TEN4YOUTH Luxembourg.",
      img: luxembourgimg12,
    },
  ],
];