import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { suburbsData } from "@/data/suburbs";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bath,
  Car,
  CheckCircle,
  Clock,
  Flame,
  Home,
  MapPin,
  MessageCircle,
  Shield,
  Sparkles,
  Wind,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "End of Lease Cleaning",
    desc: "Full top-to-bottom clean of your entire rental property. We cover every room, every surface.",
    href: "/services/end-of-lease-cleaning",
    ocid: "services.item.1",
    img: "/assets/generated/bond-cleaning-checklist.dim_800x500.jpg",
    alt: "Tru End of Lease Cleaning Adelaide - professional end of lease clean checklist",
  },
  {
    icon: Shield,
    title: "Bond Cleaning",
    desc: "100% bond back guarantee. We follow the real estate-approved checklist to pass your final inspection.",
    href: "/services/bond-cleaning",
    ocid: "services.item.2",
    img: "/assets/generated/bond-cleaning-checklist.dim_800x500.jpg",
    alt: "Tru Bond Cleaning Adelaide - bond cleaning service with guarantee",
  },
  {
    icon: Home,
    title: "Carpet Steam Cleaning",
    desc: "Professional hot water extraction removes stains, pet odours, and built-up dirt from all carpet types.",
    href: "/services/carpet-steam-cleaning",
    ocid: "services.item.3",
    img: "/assets/generated/service-carpet-cleaning.dim_800x500.jpg",
    alt: "Tru End of Lease Cleaning Adelaide - carpet steam cleaning service",
  },
  {
    icon: Flame,
    title: "Oven & Kitchen Cleaning",
    desc: "We deep-clean your oven, rangehood, stovetop, and benches to remove all baked-on grease.",
    href: "/services/oven-kitchen-cleaning",
    ocid: "services.item.4",
    img: "/assets/generated/service-kitchen-cleaning.dim_800x500.jpg",
    alt: "Tru End of Lease Cleaning Adelaide - oven and kitchen deep cleaning service",
  },
  {
    icon: Wind,
    title: "Window Cleaning",
    desc: "Streak-free window cleaning inside and out. Every pane spotless for your final inspection.",
    href: "/services/window-cleaning",
    ocid: "services.item.5",
    img: "/assets/generated/service-window-cleaning.dim_800x500.jpg",
    alt: "Tru End of Lease Cleaning Adelaide - streak-free window cleaning service",
  },
  {
    icon: Bath,
    title: "Bathroom & Toilet Cleaning",
    desc: "We scrub tiles, grout, shower screens, vanity, and toilet to a sparkling finish.",
    href: "/services/bathroom-toilet-cleaning",
    ocid: "services.item.6",
    img: "/assets/generated/service-bathroom-cleaning.dim_800x500.jpg",
    alt: "Tru End of Lease Cleaning Adelaide - bathroom and toilet deep cleaning",
  },
  {
    icon: Car,
    title: "Garage & Outdoor Cleaning",
    desc: "We sweep, mop, and pressure wash garages and outdoor areas so nothing gets missed.",
    href: "/services/garage-outdoor-cleaning",
    ocid: "services.item.7",
    img: "/assets/generated/hero-banner.dim_1200x600.jpg",
    alt: "Tru End of Lease Cleaning Adelaide - garage and outdoor area cleaning service",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    suburb: "Glenelg",
    rating: 5,
    text: "The team at Tru were absolutely brilliant! I was worried about getting my bond back but they came in and made the entire unit sparkle. My property manager was super happy and I got my full $2,200 bond back. Couldn't be happier — will definitely use them again.",
  },
  {
    name: "James K.",
    suburb: "Norwood",
    rating: 5,
    text: "Booked them on short notice and they were there the very next morning. They did an incredible job on my 3-bedroom house in Norwood — the oven was spotless, the bathrooms gleamed, and the carpets looked brand new after the steam clean. 10/10, no hesitation.",
  },
  {
    name: "Priya T.",
    suburb: "Mawson Lakes",
    rating: 5,
    text: "As a uni student moving out of my apartment, I had no idea what bond cleaning involved. The Tru team explained everything, gave me an upfront price with no hidden charges, and cleaned my place better than when I moved in. Property manager passed the inspection on the first go!",
  },
];

