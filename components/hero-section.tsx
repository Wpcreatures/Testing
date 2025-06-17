"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Calendar, MapPin, Users, Award, Waves } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const handleBooking = () => {
    window.open("https://calendly.com/tztools8/30min?back=1&month=2025-06", "_blank")
  }

  const handleWhatsAppContact = () => {
    window.open("https://wa.me/4917634844040", "_blank")
  }

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 pt-16">
      <div className="absolute inset-0 bg-white/10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center min-h-[80vh]">
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Zertifiziertes Tauchzentrum
              </Badge>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Entdecke die
                <span className="block text-cyan-200">Unterwasserwelt</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0">
                Professionelle Tauchkurse, Ausrüstungsverleih und unvergessliche Taucherlebnisse für Anfänger und
                Profis. Tauche ein in dein nächstes Abenteuer!
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-md mx-auto lg:mx-0">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-3 md:p-4 text-center">
                  <div className="text-xl md:text-2xl font-bold text-white">500+</div>
                  <div className="text-xs md:text-sm text-blue-100">Zertifizierte Taucher</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-3 md:p-4 text-center">
                  <div className="text-xl md:text-2xl font-bold text-white">15+</div>
                  <div className="text-xs md:text-sm text-blue-100">Jahre Erfahrung</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-3 md:p-4 text-center">
                  <div className="text-xl md:text-2xl font-bold text-white">24/7</div>
                  <div className="text-xs md:text-sm text-blue-100">Support</div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={handleBooking}
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3 text-base"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Kurs buchen
              </Button>
              <Button
                onClick={handleWhatsAppContact}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3 text-base backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Kontakt
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-blue-100 text-sm justify-center lg:justify-start">
              <div className="flex items-center justify-center lg:justify-start">
                <MapPin className="w-4 h-4 mr-2" />
                Musterstraße 123, 12345 Musterstadt
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Users className="w-4 h-4 mr-2" />
                Gruppen- und Einzelkurse
              </div>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square">
              <div className="absolute inset-0 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Taucher unter Wasser mit bunten Korallen"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </div>

              <div className="absolute -top-4 -right-4 bg-cyan-400 text-blue-900 p-3 rounded-full shadow-lg">
                <Waves className="w-6 h-6" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white text-blue-900 p-4 rounded-xl shadow-lg">
                <div className="text-sm font-semibold">PADI Zertifiziert</div>
                <div className="text-xs text-blue-600">Open Water bis Instructor</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-12 md:h-20 fill-white">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}
