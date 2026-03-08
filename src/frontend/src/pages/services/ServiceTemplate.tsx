import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, MessageCircle, Sparkles } from "lucide-react";

export interface ServicePageData {
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  intro: string;
  image: string;
  imageAlt: string;
  sections: ServiceSection[];
  included: string[];
  pricingItems: { label: string; price: string }[];
  relatedServices: { label: string; href: string }[];
  faqs?: { q: string; a: string }[];
}

interface ServiceSection {
  heading: string;
  content: string;
}

interface ServiceTemplateProps {
  data: ServicePageData;
}

export function ServiceTemplate({ data }: ServiceTemplateProps) {
  return (
    <div>
      {/* Hero */}
      <section className="brand-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            {data.title}
          </Badge>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mb-4 max-w-3xl">
            {data.h1}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mb-8">{data.tagline}</p>
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
              <div>
                <img
                  src={data.image}
                  alt={data.imageAlt}
                  className="w-full rounded-2xl shadow-card-hover object-cover aspect-[16/9] mb-8"
                  loading="lazy"
                />
                <p className="text-muted-foreground leading-relaxed text-base mb-6">
                  {data.intro}
                </p>
              </div>

              {data.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="font-display font-bold text-2xl text-foreground mb-3">
                    {section.heading}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* What's included */}
              <Card className="border-brand/20">
                <CardContent className="p-5">
                  <h3 className="font-display font-bold text-base text-foreground mb-3">
                    ✅ What&apos;s Included
                  </h3>
                  <ul className="space-y-2">
                    {data.included.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-green-cta shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Pricing */}
              <Card className="border-green-cta/20 bg-green-cta/5">
                <CardContent className="p-5">
                  <h3 className="font-display font-bold text-base text-foreground mb-3">
                    💰 Pricing Guide
                  </h3>
                  <div className="space-y-2">
                    {data.pricingItems.map(({ label, price }) => (
                      <div
                        key={label}
                        className="flex justify-between text-sm py-1.5 border-b border-border/30 last:border-0"
                      >
                        <span className="text-muted-foreground">{label}</span>
                        <span className="font-bold text-brand">{price}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/quote">
                    <Button className="w-full mt-4 bg-green-cta hover:bg-green-hover text-white font-bold text-sm">
                      Get Exact Quote
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Guarantee */}
              <Card className="border-brand/20 bg-brand/5">
                <CardContent className="p-5">
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    🏆 100% Bond Back Guarantee
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Not happy with the result? We come back and fix it at no
                    extra charge. Your bond is guaranteed.
                  </p>
                </CardContent>
              </Card>

              {/* WhatsApp */}
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="w-full font-bold text-white"
                  size="lg"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp 0488841883
                </Button>
              </a>

              {/* Related services */}
              {data.relatedServices.length > 0 && (
                <Card className="border-border/50">
                  <CardContent className="p-5">
                    <h3 className="font-display font-bold text-sm text-muted-foreground uppercase tracking-wide mb-3">
                      Related Services
                    </h3>
                    <ul className="space-y-1.5">
                      {data.relatedServices.map(({ label, href }) => (
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
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
