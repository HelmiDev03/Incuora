import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"
import AboutContent from "@/components/about-content"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-[120px]">
        {" "}
        {/* Adjust padding-top to account for fixed navbar height */}
        <AboutContent />
        <ContactSection id="contact-section" /> {/* Ensure ContactSection has an ID for consistency */}
      </main>
      <Footer />
    </div>
  )
}
