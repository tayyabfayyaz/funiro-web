// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import ProductSection from '@/app/components/productsection';
// import { useParams } from 'next/navigation';

// // Mock data for demonstration
// const products = [
//     {
//       id: "1",
//       name: "Product 1",
//       price: 99.99,
//       rating: 4.5,
//       description:
//         "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
//       longDescription: "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
//       mainImage: "/sofa1.png",
//       images: ["/sofa2.png", "/sofa3.png", "/sofa4.png", "/sofa5.png"],
//       colors: ["bg-purple-500", "bg-black", "bg-brown-500"],
//       extraImages: ["/sofa6.png", "/sofa7.png"],
//       relatedProducts: [
//         { id: "2", name: "Product 2", price: 59.99, image: "/related1.jpg" },
//         { id: "3", name: "Product 3", price: 79.99, image: "/related2.jpg" },
//       ],
//     },
//     {
//       id: "2",
//       name: "Product 1",
//       price: 99.99,
//       rating: 4.5,
//       description:
//         "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
//       longDescription: "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
//       mainImage: "/image10.png",
//       images: ["/sofa2.png", "/sofa3.png", "/sofa4.png", "/sofa5.png"],
//       colors: ["bg-purple-500", "bg-black", "bg-brown-500"],
//       extraImages: ["/sofa6.png", "/sofa7.png"],
//       relatedProducts: [
//         { id: "2", name: "Product 2", price: 59.99, image: "/related1.jpg" },
//         { id: "3", name: "Product 3", price: 79.99, image: "/related2.jpg" },
//       ],
//     },
//     {
//       id: "3",
//       name: "Product 1",
//       price: 99.99,
//       rating: 4.5,
//       description:
//         "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
//       longDescription: "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
//       mainImage: "/image11.png",
//       images: ["/sofa2.png", "/sofa3.png", "/sofa4.png", "/sofa5.png"],
//       colors: ["bg-purple-500", "bg-black", "bg-brown-500"],
//       extraImages: ["/sofa6.png", "/sofa7.png"],
//       relatedProducts: [
//         { id: "2", name: "Product 2", price: 59.99, image: "/related1.jpg" },
//         { id: "3", name: "Product 3", price: 79.99, image: "/related2.jpg" },
//       ],
//     },
//     {
//       id: "4",
//       name: "Product 1",
//       price: 99.99,
//       rating: 4.5,
//       description:
//         "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
//       longDescription:
//         "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
//       mainImage: "/image15.png",
//       images: ["/sofa2.png", "/sofa3.png", "/sofa4.png", "/sofa5.png"],
//       colors: ["bg-purple-500", "bg-black", "bg-brown-500"],
//       extraImages: ["/sofa6.png", "/sofa7.png"],
//       relatedProducts: [
//         { id: "2", name: "Product 2", price: 59.99, image: "/related1.jpg" },
//         { id: "3", name: "Product 3", price: 79.99, image: "/related2.jpg" },
//       ],
//     },
//     {
//       id: "5",
//       name: "Product 1",
//       price: 99.99,
//       rating: 4.5,
//       description:"Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
//       longDescription: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
//       mainImage: "/image16.png",
//       images: ["/sofa2.png", "/sofa3.png", "/sofa4.png", "/sofa5.png"],
//       colors: ["bg-purple-500", "bg-black", "bg-brown-500"],
//       extraImages: ["/sofa6.png", "/sofa7.png"],
//       relatedProducts: [
//         { id: "2", name: "Product 2", price: 59.99, image: "/related1.jpg" },
//         { id: "3", name: "Product 3", price: 79.99, image: "/related2.jpg" },
//       ],
//     },
//     // Add more products as needed
//   ];

// interface Params {
//   params: {
//     id: string;
//   };
// }

// const ProductPage = async ({ params }: Params) => {
//   const { id } = useParams()
//   const product = products.find((item) => item.id === id);

//   if (!product) {
//     return <p>Product not found.</p>;
//   }

//   // State and event handlers
//   const [quantity, setQuantity] = useState(1);
//   const handleQuantityChange = (increment: number) => {
//     setQuantity((prev) => Math.max(1, prev + increment));
//   };

//   return (
//     <div className="product-page container mx-auto px-4 py-6">
//       {/* Product Section */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Left - Images */}
//         <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-4">
//           {/* Thumbnails */}
//           <div className="thumbnails flex flex-row lg:flex-col gap-2 ">
//             {product.images.map((img, index) => (
//               <Image
//                 key={index}
//                 src={img}
//                 alt={`Thumbnail ${index + 1}`}
//                 width={76}
//                 height={80}
//                 className="w-[65px] lg:w-[76px] h-[80px] object-cover cursor-pointer bg-gray-300"
//               />
//             ))}
//           </div>
//           {/* Main Image */}
//           <div className="main-image">
//             <Image
//               src={product.mainImage}
//               alt={product.name}
//               width={480}
//               height={500}
//               className="w-[480px] h-[500px] object-cover bg-gray-200"
//             />
//           </div>
//         </div>

