"use client";

import { useState } from "react";
import Container from "@/components/container";
import { Button } from "@/components/roadmap-button";
import RoadmapOverlay from "@/components/roadmap-overlay";
import Image from "next/image";

const backendHero = [
    {
        title: "BackEnd",
        description:
            "Backend adalah cabang ilmu komputer yang melibatkan perancangan, pembangunan, dan pemeliharaan bagian server aplikasi web. Hal ini termasuk bekerja dengan database, API, dan logika server untuk memungkinkan front-end aplikasi berfungsi dengan lancar. Pengembang backend bertanggung jawab untuk memastikan kinerja, keamanan, dan skalabilitas infrastruktur server aplikasi, dan untuk membuat sistem yang mudah dipelihara dan diperbarui dari waktu ke waktu.",
        img: "/placeholder.png",
    }
]

const roadmapBackendItems = [
    {
        title: "Core BackEnd Fundamentals",
        children: [
            { 
                number: "01.", 
                title: "SQL", 
                copywriting: "MProin vel urna imperdiet, porta sem venenatis, convallis velit. In volutpat erat et felis gravida, nec ultrices velit consequat. Donec ante dolor, ultrices a diam a, pretium luctus ex. Phasellus in elementum risus. Nulla vitae nibh nec eros pellentesque venenatis quis et elit. Mauris placerat, orci quis mollis bibendum, lacus felis viverra est, non aliquet velit sem facilisis erat. Mauris sed hendrerit sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam massa tellus, rhoncus in tincidunt at, viverra sit amet purus. Integer ante nisi, interdum quis vulputate a, tincidunt varius orci. Etiam ut dolor congue, venenatis ipsum in, interdum nisi. Duis luctus dolor at mauris tristique efficitur. Donec tincidunt elementum gravida. Curabitur orci elit, tincidunt nec erat id, finibus molestie risus. Cras vitae urna ac nisl volutpat luctus. Praesent fringilla fringilla est, nec scelerisque lorem egestas et.ateri ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Lorem Ipsum Dolor Sit",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
            { 
                number: "02.", 
                title: "Version Control",
                copywriting: "Proin vel urna imperdiet, porta sem venenatis, convallis velit. In volutpat erat et felis gravida, nec ultrices velit consequat. Donec ante dolor, ultrices a diam a, pretium luctus ex. Phasellus in elementum risus. Nulla vitae nibh nec eros pellentesque venenatis quis et elit. Mauris placerat, orci quis mollis bibendum, lacus felis viverra est, non aliquet velit sem facilisis erat. Mauris sed hendrerit sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam massa tellus, rhoncus in tincidunt at, viverra sit amet purus. Integer ante nisi, interdum quis vulputate a, tincidunt varius orci. Etiam ut dolor congue, venenatis ipsum in, interdum nisi. Duis luctus dolor at mauris tristique efficitur. Donec tincidunt elementum gravida. Curabitur orci elit, tincidunt nec erat id, finibus molestie risus. Cras vitae urna ac nisl volutpat luctus. Praesent fringilla fringilla est, nec scelerisque lorem egestas et.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",

            },
            { 
                number: "03.", 
                title: "Relationoal Database",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
        ],
    },
    {
        title: "Security and Testing",
        children: [
            { 
                number: "04.", 
                title: "Server-side Attacks",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor", 
            },
            { 
                number: "05.", 
                title: "Cryptography and Authorization",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
            { 
                number: "06.", 
                title: "Testing and TDD",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor", 
            },
        ],
    },
    {
        title: "Infrastructure and Deployment",
        children: [
            { 
                number: "07.", 
                title: "Docker and Kubernetes",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
            { 
                number: "08.", 
                title: "Monitoring and Logging",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
        ],
    },
    {
        title: "Advanced Backend Topics",
        children: [
            { 
                number: "07.", 
                title: "Docker and Kubernetes",
                copywriting: "Materi ini bertujuan untuk memberikan pemahaman tentang pentingnya User Experience dalam proses pengembangan produk. Peserta akan mempelajari bagaimana UX menjadi kunci dalam menciptakan product-market fit, serta bagaimana pengalaman pengguna memengaruhi keberhasilan produk secara keseluruhan.",
                otiresource: "Introduction to Animasi",
                externalresource: "Lorem Ipsum Dolor Sit Amet",
                externalresource2: "Lipsum",
                externalresource3: "Lorem Ipsum Dolor",
            },
            { 
                number: "08.", 
                title: "Monitoring and Logging",
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

const BackendRoadmap = () => {
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
                    {backendHero.map((item, index) => (
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
                            BackEnd
                        </Button>
                        <div className="flex flex-row items-start gap-12">
                            {roadmapBackendItems.map((item, index) => (
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
            
            export default BackendRoadmap;
          