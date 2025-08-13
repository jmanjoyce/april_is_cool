// Abstract, monochrome plants and lines specifically for the landing (hero) area
import { cn } from "@/lib/utils"



function TopSymmetricBand({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      preserveAspectRatio="none"
    >
      {/* Layered abstract waves */}
      <path
        d="M0 70 C 150 10, 300 130, 450 70 S 750 130, 900 70 S 1050 10, 1200 70"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="2.4"
      />
      <path
        d="M0 55 C 180 25, 300 95, 520 60 S 820 95, 1040 60 S 1140 30, 1200 55"
        stroke="currentColor"
        strokeOpacity="0.32"
        strokeWidth="1.8"
      />
      {/* Central symmetric ornaments */}
      
    </svg>
  )
}

// user's provided SVG from /public/landingart/file.svg will be used as background images

export function LandingDecor() {
  return (
    <div className={cn(
      "pointer-events-none absolute inset-0 -z-10"
    )}>
      {/* Symmetric abstract top band (centered, with side margins) */}
      <TopSymmetricBand className="absolute top-1 left-1/2 -translate-x-1/2 w-[92%] md:w-[82%] h-32 md:h-36 text-gray-500" />

      {/* Hairline curves near bottom of hero */}
      {/* <ThinLines className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[720px] max-w-[95vw] text-gray-300" /> */}

      {/* Eastern pine (left) */}
      <div
        className="absolute top-20 md:top-28 -left-4 md:-left-6 h-72 w-72 md:h-96 md:w-96 opacity-60"
        style={{
          backgroundImage: "url(/landingart/whitepine.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          filter: "grayscale(1)",
        }}
        aria-hidden
      />

      {/* Single flower (right) */}
      <div
        className="absolute top-24 md:top-32 -right-4 md:-right-6 h-72 w-72 md:h-96 md:w-96 opacity-60"
        style={{
          backgroundImage: "url(/landingart/smallflower.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          filter: "grayscale(1)",
        }}
        aria-hidden
      />

      {/* Group of flowers removed as requested */}

      {/* Subtle vertical hairlines aligned to the sides of the top band */}
    </div>
  )
}


