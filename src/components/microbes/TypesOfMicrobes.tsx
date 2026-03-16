import { CheckCircle } from "lucide-react";

import bacteriaImg from "@/assets/images/Bacteria.png";
import fungiImg from "@/assets/images/Fungi.png";
import protozoaImg from "@/assets/images/Protozoa.png";
import actinomycetesImg from "@/assets/images/Actinomycetes.png";

import plantImg from "@/assets/images/microbes-plant.jpg";

import rootImg from "@/assets/images/soil-root.jpg";
import nitrogenImg from "@/assets/images/nitrogen.jpg";
import soilTextureImg from "@/assets/images/soil-texture.jpg";

interface Microbe {
  name: string;
  image: string;
}

const TypesOfMicrobes: React.FC = () => {

  const microbes: Microbe[] = [
    { name: "Bacteria", image: bacteriaImg },
    { name: "Fungi", image: fungiImg },
    { name: "Protozoa", image: protozoaImg },
    { name: "Actinomycetes", image: actinomycetesImg }
  ];

  return (

<div className="bg-gradient-to-b from-green-50 via-green-100 to-green-50">

{/* ---------- TYPES OF MICROBES ---------- */}

<section className="pt-10 pb-20 px-6 text-center">

<div className="max-w-[1200px] mx-auto">

<div className="flex justify-center">
<span className="flex items-center gap-2 bg-green-200 text-green-800 px-6 py-2 rounded-full font-semibold">
<CheckCircle size={18} />
Types of Microbes
</span>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">

{microbes.map((item, index) => (
<div
key={index}
className={`bg-green-50 border border-green-300 rounded-2xl p-3 md:p-5 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center max-w-[140px] md:max-w-[170px] mx-auto
${index === 0 ? "md:translate-x-24" : ""}
${index === 1 ? "md:translate-x-8" : ""}
${index === 2 ? "md:-translate-x-8" : ""}
${index === 3 ? "md:-translate-x-24" : ""}
`}
>

<img
src={item.image}
alt={item.name}
className="w-12 h-12 md:w-14 md:h-14 object-contain mb-2 md:mb-3"
/>

<h3 className="text-base md:text-lg font-semibold text-green-700">
{item.name}
</h3>

<p className="text-[11px] md:text-xs text-gray-600 mt-1 md:mt-2 text-center">
Nutrient solubilizers and nitrogen fixers
</p>

</div>
))}

</div>

</div>

</section>


{/* ---------- NATURE'S SMALLEST ALLIES ---------- */}

<section className="pt-2 pb-24 px-6 text-center">

<h2 className="text-5xl font-semibold mb-20">
Nature's <span className="text-green-900">Smallest Allies</span>
</h2>


{/* MOBILE VIEW */}

<div className="lg:hidden flex flex-col items-center gap-6">

<img
src={plantImg}
className="w-[260px] h-[260px] rounded-full object-cover shadow-xl"
/>

{[
"Microbes are nature's smallest allies, tiny living organisms that play an important role in maintaining soil and plant health.",
"Modern agricultural practices and excessive use of chemicals have damaged soil ecosystems and reduced natural microbial balance.",
"Beneficial microbes can restore soil health by rebuilding the natural biological system of the soil.",
"These microorganisms help plants by fixing nitrogen, improving nutrient availability and supporting plant growth.",
"By working through the soil, microbes deliver essential nutrients and protect plants from environmental stress."
].map((text, i) => (

<div key={i} className="bg-white border border-black/40 shadow-xl p-5 w-full max-w-[340px] text-left relative">

<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold text-green-900 bg-gradient-to-br from-green-200 via-green-300 to-green-500">
{i + 1}
</div>

{text}

</div>

))}

</div>



{/* DESKTOP VIEW */}

<div className="hidden lg:flex max-w-[1600px] mx-auto relative items-center justify-center min-h-[460px]">

<div className="absolute left-10 top-2 bg-white border border-black/40 shadow-xl p-5 w-[360px] text-left">
<div className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold text-green-900 bg-gradient-to-br from-green-200 via-green-300 to-green-500">
1
</div>
Microbes are nature's smallest allies, tiny living organisms that play an important role in maintaining soil and plant health.
</div>

<div className="absolute left-10 bottom-16 bg-white border border-black/40 shadow-xl p-5 w-[360px] text-left">
<div className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold text-green-900 bg-gradient-to-br from-green-200 via-green-300 to-green-500">
2
</div>
Modern agricultural practices and excessive use of chemicals have damaged soil ecosystems and reduced natural microbial balance.
</div>

<div className="relative -translate-y-10">

<img
src={plantImg}
className="w-[300px] h-[300px] rounded-full object-cover shadow-xl"
/>

<div className="absolute bottom-16 w-full text-center text-white font-medium text-base">
Beneficial Microbes at Work
</div>

</div>

<div className="absolute right-10 top-2 bg-white border border-black/40 shadow-xl p-5 w-[360px] text-left">
<div className="absolute -top-4 -left-4 w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold text-green-900 bg-gradient-to-br from-green-200 via-green-300 to-green-500">
5
</div>
By working through the soil, microbes deliver essential nutrients and protect plants from environmental stress.
</div>

<div className="absolute right-10 bottom-16 bg-white border border-black/40 shadow-xl p-5 w-[360px] text-left">
<div className="absolute -top-4 -left-4 w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold text-green-900 bg-gradient-to-br from-green-200 via-green-300 to-green-500">
4
</div>
These microorganisms help plants by fixing nitrogen, improving nutrient availability and supporting plant growth.
</div>

<div className="absolute bottom-[-60px] bg-white border border-black/40 shadow-xl p-6 w-[360px] text-left">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold text-green-900 bg-gradient-to-br from-green-200 via-green-300 to-green-500">
3
</div>
Beneficial microbes can restore soil health by rebuilding the natural biological system of the soil.
</div>

</div>

</section>


{/* ---------- ROLE IN SOIL ---------- */}

<section className="-mt-10 pb-24 px-6 text-center">

<div className="max-w-[900px] mx-auto">

<h2 className="text-5xl font-semibold lg:mt-20">
Role in <span className="text-green-800">Soil & Crops</span>
</h2>

<p className="text-gray-700 mt-4 max-w-[650px] mx-auto">
Microbes enhance soil structure, convert nutrients into plant-available forms, protect roots from pathogens, and increase water retention for long-term fertility.
</p>

<div className="grid md:grid-cols-3 gap-10 mt-16 justify-center">

<div className="rounded-2xl overflow-hidden shadow-lg bg-green-200 w-[220px] mx-auto">
<img src={rootImg} className="w-full h-[170px] object-cover"/>
<div className="p-4 font-medium text-gray-800 text-sm">
Root-Zone Protection & Disease Resistance
</div>
</div>

<div className="rounded-2xl overflow-hidden shadow-lg bg-green-200 w-[220px] mx-auto">
<img src={nitrogenImg} className="w-full h-[170px] object-cover"/>
<div className="p-4 font-medium text-gray-800 text-sm">
Nitrogen Fixation & Nutrient Cycling
</div>
</div>

<div className="rounded-2xl overflow-hidden shadow-lg bg-green-200 w-[220px] mx-auto">
<img src={soilTextureImg} className="w-full h-[170px] object-cover"/>
<div className="p-4 font-medium text-gray-800 text-sm">
Improved Soil Texture & Aeration
</div>
</div>

</div>

</div>

</section>

</div>
);
};

export default TypesOfMicrobes;