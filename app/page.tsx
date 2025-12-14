import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Equipment } from "@/components/equipment"
import { Gallery } from "@/components/gallery"
import { Booking } from "@/components/booking"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Equipment />
      <Gallery />
      <Booking />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
