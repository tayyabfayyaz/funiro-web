"use client"

import Image from "next/image";
import { Button } from "./Btn";
import ProductDescription from '@/app/components/productDescription'
import { useRouter } from 'next/navigation';
import { FaRegHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";



interface Product {
  imageUrl: string
  _id: string
  title: string
  description: string
  price: number
  tags?: string[]
  discountPercentage?: number
  slug: string
  isNew?: boolean
}


const ProductList = ({ initialProducts }: { initialProducts: Product[] | Product }) => {
  const products = Array.isArray(initialProducts) ? initialProducts : [initialProducts];
  const router = useRouter();

  const navigateToProductDetail = (slug?: string) => {
    if (!slug) {
      console.error("Product slug is missing:", slug);
      return;
    }
    router.push(`/product/${slug}`);
  };
  
  products.forEach((product) => {
    console.log("Product Data:", product);
    console.log("Product Slug:", product.slug);
  });

  return(
    <>
    <div className="block md:block lg:flex xl:flex gap-6 justify-center flex-wrap overflow-x-auto">
      {products.map((product) => (
            <div
              key={product._id}
              className="relative group block mx-auto md:mx-auto lg:mx-0 xl:mx-0 py-3 w-[285px] h-fit bg-white mt-8 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {product.isNew && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">New</span>
              )}
    
              <Image
                src={product.imageUrl || "/placeholder.svg"} // Placeholder for missing image
                alt={product.title || "No title available"}
                width={285}
                height={300}
                className="w-full h-[300px] object-cover"
              />
    
              <div className="p-4">
                <h3 className="text-[24px] font-semibold text-gray-800">{product.title}</h3>
                <ProductDescription description={product.description} />
                <div className="flex items-center mt-2">
                  <span className="text-[24px] text-gray-800">${product.price}</span>
                  {product.discountPercentage && (
                    <span className="text-[16px] text-gray-500 ml-2 line-through">
                      ${((product.price * 100) / (100 - product.discountPercentage)).toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
    
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                  text="Product Info"
                  onClick={() => navigateToProductDetail(product.slug)}
                  className="px-6 py-3 text-[16px] text-white bg-customBrown rounded-lg hover:bg-white hover:text-customBrown mb-2"
                  />
                  <div className="flex space-x-4 mt-2">
                  <button className="text-white hover:text-red-500 transition-colors duration-300">
                    <i className="fas fa-heart"><FaRegHeart className="text-xl" /></i>
                  </button>
                  <button className="text-white hover:text-green-500 transition-colors duration-300">
                    <i className="fas fa-share-alt"><IoShareSocialOutline className="text-xl" /></i>
                  </button>
                  </div>
                </div>
            </div>
          ))   
        }
    </div>
    </>
  );
};

export default ProductList;
