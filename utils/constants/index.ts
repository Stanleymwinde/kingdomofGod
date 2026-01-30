import { CONTACT_EMAIL, MAPS_URL } from "@/config";
import {
  FacebookIcon,
  FireIcon,
  InstagramIcon,
  JetIcon,
  LinkedinIcon,
  LocationIcon,
  MailIcon,
  MoneyIcon,
  NetworkIcon,
  PhoneIcon,
  PickupIcon,
  PriceIcon,
  SupportIcon,
  TiktokIcon,
  TrainedPerson,
  TravelInfo,
  XIcon,
  YoutubeIcon,
} from "../icons";
import {
  FiGitMerge,
  FiGitPullRequest,
  FiTarget,
  FiXCircle,
} from "react-icons/fi";

export const marginX = { base: "3%", sm: "5%", md: "6%", lg: "8%" };

export const aboutData = [
  {
    label: "Fire Camp",
    icon: FireIcon,
    id: 1,
  },
  {
    label: "Trained Guides",
    icon: TrainedPerson,
    id: 2,
  },
  {
    label: "Travel Information",
    icon: TravelInfo,
    id: 3,
  },
  {
    label: "Pickup And Drop",
    icon: PickupIcon,
    id: 4,
  },
];

export const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
  },

  {
    label: "Our Conviction",
    href: "/Our-conviction",
  },

  {
    label: "The Kingdom",
    href: "/the-kingdom",
  },
  {
    label: "Christ The King",
    href: "/christ-the-king",
  },
  {
    label: "Contact Us",
    href: "/Contact-us",
  },
];

export const contactsData = [
  {
    label: CONTACT_EMAIL,
    title: "Email Address",
    icon: MailIcon,
    link: `mailto:${CONTACT_EMAIL}`,
  },
  {
    label: "+254727767111  / +254725766634",
    title: "NAIROBI Phone",
    link: `tel:+254727767111`,
    icon: PhoneIcon,
  },

  {
    icon: LocationIcon,
    title: "Address",
    label: `Office Location comes in here
            `,
    link: MAPS_URL,
  },
];
export const socials = [
  {
    icon: FacebookIcon,
    link: "#",
    name: "Facebook",
  },
  {
    icon: TiktokIcon,
    link: "#",
    name: "Tiktok",
  },
  {
    icon: InstagramIcon,
    link: "#",
    name: "Instagram",
  },
  {
    icon: LinkedinIcon,
    link: "#",
    name: "Linkedin",
  },
  // {
  //   icon: XIcon,
  //   link: "https://twitter.com/",
  //   name: "Twitter",
  // },
  // {
  //   icon: YoutubeIcon,
  //   link: "https://youtube.com",
  //   name: "Youtube",
  // },
];

export const teamsocials = [
  {
    icon: FacebookIcon,
    link: "https://www.facebook.com/",
    name: "Facebook",
  },
  {
    icon: XIcon,
    link: "https://twitter.com/",
    name: "Twitter",
  },
  {
    icon: InstagramIcon,
    link: "https://www.instagram.com//",
    name: "Instagram",
  },
  {
    icon: LinkedinIcon,
    link: "https://www.linkedin.com/company/",
    name: "Linkedin",
  },
  {
    icon: YoutubeIcon,
    link: "https://youtube.com",
    name: "Youtube",
  },
];

export const team = [
  {
    name: "Kendi Mwabila",
    role: "CEO",
    image: "/team1.jpg",
    socials: [
      {
        icon: FacebookIcon,
        link: "https://www.facebook.com/",
        name: "Facebook",
      },
      {
        icon: XIcon,
        link: "https://twitter.com/",
        name: "Twitter",
      },
      {
        icon: InstagramIcon,
        link: "https://www.instagram.com//",
        name: "Instagram",
      },
      {
        icon: LinkedinIcon,
        link: "https://www.linkedin.com/company/",
        name: "Linkedin",
      },
      {
        icon: YoutubeIcon,
        link: "https://youtube.com",
        name: "Youtube",
      },
    ],
  },
  {
    name: "Nancy Kingori",
    role: "Travel Consultants",
    image: "/team2.jpg",
    socials: [
      {
        icon: FacebookIcon,
        link: "https://www.facebook.com/",
        name: "Facebook",
      },
      {
        icon: XIcon,
        link: "https://twitter.com/",
        name: "Twitter",
      },
      {
        icon: InstagramIcon,
        link: "https://www.instagram.com//",
        name: "Instagram",
      },
      {
        icon: LinkedinIcon,
        link: "https://www.linkedin.com/company/",
        name: "Linkedin",
      },
      {
        icon: YoutubeIcon,
        link: "https://youtube.com",
        name: "Youtube",
      },
    ],
  },
  {
    name: "Vince Gesire",
    role: "COO",
    image: "/team3.jpg",
    socials: [
      {
        icon: FacebookIcon,
        link: "https://www.facebook.com/",
        name: "Facebook",
      },
      {
        icon: XIcon,
        link: "https://twitter.com/",
        name: "Twitter",
      },
      {
        icon: InstagramIcon,
        link: "https://www.instagram.com//",
        name: "Instagram",
      },
      {
        icon: LinkedinIcon,
        link: "https://www.linkedin.com/company/",
        name: "Linkedin",
      },
      {
        icon: YoutubeIcon,
        link: "https://youtube.com",
        name: "Youtube",
      },
    ],
  },
  {
    name: "Linet Muthoni",
    role: "CFO",
    image: "/team4.jpg",
    socials: [
      {
        icon: FacebookIcon,
        link: "https://www.facebook.com/",
        name: "Facebook",
      },
      {
        icon: XIcon,
        link: "https://twitter.com/",
        name: "Twitter",
      },
      {
        icon: InstagramIcon,
        link: "https://www.instagram.com//",
        name: "Instagram",
      },
      {
        icon: LinkedinIcon,
        link: "https://www.linkedin.com/company/",
        name: "Linkedin",
      },
      {
        icon: YoutubeIcon,
        link: "https://youtube.com",
        name: "Youtube",
      },
    ],
  },
];

