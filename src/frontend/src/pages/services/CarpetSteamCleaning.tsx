import { useSEO } from "@/hooks/useSEO";
import { ServiceTemplate } from "./ServiceTemplate";

export function CarpetSteamCleaningPage() {
  useSEO({
    title: "Carpet Steam Cleaning Adelaide | Remove Stains & Odours | Tru",
    description:
      "Professional carpet steam cleaning in Adelaide. Remove tough stains, pet odours and built-up dirt. Hot water extraction method. Book with your bond clean.",
    ogImage: "/assets/generated/service-carpet-cleaning.dim_800x500.jpg",
    keywords:
      "carpet steam cleaning Adelaide, carpet cleaning Adelaide, bond clean carpet Adelaide",
  });

  return (
    <ServiceTemplate
      data={{
        title: "Carpet Steam Cleaning",
        metaTitle:
          "Carpet Steam Cleaning Adelaide | Remove Stains & Odours | Tru",
        metaDescription:
          "Professional carpet steam cleaning in Adelaide. Remove tough stains, pet odours and built-up dirt. Hot water extraction method. Book with your bond clean.",
        h1: "Carpet Steam Cleaning Adelaide — Stains Out, Bond Back",
        tagline:
          "We remove stains, pet odours, and years of built-up dirt from your carpets using professional hot water extraction. Many Adelaide property managers require it.",
        intro:
          "Carpets are one of the first things a property manager checks during a final inspection. Over a tenancy, carpets accumulate dirt, stains, pet hair, food spills, and odours that regular vacuuming simply can't remove. Most Adelaide property managers require tenants to have carpets professionally steam cleaned at the end of their lease — and they'll often ask for a receipt to prove it. At Tru End of Lease Cleaning Adelaide, we offer professional carpet steam cleaning as a standalone service or as an add-on to your bond clean.",
        image: "/assets/generated/service-carpet-cleaning.dim_800x500.jpg",
        imageAlt:
          "Tru End of Lease Cleaning Adelaide - professional carpet steam cleaning service removing stains and odours for bond clean",
        sections: [
          {
            heading: "How Carpet Steam Cleaning Works",
            content:
              "We use the hot water extraction method — the same method used by professional cleaners worldwide and the one most highly recommended by carpet manufacturers. First, we pre-treat any visible stains and high-traffic areas with specialised cleaning solutions. Then we use our professional-grade hot water extraction machine to inject hot water and cleaning solution deep into the carpet fibres, then immediately extract it along with all the loosened dirt, dust, allergens, and grime. The result is carpets that look, feel, and smell fresh. Drying time is typically 4–6 hours depending on ventilation.",
          },
          {
            heading: "We Tackle Tough Stains and Pet Odours",
            content:
              "Pet stains and odours are among the trickiest carpet problems. Standard cleaning products can mask odours temporarily, but they don't eliminate the source. We use enzyme-based cleaners that break down pet urine and waste at a molecular level, permanently eliminating odours rather than covering them up. For common stains like red wine, coffee, tomato sauce, and mud, we pre-treat with targeted stain removers before the steam clean. While we can dramatically improve most stains, we'll always let you know upfront if a stain is permanent so there are no surprises.",
          },
          {
            heading: "Is Carpet Steam Cleaning Required for Bond?",
            content:
              "In most Adelaide tenancies, your lease agreement will have a clause requiring professional carpet cleaning at the end of your tenancy. Even if your lease doesn't specify it, if the carpets are visibly stained or soiled, your property manager can deduct from your bond to have them cleaned. The safest approach is to always get a professional carpet steam clean as part of your bond clean. It's a relatively small investment compared to the bond amount you could lose. We provide a receipt that you can give to your property manager as proof of professional cleaning.",
          },
          {
            heading: "Which Areas Do We Cover?",
            content:
              "We provide carpet steam cleaning across all Adelaide suburbs — from the CBD to Morphett Vale, from Glenelg to Tea Tree Gully. We service all types of properties including apartments, townhouses, and large family homes. We can clean all carpet types including cut pile, loop pile, berber, and wool blends. We're familiar with the specific carpet cleaning requirements of Adelaide property managers and real estate agents.",
          },
          {
            heading: "Pricing for Carpet Steam Cleaning in Adelaide",
            content:
              "Carpet steam cleaning is priced per room. A standard room (up to 15 square metres) is $60–$100. Hallways, stairs, and oversized rooms may attract a slightly higher price. When you book carpet cleaning as part of your end of lease package, you get a discounted rate. All prices are quoted upfront with no hidden fees. Get in touch for your exact quote.",
          },
        ],
        included: [
          "Pre-treatment of stains",
          "Hot water extraction (steam clean)",
          "Pet stain & odour treatment",
          "All carpet types covered",
          "Professional receipt provided",
          "All rooms, hallways & stairs",
          "Rapid drying technique",
          "Bond back guarantee on clean",
        ],
        pricingItems: [
          { label: "Per room (up to 15m²)", price: "$60–$100" },
          { label: "Hallway / stairs", price: "$40–$70" },
          { label: "Full house + bond clean", price: "Ask for package deal" },
        ],
        relatedServices: [
          {
            label: "End of Lease Cleaning",
            href: "/services/end-of-lease-cleaning",
          },
          { label: "Bond Cleaning", href: "/services/bond-cleaning" },
          {
            label: "Bathroom & Toilet Cleaning",
            href: "/services/bathroom-toilet-cleaning",
          },
        ],
      }}
    />
  );
}
