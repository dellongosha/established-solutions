"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";


// --- Config ---
const BRAND = {
  name: "Established Solutions",
  tagline: "Secure. Reliable. Professional.",
  description:
    "Established Solutions provides IT Consulting, Cybersecurity, Cloud Solutions, and Remote/On-Site Tech Support for businesses and individuals.",
};

type MenuItem = {
  label: string;
  href: string;
};

const MENU: MenuItem[] = [

  { label: "search", href: "#search" },
  { label: "Cart", href: "#cart" },
  { label: "Login", href: "#login" },
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about_us" },
  { label: "077 125 4430", href: "tel:+263771254430" },
];

// Unused legacy categories — kept for reference
// const CATEGORY_ITEMS = [
//   { icon: "ht-computer-support-outline", text: "Computers & Printers" },
//   { icon: "ht-wifi-network-outline", text: "WiFi & Network" },
//   { icon: "ht-mobile-tablet-outline", text: "Mobile Devices" },
//   { icon: "ht-audio-video-outline", text: "Audio & Video" },
//   { icon: "ht-tv-mounting-outline", text: "Cybersecurity" },
//   { icon: "ht-smart-home-outline", text: "IT Consulting" },
//   { icon: "ht-cat-icon-home-security", text: "Home & Office Security" },
//   { icon: "ht-home-office-outline", text: "Around the Office" },
// ];

