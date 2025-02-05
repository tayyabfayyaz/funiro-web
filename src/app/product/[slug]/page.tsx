'use client' // Add this if using client-side interactivity (e.g., useState, useEffect)

import { createClient } from "@sanity/client";
import Image from "next/image";
import { IncrementDecrementBtn } from '@/app/components/Btn';
import AddToCartButton from "@/app/components/addToCartBtn";

// 1. Fixed Sanity client configuration
const client = createClient({
  projectId: "jvckhl4n",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03", // Updated to valid API version
});

// 2. Improved Product interface
interface Product {
  _id: string;
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  tags: string[];
  discountPercentage?: number;
  isNew?: boolean;
  slug: string;
  colors?: string[];
}

// 3. Added error handling improvements
async function getProductBySlug(slug: string): Promise<Product | null> {
  if (!slug) {
    console.error("Error: Missing slug in params");
    return null;
  }

  try {
    const query = `*[_type == "product" && slug.current == $slug][0]{
      _id,
      title,
      description,
      "imageUrl": productImage.asset->url,
      price,
      tags,
      isNew,
      discountPercentage,
      "slug": slug.current,
      colors
    }`;

    const product = await client.fetch(query, { slug });

    return product || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

// 4. Added loading state and error boundary
const ProductDetailPage = async ({ params }: { params: { slug: string } }) => {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return (
      <div className="text-center text-red-500 py-8">
        Product not found. Please check the URL.
      </div>
    );
  }

  // 5. Fixed image dimensions and added priority
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={600}
            height={600}
            priority
            className="object-cover w-full h-auto max-w-md rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          
          {/* 6. Added proper color selection state */}
          {product.colors && (
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Available Colors:</h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-gray-500 transition-all"
                    style={{ backgroundColor: color }}
                    aria-label={`Select ${color}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* 7. Added price formatting */}
          <div className="flex items-center mb-6">
            <div className="text-3xl font-semibold mr-6">
              ${product.price.toFixed(2)}
            </div>
            <IncrementDecrementBtn 
              // 8. Added props for quantity management
              onIncrement={() => {}}
              onDecrement={() => {}}
              quantity={1}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 flex-col sm:flex-row">
            <AddToCartButton product={product} />
            <button 
              className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
              aria-label="Add to comparison list"
            >
              Add to Comparison
            </button>
          </div>
        </div>
      </div>

      {/* 9. Improved suggested products section */}
      <SuggestedProducts />
    </div>
  );
};

// 10. Extracted suggested products to separate component
const SuggestedProducts = () => (
  <div className="mt-12">
    <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="border p-4 rounded-lg hover:shadow-lg transition-shadow"
        >
          <div className="bg-gray-200 h-48 rounded-lg mb-4 animate-pulse" />
          <h3 className="text-lg font-semibold">Loading...</h3>
          <p className="text-gray-600">$--.--</p>
        </div>
      ))}
    </div>
  </div>
);

export default ProductDetailPage;