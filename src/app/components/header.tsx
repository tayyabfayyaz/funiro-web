import { Heart, Menu, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
            <header className="hidden lg:flex w-full h-[100px] bg-white justify-between items-center px-8">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Logo" width={50} height={32} className="mt-2" />
                    <span className="text-[34px] font-bold text-black">Furniro</span>
                </div>

                {/* Navigation Menu */}
                <nav>
                    <ul className="flex gap-10 text-[16px] text-black">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/shop">Shop</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>

                {/* Icons */}
                <div>
                    <ul className="flex gap-6 text-[16px]">
                        <li><Link href="#"><User size={iconSize} /></Link></li>
                        <li><Link href="#"><Search size={iconSize} /></Link></li>
                        <li><Link href="#"><Heart size={iconSize} /></Link></li>
                        <li><Link href="#"><ShoppingCart size={iconSize} /></Link></li>
                    </ul>
                </div>
            </header>

            {/* Mobile Header */}
            <header className="lg:hidden flex items-center justify-between w-full h-[66px] bg-white px-5">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Logo" width={50} height={32} className="mt-2" />
                    <span className="text-[24px] font-bold text-black">Furniro</span>
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
                                        <li><Link href="/shop">Shop</Link></li>
                                        <li><Link href="/blog">Blog</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </nav>

                                {/* Icons */}
                                <div className="flex justify-around mt-8">
                                    <Link href="#"><User size={iconSize} /></Link>
                                    <Link href="#"><Search size={iconSize} /></Link>
                                    <Link href="#"><Heart size={iconSize} /></Link>
                                    <Link href="#"><ShoppingCart size={iconSize} /></Link>
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