import React from "react";

const BackgroundGrid: React.FC = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-zinc-950 overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <pattern
                        id="grid"
                        width="10"
                        height="10"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M 10 0 L 0 0 0 10"
                            fill="none"
                            stroke="#2b2b2b"
                            strokeWidth="0.15"
                        />
                    </pattern>
                </defs>
                <g className="animate-gridMotion">
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </g>
            </svg>
        </div>
    );
};

export default BackgroundGrid;
