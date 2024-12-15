import { Trophy } from "lucide-react";
import { FaHeadset } from "react-icons/fa6";
import { LuBadgeCheck } from "react-icons/lu";
import { FaHands } from "react-icons/fa";

const ServiceSection = () => {
    return (
        <>
            <section className="max-w-[1440px] mx-auto bg-gray-100 flex flex-wrap gap-5 justify-center items-center py-10 px-5">
                <div className="flex items-center gap-3 max-w-[300px]">
                    <p className="text-[45px] md:text-[55px]"><Trophy /></p>
                    <div>
                        <h3 className="text-[20px] md:text-[24px] font-semibold">High Quality</h3>
                        <p className="text-[14px] md:text-[16px] text-gray-500">Crafted from top materials</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 max-w-[300px]">
                    <p className="text-[45px] md:text-[55px]"><LuBadgeCheck /></p>
                    <div>
                        <h3 className="text-[20px] md:text-[24px] font-semibold">Warranty Protection</h3>
                        <p className="text-[14px] md:text-[16px] text-gray-500">Our 2 years</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 max-w-[300px]">
                    <p className="text-[45px] md:text-[55px]"><FaHands /></p>
                    <div>
                        <h3 className="text-[20px] md:text-[24px] font-semibold">Free Shipping</h3>
                        <p className="text-[14px] md:text-[16px] text-gray-500">Order over $150</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 max-w-[300px]">
                    <p className="text-[45px] md:text-[55px]"><FaHeadset /></p>
                    <div>
                        <h3 className="text-[20px] md:text-[24px] font-semibold">24 / 7 Support</h3>
                        <p className="text-[14px] md:text-[16px] text-gray-500">Dedicated support</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceSection;
