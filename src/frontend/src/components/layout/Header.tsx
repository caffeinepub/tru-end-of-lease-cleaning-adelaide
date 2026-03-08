import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { suburbsData } from "@/data/suburbs";
import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, Sparkles } from "lucide-react";
import { useState } from "react";

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

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-brand text-white py-1.5 px-4 text-sm text-center flex items-center justify-center gap-2">
        <Phone className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Same-day bookings available — </span>
        <a
          href="https://wa.me/61488841883"
          className="font-semibold underline hover:no-underline"
        >
          WhatsApp 0488841883
        </a>
      </div>

      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex flex-col leading-none"
          data-ocid="nav.home.link"
        >
          <span className="font-display font-black text-lg text-brand tracking-tight">
            Tru End of Lease Cleaning
          </span>
          <span className="text-xs text-muted-foreground font-body">
            Adelaide&apos;s Bond Cleaning Specialists
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted ${isActive("/") ? "text-brand font-semibold" : "text-foreground"}`}
            data-ocid="nav.home.link"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted text-foreground"
                data-ocid="nav.services.link"
              >
                Services <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {services.map((s) => (
                <DropdownMenuItem key={s.href} asChild>
                  <Link to={s.href} className="cursor-pointer">
                    {s.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Suburbs Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted text-foreground"
                data-ocid="nav.suburbs.link"
              >
                Suburbs <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-56 max-h-80 overflow-y-auto"
            >
              {suburbsData.map((s) => (
                <DropdownMenuItem key={s.slug} asChild>
                  <Link to={`/suburbs/${s.slug}`} className="cursor-pointer">
                    {s.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/about"
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted ${isActive("/about") ? "text-brand font-semibold" : "text-foreground"}`}
            data-ocid="nav.about.link"
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted ${isActive("/contact") ? "text-brand font-semibold" : "text-foreground"}`}
            data-ocid="nav.contact.link"
          >
            Contact
          </Link>

          <Link to="/quote">
            <Button
              className="ml-2 bg-green-cta hover:bg-green-hover text-white font-semibold"
              data-ocid="nav.quote.button"
            >
              <Sparkles className="h-4 w-4 mr-1.5" />
              Get Free Quote
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="font-display text-brand text-left">
                Tru End of Lease Cleaning
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-medium rounded-md hover:bg-muted"
                data-ocid="nav.home.link"
              >
                Home
              </Link>

              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide mt-2">
                Services
              </div>
              {services.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 text-sm rounded-md hover:bg-muted ml-2"
                >
                  {s.label}
                </Link>
              ))}

              <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide mt-2">
                Suburbs
              </div>
              <div className="grid grid-cols-2 gap-1 ml-2">
                {suburbsData.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/suburbs/${s.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2 text-sm rounded-md hover:bg-muted"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-medium rounded-md hover:bg-muted mt-2"
                data-ocid="nav.about.link"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm font-medium rounded-md hover:bg-muted"
                data-ocid="nav.contact.link"
              >
                Contact
              </Link>
              <Link to="/quote" onClick={() => setMobileOpen(false)}>
                <Button
                  className="w-full mt-4 bg-green-cta hover:bg-green-hover text-white font-semibold"
                  data-ocid="nav.quote.button"
                >
                  <Sparkles className="h-4 w-4 mr-1.5" />
                  Get Free Quote
                </Button>
              </Link>
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full mt-2 border-green-cta text-green-cta hover:bg-green-cta hover:text-white"
                >
                  WhatsApp 0488841883
                </Button>
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
