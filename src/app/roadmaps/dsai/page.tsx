"use client";

import { useState } from "react";
import Container from "@/components/container";
import { Button } from "@/components/roadmap-button";
import RoadmapOverlay from "@/components/roadmap-overlay";
import Image from "next/image";

const gamedevHero = [
    {
        title: "Data Sciende and Artificial Intelligence",
        description:
            "Data Science dan Artificial Intellegence adalah bidang yang berfokus pada pengembangan dan penerapan strategi, teknologi, serta metodologi untuk memanfaatkan data dalam mendorong hasil bisnis. Bidang ini mencakup pekerjaan para data scientists, AI researchers, dan engineers yang mengumpulkan dan menganalisis data, merancang algoritma, serta membangun sistem cerdas untuk mengotomatisasi tugas, menghasilkan wawasan, dan mendukung pengambilan keputusan.",
        img: "/DSAI.webp",
    }
]

const roadmapDsaiItems = [
    {
      title: "Natural Language Processing",
      children: [
        {
          number: "01.",
          title: "Intro to NLP",
          copywriting: "Pengenalan dasar Natural Language Processing (NLP), termasuk konsep tokenisasi, stemming, dan aplikasi awal NLP dalam dunia nyata.",
          otiresource: "Introduction to NLP",
          externalresource: "Coursera - NLP Specialization",
          externalresource2: "HuggingFace NLP Course",
          externalresource3: "YouTube - NLP Crash Course",
        },
        {
          number: "02.",
          title: "Basic and Intermediate Methods",
          copywriting: "Membahas teknik-teknik dasar dan menengah seperti Bag of Words, TF-IDF, Word Embedding (Word2Vec, GloVe), dan simple text classification.",
          otiresource: "Intermediate NLP Methods",
          externalresource: "Scikit-learn Text Classification",
          externalresource2: "FastText Documentation",
          externalresource3: "Real Python - NLP with Python",
        },
      ],
    },
    {
      title: "Computer Vision",
      children: [
        {
          number: "03.",
          title: "Intro to CV",
          copywriting: "Pengenalan Computer Vision, termasuk sejarah, aplikasi umum, dan tools yang digunakan seperti OpenCV dan TensorFlow.",
          otiresource: "Introduction to Computer Vision",
          externalresource: "PyImageSearch - CV Basics",
          externalresource2: "OpenCV Documentation",
          externalresource3: "DeepLearning.ai - CV Course",
        },
        {
          number: "04.",
          title: "Basic Image Processing",
          copywriting: "Dasar-dasar pemrosesan gambar seperti grayscaling, edge detection, histogram, serta filtering.",
          otiresource: "Image Processing Fundamentals",
          externalresource: "OpenCV Tutorials",
          externalresource2: "Python CV2 Guide",
          externalresource3: "Kaggle - Image Processing Notebooks",
        },
        {
          number: "05.",
          title: "Model Architecture",
          copywriting: "Memahami arsitektur CNN (Convolutional Neural Network), layer-layer penting, dan teknik training model vision.",
          otiresource: "CNN Architectures",
          externalresource: "Stanford CS231n Notes",
          externalresource2: "TensorFlow CNN Tutorial",
          externalresource3: "Fast.ai Vision Module",
        },
      ],
    },
    {
      title: "Deployable AI",
      children: [
        {
          number: "06.",
          title: "Dashboarding with Streamlit",
          copywriting: "Belajar membangun antarmuka visual interaktif menggunakan Streamlit untuk mendemokan AI/ML models.",
          otiresource: "Streamlit Documentation",
          externalresource: "Streamlit Crash Course",
          externalresource2: "YouTube - Streamlit Projects",
          externalresource3: "Awesome Streamlit Projects",
        },
        {
          number: "07.",
          title: "Back-end Deployment",
          copywriting: "Mempelajari bagaimana menghubungkan model ML ke back-end dengan API (FastAPI/Flask) dan melakukan deployment ke cloud.",
          otiresource: "Deploying AI Models",
          externalresource: "FastAPI Docs",
          externalresource2: "Deploy ML with Heroku",
          externalresource3: "ML Model Deployment Guide",
        },
      ],
    },
    {
      title: "Data Engineering",
      children: [
        {
          number: "08.",
          title: "Intro to CV",
          copywriting: "Pengenalan kembali topik Computer Vision dalam konteks pipeline data dan data flow untuk training CV models.",
          otiresource: "Computer Vision for Data Pipelines",
          externalresource: "Airflow + CV Integration",
          externalresource2: "DataOps for CV",
          externalresource3: "ML Pipelines with CV",
        },
        {
          number: "09.",
          title: "Basic Image Processing",
          copywriting: "Pengolahan gambar dalam skala besar, termasuk augmentasi gambar dan preprocessing untuk pipeline data.",
          otiresource: "Image Processing at Scale",
          externalresource: "Albumentations Library",
          externalresource2: "TF Data Pipeline for Images",
          externalresource3: "OpenCV for Batch Processing",
        },
        {
          number: "10.",
          title: "Model Architecture",
          copywriting: "Membahas bagaimana arsitektur model vision diintegrasikan dalam data pipeline serta optimasi inference.",
          otiresource: "Architecture and Deployment",
          externalresource: "ONNX Runtime",
          externalresource2: "TensorRT for Vision",
          externalresource3: "Serving Models with TF Serving",
        },
      ],
    }
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

const DsaiRoadmap = () => {
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
                    {gamedevHero.map((item, index) => (
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
                            Data Science and Artificial Intelligence
                        </Button>
                        <div className="flex flex-row items-start gap-12">
                            {roadmapDsaiItems.map((item, index) => (
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
            
            export default DsaiRoadmap;
          