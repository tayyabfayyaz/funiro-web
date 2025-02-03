import Link from "next/link";

function Footer() {
    return(
        <>
        <section className="w-full h-[300px] pt-16 pl-5 hidden md:hidden lg:flex xl:flex">
            <div className="w-[350px]">
                <h2 className="font-bold text-[24px] black">Funiro.</h2>
                <p className="mt-10 text-gray-400">400 university dive suite 200 coral</p>
                <p className=" text-gray-400">Gobies.</p>
                <p className="text-gray-400">Fl 33134 USA</p>
            </div>
            <div className="w-[350px]">
                <h2 className="text-[24px] text-gray-400">Links</h2>
                <ul className="mt-10">
                    <li className="my-2 cursor-pointer"><Link href="#">Home</Link></li>
                    <li className="my-2 cursor-pointer"><Link href="#">Shop</Link></li>
                    <li className="my-2 cursor-pointer"><Link href="#">About</Link></li>
                    <li className="my-2 cursor-pointer"><Link href="#">Contact</Link></li>
                </ul>
            </div>
            <div className="w-[350px]">
                <h2 className="text-[24px] text-gray-400">Help</h2>
                <ul className="mt-10">
                    <li className="my-2 cursor-pointer"><Link href="#">Payment Option</Link></li>
                    <li className="my-2 cursor-pointer"><Link href="#">Returns</Link></li>
                    <li className="my-2 cursor-pointer"><Link href="#">Privacy & Policies</Link></li>
                </ul>
            </div>
            <div className="w-[350px]">
                <h2 className="text-[24px] text-gray-400">Newslatter</h2>
                <input type="email" placeholder="Enter your email address" className="w-[200px] bg-transperent mt-10 border-b-2 border-black mr-2"/>
                <span className="cursor-pointer border-b-2 border-black">Subscribe</span>
            </div>
        </section>
        <div className="w-full h-[66px] border-t-2 border-gray-400 flex items-center px-5">
            <h2>2023 Funiro, All rights reserved</h2>
        </div>
        </>
    );
};

export default Footer;