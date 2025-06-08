// tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                gridMotion: {
                    '0%': { transform: 'translate(0px, 0px)' },
                    '25%': { transform: 'translate(5px, -5px)' },
                    '50%': { transform: 'translate(-5px, 5px)' },
                    '75%': { transform: 'translate(5px, 5px)' },
                    '100%': { transform: 'translate(0px, 0px)' },
                },
            },
            animation: {
                gridMotion: 'gridMotion 2s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};
