import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import ServiceSection from "../components/servicesection";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaTag } from "react-icons/fa6";

  

function BlogPage(){
    return(
        <>
        <section className="Hero_Section w-full h-[320px] flex flex-col justify-center items-center">
            <h2 className="text-[52px] font-bold">Blog</h2>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </section>

        <section className="blog_container mt-[150px]">
            <div className="m-3/4">
                <div className="blog_poster w-3/4 px-12 mt-[50px]">
                    <Image src="/blog1.png" alt="Image" width={100} height={100} className="w-full h-[500px]" />
                    <div className="flex gap-3 justify-around mt-5">
                        <p className="flex gap-1 text-[16px] text-gray-400"><FaUser />Admin</p>
                        <p className="flex gap-1 text-[16px] text-gray-400"><BsCalendar2DateFill />2022</p>
                        <p className="flex gap-1 text-[16px] text-gray-400"><FaTag />Wood</p>
                    </div>
                        <h3 className="text-[24px] font-bold my-3">Going all-in with millennial design</h3>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Illum ipsum, neque magnam dolore quae asperiores suscipit obcaecati fuga odio 
                            repudiandae deleniti at velit omnis nisi, modi necessitatibus rerum! Tempore, sit?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Illum ipsum, neque magnam dolore quae asperiores suscipit obcaecati fuga odio 
                            repudiandae deleniti at velit omnis nisi, modi necessitatibus rerum! Tempore, sit?
                        </p>
                </div>

                <div className="blog_poster w-3/4 px-12 mt-[50px]">
                    <Image src="/blog2.png" alt="Image" width={100} height={100} className="w-full h-[500px]" />
                    <div className="flex gap-3 justify-around mt-5">
                        <p className="flex gap-1 text-[16px] text-gray-400"><FaUser />Admin</p>
                        <p className="flex gap-1 text-[16px] text-gray-400"><BsCalendar2DateFill />2022</p>
                        <p className="flex gap-1 text-[16px] text-gray-400"><FaTag />Wood</p>
                    </div>
                        <h3 className="text-[24px] font-bold my-3">Going all-in with millennial design</h3>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Illum ipsum, neque magnam dolore quae asperiores suscipit obcaecati fuga odio 
                            repudiandae deleniti at velit omnis nisi, modi necessitatibus rerum! Tempore, sit?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Illum ipsum, neque magnam dolore quae asperiores suscipit obcaecati fuga odio 
                            repudiandae deleniti at velit omnis nisi, modi necessitatibus rerum! Tempore, sit?
                        </p>
                </div>

                <div className="blog_poster w-3/4 px-12 mt-[50px]">
                    <Image src="/blog3.png" alt="Image" width={100} height={100} className="w-full h-[500px]" />
                    <div className="flex gap-3 justify-around mt-5">
                        <p className="flex gap-1 text-[16px] text-gray-400"><FaUser />Admin</p>
                        <p className="flex gap-1 text-[16px] text-gray-400"><BsCalendar2DateFill />2022</p>
                        <p className="flex gap-1 text-[16px] text-gray-400"><FaTag />Wood</p>
                    </div>
                        <h3 className="text-[24px] font-bold my-3">Going all-in with millennial design</h3>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Illum ipsum, neque magnam dolore quae asperiores suscipit obcaecati fuga odio 
                            repudiandae deleniti at velit omnis nisi, modi necessitatibus rerum! Tempore, sit?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Illum ipsum, neque magnam dolore quae asperiores suscipit obcaecati fuga odio 
                            repudiandae deleniti at velit omnis nisi, modi necessitatibus rerum! Tempore, sit?
                        </p>
                </div>
            </div>

            <div className="m-1/3">
                <ul className="leading-10">
                    <li>Crafts</li>
                    <li>Design</li>
                    <li>Handmade</li>
                    <li>Intesior</li>
                    <li>Wood</li>
                </ul>
            </div>
        </section>

        <ServiceSection />

        </>
    );
};

export default BlogPage;