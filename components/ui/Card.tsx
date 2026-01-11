import React from 'react';
import Link from 'next/link';

interface CardProps {
    title: string;
    description: string;
    href?: string;
    actionLabel?: string;
    icon?: React.ReactNode;
    className?: string;
}

export function Card({ title, description, href, actionLabel, icon, className = '' }: CardProps) {
    const Content = () => (
        <div className={`bg-white p-6 rounded-lg shadow-sm border border-neutral-200 hover:shadow-md transition-shadow h-full flex flex-col ${className}`}>
            {icon && <div className="mb-4 text-primary">{icon}</div>}
            <h3 className="text-xl font-bold text-primary mb-2 font-serif">{title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{description}</p>
            {actionLabel && (
                <span className="text-primary font-medium group-hover:underline flex items-center">
                    {actionLabel}
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </span>
            )}
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="block group h-full">
                <Content />
            </Link>
        );
    }

    return <Content />;
}
