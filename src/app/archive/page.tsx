"use client";

import Container from "@/components/container";
import Link from "next/link";

const archiveNav = [
    {
        href: "/archive/uiux",
        title: "UI/UX",
    },
    {
        href: "/archive/dsai",
        title: "Data Science and Artificial Intelligence",
    },
    {
        href: "/archive/mobapps",
        title: "Mobile Apps",
    },
    {
        href: "/archive/cysec",
        title: "Cyber Security",
    },
    {
        href: "/archive/frontend",
        title: "FrontEnd",
    },
    {
        href: "/archive/backend",
        title: "BackEnd",
    },
    {
        href: "/archive/gamedev",
        title: "Game Development",
    },
    {
        href: "/archive/cp",
        title: "Competitive Programming",
    },
];

const archiveHero = () => {
    return (
        <div className="bg-gradient-to-b from-black to-light-gray pb-30">
            <Container className="flex flex-col gap-10 font-display mt-15 mb-30 items-center">
                <h1 className="font-bold text-[32px] text-transparent bg-clip-text bg-gradient-to-b from-white via-orange to-orange">
                    Archive
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {archiveNav.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="h-38 w-60 flex flex-col items-center justify-between border bg-white pt-5 rounded-[20px] hover:scale-105 transition-transform shadow-lg"
                        >
                            <h2 className="text-[20px] font-bold flex items-center justify-center text-center text-black h-full">
                                {item.title}
                            </h2>
                            <div className="w-full text-left text-[17px] font-bold text-white bg-gradient-to-b from-black to-light-gray p-3 rounded-b-[20px]">
                                <span className="text-orange">10</span> Resources
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default archiveHero;