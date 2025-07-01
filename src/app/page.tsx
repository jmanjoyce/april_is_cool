"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function Home() {
  const [buttonClicks, setButtonClicks] = useState(0)
  const [isSpinning, setIsSpinning] = useState(false)
  const [showRainbow, setShowRainbow] = useState(false)
  const [currentPhoto, setCurrentPhoto] = useState(0)

  // Sample photos of April (you can replace these with actual URLs)
  const aprilPhotos = [
    "/april_1.jpg",
    
    // ...add more as needed
  ]

  const earlPhotos = [
    "/earl_1.jpg",
    "/earl_2.jpg",
    "/earl_3.jpg",
    // ...add more as needed
  ]

  const handleSillyButton = () => {
    setButtonClicks(prev => prev + 1)
    setIsSpinning(true)
    setTimeout(() => setIsSpinning(false), 1000)
  }

  const handleRainbowButton = () => {
    setShowRainbow(true)
    setTimeout(() => setShowRainbow(false), 3000)
  }

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % earlPhotos.length)
  }

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + earlPhotos.length) % earlPhotos.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Rainbow Effect */}
      {showRainbow && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 animate-pulse opacity-30"></div>
        </div>
      )}

      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <h1 className="text-xl font-bold text-slate-900">Listen to April</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#photos" className="text-slate-600 hover:text-pink-600 transition-colors">Photos</a>
            <a href="#wisdom" className="text-slate-600 hover:text-pink-600 transition-colors">April&apos;s Wisdom</a>
            <a href="#fun" className="text-slate-600 hover:text-pink-600 transition-colors">Fun Stuff</a>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
              Listen Now!
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-6">
            Do what April says <span className="text-slate-900">or else</span>
          </h2>
          <div className="flex justify-center mb-8">
            <img
              src={aprilPhotos[0]}
              alt="April front and center"
              className="rounded-2xl shadow-lg w-64 h-64 object-cover border-4 border-pink-300"
            />
          </div>
          <Badge variant="secondary" className="mb-4 animate-bounce">🎭 April is cool! 🎭</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            You Should Listen to What
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"> April Says</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Because April is wise, April has Earl, and April knows what&apos;s best for you! 
            Don&apos;t argue, just listen. April has spoken! 🗣️✨
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 animate-pulse"
              onClick={handleSillyButton}
            >
              {isSpinning ? "🔄 Spinning..." : "🎪 Click Me!"}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-pink-300 text-pink-600 hover:bg-pink-50"
              onClick={handleRainbowButton}
            >
              🌈 Rainbow Mode
            </Button>
          </div>
          {buttonClicks > 0 && (
            <p className="mt-4 text-pink-600 font-semibold">
              You&apos;ve clicked {buttonClicks} times! April is {buttonClicks > 10 ? "very" : ""} impressed! 🎉
            </p>
          )}
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="photos" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Earl&apos;s Photo Collection</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Look at these amazing photos of Earl! Each one tells a story of wisdom and wonder.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={earlPhotos[currentPhoto]} 
                  alt={`Earl photo ${currentPhoto + 1}`}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">Earl #{currentPhoto + 1}</h3>
                  <p className="text-white/80">Looking wise as always!</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <Button 
                    variant="outline" 
                    onClick={prevPhoto}
                    className="border-pink-300 text-pink-600 hover:bg-pink-50"
                  >
                    ← Previous
                  </Button>
                  <span className="text-slate-600">
                    {currentPhoto + 1} of {earlPhotos.length}
                  </span>
                  <Button 
                    variant="outline" 
                    onClick={nextPhoto}
                    className="border-pink-300 text-pink-600 hover:bg-pink-50"
                  >
                    Next →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-20" />

      {/* April's Wisdom Section */}
      <section id="wisdom" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">April&apos;s Words of Wisdom</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            These are the things April wants you to know. Pay attention!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow border-pink-200">
            <CardHeader>
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💭</span>
              </div>
              <CardTitle className="text-pink-700">Think Before You Act or Earl will be mad</CardTitle>
              <CardDescription>
                &quot; Waahoo  &quot;
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-purple-200">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <CardTitle className="text-purple-700">Stay Focused</CardTitle>
              <CardDescription>
                &quot; Focused on what I say you should do of course (so apple cider run)  &quot;
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-blue-200">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <CardTitle className="text-blue-700">Be Amazing</CardTitle>
              <CardDescription>
                &quot;April says: You&apos;re already amazing, but you can be more amazing. It&apos;s science!&quot;
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <Separator className="my-20" />

      {/* Fun Interactive Section */}
      <section id="fun" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Fun Stuff with April</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Interactive buttons and fun effects because April loves to have fun!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:scale-105 transition-transform">
            <CardContent className="pt-6">
              <Button 
                className="w-full mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
                onClick={() => alert("April says: You're awesome! 🌟")}
              >
                🎉 Celebrate!
              </Button>
              <p className="text-slate-600">Click for a celebration!</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:scale-105 transition-transform">
            <CardContent className="pt-6">
              <Button 
                className="w-full mb-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600"
                onClick={() => {
                  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']
                  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)] + '50'
                  setTimeout(() => document.body.style.backgroundColor = '', 2000)
                }}
              >
                🎨 Random Color!
              </Button>
              <p className="text-slate-600">Change the background!</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:scale-105 transition-transform">
            <CardContent className="pt-6">
              <Button 
                className="w-full mb-4 bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600"
                onClick={() => {
                  const messages = [
                    "April says: You're doing great!",
                    "April says: Keep it up!",
                    "April says: You're amazing!",
                    "April says: Don't give up!",
                    "April says: You've got this!"
                  ]
                  alert(messages[Math.floor(Math.random() * messages.length)])
                }}
              >
                💬 Random Wisdom
              </Button>
              <p className="text-slate-600">Get random April wisdom!</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:scale-105 transition-transform">
            <CardContent className="pt-6">
              <Button 
                className="w-full mb-4 bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600"
                onClick={() => {
                  const emojis = ['😊', '🎉', '🌟', '💖', '✨', '🎭', '🌈', '🎪']
                  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]
                  const div = document.createElement('div')
                  div.textContent = randomEmoji
                  div.style.position = 'fixed'
                  div.style.left = Math.random() * window.innerWidth + 'px'
                  div.style.top = Math.random() * window.innerHeight + 'px'
                  div.style.fontSize = '2rem'
                  div.style.pointerEvents = 'none'
                  div.style.zIndex = '1000'
                  document.body.appendChild(div)
                  setTimeout(() => document.body.removeChild(div), 2000)
                }}
              >
                🎪 Emoji Explosion!
              </Button>
              <p className="text-slate-600">Create emoji fireworks!</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-20" />

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Tell April Something</h2>
            <p className="text-xl text-slate-600">
              Have something to say to April? She&apos;s all ears! (But remember, she&apos;s usually right)
            </p>
          </div>
          
          <Card className="border-pink-200">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="Enter your name" className="border-pink-300 focus:border-pink-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message to April</Label>
                  <Textarea 
                    id="message" 
                    placeholder="What do you want to tell April?" 
                    rows={5} 
                    className="border-pink-300 focus:border-pink-500"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                >
                  Send to April 💌
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <h3 className="text-xl font-bold">Listen to April</h3>
          </div>
          <p className="text-slate-400 mb-6">
            Built with ❤️ because April said so! React, TypeScript, and shadcn/ui
          </p>
          <div className="flex justify-center space-x-6 text-slate-400">
            <a href="#" className="hover:text-pink-400 transition-colors">April&apos;s Rules</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Listen More</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Contact April</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
