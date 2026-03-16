import newsImage from "@/assets/images/news-image.jpg";
import leaf from "@/assets/images/leaf.png";

import { ArrowRight, ArrowUpRight, CheckCircle } from "lucide-react";

const updates = [
  {
    title: "Biofactor & UOH Partner for Nano-Enabled Agriculture",
    source: "Deccan Chronicle",
    description:
      "Advancing sustainable farming through nano-technology collaboration between Biofactor and the University of Hyderabad.",
    date: "Nov 18, 2022 by John Doe • 10 min Read",
    image: newsImage,
  },
  {
    title: "Biofactor Expands Sustainable Agriculture Research",
    source: "Agri Times",
    description:
      "Biofactor launches new initiatives focused on improving soil health and crop productivity using advanced microbial technology.",
    date: "Dec 02, 2023 by Jane Smith • 8 min Read",
    image: newsImage,
  },
  {
    title: "Innovations in Biofertilizers Transform Farming",
    source: "Farming Today",
    description:
      "Biofactor introduces innovative biofertilizers designed to improve crop yield while maintaining soil sustainability.",
    date: "Jan 15, 2024 by Mark Wilson • 6 min Read",
    image: newsImage,
  },
];

const LatestUpdates = () => {
  return (
    <section className="relative pt-6 pb-12 bg-[#e8f3ea] overflow-hidden">

      {/* Leaf Decoration */}
      <img
        src={leaf}
        alt=""
        className="absolute right-[-100px] bottom-[-20px] w-[200px] sm:w-[260px] opacity-70 pointer-events-none"
      />

      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 relative z-10">

        {/* Badge */}
        <div className="flex justify-center mb-5">
          <span className="flex items-center gap-2 px-5 py-1.5 sm:px-6 sm:py-2 rounded-full bg-green-200 text-green-800 font-medium text-sm">
            <CheckCircle size={16} />
            Latest Updates
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-xl sm:text-2xl font-semibold max-w-3xl mx-auto mb-6 sm:mb-8">
          Stay updated with our latest achievements
          <br />
          and media coverage
        </h2>

        {/* View All */}
        <div className="flex justify-end mb-4">
          <button className="flex items-center gap-1 text-green-800 font-medium underline underline-offset-4 text-sm">
            View All
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Scroll Container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">

          {updates.map((item, i) => (
            <div key={i} className="min-w-full snap-start px-2">

              <div className="bg-[#dff0e3] rounded-3xl shadow-md flex flex-col md:flex-row overflow-hidden">

                {/* Image */}
                <div className="md:w-1/2 overflow-hidden rounded-r-3xl">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[220px] md:h-full object-cover rounded-r-3xl"
                  />

                </div>

                {/* Content */}
                <div className="md:w-1/2 px-4 sm:px-6 py-4 sm:py-5 flex flex-col justify-center">

                  <p className="text-green-700 font-semibold mb-1 text-xs sm:text-sm">
                    {item.source}
                  </p>

                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 mb-3 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <p className="text-[11px] sm:text-xs text-gray-600 mb-4">
                    {item.date}
                  </p>

                  <button className="flex items-center gap-2 bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full w-fit text-xs sm:text-sm">
                    Read More
                    <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full bg-green-600">
                      <ArrowUpRight size={11} />
                    </span>
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

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

export default LatestUpdates;