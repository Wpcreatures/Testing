"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react"

export default function ContactSection() {
  const handleWhatsAppContact = () => {
    window.open("https://wa.me/4917634844040", "_blank")
  }

  const handleBooking = () => {
    window.open("https://calendly.com/tztools8/30min?back=1&month=2025-06", "_blank")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">Kontakt & Anfahrt</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hast du Fragen oder möchtest einen Kurs buchen? Wir sind für dich da!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Unser Standort
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-blue-900">TaucherZentrum</p>
                  <p className="text-gray-600">Musterstraße 123</p>
                  <p className="text-gray-600">12345 Musterstadt</p>
                  <p className="text-gray-600">Deutschland</p>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center mb-2">
                    <Phone className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="text-gray-700">+49 176 34844040</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Mail className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="text-gray-700">info@taucherzentrum.de</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Öffnungszeiten
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Montag - Freitag</span>
                    <span className="font-semibold">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Samstag</span>
                    <span className="font-semibold">09:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sonntag</span>
                    <span className="font-semibold">Nach Vereinbarung</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleBooking} size="lg" className="bg-blue-500 hover:bg-blue-600 text-white flex-1">
                <Calendar className="w-5 h-5 mr-2" />
                Termin buchen
              </Button>
              <Button
                onClick={handleWhatsAppContact}
                variant="outline"
                size="lg"
                className="border-blue-200 text-blue-900 hover:bg-blue-50 flex-1"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-blue-900">Nachricht senden</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">Vorname</Label>
                    <Input id="firstName" placeholder="Max" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nachname</Label>
                    <Input id="lastName" placeholder="Mustermann" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">E-Mail</Label>
                  <Input id="email" type="email" placeholder="max@example.com" required />
                </div>

                <div>
                  <Label htmlFor="phone">Telefon (optional)</Label>
                  <Input id="phone" type="tel" placeholder="+49 123 456789" />
                </div>

                <div>
                  <Label htmlFor="subject">Betreff</Label>
                  <Input id="subject" placeholder="Interesse an Open Water Kurs" required />
                </div>

                <div>
                  <Label htmlFor="message">Nachricht</Label>
                  <Textarea
                    id="message"
                    placeholder="Erzähle uns von deinem Interesse am Tauchen..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-500 text-blue-900">
                  Nachricht senden
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12">
          <Card>
            <CardContent className="p-0">
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Interaktive Karte</p>
                  <p className="text-sm">Hier würde eine Google Maps Integration stehen</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
