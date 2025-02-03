"use client";

import { useCart } from "@/app/context/cartContext";
import { useState } from "react";
import { createClient } from "@sanity/client";

interface AddToCartButtonProps {
  product: Product;
}

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
}

const client = createClient({
  projectId: "jvckhl4n",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-13",
});

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      const fetchedProduct = await client.fetch(
        `*[_type == "product" && _id == $id][0]{
          _id,
          title,
          price,
          "imageUrl": productImage.asset->url
        }`,
        { id: product._id }
      );

      if (fetchedProduct) {
        const item = {
          id: fetchedProduct._id,
          name: fetchedProduct.title,
          price: fetchedProduct.price,
          quantity: 1,
          image: fetchedProduct.imageUrl,
        };
        addToCart(item);
        console.log("Product added to cart:", item);
      } else {
        console.error("Product not found.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
    setLoading(false);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
      disabled={loading}
    >
      {loading ? "Loading..." : "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;
