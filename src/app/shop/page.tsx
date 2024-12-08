import ProductSection from "../components/productsection";
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
  
  

function ShopPage(){
    return(
        <>
        <section className="Hero_Section w-full h-[320px] flex flex-col justify-center items-center">
            <h2 className="text-[52px] font-bold">Shop</h2>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

        </section>
        <ProductSection />
        <ProductSection />
        <ProductSection />

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