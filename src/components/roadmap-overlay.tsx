"use client";

import { ReactNode, useEffect } from "react";

interface RoadmapChildItem {
    externalresource2: ReactNode;
    externalresource: ReactNode;
    otiresource: ReactNode;
    copywriting: ReactNode;
    number?: string;
    title: string;
}

interface RoadmapOverlayProps {
    item: RoadmapChildItem | null;
    onClose: () => void;
}

const RoadmapOverlay = ({ item, onClose }: RoadmapOverlayProps) => {
    useEffect(() => {
        // Lock the scroll when overlay is open
        if (item) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [item]);

    return (
        <div className={`fixed inset-0 flex z-50 ${item ? "" : "pointer-events-none"}`}>
            {/* Background overlay */}
            <div
                className={`flex-1 bg-black/70 transition-opacity duration-300 ${
                    item ? "opacity-100" : "opacity-0"
                }`}
                onClick={onClose} // Close overlay when clicking background
            ></div>

            {/* Sliding panel */}
            <div
                className={`w-2/5 bg-[#1E1E1E] text-white shadow-lg p-8 relative transform transition-transform duration-500 ${
                    item ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white text-xl font-bold"
                >
                    &times;
                </button>
                {item && (
                    <>
                        <h2 className="text-[30px] font-bold text-orange mb-10">{item.title}</h2>
                        <div>
                            <p className="border-b-1 pb-5 text-[16px]">
                                {item.copywriting}
                            </p>
                            <div>
                                <h4 className="p-2 font-bold text-black text-[22px] bg-white rounded-[20px] w-65 items-center justify-center text-center mt-5">
                                    Omah<span className="text-orange">TI</span> Resource
                                </h4>
                                <p className="text-[22px] font-bold text-orange px-2 pt-2">
                                    {item.otiresource}
                                </p>
                            </div>
                            <div>
                                <h4 className="p-2 font-bold text-black text-[22px] bg-white rounded-[20px] w-65 items-center justify-center text-center mt-5">
                                    External Resources
                                </h4>
                                <p className="text-[22px] font-bold text-orange px-2 pt-2">
                                    {item.externalresource}
                                </p>
                                <p className="text-[22px] font-bold text-orange px-2">
                                    {item.externalresource2}
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default RoadmapOverlay;