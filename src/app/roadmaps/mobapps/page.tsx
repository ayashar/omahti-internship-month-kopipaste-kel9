"use client";

import { useState } from "react";
import Container from "@/components/container";
import { Button } from "@/components/roadmap-button";
import RoadmapOverlay from "@/components/roadmap-overlay";

const mobappsHero = [
    {
        title: "Mobile Apps",
        description:
            "Pengembangan Mobile Apps adalah proses pembuatan aplikasi perangkat lunak yang dirancang untuk berjalan di perangkat seluler seperti smartphone dan tablet. Hal tersebut termasuk merancang dan mengembangkan antarmuka pengguna, mengintegrasikan layanan backend, dan mengimplementasikan fungsionalitas menggunakan teknologi khusus platform.",
        img: "/placeholder.png",
    }
]

const roadmapMobappsItems = [
    {
      title: "Programming Fundamentals and Tools",
      children: [
        {
          number: "01.",
          title: "Programming Fundamentals and Tools",
          copywriting: "Pelajari dasar-dasar pemrograman, lingkungan pengembangan, dan tools penting seperti VS Code, terminal, dan debugging.",
          otiresource: "DartPad",
          externalresource: "freeCodeCamp - Programming Basics",
          externalresource2: "MDN Web Docs - Programming",
          externalresource3: "CS50x Harvard (Intro to Programming)",
        },
        {
          number: "02.",
          title: "Dart Introduction and Git/GitHub",
          copywriting: "Pelajari dasar bahasa Dart serta penggunaan Git & GitHub untuk version control dan kolaborasi dalam proyek Flutter.",
          otiresource: "Dart.dev - Language Tour",
          externalresource: "GitHub Docs",
          externalresource2: "Learn Git Branching",
          externalresource3: "DartPad - Practice",
        },
        {
          number: "03.",
          title: "Advanced OOP and Asynchronous Programming",
          copywriting: "Pendalaman Object-Oriented Programming dan asynchronous programming menggunakan Future, async/await, dan Stream.",
          otiresource: "Dart.dev - Async Programming",
          externalresource: "Dart OOP Guide",
          externalresource2: "freeCodeCamp - Asynchronous Dart",
          externalresource3: "YouTube - Dart OOP & Async",
        },
      ],
    },
    {
      title: "Flutter UI Development",
      children: [
        {
          number: "04.",
          title: "Intro to Flutter and Widgets Basics",
          copywriting: "Pengenalan Flutter dan cara kerja widget sebagai fondasi membangun antarmuka pengguna di Flutter.",
          otiresource: "Flutter.dev - Getting Started",
          externalresource: "Flutter Docs - Widgets Intro",
          externalresource2: "YouTube - Flutter Crash Course",
          externalresource3: "freeCodeCamp - Intro to Flutter",
        },
        {
          number: "05.",
          title: "Layouts and Stateful Widgets",
          copywriting: "Pelajari tata letak Flutter (Row, Column, Stack) dan penggunaan Stateful Widget untuk interaktivitas.",
          otiresource: "Flutter Layouts Guide",
          externalresource: "YouTube - Layouts in Flutter",
          externalresource2: "Flutter Codelabs",
          externalresource3: "Medium - Flutter UI Tips",
        },
        {
          number: "06.",
          title: "Navigation and Routing",
          copywriting: "Pahami bagaimana mengatur navigasi antar halaman dengan Navigator 1.0 & 2.0 dan implementasi routing dinamis.",
          otiresource: "Flutter.dev - Navigation",
          externalresource: "YouTube - Routing in Flutter",
          externalresource2: "Flutter Cookbook - Navigation",
          externalresource3: "Medium - Navigator 2.0 Tutorial",
        },
      ],
    },
    {
      title: "Application Architecture and State Management",
      children: [
        {
          number: "07.",
          title: "External Packages and State Management",
          copywriting: "Pelajari manajemen state menggunakan Provider, Riverpod, Bloc, dan integrasi package dari pub.dev.",
          otiresource: "Flutter.dev - State Management",
          externalresource: "Bloc Library Docs",
          externalresource2: "Riverpod Docs",
          externalresource3: "Flutter Packages Overview",
        },
        {
          number: "08.",
          title: "Forms and Input Validation",
          copywriting: "Membuat form dan validasi input pengguna dengan Form, TextFormField, validator, dan error handling.",
          otiresource: "Flutter.dev - Forms",
          externalresource: "YouTube - Flutter Form Validation",
          externalresource2: "freeCodeCamp - Flutter Forms",
          externalresource3: "Medium - Form Best Practices",
        },
      ],
    },
    {
      title: "External Integration and Data Storage",
      children: [
        {
          number: "09.",
          title: "Networking",
          copywriting: "Pelajari HTTP request, fetching data dari REST API, dan menampilkan data dinamis di aplikasi Flutter.",
          otiresource: "Flutter.dev - Networking",
          externalresource: "http package (pub.dev)",
          externalresource2: "YouTube - REST API in Flutter",
          externalresource3: "Medium - Networking Guide",
        },
        {
          number: "10.",
          title: "Local Data Persistence",
          copywriting: "Gunakan shared_preferences, Hive, atau SQLite untuk menyimpan data lokal pengguna secara efisien.",
          otiresource: "Flutter.dev - Persistence",
          externalresource: "pub.dev - Hive / SQLite",
          externalresource2: "YouTube - Hive Flutter Tutorial",
          externalresource3: "Medium - Local Storage Flutter",
        },
        {
          number: "11.",
          title: "Intro to Firebase",
          copywriting: "Pengenalan integrasi Firebase dengan Flutter untuk autentikasi, analitik, dan cloud features.",
          otiresource: "Firebase Docs - Flutter",
          externalresource: "YouTube - Firebase Auth Flutter",
          externalresource2: "FlutterFire Overview",
          externalresource3: "freeCodeCamp - Firebase + Flutter",
        },
        {
          number: "12.",
          title: "Firebase Firestore",
          copywriting: "Mempelajari penggunaan Cloud Firestore sebagai backend database real-time dan scalable untuk aplikasi Flutter.",
          otiresource: "Firestore Docs",
          externalresource: "FlutterFire Docs - Firestore",
          externalresource2: "YouTube - Firestore Flutter Tutorial",
          externalresource3: "Medium - Firestore Best Practices",
        },
      ],
    },
    {
      title: "Software Development Best Practices",
      children: [
        {
          number: "13.",
          title: "Software Development Best Practices",
          copywriting: "Pelajari prinsip pengembangan perangkat lunak yang baik seperti code readability, testing, versioning, dan CI/CD.",
          otiresource: "Clean Code - Uncle Bob",
          externalresource: "Flutter.dev - Testing",
          externalresource2: "YouTube - Flutter CI/CD",
          externalresource3: "freeCodeCamp - Dev Best Practices",
        },
      ],
    },
  ];
  

interface RoadmapChildItem {
    number: string;
    title: string;
}

const MobappsRoadmap = () => {
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
                    {mobappsHero.map((item, index) => (
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
                    <div className="flex flex-col items-center gap-6">
                        <Button variant="roadmap" className="mb-10">
                            Mobile Apps
                        </Button>
                        <div className="flex flex-row items-start gap-12">
                            {roadmapMobappsItems.map((item, index) => (
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
            
            export default MobappsRoadmap;
          