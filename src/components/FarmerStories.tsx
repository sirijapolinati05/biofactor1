import { useState } from "react";
import farmer1 from "@/assets/images/farmer-story-1.jpg";
import farmer2 from "@/assets/images/farmer-story-2.jpg";
import { Play, CheckCircle } from "lucide-react";

const filters = ["All", "AP", "Telangana", "Karnataka", "Tamilnadu", "Maharashtra", "UP"];

const stories = [
  {
    image: farmer1,
    title: "Organic Farmer Success Story with Biofactor",
    location: "Andhra Pradesh · June 10 2026",
    state: "AP",
  },
  {
    image: farmer2,
    title: "Sustainable Farming Practices Revolution",
    location: "Telangana · June 19 2026",
    state: "Telangana",
  },
  {
    image: farmer1,
    title: "Organic Farmer Success Story with Biofactor",
    location: "Andhra Pradesh · June 10 2026",
    state: "AP",
  },
  {
    image: farmer2,
    title: "Biofactor Helps Increase Crop Yield",
    location: "Karnataka · May 18 2026",
    state: "Karnataka",
  },
  {
    image: farmer1,
    title: "Modern Farming Success Using Biofactor",
    location: "Tamilnadu · May 22 2026",
    state: "Tamilnadu",
  },
];

const FarmerStories = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? stories
      : stories.filter((s) => s.state === active);

  return (
    <section className="pt-2 sm:pt-4 pb-12 bg-[#e8f3ea]">

      <div className="max-w-[1400px] mx-auto px-4">

        {/* Main Heading */}
        <h2 className="text-center text-4xl font-bold mb-6">
          Testimonials
        </h2>

        {/* Sub Badge */}
        <div className="flex justify-center mb-6">
          <span className="flex items-center gap-2 px-6 py-2 rounded-full bg-green-200 text-green-800 font-semibold">
            <CheckCircle size={18}/>
            Farmer Stories
          </span>
        </div>

        <p className="text-center text-gray-600 mb-8">
          Real stories from farmers across India
        </p>

        {/* Filters */}
        <div className="overflow-x-auto mb-10 no-scrollbar">

          <div className="flex gap-3 whitespace-nowrap justify-start sm:justify-center">

            {filters.map((f) => (

              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-lg border text-sm font-medium transition flex-shrink-0
                ${
                  active === f
                    ? "bg-green-700 text-white border-green-700"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-green-100 hover:border-green-600"
                }`}
              >
                {f}
              </button>

            ))}

          </div>

        </div>

        {/* Horizontal scroll cards */}
        <div className="flex gap-6 overflow-x-auto pb-2 scroll-smooth no-scrollbar">

          {filtered.map((story, i) => (

            <div
              key={i}
              className="min-w-[360px] rounded-xl overflow-hidden shadow-md bg-white"
            >

              <div className="relative">

                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-[220px] object-cover"
                />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow cursor-pointer hover:scale-110 transition">

                    <Play size={16} className="text-black ml-[2px]" />

                  </div>

                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Title text */}
                <div className="absolute bottom-4 left-4 right-4 text-white">

                  <h3 className="text-lg font-semibold leading-snug">
                    {story.title}
                  </h3>

                  <p className="text-xs opacity-80 mt-1">
                    {story.location}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-700 mt-6 text-sm">
          📌 These recognitions fuel our journey — science designed by nature, delivered with innovation.
        </p>

      </div>

      {/* Scrollbar Hide */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>

    </section>
  );
};

export default FarmerStories;