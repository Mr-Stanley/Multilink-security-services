import {
  Building2,
  KeyRound,
  Users,
  Truck,
  Dog,
  Search,
  FileCheck,
  Eye,
  Shield,
  UserCheck,
  Briefcase,
  Radio,
} from "lucide-react"
import { Card } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      icon: Building2,
      title: "Company-Industrial Security Services",
      description: "Comprehensive protection for manufacturing facilities and industrial sites.",
    },
    {
      icon: KeyRound,
      title: "Pipeline Security & Surveillance",
      description: "Advanced biometric and card-based access management solutions.",
    },
    {
      icon: Users,
      title: "Office & General Security Services",
      description: "Professionally trained guards for all security requirements.",
    },
    {
      icon: Truck,
      title: "Training Of Company Security Personnel",
      description: "Mobile patrol units for wide-area surveillance and rapid response.",
    },
    {
      icon: Dog,
      title: "Security Watch Using CCTV, Metal Detectors, & Security Dogs",
      description: "K-9 units with expert handlers and complete veterinary support.",
    },
    {
      icon: Search,
      title: "Security Manpower & Equipment Supply",
      description: "Discrete and thorough investigative services for complex cases.",
    },
    {
      icon: FileCheck,
      title: "Marine Security & Escort Services",
      description: "Background checks and security clearance verification services.",
    },
    {
      icon: Eye,
      title: "Marine Transport & Logistics Services",
      description: "Personal and remote surveillance with advanced monitoring technology.",
    },
    {
      icon: Shield,
      title: "Labour Supply Services & Manpower Development",
      description: "Strategic intelligence collection and analysis for threat prevention.",
    },
    {
      icon: Radio,
      title: "Agency Consultancy Services",
      description: "State-of-the-art communication systems for patrol coordination.",
    },
    
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance text-foreground">
            Comprehensive Security Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            From industrial protection to executive security, we offer a complete range of services tailored to meet
            your unique security needs with precision and professionalism.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="service-card-retro p-6 bg-card border-primary group"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-[#ffead0] transition-colors">{service.title}</h3>
              <p className="text-sm text-white leading-relaxed group-hover:text-[#ffead0] transition-colors">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium">
            <Shield className="w-5 h-5" />
            <span>Protect & Serve System - Always On Duty</span>
          </div>
        </div>
      </div>
    </section>
  )
}
