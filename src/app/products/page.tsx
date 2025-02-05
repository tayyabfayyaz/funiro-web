import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import ServiceSection from "../components/servicesection";
  import { createClient } from "@sanity/client";
  import ProductList from "@/app/components/productList";
  import ProductSection from '@/app/components/productsection';
  
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
  
  async function getProducts(): Promise<Product[]> {
  
    try {
      const query = `*[_type == "product"]{
        _id,
        title,
        description,
        "imageUrl": productImage.asset->url,
        price,
        tags,
        isNew,
        "slug": slug.current
        isNew
      }`;
      const products = await client.fetch(query);
  
      return products || []; // Return empty array if no products
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  }
  
  

const ShopPage = async () => {
    const products = await getProducts();
    return(
        <>
        <section className="Hero_Section w-full h-[320px] flex flex-col justify-center items-center bg-cover bg-center mb-10" style={{ backgroundImage: 'url(banner2.png)' }}>
            <h2 className="text-[52px] font-bold">Products</h2>
            <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbLink href="/products">Products</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
            </Breadcrumb>
        </section>
        <div className="">
            <h2 className="text-center font-bold text-[36px]">Our Products</h2>
        </div>

        <ProductSection />
        <ProductList initialProducts={products} />

        <Pagination className="mt-10">
            <PaginationContent>
                <PaginationItem>
                <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                <PaginationLink href="#" className="p-5 bg-gray-200 rounded-lg text-customBrown text-[16px]">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                <PaginationLink href="#" className="p-5 bg-gray-200 rounded-lg text-customBrown text-[16px]">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                <PaginationLink href="#" className="p-5 bg-gray-200 rounded-lg text-customBrown text-[16px]">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>

        <ServiceSection />

        </>
    );
};

export default ShopPage;