export const FaqsData = [
  {
    value: "a",
    title: "What is the Kingdom of God?",
    text: "The Kingdom of God is God’s eternal government—established before time, revealed through Jesus Christ, and advancing on earth through divine authority, not human systems.",
  },
  {
    value: "b",
    title: "Who is the King of this Kingdom?",
    text: "Jesus Christ alone is the King of Kings and Lord of Lords. He is the rightful ruler of heaven and earth and the builder of the Ekklesia.",
  },
  {
    value: "c",
    title: "Is the Kingdom of God the same as a church or religion?",
    text: "No. The Kingdom of God is not a religion, denomination, ministry, or movement. It is God’s original governing system, from which the church (Ekklesia) derives its purpose and authority.",
  },
  {
    value: "d",
    title: "What is the Ekklesia?",
    text: "The Ekklesia is the called-out legislative assembly of the Kingdom—citizens authorized by Christ to represent His government on earth.",
  },
  {
    value: "e",
    title: "What does it mean to pledge allegiance to the Kingdom of God?",
    text: "It means full submission, loyalty, and obedience to God’s rule above all earthly systems, ideologies, cultures, and personal ambitions.",
  },
  {
    value: "f",
    title: "What do you renounce in order to represent the Kingdom?",
    text: "We renounce self-rule, religious traditions that replace truth, man-made systems that oppose God’s authority, and any allegiance that competes with Christ’s Lordship.",
  },
  {
    value: "g",
    title: "Is the Kingdom of God political?",
    text: "The Kingdom of God is governmental, not political. It transcends earthly politics and operates by divine law, righteousness, justice, and truth.",
  },
  {
    value: "h",
    title: "What is divine authority?",
    text: "Divine authority is the delegated right given by God to His Son and extended to His citizens to represent heaven’s will on earth within assigned domains.",
  },
  {
    value: "i",
    title: "How does the Kingdom of God affect daily life?",
    text: "The Kingdom influences every area of life—identity, leadership, family, work, governance, stewardship, culture, and purpose—bringing alignment with heaven’s design.",
  },
  {
    value: "j",
    title: "Is salvation connected to the Kingdom?",
    text: "Yes. Salvation restores humanity back to citizenship in God’s Kingdom, reconciling us to the King and restoring our original purpose.",
  },
  {
    value: "k",
    title: "What is repentance in Kingdom terms?",
    text: "Repentance is a complete change of mind—from independence to submission—realigning one’s thinking, values, and lifestyle with Kingdom truth.",
  },
  {
    value: "l",
    title: "What is the mission of the Kingdom?",
    text: "The mission is to reveal, establish, and advance God’s rule on earth until His will is done on earth as it is in heaven.",
  },
  {
    value: "m",
    title: "How does the Kingdom differ from worldly systems?",
    text: "Worldly systems are driven by power, control, and self-interest. The Kingdom operates by righteousness, justice, servant leadership, and divine order.",
  },
  {
    value: "n",
    title: "Who can become a citizen of the Kingdom of God?",
    text: "Anyone who submits to the Lordship of Jesus Christ and embraces God’s rule becomes a citizen of the Kingdom, regardless of background or status.",
  },
  {
    value: "o",
    title: "What does it mean to represent the Kingdom on earth?",
    text: "It means living as an ambassador—reflecting the King’s character, enforcing His principles, and advancing His agenda in every sphere of influence.",
  },
  {
    value: "p",
    title: "What is the ultimate goal of the Kingdom?",
    text: "The ultimate goal is the full restoration of God’s rule over creation, the reconciliation of humanity to the King, and the manifestation of His glory in all things.",
  },
];

export const renounceItems = [
  {
    icon: FiTarget,
    title:
      "All forms of personal, denominational, institutional, and human-centered kingdoms",
    description:
      "We reject any man-made systems that exalt themselves above God's divine order.",
  },
  {
    icon: FiGitMerge,
    title: "Claiming ownership of the Kingdom of God",
    description:
      "The Kingdom belongs to God alone - we are merely stewards and ambassadors.",
  },
  {
    icon: FiGitPullRequest,
    title: "Competing with the Kingdom",
    description:
      "We do not seek to build our own platforms or rival God's government.",
  },
  {
    icon: FiXCircle,
    title: "Replacing the Kingdom with human constructs",
    description:
      "Human wisdom, programs, or institutions cannot substitute God's eternal government.",
  },
];
