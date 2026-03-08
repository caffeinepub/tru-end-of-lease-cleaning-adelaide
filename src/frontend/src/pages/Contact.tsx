import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { suburbsData } from "@/data/suburbs";
import { useActor } from "@/hooks/useActor";
import { useSEO } from "@/hooks/useSEO";
import { CheckCircle, Loader2, MessageCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const serviceTypes = [
  "End of Lease Cleaning",
  "Bond Cleaning",
  "Carpet Steam Cleaning",
  "Oven & Kitchen Cleaning",
  "Window Cleaning",
  "Bathroom & Toilet Cleaning",
  "Garage & Outdoor Cleaning",
  "Full Package (Multiple Services)",
];

export function ContactPage() {
  useSEO({
    title: "Contact Tru End of Lease Cleaning Adelaide | Free Quote | WhatsApp",
    description:
      "Contact Tru End of Lease Cleaning Adelaide for a free quote. WhatsApp 0488841883 or fill in our online form. Fast response, same-day bookings available.",
    keywords:
      "contact end of lease cleaning Adelaide, bond cleaning quote Adelaide",
  });

  const { actor } = useActor();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    suburb: "",
    serviceType: "",
    message: "",
  });

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.serviceType) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);

    try {
      // Submit to backend
      if (actor) {
        await actor.submitContactForm(
          form.name,
          form.email,
          form.phone,
          form.suburb,
          form.serviceType,
          form.message,
        );
      }

      // Open mailto link — email comes FROM the customer
      const subject = encodeURIComponent(`Bond Clean Enquiry - ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSuburb: ${form.suburb}\nService: ${form.serviceType}\nMessage: ${form.message}`,
      );
      const mailtoLink = `mailto:humptydumptybondcleaning@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      toast.success(
        "Your enquiry is ready to send! Your email client should open shortly.",
      );
      setForm({
        name: "",
        email: "",
        phone: "",
        suburb: "",
        serviceType: "",
        message: "",
      });
    } catch {
      toast.error("Something went wrong. Please try WhatsApp instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="brand-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            Contact Us
          </Badge>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
            Get in Touch — We&apos;re Ready to Help
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Need a quote or have a question? Send us a message and we'll get
            back to you fast. Or jump straight on WhatsApp for instant help.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                Send Us a Message
              </h2>
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                aria-label="Contact form for Tru End of Lease Cleaning Adelaide"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-name" className="font-medium">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="contact-name"
                      placeholder="e.g. Sarah Johnson"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      autoComplete="name"
                      data-ocid="contact.form.input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-email" className="font-medium">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-phone" className="font-medium">
                      Phone Number <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      placeholder="e.g. 0412 345 678"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                      autoComplete="tel"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-suburb" className="font-medium">
                      Suburb
                    </Label>
                    <Select
                      onValueChange={(v) => handleChange("suburb", v)}
                      value={form.suburb}
                    >
                      <SelectTrigger id="contact-suburb">
                        <SelectValue placeholder="Select your suburb" />
                      </SelectTrigger>
                      <SelectContent>
                        {suburbsData.map((s) => (
                          <SelectItem key={s.slug} value={s.name}>
                            {s.name}
                          </SelectItem>
                        ))}
                        <SelectItem value="Other Adelaide Suburb">
                          Other Adelaide Suburb
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="contact-service" className="font-medium">
                    Service Type <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    onValueChange={(v) => handleChange("serviceType", v)}
                    value={form.serviceType}
                    required
                  >
                    <SelectTrigger id="contact-service">
                      <SelectValue placeholder="What service do you need?" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="contact-message" className="font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell us about your property — number of bedrooms, any special requirements, your move-out date..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-green-cta hover:bg-green-hover text-white font-bold"
                  disabled={isSubmitting}
                  data-ocid="contact.form.submit_button"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Your message will open in your email app, ready to send. We
                  respond within 2 hours during business hours.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* WhatsApp CTA */}
              <Card className="border-2 border-green-cta/30 bg-green-cta/5">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#25D366" }}
                    >
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-base text-foreground">
                        WhatsApp Us
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Fastest way to reach us
                      </p>
                    </div>
                  </div>
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
                      Message on WhatsApp
                    </Button>
                  </a>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    0488 841 883
                  </p>
                </CardContent>
              </Card>

              {/* Why contact us */}
              <Card className="border-border/50">
                <CardContent className="p-5">
                  <h3 className="font-display font-bold text-base text-foreground mb-3">
                    What Happens Next?
                  </h3>
                  <ul className="space-y-2.5">
                    {[
                      "We review your enquiry within 2 hours",
                      "We send you an upfront quote — no hidden fees",
                      "You confirm your booking",
                      "We show up and do an amazing job",
                      "You pass your inspection and get your bond back!",
                    ].map((step) => (
                      <li
                        key={step}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-green-cta shrink-0 mt-0.5" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="border-border/50">
                <CardContent className="p-5">
                  <h3 className="font-display font-bold text-base text-foreground mb-3">
                    Our Hours
                  </h3>
                  <div className="space-y-1.5 text-sm text-muted-foreground">
                    {[
                      ["Monday – Friday", "7am – 7pm"],
                      ["Saturday", "7am – 6pm"],
                      ["Sunday", "8am – 5pm"],
                    ].map(([day, hours]) => (
                      <div key={day} className="flex justify-between">
                        <span className="font-medium text-foreground">
                          {day}
                        </span>
                        <span>{hours}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Same-day bookings available on all days — just WhatsApp us!
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
