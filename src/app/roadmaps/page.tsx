import Container from "@/components/container";
import Link from "next/link";

const roadmapNav = [
    {
        href: "/roadmaps/uiux",
        img: "placeholder.png",
        title: "UI/UX",
    },
    {
        href: "/roadmaps/dsai",
        img: "placeholder.png",
        title: "Data Science and Artificial Intelligence",
    },
    {
        href: "/roadmaps/mobapps",
        img: "placeholder.png",
        title: "Mobile Apps",
    },
    {
        href: "/roadmaps/cysec",
        img: "placeholder.png",
        title: "Cyber Security",
    },
    {
        href: "/roadmaps/frontend",
        img: "placeholder.png",
        title: "FrontEnd",
    },
    {
        href: "/roadmaps/backend",
        img: "placeholder.png",
        title: "BackEnd",
    },
    {
        href: "/roadmaps/gamedev",
        img: "placeholder.png",
        title: "Game Development",
    },
    {
        href: "/roadmaps/cp",
        img: "placeholder.png",
        title: "Competitive Programming",
    },
]

const roadmapsHero = () => {
    return (
        <div className="bg-gradient-to-b from-black to-light-gray pb-30">
            <Container className="flex flex-col gap-10 font-display mt-15 mb-30 items-center">
                <h1 className="font-bold text-[32px]"><span className="text-orange">Beginner</span> Roadmaps</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {roadmapNav.map((item) => (
                        <div key={item.title} className="flex flex-col items-center justify-center gap-5 ">
                            <Link href={item.href} className="h-78 w-60 flex flex-col items-center justify-center border bg-gray rounded-[20px] p-10 hover:scale-101 transition-transform hover:bg-white/20">
                                <div className="flex items-start justify-center w-full h-full">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="max-h-[120px] mb-3" />
                                </div>
                                <div className="flex items-center justify-center w-full h-full">
                                    <h2 className="text-[24px] leading-0.6 font-bold text-center items-center justify-center text-orange">{item.title}</h2>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default roadmapsHero;