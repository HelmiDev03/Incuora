"use client" // This component needs to be a Client Component for useState
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"
import SolutionsSection from "@/components/solutions-section"
import InfiniteLogoScroll from "@/components/infinite-logo-scroll"
import FinancialServicesSection from "@/components/financial-services-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar" // Import the new Navbar component

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <main className="pt-[130px] lg:pt-[120px] min-h-[90vh] flex items-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center w-full overflow-hidden">
            {/* Left Content - Always first on all screen sizes */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 text-center lg:text-left w-full order-1 lg:order-1 mb-0 lg:mb-0">
              <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                <h1 className="font-lato text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] sm:leading-[1.15] md:leading-[1.2] text-black break-words">
                  <span className="block mb-3 md:mb-4">
                    We scale <span className="text-orange-500 italic underline">ambition</span>
                  </span>
                  <span className="block mb-3 md:mb-4">through</span>
                  <span className="block mb-3 md:mb-4">
                    <span className="italic">strategy</span>,
                  </span>
                  <span className="block mb-3 md:mb-4">
                    <span className="italic">technology</span>, <span className="italic">and</span>{" "}
                    <span className="italic">network</span>.
                  </span>
                </h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-md leading-relaxed text-black mx-auto lg:mx-0">
                  From market entry to operational scaling, we offer the insights, tools, and connections that your
                  business needs to thrive in a competitive landscape.
                </p>
              </div>
              <Button
                className="w-auto px-3 py-2 sm:px-4 md:px-6 md:py-4 h-10 sm:h-12 md:h-[56px] rounded-full text-white font-roboto font-medium text-xs sm:text-sm md:text-base leading-6 tracking-normal
                       bg-gradient-to-r from-[#FF751F] to-[#F2BC3D] hover:from-[#ea580c] hover:to-[#eab308] transition-all duration-300
                       flex items-center justify-center gap-1 sm:gap-2 mx-auto lg:mx-0"
              >
                <CalendarDays className="w-5 h-5 md:w-6 md:h-6" />
                Book a Meeting
              </Button>
            </div>
            {/* Right Content - Illustration */}
            <div className="flex justify-center items-center relative w-full order-2 lg:order-2 mt-0 lg:mt-0">
              <div className="relative w-full max-w-[450px] xs:max-w-[550px] sm:max-w-[650px] md:max-w-[800px] lg:max-w-full xl:max-w-full 2xl:max-w-full lg:transform lg:scale-110 xl:scale-120 2xl:scale-125">
                {/* Background glow effect for mobile */}
                <div className="absolute inset-0 bg-gradient-to-b from-orange-100/30 to-transparent rounded-full blur-2xl opacity-70 transform scale-150 -z-10 hidden sm:block"></div>
                <Image
                  src="/tech-illustration.png"
                  alt="Technology Infrastructure Illustration"
                  width={1800}
                  height={1800}
                  className="object-contain w-full h-auto animate-float lg:max-w-none lg:-mr-10 xl:-mr-16 2xl:-mr-24"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Partners Section */}
      <section className="w-full bg-[#F5F5F5] flex flex-col lg:flex-row items-center justify-center px-4 py-8 md:py-12 lg:py-16 overflow-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between w-full max-w-full lg:max-w-[1348px] text-center lg:text-left">
          {/* Left Text */}
          <div className="flex-shrink-0 w-full lg:w-[320px] h-auto lg:h-[84px] flex items-center justify-center mb-8 lg:mb-0">
            <h2 className="font-inter font-semibold text-2xl md:text-3xl lg:text-[32px] leading-tight tracking-[-0.02em] text-black">
              Unlock our Network
              <br />
              Get better Rates
            </h2>
          </div>

          {/* Partner Logos Container - Now using the new JS component */}
          <InfiniteLogoScroll durationSeconds={3} blurPx={4} />
        </div>
      </section>
      {/* Statistics Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Main Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-lato font-semibold text-3xl md:text-5xl lg:text-[64px] leading-tight tracking-[-0.02em] text-black">
              Numbers that seal the deal
            </h2>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Stat 1 */}
            <div className="text-center flex flex-col items-center">
              <div className="font-lato font-semibold text-4xl md:text-6xl lg:text-[75px] leading-[90px] tracking-[-0.02em] text-[#FF751F] mb-2 md:mb-4">
                70+
              </div>
              <div className="font-lato font-semibold text-base md:text-lg lg:text-[25px] leading-[30px] tracking-[-0.02em] text-black text-center max-w-[250px]">
                Partners around the world
              </div>
            </div>

            {/* Stat 2 */}
            <div className="text-center flex flex-col items-center">
              <div className="font-lato font-semibold text-4xl md:text-6xl lg:text-[75px] leading-[90px] tracking-[-0.02em] text-[#FF751F] mb-2 md:mb-4">
                10
              </div>
              <div className="font-lato font-semibold text-base md:text-lg lg:text-[25px] leading-[30px] tracking-[-0.02em] text-black text-center max-w-[250px]">
                Years of experience on the market
              </div>
            </div>

            {/* Stat 3 */}
            <div className="text-center flex flex-col items-center">
              <div className="font-lato font-semibold text-4xl md:text-6xl lg:text-[75px] leading-[90px] tracking-[-0.02em] text-[#FF751F] mb-2 md:mb-4">
                32
              </div>
              <div className="font-lato font-semibold text-base md:text-lg lg:text-[25px] leading-[30px] tracking-[-0.02em] text-black text-center max-w-[250px]">
                Companies successfully escalated with us
              </div>
            </div>

            {/* Stat 4 */}
            <div className="text-center flex flex-col items-center">
              <div className="font-lato font-semibold text-4xl md:text-6xl lg:text-[75px] leading-[90px] tracking-[-0.02em] text-[#FF751F] mb-2 md:mb-4">
                4
              </div>
              <div className="font-lato font-semibold text-base md:text-lg lg:text-[25px] leading-[30px] tracking-[-0.02em] text-black text-center max-w-[250px]">
                Supported languages
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Solutions Section */}
      <SolutionsSection id="solutions-section" /> {/* Added ID for scrolling */}
      {/* New Target Audience Section */}
      <FinancialServicesSection />
      {/* Contact Section */}
      <ContactSection id="contact-section" /> {/* Added ID for scrolling */}
      {/* Footer */}
      <Footer />
    </div>
  )
}
