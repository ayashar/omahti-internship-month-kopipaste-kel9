import Container from "@/components/container";
import { Button } from "@/components/roadmap-button";
import Image from "next/image";

const LoremIpsum = () => {
    return (
        <div className="bg-gradient-to-b from-black to-light-gray pb-1 overflow-y-hidden">
            <Container className="flex flex-col gap-10 font-display mt-15 mb-30 items-center">
                <h1 className="font-bold text-[32px] items-start">
                    <span className="text-orange">Game Development</span> Resources
                </h1>
                <div className="flex flex-row w-200 items-center justify-center gap-5 bg-gray border border-white rounded-[20px] p-10 shadow-lg">
                    <Image
                        src="/assets/images/loremipsum.png"
                        alt="Lorem Ipsum"
                        width={100}
                        height={120}
                        className="h-40 w-40 bg-gray-200 rounded-md"/>


                    <div className="flex flex-col gap-2">
                        <h2 className="text-[24px] font-bold text-orange">Lorem Ipsum</h2>
                        <p className="text-[15px] font-normal text-white leading-6 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor venenatis enim ut convallis. Suspendisse ullamcorper tempor diam, id feugiat lectus condimentum pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi eu sapien accumsan, eleifend turpis quis, commodo lorem. Aenean fermentum mollis tortor, in venenatis orci porta quis. Cras gravida gravida nibh nec varius. Vestibulum faucibus vitae mi in vulputate.


                        </p>
                        <Button variant="default" className="bg-orange text-white font-bold max-w-37 py-2 px-4 rounded-full hover:cursor-pointer hover:bg-orange-dark transition-colors">
                            Download
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default LoremIpsum;