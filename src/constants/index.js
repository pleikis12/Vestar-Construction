import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  terassos1,
  nightclub2,
  darbenai1,
  pasakele1,
  melnarage1,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "About Us",
    url: "#aboutus",
  },
  {
    id: "2",
    title: "Gallery",
    url: "#gallery",
  },
  {
    id: "3",
    title: "Location",
    url: "#location",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Klaipedoje",
  "Palangoje",
  "Gargzduose",
  "Ir Aplink",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const collabText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni voluptate cumque non. Incidunt ut.";

export const collabContent = [
  {
    id: "0",
    title: "Vidaus Darbus",
    text: collabText,
  },
  {
    id: "1",
    title: "Lauko Darbus",
  },
  {
    id: "2",
    title: "Renovacijos",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const benefits = [
  {
    id: "0",
    title: "Palangos Projektai",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni voluptate cumque non. Incidunt ut.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Klaipedos Projektai",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni voluptate cumque non. Incidunt ut.",
    backgroundUrl: "assets/klaipeda/melnerage/Melnarage4.jpg",
    iconUrl: benefitIcon2,
    imageUrl: melnarage1,
    light: true,
  },
  {
    id: "2",
    title: "Gargzdu Projektai",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni voluptate cumque non. Incidunt ut.",
    backgroundUrl: "assets/gargzdai/pasakele/Darzelis1.jpg",
    iconUrl: benefitIcon3,
    imageUrl: pasakele1,
  },
  {
    id: "3",
    title: "Anglijos Projektai",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni voluptate cumque non. Incidunt ut.",
    backgroundUrl: "assets/anglija/epping-nightclub/Nightclub2.jpg",
    iconUrl: benefitIcon3,
    imageUrl: nightclub2,
    light: true,
  },
  {
    id: "4",
    title: "Darbenu Projektai",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni voluptate cumque non. Incidunt ut.",
    backgroundUrl: "assets/darbenai/palangos-gatve/Darbenai1.jpg",
    iconUrl: benefitIcon3,
    imageUrl: darbenai1,
  },
  {
    id: "5",
    title: "Terassos",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni voluptate cumque non. Incidunt ut.",
    backgroundUrl: "assets/terassos/Terassos1.jpg",
    iconUrl: benefitIcon3,
    imageUrl: terassos1,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://facebook.com",
  },
];

export const pages = [
  {
    id: "0",
    title: "Palanga",
    url: "../pages/Palanga.jsx",
  },
];
