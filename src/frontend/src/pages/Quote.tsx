import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { suburbsData } from "@/data/suburbs";
import { useActor } from "@/hooks/useActor";
import { useSEO } from "@/hooks/useSEO";
import { CheckCircle, Loader2, MessageCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const extrasOptions = [
  { id: "oven", label: "Oven Cleaning (+$50–$80)" },
  { id: "windows", label: "Window Cleaning (+$80–$150)" },
  { id: "garage", label: "Garage Cleaning (+$60–$100)" },
  { id: "balcony", label: "Balcony Cleaning (+$40–$80)" },
];

export function QuotePage() {
  useSEO({
    title:
      "Get a Free Bond Cleaning Quote Adelaide | Tru End of Lease Cleaning",
    description:
      "Get a free, no-obligation bond cleaning quote in Adelaide. Tell us your property size and we'll give you an upfront price. No hidden fees.",
    keywords:
      "bond cleaning quote Adelaide, end of lease cleaning price Adelaide, free quote",
  });

  const { actor } = useActor();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    suburb: "",
    bedrooms: "",
    bathrooms: "",
    carpetCleaning: false,
    extras: [] as string[],
  });

  const handleChange = (field: keyof typeof form, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleExtrasChange = (id: string, checked: boolean) => {
    setForm((prev) => ({
      ...prev,
      extras: checked
        ? [...prev.extras, id]
        : prev.extras.filter((e) => e !== id),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.bedrooms ||
      !form.bathrooms
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);

    try {
      if (actor) {
        await actor.submitQuoteRequest(
          form.name,
          form.email,
          form.phone,
          form.suburb,
          BigInt(form.bedrooms),
          BigInt(form.bathrooms),
          form.carpetCleaning,
          form.extras,
        );
      }

      const extrasStr =
        form.extras.length > 0 ? form.extras.join(", ") : "None";
      const subject = encodeURIComponent(
        `Bond Clean Quote Request - ${form.name}`,
      );
      const body = encodeURIComponent(
        `QUOTE REQUEST\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSuburb: ${form.suburb}\nBedrooms: ${form.bedrooms}\nBathrooms: ${form.bathrooms}\nCarpet Steam Cleaning: ${form.carpetCleaning ? "Yes" : "No"}\nExtras: ${extrasStr}`,
      );
      const mailtoLink = `mailto:humptydumptybondcleaning@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      toast.success(
        "Your quote request is ready! Your email app should open shortly.",
      );
      setForm({
        name: "",
        email: "",
        phone: "",
        suburb: "",
        bedrooms: "",
        bathrooms: "",
        carpetCleaning: false,
        extras: [],
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
            Free Quote
          </Badge>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
            Get Your Free Bond Cleaning Quote
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Tell us about your property and we'll give you an upfront,
            no-obligation price. No hidden fees — ever.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                aria-label="Bond cleaning quote request form"
              >
                {/* Personal Details */}
                <div>
                  <h2 className="font-display font-bold text-xl text-foreground mb-4">
                    Your Details
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="quote-name" className="font-medium">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="quote-name"
                        placeholder="e.g. James Smith"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="quote-email" className="font-medium">
                        Email Address{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="quote-email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        autoComplete="email"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="quote-phone" className="font-medium">
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="quote-phone"
                        type="tel"
                        placeholder="e.g. 0412 345 678"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                        autoComplete="tel"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="quote-suburb" className="font-medium">
                        Suburb
                      </Label>
                      <Select
                        onValueChange={(v) => handleChange("suburb", v)}
                        value={form.suburb}
                      >
                        <SelectTrigger id="quote-suburb">
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
                </div>

                {/* Property Details */}
                <div>
                  <h2 className="font-display font-bold text-xl text-foreground mb-4">
                    Property Details
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="quote-bedrooms" className="font-medium">
                        Bedrooms <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        onValueChange={(v) => handleChange("bedrooms", v)}
                        value={form.bedrooms}
                      >
                        <SelectTrigger id="quote-bedrooms">
                          <SelectValue placeholder="How many?" />
                        </SelectTrigger>
                        <SelectContent>
                          {["1", "2", "3", "4", "5", "6+"].map((n) => (
                            <SelectItem key={n} value={n === "6+" ? "6" : n}>
                              {n} Bedroom{n !== "1" ? "s" : ""}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="quote-bathrooms" className="font-medium">
                        Bathrooms <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        onValueChange={(v) => handleChange("bathrooms", v)}
                        value={form.bathrooms}
                      >
                        <SelectTrigger id="quote-bathrooms">
                          <SelectValue placeholder="How many?" />
                        </SelectTrigger>
                        <SelectContent>
                          {["1", "2", "3", "4+"].map((n) => (
                            <SelectItem key={n} value={n === "4+" ? "4" : n}>
                              {n} Bathroom{n !== "1" ? "s" : ""}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Add-ons */}
                <div>
                  <h2 className="font-display font-bold text-xl text-foreground mb-4">
                    Add-On Services
                  </h2>
                  <div className="space-y-3">
                    {/* Carpet cleaning */}
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                      <Checkbox
                        id="carpet-cleaning"
                        checked={form.carpetCleaning}
                        onCheckedChange={(checked) =>
                          handleChange("carpetCleaning", checked === true)
                        }
                        data-ocid="quote.form.checkbox"
                      />
                      <Label
                        htmlFor="carpet-cleaning"
                        className="cursor-pointer font-medium"
                      >
                        Carpet Steam Cleaning{" "}
                        <span className="font-normal text-muted-foreground">
                          (+$60–$100 per room)
                        </span>
                      </Label>
                    </div>

                    {extrasOptions.map(({ id, label }) => (
                      <div
                        key={id}
                        className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors"
                      >
                        <Checkbox
                          id={`extra-${id}`}
                          checked={form.extras.includes(id)}
                          onCheckedChange={(checked) =>
                            handleExtrasChange(id, checked === true)
                          }
                        />
                        <Label
                          htmlFor={`extra-${id}`}
                          className="cursor-pointer font-medium"
                        >
                          {label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-green-cta hover:bg-green-hover text-white font-bold py-6 text-base"
                  disabled={isSubmitting}
                  data-ocid="quote.form.submit_button"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5 mr-2" />
                      Get My Free Quote
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Submitting opens your email app with your quote details
                  pre-filled. No obligation — just an upfront price.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Pricing guide */}
              <Card className="border-brand/20 bg-brand/5">
                <CardContent className="p-5">
                  <h3 className="font-display font-bold text-base text-foreground mb-3">
                    Pricing Guide
                  </h3>
                  <div className="space-y-2 text-sm">
                    {[
                      ["1 Bed / 1 Bath", "$250–$320"],
                      ["2 Bed / 1 Bath", "$300–$380"],
                      ["3 Bed / 2 Bath", "$380–$480"],
                      ["4 Bed / 2 Bath", "$450–$600"],
                    ].map(([size, price]) => (
                      <div
                        key={size}
                        className="flex justify-between items-center py-1.5 border-b border-border/30 last:border-0"
                      >
                        <span className="text-muted-foreground">{size}</span>
                        <span className="font-bold text-brand">{price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    * Add-ons are charged separately. Final price depends on
                    property condition.
                  </p>
                </CardContent>
              </Card>

              {/* Guarantee */}
              <Card className="border-green-cta/30 bg-green-cta/5">
                <CardContent className="p-5">
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    🏆 Our Guarantee
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every booking comes with our{" "}
                    <strong className="text-foreground">
                      100% Bond Back Guarantee
                    </strong>
                    . If your property manager isn't happy, we come back and fix
                    it for free.
                  </p>
                </CardContent>
              </Card>

              {/* WhatsApp */}
              <Card className="border-border/50">
                <CardContent className="p-5">
                  <h3 className="font-display font-bold text-base text-foreground mb-3">
                    Prefer to Chat?
                  </h3>
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

              {/* What's included */}
              <Card className="border-border/50">
                <CardContent className="p-5">
                  <h3 className="font-display font-bold text-base text-foreground mb-3">
                    What&apos;s Always Included
                  </h3>
                  <ul className="space-y-1.5">
                    {[
                      "All rooms cleaned",
                      "Kitchen (benches, cupboards)",
                      "Bathrooms & toilets",
                      "Floors (vacuumed & mopped)",
                      "Skirting boards & light switches",
                      "Fans & light fittings",
                      "Windows (inside)",
                      "Cupboards (inside & out)",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-3.5 w-3.5 text-green-cta shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
