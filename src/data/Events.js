// Events: 4 separate events (X posts from @0xkaushik_k) + 1 Proof of Witness community card
// Update title/description/date/venue for events 1–4 from the X posts:
//   https://x.com/0xkaushik_k/status/1942124893832708357
//   https://x.com/0xkaushik_k/status/1911701740799263008
//   https://x.com/0xkaushik_k/status/1894763979094061106
//   https://x.com/0xkaushik_k/status/1884962114944831818
// Proof of Witness: https://x.com/ProofOfWitness

const events = [
  {
    id: 1,
    title: "Story Protocol meetup ",
    description: "We hosted a Story Protocol meetup @HashedEM in Bangalore ",
    date: "JULY, 2025",
    venue: "Bangalore, India",
    imageUrl:
      "https://pbs.twimg.com/media/GvPQSixboAA1_PG?format=jpg&name=large",
    proofUrl: "https://x.com/0xkaushik_k/status/1942124893832708357",
  },
  {
    id: 2,
    title: "Restaking Day",
    description: "Successfully hosted Restaking Day Chennai by @eigenlayer!",
    date: "APRIL, 2025",
    venue: "Chennai, India",
    imageUrl:
      "https://pbs.twimg.com/media/Goe6lSSXIAAB2Va?format=jpg&name=large",
    proofUrl: "https://x.com/0xkaushik_k/status/1911701740799263008",
  },
  {
    id: 3,
    title: "Build on farcaster",
    description: "Onchain social is here !!",
    date: "FEBRUARY, 2025",
    venue: "Chennai, India",
    imageUrl:
      "https://pbs.twimg.com/media/GkuNq-_XoAAtf38?format=jpg&name=large",
    proofUrl: "https://x.com/0xkaushik_k/status/1894763979094061106",
  },
  {
    id: 4,
    title: "AI & Onchain AI Agents",
    description: "Had an amazing time diving deep into AI & Onchain AI Agents!",
    date: "JANUARY, 2025",
    venue: "Chennai, India",
    imageUrl:
      "https://pbs.twimg.com/media/Gii7DBwbMAAWzYg?format=jpg&name=large",
    proofUrl: "https://x.com/0xkaushik_k/status/1884962114944831818",
  },
  {
    id: 5,
    title: "Proof of Witness",
    description:
      "New ZK builder community. 4 events so far. Join to learn and participate.",
    date: "Community",
    venue: "OnChain",
    imageUrl:
      "https://pbs.twimg.com/profile_banners/1928330757833117697/1748950848/1500x500",
    proofUrl: "https://x.com/ProofOfWitness",
    isCommunity: true,
  },
  // Previous events (at bottom)
  {
    id: 6,
    title: "HACK ONCHAIN DAY",
    description:
      "An exciting meetup with blockchain enthusiasts to discuss the future of decentralized technologies.",
    date: "OCTOBER, 2024",
    venue: "Chennai, India",
    imageUrl:
      "https://pbs.twimg.com/media/Ga5pMUmbYAAzJAn?format=jpg&name=large",
    proofUrl: "https://x.com/Kaushikk1704/status/1850411035267907679",
  },
  {
    id: 7,
    title: "WHAT TO BUILD ON DEPIN",
    description:
      "This informal gathering for explores and builders in DePIN and blockchain.",
    date: "JULY, 2024",
    venue: "Chennai, Bangalore, Kochi, Hyderabad, Pune, Goa",
    imageUrl:
      "https://pbs.twimg.com/media/GR3KPTyacAAm4er?format=jpg&name=4096x4096",
    proofUrl: "https://x.com/Kaushikk1704/status/1809826242490708440",
  },
  {
    id: 8,
    title: "BERACHAIN MEETUP",
    description: "Hosted Beratrail - The Indic Edition developer meet-up",
    date: "JUNE 2024",
    venue: "Chennai, India",
    imageUrl:
      "https://pbs.twimg.com/media/GQrveOdasAAB0Ty?format=jpg&name=4096x4096",
    proofUrl: "https://x.com/Kaushikk1704/status/1804518755197960247",
  },
];

export default events;
