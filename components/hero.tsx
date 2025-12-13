"use client"

import { Button } from "@/components/ui/button"
import { Shield, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#011627] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/professional-security-guards-monitoring-surveillan.jpg"
          alt="Security background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#011627]/90 via-[#011627]/80 to-[#011627]/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <Shield className="w-5 h-5 text-white" />
            <span className="text-sm font-medium text-white">Trusted Security Partner Since 2010</span>
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Protecting What Matters Most
          </h1>

          <p
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-balance animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Professional security and logistics services with professional-grade equipment for businesses and individuals who demand
            excellence in protection.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              size="lg"
              className="bg-accent text-primary hover:bg-accent/90 text-base px-8"
            >
              <a href="#contact">Request Security Personnel</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-base px-8 bg-transparent"
            >
              <Phone className="w-4 h-4 mr-2" />
              <a href="tel:+2349032803883 ">Emergency: +234-903-280-3883 </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div
            className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">500+</div>
              <div className="text-sm text-white/80">Clients Protected</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-3xl md:text-4xl font-bold mb-1">24/7</div>
              <div className="text-sm text-white/80">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">15+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
