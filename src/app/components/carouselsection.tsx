'use client'


import Image from "next/image";
import Button from "./button";
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
        <section className="flex justify-around w-full px-12 py-5 my-10 bg-gray-100">
            <div className="w-3/4">
                <h3 className="text-[52px] text-gray-700 font-bold">50+ Beautiful room</h3>
                <h3 className="text-[52px] text-gray-700 font-bold">inspiration</h3>
                <p className="text-[16px] text-gray-400 mt-7">Our designers already made a lot of beautiful</p>
                <p className="text-[16px] text-gray-400 mb-7">prototype of rooms that inspire you</p>
                <Button text="Explore More" onClick={ () => alert("Clicked!!!")} className="py-3 px-6 bg-customBrown text-white font-bold" />
            </div>
            <div className="w-3/4">
                <Image src="/image10.png" alt="Image" width={100} height={100} className="w-[400px] h-[480px]"/>
            </div>
            <div className="w-3/4">
                <Carousel>
                    <CarouselContent className="mx-2">
                        <CarouselItem><Image src="/image13.png" alt="Image" width={100} height={100} className="w-[400px] h-[380px]" /></CarouselItem>
                        <CarouselItem><Image src="/image12.png" alt="Image" width={100} height={100} className="w-[400px] h-[380px]" /></CarouselItem>
                        <CarouselItem><Image src="/image14.png" alt="Image" width={100} height={100} className="w-[400px] h-[380px]" /></CarouselItem>
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