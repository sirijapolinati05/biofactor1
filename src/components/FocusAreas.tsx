import agriculture from "@/assets/images/agriculture.jpg";
import aquaculture from "@/assets/images/aquaculture.jpg";
import largeAnimals from "@/assets/images/large-animals.jpg";
import kitchenGardening from "@/assets/images/kitchen-gardening.jpg";

import agricultureIcon from "@/assets/images/agriculture.png";
import aquacultureIcon from "@/assets/images/aqua-culture.png";
import largeAnimalsIcon from "@/assets/images/large-animals.png";
import kitchenGardeningIcon from "@/assets/images/kitchen-gardening.png";

import doodle from "@/assets/images/green-doodle.png";

import { ArrowUpRight, CheckCircle } from "lucide-react";

const areas = [
  {
    image: agriculture,
    title: "Agriculture",
    icon: agricultureIcon,
    points: [
      "Enhancing crop productivity with bio-fertilizers",
      "Improving soil health through microbial solutions",
    ],
  },
  {
    image: aquaculture,
    title: "Aquaculture",
    icon: aquacultureIcon,
    points: [
      "Maintaining optimal water quality in ponds",
      "Supporting healthy fish and shrimp growth",
    ],
  },
  {
    image: largeAnimals,
    title: "Large Animals",
    icon: largeAnimalsIcon,
    points: [
      "Improving digestion and nutrient absorption",
      "Supporting livestock immunity and productivity",
    ],
  },
  {
    image: kitchenGardening,
    title: "Kitchen Gardening",
    icon: kitchenGardeningIcon,
    points: [
      "Promoting healthy plant growth at home",
      "Natural solutions for soil and pest management",
    ],
  },
];

const FocusAreas = () => {
  return (
    <section className="relative pt-6 pb-10 bg-[#e7f2e8] overflow-hidden">

      {/* RIGHT SIDE DOODLES */}

      <img
        src={doodle}
        alt=""
        className="absolute right-10 top-20 w-20 sm:w-24 rotate-[6deg] opacity-70 pointer-events-none"
      />

      <img
        src={doodle}
        alt=""
        className="absolute right-8 top-36 w-14 sm:w-16 rotate-[3deg] opacity-70 pointer-events-none"
      />

      <img
        src={doodle}
        alt=""
        className="absolute right-8 top-48 w-8 sm:w-10 rotate-[1deg] opacity-70 pointer-events-none"
      />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="flex items-center gap-2 px-5 py-1.5 sm:px-6 sm:py-2 rounded-full bg-green-200 text-green-800 font-semibold text-sm sm:text-base">
            <CheckCircle size={16} />
            Focus Areas
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-xl sm:text-3xl lg:text-4xl font-bold mb-2">
          Areas We Are Solving For
        </h2>

        <p className="text-center text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto text-sm sm:text-base">
          Delivering sustainable biological solutions across agriculture,
          aquaculture, and animal health.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">

          {areas.map((area) => (

            <div
              key={area.title}
              className="bg-[#dff0e2] rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >

              <div className="relative">

                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-32 sm:h-44 object-cover"
                />

                <div className="absolute -bottom-5 left-4 sm:left-6 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg flex items-center justify-center">

                  <img
                    src={area.icon}
                    alt={area.title}
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                  />

                </div>

              </div>

              <div className="p-4 sm:p-6 pt-8 sm:pt-10">

                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                  {area.title}
                </h3>

                <ul className="text-xs sm:text-sm text-gray-700 space-y-1 mb-4 sm:mb-5">
                  {area.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>

                <button className="inline-flex items-center gap-1.5 bg-black text-white px-3 py-1.5 rounded-full text-xs sm:text-sm">
                  Learn More
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-700">
                    <ArrowUpRight size={10} />
                  </span>
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FocusAreas;