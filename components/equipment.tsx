import { Camera, Fingerprint, Bell, Radio, HardHat, MapPin, Shield, ShoppingCart, Dog } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Equipment() {
  const equipment = [
    {
      icon: Camera,
      title: "CCTV Cameras",
      description: "High-definition surveillance cameras with night vision and remote viewing.",
      images: ["/image.png", "/camera2.jpg", "/camera3.jpg"],
    },
    {
      icon: Fingerprint,
      title: "Biometric Access Control",
      description: "Advanced fingerprint and facial recognition systems.",
    },
    { icon: Bell, title: "Intrusion Alarms", description: "Smart alarm systems with 24/7 monitoring capabilities." },
    {
      icon: Radio,
      title: "Communication Gadgets",
      description: "Professional-grade two-way radios and communication equipment.",
    },
   
    {
      icon: Dog,
      title: "Security Dogs",
      description: "Professional security dogs for patrol and detection services.",
      images: ["/dogs.jpg", "/security dog1.jpg"],
    },
  
  ]

  return (
    <section id="equipment" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance text-foreground">
            Professional Security Equipment
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            Equip your business with industry-leading security technology. We supply and install professional-grade
            equipment backed by expert support and maintenance services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {equipment.map((item) => (
            <Card key={item.title} className="p-8 hover:shadow-lg transition-shadow bg-card border-border group">
              <div className={`bg-primary/10 ${item.title === "CCTV Cameras" || item.title === "Biometric Access Control" || item.title === "Intrusion Alarms" || item.title === "Communication Gadgets" || item.title === "Security Dogs" ? "w-84 h-64" : "w-14 h-14"} rounded-lg flex items-center justify-center mb-4 overflow-hidden relative`}>
                {(item.title === "CCTV Cameras" || item.title === "Security Dogs") && item.images ? (
                  <div className="relative w-full h-full">
                    {item.images.map((img, idx) => (
                      <Image
                        key={idx}
                        src={img}
                        alt={`${item.title} ${idx + 1}`}
                        width={96}
                        height={96}
                        className={`w-full h-full object-contain absolute inset-0 transition-opacity duration-300 ${
                          idx === 0 ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    ))}
                  </div>
                ) : item.title === "Biometric Access Control" ? (
                  <Image
                    src="/access control.jpeg"
                    alt="Biometric Access Control"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                ) : item.title === "Intrusion Alarms" ? (
                  <Image
                    src="/intrusion alarm.jpg"
                    alt="Intrusion Alarms"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                ) : item.title === "Communication Gadgets" ? (
                  <Image
                    src="/communication.jpg"
                    alt="Communication Gadgets"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <item.icon className="w-7 h-7 text-primary" />
                )}
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
          <Shield className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">Need Custom Security Solutions?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Our experts will help you choose the right equipment for your specific security requirements.
          </p>
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <ShoppingCart className="w-4 h-4 mr-2" />
            <a href="#contact">Request Equipment Catalog</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
