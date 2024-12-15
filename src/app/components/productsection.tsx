'use client'

import Image from "next/image"
import Button from "./Btn";
import { Heart, Share2, SlidersHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";


interface products{
    id: number,
    imagePath: string,
    title: string,
    subTitle: string,
    price: number,
    delPrice?: number,
}

const productData: products[] = [
    {
        id: 1,
        imagePath: "/image3.png",
        title: "Syltherine",
        subTitle: "Stylish Cafe Chair",
        price: 2000.000,
        delPrice: 3500.000
    },

    {
        id: 2,
        imagePath: "/image4.png",
        title: "Leviosa",
        subTitle: "Stylish Cafe Chair",
        price: 2500.000,
    },

    {
        id: 3,
        imagePath: "/image5.png",
        title: "Lolito",
        subTitle: "Luxury Big Sofa",
        price: 7000.000,
        delPrice: 1400.000
    },

    {
        id: 4,
        imagePath: "/image15.png",
        title: "Lolito",
        subTitle: "Luxury Big Sofa",
        price: 7000.000,
        delPrice: 1400.000
    },

    {
        id: 5,
        imagePath: "/image3.png",
        title: "Syltherine",
        subTitle: "Stylish Cafe Chair",
        price: 2000.000,
        delPrice: 3500.000
    },

    {
        id: 6,
        imagePath: "/image4.png",
        title: "Leviosa",
        subTitle: "Stylish Cafe Chair",
        price: 2500.000,
    },

    {
        id: 7,
        imagePath: "/image5.png",
        title: "Lolito",
        subTitle: "Luxury Big Sofa",
        price: 7000.000,
        delPrice: 1400.000
    },

    {
        id: 8,
        imagePath: "/image10.png",
        title: "Leviosa",
        subTitle: "Stylish Cafe Chair",
        price: 2500.000,
    },
];

const ProductSection = () => {

        const router = useRouter();
      
        const handleCardClick = (id: number) => {
          router.push(`/product/${id}`); // Navigate to the dynamic product page
        };
    

    return(
        <section>
            <div className="block md:block lg:flex xl:flex gap-6 justify-center flex-wrap">
                {productData.map((product) => (
                <div
                    key={product.id}
                    onClick={() => handleCardClick(product.id)}
                    className="relative group block mx-auto md:mx-auto lg:mx-0 xl:mx-0 py-3 w-[285px] h-fit bg-zinc-100 mt-8 shadow-sm shadow-gray-500 overflow-hidden"
                >
                    {/* Product Image */}
                    <Image
                    src={product.imagePath}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="w-[285px] h-[300px] object-cover"
                    />

                    {/* Product Details */}
                    <div className="p-2">
                    <h3 className="text-[24px] font-semibold">{product.title}</h3>
                    <p className="text-[16px] text-gray-500">{product.subTitle}</p>
                    <span className="text-[24px]">Rp {product.price}</span>
                    <span className="text-[16px] text-gray-500 ml-2">
                        <del>Rp {product.delPrice}</del>
                    </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                        text="Add to cart"
                        onClick={() => alert("clicked!!")}
                        className="px-6 py-3 text-[16px] text-customBrown"
                    />
                    <div className="flex gap-3">
                        <span className="text-white flex gap-1 mt-4">
                        <Share2 /> Share
                        </span>
                        <span className="text-white flex gap-1 mt-4">
                        <Heart /> Like
                        </span>
                        <span className="text-white flex gap-1 mt-4">
                        <SlidersHorizontal /> Compare
                        </span>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
};

export default ProductSection;