const faqs = [
  {
    q: "What is bond cleaning and why is it required?",
    a: "Bond cleaning (also called end of lease cleaning) is a thorough, top-to-bottom clean of a rental property before you move out. Your landlord requires it to make sure the property is in the same condition as when you moved in. If you skip it or do a poor job, your landlord can deduct money from your bond (security deposit) to pay for a professional clean. In Adelaide, most rental agreements specifically require a professional bond clean before you hand back the keys.",
  },
  {
    q: "Why is bond cleaning important?",
    a: "Bond cleaning is important because it directly affects how much of your bond you get back. In South Australia, the average bond is four weeks' rent — that could be $1,500 to $3,000 or more. A professional bond clean gives you the best chance of getting every dollar back. It also protects your rental history, which landlords and property managers check when you apply for your next rental.",
  },
  {
    q: "How much for a bond clean?",
    a: "In Adelaide, bond cleaning typically costs between $250 and $600 depending on the size of your property. A 1-bedroom unit might cost around $250–$300, a 2-bedroom home $300–$400, and a 3-bedroom home $380–$500. Extras like carpet steam cleaning, oven cleaning, and window cleaning may cost extra. Tru End of Lease Cleaning offers upfront, no-hidden-fees pricing — get a free quote today.",
  },
  {
    q: "What is full bond cleaning?",
    a: "Full bond cleaning means every single area of the property gets cleaned from top to bottom. That includes all rooms, kitchen (oven, rangehood, stovetop, benches), bathrooms and toilets, laundry, windows (inside), blinds, walls (spot cleaning), skirting boards, light fittings, fans, air conditioning filters, cupboards (inside and out), and floors. It's everything a property manager will check on the final inspection. Carpet steam cleaning is often an add-on service.",
  },
  {
    q: "Which are the top rated bond cleaning companies near me?",
    a: null,
    specialContent: "topBondCleaners",
  },
  {
    q: "Which cleaning products are best for bond cleaning?",
    a: "The best products for bond cleaning are those that cut through grease, soap scum, and built-up grime without damaging surfaces. Professional cleaners in Adelaide use: Selleys Sugar Soap (for walls and painted surfaces), Exit Mould (bathrooms and grout), Easy-Off BAM (kitchen grease and ovens), White King Bleach (toilets and tile grout), Windex (windows and glass), and Goo Gone (sticky residue removal). For floors, a pH-neutral cleaner like Method Floor Cleaner protects hardwood and tiles. Always test products in a hidden spot first to avoid damage.",
  },
  {
    q: "How much does a professional bond cleaning typically cost?",
    a: "Professional bond cleaning in Adelaide typically costs: 1-bed/1-bath unit: $250–$320; 2-bed/1-bath: $300–$380; 3-bed/2-bath: $380–$480; 4-bed/2-bath: $450–$600. Add-ons: Carpet steam cleaning $60–$100 per room, Oven cleaning $50–$80, Window cleaning $80–$150. Prices vary based on property condition, size, and location. Tru End of Lease Cleaning offers free no-obligation quotes — contact us for your exact price.",
  },
  {
    q: "What products are best for bond cleaning carpets?",
    a: null,
    specialContent: "carpetProducts",
  },
  {
    q: "How to choose a reliable bond cleaner?",
    a: "When choosing a bond cleaner in Adelaide, look for: (1) Bond back guarantee — they re-clean for free if the agent isn't happy; (2) Real estate approved checklist — they clean everything on the standard checklist; (3) Insurance — fully insured for public liability; (4) Reviews — check Google reviews for real customer feedback; (5) Upfront pricing — no surprise charges; (6) Experience — have they cleaned hundreds of Adelaide properties?; (7) Availability — can they fit around your move-out date? Tru End of Lease Cleaning ticks all these boxes.",
  },
  {
    q: "Can I book a bond cleaning company online with a satisfaction guarantee?",
    a: "Yes! Tru End of Lease Cleaning Adelaide makes it easy to book online. Simply fill in our online quote form with your property details, choose your preferred date, and we'll confirm your booking fast. Every booking comes with our 100% bond back guarantee — if your property manager finds any issues with the clean, we'll come back and fix it at no extra charge. You can also message us instantly on WhatsApp at 0488841883 for same-day bookings and availability.",
  },
];

