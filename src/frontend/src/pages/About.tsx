import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "@tanstack/react-router";
import { CheckCircle, MessageCircle, Sparkles } from "lucide-react";

export function AboutPage() {
  useSEO({
    title: "About Tru End of Lease Cleaning Adelaide | Local Bond Cleaners",
    description:
      "Learn about Tru End of Lease Cleaning Adelaide — Adelaide's trusted local bond cleaning team. 100% bond back guarantee, insured, all suburbs covered.",
    ogImage: "/assets/generated/about-team.dim_800x500.jpg",
    keywords:
      "about Tru End of Lease Cleaning Adelaide, bond cleaning team Adelaide",
  });

  return (
    <div>
      {/* Page Hero */}
      <section className="brand-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            About Us
          </Badge>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
            About Tru End of Lease Cleaning Adelaide
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            We're Adelaide's local bond cleaning specialists. Our whole job is
            to help Adelaide renters get their full bond back — first time,
            every time.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display font-black text-3xl text-foreground mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At{" "}
                  <strong className="text-foreground">
                    Tru End of Lease Cleaning Adelaide
                  </strong>
                  , we do one thing and we do it exceptionally well — we clean
                  rental properties so Adelaide tenants can get their full bond
                  back.
                </p>
                <p>
                  We understand that moving out is one of the most stressful
                  things you'll do. You've got a million things to organise, and
                  the end of lease clean is the one thing that can make or break
                  your bond return. That's why we take it so seriously.
                </p>
                <p>
                  Our team has cleaned{" "}
                  <strong className="text-foreground">
                    hundreds of properties across Adelaide
                  </strong>{" "}
                  — from small studio apartments in the CBD to large family
                  homes in the outer suburbs. We know exactly what property
                  managers look for, and we make sure everything is done to
                  their standard.
                </p>

                <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">
                  Our Values
                </h3>
                <ul className="space-y-3">
                  {[
                    {
                      title: "Honesty",
                      desc: "We give you an upfront price and we stick to it. No nasty surprises on the day.",
                    },
                    {
                      title: "Quality",
                      desc: "We follow the real estate-approved checklist and don't leave until the job is done properly.",
                    },
                    {
                      title: "Reliability",
                      desc: "We show up on time, every time. You can count on us.",
                    },
                    {
                      title: "Customer focus",
                      desc: "Your bond is important to you, so it's important to us. We treat every property like it's our own.",
                    },
                  ].map(({ title, desc }) => (
                    <li key={title} className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-cta shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-foreground">{title}:</strong>{" "}
                        {desc}
                      </span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">
                  Our Team
                </h3>
                <p>
                  Every member of our cleaning team is{" "}
                  <strong className="text-foreground">
                    fully trained in end of lease cleaning standards
                  </strong>
                  . We don't hire just anyone — our team goes through a thorough
                  training process before they ever step foot in a client's
                  property.
                </p>
                <p>
                  We're also{" "}
                  <strong className="text-foreground">fully insured</strong>{" "}
                  with public liability coverage, so you're protected if
                  anything ever goes wrong. (It rarely does, but we believe in
                  being prepared.)
                </p>

                <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">
                  Our Guarantee
                </h3>
                <p>
                  We stand behind every clean we do. If your property manager
                  finds anything that doesn't meet their standard after we've
                  cleaned,{" "}
                  <strong className="text-foreground">
                    we come back and fix it for free
                  </strong>
                  . No arguments, no excuses — just results.
                </p>
                <p>
                  That's the Tru End of Lease Cleaning{" "}
                  <strong className="text-foreground">
                    100% Bond Back Guarantee
                  </strong>
                  . We're so confident in our work that we put our money where
                  our mouth is.
                </p>

                <h3 className="font-display font-bold text-xl text-foreground mt-6 mb-3">
                  Our Service Area
                </h3>
                <p>
                  We cover{" "}
                  <strong className="text-foreground">
                    all Adelaide suburbs
                  </strong>{" "}
                  — from North Adelaide to Morphett Vale, from Glenelg to Tea
                  Tree Gully. Whether you're in the inner city or the outer
                  northern suburbs, we come to you.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/quote">
                  <Button className="bg-green-cta hover:bg-green-hover text-white font-bold">
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
                    variant="outline"
                    className="border-brand text-brand hover:bg-brand hover:text-white"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <img
                src="/assets/generated/about-team.dim_800x500.jpg"
                alt="Tru End of Lease Cleaning Adelaide team - professional bond cleaners serving all Adelaide suburbs"
                className="w-full rounded-2xl shadow-card-hover object-cover"
                loading="lazy"
              />
              <img
                src="/assets/generated/bond-cleaning-checklist.dim_800x500.jpg"
                alt="Real estate approved bond cleaning checklist used by Tru End of Lease Cleaning Adelaide"
                className="w-full rounded-2xl shadow-card object-cover"
                loading="lazy"
              />

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "500+", label: "Properties Cleaned" },
                  { number: "100%", label: "Bond Back Guarantee" },
                  { number: "15+", label: "Adelaide Suburbs" },
                  { number: "7 Days", label: "A Week Available" },
                ].map(({ number, label }) => (
                  <div
                    key={label}
                    className="bg-brand/5 border border-brand/15 rounded-xl p-4 text-center"
                  >
                    <p className="font-display font-black text-2xl text-brand">
                      {number}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
