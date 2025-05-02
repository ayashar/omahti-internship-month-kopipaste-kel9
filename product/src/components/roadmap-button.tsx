import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-lg text-sm font-bold",
    {
        variants: {
            variant: {
                default: "bg-orange text-black",
                "roadmap": "bg-gradient-to-b border-1 border-white from-gradient1 via-gradient1 to-gradient2/90 text-white rounded-[30px]",
                "subroadmap": "bg-orange w-60 text-white font-bold rounded-[20px] justify-between text-right hover:cursor-pointer leading-4 hover:scale-105 transition-transform duration-300 ease-in-out",
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                "roadmap": "p-5 text-[18px]",
                "subroadmap": "p-3 text-[16px] has-[>svg]:px-3",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

function Button({
    className,
    variant,
    size, 
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(buttonVariants({ variant, size }), className)}
            {...props}
        >
            {children}
        </button>
    )
}

export { Button, buttonVariants }