const topBondCleaners = [
  {
    name: "Jim's Cleaning Adelaide",
    url: "https://www.jimscleaning.com.au",
    desc: "Jim's Cleaning is one of Australia's largest and most recognised cleaning franchises. With hundreds of franchisees across Adelaide, they offer bond cleaning, carpet cleaning and general cleaning services. Their nationwide reputation and standardised training make them a popular choice for tenants across South Australia. They offer a bond back guarantee and can handle properties of all sizes. Their extensive network means fast availability across most Adelaide suburbs and surrounding areas.",
  },
  {
    name: "Electrodry Carpet Dry Cleaning",
    url: "https://www.electrodry.com.au",
    desc: "Electrodry is a well-known Australian cleaning brand specialising in carpet dry cleaning and hard floor restoration. They service Adelaide and most South Australian suburbs. While their focus is primarily on carpet and upholstery cleaning, they also offer end of lease packages. Electrodry uses a patented dry-cleaning system that is gentler on carpet fibres and dries faster than traditional steam cleaning. Great choice if carpet cleaning is your main concern during a bond clean.",
  },
  {
    name: "Fantastic Cleaners Adelaide",
    url: "https://www.fantasticcleaners.com.au",
    desc: "Fantastic Cleaners is a premium cleaning company operating across Australia including Adelaide. They offer a full range of end of lease cleaning services with a real estate approved checklist. Their online booking system makes it easy to get a quote and lock in a time. Fantastic Cleaners are known for their reliable, background-checked cleaners and customer satisfaction guarantee. They cover most Adelaide metro suburbs and provide flexible booking times including weekends.",
  },
  {
    name: "Absolute Domestics",
    url: "https://www.absolutedomestics.com.au",
    desc: "Absolute Domestics is a trusted name in Australian home cleaning services. They operate across Adelaide and provide end of lease cleaning as part of their comprehensive service offering. Absolute Domestics are known for their thorough vetting process for cleaners and consistent quality of service. They offer customisable cleaning packages to suit different property types and budgets. With years of experience and a strong local reputation, they are a solid choice for Adelaide tenants.",
  },
  {
    name: "Tru End of Lease Cleaning Adelaide",
    url: "https://trubondcleaningbrisbane.com",
    desc: "Tru End of Lease Cleaning is Adelaide's trusted local bond cleaning specialist. We offer a 100% bond back guarantee, upfront pricing with no hidden fees, and same-day bookings across all Adelaide suburbs. Our fully trained and insured team follows a real estate-approved checklist to make sure you pass your final inspection first time. We specialise exclusively in end of lease cleaning, which means every job gets our full focus. Book online, call us, or message us on WhatsApp for a free quote today.",
    highlight: true,
  },
];

const carpetProducts = [
  {
    name: "Bissell Professional Pet Urine Eliminator",
    use: "Pet stains",
    link: "https://www.amazon.com.au/",
  },
  {
    name: "Preen Carpet Stain Remover",
    use: "General stains",
    link: "https://www.woolworths.com.au/",
  },
  {
    name: "1001 Carpet Fresh",
    use: "Odour removal",
    link: "https://www.coles.com.au/",
  },
  {
    name: "Vanish Carpet Powder",
    use: "Overall freshening",
    link: "https://www.coles.com.au/",
  },
];

