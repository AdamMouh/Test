import React from 'react';
import Link from 'next/link';

export function Footer({ lang }: { lang: string }) {
    return (
        <footer className="bg-primary text-white py-12 border-t border-primary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="font-serif text-xl font-bold mb-4">Centre As-Salam</h3>
                        <p className="text-gray-300 max-w-sm">
                            Au service de la communauté montréalaise depuis 2010.
                            Un lieu de paix, d'apprentissage et d'entraide.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-4 text-[#d4af37]">Navigation</h4>
                        <ul className="space-y-2">
                            <li><Link href={`/${lang}/centre`} className="text-gray-300 hover:text-white">Le Centre</Link></li>
                            <li><Link href={`/${lang}/services`} className="text-gray-300 hover:text-white">Services</Link></li>
                            <li><Link href={`/${lang}/engagement`} className="text-gray-300 hover:text-white">Faire un don</Link></li>
                        </ul>
                    </div>

                    {/* Legal / Contact */}
                    <div>
                        <h4 className="font-bold mb-4 text-[#d4af37]">Contact</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>Montréal, QC</li>
                            <li>contact@as-salam.ca</li>
                            <li className="pt-4">
                                <Link href={`/${lang}/mentions-legales`} className="text-xs text-gray-400 hover:text-white">Mentions légales</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} Centre As-Salam. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}
