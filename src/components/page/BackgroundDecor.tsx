function BotanicalSprig({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g opacity="0.45" stroke="currentColor" strokeWidth="1">
        <path
          d="M100 290 C 110 210, 90 150, 100 80 C 110 40, 120 20, 120 10"
          strokeLinecap="round"
        />
        <path d="M100 220 C 80 210, 70 200, 60 185" />
        <path d="M100 195 C 120 190, 135 180, 145 165" />
        <path d="M95 165 C 75 160, 60 150, 50 135" />
        <path d="M105 145 C 125 140, 145 130, 155 118" />
        <path d="M100 120 C 85 115, 70 105, 60 95" />
      </g>
      <g opacity="0.35" stroke="currentColor" strokeWidth="0.8">
        <path d="M58 185 C 50 178, 44 170, 42 160 C 50 165, 56 173, 58 185" />
        <path d="M148 166 C 156 158, 164 150, 168 140 C 160 146, 152 155, 148 166" />
        <path d="M52 136 C 44 128, 36 118, 33 108 C 41 115, 48 125, 52 136" />
        <path d="M158 116 C 168 106, 178 96, 183 85 C 174 92, 164 103, 158 116" />
      </g>
    </svg>
  )
}

function BotanicalFern({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 260 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M130 250 C 132 190, 128 140, 130 80 C 132 40, 140 18, 142 10" strokeWidth="1" opacity="0.5" />
        {Array.from({ length: 9 }).map((_, i) => {
          const y = 230 - i * 20
          const dir = i % 2 === 0 ? 1 : -1
          const offset = 30 + i * 4
          return (
            <path
              key={i}
              d={`M130 ${y} C ${130 + dir * offset} ${y - 6}, ${130 + dir * (offset + 10)} ${y - 14}, ${130 + dir * (offset + 18)} ${y - 22}`}
              strokeWidth="0.9"
              opacity="0.4"
            />
          )
        })}
      </g>
    </svg>
  )
}

export function BackgroundDecor() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Monochrome botanical sprigs */}
      <BotanicalSprig className="absolute top-16 left-6 h-48 w-auto text-gray-300" />
      <BotanicalFern className="absolute top-24 right-10 h-56 w-auto text-gray-300" />
      <BotanicalSprig className="absolute bottom-28 left-1/5 h-40 w-auto rotate-12 text-gray-200" />
      <BotanicalFern className="absolute bottom-16 right-4 h-44 w-auto -rotate-6 text-gray-200" />

      {/* Fine hairline accents for depth */}
      <div className="absolute top-1/3 right-1/3 h-24 w-px bg-gray-200/60"></div>
      <div className="absolute bottom-1/4 left-1/3 h-16 w-px bg-gray-200/50"></div>
    </div>
  )
}


