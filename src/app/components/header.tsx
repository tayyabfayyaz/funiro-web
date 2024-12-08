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
  } from "@/components/ui/sheet"
  

function Header(){
    return(
        <><header className="h-[100px] max-w-[1440px] bg-white hidden md:hidden lg:flex xl:flex justify-around items-center">
            <div className="logo_container flex gap-1">
                <Image src="/logo.png" alt="Logo" width={100} height={100} className="w-[50px] h-[32px] mt-2" />
                <span className="text-[34px] text-black font-bold">Furniro</span>
            </div>
            <div className="menu_Container">
                <ul className="flex gap-12 text-black text-[16px]">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/shop">Shop</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>

            <div className="icons_container">
                <ul className="flex gap-10 text-[16px]">
                    <li><Link href="#"><User /></Link></li>
                    <li><Link href="#"><Search /></Link></li>
                    <li><Link href="#"><Heart /></Link></li>
                    <li><Link href="#"><ShoppingCart /></Link></li>
                </ul>
            </div>
        </header>


        <header className="flex justify-between items-center px-5 md:flex lg:hidden xl:hidden w-full h-[66px] bg-white">
            <div className="logo_container flex gap-1">
                <Image src="/logo.png" alt="Logo" width={100} height={100} className="w-[50px] h-[32px] mt-2" />
                <span className="text-[34px] text-black font-bold">Furniro</span>
            </div>
            <Sheet>
                <SheetTrigger><Menu /></SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>Wellcome</SheetTitle>
                    <SheetDescription className="bg-white text-black">
                    <div className="menu_Container">
                        <ul className="leading-10 text-black text-[16px] mt-8">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/shop">Shop</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="icons_container">
                        <ul className="flex gap-5 text-[16px] mt-16 justify-center">
                            <li><Link href="#"><User /></Link></li>
                            <li><Link href="#"><Search /></Link></li>
                            <li><Link href="#"><Heart /></Link></li>
                            <li><Link href="#"><ShoppingCart /></Link></li>
                        </ul>
                    </div>
                        
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </header>
        </>
    );
};

export default Header;