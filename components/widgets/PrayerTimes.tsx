import React from 'react';

interface PrayerTimesProps {
    fajr?: string;
    dhuhr?: string;
    asr?: string;
    maghrib?: string;
    isha?: string;
}

export function PrayerTimesWidget({ fajr, dhuhr, asr, maghrib, isha }: PrayerTimesProps) {
    // Determine next prayer based on current time
    // For now, we'll just display a static "Next Prayer" or list them if data is present
    // A more complex implementation would calculate the next prayer time

    const nextPrayer = { name: 'Asr', time: asr || '--:--' };

    // Simple logic to pick a next prayer for demo purposes if valid times are passed
    // In a real app, comparing HH:MM strings with current time is needed.

    return (
        <div className="bg-primary/5 p-3 rounded-lg border border-primary/10 flex flex-col gap-2 text-sm">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="font-medium text-primary">Prochaine prière à venir</span>
                </div>
                {/* Placeholder logic for next prayer */}
                <span className="font-bold text-primary">{nextPrayer.time}</span>
            </div>

            {/* Optional: Show all times in a mini grid if needed, or keep it simple */}
            <div className="grid grid-cols-5 gap-1 text-xs text-center mt-2 border-t border-primary/5 pt-2">
                <div>
                    <span className="block text-gray-500">Fajr</span>
                    <span className="font-semibold text-primary">{fajr || '--:--'}</span>
                </div>
                <div>
                    <span className="block text-gray-500">Dhuhr</span>
                    <span className="font-semibold text-primary">{dhuhr || '--:--'}</span>
                </div>
                <div>
                    <span className="block text-gray-500">Asr</span>
                    <span className="font-semibold text-primary">{asr || '--:--'}</span>
                </div>
                <div>
                    <span className="block text-gray-500">Maghrib</span>
                    <span className="font-semibold text-primary">{maghrib || '--:--'}</span>
                </div>
                <div>
                    <span className="block text-gray-500">Isha</span>
                    <span className="font-semibold text-primary">{isha || '--:--'}</span>
                </div>
            </div>
        </div>
    );
}
