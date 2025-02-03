import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CartSidebar from "@/app/components/cartSidbar";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

function Header() {
    const iconSize = 24; // Standardized icon size

    return (
        <>
            {/* Desktop Header */}
            <header className="hidden sticky lg:flex w-full h-[100px] bg-white justify-between items-center px-8 z-10 shadow-lg shadow-gray-200">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Logo" width={50} height={32} className="mt-2" />
                    <span className="text-[34px] font-bold text-black">IotaRent</span>
                </div>

                {/* Navigation Menu */}
                <nav>
                    <ul className="flex gap-10 text-[16px] text-black">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/shop">Products</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </nav>

                {/* Search Bar and Icons */}
                <div className="flex items-center gap-6">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-4 py-2 border border-gray-300 rounded-md"
                        />
                        <Search size={iconSize} className="absolute right-2 top-2 text-black" />
                    </div>
                    {/* Cart Sidebar */}
                    <CartSidebar />
                    <Link href="/wishlist"><Heart size={iconSize} className="text-black" /></Link>
                    <Link href="/profile"><User size={iconSize} className="text-black" /></Link>
                </div>
            </header>

            {/* Mobile Header */}
            <header className="lg:hidden flex items-center justify-between w-full h-[66px] bg-white px-5">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Logo" width={50} height={32} className="mt-2" />
                    <span className="text-[24px] font-bold text-black">IotaRent</span>
                </div>

                {/* Hamburger Menu */}
                <Sheet>
                    <SheetTrigger>
                        <Menu size={iconSize} className="cursor-pointer" />
                    </SheetTrigger>
                    <SheetContent className="bg-white">
                        <SheetHeader>
                            <SheetTitle className="my-5">Welcome</SheetTitle>
                            <SheetDescription className="mt-4">
                                {/* Navigation Menu */}
                                <nav className="mb-8">
                                    <ul className="flex flex-col gap-4 text-[16px] text-black">
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="/products">Products</Link></li>
                                        <li><Link href="/blog">Blog</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </nav>

                                {/* Icons and Search Bar */}
                                <div className="flex flex-col items-center mt-8 gap-4">
                                    <div className="flex justify-around w-full"></div>
                                        {/* Cart Sidebar */}
                                        <CartSidebar />
                                        <Link href="/wishlist"><Heart size={iconSize} className="text-black" /></Link>
                                        <Search size={iconSize} className="text-black" />
                                    </div>
                                    <div className="w-full">
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                        />
                                    </div>
                                
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </header>
        </>
    );
}

export default Header;



// Stripe
// lemonsqueez