import React from "react";
import { useNavigate } from "react-router";

const Banner =() =>{
    const navigate = useNavigate();

    const stats =[  
        { value : 10, label: 'Total Friends'},
        { value : 3, label : 'On Track'},
        { value : 6, label : 'Need Attention'},
        { value : 12, label: 'Interactions This month'},
    ];

    return (
        <section className="bg-[#f9fafb] pt-16 pb-12 px-4 font-sans">
            <div className="max-w6xl mx-auto flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4 tracking-tight">
                Friends to keep close in your life
                </h1>
                <p className="text-[#64748b] text-base md:text-lg leading-relaxed px-4">
                your personal shelf of meaningful connections. Browse, tend, and nurture the 
                relationships that matter most.
                </p>
            </div>

        {/* Action Button using SVG for the Plus icon */}
        <button 
            onClick={() => navigate('/add-friend')}
            className="flex items-center gap-2 bg-[#284a3c] hover:bg-[#1e382d] text-white px-5 py-2.5 rounded-md font-semibold transition-colors duration-200 mb-16 shadow-sm"
            >
            <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add a Friend
            </button>

          {/* Summary Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                {stats.map((item, index) => (
                <div 
                key={index} 
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-[1.02]"
                >
                <span className="text-4xl font-bold text-[#284a3c] mb-2">
                {item.value}
                </span>
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest text-center">
                {item.label}
                </span>
            </div>
    ))}
            </div>
        
    </section>
    );
};

export default Banner;
