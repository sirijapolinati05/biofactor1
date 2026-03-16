import aboutImg from "@/assets/images/microbes-about.jpg";
import { CheckCircle } from "lucide-react";

interface Item {
  id: number;
  text: string;
}

const items: Item[] = [
  {
    id: 1,
    text: "Beneath the soil exists a living ecosystem where microbes, plant roots, and soil interact to support healthy plant growth.",
  },
  {
    id: 2,
    text: "This natural balance once maintained fertile soils and sustainable agricultural productivity.",
  },
  {
    id: 3,
    text: "However, decades of intensive farming and excessive use of chemical fertilizers and pesticides have disrupted this ecosystem.",
  },
  {
    id: 4,
    text: "As soil health declines, crop productivity becomes uncertain and the risk of global food insecurity increases.",
  },
];

const AboutMicrobes: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-green-100 via-green-50 to-green-50 pt-20 pb-8 overflow-x-hidden">

      <div className="max-w-[1200px] mx-auto px-4">

        <div className="flex justify-center mb-16">
          <span className="flex items-center gap-2 px-6 py-2 rounded-full bg-green-200 text-green-800 font-semibold">
            <CheckCircle size={18}/>
            About Microbes
          </span>
        </div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-14 items-start">

          {/* IMAGE */}

          <div className="relative rounded-3xl overflow-hidden shadow-lg mx-auto lg:mx-0">

            <img
              src={aboutImg}
              alt="Soil Microbial Ecosystem"
              className="w-full max-w-[240px] lg:max-w-full h-[340px] md:h-[300px] lg:h-[390px] object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">

              <h3 className="text-lg font-semibold">
                Soil Microbial Ecosystem
              </h3>

              <p className="text-sm opacity-90">
                Nature's Hidden Network
              </p>

            </div>

          </div>

          {/* TEXT */}

          <div>

            <h2 className="text-3xl font-semibold mb-2">
              What Are Microbes?
            </h2>

            <p className="text-gray-600 mb-6 max-w-[1000px] leading-relaxed">
              Microbes are microscopic living organisms that drive natural
              processes in soil, plants, water, and animals. They include
              bacteria, fungi, protozoa, and beneficial viruses that build
              soil fertility, protect crops, and regulate ecosystems.
            </p>

            <h3 className="text-3xl md:text-5xl text-green-800 font-semibold mb-3">
              The Hidden Symphony
            </h3>

            <p className="text-gray-900 max-w-[900px]">
              Beneath the soil lies a complex ecosystem where microbes and plant roots work together to sustain healthy crops.
            </p>

            {/* CARDS */}

            <div className="mt-6">

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">

                {items.map((item) => (

                  <div
                    key={item.id}
                    className="group relative overflow-visible w-[140px] h-[140px] bg-white rounded-xl border border-black shadow-sm flex items-center justify-center text-center text-[11px] text-gray-700 leading-tight p-2 cursor-pointer"
                  >

                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                      <span className="absolute bottom-0 left-0 w-32 h-32 bg-green-200 rounded-full scale-0 transition-transform duration-500 ease-out group-hover:scale-[8]"></span>
                    </div>

                    <div className="absolute -top-3 -right-3 z-20 w-8 h-8 bg-green-200 border border-green-600 rounded-full flex items-center justify-center text-green-800 text-xs font-semibold shadow">
                      {item.id}
                    </div>

                    <div className="relative z-10">
                      {item.text}
                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutMicrobes;