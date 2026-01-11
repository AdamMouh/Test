import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Navbar({ lang }: { lang: string }) {
    // Simple navigation items - in real app, these would come from dictionary
    const navItems = [
        { label: 'Accueil', href: `/${lang}` },
        { label: 'Le Centre', href: `/${lang}/centre` },
        { label: 'Services', href: `/${lang}/services` },
        { label: 'Engagement', href: `/${lang}/engagement` },
        { label: 'Contact', href: `/${lang}/contact` },
    ];

    return (
        <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link href={`/${lang}`} className="flex items-center">
                        <span className="font-serif text-2xl font-bold text-primary">As-Salam</span>
                        <span className="ml-2 text-sm text-gray-500 hidden sm:block border-l border-gray-300 pl-2">Montréal</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-gray-600 hover:text-primary font-medium transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}

                        {/* Prayer Times Button (Sticky/Visible) */}
                        <Button variant="secondary" className="!py-2 !px-4 text-sm">
                            Horaires de prière
                        </Button>
                    </div>

                    {/* Mobile Menu Button (Placeholder) */}
                    <div className="md:hidden">
                        <button className="text-gray-500 hover:text-primary p-2">
                            <span className="sr-only">Menu</span>
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
