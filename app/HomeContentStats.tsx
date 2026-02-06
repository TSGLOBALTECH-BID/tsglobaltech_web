'use client';

import { common } from "./content";
import { useCounters } from "./utils/interactions";

export default function HomeContentStats() {
    // Use the custom counter hook for animated statistics
    useCounters();

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
                {common.stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <div className="text-3xl font-bold text-primary-400">
                            <span className="counter" data-target={stat.value}>0</span>+
                        </div>
                        <div className="text-sm text-dark-400">{stat.label}</div>
                    </div>
                ))}
            </div>
        </>
    );
}