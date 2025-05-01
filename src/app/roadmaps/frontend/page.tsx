"use client";

import { useState } from "react";
import Container from "@/components/container";
import { Button } from "@/components/roadmap-button";
import RoadmapOverlay from "@/components/roadmap-overlay";
import Image from "next/image";

const frontendHero = [
    {
        title: "FrontEnd",
        description:
            "Frontend adalah bagian dari pengembangan situs web yang berfokus pada desain visual dan pengalaman pengguna. Frontend mencakup bagaimana konten ditampilkan dan bagaimana pengunjung dapat berinteraksi dengan komponen-komponen di situs web, dengan tujuan untuk membuat situs lebih ramah pengguna dan menarik.",
        img: "/placeholder.png",
    }
]

const roadmapFrontendItems = [
    {
      title: "Web Fundamentals",
      children: [
        {
          number: "01.",
          title: "Git and Github",
          copywriting: "Pelajari dasar Git dan GitHub untuk version control, kolaborasi proyek, dan manajemen kode sumber secara profesional.",
          otiresource: "Pro Git Book",
          externalresource: "GitHub Docs",
          externalresource2: "Git Handbook by Git SCM",
          externalresource3: "Learn Git Branching",
        },
        {
          number: "02.",
          title: "Advanced CSS",
          copywriting: "Pendalaman teknik CSS modern seperti Flexbox, Grid, media query, dan animasi untuk membangun UI yang responsif dan menarik.",
          otiresource: "CSS Tricks - Complete Guide",
          externalresource: "MDN CSS",
          externalresource2: "Frontend Masters - Advanced CSS",
          externalresource3: "YouTube - CSS Layout Tutorial",
        },
        {
          number: "03.",
          title: "Responsive Design + Basic Javascript",
          copywriting: "Pelajari cara membuat desain web responsif dan dasar JavaScript seperti variabel, fungsi, DOM, dan interaktivitas.",
          otiresource: "Responsive Web Design Guide",
          externalresource: "JavaScript.info",
          externalresource2: "MDN Responsive Design",
          externalresource3: "freeCodeCamp - JS + Responsive Design",
        },
        {
          number: "04.",
          title: "Asynchronous JavaScript + API Basics",
          copywriting: "Pahami konsep asynchronous JavaScript menggunakan callback, promise, dan async/await serta bagaimana melakukan fetch API.",
          otiresource: "Asynchronous JS - MDN",
          externalresource: "JavaScript.info - Promises",
          externalresource2: "freeCodeCamp - Fetch API",
          externalresource3: "YouTube - Async JS Crash Course",
        },
      ],
    },
    {
      title: "React Development",
      children: [
        {
          number: "05.",
          title: "Intro to React",
          copywriting: "Pengenalan library React, termasuk konsep komponen, props, state, dan virtual DOM.",
          otiresource: "React Docs - Getting Started",
          externalresource: "Scrimba - Learn React",
          externalresource2: "freeCodeCamp - React",
          externalresource3: "YouTube - React Crash Course",
        },
        {
          number: "06.",
          title: "React Hook",
          copywriting: "Pelajari Hooks seperti useState, useEffect, dan custom hooks untuk mengelola state dan efek samping pada React.",
          otiresource: "React Docs - Hooks",
          externalresource: "Kent C Dodds - React Hooks",
          externalresource2: "Beta React Docs",
          externalresource3: "YouTube - React Hooks Tutorial",
        },
        {
          number: "07.",
          title: "React Form Validation",
          copywriting: "Implementasi validasi form menggunakan controlled components, custom logic, dan library seperti Formik dan React Hook Form.",
          otiresource: "Formik Docs",
          externalresource: "React Hook Form Docs",
          externalresource2: "YouTube - React Form Validation",
          externalresource3: "Blog - Building Forms in React",
        },
      ],
    },
    {
      title: "Modern Web Applications",
      children: [
        {
          number: "08.",
          title: "Intro to Next.js",
          copywriting: "Pengenalan framework Next.js untuk membangun aplikasi React dengan routing, SSR, dan struktur folder yang efisien.",
          otiresource: "Next.js Docs - Getting Started",
          externalresource: "Vercel - Next.js Learn",
          externalresource2: "freeCodeCamp - Intro to Next.js",
          externalresource3: "YouTube - Next.js Tutorial",
        },
        {
          number: "09.",
          title: "Advanced Next.js",
          copywriting: "Mempelajari fitur lanjutan seperti dynamic routing, API routes, middleware, dan ISR.",
          otiresource: "Next.js Advanced Docs",
          externalresource: "Next.js Examples",
          externalresource2: "YouTube - Advanced Next.js",
          externalresource3: "Blog - Real World Next.js",
        },
        {
          number: "10.",
          title: "Testing & Performance Optimization",
          copywriting: "Pelajari testing React/Next.js dengan Jest & Testing Library, serta optimasi performa dengan lazy loading, memoization, dan Lighthouse.",
          otiresource: "Testing Library Docs",
          externalresource: "Web.dev - Performance",
          externalresource2: "Jest Docs",
          externalresource3: "YouTube - React Performance Tips",
        },
        {
          number: "11.",
          title: "Content Management Systems (CMS)",
          copywriting: "Mengintegrasikan CMS seperti Sanity, Strapi, atau Contentful dalam aplikasi modern untuk mengelola konten secara dinamis.",
          otiresource: "Sanity.io Docs",
          externalresource: "Strapi.io Guide",
          externalresource2: "Contentful Dev Resources",
          externalresource3: "YouTube - Headless CMS with Next.js",
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

const FrontendRoadmap = () => {
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
                    {frontendHero.map((item, index) => (
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
                            FrontEnd
                        </Button>
                        <div className="flex flex-row items-start gap-12">
                            {roadmapFrontendItems.map((item, index) => (
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
            
            export default FrontendRoadmap;
          