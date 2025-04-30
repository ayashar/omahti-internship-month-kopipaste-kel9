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
                "flex w-full max-w-(--breakpoints-2xl) flex-col gap-4 mx-30 sm:mx-8",
                className)}>
                    {children}
        </main>
    )
};

export default Container