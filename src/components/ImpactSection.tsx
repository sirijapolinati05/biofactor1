import vector from "@/assets/images/vector.png";
import vector1 from "@/assets/images/vector-1.png";
import vector2 from "@/assets/images/vector-2.png";
import vector3 from "@/assets/images/vector-3.png";
import vector4 from "@/assets/images/vector-4.png";
import vector5 from "@/assets/images/vector-5.png";
import vector6 from "@/assets/images/vector-6.png";
import vector7 from "@/assets/images/vector-7.png";
import vector8 from "@/assets/images/vector-8.png";

import map from "@/assets/images/map.png";
import leaf from "@/assets/images/leaf.png";

import { CheckCircle } from "lucide-react";

const stats = [
  { icon: vector3, value: "16", label: "States Covered" },
  { icon: vector4, value: "2,200+", label: "Active Dealers" },
  { icon: vector5, value: "8", label: "Patents" },
  { icon: vector6, value: "35", label: "Proprietary Strains" },
  { icon: vector7, value: "250+", label: "Microbials" },
  { icon: vector8, value: "5,00,000+", label: "Farmer Network" },
];

const ImpactSection = () => {
  return (
    <section className="relative py-10 bg-[#e8f3ea] overflow-hidden">

      {/* WORLD MAP BACKGROUND */}
      <img
        src={map}
        alt=""
        className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[1100px] opacity-15 pointer-events-none"
      />

      {/* LEAF DECORATION */}
      <img
        src={leaf}
        alt=""
        className="absolute left-[-90px] top-[120px] w-[300px] opacity-80 rotate-[20deg] pointer-events-none"
      />

      <div className="relative z-10 max-w-[750px] mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="flex items-center gap-2 px-5 py-2 rounded-full bg-green-200 text-green-800 font-semibold">
            <CheckCircle size={18} />
            Impact
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-3xl font-bold mb-2">
          Making a Difference in Agriculture
        </h2>

        <p className="text-center text-gray-600 max-w-lg mx-auto mb-8">
          Years of innovation and dedication have resulted in significant
          achievements across the agricultural sector.
        </p>

        {/* GLOBAL PRESENCE + APPROVALS */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8">

          {/* Global Presence */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 font-bold text-gray-800">
              <img src={vector2} alt="Global" className="w-4 h-4 object-contain" />
              Global Presence
            </div>

            <span className="text-xs text-gray-500">
              Nationwide Network
            </span>
          </div>

          {/* Approvals Row */}
          <div className="flex gap-4">

            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-200 text-green-800 text-xs">
              <img src={vector} alt="FCO" className="w-4 h-4 object-contain" />
              FCO Approved
            </span>

            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-200 text-blue-800 text-xs">
              <img src={vector1} alt="CIB" className="w-4 h-4 object-contain" />
              CIB Approved
            </span>

          </div>

        </div>

        {/* Stats Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden bg-white border border-black rounded-xl shadow-sm aspect-square flex flex-col items-center justify-center text-center cursor-pointer p-3"
            >

              <span className="absolute bottom-0 left-0 w-32 h-32 bg-green-200 rounded-full scale-0 transition-transform duration-500 ease-out group-hover:scale-[8]"></span>

              <div className="relative z-10 flex flex-col items-center">

                <div className="mb-1 flex justify-center items-center">
                  <img
                    src={stat.icon}
                    alt={stat.label}
                    className="w-7 h-7 object-contain"
                  />
                </div>

                <div className="text-2xl font-bold tracking-wide text-gray-900 mb-1">
                  {stat.value}
                </div>

                <div className="text-xs font-semibold text-gray-700">
                  {stat.label}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ImpactSection;