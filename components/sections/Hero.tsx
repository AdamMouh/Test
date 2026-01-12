import React from 'react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import AnoAI from '@/components/ui/animated-shader-background';

export function Hero({ lang }: { lang: string }) {
    return (
        <section className="relative bg-black overflow-hidden min-h-[600px] flex items-center">
            {/* Shader Background */}
            <div className="absolute inset-0 z-0">
                <AnoAI />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 flex flex-col-reverse md:flex-row items-center gap-12">

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                        Bienvenue au <br />Centre As-Salam
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg mx-auto md:mx-0">
                        Au service de la communauté depuis 2010.
                        <br />
                        <span className="font-semibold text-neutral-100">Même âme, nouveau lieu.</span>
                    </p>
                    <Link href={`/${lang}/centre`}>
                        <Button variant="primary" className="shadow-lg shadow-primary/20 bg-white text-primary hover:bg-neutral-100 border-transparent">
                            En savoir plus
                        </Button>
                    </Link>
                </div>

                {/* Visual Content (Placeholder) */}
                <div className="flex-1 w-full max-w-lg relative aspect-square md:aspect-4/3 rounded-2xl overflow-hidden shadow-2xl bg-neutral-800/50 backdrop-blur-sm border border-white/10">
                    {/* Placeholder for Mosque Image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/40 font-serif italic text-2xl">Photo du Centre</span>
                    </div>
                    {/* Decorative element (Squircle-like) */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#d4af37]/20 rounded-full blur-2xl"></div>
                </div>
            </div>
        </section>
    );
}
