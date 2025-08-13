import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <>
      <section id="contact" className="container mx-auto px-6 py-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">Get in Touch</h2>
          <p className="text-gray-600 mb-12 text-center leading-relaxed">
            I&apos;m always interested in new opportunities and conversations.
          </p>
          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
                  <Input id="name" placeholder="Your name" className="border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                  <Textarea id="message" placeholder="Your message" rows={5} className="border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
                </div>
                <Button type="submit" className="w-full bg-gray-900 text-white hover:bg-gray-800 py-3">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      <Separator className="my-16" />
    </>
  )
}


