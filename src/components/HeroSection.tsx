import heroBg from "@/assets/images/hero-bg.jpg";
import { Leaf, ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-[#e7f2e8] pt-6 px-6">
      <div
        id="home"
        className="relative min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden"
        style={{
          borderRadius: "40px",
        }}
      >
        {/* Background Image */}
        <img
          src={heroBg}
          alt="Hero"
          className="absolute inset-0 w-full h-[110%] md:h-full object-cover object-top"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Top Left Cut Shape */}
        <div className="absolute top-0 left-0 z-20 pointer-events-none">
          <svg width="260" height="160" viewBox="0 0 260 160">
            <path
              d="M0 0 H260 V0
                 C150 0 150 70 0 70
                 Z"
              fill="#e7f2e8"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6 py-24 md:py-32">
          
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-2 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-white text-sm font-medium mb-6">
              <Leaf size={16} />
              Pioneering Sustainable Agriculture
            </span>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Revolutionizing Agriculture
              <br />
              With Science &amp; Innovation
            </h1>
          </div>

          <div className="max-w-md mx-auto lg:ml-auto text-center lg:text-left">
            <p className="text-lg text-white/80 mb-8">
              Creating cutting-edge technology in sustainable agriculture.
              Transforming supply chains for environmental sustainability and
              healthier ecosystems.
            </p>

            <div className="flex justify-center lg:justify-start">
              <a
                href="#about"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
              >
                Explore More
                <span className="w-7 h-7 rounded-full bg-green-700 flex items-center justify-center text-white transition-transform group-hover:translate-x-1">
                  <ArrowUpRight size={14} />
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;