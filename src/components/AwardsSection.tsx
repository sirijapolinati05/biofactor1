import award1 from "@/assets/images/award-1.jpg";
import award2 from "@/assets/images/award-2.jpg";
import award3 from "@/assets/images/award-3.jpg";
import award4 from "@/assets/images/award-4.jpg";
import award6 from "@/assets/images/award-6.jpg";
import award7 from "@/assets/images/award-7.jpg";
import award8 from "@/assets/images/award-8.jpg";

import doodle from "@/assets/images/green-doodle.png";

import { CheckCircle } from "lucide-react";

const awards = [
  {
    image: award1,
    title: "MSME Chamber Leadership Excellence Award",
    subtitle:
      "Recognized for farmer-centric growth, research commitment & scalable innovations",
  },
  {
    image: award2,
    title: "MSME Awards 2024 - Best Life Science Company",
    subtitle:
      "Awarded for Best Life Science Company & Best Quality Product Impact at MSME Awards 2024.",
  },
  {
    image: award3,
    title: "Company of the Year 2025 - Caz Brain Pvt.Ltd",
    subtitle:
      "Awarded for Leadership in agricultural life sciences & science-driven solutions.",
  },
  {
    image: award4,
    title: "Business Excellence Award - NCRC",
    subtitle:
      "Honoured for Quality Innovation & Consumer trust in biofertilizers and plant nutrients",
  },
  {
    image: award1,
    title: "Global Excellence Awards 2025 - FRRC",
    subtitle:
      "Recognized internationally for excellence, research driven growth & global impact",
  },
  {
    image: award6,
    title: "Indian Icon Award 2024",
    subtitle:
      "Best Agritech Products Company — celebrating science-backed eco-friendly solutions.",
  },
  {
    image: award7,
    title: "IRIE Business Eminence Award",
    subtitle:
      "Honored for innovation, leadership & impact in sustainable agritech practices.",
  },
  {
    image: award8,
    title: "Novel Crop Nutrient Company — ABSA 2024",
    subtitle:
      "Recognized for innovation in crop nutrition at Agri Business Summit & Awards 2024.",
  },
];

const AwardsSection = () => {
  return (
    <section className="relative pt-6 pb-16 bg-[#e8f3ea] overflow-hidden">

      {/* BACKGROUND DOODLES */}
      <img
        src={doodle}
        alt=""
        className="absolute right-20 top-6 w-24 opacity-40 pointer-events-none"
      />

      <img
        src={doodle}
        alt=""
        className="absolute right-10 top-28 w-20 opacity-40 pointer-events-none"
      />

      <img
        src={doodle}
        alt=""
        className="absolute right-2 top-44 w-16 opacity-40 pointer-events-none"
      />

      <div className="max-w-[1200px] mx-auto px-6 text-center">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="flex items-center gap-2 px-6 py-2 rounded-full bg-green-200 text-green-800 font-semibold">
            <CheckCircle size={18} />
            Awards
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl font-bold mb-4">
          Awards & Recognitions
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Proud milestones reflecting our journey of scientific excellence,
          innovation, and sustainable agricultural progress.
        </p>

      </div>

      {/* SCROLL AREA */}
      <div className="overflow-hidden scroll-container">

        <div className="flex animate-scroll">

          {[...awards, ...awards].map((award, i) => (

            <div key={i} className="min-w-[300px] mr-12 text-center">

              <div className="w-full h-[180px] flex items-center justify-center mb-5">
                <img
                  src={award.image}
                  alt={award.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <h3 className="text-lg font-bold mb-2">
                {award.title}
              </h3>

              <p className="text-sm text-gray-600 max-w-[260px] mx-auto">
                {award.subtitle}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Animation */}
      <style>{`
        .animate-scroll {
          animation: scroll 10s linear infinite;
          width: max-content;
        }

        .scroll-container:hover .animate-scroll {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

    </section>
  );
};

export default AwardsSection;