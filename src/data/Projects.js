import c6 from "../images/C6Credits.png";
import repeat from "../images/Repeat.png";
import bountybridge from "../images/bountybridge.png";

const projects = [
  {
    id: 34,
    title: "Silensis",
    description: "A perpetual futures DEX on Solana.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/Silensis",
  },
  {
    id: 35,
    title: "VeilPay",
    description: "Verified Payroll using ZK CREDENTIALS.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/VeilPay",
  },
  {
    id: 1,
    title: "Vestige",
    description: "Privacy-preserving token launchpad on Solana.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/vestige",
  },
  {
    id: 2,
    title: "Relay",
    description:
      "One-click cross-chain bridge to HyperEVM and Hyperliquid powered by LI.FI.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/relay",
  },
  {
    id: 3,
    title: "Pact",
    description: "DeFi primitive for stake-backed position commitments.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/Pact",
  },
  {
    id: 4,
    title: "Vyper Guides",
    description: "Starter guide for Vyper smart contracts.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/vyper-tutorials",
  },
  {
    id: 5,
    title: "Lynq",
    description: "Programmable treasury & lending platform.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/lynq.",
  },
  {
    id: 6,
    title: "Drop",
    description: "Decentralized IP asset monetization platform.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/Drop",
  },
  {
    id: 7,
    title: "Noro",
    description: "Decentralized prediction markets with AI-powered analysis.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/noro",
  },
  {
    id: 8,
    title: "Flux",
    description:
      "A privacy-preserving cross-chain swap between Zcash and any asset on the Aztec network.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/flux",
  },
  {
    id: 9,
    title: "Stream402",
    description:
      "A platform for monetizing digital content using Solana payments via HTTP 402 Payment protocol.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/Stream402",
  },
  {
    id: 10,
    title: "Ledger",
    description: "Immutable contract management platform.",
    imageUrl: null,
    codeUrl: "https://github.com/MadhuVarshaP/Ledger",
  },
  {
    id: 11,
    title: "Ownly",
    description: "IP asset management platform.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/Ownly",
  },
  {
    id: 12,
    title: "DeCT",
    description: "Monetize your health data.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/DeCT",
  },
  {
    id: 13,
    title: "Micro Gift",
    description:
      "Send surprise crypto gifts that bring smiles across the digital world.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/Micro-Gift",
  },
  {
    id: 14,
    title: "CoPass",
    description: "A shared travel planning platform.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/CoPass-expo",
  },
  {
    id: 15,
    title: "Proof of Witness",
    description: "A narrative-first zk builder community.",
    imageUrl: null,
    codeUrl: "https://github.com/MadhuVarshaP/PoW",
  },
  {
    id: 16,
    title: "Chain Bento",
    description: "Your Web3 developer identity onchain.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/ChainBento",
  },
  {
    id: 17,
    title: "Git Star AVS",
    description: "GitHub Star Checker AVS using the Othentic Stack.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/git-star-fetch-avs",
  },
  {
    id: 18,
    title: "Noot Militia",
    description:
      "A Web3-powered 1v1 multiplayer shooter game inspired by MiniMilitia.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/Noot-Militia",
  },
  {
    id: 19,
    title: "ReBTC",
    description: "The next-gen BTC yield & liquidity protocol.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/ReBTC",
  },
  {
    id: 20,
    title: "WagerX",
    description: "A social prediction market for friend groups.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/wagerX",
  },
  {
    id: 21,
    title: "Cultura",
    description:
      "Innovative platform that leverages AI to curate trending cultural topics.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/cultura",
  },
  {
    id: 22,
    title: "Vivi",
    description:
      "Decentralized community notes platform with voice and bounty features.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/Vivi",
  },
  {
    id: 23,
    title: "Task Hive",
    description:
      "Autonomous task executor with AI-powered onchain identity and shared graph.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/TaskHive.ai",
  },
  {
    id: 24,
    title: "Kaushik Chain",
    description: "Arbitrum Nitro rollup contracts — Orbit Avail Kaushik Chain.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/Orbit-Avail-Kaushik-Chain",
  },
  {
    id: 25,
    title: "Traffic Run",
    description: "A traffic run game using the Stackr Labs MRU.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/traffic_run",
  },
  {
    id: 26,
    title: "Scroll Grants",
    description: "A community-driven funding platform.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/scrollGrants",
  },
  {
    id: 27,
    title: "C6 Credits",
    description:
      "Reduce your carbon footprint with seamless tokenized credits.",
    imageUrl: c6,
    codeUrl: "https://github.com/vmmuthu31/C6Credits",
    demoUrl: "https://c6credits.vercel.app/",
  },
  {
    id: 28,
    title: "BlockEstate",
    description: "Decentralized real estate platform.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/BlockEstate_Frontend",
  },
  {
    id: 29,
    title: "Bounty Bridge",
    description: "Task & earn: transforming local aid with decentralization.",
    imageUrl: bountybridge,
    codeUrl: "https://github.com/MadhuVarshaP/BountyBridge-frontend",
  },
  {
    id: 30,
    title: "Repeat",
    description:
      "Stake and bet on your habits. Habit tracker with challenges and staking.",
    imageUrl: repeat,
    codeUrl: "https://github.com/KaushikKC/Repeat_App",
  },
  {
    id: 31,
    title: "Regen",
    description: "A decentralized loan management platform for farmers.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/Regen-frontend",
  },
  {
    id: 32,
    title: "Milestone",
    description: "Review proof system.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/Miestone_Frontend",
  },
  {
    id: 33,
    title: "300s",
    description: "Betting platform.",
    imageUrl: null,
    codeUrl: "https://github.com/KaushikKC/300s",
  },
];

export default projects;
