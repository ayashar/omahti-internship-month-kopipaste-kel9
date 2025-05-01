"use client";

import { useState } from "react";
import Container from "@/components/container";
import { Button } from "@/components/roadmap-button";
import RoadmapOverlay from "@/components/roadmap-overlay";
import Image from "next/image";

const cysecHero = [
    {
        title: "Cyber Security",
        description:
            "Cybersecurity adalah praktik melindungi sistem komputer, jaringan dan informasi sensitif dari serangan, pencurian, dan kerusakan digital.  Hal ini mencakup berbagai strategi, alat, dan teknologi yang melindungi individu dan organisasi dari ancaman seperti peretasan, malware, phishing, dan rekayasa sosial. ",
        img: "/placeholder.png",
    }
]

const roadmapCysecItems = [
    {
        title: "Cyber Security Foundations",
        children: [
            { 
                number: "01.", 
                title: "Linux Commands", 
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
            { 
                number: "02.", 
                title: "Basic Forensics",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",

            },
        ],
    },
    {
        title: "Web Exploitations",
        children: [
            { 
                number: "03.", 
                title: "Web Exploitation Introduction",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor", 
            },
            { 
                number: "04.", 
                title: "Docker for CTF",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
        ],
    },
    {
        title: "Core Cyber Security Techniques",
        children: [
            { 
                number: "05.", 
                title: "Reverse Engineering",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
            { 
                number: "06.", 
                title: "Cryptography",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
        ],
    },
    {
        title: "Advanced Cyber Security Techniques",
        children: [
            { 
                number: "07.", 
                title: "Binary Exploitation",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
            { 
                number: "08.", 
                title: "Web Exploitation",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
        ],
    },
];

interface RoadmapChildItem {
    number: string;
    title: string;
    copywriting: string;
    otiresource: string;
    externalresource: string;
    externalresource2: string;
    externalresource3: string;
}
const CysecRoadmap = () => {
    const [overlayItem, setOverlayItem] = useState<RoadmapChildItem | null>(null);

    const handleItemClick = (item: RoadmapChildItem) => {
        setOverlayItem(item);
    };

    const closeOverlay = () => {
        setOverlayItem(null);
    };

    return (
        <div className="bg-gradient-to-b from-black to-gray-800 py-10">
            <Container>
                <div className="flex flex-col items-center justify-center gap-5 font-display mt-5">
                    {cysecHero.map((item, index) => (
                        <div key={index} className="flex flex-row gap-5 flex flex-col max-w-195 items-center justify-center border-1 bg-gray rounded-[20px] p-10">
                            <div className="flex flex-col items-start justify-between gap-5">
                                <h1 className="text-[32px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-orange to-orange">
                                    {item.title}
                                </h1>
                                <p className="text-[15px] font-bold text-white text-left max-w-2xl">
                                    {item.description}
                                </p>
                            </div>
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    className="max-h-45 mb-3"
                                />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center gap-6">
                        <Button variant="roadmap" className="mb-10">
                            Cyber Security
                        </Button>
                        <div className="flex flex-row items-start gap-12">
                            {roadmapCysecItems.map((item, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <Button variant="roadmap" className="mb-15">{item.title}</Button>
                                    <div className="flex flex-col items-center gap-2">
                                        {item.children.map((child, childIndex) => (
                                            <Button
                                                key={childIndex}
                                                variant="subroadmap"
                                                onClick={() => handleItemClick(child)}
                                            >
                                                <div className="flex items-center justify-between w-full">
                                                    {child.number && (
                                                        <span className="mr-2">{child.number}</span>
                                                    )}
                                                    {child.title}
                                                </div>
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>

                        {overlayItem && (
                            <RoadmapOverlay 
                                item={overlayItem} 
                                onClose={closeOverlay} 
                            />
                        )}
                    </div>
                );
            };
            
            export default CysecRoadmap;
          