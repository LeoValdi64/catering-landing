import {
  UtensilsCrossed,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <UtensilsCrossed className="w-7 h-7 text-gold" />
              <div>
                <span className="text-lg font-bold text-gold tracking-wide font-[family-name:var(--font-playfair)]">
                  GoldenPlate
                </span>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-warm-gray">
                  Catering
                </span>
              </div>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed mb-6 font-[family-name:var(--font-lato)]">
              Houston&apos;s premier full-service catering company. Crafting
              extraordinary culinary experiences since 2010.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center text-cream/50 hover:text-gold hover:border-gold/40 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center text-cream/50 hover:text-gold hover:border-gold/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center text-cream/50 hover:text-gold hover:border-gold/40 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-cream font-semibold text-lg mb-6 font-[family-name:var(--font-playfair)]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "#services", label: "Our Services" },
                { href: "#menus", label: "Sample Menus" },
                { href: "#why-us", label: "Why Choose Us" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#areas", label: "Service Areas" },
                { href: "#quote", label: "Get a Quote" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/50 hover:text-gold transition-colors text-sm font-[family-name:var(--font-lato)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-cream font-semibold text-lg mb-6 font-[family-name:var(--font-playfair)]">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Wedding Catering",
                "Corporate Events",
                "Private Parties",
                "Holiday Catering",
                "BBQ & Outdoor",
                "Brunch Events",
              ].map((service) => (
                <li
                  key={service}
                  className="text-cream/50 text-sm font-[family-name:var(--font-lato)]"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-cream font-semibold text-lg mb-6 font-[family-name:var(--font-playfair)]">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span className="text-cream/50 text-sm font-[family-name:var(--font-lato)]">
                  4512 Westheimer Rd, Suite 200
                  <br />
                  Houston, TX 77027
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="tel:+17135550198"
                  className="text-cream/50 hover:text-gold transition-colors text-sm font-[family-name:var(--font-lato)]"
                >
                  (713) 555-0198
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="mailto:events@goldenplatecatering.com"
                  className="text-cream/50 hover:text-gold transition-colors text-sm font-[family-name:var(--font-lato)]"
                >
                  events@goldenplatecatering.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span className="text-cream/50 text-sm font-[family-name:var(--font-lato)]">
                  Mon&ndash;Fri: 9am &ndash; 6pm
                  <br />
                  Sat: 10am &ndash; 4pm
                  <br />
                  Sun: By appointment
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-sm font-[family-name:var(--font-lato)]">
            2025 GoldenPlate Catering. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-cream/30 hover:text-cream/50 text-sm transition-colors font-[family-name:var(--font-lato)]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-cream/30 hover:text-cream/50 text-sm transition-colors font-[family-name:var(--font-lato)]"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
