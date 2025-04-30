"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navbarItems = [
    { name: "About OmahTI", href: "https://omahti.web.id/" },
    { name: "Roadmaps", href: "/roadmaps" },
    { name: "Archive", href: "/archive" },
];

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-row justify-between items-center border-b">
            <div>
                <Link
                    href="/"
                    className="flex items-center justify-center py-5 pl-15 font-bold inline-block text-[20px] hover:scale-110 transition-transform duration-300 ease-in-out"
                >
                    Omah<span className="text-orange">Arsip</span>
                </Link>
            </div>
            <div className="flex flex-row gap-10 pr-15 text-[16px] font-bold">
                <nav className="flex gap-4 items-center">
                    {navbarItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-base transition-colors rounded-md lg:px-3 lg:py-2 ${
                                pathname === item.href
                                    ? "bg-orange text-black"
                                    : "hover:bg-orange hover:text-black"
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;