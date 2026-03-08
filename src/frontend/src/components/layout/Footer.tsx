import { suburbsData } from "@/data/suburbs";
import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";

const services = [
  { label: "End of Lease Cleaning", href: "/services/end-of-lease-cleaning" },
  { label: "Bond Cleaning", href: "/services/bond-cleaning" },
  { label: "Carpet Steam Cleaning", href: "/services/carpet-steam-cleaning" },
  { label: "Oven & Kitchen Cleaning", href: "/services/oven-kitchen-cleaning" },
  { label: "Window Cleaning", href: "/services/window-cleaning" },
  {
    label: "Bathroom & Toilet Cleaning",
    href: "/services/bathroom-toilet-cleaning",
  },
  {
    label: "Garage & Outdoor Cleaning",
    href: "/services/garage-outdoor-cleaning",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="font-display font-black text-xl mb-3 text-white">
              Tru End of Lease Cleaning
            </h3>
            <p className="text-sm text-white/70 mb-4 leading-relaxed">
              Adelaide's trusted bond cleaning specialists. We help tenants
              across all Adelaide suburbs get their full bond back — guaranteed.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-green-300 hover:text-green-200 font-medium transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp: 0488841883
              </a>
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Serving all Adelaide suburbs, SA</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Phone className="h-4 w-4 shrink-0" />
                <span>0488 841 883</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base mb-3 text-white/90">
              Quick Links
            </h4>
            <ul className="space-y-1.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
                { label: "Get Free Quote", href: "/quote" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-base mb-3 text-white/90">
              Our Services
            </h4>
            <ul className="space-y-1.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Suburbs */}
          <div>
            <h4 className="font-display font-bold text-base mb-3 text-white/90">
              Areas We Serve
            </h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5">
              {suburbsData.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/suburbs/${s.slug}`}
                    className="text-xs text-white/65 hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50 text-center sm:text-left">
            © {currentYear} Tru End of Lease Cleaning Adelaide. All rights
            reserved.
          </p>
          <p className="text-xs text-white/40 text-center sm:text-right max-w-md">
            Tru End of Lease Cleaning Adelaide provides professional bond and
            end of lease cleaning services across Adelaide and surrounding
            suburbs.
          </p>
        </div>
        <p className="mt-3 text-xs text-white/35 text-center">
          © {currentYear}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/60"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
