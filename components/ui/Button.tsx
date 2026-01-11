import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
    const baseStyles = "px-6 py-3 rounded-md font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-hidden min-h-[48px] min-w-[48px] inline-flex items-center justify-center cursor-pointer";

    const variants = {
        primary: "bg-primary text-white hover:bg-[#053f30] focus:ring-primary",
        secondary: "bg-transparent border border-primary text-primary hover:bg-primary/5 focus:ring-primary"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
