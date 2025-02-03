'use client'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import ServiceSection from "../components/servicesection";
import { IoCall } from "react-icons/io5";
import { FaLocationDot, FaClock  } from "react-icons/fa6";
import { Button } from "../components/Btn";

  
  

function ContactPage(){
    return(
        <>
        <section className="Hero_Section w-full h-[320px] flex flex-col justify-center items-center">
            <h2 className="text-[52px] font-bold">Contact</h2>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/shop">Contact</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </section>


        <h2 className="text-[24px] md:text-[24px] lg:text-[32px] xl:text-[32px] text-center mt-16 font-bold">Get in touch with us</h2>
        <p className="text-[14px] md:text-[14px] lg:text-[16px] xl:text-[16px] text-center">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.</p>
        <p className="text-[14px] md:text-[14px] lg:text-[16px] xl:text-[16px] text-center mb-20">Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>

        <section className="contact_section block md:block lg:flex xl:flex">

            <div className="contact_details w-full md:w-full lg:w-1/4 xl:w-1/4 pl-10 block md:block lg:flex xl:flex flex-col justify-center items-start">


                <div className="Phone mt-10">
                    <span className="text-[24px]"></span>
                    <span className="text-[24px] flex gap-2 font-bold"><FaLocationDot className="mt-1" />Address</span>
                    <p className="text-[16px] ml-10">236 5th SE Avenue, New York NY10000, United States</p>
                </div>

                <div className="location mt-10">
                    <span className="text-[24px]"></span>
                    <span className="text-[24px] flex gap-2 font-bold"><IoCall className="mt-1" />Phone</span>
                    <p className="text-[16px] ml-10">+92 3182945727</p>
                    <p className="text-[16px] ml-10">+92 3182945727</p>
                </div>

                <div className="Clock mt-10">
                    <span className="text-[24px]"></span>
                    <span className="text-[24px] flex gap-2 font-bold"><FaClock className="mt-1" />Working Time</span>
                    <p className="text-[16px] ml-10">Monday-Friday 9:00-22:00</p>
                    <p className="text-[16px] ml-10">Saturday-Sunday 9:00-21:00</p>
                </div>
            </div>


            <div className="contact_form w-full md:w-full lg:w-3/4 xl:w-3/4 block md:block lg:flex xl:flex flex-col justify-center items-center mt-5 md:mt-5 lg:mt-0 xl:mt-0 px-2 md:px-2 lg:px-0 xl:px-0">
                

                <form action="" method="post">
                    <label htmlFor="name" className="mt-10 mb-5 text-[24px]">Your Name</label>
                    <input type="text" name="name" id="name" className="block w-full md:w-full lg:w-[520px] xl:w-[520px] h-[50px] md:h-[50px] lg:h-[75px] xl:h-[75] bg-transparent border-2 border-gray-200 px-3" />
                    <label htmlFor="name" className="mt-10 mb-5 text-[24px]">Your Email</label>
                    <input type="email" name="email" id="email" className="block w-full md:w-full lg:w-[520px] xl:w-[520px] h-[50px] md:h-[50px] lg:h-[75px] xl:h-[75] bg-transparent border-2 border-gray-200 px-3" />
                    <label htmlFor="name" className="mt-10 mb-5 text-[24px]">Subject</label>
                    <input type="text" name="subject" id="subject" className="block w-full md:w-full lg:w-[520px] xl:w-[520px] h-[50px] md:h-[50px] lg:h-[75px] xl:h-[75] bg-transparent border-2 border-gray-200 px-3" />
                    <label htmlFor="name" className="mt-10 mb-5 text-[24px]">Your Name</label>
                    <textarea name="message" id="message" className="block w-full md:w-full lg:w-[520px] xl:w-[520px] h-[50px] md:h-[50px] lg:h-[75px] xl:h-[75] bg-transparent border-2 border-gray-200 px-3"></textarea>    

                    <Button text="Submit" onClick={() => alert("Clicked!!")} className="py-3 px-6 my-5 bg-customBrown text-[24px] text-white font-bold block mx-auto"/>
                </form>
            </div>

        </section>

        
        
        <ServiceSection />

        </>
    );
};

export default ContactPage;