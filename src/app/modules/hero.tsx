import Container from "@/components/container";
import Link from "next/link";

const RoadmapHero = [
    {
        href: "/roadmaps/uiux",
        img: "placeholder.png",
        title: "UI/UX",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium ex sit amet varius aliquam. Donec in lacus feugiat, maximus mi"
    },
    {
        href: "/roadmaps/backend",
        img: "placeholder.png",
        title: "BackEnd Development",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium ex sit amet varius aliquam. Donec in lacus feugiat, maximus mi"
    },
    {
        href: "/roadmaps/frontend",
        img: "placeholder.png",
        title: "FrontEnd Development",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium ex sit amet varius aliquam. Donec in lacus feugiat, maximus mi"
    }
]

const archiveHero = [
    {
        href: "/archive/uiux/loremipsum",
        title: "Pengantar UI/UX",
    },
    {
        href: "/archive/cysec/loremipsum",
        title: "Reverse Engineering",
    },
    {
        href: "/archive/backend/loremipsum",
        title: "Docker",
    },
    {
        href: "/archive/cysec/loremipsum",
        title: "Pengantar Cyber Security",
    },
    {
        href: "/archive/gamedev/loremipsum",
        title: "Konsep Desain dalam Game",
    },
    {
        href: "/archive/frontend/loremipsum",
        title: "Pengenalan HTML & CSS",
    },
]

const Hero = () => {
    return (
        <Container className="flex flex-col gap-10 font-display  pb-30">
            <div className="flex flex-col items-center justify-center gap-5 font-display mt-10">
                <div className="flex flex-col max-w-195 items-start justify-start border-1 bg-gray rounded-[20px] p-10">
                    <h1 className="text-[24px] font-bold">Start Your <span className="text-orange">Developer</span> Journey Here</h1>
                    <p className="text-[15px] font-bold">Omah<span className="text-orange">Arsip</span> merupakan cabang Omah<span className="text-orange">TI</span> dimana pelajar dapat melihat materi-materi serta sebagai pengarah untuk pemula yang ingin menjadi developer.</p>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col gap-5">
                    <h1 className="text-[24px] font-bold">Bingung mulai belajar dari mana?</h1>

                    {/* roadmap */}
                    <Link href="/roadmaps" className="flex w-37 text-[16px] font-bold text-black bg-orange rounded-[20px] p-3 px-7 justify-center hover:bg-orange/80 transition-all duration-300">
                        Roadmaps
                    </Link>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {RoadmapHero.map((item, index) => (
                            <Link
                                href={item.href}
                                key={index}
                                className="flex flex-col  items-start justify-start border bg-gray rounded-[20px] p-10 hover:scale-101 transition-transform hover:bg-white/20"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="max-h-[120px] mb-3" />
                                <h2 className="text-[20px] font-bold text-orange">{item.title}</h2>
                                <p className="text-white font-bold mt-5">{item.desc}</p>
                            </Link>
                        ))}
                    </div>

                    {/* archive */}
                    <div className="flex flex-col gap-5 mt-10">
                        <Link href="/archive" className="flex w-37 text-[16px] font-bold text-black bg-orange rounded-[20px] p-3 px-7 justify-center hover:bg-orange/80 transition-all duration-300">
                            Materi
                        </Link>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {archiveHero.map((item, index) => (
                                <Link
                                    href={item.href}
                                    key={index}
                                    className="flex flex-col items-center border bg-gray rounded-[20px] p-10 hover:scale-101 hover:bg-white/20 transition-transform"
                                >
                                    <h2 className="text-[20px] font-bold text-white">{item.title}</h2>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Hero;