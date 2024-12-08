'use client'

import Image from "next/image"
import Button from "./button";
import { Heart, Share2, SlidersHorizontal } from "lucide-react";


interface products{
    id: number,
    imagePath: string,
    title: string,
    subTitle: string,
    price: number,
    delPrice?: number,
}

const productData_1: products[] = [
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
        id: 3,
        imagePath: "/image15.png",
        title: "Lolito",
        subTitle: "Luxury Big Sofa",
        price: 7000.000,
        delPrice: 1400.000
    },
]

const productData_2: products[] = [
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
        id: 2,
        imagePath: "/image10.png",
        title: "Leviosa",
        subTitle: "Stylish Cafe Chair",
        price: 2500.000,
    },
]

const ProductSection = () => {
    return(
        <section>
            <div className="flex gap-6 justify-center">
                {productData_1.map((product) => (
                    <div
                    key={product.id}
                    className="relative group w-[285px] h-[400px] bg-zinc-100 mt-8 shadow-md shadow-gray-500 overflow-hidden"
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
                        <Button text="Add to cart" onClick={ () => alert("clicked!!")} className="px-6 py-3 text-[16px] text-customBrown"/>
                        <div className="flex gap-3">
                            <span className="text-white flex gap-1 mt-4"><Share2 /> Share</span>
                            <span className="text-white flex gap-1 mt-4"><Heart /> Like</span>
                            <span className="text-white flex gap-1 mt-4"><SlidersHorizontal /> Compare</span>
                        </div>
                    </div>
                    </div>
                ))}
            </div>


            <div className="flex gap-6 justify-center">
                {productData_2.map((product) => (
                    <div
                    key={product.id}
                    className="relative group w-[285px] h-[400px] bg-zinc-100 mt-8 shadow-md shadow-gray-500 overflow-hidden"
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
                        <Button text="Add to cart" onClick={ () => alert("clicked!!")} className="px-6 py-3 text-[16px] text-customBrown"/>
                        <div className="flex gap-3">
                            <span className="text-white flex gap-1 mt-4"><Share2 /> Share</span>
                            <span className="text-white flex gap-1 mt-4"><Heart /> Like</span>
                            <span className="text-white flex gap-1 mt-4"><SlidersHorizontal /> Compare</span>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductSection;