"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface ContactSectionProps {
  id?: string
}

export default function ContactSection({ id }: ContactSectionProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = formRef.current
    if (!form) return

    const formData = new FormData(form)

    const res = await fetch("https://formsubmit.co/ajax/c24f0eaf529d48beb4d87fe1a2b27dd5", {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: formData
    })

    if (res.ok) {
      toast({
        title: "Message Sent",
        description: "We'll get back to you shortly.",
        duration: 5000
      })
      form.reset()
    } else {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
        duration: 5000
      })
    }
  }

  return (
    <section id={id} className="w-full py-16 md:py-24 lg:py-32 bg-[#F7F7F7] flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[50px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left max-w-full lg:max-w-[500px]">
            <h2 className="font-lato font-black text-[48px] leading-[150%] text-[#FF751F] mb-6">
              Get in touch with us
            </h2>
            <p className="font-lato font-medium text-[20px] leading-[150%] text-black mb-6 max-w-[450px] mx-auto lg:mx-0">
              Let's explore how we can support your growth.
            </p>
            <p className="font-lato text-base text-black mb-8 max-w-[450px] mx-auto lg:mx-0">
              Fill the form or{" "}
              <a
                href="mailto:contact@incuora.com"
                className="text-[#FF751F] underline hover:no-underline"
              >
                Send us an email
              </a>
            </p>

            <div className="w-full border-b border-black mb-8 max-w-[450px] mx-auto lg:mx-0"></div>

            {/* Contact Details */}
            <div className="space-y-6 text-left max-w-[450px] mx-auto lg:mx-0">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-black" />
                <div>
                  <p className="text-base text-gray-600">Phone</p>
                  <p className="text-lg text-black">+971522335816</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-black" />
                <div>
                  <p className="text-base text-gray-600">Email</p>
                  <p className="text-lg text-black">contact@incuora.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-black" />
                <div>
                  <p className="text-base text-gray-600">Address</p>
                  <p className="text-lg text-black">Dubai, UAE.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="flex-1 flex justify-center items-center w-full lg:w-auto">
            <div className="bg-[#FF914D] rounded-[50px] p-[30px] w-full max-w-[519px] h-auto">
              <div className="bg-white rounded-[50px] pt-6 px-8 md:px-12 lg:px-16 pb-10 w-full h-full">
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <div>
                    <label htmlFor="name" className="block text-[24px] text-gray-700 mb-1">Name</label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="bg-gray-50 text-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[24px] text-gray-700 mb-1">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Your email"
                      className="bg-gray-50 text-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[24px] text-gray-700 mb-1">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Your message"
                      className="bg-gray-50 text-black resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
