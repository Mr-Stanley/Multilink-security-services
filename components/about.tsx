import { CheckCircle2, Eye, RefreshCw, GraduationCap } from "lucide-react"
import { Card } from "@/components/ui/card"

export function About() {
  const values = [
    {
      icon: CheckCircle2,
      title: "Truth",
      description: "Committed to delivering honest and accurate information in all our security operations and communications.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Operating with full openness, clear communication, and ethical practices in every engagement.",
    },
    {
      icon: RefreshCw,
      title: "Consistency",
      description: "Maintaining uniform standards and reliable performance across all our security services.",
    },
    {
      icon: GraduationCap,
      title: "Competence",
      description: "Demonstrating expertise, continuous learning, and professional excellence in all security solutions.",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 whitespace-nowrap text-foreground text-left">
            Safeguarding Lives, Assets & Businesses
          </h2>
          <p className="text-lg font-bold text-muted-foreground leading-relaxed text-balance text-center">
          MULTILINK SECURITY AND LOGISTICS LIMITED is a registered and
certified Security and Logistics Company, licensed to ensure dedicated security 
business in Nigeria and its environment.
The company is well equipped with necessary facilities and state-of-the-art 
technology in security watch operations, and resources needed for efficient 
security job delivery.
          </p>

          <p className="text-lg color-black font-bold text-muted-foreground leading-relaxed text-balance text-center">MULTILINK SECURITY AND LOGISTICS LIMITED is an indigenous security 
contract servicing, and project Management Company, being driven by goal-oriented services delivery principles, that guarantees maximum value and clients' 
satisfaction, good performance, and operational safety.
Our affordable services and technical know-how epitomize reliability an
d dependability as security related jobs are carried out within specified time 
frame, which must always be adhered to.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {values.map((value) => (
            <Card key={value.title} className="p-8 text-center hover:shadow-lg transition-shadow bg-card border-border">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
