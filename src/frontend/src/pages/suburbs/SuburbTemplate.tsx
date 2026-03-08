import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { SuburbData } from "@/data/suburbs";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";

interface SuburbPageProps {
  suburb: SuburbData;
}

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

const whatsIncluded = [
  "All rooms vacuumed & mopped",
  "Kitchen deep clean (oven, rangehood, cupboards)",
  "Bathrooms & toilets scrubbed",
  "Windows cleaned (inside)",
  "Skirting boards, light switches & power points",
  "Fans, light fittings & AC filters",
  "Cobweb removal & wall spot-clean",
  "Floors (all types)",
  "Laundry room",
  "Cupboards (inside & out)",
];

export function SuburbPage({ suburb }: SuburbPageProps) {
  useSEO({
    title: `End of Lease Cleaning ${suburb.name} Adelaide | Bond Clean ${suburb.name} | Tru`,
    description: `Professional end of lease cleaning in ${suburb.name}, Adelaide. Local bond cleaners, 100% bond back guarantee, upfront pricing. Book online or WhatsApp 0488841883.`,
    ogImage: "/assets/generated/adelaide-suburbs-banner.dim_800x400.jpg",
    keywords: `end of lease cleaning ${suburb.name}, bond cleaning ${suburb.name} Adelaide, bond clean ${suburb.name}`,
  });

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16">
        <img
          src="/assets/generated/adelaide-suburbs-banner.dim_800x400.jpg"
          alt={`Tru End of Lease Cleaning Adelaide - professional bond cleaning service in ${suburb.name}`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <MapPin className="h-3 w-3 mr-1" />
            {suburb.name}, Adelaide
          </Badge>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mb-4 max-w-3xl">
            End of Lease Cleaning {suburb.name}
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mb-8">
            Bond cleaning near you — professional, fully guaranteed, and local
            to {suburb.name}.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/quote">
              <Button
                size="lg"
                className="bg-green-cta hover:bg-green-hover text-white font-bold px-8"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Get Free Quote
              </Button>
            </Link>
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand font-bold px-8 bg-white/10"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Intro */}
              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  End of Lease Cleaning in {suburb.name}, Adelaide
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {suburb.description} As a {suburb.character}, there's a high
                  demand for professional end of lease cleaning services in the
                  area — and Tru End of Lease Cleaning Adelaide is right here to
                  help.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're moving out of an apartment, townhouse, or
                  family home in {suburb.name}, our professional bond cleaning
                  team delivers outstanding results. We know exactly what
                  Adelaide property managers look for during final inspections,
                  and we make sure your property passes every single time — or
                  we come back and fix it for free.
                </p>
              </div>

              {/* Why Tru for this suburb */}
              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Why Choose Tru for Bond Cleaning in {suburb.name}?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We're not a big national franchise — we're Adelaide locals who
                  know the area and understand the standards that {suburb.name}{" "}
                  property managers expect. Here's why hundreds of {suburb.name}{" "}
                  renters trust us with their bond:
                </p>
                <ul className="space-y-3">
                  {[
                    `We've cleaned dozens of properties in and around ${suburb.name}`,
                    "We follow the real estate-approved checklist used by Adelaide agents",
                    "We offer upfront, no-hidden-fees pricing — what we quote is what you pay",
                    "Every booking comes with our 100% Bond Back Guarantee",
                    "We're available 7 days a week including same-day bookings",
                    "We bring all our own professional equipment and cleaning products",
                    "We're fully insured with public liability coverage",
                  ].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="h-4 w-4 text-green-cta shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's included */}
              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  What's Included in Our {suburb.name} Bond Clean
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our full end of lease clean covers every area of your rental
                  property in {suburb.name}. We work through the entire property
                  systematically, using the real estate inspection checklist as
                  our guide:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {whatsIncluded.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="h-4 w-4 text-green-cta shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  You can also add carpet steam cleaning, professional oven
                  cleaning, window cleaning, or garage cleaning to your package.
                  Just let us know when you book.
                </p>
              </div>

              {/* Bond cleaning process */}
              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  Our Process for {suburb.name} Properties
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you book with us, here's what happens:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Book online or WhatsApp",
                      desc: `Send us a message with your property details — we'll confirm your booking and give you an upfront price for your ${suburb.name} property within a couple of hours.`,
                    },
                    {
                      step: "2",
                      title: "We arrive and clean",
                      desc: `Our team shows up on time with all equipment and products. We clean your entire property in ${suburb.name} to a professional standard, methodically working through every room.`,
                    },
                    {
                      step: "3",
                      title: "Final quality check",
                      desc: "Before we leave, we do a thorough final check against the real estate inspection form to make sure everything is perfect.",
                    },
                    {
                      step: "4",
                      title: "Pass inspection and get your bond back",
                      desc: "Your property manager does the final inspection and you get your full bond back. If anything isn't right, we'll come back and fix it for free.",
                    },
                  ].map(({ step, title, desc }) => (
                    <div key={step} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm shrink-0">
                        {step}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm mb-1">
                          {title}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-4">
                  End of Lease Cleaning Prices in {suburb.name}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We offer transparent, upfront pricing for all {suburb.name}{" "}
                  properties. Here's a general guide:
                </p>
                <div className="bg-brand/5 border border-brand/15 rounded-xl p-5">
                  <p className="font-mono text-sm text-muted-foreground">
                    {suburb.pricingNote}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    * Add-ons (carpet steam cleaning, oven cleaning, window
                    cleaning) are priced separately. Final price depends on
                    property condition and size.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Get in touch for an exact, no-obligation quote for your
                  specific property in {suburb.name}.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* CTA Card */}
              <Card className="border-2 border-green-cta/30 bg-green-cta/5">
                <CardContent className="p-5">
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    Book Your {suburb.name} Bond Clean
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get your free, upfront quote today. We can usually
                    accommodate same-day or next-day bookings.
                  </p>
                  <Link to="/quote">
                    <Button className="w-full bg-green-cta hover:bg-green-hover text-white font-bold mb-2">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Get Free Quote
                    </Button>
                  </Link>
                  <a
                    href="https://wa.me/61488841883"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="w-full font-bold text-white"
                      style={{ backgroundColor: "#25D366" }}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp 0488841883
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="border-border/50">
                <CardContent className="p-5">
                  <h3 className="font-display font-bold text-base text-foreground mb-3">
                    <MapPin className="h-4 w-4 inline mr-1 text-brand" />
                    {suburb.name} Location
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {suburb.landmark}. We service all streets in {suburb.name}{" "}
                    and the surrounding area.
                  </p>
                </CardContent>
              </Card>

              {/* Services */}
              <Card className="border-border/50">
                <CardContent className="p-5">
                  <h3 className="font-display font-bold text-base text-foreground mb-3">
                    Our Services in {suburb.name}
                  </h3>
                  <ul className="space-y-1.5">
                    {services.map(({ label, href }) => (
                      <li key={href}>
                        <Link
                          to={href}
                          className="flex items-center gap-1.5 text-sm text-brand hover:underline"
                        >
                          <ArrowRight className="h-3.5 w-3.5" />
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Guarantee */}
              <Card className="border-brand/20 bg-brand/5">
                <CardContent className="p-5">
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    🏆 100% Bond Back Guarantee
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every booking in {suburb.name} comes with our Bond Back
                    Guarantee. If your property manager isn't happy, we come
                    back for free.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
