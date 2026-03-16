import { CheckCircle, ArrowUpRight } from "lucide-react";

import doseIcon from "@/assets/images/dose-icon.png";
import warningIcon from "@/assets/images/warning-icon.png";
import storageIcon from "@/assets/images/storage-icon.png";
import protectionIcon from "@/assets/images/protection-icon.png";

const SafetyGuidelines: React.FC = () => {
  return (
    <>
    
    <section className="bg-gradient-to-b from-green-100 via-green-50 to-green-50 pt-16 pb-10 text-center">

      <div className="max-w-[1000px] mx-auto px-6">

        <div className="flex justify-center mb-10">
          <span className="flex items-center gap-2 bg-green-200 text-green-800 px-6 py-2 rounded-full font-semibold">
            <CheckCircle size={18}/>
            Safety Guidelines
          </span>
        </div>

        {/* MOBILE 2 CARDS PER ROW */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

          <div className="bg-green-50 border border-green-300 rounded-2xl p-5 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center max-w-[150px] mx-auto">
            <img src={doseIcon} className="w-8 h-8 object-contain mb-3"/>
            <p className="text-xs text-gray-700 text-center">
              Use recommended microbial doses only.
            </p>
          </div>

          <div className="bg-green-50 border border-green-300 rounded-2xl p-5 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center max-w-[150px] mx-auto">
            <img src={warningIcon} className="w-8 h-8 object-contain mb-3"/>
            <p className="text-xs text-gray-700 text-center">
              Avoid mixing incompatible cultures without guidance.
            </p>
          </div>

          <div className="bg-green-50 border border-green-300 rounded-2xl p-5 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center max-w-[150px] mx-auto">
            <img src={storageIcon} className="w-8 h-8 object-contain mb-3"/>
            <p className="text-xs text-gray-700 text-center">
              Store biological cultures in cool & dry environments.
            </p>
          </div>

          <div className="bg-green-50 border border-green-300 rounded-2xl p-5 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center max-w-[150px] mx-auto">
            <img src={protectionIcon} className="w-8 h-8 object-contain mb-3"/>
            <p className="text-xs text-gray-700 text-center">
              Wear protection while handling concentrated cultures.
            </p>
          </div>

        </div>

        <h2 className="text-5xl font-semibold leading-tight mt-16 mb-6">
          The Heartbeat of a <span className="text-green-800">New Agricultural Future</span>
        </h2>

        <p className="text-gray-700 max-w-[780px] mx-auto text-lg leading-relaxed">
          In the end, these microbes are more than just a solution—they are the heartbeat of a new
          agricultural future. Through their unseen work, we promise a world where the soil breathes
          with life once more, where plants rise strong and green, and where the soil, tenderly healed,
          offers its bounty in return.
        </p>

      </div>

    </section>


    <section className="bg-gradient-to-r from-green-900 via-green-700 to-green-500 py-12 text-center text-white">

      <div className="max-w-[1100px] mx-auto px-6">

        <h2 className="text-4xl font-semibold mb-3">
          Ready to Transform Your Agriculture with Microbes?
        </h2>

        <p className="text-base opacity-90 mb-8">
          Join the microbial revolution and experience the power of nature's smallest allies
        </p>

        <div className="flex justify-center">

          <button className="flex items-center bg-white text-gray-900 rounded-full pl-6 pr-2 py-1.5 text-base font-medium shadow-lg hover:scale-105 transition">
            Get Started
            <span className="ml-3 bg-green-900 text-white rounded-full p-1.5 flex items-center justify-center">
              <ArrowUpRight size={16}/>
            </span>
          </button>

        </div>

      </div>

    </section>


    <div className="bg-[#e6ebe6] py-4 pb-10 text-center text-sm text-gray-700">
      📌 These recognitions fuel our journey — science designed by nature, delivered with innovation.
    </div>

    </>
  );
};

export default SafetyGuidelines;