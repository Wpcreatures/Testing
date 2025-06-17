"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Calendar, Phone } from "lucide-react"
import Image from "next/image"
import rentalData from "@/data/verleih-products.json"

interface Equipment {
  id: string
  title: string
  category: string
  priceDay: number
  priceWeek: number
  available: boolean
  description: string
  features: string[]
  image: string
}

export default function RentalSection() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const equipment: Equipment[] = rentalData.equipment
  const categories = ["all", ...Array.from(new Set(equipment.map((item) => item.category)))]

  const filteredEquipment =
    selectedCategory === "all" ? equipment : equipment.filter((item) => item.category === selectedCategory)

  const handleWhatsAppContact = () => {
    window.open("https://wa.me/4917634844040", "_blank")
  }

  const handleBooking = () => {
    window.open("https://calendly.com/tztools8/30min?back=1&month=2025-06", "_blank")
  }

  return (
    <section id="rental" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-cyan-100 text-cyan-900 mb-4">Ausrüstungsverleih</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Professionelle Tauchausrüstung
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hochwertige und regelmäßig gewartete Tauchausrüstung für alle Bedürfnisse. Von der Grundausstattung bis zur
            Profi-Ausrüstung.
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-8">
            <TabsTrigger value="all">Alle</TabsTrigger>
            {categories.slice(1).map((category) => (
              <TabsTrigger key={category} value={category} className="text-xs lg:text-sm">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredEquipment.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 bg-gray-100">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    {item.available ? (
                      <Badge className="absolute top-3 right-3 bg-green-500 text-white">Verfügbar</Badge>
                    ) : (
                      <Badge className="absolute top-3 right-3 bg-red-500 text-white">Ausgebucht</Badge>
                    )}
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-blue-900">{item.title}</CardTitle>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {item.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t">
                      <div className="space-y-1">
                        <div className="text-lg font-bold text-blue-900">€{item.priceDay}/Tag</div>
                        <div className="text-sm text-gray-600">€{item.priceWeek}/Woche</div>
                      </div>
                      <Button
                        onClick={handleWhatsAppContact}
                        disabled={!item.available}
                        className="bg-cyan-400 hover:bg-cyan-500 text-blue-900"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Anfragen
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Komplettsets verfügbar</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Spare mit unseren Komplettsets! Wir stellen dir die komplette Ausrüstung für deinen Tauchgang zusammen -
            perfekt abgestimmt und geprüft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleBooking} size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              <Calendar className="w-5 h-5 mr-2" />
              Beratungstermin
            </Button>
            <Button
              onClick={handleWhatsAppContact}
              variant="outline"
              size="lg"
              className="border-blue-200 text-blue-900 hover:bg-blue-50"
            >
              <Phone className="w-5 h-5 mr-2" />
              WhatsApp Anfrage
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
