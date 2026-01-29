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
    label: "About",
    href: "/about-us",
  },

  {
    label: "Our Covers",
    href: "/our-covers",
  },

  {
    label: "Contact Us",
    href: "/contact",
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
    label: "+254712345678",
    title: "NAIROBI Phone",
    link: `tel:+254712345678`,
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

export const whyus = [
  {
    id: 1,
    title: "Best Prices",
    icon: PriceIcon,
    text: "Every client is unique, and so are our travel packages. We customize your journey to meet your exact needs. ",
  },
  {
    id: 2,
    title: "24/7 Support",
    text: "Our team is available around the clock to assist with your travel plans. ",
    icon: SupportIcon,
  },
  {
    id: 3,
    title: "Global Network",
    text: "We work with a global network of airlines, hotels, and tour operators to bring you the best options. ",
    icon: NetworkIcon,
  },
  {
    id: 4,
    title: "Competitive Rates",
    text: "Enjoy premium travel services without breaking the bank.",
    icon: MoneyIcon,
  },
  {
    id: 5,
    title: "Luxury Travel Options",
    text: "From private jets to bespoke tours, we offer the best in luxury travel.",
    icon: JetIcon,
  },
];
export const agentsAirlines = [
  {
    name: "Flyals",
    logo: "flyals.webp",
    bg: "white",
  },
  {
    name: "Skyward Express",
    logo: "skyward.png",
    bg: "white",
  },
  {
    name: "Freedom Airline",
    logo: "freedom-airline.png",
    bg: "#201D48",
  },
  {
    name: "Safarilink",
    logo: "safari-link.png",
    bg: "white",
  },
  {
    name: "Air Kenya",
    logo: "airkenya.png",
    bg: "white",
  },
  {
    name: "RenegadeAir",
    logo: "renegadeair.png",
    bg: "white",
  },
  {
    name: "FLY748",
    logo: "fly748.png",

    bg: "white",
  },
  {
    name: "Uganda Airlines",
    logo: "uganda-airlines.png",
    bg: "white",
  },
  {
    name: "Air Tanzania",
    logo: "airtz.png",
    bg: "white",
  },
  {
    name: "Jambojet",
    logo: "jambojet.svg",
    bg: "white",
  },
  {
    name: "Kenya Airways",
    logo: "kenya-airways.svg",
    bg: "#E84724",
  },
  {
    name: "Lufthansa",
    logo: "lufthansa.svg",
    bg: "#05184E",
  },
  {
    name: "Swiss",
    logo: "swiss.svg",
    bg: "white",
  },
  {
    name: "I-FLY Air",
    logo: "iflyair.png",
    bg: "white",
  },
  {
    name: "Qatar Airways",
    logo: "qatar-airways.svg",
    bg: "black",
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
