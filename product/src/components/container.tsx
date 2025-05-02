import { cn } from "@/lib/utils";

const Container = ({
    className,
    children,
}: {
    className?: string
    children: React.ReactNode
}) => {
    return (
        <main 
            className={cn(
                "flex flex-col gap-4 mx-8 sm:mx-30 pt-20",
                className)}>
                    {children}
        </main>
    )
};

export default Container