"use client";

import { useState } from "react";
import Container from "@/components/container";
import { Button } from "@/components/roadmap-button";
import RoadmapOverlay from "@/components/roadmap-overlay";
import Image from "next/image";

const uiuxHero = [
    {
        title: "UI/UX",
        description:
            "UI/UX adalah bagian dari pengembangan situs web yang menerjemahkan kreativitas ke dalam desain dan mempelajari kecenderungan interaksi antara pengguna dan sebuah antarmuka. Desain yang dimaksud tidak hanya terbatas pada desain antarmuka perangkat, tetapi juga mencakup ikon vektor, ilustrasi, dan sebagainya. Interaksi antara pengguna dengan antarmuka lebih difokuskan pada pengalaman yang dapat dirasakan oleh pengguna saat menggunakan fitur-fitur yang ada pada antarmuka tersebut.",
        img: "/uiux.webp",
    }
]

const roadmapUiuxItems = [
    {
        title: "User Experience", 
        children: [
            { 
                number: "01.", 
                title: "Introduction to UX", 
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
            { 
                number: "02.", 
                title: "Initial Product Requirement",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",

            },
            { 
                number: "03.", 
                title: "User Interview",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
            { 
                number: "04.", 
                title: "User Mental Model",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
            { 
                number: "05.", 
                title: "AAARR Framework",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
            { 
                number: "06.", 
                title: "User Impact and Psychological Effect",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
            { 
                number: "07.", 
                title: "User Flows",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
            { 
                number: "08.", 
                title: "Information Architecture",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
        ],
    },
    {
        title: "User Interface",
        children: [
            { 
                number: "01.", 
                title: "Introduction to UI",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor", 
            },
            { 
                number: "02.", 
                title: "Information Hierarchy",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
            { 
                number: "03.", 
                title: "UI Figma Essentials",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor", 
            },
            { 
                number: "04.", 
                title: "Deisgn Systems",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
            { 
                number: "05.", 
                title: "UX Laws",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor", 
            },
            { 
                number: "06.", 
                title: "Gestalt Principles",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor", 
            },
            { 
                number: "07.", 
                title: "Responsive and Layouting",
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

const UiuxRoadmap = () => {
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
                    {uiuxHero.map((item, index) => (
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
                            UI/UX
                        </Button>
                        <div className="flex flex-row items-start gap-12">
                            {roadmapUiuxItems.map((item, index) => (
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

                        {/* Render the overlay when an item is clicked */}
                        {overlayItem && (
                            <RoadmapOverlay 
                                item={overlayItem} 
                                onClose={closeOverlay} 
                            />
                        )}
                    </div>
                );
            };
            
            export default UiuxRoadmap;
          