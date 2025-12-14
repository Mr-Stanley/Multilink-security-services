import {
  Building2,
  Eye,
  Users,
  GraduationCap,
  Camera,
  ShoppingCart,
  Ship,
  Truck,
  UserCheck,
  Briefcase,
  Shield,
} from "lucide-react"
import { Card } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      icon: Building2,
      title: "Company-Industrial Security Services",
      description: "We deliver specialized protection for industrial facilities, assets, and personnel.It includes surveillance, access control, patrols, and risk management solutions.This service ensures safe operations, asset protection, and uninterrupted industrial productivity.",
    },
    {
      icon: Eye,
      title: "Pipeline Security & Surveillance",
      description: "protecting pipeline infrastructure from vandalism, theft, leaks, and sabotage we use monitoring systems, sensors, patrols, and surveillance technologies for early threat detection.",
    },  
    {
      icon: Users,
      title: "Office & General Security Services",
      description: "We provide professional security solutions for offices and commercial spaces. This includes access control, surveillance, guard services, and incident responseTheservice ensures a safe, secure, and productive environment for staff, visitors, and assets.",
    },
    {
      icon: GraduationCap,
      title: "Training Of Company Security Personnel",
      description: "We focus on equipping security staff with the skills and knowledge needed to perform effectively.It covers areas such as threat detection, emergency response, access control, and professional conduct.The training ensures competent, disciplined, and reliable security personnel for organizational safety.",
    },
    {
      icon: Camera,
      title: "Security Watch Using CCTV, Metal Detectors, & Security Dogs",
      description: "We combine technology and trained animals to enhance security monitoring.CCTV provides continuous surveillance, metal detectors screen for prohibited items, and security dogs assist in detection and patrol.This integrated approach ensures rapid threat identification and strong perimeter protection.",
    },
    {
      icon: ShoppingCart,
      title: "Security Manpower & Equipment Supply",
      description: "We provide trained security personnel alongside essential security tools and devices.It includes the deployment of guards and the supply of equipment such as uniforms, communication tools, and surveillance systems.The service ensures reliable, well-equipped security coverage for effective protection of people and assets.",
    },
    {
      icon: Ship,
      title: "Marine Security & Escort Services",
      description: "We provide protection for vessels, offshore assets, and maritime operations.It includes armed or unarmed escorts, patrol boats, and monitoring to deter piracy and unauthorized access.The service ensures safe navigation, cargo protection, and secure maritime transit.",
    },
    {
      icon: Truck,
      title: "Marine Transport & Logistics Services",
      description: "We provide efficient movement of goods, equipment, and personnel across waterways.It covers vessel chartering, cargo handling, and coordination of marine operations.This service ensures safe, timely, and reliable maritime transportation and logistical support.",
    },
    {
      icon: UserCheck,
      title: "Labour Supply Services & Manpower Development",
      description: "We provide skilled and unskilled workforce solutions to meet organizational needs.It includes recruitment, deployment, training, and capacity building of personnel.This service ensures a competent, reliable workforce that supports productivity and long-term growth.",
    },
    {
      icon: Briefcase,
      title: "Agency Consultancy Services",
      description: "We provide professional advisory and representation services for organizations and individuals.It includes strategic guidance, compliance support, and liaison with relevant authorities or partners. This service helps clients make informed decisions and operate efficiently within regulatory and business frameworks.",
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
