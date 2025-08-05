import Image from "next/image"

export default function AboutContent() {
  return (
    <section className="w-full min-h-[90vh] flex items-center overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center w-full overflow-hidden">
          {/* Left Content - Text */}
          <div className="flex flex-col items-start text-left order-1 lg:order-1 mb-0 lg:mb-0">
            <h1 className="font-lato font-black text-4xl md:text-5xl lg:text-6xl leading-tight text-black mb-4">
              About
            </h1>
            <p className="font-lato font-normal text-lg md:text-xl leading-relaxed text-gray-600 mb-6">
              Built for those who move fast and think long-term.
            </p>
            <p className="font-lato font-normal text-base md:text-lg leading-relaxed text-black mb-4">
              At Incuora, we help trading and finance firms scale with clarity. We provide strategic consulting, digital
              infrastructure, and smart automation to simplify operations, improve decision-making, and unlock growth
              opportunities.
            </p>
            <p className="font-lato font-normal text-base md:text-lg leading-relaxed text-black">
              Our modular approach is designed for agility — whether you’re launching your own brokerage, optimizing
              internal workflows, or transforming your client experience. With deep industry insight and a focus on
              execution, we turn complexity into structure and vision into results.
            </p>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center items-center relative w-full order-2 lg:order-2 mt-0 lg:mt-0">
            <div className="relative w-full max-w-[450px] xs:max-w-[550px] sm:max-w-[650px] md:max-w-[800px] lg:max-w-full xl:max-w-full 2xl:max-w-full lg:transform lg:scale-110 xl:scale-120 2xl:scale-125">
              <Image
                src="/about-illustration.png"
                alt="About Us Illustration"
                width={1800} // Increased width for better scaling
                height={1800} // Increased height for better scaling
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
    </section>
  )
}
