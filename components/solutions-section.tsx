"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const solutionsData = [
  {
    id: "technology",
    label: "Technology",
    title: "Technology",
    headline: "Tailored tech stack recommendations and direct connections with best-in-class fintech providers",
    description:
      "We integrate your business with the right platforms—trading systems, CRMs, payment gateways, automation tools, and more. From core infrastructure to specialized tools, we help you adopt a seamless tech ecosystem built for growth.",
    imageSrc: "/solutions/tech-illustration.png",
  },
  {
    id: "licensing",
    label: "Licensing",
    title: "Licensing",
    headline: "End-to-end guidance on licensing your broker or fintech firm — from legal setup to final approvals",
    description:
      "We guide you through licensing in Dubai, Seychelles, and beyond. From legal structure and requirements to local partners, we support every step so you can launch smoothly and confidently.",
    imageSrc: "/solutions/finance-license.png",
  },
  {
    id: "compliance",
    label: "Compliance",
    title: "Compliance",
    headline: "Advisory and documentation support for regulatory frameworks in top jurisdictions",
    description:
      "We simplify regulatory compliance with KYC/AML solutions, digital onboarding, legal documentation, and advisory. We tailor everything to your model and jurisdiction to keep your operation protected.",
    imageSrc: "/solutions/compliance-illustration.png",
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    title: "Infrastructure",
    headline:
      "Trading platforms, servers, CRMs, PSPs, liquidity providers, and a suite of other tools—everything you need to operate efficiently and scale with confidence",
    description:
      "We build your operational backbone—servers, liquidity providers, aggregation engines, risk management systems, and more. Fully connected, secure, and designed to scale from day one.",
    imageSrc: "/solutions/infrastructure-illustration.png",
  },
  {
    id: "strategy",
    label: "Strategy",
    title: "Strategy",
    headline: "Clarity, direction, and expert guidance",
    description:
      "We begin with a strategic consultation —a personalized session to understand your goals, assess your current setup, and provide expert guidance. Whether you’re starting or scaling, we help define the right path, recommend tailored solutions, and connect you with the tools and partners to move forward confidently.",
    imageSrc: "/solutions/strategy-illustration.png",
  },
]

export default function SolutionsSection() {
  const [activeSolution, setActiveSolution] = useState(solutionsData[0].id)
  const currentSolution = solutionsData.find((sol) => sol.id === activeSolution)

  if (!currentSolution) return null // Should not happen

  return (
    <section id="solutions-section" className="w-full bg-[#F5F5F5] py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        {/* Main Title */}
        <h2 className="font-lato font-semibold text-3xl md:text-5xl lg:text-[64px] leading-tight tracking-[-0.02em] text-black mb-6 max-w-[956px] mx-auto">
          Modular Consulting Built for Scale.
        </h2>
        {/* Subtitle */}
        <p className="font-lato font-light text-xl md:text-2xl lg:text-[32px] leading-[38px] tracking-[-0.02em] text-gray-600 mb-12 max-w-[1144px] mx-auto">
          Adaptable services designed to evolve with your business — from launch to expansion.
        </p>

        {/* Solution Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16">
          {solutionsData.map((solution) => (
            <Button
              key={solution.id}
              onClick={() => setActiveSolution(solution.id)}
              className={`
                w-[120px] h-[40px] md:w-[152px] md:h-[51px] rounded-full font-roboto font-extrabold text-sm md:text-xl leading-5 tracking-wide
                ${
                  activeSolution === solution.id
                    ? "bg-gradient-to-r from-[#FF751F] to-[#F2BC3D] text-white"
                    : "bg-transparent text-black border border-gray-300 hover:bg-gray-100"
                }
                transition-all duration-300
              `}
            >
              {solution.label}
            </Button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-[50px] shadow-lg overflow-hidden flex flex-col lg:flex-row min-h-[auto] lg:min-h-[880px] relative">
          {/* Vertical Separator Line (Desktop) */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-[#FF751F] transform -translate-x-1/2 z-20"></div>

          {/* Left Column - Text Content */}
          <div className="flex-1 p-6 md:p-12 lg:p-20 text-left flex flex-col justify-center z-10">
            <h3 className="font-roboto font-bold text-xl md:text-2xl leading-5 tracking-wide text-[#FF751F] mb-4 md:mb-6">
              {currentSolution.title}
            </h3>
            <h4 className="font-roboto font-medium text-2xl md:text-3xl lg:text-[36px] leading-tight tracking-wide text-black mb-6 md:mb-8 max-w-full lg:max-w-[507px]">
              {currentSolution.headline}
            </h4>
            <p className="font-roboto font-light text-base md:text-lg lg:text-2xl leading-[30px] md:leading-[35px] tracking-[0.1px] text-gray-600 max-w-full lg:max-w-[418px] text-justify">
              {currentSolution.description}
            </p>
          </div>

          {/* Horizontal Separator Line (Mobile) */}
          <div className="lg:hidden w-full h-[2px] bg-[#FF751F] my-4"></div>

          {/* Right Column - Image */}
          <div className="flex-1 bg-white rounded-b-[50px] lg:rounded-bl-none lg:rounded-r-[50px] flex items-center justify-center p-6 md:p-12 z-10">
            <div className="w-full max-w-[300px] h-[320px] md:max-w-[590px] md:h-[630px] relative flex items-center justify-center bg-[#FF914D] rounded-[50px]">
              <Image
                src={currentSolution.imageSrc || "/placeholder.svg"}
                alt={currentSolution.title}
                width={300}
                height={300}
                className="object-contain max-w-full max-h-full md:w-[550px] md:h-[550px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
