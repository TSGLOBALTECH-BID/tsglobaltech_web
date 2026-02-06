'use client'

import { usePortfolioFilter } from "../utils/interactions";

export default function PortfolioButtons() {
    // Use the custom portfolio filter hook
    usePortfolioFilter();

    return (<>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button className="portfolio-filter active bg-primary-500 text-white px-6 py-2 rounded-full transition-all duration-300" data-filter="all">
                All Projects
            </button>
            <button className="portfolio-filter bg-white/5 text-dark-300 hover:bg-white/10 px-6 py-2 rounded-full transition-all duration-300" data-filter="web">
                Web Development
            </button>
            <button className="portfolio-filter bg-white/5 text-dark-300 hover:bg-white/10 px-6 py-2 rounded-full transition-all duration-300" data-filter="mobile">
                Mobile Apps
            </button>
            <button className="portfolio-filter bg-white/5 text-dark-300 hover:bg-white/10 px-6 py-2 rounded-full transition-all duration-300" data-filter="cloud">
                Cloud Solutions
            </button>
            <button className="portfolio-filter bg-white/5 text-dark-300 hover:bg-white/10 px-6 py-2 rounded-full transition-all duration-300" data-filter="ai">
                AI & ML
            </button>
        </div>
    </>)
}