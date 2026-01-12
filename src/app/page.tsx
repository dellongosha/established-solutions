"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const BRAND = {
  name: "Established Solutions",
  tagline: "Secure. Reliable. Professional.",
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* HEADER */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 shadow-sm bg-white backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between relative">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-9 h-9">
              <Image
                src="/logo.png"
                alt={`${BRAND.name} logo`}
                width={36}
                height={36}
                className="object-contain rounded-xl"
                priority
              />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-blue-600">
              {BRAND.name}
            </span>
          </div>

          {/* Desktop Nav (centered) */}
          <nav className="hidden md:flex items-center gap-8 text-base font-normal absolute left-1/2 transform -translate-x-1/2">
            <a href="#top" className="hover:text-blue-600 transition">Home</a>
            <a href="#find-expert" className="hover:text-blue-600 transition">Services</a>
            <a href="#services" className="hover:text-blue-600 transition">Expertise</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          {/* Desktop call link on right */}
          <div className="hidden md:flex items-center ml-4">
            <a href="tel:+263715874747" className="px-4 py-2 bg-blue-50 text-blue-700 rounded-md border border-blue-100 hover:bg-blue-100 transition">
              📞 +263 715 874 747
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white border-t p-4 flex flex-col gap-3">
            <a href="#top" className="hover:text-blue-600">Home</a>
            <a href="#find-expert" className="hover:text-blue-600">Services</a>
            <a href="#services" className="hover:text-blue-600">Expertise</a>
            <a href="tel:+263715874747" className="hover:text-blue-600">Call: +263 715 874 747</a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-blue-500/30 rounded-full border border-blue-400/50 text-blue-200 text-sm font-semibold">
                  ✨ Full-Service IT & Cybersecurity
                </div>
                
                <h1 className="text-5xl md:text-6xl font-black leading-tight">
                  Enterprise-Grade IT & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Cybersecurity Solutions</span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  From everyday tech support to advanced penetration testing and APT hunting. We provide comprehensive IT and cybersecurity services for businesses that demand excellence.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="#services"
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg transition transform hover:scale-105"
                  >
                    📋 View Our Services
                  </a>
                  <a
                    href="#contact"
                    className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl border border-white/40 transition"
                  >
                    📞 Schedule Consultation
                  </a>
                </div>
                

                {/* Trust signals */}
                <div className="flex items-center gap-8 pt-4 text-sm text-gray-300">
                  <div>✓ Verified Experts</div>
                  <div>✓ Transparent Pricing</div>
                  <div>✓ Secure Payments</div>
                </div>
              </div>
            </motion.div>

            {/* Right - Feature Preview */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="relative">
                <div className="relative h-96 rounded-3xl overflow-hidden">
                  <Image
                    src="/herro.png"
                    alt="Tech Solutions Marketplace"
                    className="absolute inset-0 object-cover"
                    fill
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10" />
                </div>
                
                {/* Floating card */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }} 
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-6 -right-6 bg-white text-gray-900 rounded-2xl p-6 shadow-2xl max-w-xs"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center text-white font-bold">✓</div>
                    <div>
                      <p className="font-bold text-sm">Trusted Network</p>
                      <p className="text-xs text-gray-600">1000+ Experts Available</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Why Choose Established Solutions?</h2>
            <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">Trusted by businesses for reliable, professional IT and cybersecurity services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-600/30 to-blue-500/10 border border-blue-500/40 backdrop-blur">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-3">Certified Expertise</h3>
              <p className="text-gray-300">
                Industry-certified security professionals with proven experience in enterprise environments and threat response.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-600/30 to-cyan-500/10 border border-cyan-500/40 backdrop-blur">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">24/7 Availability</h3>
              <p className="text-gray-300">
                Round-the-clock support for critical issues. Online support, on-site assistance, and incident response whenever you need it.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-red-600/30 to-red-500/10 border border-red-500/40 backdrop-blur">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-3">Proactive Security</h3>
              <p className="text-gray-300">
                From vulnerability assessments to penetration testing and APT hunting. We find threats before attackers do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES OVERVIEW */}
      <section id="find-expert" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Service Offerings</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Everything from basic IT support to advanced threat hunting. We handle it all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { icon: "💻", label: "Computer & Laptop Support", desc: "Repair, setup, optimization" },
              { icon: "🌐", label: "Network & Wi-Fi Solutions", desc: "Design, security, optimization" },
              { icon: "📱", label: "Mobile Device Support", desc: "iPhone, Android troubleshooting" },
              { icon: "☁️", label: "Cloud Solutions", desc: "Azure, AWS, M365 migration" },
              { icon: "🔐", label: "Penetration Testing", desc: "Network & application security" },
              { icon: "🛡️", label: "Vulnerability Assessment", desc: "Identify security gaps" },
              { icon: "🚨", label: "Incident Response", desc: "24/7 breach response" },
              { icon: "🎯", label: "APT Hunting", desc: "Advanced threat detection" },
            ].map((service, i) => (
              <div 
                key={i}
                className="p-6 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 transition cursor-pointer text-center group"
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition">{service.icon}</div>
                <h4 className="font-bold mb-1">{service.label}</h4>
                <p className="text-sm text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#services"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition"
            >
              View Detailed Service Tiers
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE EXPERTISE TIERS */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Expertise Tiers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              From everyday support to elite cybersecurity. We handle all levels of technical complexity.
            </p>
          </div>

          <div className="space-y-8">
            {/* TIER 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="text-5xl">💻</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Tier 1: Basic IT Support</h3>
                  <p className="text-gray-700 mb-4">
                    Perfect for individuals and small businesses. Computer setup, Wi-Fi troubleshooting, printer configuration, software installation, email setup, mobile device support.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Computer Setup", "Wi-Fi Fix", "Printer Config", "Software Install", "Email Setup", "Device Help"].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-200 text-blue-900 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* TIER 2 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-xl bg-gradient-to-r from-cyan-50 to-cyan-100 border-l-4 border-cyan-600 shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="text-5xl">🔧</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-cyan-900 mb-2">Tier 2: Intermediate Technical Support</h3>
                  <p className="text-gray-700 mb-4">
                    Advanced troubleshooting and optimization. Hardware repair, malware removal, data recovery, password reset, VPN setup, performance optimization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Hardware Repair", "Malware Removal", "Data Recovery", "Password Reset", "VPN Setup", "Performance Tuning"].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-cyan-200 text-cyan-900 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* TIER 3 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-600 shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="text-5xl">🏢</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">Tier 3: Enterprise IT & Infrastructure</h3>
                  <p className="text-gray-700 mb-4">
                    Scalable solutions for growing businesses. Network design, cloud migration, 24/7 monitoring, disaster recovery, Active Directory management, ITSM.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Network Design", "Cloud Migration", "24/7 Monitoring", "Disaster Recovery", "Directory Mgmt", "ITSM"].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-purple-200 text-purple-900 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* TIER 4 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 rounded-xl bg-gradient-to-r from-amber-50 to-amber-100 border-l-4 border-amber-600 shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="text-5xl">🔐</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">Tier 4: Cybersecurity & Defense</h3>
                  <p className="text-gray-700 mb-4">
                    Proactive threat protection and detection. Penetration testing, vulnerability assessment, EDR/XDR, SIEM, Zero Trust architecture, WAF, compliance audits (ISO 27001, GDPR, HIPAA).
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Pen Testing", "Vuln Assessment", "EDR/XDR", "SIEM", "Zero Trust", "WAF", "Compliance Audits"].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-amber-200 text-amber-900 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* TIER 5 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-8 rounded-xl bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-600 shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="text-5xl">⚡</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-red-900 mb-2">Tier 5: Advanced Threat Intelligence & Incident Response</h3>
                  <p className="text-gray-700 mb-4">
                    Elite-level security services. APT hunting, advanced malware analysis, 24/7 incident response, digital forensics, threat attribution, red team operations, ransomware response, supply chain security.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["APT Hunting", "Malware Analysis", "Incident Response", "Forensics", "Red Teaming", "Ransomware Response", "Supply Chain Security"].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-red-200 text-red-900 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16 p-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Protect Your Business?</h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us for a free assessment. We&apos;ll recommend the right tier for your needs.
            </p>
            <a
              href="#contact"
              className="inline-block px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg"
            >
              Get Free Assessment
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
            <p className="text-lg text-gray-600">
              Need help? Reach us instantly via WhatsApp, call, or email. We typically respond within a few hours.
            </p>

            <div className="flex flex-col gap-4">
              <a href="https://wa.me/263715874747" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition text-center">
                WhatsApp Us
              </a>
              <a href="tel:+263715874747" className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition text-center">
                Call Us: +263 715 874 747
              </a>
              <a href="mailto:info@established.co.zw" className="px-6 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-900 transition text-center">
                Email Us
              </a>
            </div>

            {/* Utility buttons moved to contact area */}
            <div className="mt-6 md:mt-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/remote-support"
                  className="inline-block px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition text-center"
                >
                  ⬇️ Download Remote Support
                </a>
                <a
                  href="https://fast.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gray-100 text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-200 transition text-center"
                >
                  ⚡ Check Internet Speed
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <form className="grid gap-4">
              <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition" />
              <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition" />
              <textarea placeholder="Your Message" rows={5} className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition" />
              <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{BRAND.name}</span>
          </div>
          <div className="text-sm">© 2025 {BRAND.name}. All rights reserved.</div>
          <nav className="flex gap-6 text-sm items-center">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="tel:+263715874747" className="hover:text-white">Call: +263 715 874 747</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
