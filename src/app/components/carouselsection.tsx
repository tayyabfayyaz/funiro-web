'use client'


import Image from "next/image";
import { Button } from "./Btn";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

const CarouselSection = () => {
    return(
        <>
        <section className="block md:block lg:flex xl:flex justify-around w-full px-12 py-7 md:py-7 lg:py-5 xl:py-5 my-10 bg-gray-100">
            <div className="w-3/4">
                <h3 className="text-[35px] md:text-[35px] lg:text-[52px] xl:text-[52px] text-gray-700 font-bold">50+ Beautiful room</h3>
                <h3 className="text-[35px] md:text-[35px] lg:text-[52px] xl:text-[52px] text-gray-700 font-bold">inspiration</h3>
                <p className="text-[12px] md:text-[12px] lg:text-[16px] xl:text-[16px] text-gray-400 mt-7">Our designers already made a lot of beautiful</p>
                <p className="text-[12px] md:text-[12px] lg:text-[16px] xl:text-[16px] text-gray-400 mb-7">prototype of rooms that inspire you</p>
                <Button text="Explore More" onClick={ () => alert("Clicked!!!")} className="py-3 px-6 bg-customBrown text-white font-bold my-5 md:my-5 lg:my-3 xl:my-3" />
            </div>
            <div className="w-3/4 hidden md:hidden lg:block xl:block">
                <Image src="/image10.png" alt="Image" width={100} height={100} className="w-[400px] h-[480px]"/>
            </div>
            <div className="w-full md:w-full lg:w-3/4 xl:w-3/4">
                <Carousel>
                    <CarouselContent className="mx-0">
                        <CarouselItem><Image src="/image13.png" alt="Image" width={100} height={100} className="w-[400px] h-[380px] rounded-xl shadow-md shadow-gray-400" /></CarouselItem>
                        <CarouselItem><Image src="/image12.png" alt="Image" width={100} height={100} className="w-[400px] h-[380px] rounded-xl shadow-md shadow-gray-400" /></CarouselItem>
                        <CarouselItem><Image src="/image14.png" alt="Image" width={100} height={100} className="w-[400px] h-[380px] rounded-xl shadow-md shadow-gray-400" /></CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="mx-0 bg-gray-700 text-white font-bold"/>
                    <CarouselNext className="mx-0 bg-gray-700 text-white font-bold"/>
                </Carousel>

            </div>
        </section>
        </>
    );
};

export default CarouselSection;