"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Calendar } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const handleBooking = () => {
    window.open("https://calendly.com/tztools8/30min?back=1&month=2025-06", "_blank")
  }

  const handleWhatsAppContact = () => {
    window.open("https://wa.me/4917634844040", "_blank")
  }

  const navItems = [
    { name: "Startseite", href: "#home" },
    { name: "Kurse", href: "#courses" },
    { name: "Verleih", href: "#rental" },
    { name: "Über uns", href: "#about" },
    { name: "Kontakt", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-900">
              Taucher<span className="text-cyan-400">Zentrum</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-blue-900 hover:text-cyan-400 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={handleWhatsAppContact}
              variant="outline"
              size="sm"
              className="border-blue-200 text-blue-900 hover:bg-blue-50"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button onClick={handleBooking} size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
              <Calendar className="w-4 h-4 mr-2" />
              Buchen
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="sm">
                <Menu className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg text-blue-900 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-col space-y-3 pt-6 border-t">
                  <Button
                    onClick={handleWhatsAppContact}
                    variant="outline"
                    className="border-blue-200 text-blue-900 hover:bg-blue-50"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp Kontakt
                  </Button>
                  <Button onClick={handleBooking} className="bg-blue-500 hover:bg-blue-600 text-white">
                    <Calendar className="w-4 h-4 mr-2" />
                    Kurs buchen
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