//         {/* Right - Details */}
//         <div className="w-full lg:w-1/2 flex flex-col gap-4">
//           <h1 className="text-2xl font-bold">{product.name}</h1>
//           <p className="text-lg text-gray-600">${product.price}</p>
//           <p className="text-yellow-500">⭐ {product.rating} Stars</p>
//           <p className="text-gray-700">{product.description}</p>

//           {/* Size Selector */}
//           <div className="flex gap-4">
//             {['XL', 'LG', 'MD'].map((size, index) => (
//               <button
//                 key={index}
//                 className={`px-4 py-2 ${
//                   size === 'XL' ? 'bg-customBrown text-white' : 'bg-gray-200'
//                 } rounded`}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>

//           {/* Color Selector */}
//           <div className="flex gap-4">
//             {product.colors.map((color, index) => (
//               <div
//                 key={index}
//                 className={`w-6 h-6 rounded-full border-2 ${color}`}
//               ></div>
//             ))}
//           </div>

//           {/* Quantity and Actions */}
//           <div className="block lg:flex gap-6">
//             <div className="flex items-center gap-4 border-2 border-gray-300 w-fit px-3">
//               <button
//                 onClick={() => handleQuantityChange(-1)}
//                 className="px-4 py-2 rounded"
//               >
//                 -
//               </button>
//               <span>{quantity}</span>
//               <button
//                 onClick={() => handleQuantityChange(1)}
//                 className="px-4 py-2 rounded"
//               >
//                 +
//               </button>
//             </div>
//             <button className="px-8 py-2 bg-gray-50 text-black border-2 border-gray-300 rounded-xl my-3 lg:my-0 mr-1">
//               Add to Cart
//             </button>
//             <button className="px-8 py-2 bg-gray-50 text-black border-2 border-gray-300 rounded-xl my-3 lg:my-0">
//               Compare
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Tabs Section */}
//       <div className="tabs mt-12">
//         <div className="block lg:flex gap-4 border-b pb-2 justify-center items-center text-[26px] lg:text-[36px]">
//           {['Description', 'Additional Information', 'Reviews'].map(
//             (tab, index) => (
//               <button
//                 key={index}
//                 className={`px-4 py-2 ${
//                   tab === 'Description' ? 'text-black' : 'text-gray-400'
//                 }`}
//               >
//                 {tab}
//               </button>
//             )
//           )}
//         </div>
//         <div className="mt-4">
//           <p className="text-gray-400 text-[16px]">{product.longDescription}</p>
//           <div className="mt-4 lg:grid grid-cols-2 gap-4">
//             {product.extraImages.map((img, index) => (
//               <Image
//                 key={index}
//                 src={img}
//                 alt={`Extra ${index + 1}`}
//                 width={400}
//                 height={300}
//                 className="bg-gray-200 w-[600px] h-[350px] mb-3 lg:mb-0"
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Related Products */}
//       <h2 className="text-2xl font-bold mb-4 text-center mt-12">
//         Related Products
//       </h2>
//       <ProductSection />
//       <button className="px-6 py-3 my-8 border-2 border-customBrown text-black bg-transparent block mx-auto">
//         Show More
//       </button>
//     </div>
//   );
// };

// export default ProductPage;












'use client';

import { useState } from 'react';
import Image from 'next/image';
import ProductSection from '@/app/components/productsection';
import { useParams } from 'next/navigation';

