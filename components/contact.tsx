"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Loader2, CheckCircle } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "general",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "general",
          message: "",
        })
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        alert("Failed to submit form. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting contact form:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance text-foreground">
            Get Your Free Security Assessment
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            Ready to enhance your security? Contact us today for a free consultation and customized security plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-card-foreground mb-1">Emergency Hotline</h3>
                  <p className="text-muted-foreground text-sm mb-2">Available 24/7</p>
                  <a href="tel:+2349032803883,+2348063986823,+2348033166344" className="text-primary font-medium hover:underline">
                  +234-903-280-3883, <br />
                  +234-806-398-6823, <br />
                  +234-803-316-6344 <br />
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-card-foreground mb-1">Email Us</h3>
                  <p className="text-muted-foreground text-sm mb-2">Response within 2 hours</p>
                  <a
                    href="mailto:securemultilinkandlogistics@gmail.com"
                    className="text-primary font-medium hover:underline break-all"
                  >
                    securemultilinkandlogistics@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-card-foreground mb-1">Visit Our Office</h3>
                  <p className="text-muted-foreground text-sm">
                  No. 48 OLD ABA ROAD, MBM PLAZA, BY SHELL IA, <br />
                  RUMUOBIAKANI, PORT HARCOURT, RIVERS STATE, NIGERIA.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-card-foreground mb-1">Business Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Mon - Fri: 8:00 AM - 6:00 PM
                    <br />
                    Sat: 9:00 AM - 4:00 PM
                    <br />
                    Sun: Emergency Only
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 p-8 bg-card border-border">
            {isSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-green-800 text-sm">
                  Thank you for your inquiry! We will contact you within 24 hours.
                </p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-card-foreground">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="bg-background border-border text-foreground h-16 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-card-foreground">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="bg-background border-border text-foreground h-16 text-base"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-card-foreground">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(123) 456-7890"
                    className="bg-background border-border text-foreground h-16 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-card-foreground">
                    Service Interested In
                  </Label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full h-16 px-3 rounded-md border border-border bg-background text-foreground text-base"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="personnel">Security Personnel</option>
                    <option value="equipment">Security Equipment</option>
                    <option value="executive">Executive Protection</option>
                    <option value="investigation">Investigation Services</option>
                    <option value="patrol">Patrol Services</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-card-foreground">
                  Message *
                </Label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your security needs..."
                  rows={8}
                  className="w-full px-3 py-3 rounded-md border border-border bg-background text-foreground resize-none text-base"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="flex-1 bg-primary text-primary-foreground hover:bg-accent"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Request Free Quote"
                  )}
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="flex-1 border-border text-foreground hover:bg-muted bg-transparent"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Emergency Line
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
