import WonderCard from "./WonderCard";

const WONDERS = [
  {
    title: "Great Wall of China",
    location: "China",
    image: "/wonders/great-wall.jpg",
    year: "7th c. BC – 16th c.",
    description:
      "A series of fortifications stretching thousands of miles across northern China, built to protect and unify territories.",
  },
  {
    title: "Petra",
    location: "Jordan",
    image: "/wonders/petra.jpg",
    year: "5th c. BC",
    description:
      "The rose-red city carved into sandstone cliffs, once a thriving Nabatean capital and key trade hub.",
  },
  {
    title: "Christ the Redeemer",
    location: "Rio de Janeiro, Brazil",
    image: "/wonders/christ-redeemer.jpg",
    year: "1931",
    description:
      "An iconic Art Deco statue of Jesus overlooking Rio, symbolizing peace and welcoming visitors worldwide.",
  },
  {
    title: "Machu Picchu",
    location: "Peru",
    image: "/wonders/machu-picchu.jpg",
    year: "15th c.",
    description:
      "The mysterious Incan citadel set high in the Andes, renowned for dry-stone walls and panoramic views.",
  },
  {
    title: "Chichén Itzá",
    location: "Yucatán, Mexico",
    image: "/wonders/chichen-itza.jpg",
    year: "c. 600–1200",
    description:
      "A large Maya city famed for El Castillo pyramid, astronomical precision, and ceremonial ball courts.",
  },
  {
    title: "The Roman Colosseum",
    location: "Rome, Italy",
    image: "/wonders/colosseum.jpg",
    year: "AD 80",
    description:
      "The grand amphitheater of the Roman Empire, stage to gladiators, spectacles, and public events.",
  },
  {
    title: "Taj Mahal",
    location: "Agra, India",
    image: "/wonders/taj-mahal.jpg",
    year: "1653",
    description:
      "A marble mausoleum built by Emperor Shah Jahan in memory of Mumtaz Mahal, an epitome of love and symmetry.",
  },
];

export default function WondersGrid() {
  return (
    <section id="wonders" className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">The Seven Wonders</h2>
            <p className="text-slate-600 mt-2">A curated gallery with quick facts and locations</p>
          </div>
          <a href="#about" className="text-sm text-slate-600 hover:text-slate-900">Learn more</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WONDERS.map((w) => (
            <WonderCard key={w.title} {...w} />
          ))}
        </div>
      </div>
    </section>
  );
}