const ROTATING_DEVICES = [
  "Computer",
  "Network",
  "Server",
  "Cloud",
  "Printer",
  "Mobile",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  

  useEffect(() => {
    const t = setInterval(() => {
      // Rotating device logic moved or removed
    }, 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div id="top" className="min-h-screen bg-gray-50 text-gray-900">
{/* HEADER */}
<header className="sticky top-0 z-40 w-full border-b border-gray-200 shadow-[0_6px_8px_rgba(38,55,70,0.03)] bg-white backdrop-blur">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

    {/* Left: Logo + Hamburger */}
    <div className="flex items-center gap-3">
      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>


{/* Logo */}
<div className="flex items-center space-x-2">
  <div className="flex items-center justify-center w-9 h-9">
    <Image
      src="/logo.png"
      alt={`${BRAND.name} logo`}
      width={36}     // same as w-9
      height={36}    // same as h-9
      className="object-contain rounded-xl"
      priority       // ensures logo loads fast
    />
  </div>
  <span
    className="text-xl font-extrabold tracking-tight text-blue-600"
    style={{ fontFamily: "InterTight, sans-serif" }}
  >
    {BRAND.name}
  </span>
</div>

    </div>

    {/* Desktop Menu (hidden on mobile) */}
    <nav className=" items-center gap-6 text-base font-medium">
      {MENU.filter(m => !["search", "Cart", "Login", "071 587 4747"].includes(m.label)).map((m) => (
        <a
          key={m.label}
          href={m.href}
          className="relative px-2 py-1 transition hover:text-[#0992E9] 
                     after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                     after:bg-[#0992E9] after:transition-all hover:after:w-full"
        >
          {m.label}
        </a>
      ))}
      
    </nav>

    {/* Mobile Contact (visible only on mobile) */}
    <div className="">
      <a
        href={MENU.find(m => m.label.includes("+"))?.href}
        className="ml-2 px-4 py-2 rounded-lg bg-[#0992E9] text-white font-semibold shadow-md hover:bg-blue-800 transition"
      >
        {MENU.find(m => m.label.includes("+"))?.label}
      </a>
    </div>

  </div>

  {/* Mobile Dropdown */}
  <AnimatePresence>
    {menuOpen && (
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="md:hidden bg-white border-t shadow-lg flex flex-col p-4 gap-4"
      >
        {MENU.filter(m => ["Home", "Services", "About Us"].includes(m.label)).map((m) => (
          <a
            key={m.label}
            href={m.href}
            className="text-gray-700 hover:text-[#0992E9] text-lg"
            onClick={() => setMenuOpen(false)}
          >
            {m.label}
          </a>
        ))}
      </motion.nav>
    )}
  </AnimatePresence>
</header>


      {/* HERO - MARKETPLACE POSITIONING */}
      <section className="relative bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden py-24">
        {/* Background elements */}
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
                  ✨ Tech Solutions Marketplace
                </div>
                
                <h1 className="text-5xl md:text-6xl font-black leading-tight">
                  Find the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Right Tech Expert</span> for Your Budget
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  Whether you need affordable IT support from verified freelancers or elite cybersecurity experts—we connect you with the perfect solution. No middleman. Direct expertise.
                </p>

                {/* THREE CALL-TO-ACTIONS */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="#find-expert"
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg transition transform hover:scale-105"
                  >
                    🔍 Find Services
                  </a>
                  <a
                    href="#become-expert"
                    className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl border border-white/40 transition backdrop-blur"
                  >
                    💼 Offer Services
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
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-indigo-600/40 backdrop-blur-sm" />
                </div>
                
                {/* Floating card */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }} 
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-6 -right-6 bg-white text-gray-900 rounded-2xl p-6 shadow-2xl max-w-xs"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center text-white font-bold">✓</div>
                    <div>
                      <p className="font-bold text-sm">Trusted Network</p>
                      <p className="text-xs text-gray-600">1000+ Expert Available</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

 




 {/* THREE-TIER VALUE PROPOSITION */}
<section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-8">
    {/* CLIENTS */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      className="p-8 rounded-2xl bg-gradient-to-br from-blue-600/30 to-blue-500/10 border border-blue-500/40 backdrop-blur"
    >
      <div className="text-4xl mb-4">🔍</div>
      <h3 className="text-2xl font-bold mb-3">For Clients</h3>
      <p className="text-gray-300 mb-6">
        Find affordable IT & cybersecurity solutions. Browse verified experts, compare pricing, book services instantly.
      </p>
      <ul className="space-y-2 text-sm text-gray-300">
        <li>✓ Transparent pricing</li>
        <li>✓ Verified reviews</li>
        <li>✓ Secure escrow payments</li>
        <li>✓ Direct messaging</li>
      </ul>
    </motion.div>

    {/* FREELANCERS */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: 0.1 }}
      className="p-8 rounded-2xl bg-gradient-to-br from-cyan-600/30 to-cyan-500/10 border border-cyan-500/40 backdrop-blur"
    >
      <div className="text-4xl mb-4">💼</div>
      <h3 className="text-2xl font-bold mb-3">For Freelancers</h3>
      <p className="text-gray-300 mb-6">
        Register your expertise, offer services at your rates. Build your reputation and client base on our platform.
      </p>
      <ul className="space-y-2 text-sm text-gray-300">
        <li>✓ Set your own rates</li>
        <li>✓ Full control of schedule</li>
        <li>✓ Build your portfolio</li>
        <li>✓ Direct client relationships</li>
      </ul>
    </motion.div>

    {/* CYBER EXPERTS */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: 0.2 }}
      className="p-8 rounded-2xl bg-gradient-to-br from-red-600/30 to-red-500/10 border border-red-500/40 backdrop-blur"
    >
      <div className="text-4xl mb-4">🛡️</div>
      <h3 className="text-2xl font-bold mb-3">For Cyber Experts</h3>
      <p className="text-gray-300 mb-6">
        Elite certification tier. Specialize in advanced threats, APTs, and enterprise security. Premium positioning.
      </p>
      <ul className="space-y-2 text-sm text-gray-300">
        <li>✓ Certification badges</li>
        <li>✓ Premium listing</li>
        <li>✓ Enterprise contracts</li>
        <li>✓ 24/7 incident response</li>
      </ul>
    </motion.div>
  </div>
</section>

      {/* FIND SERVICES SECTION */}
      <section id="find-expert" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Browse & Book Tech Experts</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Search by service, price range, or expertise. Read reviews and book instantly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { icon: "🖥️", label: "Computer Repair", count: "240+ Experts" },
              { icon: "🌐", label: "Network & Wi-Fi", count: "180+ Experts" },
              { icon: "🔐", label: "Cybersecurity", count: "95+ Experts" },
              { icon: "☁️", label: "Cloud Services", count: "120+ Experts" },
              { icon: "🖨️", label: "Printer Setup", count: "160+ Experts" },
              { icon: "📊", label: "IT Consulting", count: "85+ Experts" },
              { icon: "🛡️", label: "Security Audits", count: "60+ Experts" },
              { icon: "⚡", label: "Emergency Support", count: "200+ Experts" },
            ].map((cat, i) => (
              <div 
                key={i}
                className="p-6 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 transition cursor-pointer text-center"
              >
                <div className="text-4xl mb-2">{cat.icon}</div>
                <h4 className="font-bold mb-1">{cat.label}</h4>
                <p className="text-sm text-gray-400">{cat.count}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition"
            >
              Explore All Services
            </a>
          </div>
        </div>
      </section>

      {/* BECOME AN EXPERT SECTION */}
      <section id="become-expert" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Turn Your Expertise Into Income</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Register as a freelancer or cyber expert. Set rates, manage schedule, grow your client base.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { 
                step: "1", 
                title: "Register", 
                desc: "Create your profile with credentials and rates.",
                icon: "📝"
              },
              { 
                step: "2", 
                title: "Showcase Expertise", 
                desc: "List services, add portfolio, get verified.",
                icon: "⭐"
              },
              { 
                step: "3", 
                title: "Earn & Grow", 
                desc: "Receive inquiries, complete projects, build reputation.",
                icon: "📈"
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-xl bg-gradient-to-br from-indigo-600/30 to-indigo-500/10 border border-indigo-500/40"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-3xl font-bold text-blue-300 mb-2">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-10 rounded-xl bg-gradient-to-r from-indigo-600/40 to-purple-600/40 border border-indigo-500/40 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Offer Your Services?</h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Join our network. Get verified, build reputation, grow income.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition"
            >
              Register as Expert
            </a>
          </div>
        </div>
      </section>





      {/* SERVICES - TIERED FROM BASIC TO ADVANCED */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Services: Basic to Advanced</h2>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              From everyday tech support to advanced cybersecurity and incident response. Serving elite individuals, businesses, and enterprises.
            </p>
          </div>

          {/* TIER 1: BASIC IT SUPPORT */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-blue-700 mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">1</span>
              Basic IT Support
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "💻", title: "Computer Power-On & Setup", desc: "Basic device startup, configuration, and initial setup." },
                { icon: "🖨️", title: "Printer & Scanner Setup", desc: "Network printer configuration and driver installation." },
                { icon: "🌐", title: "Wi-Fi Connection & Troubleshooting", desc: "Network connectivity issues, router configuration, signal optimization." },
                { icon: "📧", title: "Email Configuration", desc: "Email client setup (Outlook, Gmail, etc.) and basic troubleshooting." },
                { icon: "🔄", title: "Software Installation & Updates", desc: "Application deployment, OS updates, patch management." },
                { icon: "📱", title: "Mobile Device Setup", desc: "Smartphone and tablet configuration, app installation." },
              ].map((service, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition border border-gray-100">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TIER 2: INTERMEDIATE TECHNICAL SUPPORT */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-blue-700 mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">2</span>
              Intermediate Technical Support
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🔧", title: "Hardware Diagnostics & Repair", desc: "CPU/RAM/Storage issues, motherboard repairs, component replacement." },
                { icon: "🛡️", title: "Antivirus & Malware Removal", desc: "Virus detection, malware cleanup, endpoint protection installation." },
                { icon: "🔐", title: "Password Reset & Account Recovery", desc: "Windows account recovery, BIOS password reset, credential management." },
                { icon: "💾", title: "Data Recovery & Backup", desc: "Lost file recovery, disk imaging, automated backup configuration." },
                { icon: "🖥️", title: "Remote Desktop & VPN Setup", desc: "RDP configuration, VPN client setup, remote access troubleshooting." },
                { icon: "⚙️", title: "System Performance Optimization", desc: "Startup optimization, disk cleanup, RAM upgrade consultation." },
              ].map((service, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition border border-gray-100">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TIER 3: ENTERPRISE IT & INFRASTRUCTURE */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-blue-700 mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">3</span>
              Enterprise IT & Infrastructure
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🏢", title: "Network Architecture & Design", desc: "LAN/WAN design, segmentation, redundancy planning, enterprise networking." },
                { icon: "☁️", title: "Cloud Migration & Management", desc: "AWS, Azure, M365 migration, hybrid cloud setup, cost optimization." },
                { icon: "🔄", title: "IT Infrastructure Monitoring", desc: "24/7 system monitoring, alerting, performance metrics, uptime guarantees." },
                { icon: "📊", title: "Disaster Recovery Planning", desc: "Business continuity planning, failover systems, RTO/RPO optimization." },
                { icon: "👥", title: "Active Directory & Identity Management", desc: "AD/Azure AD configuration, user management, SSO implementation, access control." },
                { icon: "📋", title: "IT Service Management (ITSM)", desc: "Ticket systems, knowledge bases, SLA management, ITIL compliance." },
              ].map((service, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition border border-gray-100">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TIER 4: CYBERSECURITY & DEFENSE */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-blue-700 mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">4</span>
              Cybersecurity & Defense
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🔒", title: "Vulnerability Assessment & Penetration Testing", desc: "Network penetration testing, code review, security gap identification." },
                { icon: "🛡️", title: "Endpoint Detection & Response (EDR)", desc: "Advanced threat detection, behavioral analysis, incident response automation." },
                { icon: "🚨", title: "Security Information & Event Management (SIEM)", desc: "Log aggregation, threat hunting, real-time alerting, compliance reporting." },
                { icon: "🔐", title: "Zero Trust Architecture", desc: "Micro-segmentation, identity verification, least-privilege access models." },
                { icon: "🌐", title: "Web Application Security (WAF)", desc: "DDoS protection, SQL injection/XSS prevention, bot detection." },
                { icon: "📜", title: "Compliance & Audits (ISO 27001, HIPAA, GDPR)", desc: "Compliance gap analysis, audit preparation, policy documentation." },
              ].map((service, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition border border-blue-200">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TIER 5: ADVANCED THREAT INTELLIGENCE & INCIDENT RESPONSE */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-red-700 mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold">5</span>
              Advanced Threat Intelligence & Incident Response
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🕵️", title: "APT & Malware Analysis", desc: "Advanced persistent threat detection, malware reverse engineering, threat hunting." },
                { icon: "⚠️", title: "Incident Response & Forensics", desc: "24/7 breach response, digital forensics, timeline reconstruction, evidence preservation." },
                { icon: "📡", title: "Threat Intelligence & Attribution", desc: "Threat actor identification, attack pattern analysis, indicator of compromise (IOC) tracking." },
                { icon: "🔴", title: "Red Team Operations", desc: "Simulated attacks, advanced evasion testing, full-scope penetration exercises." },
                { icon: "🧬", title: "Ransomware Response & Recovery", desc: "Ransomware detection, decryption assistance, restoration strategies." },
                { icon: "🎯", title: "Supply Chain Security & Risk Management", desc: "Third-party risk assessment, vendor security audits, supply chain threat analysis." },
              ].map((service, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition border border-red-200">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-12 rounded-2xl border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Not sure which tier you need?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact our security experts for a free consultation. We&apos;ll assess your needs and recommend the right solution.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition shadow-lg"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>

{/* INTERNET SPEED TEST SECTION */}
<section id="speedtest" className="py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
    
    {/* Left: Speed test iframe */}
    <div className="w-full h-[400px] md:h-[450px]">
      <iframe
        id="fast-iframe"
        src="https://fast.com"
        width="100%"
        height="100%"
        frameBorder="0"
        className="rounded-2xl"
        title="Internet Speed Test"
      ></iframe>
    </div>

    {/* Right: Text & button */}
    <div className="flex flex-col justify-center gap-6">
      <h2 className="text-3xl font-bold text-gray-900">Getting the speed you need?</h2>
      <p className="text-gray-600 text-lg">
        A fast connection is essential whether you’re working, playing, or relaxing. 
        Use our speed test to make sure your network is giving you what you need.
      </p>
      
      <button
        onClick={() => {
          const iframe = document.getElementById('fast-iframe') as HTMLIFrameElement;
          if (iframe) iframe.src = iframe.src; // Reload iframe to "run test"
        }}
        className=" w-1/3 px-6 py-4 bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition"
      >
        Run Speed Test
      </button>
      <p className="text-gray-500 text-sm">
        Free, instant, and easy to use. Works on any device.
      </p>
    </div>

  </div>
</section>

{/* COMMON PROBLEMS SLIDER */}
<section id="common-problems" className="py-5 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative">
    <h2 className="text-3xl font-bold">Common IT Problems We Solve</h2>
    <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
      Day-to-day IT challenges faced by businesses and professionals.
    </p>

    <div className="mt-10 relative">
      <div
        id="problems-slider"
        className="flex flex-col gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-2 py-4"
      >
        {(() => {
          const problems = [
            "Microsoft 365 / Office Suite – Word, Excel, Outlook, Teams",
            "Windows OS – Desktop/server environments",
            "Zoom / Google Meet / Microsoft Teams – Remote meetings",
            "Network downtime & connectivity issues – Wired/wireless networks",
            "Slow internet speeds – ISPs & troubleshooting",
            "Virus, malware, ransomware attacks – Endpoint security & EDR/XDR",
            "Printer & peripheral failures – Office equipment support",
            "Cloud migration & data backup issues – Azure, AWS, M365",
            "Software updates / patch management – Keeping systems compliant",
            "Password management / identity security – Microsoft Entra ID / Azure AD",
          ];

          const odd = problems.filter((_, idx) => idx % 2 === 0);
          const even = problems.filter((_, idx) => idx % 2 === 1);

          const renderRow = (row: string[], rowKey: string) => (
            <div className="flex gap-6 snap-x snap-mandatory">
              {row.map((p, idx) => (
                <div
                  key={`${rowKey}-${idx}`}
                  className="flex-shrink-0 snap-center flex flex-col items-center p-6 rounded-2xl bg-white shadow hover:shadow-lg transition w-56"
                >
                  <span className="text-sm text-gray-700 text-center">{p}</span>
                </div>
              ))}
            </div>
          );

          return (
            <>
              {renderRow(odd, "odd")}
              {renderRow(even, "even")}
            </>
          );
        })()}
      </div>

      {/* Arrows */}
      <button
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-white transition-colors rounded-full p-3 shadow-lg z-10 flex items-center justify-center"
        onClick={() => {
          const slider = document.getElementById("problems-slider");
          slider?.scrollBy({ left: -300, behavior: "smooth" });
        }}
        aria-label="Scroll Left"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-white transition-colors rounded-full p-3 shadow-lg z-10 flex items-center justify-center"
        onClick={() => {
          const slider = document.getElementById("problems-slider");
          slider?.scrollBy({ left: 300, behavior: "smooth" });
        }}
        aria-label="Scroll Right"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</section>


{/* --- WHY CHOOSE US SECTION (2 Columns) --- */}
<section id="about_us" className="py-16 bg-gray-100">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Established Solutions?</h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Delivering fast, secure, and reliable IT solutions tailored to your business needs.
      </p>
    </div>

    {/* 2-Column Grid */}
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-8">
      <div className="flex items-start gap-4">
        <div className="text-blue-700 text-3xl">💻</div>
        <p className="font-medium text-gray-700">
          Certified experts in cybersecurity, cloud, and networking.
        </p>
      </div>

      <div className="flex items-start gap-4">
        <div className="text-blue-700 text-3xl">⚡</div>
        <p className="font-medium text-gray-700">
          Rapid remote support or same-day on-site assistance.
        </p>
      </div>

      <div className="flex items-start gap-4">
        <div className="text-blue-700 text-3xl">🔒</div>
        <p className="font-medium text-gray-700">
          End-to-end cybersecurity & risk management.
        </p>
      </div>

      <div className="flex items-start gap-4">
        <div className="text-blue-700 text-3xl">🌐</div>
        <p className="font-medium text-gray-700">
          Wi-Fi, network setup, and computer repair services.
        </p>
      </div>

      <div className="flex items-start gap-4">
        <div className="text-blue-700 text-3xl">💡</div>
        <p className="font-medium text-gray-700">
          IT consulting and professional tech advice.
        </p>
      </div>

      <div className="flex items-start gap-4">
        <div className="text-blue-700 text-3xl">📈</div>
        <p className="font-medium text-gray-700">
          Fixed pricing with clear, documented solutions.
        </p>
      </div>
    </div>
  </div>
</section>





   {/* --- Partners Logos at bottom --- */}
    <div className="flex justify-center items-center gap-8 overflow-x-auto px-4 py-2 mt-auto scrollbar-hide">
      {[
        { name: "Liquid", img: "/liquidS.png" },
        { name: "Microsoft", img: "/microsoft.png" },
        { name: "Lenovo", img: "/lenovo.png" },
        { name: "HP", img: "/hp.png" },
        { name: "Dell", img: "/dell.png" },
        { name: "Trendnet", img: "/hikivision.png" },
      ].map((b) => (
        <div key={b.name} className="flex flex-col items-center justify-center w-28 flex-shrink-0">
          <Image src={b.img} alt={b.name} className="w-20 h-20 object-contain mb-2" />
        </div>
      ))}
    </div>





{/* CONTACT */}
<section id="contact" className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* Left: Text + Direct Contact Buttons */}
    <div className="space-y-6">
      <h2 className="text-4xl font-extrabold text-gray-900">Get in Touch</h2>
      <p className="text-gray-600 text-lg">
        Need help? Reach us instantly via WhatsApp, call, or email, or send us a quick message using the form. 
        We typically respond within a few hours.
      </p>

      {/* Direct Contact Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://wa.me/263771254430"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl shadow-lg hover:bg-green-600 transition text-center"
        >
          WhatsApp Us
        </a>

        <a
          href="tel:+263771254430"
          className="flex-1 px-6 py-3 bg-[#0992E9] text-white font-semibold rounded-xl shadow-lg hover:bg-blue-800 transition text-center"
        >
          Call Us
        </a>

        <a
          href="mailto:info@established.co.zw"
          className="flex-1 px-6 py-3 bg-gray-800 text-white font-semibold rounded-xl shadow-lg hover:bg-gray-900 transition text-center"
        >
          Email Us
        </a>
      </div>
    </div>

    {/* Right: Form Card */}
    <div className="bg-gray-50 p-8 rounded-3xl shadow-xl">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Or send us a message</h3>
      <form className="grid gap-4">
        <input
          type="text"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0992E9] focus:border-[#0992E9] transition"
          placeholder="Your Name"
        />
        <input
          type="email"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0992E9] focus:border-[#0992E9] transition"
          placeholder="Email"
        />
        <input
          type="text"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0992E9] focus:border-[#0992E9] transition"
          placeholder="Company (optional)"
        />
        <textarea
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0992E9] focus:border-[#0992E9] transition"
          rows={5}
          placeholder="Your Message"
        />
        <button
          type="submit"
          className="w-full px-6 py-3 bg-[#0992E9] text-white font-semibold rounded-xl shadow-lg hover:bg-blue-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>

  </div>
</section>


      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10" />
            <span className="font-semibold">{BRAND.name}</span>
          </div>
          <div className="text-sm opacity-80">© 2025 {BRAND.name}. All rights reserved.</div>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

/*
  Notes:
  - This page mirrors the structure you shared: header with dropdown, hero with rotating device name,
    category menu, banner, service grid, reviews, about, contact, and footer — branded for Established Solutions.
  - Styling uses Tailwind utility classes. In a real Next.js app, ensure Tailwind is set up
    (tailwind.config.js + globals.css). If you prefer CSS Modules instead, we can convert.
  - Replace placeholder icon classes (ht-icon …) with your icon set or SVGs.
  - Replace hero/art blocks with real images under /public.
*/

