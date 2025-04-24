import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "link" | "outline";
    size?: "sm" | "md" | "lg";
    loading?: boolean;
}

export default function Button({
                                   children,
                                   variant = "primary",
                                   size = "md",
                                   className = "",
                                   ...props
                               }: ButtonProps) {
    const base = "rounded-xl font-medium transition-colors  focus:outline-none focus:ring-0";

    const variantClasses =
        variant === "primary"
            ? "bg-brand-default text-white hover:bg-blue-highlight focus:0"
            : variant === "secondary"
                ? "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:0"
                : variant === "outline"
                    ? "border border-brand-default text-brand-default hover:bg-brand-light focus:0"
                    : "bg-transparent text-brand-default hover:text-light hover:underline active:text-white focus:0";

    const sizeClasses =
        size === "sm"
            ? "px-3 py-1 text-sm"
            : size === "lg"
                ? "px-5 py-3 text-lg"
                : "px-4 py-2 text-base";


    return (
        <button
            className={`${base} ${variantClasses} ${sizeClasses} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
