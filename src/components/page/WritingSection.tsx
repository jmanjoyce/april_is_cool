import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function WritingSection() {
  return (
    <>
      <section id="writing" className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">Selected Work</h2>
          <div className="space-y-12">
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-light mb-4">&quot;Being the prettiest person like ever&quot;</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      It&apos;s just what you do.
                    </p>
                    <Badge variant="outline" className="border-gray-300 text-gray-600">Capturing my heart</Badge>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <p>It&apos;s what you&apos;ve done</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-light mb-4">&quot;Echoes of Home&quot;</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      A collection exploring displacement, belonging, and the search for identity.
                    </p>
                    <Badge variant="outline" className="border-gray-300 text-gray-600">Poetry Collection</Badge>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <p>2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Separator className="my-16" />
    </>
  )
}


