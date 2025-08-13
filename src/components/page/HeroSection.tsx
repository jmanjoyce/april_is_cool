import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { LandingDecor } from "@/components/page/LandingDecor"
import { TypingAnimation } from "@/components/animations/typingAnimation"
import React from "react"

export function HeroSection() {
  const [showCta, setShowCta] = React.useState(false)
  const [showParagraph, setShowParagraph] = React.useState(false)

  const titleText = "Hi, I'm Xiadi"
  const finalParagraph =
    "And this normally would be a bio, but for now it's a letter. we definitely don't need these fancy animaitons if you don't want"
 
  return (
    <>
      <section className="relative container mx-auto px-6 py-32">
        <LandingDecor />
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-2 mb-8">
            <div className="w-2 h-16 bg-gradient-to-b from-gray-300 to-transparent"></div>
            <div className="w-2 h-16 bg-gradient-to-b from-gray-300 to-transparent"></div>
          </div>
          <TypingAnimation
            text={titleText}
            wrapper="h1"
            speedMs={100}
            cursor={false}
            repeat={0}
            onComplete={() => setShowParagraph(true)}
            className="text-6xl md:text-8xl font-light mb-8 tracking-tight min-h-[3.75rem] md:min-h-[6rem]"
          />
          <div className="flex justify-center mb-12">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          </div>
          <div className="relative mb-16 max-w-xl mx-auto">
            {/* layout shim to reserve final height and avoid shifts */}
            <p className="invisible text-xl text-gray-600 leading-relaxed" aria-hidden>
              {finalParagraph}
            </p>
            {showParagraph && (
              <div className="absolute inset-0">
                <TypingAnimation
                  wrapper="p"
                  speedMs={50}
                  cursor={false}
                  repeat={0}
                  sequence={[
                    500,
                    "I'm a writer",
                    1000,
                    "I'm a poet",
                    1000,
                    "I'm a student",
                    1000,
                    "I'm a doctor (well, not yet)",
                    1000,
                    "And this normally would be a bio, but for now it's a letter. and also",
                    1000,
                    finalParagraph,
                    () => setShowCta(true),
                  ]}
                  onComplete={() => setShowCta(true)}
                  className="text-xl text-gray-600 leading-relaxed"
                />
              </div>
            )}
          </div>
          <div className={`transition-all duration-700 ease-out ${showCta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}>
            <Button className="bg-gray-900 text-white hover:bg-gray-800 px-12 py-4 text-lg">Explore Work</Button>
          </div>
        </div>
      </section>
      <Separator className="my-16" />
    </>
  )
}


