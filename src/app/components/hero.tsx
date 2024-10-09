//Hero
import Image from "next/image";


const Hero = () => {
    return (
      <section className="bg-green-50 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left space-y-4 ">
            <h2 className="text-4xl font-bold text-green-700 ">Discover and Find Your Own Fashion!</h2>
            <p className="w-1/2 ">Explore our curated collection of stylish clothing and accessories tailored to your taste.</p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-full">Explore Now</button>
          </div>
          <div className="mt-9 md:mt-0">
            <Image src="/pic.png" width={600} height={800} alt="Fashion" className="w-full h-auto" />
          </div>
         
        </div>
      </section>   

 

    );
  };
  
  export default Hero;