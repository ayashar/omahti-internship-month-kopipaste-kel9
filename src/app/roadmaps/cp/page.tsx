"use client";

import { useState } from "react";
import Container from "@/components/container";
import { Button } from "@/components/roadmap-button";
import RoadmapOverlay from "@/components/roadmap-overlay";

const cpHero = [
    {
        title: "Competitive Programming",
        description:
            "Competitive Programming adalah sebuah bentuk perlombaan IT dimana peserta diberikan soal-soal yang diselesaikan dengan mendesain sebuah program yang memproses sejumlah input menjadi output yang diminta dalam jangka waktu yang terbatas. Peserta dituntut untuk mengimplementasikan programnya dengan benar dan efisien agar jawabannya diterima.",
        img: "/placeholder.png",
    }
]

const roadmapCpItems = [
    {
        title: "Programming Foundations",
        children: [
            { 
                number: "01.", 
                title: "C++ Data Structure and Complexity Analysis", 
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
            { 
                number: "02.", 
                title: "Greedy Paradigm", 
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
        ],
    },
    {
        title: "Basic Algorithm Techniques",
        children: [
            { 
                number: "03.", 
                title: "Brute Force and Backtracking", 
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
            { 
                number: "04.", 
                title: "Searching algorithms and Prefix Sum", 
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
        ],
    },
    {
        title: "Advanced Algorithmic Techniques",
        children: [
            { 
                number: "05.", 
                title: "Number Theory and Bit Manipulation", 
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
            { 
                number: "06.", 
                title: "Dynamic Programming", 
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
        ],
    },
    {
        title: "Specialized Topics",
        children: [
            { 
                number: "07.", 
                title: "Game Theory", 
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
            { 
                number: "08.", 
                title: "String Algorithms", 
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
        ],
    },
    {
        title: "Graph Theory",
        children: [
            { 
                number: "09.", 
                title: "Graph, BFS, DFS and Flood Fill", 
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
            { 
                number: "10.", 
                title: "MST, Disjoint Set Union and Shortest Path", 
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
        ],
    },
    {
        title: "Advanced Data Structures",
        children: [
            { 
                number: "11.", 
                title: "Binary Heap", 
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
            { 
                number: "12.", 
                title: "Range Query and Segment Tree", 
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
}

const CpRoadmap = () => {
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
                    {cpHero.map((item, index) => (
                        <div key={index} className="flex flex-row gap-5 flex flex-col max-w-195 items-center justify-center border-1 bg-gray rounded-[20px] p-10">
                            <div className="flex flex-col items-start justify-between gap-5">
                                <h1 className="text-[32px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-orange to-orange">
                                    {item.title}
                                </h1>
                                <p className="text-[15px] font-bold text-white text-left max-w-2xl">
                                    {item.description}
                                </p>
                            </div>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="max-h-45 mb-3"
                                />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center gap-">
                        <Button variant="roadmap" className="mb-10">
                            Competitive Programming
                        </Button>
                        <div className="flex flex-row items-start gap-2">
                            {roadmapCpItems.map((item, index) => (
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
            
            export default CpRoadmap;
          