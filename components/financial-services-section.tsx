import Image from "next/image"

export default function FinancialServicesSection() {
  return (
    <section className="w-full py-8 lg:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Row - Hero (Dark Box) and CFD Brokers (Orange Box 1) */}
        {/* Default grid-cols-1 for mobile, xl:grid-cols-3 for large screens */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-8 mb-4 lg:mb-8">
          {/* Left - Main Content (Dark Box - spans 2 columns on xl and up) */}
          <div className="xl:col-span-2 bg-black rounded-[25px] lg:rounded-[50px] p-6 lg:p-12 flex flex-col justify-center w-full h-auto lg:min-h-[418px]">
            <h2 className="text-white mb-6">
              <span className="font-lato font-black text-[32px] sm:text-[48px] lg:text-[64px] leading-tight tracking-normal">
                We work with leaders
              </span>
              <br /> {/* Line break after "leaders" */}
              <span className="font-lato font-black text-[32px] sm:text-[48px] lg:text-[64px] leading-tight tracking-normal">
                in{" "}
              </span>
              <span
                className="font-lato font-normal italic text-[32px] sm:text-[48px] lg:text-[64px] leading-tight tracking-normal bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(90deg, #F2BC3D 9.62%, #FF751F 80.77%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                trading and finance.
              </span>
            </h2>
            <p className="font-lato font-medium text-[16px] lg:text-[20px] leading-normal tracking-normal text-[#E6E6E6] max-w-[616px]">
              We combine strategic insight, digital infrastructure, and smart automation to help high-performance firms
              operate with clarity and scale with confidence.
            </p>
          </div>
          {/* Right - CFD Brokers (Orange Box 1 - spans 1 column on xl and up) */}
          <div className="xl:col-span-1 border-[3px] lg:border-[5px] border-orange-500 rounded-[25px] lg:rounded-[50px] p-4 lg:p-6 flex flex-col w-full h-auto min-h-[300px] lg:h-[418px]">
            <div className="flex flex-col items-start w-full h-full">
              {/* Image container with responsive height and increased margin-bottom for small screens */}
              <div className="w-full flex-shrink-0 mb-4 h-[120px] lg:h-[180px]">
                <Image
                  src="/icons/cfd-brokers.png"
                  alt="CFD Brokers Icon"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
              {/* Title with consistent single-line behavior and fixed height on large screens */}
              <h3
                className="font-lato font-normal text-[24px] lg:text-[40px] leading-tight lg:leading-[48px] text-black mb-2 flex-shrink-0 lg:whitespace-nowrap lg:overflow-hidden lg:text-ellipsis lg:h-[48px]"
                style={{ minHeight: "auto" }} // Default auto height for small screens
              >
                CFD Brokers
              </h3>
              {/* Paragraph that flex-grows */}
              <p className="font-lato font-normal text-[16px] lg:text-[20px] leading-normal tracking-normal text-black flex-grow">
                Optimize your operations with the right infrastructure, liquidity connections, and automation tools for
                competitive execution.
              </p>
            </div>
          </div>
        </div>
        {/* Bottom Row - Remaining Three Orange Boxes */}
        {/* Adjusted grid for 2 boxes per line on sm, md, lg screens, then 3 on xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8">
          {/* Trading Academies (Orange Box 2) */}
          <div className="border-[3px] lg:border-[5px] border-orange-500 rounded-[25px] lg:rounded-[50px] p-4 lg:p-6 flex flex-col w-full h-auto min-h-[300px] lg:h-[418px]">
            <div className="flex flex-col items-start w-full h-full">
              {/* Image container with responsive height and increased margin-bottom for small screens */}
              <div className="w-full flex-shrink-0 mb-4 h-[120px] lg:h-[180px]">
                <Image
                  src="/icons/institutional-brokers.png"
                  alt="Trading Academies Icon"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
              {/* Title with consistent single-line behavior and fixed height on large screens */}
              <h3
                className="font-lato font-normal text-[24px] lg:text-[40px] leading-tight lg:leading-[48px] text-black mb-2 flex-shrink-0 lg:whitespace-nowrap lg:overflow-hidden lg:text-ellipsis lg:h-[48px]"
                style={{ minHeight: "auto" }} // Default auto height for small screens
              >
                Trading Academies
              </h3>
              {/* Paragraph that flex-grows */}
              <p className="font-lato font-normal text-[16px] lg:text-[20px] leading-normal tracking-normal text-black flex-grow">
                Build more than just traders — evolve your academy into a scalable business model with the
                infrastructure to launch your own brokerage.
              </p>
            </div>
          </div>
          {/* Institutional Brokers (Orange Box 3) */}
          <div className="border-[3px] lg:border-[5px] border-orange-500 rounded-[25px] lg:rounded-[50px] p-4 lg:p-6 flex flex-col w-full h-auto min-h-[300px] lg:h-[418px]">
            <div className="flex flex-col items-start w-full h-full">
              {/* Image container with responsive height and increased margin-bottom for small screens */}
              <div className="w-full flex-shrink-0 mb-4 h-[120px] lg:h-[180px]">
                <Image
                  src="/icons/prop-firms.png"
                  alt="Institutional Brokers Icon"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
              {/* Title with consistent single-line behavior and fixed height on large screens */}
              <h3
                className="font-lato font-normal text-[24px] lg:text-[40px] leading-tight lg:leading-[48px] text-black mb-2 flex-shrink-0 lg:whitespace-nowrap lg:overflow-hidden lg:text-ellipsis lg:h-[48px]"
                style={{ minHeight: "auto" }} // Default auto height for small screens
              >
                Institutional Brokers
              </h3>
              {/* Paragraph that flex-grows */}
              <p className="font-lato font-normal text-[16px] lg:text-[20px] leading-normal tracking-normal text-black flex-grow">
                Streamline onboarding, reporting, and integrations with consulting tailored to institutional-grade
                operations.
              </p>
            </div>
          </div>
          {/* Prop Firms (Orange Box 4) */}
          <div className="border-[3px] lg:border-[5px] border-orange-500 rounded-[25px] lg:rounded-[50px] p-4 lg:p-6 flex flex-col w-full h-auto min-h-[300px] lg:h-[418px]">
            <div className="flex flex-col items-start w-full h-full">
              {/* Image container with responsive height and increased margin-bottom for small screens */}
              <div className="w-full flex-shrink-0 mb-4 h-[120px] lg:h-[180px]">
                <Image
                  src="/icons/trading-academies.png"
                  alt="Prop Firms Icon"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
              {/* Title with consistent single-line behavior and fixed height on large screens */}
              <h3
                className="font-lato font-normal text-[24px] lg:text-[40px] leading-tight lg:leading-[48px] text-black mb-2 flex-shrink-0 lg:whitespace-nowrap lg:overflow-hidden lg:text-ellipsis lg:h-[48px]"
                style={{ minHeight: "auto" }} // Default auto height for small screens
              >
                Prop Firms
              </h3>
              {/* Paragraph that flex-grows */}
              <p className="font-lato font-normal text-[16px] lg:text-[20px] leading-normal tracking-normal text-black flex-grow">
                Launch or scale your prop trading business with smart risk tech, clear structures, and scalable backend
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
