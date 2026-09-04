import { photos } from "@/lib/media";

export const studio = {
  name: "monolith studio",
  tagline: "MONOLITH STUDIO, Contemporary Tattoo Studio Based in Brooklyn, NYC",
  address: "77 Washington Avenue, Brooklyn, NYC, USA, 11205",
  mapUrl: "https://maps.app.goo.gl/L1tDdWUg9J1pGYBx5",
  email: "hello@monolithstudio.com",
  career: "career@monolithstudio.com",
  instagram: "https://instagram.com/monolithstudio",
  youtube: "https://www.youtube.com/@monolithstudionyc",
  tiktok: "https://www.tiktok.com/@monolithstudio",
};

export type Artist = {
  name: string;
  role: "Co-Founder" | "Resident Artist" | "Resident Guest";
  styles: string[];
  short: string;
  image?: string | undefined;
};

export const artists: Artist[] = [
  { name: "Okan Uckun", role: "Co-Founder", styles: ["Minimal", "Fine Line", "Geometric"], short: "Okan", image: photos["okan-uckun"] },
  { name: "Oscar Akermo", role: "Co-Founder", styles: ["Micro Realism", "Fine Line", "Realism"], short: "Oscar", image: photos["oscar-akermo"] },
  { name: "Stevo", role: "Resident Artist", styles: ["Realism", "Black and Grey"], short: "Stevo", image: photos["stevo"] },
  { name: "Amalie Arsinevici", role: "Resident Artist", styles: ["Fine Line", "Realism", "Black and Grey"], short: "Amalie", image: photos["amalie-arsinevici"] },
  { name: "George Kalodimas", role: "Resident Artist", styles: ["Ornamental", "Black Work", "Geometric"], short: "George Kalodimas", image: photos["george-kalodimas"] },
  { name: "Corey Gonzales", role: "Resident Artist", styles: ["Fine Line", "Black and Grey", "All Styles"], short: "Corey", image: photos["corey-gonzales"] },
  { name: "JZ", role: "Resident Artist", styles: ["Black and Grey", "Micro Realism", "Fine Line"], short: "JZ", image: photos["jz"] },
  { name: "RK", role: "Resident Artist", styles: ["Stick and Poke", "Fine Line", "Minimal"], short: "RK" },
  { name: "DIM", role: "Resident Artist", styles: ["Realism", "Micro Realism"], short: "DIM", image: photos["dim"] },
  { name: "Kaylee Ruiz", role: "Resident Artist", styles: ["Ornamental", "Fine Line"], short: "Kaylee", image: photos["kaylee-ruiz"] },
  { name: "Oksu", role: "Resident Artist", styles: ["Micro Realism", "Fine Line", "Realism"], short: "Oksu", image: photos["oksu"] },
  { name: "Ksusha", role: "Resident Artist", styles: ["Fine Line"], short: "Ksusha", image: photos["ksusha"] },
  { name: "Low", role: "Resident Artist", styles: ["Lettering", "Abstract", "Blackwork Tattoo"], short: "Low", image: photos["low"] },
  { name: "Noore Yazigi", role: "Resident Artist", styles: ["Fine Line", "Lettering"], short: "Noore", image: photos["noore-yazigi"] },
  { name: "Ari", role: "Resident Artist", styles: ["Fine Line", "Micro Realism"], short: "Ari", image: photos["ari"] },
  { name: "Nadia Andriu", role: "Resident Artist", styles: ["Fine Line"], short: "Nadia", image: photos["nadia-andriu"] },
  { name: "Maxime Plescia Buchi", role: "Resident Artist", styles: ["Geometric", "Engraving Tattoo", "Blackwork Tattoo"], short: "Maxime Plescia Buchi", image: photos["maxime-plescia-buchi"] },
  { name: "Constanza", role: "Resident Artist", styles: ["Fine Line", "Black and Grey", "Micro Realism"], short: "Constanza", image: photos["constanza"] },
  { name: "Sam", role: "Resident Artist", styles: ["Fine Line"], short: "Sam", image: photos["sam"] },
  { name: "Mo Ganji", role: "Resident Guest", styles: ["Single Line", "Experimental"], short: "Mo" },
  { name: "Denizhan Ozkar", role: "Resident Guest", styles: ["Fine Line", "Geometric", "Black Work"], short: "Denizhan", image: photos["denizhan-ozkar"] },
  { name: "XSonSeven", role: "Resident Guest", styles: ["Fine Line", "Micro Realism", "Realism"], short: "XSonSeven", image: photos["xsonseven"] },
  { name: "Gerrit Kalnins", role: "Resident Guest", styles: ["Fine Line", "Micro Realism"], short: "Gerrit", image: photos["gerrit-kalnins"] },
  { name: "Edvin Tedebring", role: "Resident Guest", styles: ["Abstract"], short: "Edvin", image: photos["edvin-tedebring"] },
  { name: "Balazs Bercsenyi", role: "Resident Guest", styles: ["Micro Realism", "Fine Line"], short: "Balazs", image: photos["balazs-bercsenyi"] },
];