// Mock data for demonstration
const products = [
    {
      id: "1",
      name: "Product 1",
      price: 99.99,
      rating: 4.5,
      description:
        "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
      longDescription: "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
      mainImage: "/sofa1.png",
      images: ["/sofa2.png", "/sofa3.png", "/sofa4.png", "/sofa5.png"],
      colors: ["bg-purple-500", "bg-black", "bg-brown-500"],
      extraImages: ["/sofa6.png", "/sofa7.png"],
      relatedProducts: [
        { id: "2", name: "Product 2", price: 59.99, image: "/related1.jpg" },
        { id: "3", name: "Product 3", price: 79.99, image: "/related2.jpg" },
      ],
    },
    {
      id: "2",
      name: "Product 1",
      price: 99.99,
      rating: 4.5,
      description:
        "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
      longDescription: "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
      mainImage: "/image10.png",
      images: ["/sofa2.png", "/sofa3.png", "/sofa4.png", "/sofa5.png"],
      colors: ["bg-purple-500", "bg-black", "bg-brown-500"],
      extraImages: ["/sofa6.png", "/sofa7.png"],
      relatedProducts: [
        { id: "2", name: "Product 2", price: 59.99, image: "/related1.jpg" },
        { id: "3", name: "Product 3", price: 79.99, image: "/related2.jpg" },
      ],
    },
    {
      id: "3",
      name: "Product 1",
      price: 99.99,
      rating: 4.5,
      description:
        "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
      longDescription: "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
      mainImage: "/image11.png",
      images: ["/sofa2.png", "/sofa3.png", "/sofa4.png", "/sofa5.png"],
      colors: ["bg-purple-500", "bg-black", "bg-brown-500"],
      extraImages: ["/sofa6.png", "/sofa7.png"],
      relatedProducts: [
        { id: "2", name: "Product 2", price: 59.99, image: "/related1.jpg" },
        { id: "3", name: "Product 3", price: 79.99, image: "/related2.jpg" },
      ],
    },
    {
      id: "4",
      name: "Product 1",
      price: 99.99,
      rating: 4.5,
      description:
        "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
      longDescription:
        "Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
      mainImage: "/image15.png",
      images: ["/sofa2.png", "/sofa3.png", "/sofa4.png", "/sofa5.png"],
      colors: ["bg-purple-500", "bg-black", "bg-brown-500"],
      extraImages: ["/sofa6.png", "/sofa7.png"],
      relatedProducts: [
        { id: "2", name: "Product 2", price: 59.99, image: "/related1.jpg" },
        { id: "3", name: "Product 3", price: 79.99, image: "/related2.jpg" },
      ],
    },
    {
      id: "5",
      name: "Product 1",
      price: 99.99,
      rating: 4.5,
      description:"Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
      longDescription: "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.",
      mainImage: "/image16.png",
      images: ["/sofa2.png", "/sofa3.png", "/sofa4.png", "/sofa5.png"],
      colors: ["bg-purple-500", "bg-black", "bg-brown-500"],
      extraImages: ["/sofa6.png", "/sofa7.png"],
      relatedProducts: [
        { id: "2", name: "Product 2", price: 59.99, image: "/related1.jpg" },
        { id: "3", name: "Product 3", price: 79.99, image: "/related2.jpg" },
      ],
    },
    // Add more products as needed
  ];

const ProductPage = () => {
  const params = useParams(); // Get dynamic params
  const id = params?.id; // Extract the `id` from params safely
  // Find the product by ID
  const product = products.find((item) => item.id === id);

  // State and event handlers
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (increment: number) => {
    setQuantity((prev) => Math.max(1, prev + increment));
  };


  if (!product) {
    return <p>Product not found.</p>;
  }


  return (
    <div className="product-page container mx-auto px-4 py-6">
      {/* Product Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left - Images */}
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-4">
          {/* Thumbnails */}
          <div className="thumbnails flex flex-row lg:flex-col gap-2 ">
            {product.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                width={76}
                height={80}
                className="w-[65px] lg:w-[76px] h-[80px] object-cover cursor-pointer bg-gray-300"
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="main-image">
            <Image
              src={product.mainImage}
              alt={product.name}
              width={480}
              height={500}
              className="w-[480px] h-[500px] object-cover bg-gray-200"
            />
          </div>
        </div>

        {/* Right - Details */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-lg text-gray-600">${product.price}</p>
          <p className="text-yellow-500">⭐ {product.rating} Stars</p>
          <p className="text-gray-700">{product.description}</p>

          {/* Size Selector */}
          <div className="flex gap-4">
            {['XL', 'LG', 'MD'].map((size, index) => (
              <button
                key={index}
                className={`px-4 py-2 ${
                  size === 'XL' ? 'bg-customBrown text-white' : 'bg-gray-200'
                } rounded`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Color Selector */}
          <div className="flex gap-4">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className={`w-6 h-6 rounded-full border-2 ${color}`}
              ></div>
            ))}
          </div>

          {/* Quantity and Actions */}
          <div className="block lg:flex gap-6">
            <div className="flex items-center gap-4 border-2 border-gray-300 w-fit px-3">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="px-4 py-2 rounded"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="px-4 py-2 rounded"
              >
                +
              </button>
            </div>
            <button className="px-8 py-2 bg-gray-50 text-black border-2 border-gray-300 rounded-xl my-3 lg:my-0 mr-1">
              Add to Cart
            </button>
            <button className="px-8 py-2 bg-gray-50 text-black border-2 border-gray-300 rounded-xl my-3 lg:my-0">
              Compare
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="tabs mt-12">
        <div className="block lg:flex gap-4 border-b pb-2 justify-center items-center text-[26px] lg:text-[36px]">
          {['Description', 'Additional Information', 'Reviews'].map(
            (tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 ${
                  tab === 'Description' ? 'text-black' : 'text-gray-400'
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>
        <div className="mt-4">
          <p className="text-gray-400 text-[16px]">{product.longDescription}</p>
          <div className="mt-4 lg:grid grid-cols-2 gap-4">
            {product.extraImages.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Extra ${index + 1}`}
                width={400}
                height={300}
                className="bg-gray-200 w-[600px] h-[350px] mb-3 lg:mb-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <h2 className="text-2xl font-bold mb-4 text-center mt-12">
        Related Products
      </h2>
      <ProductSection />
      <button className="px-6 py-3 my-8 border-2 border-customBrown text-black bg-transparent block mx-auto">
        Show More
      </button>
    </div>
  );
};

export default ProductPage;
