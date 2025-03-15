// import { Image } from "lucide-react";
// import card1 from "/image/card1.png";

// import Card1 from "next/image";
// import Card2 from "next/image";
// import Card3 from "next/image";
import Card4 from "next/image";



export default function Hero() {
  return (
    <section className="bg-[#E8F2EE]">
      <div className="flex flex-col items-center justify-center py-[120px] md:py-[152px]">
        <h1 className="text-black lg:text-[80px] text-[40px] md:font-bold dm-sans">All in one card.</h1>
        {/* <h1 className={`${inter.className} text-4xl font-bold`}>
  Title with Inter and Tailwind styles
</h1> */}
        <p className="text=[#1A191E] max-w-[400px] text-center pb-8">
          Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo
          duis ut diam.
        </p>
        <div className="flex gap-5 flex-col md:flex-row">
          <button><a
            href="#"
            className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-all"
          >
            Open Account
          </a></button>
          <button className="text-[15px] text-teal-500">Compare Cards  <i className="fa-solid fa-arrow-right "></i></button>
        </div>  
              
      </div>
      <div className="lg:flex justify-between flex-col sm:flex-row gap-5 ">
    <Card4  src={'/image/cardss.png'} width={1760} height={200} alt="hero"/>
    {/* <Card2 src={'/image/card1.png'} width={200} height={200} alt="hero" />
    <Card1 src={'/image/card2.png'} width={200} height={200} alt="hero"/>
    <Card3  src={'/image/card3.png'} width={200} height={200} alt="hero"/>
    <Card4  src={'/image/card4.png'} width={200} height={200} alt="hero"/> */}
        
      </div>
    </section>
    
  );
}
















