"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Award, Calendar, CheckCircle } from "lucide-react"

interface Course {
  id: string
  title: string
  level: string
  duration: string
  price: string
  maxParticipants: number
  description: string
  features: string[]
  certification: string
  popular?: boolean
}

const courses: Course[] = [
  {
    id: "open-water",
    title: "PADI Open Water Diver",
    level: "Anfänger",
    duration: "3-4 Tage",
    price: "€399",
    maxParticipants: 6,
    description: "Der perfekte Einstieg ins Tauchen. Lerne die Grundlagen und erhalte deine erste Zertifizierung.",
    features: [
      "Theorieunterricht",
      "Pool-Training",
      "4 Freiwasser-Tauchgänge",
      "Komplette Ausrüstung inklusive",
      "PADI Zertifikat",
    ],
    certification: "PADI Open Water",
    popular: true,
  },
  {
    id: "advanced",
    title: "PADI Advanced Open Water",
    level: "Fortgeschritten",
    duration: "2-3 Tage",
    price: "€299",
    maxParticipants: 4,
    description: "Erweitere deine Fähigkeiten mit 5 Adventure Dives in verschiedenen Spezialbereichen.",
    features: [
      "5 Adventure Dives",
      "Tieftauchen bis 30m",
      "Unterwasser-Navigation",
      "Nachttauchen möglich",
      "Wrack- oder Strömungstauchen",
    ],
    certification: "PADI Advanced Open Water",
  },
  {
    id: "rescue",
    title: "PADI Rescue Diver",
    level: "Experte",
    duration: "3-4 Tage",
    price: "€449",
    maxParticipants: 4,
    description: "Lerne Notfallsituationen zu erkennen, zu vermeiden und zu bewältigen.",
    features: [
      "Rettungstechniken",
      "Erste Hilfe Training",
      "Stress-Management",
      "Notfall-Szenarien",
      "EFR Zertifikat inklusive",
    ],
    certification: "PADI Rescue Diver",
  },
  {
    id: "divemaster",
    title: "PADI Divemaster",
    level: "Profi",
    duration: "4-6 Wochen",
    price: "€899",
    maxParticipants: 2,
    description: "Der erste Schritt zum Tauchprofi. Führe andere Taucher und assistiere bei Kursen.",
    features: [
      "Führungsqualitäten",
      "Tauchtheorie vertieft",
      "Kursassistenz",
      "Tauchplatz-Management",
      "Professionelle Zertifizierung",
    ],
    certification: "PADI Divemaster",
  },
]

export default function CoursesSection() {
  const handleBooking = () => {
    window.open("https://calendly.com/tztools8/30min?back=1&month=2025-06", "_blank")
  }

  return (
    <section id="courses" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-900 mb-4">Zertifizierte Kurse</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">Unsere Tauchkurse</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Von Anfänger bis Profi - wir bieten PADI-zertifizierte Kurse für jeden Level. Alle Kurse werden von
            erfahrenen Instructors geleitet.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => (
            <Card
              key={course.id}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                course.popular ? "ring-2 ring-cyan-400 shadow-lg" : ""
              }`}
            >
              {course.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-cyan-400 text-blue-900">Beliebt</Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {course.level}
                  </Badge>
                  <div className="text-2xl font-bold text-blue-900">{course.price}</div>
                </div>
                <CardTitle className="text-xl text-blue-900 mb-2">{course.title}</CardTitle>
                <p className="text-gray-600 text-sm">{course.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Max. {course.maxParticipants}
                  </div>
                </div>

                <div className="space-y-2">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center pt-2 border-t">
                  <Award className="w-4 h-4 mr-2 text-blue-500" />
                  <span className="text-sm font-medium text-blue-900">{course.certification}</span>
                </div>

                <Button onClick={handleBooking} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  <Calendar className="w-4 h-4 mr-2" />
                  Kurs buchen
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Alle Kurse beinhalten die komplette Ausrüstung und PADI-Zertifizierung</p>
          <Button
            onClick={handleBooking}
            size="lg"
            className="bg-cyan-400 hover:bg-cyan-500 text-blue-900 font-semibold"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Beratungstermin vereinbaren
          </Button>
        </div>
      </div>
    </section>
  )
}
