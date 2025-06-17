"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/4917634844040", "_blank")
  }

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              Taucher<span className="text-cyan-400">Zentrum</span>
            </div>
            <p className="text-blue-100">
              Dein Partner für professionelle Tauchausbildung und unvergessliche Unterwassererlebnisse.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-blue-100 hover:text-white hover:bg-blue-800">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-blue-100 hover:text-white hover:bg-blue-800">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-blue-100 hover:text-white hover:bg-blue-800">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li>
                <a href="#courses" className="text-blue-100 hover:text-white transition-colors">
                  Kurse
                </a>
              </li>
              <li>
                <a href="#rental" className="text-blue-100 hover:text-white transition-colors">
                  Verleih
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-100 hover:text-white transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Unsere Services</h3>
            <ul className="space-y-2">
              <li className="text-blue-100">PADI Kurse</li>
              <li className="text-blue-100">Ausrüstungsverleih</li>
              <li className="text-blue-100">Tauchreisen</li>
              <li className="text-blue-100">Equipment Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontakt</h3>
            <div className="space-y-2">
              <div className="flex items-center text-blue-100">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="text-sm">Musterstraße 123, 12345 Musterstadt</span>
              </div>
              <div className="flex items-center text-blue-100">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="text-sm">+49 176 34844040</span>
              </div>
              <div className="flex items-center text-blue-100">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="text-sm">info@taucherzentrum.de</span>
              </div>
            </div>
            <Button onClick={handleWhatsAppContact} className="bg-cyan-400 hover:bg-cyan-500 text-blue-900 w-full">
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp Kontakt
            </Button>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-100 text-sm">© 2024 TaucherZentrum. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                Impressum
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                Datenschutz
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
