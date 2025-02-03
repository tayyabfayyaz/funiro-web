import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ServiceSection from "../components/servicesection";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaTag } from "react-icons/fa6";

interface latestPosts{
  id: number,
  title: string,
  date: string,
  imagePath: string,
}

const latestPostsData: latestPosts[] = [
  {
    id: 1,
    title: "Going all-in with millenial design",
    date: "03 Aug 2022",
    imagePath: "/post1.png"
  },
  {
    id: 2,
    title: "Exploring new ways of decorating",
    date: "03 Aug 2022",
    imagePath: "/post2.png"
  },
  {
    id: 3,
    title: "Handmake pieces they took time to make",
    date: "03 Aug 2022",
    imagePath: "/post3.png"
  },
  {
    id: 4,
    title: "Modern home in millane",
    date: "03 Aug 2022",
    imagePath: "/post4.png"
  },
  {
    id: 5,
    title: "Colour full office redesign",
    date: "03 Aug 2022",
    imagePath: "/post5.png"
  },
]


function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="Hero_Section w-full h-[320px] flex flex-col justify-center items-center bg-gray-100">
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

      {/* Blog Content Section */}
      <section className="blog_container mt-[50px] flex flex-col lg:flex-row gap-6 px-4 lg:px-16">
        {/* Left Side - Blog Posts */}
        <div className="w-full lg:w-3/4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="blog_poster bg-white shadow-md rounded-md mb-10 p-6"
            >
              <Image
                src={`/blog${item}.png`}
                alt={`Blog ${item}`}
                width={900}
                height={500}
                className="w-full h-[300px] lg:h-[500px] object-cover rounded-md"
              />
              <div className="flex gap-6 justify-between mt-5">
                <p className="flex gap-2 items-center text-gray-400">
                  <FaUser /> Admin
                </p>
                <p className="flex gap-2 items-center text-gray-400">
                  <BsCalendar2DateFill /> 2022
                </p>
                <p className="flex gap-2 items-center text-gray-400">
                  <FaTag /> Wood
                </p>
              </div>
              <h3 className="text-[24px] font-bold my-3">
                Going all-in with millennial design
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                ipsum, neque magnam dolore quae asperiores suscipit obcaecati
                fuga odio repudiandae deleniti at velit omnis nisi, modi
                necessitatibus rerum! Tempore, sit?
              </p>
            </div>
          ))}
        </div>

        {/* Right Side - Categories, Search, and Reviews */}
        <div className="w-full lg:w-1/4 flex flex-col gap-6">
          {/* Search Bar */}
          <div className="bg-white shadow-md rounded-md p-4">
            <input
              type="text"
              placeholder="Search blog"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Categories */}
          <div className="bg-white shadow-md rounded-md p-4">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="leading-8">
              <li>Crafts</li>
              <li>Design</li>
              <li>Handmade</li>
              <li>Interior</li>
              <li>Wood</li>
            </ul>
          </div>

          {/* Blog Reviews */}
          <div className="bg-white shadow-md rounded-md p-4">
            <h3 className="text-lg font-bold mb-4">Latest Posts</h3>
            {latestPostsData.map((data) => (
              <div key={data.id} className="flex gap-4 mb-4">
                <Image
                  src={data.imagePath}
                  alt={data.title}
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
                <div>
                  <h4 className="text-md font-bold">{data.title}</h4>
                  <p className="text-sm text-gray-600">
                    {data.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Section */}
      <ServiceSection />
    </>
  );
}

export default BlogPage;
