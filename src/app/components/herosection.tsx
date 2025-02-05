'use client'

import {Button} from "./Btn";

function HeroSection(){
    return(
        <>
        <section className="hero_container w-full md:w-full lg:max-w-[1440px] xl:max-w-[1440px] h-[500px] block md:block lg:flex xl:flex items-center justify-end "style={{ backgroundImage: 'url(banner2.png)' }}>
            
            <div className="inner_container w-full md:w-full lg:w-[640px] xl:w-[640px] h-[440px] bg-customPink mr-12 py-10 px-3 md:px-3 lg:px-2 xl:px-12 shadow-lg shadow-gray-400">
                <p className="text-[16px]">NEW ARIVALS</p>
                <h2 className="text-customBrown text-[36px] md:text-[36px] lg:text-[52px] xl:text-[52px] font-bold">Discover Our</h2>
                <h2 className="text-customBrown text-[36px] md:text-[36px] lg:text-[52px] xl:text-[52px] font-bold">New Collection</h2>
                <p className="text-[16px] mt-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam sit nesciunt obcaecati voluptate ullam.
                </p>

                <Button text="Buy Now" onClick={ () => alert("Clicked!!") } className="mt-10 py-3 px-6 bg-customBrown text-white text-[16px] font-bold hover:bg-white hover:text-customBrown duration-300" />
            </div>
        </section>
        </>
    );
};

export default HeroSection;