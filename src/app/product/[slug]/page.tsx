import { createClient } from "@sanity/client";
import Image from "next/image";
import { IncrementDecrementBtn } from '@/app/components/Btn';
import AddToCartButton from "@/app/components/addToCartBtn";

const client = createClient({
  projectId: "jvckhl4n",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-13",
});

interface Product {
  _id: string;
  id: string;
  name: string;
  sku: string;
  currency: string;
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

async function getProductBySlug(slug: string): Promise<Product | null> {
  if (!slug) {
    console.error("Error: Missing slug in params");
    return null;
  }

  try {
    const query = `*[_type == "product" && slug.current == $slug][0]{
      _id,
      "id": _id,
      "name": title,
      "sku": _id,
      "currency": "USD",
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

    if (!product) {
      console.error(`No product found for slug: ${slug}`);
      return null;
    }

    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

const ProductDetailPage = async ({ params }: { params: { slug: string } }) => {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

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
            className="object-cover w-full h-full max-w-md max-h-md rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <div className="flex items-center mb-6">
            <span className="text-yellow-500 mr-2">★★★★☆</span>
            <span className="text-gray-600">(120 reviews)</span>
          </div>
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Available Colors */}
          {product.colors && (
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Available Colors:</h3>
              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-gray-500 transition-all"
                    style={{ backgroundColor: color }}
                    aria-label={`Select ${color}`}
                  ></button>
                ))}
              </div>
            </div>
          )}

          {/* Price and Quantity */}
          <div className="flex items-center mb-6">
            <div className="text-3xl font-semibold mr-6">${product.price.toFixed(2)}</div>
            <div className="flex items-center">
              <IncrementDecrementBtn />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <AddToCartButton product={product} />
            <button className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
              Add to Comparison
            </button>
          </div>
        </div>
      </div>

      {/* Suggested Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Placeholder for suggested products */}
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="border p-4 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
              <h3 className="text-lg font-semibold">Product {index}</h3>
              <p className="text-gray-600">$99.99</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;