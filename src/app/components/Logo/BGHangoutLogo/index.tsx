export default function BGHangoutLogo({ className = "w-48 h-auto" }: { className?: string }) {
    return (
        <svg viewBox="0 0 400 120" className={className} xmlns="http://www.w3.org/2000/svg">
            <defs>
                {/* Gradients for 3D effect */}
                <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff4757" />
                    <stop offset="100%" stopColor="#c44569" />
                </linearGradient>
                <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3742fa" />
                    <stop offset="100%" stopColor="#2f3542" />
                </linearGradient>
                <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2ed573" />
                    <stop offset="100%" stopColor="#1e824c" />
                </linearGradient>
                <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffa502" />
                    <stop offset="100%" stopColor="#ff6348" />
                </linearGradient>
            </defs>

            {/* Dice 1 - Red (top left) */}
            <g transform="translate(40, 20)">
                {/* Main face */}
                <rect x="0" y="0" width="32" height="32" fill="url(#redGrad)" rx="3" />
                {/* Top face */}
                <polygon points="0,0 8,-8 40,-8 32,0" fill="#ff6b7a" />
                {/* Right face */}
                <polygon points="32,0 40,-8 40,24 32,32" fill="#e55039" />
                {/* Dots (showing 6) */}
                <circle cx="8" cy="8" r="2" fill="white" />
                <circle cx="24" cy="8" r="2" fill="white" />
                <circle cx="8" cy="16" r="2" fill="white" />
                <circle cx="24" cy="16" r="2" fill="white" />
                <circle cx="8" cy="24" r="2" fill="white" />
                <circle cx="24" cy="24" r="2" fill="white" />
            </g>

            {/* Dice 2 - Blue (top right, attached to dice 1) */}
            <g transform="translate(72, 12)">
                {/* Main face */}
                <rect x="0" y="0" width="32" height="32" fill="url(#blueGrad)" rx="3" />
                {/* Top face */}
                <polygon points="0,0 8,-8 40,-8 32,0" fill="#5352ed" />
                {/* Right face */}
                <polygon points="32,0 40,-8 40,24 32,32" fill="#2f3542" />
                {/* Dots (showing 4) */}
                <circle cx="8" cy="8" r="2" fill="white" />
                <circle cx="24" cy="8" r="2" fill="white" />
                <circle cx="8" cy="24" r="2" fill="white" />
                <circle cx="24" cy="24" r="2" fill="white" />
            </g>

            {/* Dice 3 - Green (bottom left, attached to dice 1) */}
            <g transform="translate(32, 52)">
                {/* Main face */}
                <rect x="0" y="0" width="32" height="32" fill="url(#greenGrad)" rx="3" />
                {/* Top face */}
                <polygon points="0,0 8,-8 40,-8 32,0" fill="#7bed9f" />
                {/* Right face */}
                <polygon points="32,0 40,-8 40,24 32,32" fill="#1e824c" />
                {/* Dots (showing 3) */}
                <circle cx="8" cy="8" r="2" fill="white" />
                <circle cx="16" cy="16" r="2" fill="white" />
                <circle cx="24" cy="24" r="2" fill="white" />
            </g>

            {/* Dice 4 - Orange (bottom right, attached to other dice) */}
            <g transform="translate(64, 44)">
                {/* Main face */}
                <rect x="0" y="0" width="32" height="32" fill="url(#orangeGrad)" rx="3" />
                {/* Top face */}
                <polygon points="0,0 8,-8 40,-8 32,0" fill="#ffb142" />
                {/* Right face */}
                <polygon points="32,0 40,-8 40,24 32,32" fill="#ff6348" />
                {/* Dots (showing 5) */}
                <circle cx="8" cy="8" r="2" fill="white" />
                <circle cx="24" cy="8" r="2" fill="white" />
                <circle cx="16" cy="16" r="2" fill="white" />
                <circle cx="8" cy="24" r="2" fill="white" />
                <circle cx="24" cy="24" r="2" fill="white" />
            </g>

            {/* Foreground text "BG HANGOUT" in 8-bit style - bigger and closer */}
            {/* <text
                x="120"
                y="78"
                textAnchor="start"
                className="fill-white text-4xl font-mono"
                style={{
                    fontFamily: "monospace",
                    fontSize: "32px",
                    letterSpacing: "3px",
                    fontWeight: "bold",
                }}
            >
                BG HANGOUT
            </text> */}
        </svg>
    )
}
