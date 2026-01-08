import Image from 'next/image'

const footerLinks = {
  programs: [
    'Discover Intensive Phonics',
    'Elevate Reading Intervention',
    'Ascend Adult Literacy',
    'Little Books',
  ],
  solutions: ['K-12 Schools', 'Adult Education', 'Correctional Facilities', 'Homeschool'],
  resources: ['Research & Results', 'Webinars', 'Blog', 'Support Center'],
  company: ['About Us', 'Our Method', 'Contact', 'Careers'],
}

const socialLinks = [
  { name: 'Facebook', icon: '/fb-icon.svg' },
  { name: 'Twitter', icon: '/twitter-x-icon.svg' },
  { name: 'LinkedIn', icon: '/linked-in-icon.svg' },
  { name: 'Pinterest', icon: '/pintrest-icon.svg' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/footer-logomark.svg"
                alt="Reading Horizons"
                width={32}
                height={32}
                className="brightness-0 invert"
              />
              <span className="text-xl font-bold">Reading Horizons</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Empowering educators and students with research-based reading instruction since
              1970.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="brightness-0 invert"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold mb-4">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white hover:pl-1 transition-all"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-bold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white hover:pl-1 transition-all"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white hover:pl-1 transition-all"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white hover:pl-1 transition-all"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2026 Reading Horizons. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
