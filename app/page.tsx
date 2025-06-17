import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import CoursesSection from "@/components/courses-section"
import RentalSection from "@/components/rental-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CoursesSection />
      <RentalSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
