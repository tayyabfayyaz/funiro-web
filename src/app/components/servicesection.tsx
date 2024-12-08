import { Trophy } from "lucide-react";
import { FaHeadset } from "react-icons/fa6";
import { LuBadgeCheck } from "react-icons/lu";
import { FaHands } from "react-icons/fa";




const ServiceSection = () => {
    return(
        <>
        <section className="max-w-[1440px] h-[270px] bg-gray-100 block md:block lg:flex xl:flex gap-10 mt-10 justify-center items-center">


            <div className="flex gap-2 my-5 md:my-3 lg:my-0 xl:my-0">
                <p className="text-[45px] md:text-[45px] lg:text-[70px] xl:text-[70px]"><Trophy /></p>
                <div className="text_container">
                    <h3 className="text-[24px]">High Quality</h3>
                    <p className="text-[16px] text-gray-400">Crafted from top materials</p>
                </div>
            </div>
            <div className="flex gap-2 my-5 md:my-3 lg:my-0 xl:my-0">
                <p className="text-[45px] md:text-[45px] lg:text-[70px] xl:text-[70px]"><LuBadgeCheck /></p>
                <div className="text_container">
                    <h3 className="text-[24px]">Warranty Protection</h3>
                    <p className="text-[16px] text-gray-400">Our 2 years</p>
                </div>
            </div>

            <div className="flex gap-2 my-5 md:my-3 lg:my-0 xl:my-0">
                <p className="text-[45px] md:text-[45px] lg:text-[70px] xl:text-[70px]"><FaHands /></p>
                <div className="text_container">
                    <h3 className="text-[24px]">Free Sopping</h3>
                    <p className="text-[16px] text-gray-400">Order over 150 $</p>
                </div>
            </div>

            <div className="flex gap-2 my-5 md:my-3 lg:my-0 xl:my-0">
                <p className="text-[45px] md:text-[45px] lg:text-[70px] xl:text-[70px]"><FaHeadset /></p>
                <div className="text_container">
                    <h3 className="text-[24px]">24 / 7 Support</h3>
                    <p className="text-[16px] text-gray-400">Dadicated support</p>
                </div>
            </div>

        </section>
        </>
    );
};

export default ServiceSection;