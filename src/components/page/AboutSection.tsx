import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export function AboutSection() {
  return (
    <>
      <section id="about" className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light mb-8">About Me!</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Hi! I’m Xiadi—but also, hi, Xiadi.
                </p>
                <p>
                  Now, you might be wondering why I chose the tangerine flavor (with a tangerine haha (or orange idk). You might think I’d go for raspberry lime, or maybe even one of those fancy cocktail flavors. Funny thing is, I never really liked orange juice. My mom always made me drink it as a kid, and I think that’s exactly why I didn’t like it.
                </p>
                <p>
                  When I was a sophomore at Bowdoin, they had this orange-juice-squeezing station. Skeptical at first, I eventually worked up the courage to try some. It feels weird to say I was hesitant about orange juice, but I guess I was.
                </p>
                <p>
                  A few weeks later—after trying it more and then getting far too drunk on screwdrivers—I was sold. It’s wild how a simple seltzer in a can can taste so good and bring back so many memories… but here we are.
                </p>
                <p>
                  I didn’t want to pack this website with too much text—I figured that might give the wrong idea about how much content you’d actually want on yours. I kept thinking about what kind of style you might like. You always say, “I don’t know you,” and yeah, that’s true—but I had a hunch you’d go for something like this.
                </p>
                <p>
                  Of course, we can change anything you want—swap out the SVGs (the little drawings on the landing page), tweak the layout, whatever feels right. I put some thought into the design, but it’s not perfect yet. It won’t be until you add your own touch, and I can walk you through exactly how to do that it could be beautiful filling in the stubbed out sections!.
                </p>
                <p>
                  Haha, I almost bought a domain with your name—but I figured that would stress you out way too much, knowing it could pop up in a Google search (even if only for a few hours). So, I hope typing in the domain didn’t take you too long!
                </p>
                <p>
                  I know nobody can realistically promise anything in this strange world—but if you give me a chance, I won’t leave you hanging. You’ll never need to hold me to this promise or wonder if I mean it, because I do. It might feel like we’re speedrunning this, but maybe that’s not such a bad thing. Life can be complicated, harsh, difficult, beautiful, and unforgiving—and nobody should have to face it without someone who loves them and puts them first. Especially not you.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="overflow-hidden rounded-xl shadow-sm">
                  <Image
                    src="/xiadi/xiadi_zhai.jpg"
                    alt="Xiadi Zhai portrait"
                    width={480}
                    height={640}
                    priority={false}
                    className="h-auto w-full object-cover"
                  />
                </div>
                {/* Abstract overlay */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Separator className="my-16" />
    </>
  )
}


