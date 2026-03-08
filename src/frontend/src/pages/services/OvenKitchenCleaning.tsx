import { useSEO } from "@/hooks/useSEO";
import { ServiceTemplate } from "./ServiceTemplate";

export function OvenKitchenCleaningPage() {
  useSEO({
    title: "Oven & Kitchen Cleaning Adelaide | Deep Clean Specialists | Tru",
    description:
      "Professional oven and kitchen cleaning in Adelaide for bond and end of lease. We remove baked-on grease, clean rangehood, stovetop and benches. Book today.",
    ogImage: "/assets/generated/service-kitchen-cleaning.dim_800x500.jpg",
    keywords:
      "oven cleaning Adelaide, kitchen cleaning Adelaide, deep clean oven Adelaide bond",
  });

  return (
    <ServiceTemplate
      data={{
        title: "Oven & Kitchen Cleaning",
        metaTitle:
          "Oven & Kitchen Cleaning Adelaide | Deep Clean Specialists | Tru",
        metaDescription:
          "Professional oven and kitchen cleaning in Adelaide for bond and end of lease. We remove baked-on grease, clean rangehood, stovetop and benches. Book today.",
        h1: "Oven & Kitchen Deep Cleaning Adelaide",
        tagline:
          "The kitchen is the number one area property managers check. We deep-clean every inch — oven, rangehood, stovetop, benches, and more.",
        intro:
          "The kitchen is the hardest room to clean at the end of a tenancy, and the one that property managers pay the most attention to. Baked-on oven grime, greasy rangehoods, splattered stovetops, and dirty cupboards are the most common reasons bond deductions happen in Adelaide. At Tru End of Lease Cleaning Adelaide, our kitchen and oven cleaning service tackles the toughest grease and grime using professional products and techniques that simply aren't available over the counter.",
        image: "/assets/generated/service-kitchen-cleaning.dim_800x500.jpg",
        imageAlt:
          "Tru End of Lease Cleaning Adelaide - professional oven and kitchen deep cleaning service for bond and end of lease",
        sections: [
          {
            heading: "What We Clean in the Kitchen",
            content:
              "We clean everything in your kitchen from top to bottom. The oven gets completely disassembled — we remove the racks, door seals, and grill element tray and clean each component individually using professional degreasers. The oven cavity, door glass, and seals are cleaned until the oven looks near-new. The rangehood gets its filters soaked and scrubbed to remove built-up grease. The stovetop, including burner caps and grates on gas stovetops, gets thoroughly degreased. Benches, splashbacks, and the sink are cleaned and polished. All cupboards are cleaned inside and out, including shelves, doors, and handles. We even clean the top of overhead cupboards — an area often missed.",
          },
          {
            heading: "Why Oven Cleaning Is Critical for Bond",
            content:
              "The oven is almost always the dirtiest thing in a rental property at the end of a lease. Even tenants who are generally clean often neglect the oven because it's time-consuming and difficult to clean without professional products. Property managers across Adelaide routinely deduct $80–$150 from bonds specifically for oven cleaning if it hasn't been done to a professional standard. Our oven cleaning service costs $50–$80 as an add-on to your bond clean — which is less than you'd lose from your bond. It's always worth it.",
          },
          {
            heading: "Professional Products and Equipment",
            content:
              "We use commercial-grade degreasing products that break down years of baked-on grease and carbon deposits that household cleaners can't touch. Our caustic-free solutions are strong enough to tackle serious grime but won't damage stainless steel, enamel, or glass surfaces. We bring all our own equipment including scrapers, specialist cleaning brushes, microfibre cloths, and protective gear. You don't need to provide anything — we've got everything covered.",
          },
          {
            heading: "The Tru Kitchen Cleaning Standard",
            content:
              "When we finish your kitchen, it should be as close to its condition when you first moved in as physically possible. We work to the standard that Adelaide property managers expect, which means every grease splatter is gone, every shelf is wiped, every handle is clean, and the oven passes the 'white cloth test' that property managers use to check for grease and grime. If it doesn't meet that standard, we clean it again — no questions asked.",
          },
          {
            heading: "Pricing for Kitchen and Oven Cleaning",
            content:
              "Kitchen deep cleaning is included in our full end of lease cleaning package. If you only need oven cleaning as a separate service, it starts at $50 for a standard oven. Full kitchen clean as a standalone service is priced based on the kitchen size and condition. Booking kitchen cleaning as part of a full bond clean package gives you the best value. Get a free, upfront quote today.",
          },
        ],
        included: [
          "Oven (inside, racks, glass door)",
          "Rangehood & filters",
          "Stovetop & burner caps",
          "Benches & splashback",
          "Sink & taps",
          "Cupboards (inside & out)",
          "Microwave (inside & out)",
          "Dishwasher (inside & filter)",
          "Top of overhead cupboards",
        ],
        pricingItems: [
          { label: "Oven only", price: "$50–$80" },
          { label: "Kitchen (part of bond clean)", price: "Included" },
          { label: "Kitchen standalone", price: "$120–$200" },
        ],
        relatedServices: [
          {
            label: "End of Lease Cleaning",
            href: "/services/end-of-lease-cleaning",
          },
          {
            label: "Bathroom & Toilet Cleaning",
            href: "/services/bathroom-toilet-cleaning",
          },
          { label: "Window Cleaning", href: "/services/window-cleaning" },
        ],
      }}
    />
  );
}
