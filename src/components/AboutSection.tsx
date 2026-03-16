import microbialTech from "@/assets/images/microbial-tech.jpg";
import mineralEnrichment from "@/assets/images/mineral-enrichment.jpg";

import soilHealth from "@/assets/images/soil-health.png";
import cropGrowth from "@/assets/images/crop-growth.png";
import animalHealth from "@/assets/images/animal-health.png";
import aquacultureHealth from "@/assets/images/aquaculture-health.png";

import { ArrowUpRight, CheckCircle } from "lucide-react";

const features = [
  { icon: soilHealth, label: "Soil Health" },
  { icon: cropGrowth, label: "Crop Growth" },
  { icon: animalHealth, label: "Animal Health" },
  { icon: aquacultureHealth, label: "Aquaculture Health" },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative pt-10 pb-14 bg-[#e7f2e8] overflow-hidden"
    >

      {/* GREEN BLOB BACKGROUND */}
      <div
        className="absolute left-[-120px] bottom-[-120px] w-[700px] h-[700px] z-0"
        style={{
          background:
            "radial-gradient(circle at center, #bfe7c8 0%, #dff5e8 40%, transparent 70%)",
          borderRadius: "55% 45% 60% 40% / 45% 60% 40% 55%",
        }}
      ></div>

      <div className="max-w-[1200px] mx-auto px-3 sm:px-4 relative z-10">

        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="flex items-center gap-2 px-6 py-2 rounded-full bg-green-200 text-green-800 text-sm sm:text-base font-semibold">
            <CheckCircle size={18} />
            About Biofactor
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* LEFT IMAGES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 justify-items-center">

            <div className="rounded-2xl overflow-hidden shadow-md max-w-[260px] sm:max-w-full">
              <img
                src={microbialTech}
                alt="Microbial Technology"
                className="w-full h-auto object-contain"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md max-w-[260px] sm:max-w-full">
              <img
                src={mineralEnrichment}
                alt="Mineral Enrichment"
                className="w-full h-auto object-contain"
              />
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="text-center lg:text-left">

            <p className="text-gray-800 text-sm sm:text-lg leading-relaxed font-medium mb-4">
              Committed to{" "}
              <span className="text-green-600 font-semibold">
                advancing sustainable agriculture
              </span>
              , Biofactor delivers science-
              <span className="text-green-600 font-semibold">
                driven biological solutions
              </span>{" "}
              that improve{" "}
              <span className="text-green-600 font-semibold">
                soil health
              </span>
              ,{" "}
              <span className="text-green-600 font-semibold">
                enhance crop productivity
              </span>
              , and promote environmentally balanced{" "}
              <span className="text-green-600 font-semibold">
                farming systems
              </span>.
            </p>

            <p className="text-gray-600 text-sm sm:text-lg leading-relaxed mb-8">
              By transforming the agricultural supply chain, we drive environmental
              sustainability and create a healthier, more resilient ecosystem for
              future generations.
            </p>

            {/* BUTTON */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition mb-8"
              >
                Explore More
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-700">
                  <ArrowUpRight size={14} />
                </span>
              </a>
            </div>

            {/* ICONS */}
            <div className="flex w-full justify-between lg:justify-start lg:gap-12">

              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex flex-col items-center gap-2 flex-1"
                >

                  <img
                    src={feature.icon}
                    alt={feature.label}
                    className="object-contain w-9 sm:w-12"
                  />

                  <span className="text-[10px] sm:text-sm font-semibold text-gray-700 text-center">
                    {feature.label}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutSection;