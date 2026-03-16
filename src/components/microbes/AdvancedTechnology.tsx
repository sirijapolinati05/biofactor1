import { CheckCircle } from "lucide-react";

import bioImg from "@/assets/images/bioencapsulation.jpg";
import rootImg from "@/assets/images/sustained-release.jpg";

const AdvancedTechnology: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 via-green-50 to-green-100 pt-12 pb-12 text-center">

      <div className="max-w-[1100px] mx-auto px-6">

        <div className="flex justify-center mb-6">
          <span className="flex items-center gap-2 bg-green-200 text-green-900 px-6 py-2 rounded-full font-medium">
            <CheckCircle size={18}/>
            Advanced Technology
          </span>
        </div>

        <h2 className="text-5xl font-semibold mb-10">
          Innovative <span className="text-green-700">Microbial Delivery</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 justify-center">

          <div className="bg-white border border-green-300 rounded-2xl p-4 shadow-md text-left max-w-[480px] mx-auto">

            <img
              src={bioImg}
              className="w-full h-[140px] object-cover rounded-xl mb-3"
            />

            <h3 className="text-lg font-semibold">
              Bioencapsulation Technology
            </h3>

            <p className="text-gray-600 text-sm mt-1 mb-2">
              Protection & Delivery
            </p>

            <p className="text-xs text-gray-600 leading-relaxed">
              Advanced encapsulation protects beneficial microbes and ensures
              targeted delivery to plant roots, maximizing effectiveness and
              longevity in the soil ecosystem.
            </p>

          </div>

          <div className="bg-white border border-green-300 rounded-2xl p-4 shadow-md text-left max-w-[480px] mx-auto">

            <img
              src={rootImg}
              className="w-full h-[140px] object-cover rounded-xl mb-3"
            />

            <h3 className="text-lg font-semibold">
              Sustained Release
            </h3>

            <p className="text-gray-600 text-sm mt-1 mb-2">
              Continuous Benefits
            </p>

            <p className="text-xs text-gray-600 leading-relaxed">
              Our controlled-release mechanisms ensure microbes work
              continuously, providing long-term benefits to soil health and
              plant growth throughout the growing season.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AdvancedTechnology;