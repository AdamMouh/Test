import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PrayerTimesWidget } from '@/components/widgets/PrayerTimes';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { PRAYER_TIMES_QUERY, NEWS_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

export default async function Home() {
    const lang = "fr"; // Hardcoded default

    // Fetch data
    const prayerTimes = await client.fetch(PRAYER_TIMES_QUERY);
    const news = await client.fetch(NEWS_QUERY);

    return (
        <div className="space-y-0">
            {/* 1. Hero Section (Welcome) */}
            <Hero lang={lang} />

            {/* 2. Mission / Continuity (Reassurance) */}
            <section className="py-16 bg-white border-y border-neutral-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-6">Un héritage qui continue</h2>
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                        Notre mission inchangée est de servir et d&apos;accompagner la communauté musulmane de Montréal. <br />
                        Fondé en 2010, le Centre As-Salam poursuit son œuvre grâce à une équipe dévouée et une tradition sunnite authentique.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full text-sm text-gray-600">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Association à but non lucratif reconnue (OBNL)
                    </div>
                </div>
            </section>

            {/* 3. Key Pillars (Navigation Hub) */}
            <section className="py-20 bg-neutral-50 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold font-serif text-primary mb-12 text-center">Que cherchez-vous ?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card
                            title="Le Centre"
                            description="Découvrir notre histoire, nos valeurs et notre équipe."
                            href={`/${lang}/centre`}
                            actionLabel="Présentation"
                            icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                        />
                        <Card
                            title="Services"
                            description="Prières, cours d'arabe, étude du Coran et événements."
                            href={`/${lang}/services`}
                            actionLabel="Nos services"
                            icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
                        />
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 hover:shadow-md transition-all flex flex-col h-full">
                            <div className="mb-4 text-primary">
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2 font-serif">Horaires</h3>
                            <div className="mb-4 flex-grow">
                                <p className="text-gray-600 mb-4">Prochaine prière à Montréal :</p>
                                <PrayerTimesWidget
                                    fajr={prayerTimes?.fajr}
                                    dhuhr={prayerTimes?.dhuhr}
                                    asr={prayerTimes?.asr}
                                    maghrib={prayerTimes?.maghrib}
                                    isha={prayerTimes?.isha}
                                />
                            </div>
                            <Link href={`/${lang}/services`} className="text-primary font-medium group-hover:underline flex items-center">
                                Horaires complets
                                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </Link>
                        </div>

                        <Card
                            title="Engagement"
                            description="Soutenez le centre ou devenez bénévole pour la communauté."
                            href={`/${lang}/engagement`}
                            actionLabel="Participer"
                            icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
                        />
                    </div>
                </div>
            </section>

            {/* 4. News / Events (Placeholder) */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold font-serif text-primary mb-8">Actualités & Événements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {news && news.length > 0 ? (
                                news.map((item: any) => (
                                    <div key={item._id} className="group cursor-pointer">
                                        <div className="aspect-video bg-neutral-200 rounded-lg mb-4 relative overflow-hidden">
                                            {item.mainImage ? (
                                                <img
                                                    src={urlFor(item.mainImage).width(400).height(225).url()}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">Pas d'image</div>
                                            )}
                                        </div>
                                        <span className="text-sm font-bold text-[#d4af37]">
                                            {new Date(item.publishedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                        </span>
                                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{item.title}</h3>
                                        {item.excerpt && <p className="text-gray-600 mt-2 text-sm line-clamp-2">{item.excerpt}</p>}
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-3 text-center text-gray-500 py-12">
                                    <p>Aucune actualité pour le moment.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Final CTA */}
            <section className="py-20 bg-primary text-white text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold mb-6">Aidez-nous à poursuivre notre mission</h2>
                    <p className="text-lg text-gray-200 mb-8">
                        Le Centre As-Salam fonctionne grâce à la générosité de ses membres.
                        <br />100% de nos activités sont financées par vos dons.
                    </p>
                    <Link href={`/${lang}/engagement`}>
                        <Button variant="secondary" className="!text-white !border-white hover:!bg-white hover:!text-primary">
                            Faire un don
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
