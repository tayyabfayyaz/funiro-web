// 'use client';
import { createClient } from "@sanity/client";
import ProductList from "@/app/components/productList";

const client = createClient({
  projectId: "jvckhl4n",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-13",
});

interface Product {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  tags: string[];
  discountPercentage: number;
  isNew: boolean;
  slug: string;
}

// ✅ Fetch a single product by slug OR all products if no slug is provided
async function getProducts(slug?: string): Promise<Product[] | null> {
  try {
    const query = slug
      ? `*[_type == "product" && slug.current == $slug]{
          _id,
          title,
          description,
          "imageUrl": productImage.asset->url,
          price,
          tags,
          isNew,
          discountPercentage,
          "slug": slug.current
        }`
      : `*[_type == "product"]{
          _id,
          title,
          description,
          "imageUrl": productImage.asset->url,
          price,
          tags,
          isNew,
          discountPercentage,
          "slug": slug.current
        }`;

    const products = await client.fetch(query, slug ? { slug } : {});

    if (!products || (Array.isArray(products) && products.length === 0)) {
      console.error(`No products found${slug ? ` for slug: ${slug}` : ""}`);
      return null;
    }

    return Array.isArray(products) ? products : [products];
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
}

const ProductDetailPage = async ({ params }: { params?: { slug?: string } }) => {
  const products = await getProducts(params?.slug);

  if (!products || products.length === 0) {
    return <div>Product not found</div>;
  }

  return (
    <section>
      <ProductList initialProducts={products} />
    </section>
  );
};

export default ProductDetailPage;





// 'use client';
// import { createClient } from "@sanity/client";
// import ProductList from "@/app/components/productList";

// const client = createClient({
//   projectId: "jvckhl4n",
//   dataset: "production",
//   useCdn: true,
//   apiVersion: "2025-01-13",
// });

// interface Product {
//   _id: string;
//   title: string;
//   description: string;
//   imageUrl: string;
//   price: number;
//   tags: string[];
//   discountPercentage: number;
//   isNew: boolean;
//   slug: string;
// }

// // ✅ Fetch products based on whether they are new or not
// async function getProducts(isNewOnly: boolean = true): Promise<Product[] | null> {
//   try {
//     const query = `*[_type == "product" && isNew == $isNew]{
//       _id,
//       title,
//       description,
//       "imageUrl": productImage.asset->url,
//       price,
//       tags,
//       isNew,
//       discountPercentage,
//       "slug": slug.current
//     }`;

//     const products = await client.fetch(query, { isNew: isNewOnly });

//     if (!products || products.length === 0) {
//       console.error(`No products found${isNewOnly ? " that are new" : ""}`);
//       return null;
//     }

//     return products;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return null;
//   }
// }

// const ProductDetailPage = async () => {
//   // Fetch only new products
//   const products = await getProducts(true);

//   if (!products || products.length === 0) {
//     return <div>No new products found</div>;
//   }

//   return (
//     <section>
//       <ProductList initialProducts={products} />
//     </section>
//   );
// };

// export default ProductDetailPage;