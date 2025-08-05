import Image from "next/image"
import Link from "next/link"
import { FaLinkedinIn } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="w-full bg-white py-10 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-20">
        {/* Left Section: Logo, Tagline, Social Icons */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-auto lg:max-w-[250px]">
          <div className="lg:pl-0 lg:transform lg:-translate-x-[20%]"> {/* Container with negative X translation */}
            <Image
              src="/footerloooogo.svg"
              alt="Incuora"
              width={300}
              height={160}
              className="object-contain mb-0"
            />
          </div>
          <p className="font-lato font-semibold text-[13px] leading-relaxed tracking-[-0.02em] text-black mb-6 lg:pl-0">
            We scale{" "}
            <span
              className="text-orange-500 underline decoration-orange-500 decoration-solid"
              style={{
                textDecorationThickness: "5%", // 5% of font-size
                textUnderlineOffset: "12.5%", // 12.5% of font-size
              }}
            >
              ambition
            </span>{" "}
            <br />
            through strategy, technology, <br />
            and network.
          </p>
          <div className="flex lg:pl-0"> {/* Ensure LinkedIn icon aligns with logo and text */}
            {/* LinkedIn Icon */}
            <Link
              href="https://www.linkedin.com/company/incuora/about/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-[#FF751F]"
            >
              <FaLinkedinIn className="w-5 h-5 text-white" />
            </Link>
          </div>
        </div>

        {/* Right Section: Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-20 w-full lg:w-auto text-center sm:text-left">
          {/* Column 1: Home */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-inter font-semibold text-lg text-black mb-4">Home</h3>
            <ul className="space-y-3">
              {" "}
              {/* Increased space-y from 2 to 3 */}
              <li>
                <Link
                  href="#"
                  className="font-inter font-normal text-base text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-inter font-normal text-base text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-inter font-normal text-base text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-inter font-semibold text-lg text-black mb-4">Company</h3>
            <ul className="space-y-3">
              {" "}
              {/* Increased space-y from 2 to 3 */}
              <li>
                <Link
                  href="#"
                  className="font-inter font-normal text-base text-gray-600 hover:text-orange-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-inter font-normal text-base text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-inter font-normal text-base text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Follow Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Other Pages */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-inter font-semibold text-lg text-black mb-4">Other Pages</h3>
            <ul className="space-y-3">
              {" "}
              {/* Increased space-y from 2 to 3 */}
              <li>
                <Link
                  href="#"
                  className="font-inter font-normal text-base text-gray-600 hover:text-orange-500 transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-inter font-normal text-base text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
