import Netflix from "../assets/netflix.png";
import Twitter from "../assets/twitter.png";
import NFTMarket from "../assets/nftmarket.png";

export const featuredProjects = [
  {
    id: 1,
    title: "Netflix Clone",
    description:
      "Netflix is a subscription-based streaming service that allows our members to watch TV shows, movies and documentaries on an internet-connected device.",
    techs: ["React", "NextJs", "Recoil", "Tailwind", "Stripe"],
    github: "https://github.com/JackJUson/netflix-clone",
    live: "https://netflix-clone-six-vert.vercel.app/login",
    image: Netflix,
  },
  {
    id: 2,
    title: "Twitter Clone",
    description:
      "Twitter is a social media application where users can post and share their thoughts, feelings or just talk about something they are passionate about.",
    techs: ["React", "Recoil", "NodeJs", "Firebase", "Next Authentication"],
    github: "https://github.com/JackJUson/twitter-clone",
    live: "https://twitter-clone-jackjuson.vercel.app/",
    image: Twitter,
  },
  {
    id: 3,
    title: "NFT Marketplace",
    description: "Online platform where users can buy, sell, and trade unique digital assets represented by NFTs. Utilises Axios to fetch data from custom NFT api. Hosted by Vercel",
    techs: ["HTML", "CSS", "React", "JavaScript", "Vercel"],
    github: "https://github.com/JackJUson/nft-marketplace",
    live: "https://nft-marketplace-8sy8e3m9d-jackjuson.vercel.app/",
    image: NFTMarket,
  },
];