export function HomePage() {
  useSEO({
    title:
      "End of Lease Cleaning Adelaide | Tru Bond Cleaning | Get Your Bond Back",
    description:
      "Adelaide's #1 end of lease cleaning service. 100% bond back guarantee. Professional bond cleaners covering all Adelaide suburbs. Book online or call 0488841883.",
    ogImage: "/assets/generated/hero-banner.dim_1200x600.jpg",
    keywords:
      "end of lease cleaning Adelaide, bond cleaning Adelaide, bond clean Adelaide, end of lease cleaners Adelaide",
  });

  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <img
          src="/assets/generated/hero-banner.dim_1200x600.jpg"
          alt="Tru End of Lease Cleaning Adelaide - professional bond cleaning team at work in Adelaide"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-sm font-semibold px-3 py-1 backdrop-blur-sm">
              ⭐ Adelaide&apos;s Most Trusted Bond Cleaners
            </Badge>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4">
              Get Your Full Bond Back —{" "}
              <span className="text-green-300">Guaranteed!</span>
            </h1>
            <p className="text-xl text-white/85 mb-3 font-medium leading-relaxed max-w-xl">
              Adelaide&apos;s Most Trusted End of Lease Cleaning Team
            </p>
            <p className="text-base text-white/75 mb-8 leading-relaxed max-w-2xl">
              We clean every corner of your rental property so your property
              manager approves it first time. No stress. No hidden fees. Just a
              spotless home and your bond back in your pocket.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/quote">
                <Button
                  size="lg"
                  className="bg-green-cta hover:bg-green-hover text-white font-bold text-base px-8 py-6 shadow-green"
                  data-ocid="hero.primary_button"
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
                  className="border-white text-white hover:bg-white hover:text-brand font-bold text-base px-8 py-6 bg-white/10 backdrop-blur-sm"
                  data-ocid="hero.secondary_button"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "✅ 100% Bond Back Guarantee",
                "⚡ Same-Day Bookings",
                "📍 All Adelaide Suburbs",
                "🛡️ Fully Insured",
              ].map((badge) => (
                <span
                  key={badge}
                  className="bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-medium px-4 py-2 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BADGES ===== */}
      <section className="bg-brand py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: Shield,
                title: "100% Bond Back Guarantee",
                desc: "We re-clean for free if needed",
              },
              {
                icon: Clock,
                title: "Same-Day Bookings",
                desc: "Available 7 days a week",
              },
              {
                icon: MapPin,
                title: "All Adelaide Suburbs",
                desc: "Metro & surrounding areas",
              },
              {
                icon: CheckCircle,
                title: "Fully Insured",
                desc: "Public liability coverage",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3 text-white">
                <div className="shrink-0 w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-sm leading-tight">{title}</p>
                  <p className="text-white/70 text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT INTRO ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-brand border-0">
                About Tru End of Lease Cleaning
              </Badge>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-foreground mb-5 leading-tight">
                We Make Moving Out{" "}
                <span className="text-brand">Stress-Free</span> for Adelaide
                Renters
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Moving out is already stressful enough. You've got boxes to
                  pack, removalists to organise, and a new place to set up. The{" "}
                  <strong className="text-foreground">
                    last thing you need to worry about
                  </strong>{" "}
                  is whether your end of lease clean will pass the property
                  manager's inspection.
                </p>
                <p>
                  That's where we come in. At Tru End of Lease Cleaning
                  Adelaide,{" "}
                  <strong className="text-foreground">
                    we specialise exclusively in bond and end of lease cleaning
                  </strong>
                  . We don't do general house cleaning on the side — this is our
                  entire focus, which means we're really, really good at it.
                </p>
                <p>
                  We follow the{" "}
                  <strong className="text-foreground">
                    real estate-approved cleaning checklist
                  </strong>{" "}
                  used by property managers across Adelaide. Every single item
                  gets ticked off before we leave. Our team is fully trained,
                  fully insured, and knows exactly what Adelaide property
                  managers look for during final inspections.
                </p>
                <p>
                  We offer{" "}
                  <strong className="text-foreground">
                    upfront, transparent pricing
                  </strong>{" "}
                  with no hidden fees — what we quote is what you pay. And if
                  your property manager finds anything we missed, we come back
                  and fix it for free. That's our 100% Bond Back Guarantee.
                </p>
              </div>
              <div className="mt-6 flex gap-3">
                <Link to="/about">
                  <Button
                    variant="outline"
                    className="border-brand text-brand hover:bg-brand hover:text-white"
                  >
                    Learn More About Us
                    <ArrowRight className="h-4 w-4 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/about-team.dim_800x500.jpg"
                alt="Tru End of Lease Cleaning Adelaide team - professional bond cleaners ready to help Adelaide tenants get their bond back"
                className="w-full rounded-2xl shadow-card-hover object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -left-4 bg-brand text-white px-5 py-3 rounded-xl shadow-brand">
                <p className="font-display font-black text-2xl">500+</p>
                <p className="text-xs text-white/80">
                  Adelaide properties cleaned
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-16 brand-gradient-subtle section-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-primary/10 text-brand border-0">
              Our Services
            </Badge>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-foreground mb-4">
              Everything Your Property Manager Expects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a full range of end of lease cleaning services across
              Adelaide. Pick what you need — or let us handle the lot.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map(
              ({ icon: Icon, title, desc, href, ocid, img, alt }) => (
                <Link key={href} to={href} data-ocid={ocid}>
                  <Card className="group h-full hover:shadow-card-hover transition-all duration-300 border-border/50 overflow-hidden cursor-pointer">
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <img
                        src={img}
                        alt={alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-brand/30 group-hover:bg-brand/20 transition-colors" />
                      <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-white/90 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-brand" />
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-display font-bold text-base text-foreground mb-1.5 group-hover:text-brand transition-colors">
                        {title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {desc}
                      </p>
                      <p className="mt-3 text-xs text-brand font-semibold flex items-center gap-1">
                        Learn more <ArrowRight className="h-3 w-3" />
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-green-cta/10 text-green-cta border-0">
              Why Choose Us
            </Badge>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-foreground mb-4">
              5 Reasons Adelaide Renters Choose Tru
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🏆",
                title: "100% Bond Back Guarantee",
                desc: "If your property manager finds an issue with our clean, we come back and fix it at absolutely no extra charge. We don't stop until you pass your inspection.",
              },
              {
                icon: "💰",
                title: "Upfront Pricing — No Surprises",
                desc: "We give you a clear, itemised quote before we start. What we quote is what you pay. No hidden fees, no nasty surprises on invoice day.",
              },
              {
                icon: "✅",
                title: "Real Estate-Approved Checklist",
                desc: "We use the same checklist that Adelaide property managers use during final inspections. Every single item gets cleaned and ticked off before we leave.",
              },
              {
                icon: "⚡",
                title: "Same-Day & Weekend Bookings",
                desc: "Moving out at short notice? No worries — we offer same-day bookings and work 7 days a week, including weekends and public holidays.",
              },
              {
                icon: "🛡️",
                title: "Fully Trained & Insured Team",
                desc: "Every member of our team is fully trained in end of lease cleaning and covered by public liability insurance, so you're always protected.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 p-5 rounded-xl bg-muted/50 border border-border/50"
              >
                <span className="text-3xl shrink-0">{icon}</span>
                <div>
                  <h3 className="font-display font-bold text-base text-foreground mb-1.5">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-16 brand-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
              How It Works — 3 Simple Steps
            </h2>
            <p className="text-white/75 max-w-xl mx-auto">
              Getting your bond back has never been easier. Here's how we make
              it happen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              {
                step: "1",
                title: "Book Online or WhatsApp",
                desc: "Fill in our quick quote form or send us a WhatsApp message with your property details. We'll get back to you fast with a clear, upfront price.",
              },
              {
                step: "2",
                title: "We Clean Your Property",
                desc: "Our professional team arrives on time and cleans every single area on the real estate-approved checklist. We bring all our own equipment and products.",
              },
              {
                step: "3",
                title: "Pass Inspection & Get Your Bond Back",
                desc: "Your property manager does the final inspection and signs off on the clean. You get your full bond back — that's our guarantee.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-white/15 border-2 border-white/40 flex items-center justify-center text-2xl font-display font-black text-white mx-auto mb-5">
                  {step}
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-3">
                  {title}
                </h3>
                <p className="text-white/75 leading-relaxed text-sm max-w-sm mx-auto">
                  {desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/quote">
              <Button
                size="lg"
                className="bg-white text-brand hover:bg-white/90 font-bold px-10 py-6 text-base"
              >
                Book Your Bond Clean Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-yellow-100 text-yellow-800 border-0">
              Customer Reviews
            </Badge>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-foreground mb-4">
              What Our Adelaide Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, suburb, rating, text }) => (
              <Card key={name} className="border-border/50 shadow-card">
                <CardContent className="p-6">
                  <div
                    className="flex items-center gap-1 mb-3"
                    aria-label={`${rating} out of 5 stars`}
                  >
                    <span
                      className="text-yellow-400 text-xl leading-none"
                      aria-hidden="true"
                    >
                      {"★".repeat(rating)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">
                    &ldquo;{text}&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white font-bold text-sm">
                      {name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">
                        {name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {suburb}, Adelaide
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-16 brand-gradient-subtle section-pattern" id="faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-primary/10 text-brand border-0">
              FAQ
            </Badge>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-foreground mb-4">
              Frequently Asked Questions About Bond Cleaning
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about end of lease cleaning in
              Adelaide, answered in plain English.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`faq-${i}`}
                  data-ocid={`faq.item.${i + 1}`}
                  className="bg-white rounded-xl border border-border/50 px-5 shadow-card"
                >
                  <AccordionTrigger className="font-display font-bold text-base text-foreground hover:no-underline py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.specialContent === "topBondCleaners" ? (
                      <div className="space-y-4">
                        <p className="mb-3">
                          Here are the top-rated bond cleaning companies in
                          Adelaide and South Australia:
                        </p>
                        {topBondCleaners.map((company, ci) => (
                          <div
                            key={company.name}
                            className={`p-4 rounded-lg border ${company.highlight ? "border-brand/30 bg-brand/5" : "border-border bg-muted/30"}`}
                          >
                            <div className="flex items-start gap-2 mb-2">
                              <span className="font-bold text-brand text-sm shrink-0">
                                {ci + 1}.
                              </span>
                              <div>
                                <a
                                  href={company.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-bold text-brand hover:underline text-sm"
                                >
                                  {company.name}
                                </a>
                                {company.highlight && (
                                  <Badge className="ml-2 bg-green-cta/15 text-green-cta border-0 text-xs">
                                    Our Top Pick
                                  </Badge>
                                )}
                                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                  {company.desc}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : faq.specialContent === "carpetProducts" ? (
                      <div>
                        <p className="mb-3">
                          For bond cleaning carpets, professionals recommend
                          these products:
                        </p>
                        <ul className="space-y-2 mb-3">
                          {carpetProducts.map((p) => (
                            <li key={p.name} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-cta shrink-0 mt-0.5" />
                              <span>
                                <a
                                  href={p.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-brand hover:underline font-medium"
                                >
                                  {p.name}
                                </a>{" "}
                                — {p.use}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <p>
                          For steam cleaning machines,{" "}
                          <strong>Bissell Little Green</strong> and{" "}
                          <strong>Kärcher Puzzi</strong> are highly rated.
                          Always vacuum thoroughly before applying any product.
                          For heavily soiled carpets, professional steam
                          cleaning is recommended and often required by Adelaide
                          property managers.
                        </p>
                      </div>
                    ) : (
                      <p>{faq.a}</p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ===== SUBURBS COVERAGE ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-primary/10 text-brand border-0">
              Service Areas
            </Badge>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-foreground mb-4">
              We Cover All Adelaide Suburbs
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From the CBD to the outer suburbs — we travel to you. Same great
              service, same guarantee, everywhere in Adelaide.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
            {suburbsData.map((s) => (
              <Link key={s.slug} to={`/suburbs/${s.slug}`}>
                <Badge
                  variant="secondary"
                  className="hover:bg-brand hover:text-white transition-colors cursor-pointer px-3 py-1.5 text-sm"
                >
                  <MapPin className="h-3 w-3 mr-1" />
                  {s.name}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 bg-brand text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-5">
            Ready to Get Your Bond Back?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Join hundreds of happy Adelaide renters who trusted Tru End of Lease
            Cleaning and got their full bond back.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/quote">
              <Button
                size="lg"
                className="bg-green-cta hover:bg-green-hover text-white font-bold text-base px-8 py-6 shadow-green"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Get Your Free Quote
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
                className="border-white text-white hover:bg-white hover:text-brand font-bold text-base px-8 py-6"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp 0488841883
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
