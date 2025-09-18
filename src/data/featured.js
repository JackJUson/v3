import Netflix from '../assets/netflix.png';
import JacksonAI from '../assets/jacksonai.png';
import NFTMarket from '../assets/nftmarket.png';

export const featuredProjects = [
  {
    id: 1,
    title: "Jackson AI",
    description:
      'Jackson AI is a dynamic, real-time personal assistant that provides insights into my background, expertise, and projects!',
    techs: ['NextJs', 'TypeScript', 'OpenAI SDK', 'Radix UI'],
    github: 'https://github.com/JackJUson/jacksonai',
    live: 'https://jacksonai.vercel.app/',
    image: JacksonAI,
  },
  {
    id: 2,
    title: 'Netflix Clone',
    description:
      'Netflix is a subscription-based streaming service that allows our members to watch TV shows, movies and documentaries on an internet-connected device.',
    techs: ['React', 'NextJs', 'Recoil', 'Tailwind', 'Stripe'],
    github: 'https://github.com/JackJUson/netflix-clone',
    live: 'https://netflix-clone-six-vert.vercel.app/login',
    image: Netflix,
  },

  {
    id: 3,
    title: 'NFT Marketplace',
    description:
      'Online platform where users can buy, sell, and trade unique digital assets represented by NFTs. Utilizes Axios to fetch data from custom NFT API. Hosted by Vercel',
    techs: ['HTML', 'CSS', 'React', 'JavaScript', 'Vercel'],
    github: 'https://github.com/JackJUson/nft-marketplace',
    live: 'https://nft-marketplace-8sy8e3m9d-jackjuson.vercel.app/',
    image: NFTMarket,
  },
];
