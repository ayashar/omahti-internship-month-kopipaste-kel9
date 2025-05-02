"use client";

import Container from "@/components/container";
import { Button } from "@/components/roadmap-button";
import Link from "next/link";

const gamedevMaterial = [
    {
        href: "/archive/gamedev/loremipsum",
        title: "Game Development",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
    {
        href: "/archive/gamedev/loremipsum",
        title: "Game Development",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
    {
        href: "/archive/gamedev/loremipsum",
        title: "Game Development",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
    {
        href: "/archive/gamedev/loremipsum",
        title: "Game Development",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
    {
        href: "/archive/gamedev/loremipsum",
        title: "Game Development",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
    {
        href: "/archive/gamedev/loremipsum",
        title: "Game Development",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
    {
        href: "/archive/gamedev/loremipsum",
        title: "Game Development",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
    {
        href: "/archive/gamedev/loremipsum",
        title: "Game Development",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
    {
        href: "/archive/gamedev/loremipsum",
        title: "Game Development",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
    {
        href: "/archive/gamedev/loremipsum",
        title: "Game Development",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
    {
        href: "/archive/gamedev/loremipsum",
        title: "Game Development",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
    {
        href: "/archive/gamedev/loremipsum",
        title: "Game Development",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
];

const gamedevArchive = () => {
    return (
        <div className="bg-gradient-to-b from-black to-light-gray pb-30">
            <Container className="flex flex-col gap-10 font-display mt-15 mb-30 items-center">
                <h1 className="font-bold text-[32px] items-start">
                    <span className="text-orange">Game Development</span> Resources
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gamedevMaterial.map((item, index) => (
                        <Link
                            key={`gamedev-${index}`}
                            href={item.href}
                            className="h-auto w-80 flex flex-col items-center justify-between border bg-white rounded-[20px] shadow-lg overflow-hidden"
                        >
                            <div className="w-full h-30 bg-gray-200"></div>
                            <div className="w-full bg-gray text-white p-6 flex flex-col items-start gap-4">
                                <p className="text-orange text-sm font-bold">{item.type}</p>
                                <h2 className="text-[20px] font-bold">{item.title}</h2>
                                <p className="text-[14px] font-normal leading-5">
                                    {item.desc}
                                </p>
                                <Button className="mt-4 bg-orange text-white font-bold py-2 px-4 rounded-full hover:bg-orange-dark transition-colors">
                                    Download
                                </Button>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default gamedevArchive;