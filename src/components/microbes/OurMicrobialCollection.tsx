import { CheckCircle } from "lucide-react";

import fileIcon from "@/assets/images/File.png";
import bacteriaImg from "@/assets/images/Bacteria.png";
import fungiImg from "@/assets/images/Fungi.png";
import pathogenImg from "@/assets/images/pathogenAntagonists.png";
import actinomycetesImg from "@/assets/images/Actinomycetes.png";
import researchLab from "@/assets/images/ResearchLaboratory.jpg";

import gutHealthImg from "@/assets/images/gut-health-cow.jpg";
import immunityImg from "@/assets/images/cow-immunity.jpg";
import toxinImg from "@/assets/images/toxin-neutralization.jpg";
import nutrientImg from "@/assets/images/nutrient-absorption-cattle.jpg";

const OurMicrobialCollection: React.FC = () => {

const microbes = [
{
title: "Nitrogen-Fixing Bacteria",
desc: "Transform atmospheric nitrogen into plant-accessible nutrients",
img: bacteriaImg
},
{
title: "Mycorrhizal Fungi",
desc: "Extend root systems and enhance nutrient absorption",
img: fungiImg
},
{
title: "Pathogen Antagonists",
desc: "Protect plants from harmful pathogens naturally",
img: pathogenImg
},
{
title: "Growth Promoters",
desc: "Stimulate plant growth and improve stress resilience",
img: actinomycetesImg
}
];

const points = [
{
num: "1",
text: "Plants and microbes form a natural partnership, working together to support plant growth and soil health."
},
{
num: "2",
text: "Scientific research helps us understand how microbes improve plant growth and protect crops from diseases."
},
{
num: "3",
text: "These beneficial microorganisms help plants absorb nutrients and produce healthier yields."
},
{
num: "4",
text: "Biofactor has developed a carefully selected collection of plant growth-promoting bacteria and fungi."
},
{
num: "5",
text: "These microbial strains are adapted to different climates and environments, helping crops grow sustainably across diverse regions."
}
];

return (

<>

{/* SECTION 1 */}

<section className="bg-gradient-to-b from-green-50 via-green-50 to-green-100 pt-0 pb-10 text-center px-4 md:px-6 overflow-x-hidden">

<div className="max-w-[1200px] mx-auto">

<div className="flex justify-center mb-6">
<span className="flex items-center gap-2 bg-green-200 text-green-900 px-6 py-2 rounded-full font-medium">
<CheckCircle size={18}/>
Our Microbial Collection
</span>
</div>

<h2 className="text-3xl md:text-5xl font-semibold mb-4">
35 Proprietary Microbial Strains
</h2>

<p className="text-gray-600 max-w-[720px] mx-auto mb-12">
Each strain is a unique testament to nature's adaptability, patented under the Budapest Treaty
</p>

</div>

<div className="bg-gradient-to-r from-green-900 via-green-700 to-green-500 py-6">

<div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-white px-4">

<img src={fileIcon} className="w-10 h-10 md:w-12 md:h-12 object-contain"/>

<div className="text-center md:text-left">

<h3 className="text-base md:text-lg font-semibold">
All strains are patented under the Budapest Treaty
</h3>

<p className="text-sm opacity-90">
Deposited at the International Depository Authority for maximum protection and quality assurance
</p>

</div>

</div>

</div>

<div className="max-w-[1200px] mx-auto mt-16">

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

{microbes.map((item,index)=>(

<div
key={index}
className="bg-green-50 border border-green-300 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center w-[160px] h-[170px] mx-auto"
>

<img src={item.img} className="w-10 h-10 object-contain mb-2"/>

<h3 className="text-sm font-semibold text-green-700">
{item.title}
</h3>

<p className="text-xs text-gray-600 mt-1 px-2">
{item.desc}
</p>

</div>
))}

</div>

</div>

</section>

{/* SECTION 2 */}

<section className="bg-gradient-to-b from-green-100 via-green-100 to-green-50 pt-0 pb-28 text-center px-4 md:px-6">

<div className="max-w-[1200px] mx-auto">

<h2 className="text-3xl md:text-5xl font-semibold mb-10">
The Quiet <span className="text-green-700">Alliance</span>
</h2>

<div className="relative max-w-[820px] mx-auto mb-20">

<img src={researchLab} className="w-full h-[220px] md:h-[260px] object-cover rounded-2xl"/>

<div className="absolute inset-0 flex flex-col items-center justify-center text-white">

<h3 className="text-lg md:text-xl font-semibold">
Microbial Research Laboratory
</h3>

<p className="text-sm opacity-90">
Advanced scientific studies
</p>

</div>

</div>

{/* RESPONSIVE GRID */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center max-w-[1000px] mx-auto">

{points.slice(0,3).map((item,index)=>(

<div key={index} className="relative bg-white border border-black shadow-lg rounded-md w-full md:w-[300px] px-6 py-6 text-left">

<div className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold text-green-900 bg-gradient-to-br from-green-200 via-green-300 to-green-500">
{item.num}
</div>

<p className="text-sm text-gray-700">
{item.text}
</p>

</div>
))}

</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-[700px] mx-auto mt-16">

{points.slice(3,5).map((item,index)=>(

<div key={index} className="relative bg-white border border-black shadow-lg rounded-md w-full md:w-[300px] px-6 py-6 text-left">

<div className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold text-green-900 bg-gradient-to-br from-green-200 via-green-300 to-green-500">
{item.num}
</div>

<p className="text-sm text-gray-700">
{item.text}
</p>

</div>
))}

</div>

</div>

</section>

{/* SECTION 3 */}

<section className="bg-gradient-to-b from-green-50 via-green-100 to-green-50 pb-16 text-center px-4 md:px-6">

<div className="max-w-[1200px] mx-auto">

<h2 className="text-3xl md:text-5xl font-semibold">
Role in <span className="text-green-700">Animal Health</span>
</h2>

<p className="text-gray-700 max-w-[850px] mx-auto mt-4 text-base md:text-lg">
Beneficial microbes improve digestive efficiency, immune strength, and nutrient absorption in livestock, reducing dependency on antibiotics and synthetic supplements.
</p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">

{[
{img: gutHealthImg, title:"Gut Health Boost"},
{img: immunityImg, title:"Immunity Enhancement"},
{img: toxinImg, title:"Toxin Neutralization"},
{img: nutrientImg, title:"Nutrient Absorption"}
].map((item,i)=>(
<div key={i} className="group bg-white rounded-2xl shadow-lg overflow-hidden w-[180px] md:w-[220px] mx-auto transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

<div className="overflow-hidden">
<img src={item.img} className="w-full h-[140px] md:h-[150px] object-cover transition-transform duration-500 group-hover:scale-110"/>
</div>

<div className="bg-gradient-to-b from-[#f1d2b9] to-[#e3b99b] py-4 text-sm md:text-base font-medium">
{item.title}
</div>

</div>
))}

</div>

</div>

</section>

</>

);
};

export default OurMicrobialCollection;