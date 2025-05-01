"use client";

import Container from "@/components/container";
import { Button } from "@/components/roadmap-button";
import Link from "next/link";

const dsaiMaterial = [
    {
        href: "/archive/dsai/loremipsum",
        title: "Data Science and Artificial Intelligence",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
    {
        href: "/archive/dsai/loremipsum",
        title: "Data Science and Artificial Intelligence",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
    {
        href: "/archive/dsai/loremipsum",
        title: "Data Science and Artificial Intelligence",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
    {
        href: "/archive/dsai/loremipsum",
        title: "Data Science and Artificial Intelligence",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
    {
        href: "/archive/dsai/loremipsum",
        title: "Data Science and Artificial Intelligence",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
    {
        href: "/archive/dsai/loremipsum",
        title: "Data Science and Artificial Intelligence",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
    {
        href: "/archive/dsai/loremipsum",
        title: "Data Science and Artificial Intelligence",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
    {
        href: "/archive/dsai/loremipsum",
        title: "Data Science and Artificial Intelligence",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
    {
        href: "/archive/dsai/loremipsum",
        title: "Data Science and Artificial Intelligence",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
    {
        href: "/archive/dsai/loremipsum",
        title: "Data Science and Artificial Intelligence",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
    {
        href: "/archive/dsai/loremipsum",
        title: "Data Science and Artificial Intelligence",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
    {
        href: "/archive/dsai/loremipsum",
        title: "Data Science and Artificial Intelligence",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        type: "PowerPoint"
    },
];

const dsaiArchive = () => {
    return (
        <div className="bg-gradient-to-b from-black to-gray-800 pb-30">
            <Container className="flex flex-col gap-10 font-display mt-15 mb-30 items-center">
                <h1 className="font-bold text-[32px] items-start">
                    <span className="text-orange">Data Science and Artificial Intelligence",</span> Resources
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dsaiMaterial.map((item) => (
                        <Link
                            key={item.title}
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

export default dsaiArchive;