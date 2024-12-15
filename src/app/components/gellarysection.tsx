import * as React from "react";
import Image from "next/image";

const GellarySection = () => {
  return (
    <section className="max-w-[1440px] mx-auto p-8 hidden md:hidden lg:block xl:block">
      <p className="text-[18px] text-center mt-4 text-gray-500">
        Share your setup with
      </p>
      <h2 className="text-[36px] text-center font-bold mb-8">
        #FuniroFurniture
      </h2>
      <div className="w-full flex gap-6 justify-center items-center" >
        <Image src="/image14.png" alt="Image" width={100} height="100" className="w-[250px] h-[350px] cursor-pointer"/>
        <Image src="/image19.png" alt="Image" width={100} height="100" className="w-[250px] h-[200px] cursor-pointer"/>
        <Image src="/image20.png" alt="Image" width={100} height="100" className="w-[250px] h-[350px] cursor-pointer"/>
        <Image src="/image9.png" alt="Image" width={100} height="100" className="w-[250px] h-[350px] cursor-pointer"/>
        <Image src="/image21.png" alt="Image" width={100} height="100" className="w-[250px] h-[250px] cursor-pointer"/>
     </div>

     <div className="w-full flex gap-6 justify-center items-center" >
        <Image src="/image13.png" alt="Image" width={100} height="100" className="w-[300px] h-[250px] cursor-pointer"/>
        <Image src="/image18.png" alt="Image" width={100} height="100" className="w-[250px] h-[350px] cursor-pointer"/>
        <Image src="/image17.png" alt="Image" width={100} height="100" className="w-[200px] h-[200px] cursor-pointer"/>
        <Image src="/image16.png" alt="Image" width={100} height="100" className="w-[250px] h-[350px] cursor-pointer"/>
     </div>
      
    </section>
  );
};

export default GellarySection;
