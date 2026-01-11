import React from 'react';

export function PrayerTimesWidget() {
    // Mock data for now - in production would fetch from API/JSON
    const nextPrayer = { name: 'Asr', time: '15:45' };

    return (
        <div className="bg-primary/5 p-3 rounded-lg border border-primary/10 flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="font-medium text-primary">Prière à venir : {nextPrayer.name}</span>
            </div>
            <span className="font-bold text-primary">{nextPrayer.time}</span>
        </div>
    );
}
