import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Emejuo Johnson",
      role: "CEO, TechCorp Industries",
      content:
        "Multilink Security & Logistics Limited has been protecting our facilities for 5 years. Their professionalism and attention to detail are unmatched. We feel completely secure.",
      rating: 5,
    },
    {
      name: "Christopher Ndah",
      role: "Operations Manager, Regency Group",
      content:
        "The access control systems they installed have transformed our security operations. Highly recommend their equipment and installation services.",
      rating: 5,
    },
    {
      name: "Mrs Ifeoma Obiesie",
      role: "Property Owner, Akpajo Estate",
      content:
        "Outstanding service! The security personnel are well-trained, professional, and always on time. Their patrol services give me peace of mind.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance text-foreground">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            Don't just take our word for it. See what our clients have to say about our security services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-8 bg-card border-border">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="border-t border-border pt-4">
                <div className="font-bold text-card-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