export const articles = [
  {
    category: "Tattoos",
    date: "November 26, 2024",
    read: "5 min read",
    title: "Tattoo Ideas for Women: 50+ Designs & Inspiration",
    image: photos["tattoo-ideas-for-women-50-designs-amp-in"],
  },
  {
    category: "Tattoos",
    date: "June 12, 2025",
    read: "5 min read",
    title: "Chrome Tattoos: The Hyper-Polished Future of Ink",
    image: photos["chrome-tattoos-the-hyper-polished-future"],
  },
  {
    category: "Tattoos",
    date: "March 14, 2026",
    read: "6 min read",
    title: "Tattoo Sleeve Ideas: Full, Half & Arm Sleeve Designs",
    image: photos["tattoo-sleeve-ideas-full-half-amp-arm-sl"],
  },
];

export const reviews = [
  {
    body: "I had been researching tattoos for a while and Okan's work kept popping out. I wanted something that was clean, detailed, and good quality. Okan delivered the goods! He is not only skilled at his work, he's also nice. He took his time explaining the process at the beginning of the appointment and at each step he would let me know what he was doing and why. The whole time I had the feeling I was in very competent hands! The studio in Brooklyn is amazing and the rest of his team were really friendly. You will not be disappointed!",
    author: "Stephen Grimes",
  },
  {
    body: "I just had the opportunity to work with Okan and I must say it was thee best tattoo experience EVER. The process to book was smooth and easy. And the location is stylish and inviting. I was nervous about pain but I must say I almost fell asleep. Very light handed. Now as far as the tattoo goes, Okan's attention to detail is second to none — he took into consideration everything I asked for and created a work of art. I'm proud to say I have a 1 of 1 piece from Okan. He's a genius and a true master of his craft!!!",
    author: "DAPPERDUDE",
  },
  {
    body: "A studio with fantastic vibes and full of great artists. If you are looking for a place to get a great fine-line and/or micro-realistic tattoo, this is the place. Also, the team is amazing and super welcoming.",
    author: "Ozan Sapso",
  },
];

export const news = [
  {
    title:
      "'It's just nice to go see a friend': Why Marco Scandella is willing to cross the Atlantic for a specific tattoo artist",
    date: "November 12, 2019",
    short: "Nov 12, 2019",
    image: photos["it-s-just-nice-to-go-see-a-friend-why-ma"],
  },
  {
    title:
      "Suarez lanza su nueva colección Orion con Okan Uckun inspirada en el mundo del tatuaje",
    date: "July 19, 2018",
    short: "Jul 19, 2018",
  },
];

export const instagramShots = [
  photos["monolith-studio-s-instagram-page"],
  photos["monolith-studio-s-instagram-page-2"],
  photos["ig-3"],
  photos["tattoo-ideas-for-women-50-designs-amp-in"],
  photos["chrome-tattoos-the-hyper-polished-future"],
  photos["tattoo-sleeve-ideas-full-half-amp-arm-sl"],
].filter(Boolean) as string[];

export const tattooStyles = [
  "fine line",
  "single line",
  "micro realism",
  "ornamental",
  "stick & poke",
  "patchwork",
  "lettering",
  "mandala",
  "minimalist",
  "geometric",
  "realism",
  "american traditional",
  "abstract",
  "cybersigilism",
  "flower",
];
