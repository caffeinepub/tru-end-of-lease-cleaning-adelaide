import { useSEO } from "@/hooks/useSEO";
import { ServiceTemplate } from "./ServiceTemplate";

export function BathroomToiletCleaningPage() {
  useSEO({
    title:
      "Bathroom & Toilet Cleaning Adelaide | Deep Clean | Tru Bond Cleaning",
    description:
      "Deep bathroom and toilet cleaning in Adelaide for end of lease. We scrub tiles, grout, shower screens, vanity and toilet. Book your bond clean today.",
    ogImage: "/assets/generated/service-bathroom-cleaning.dim_800x500.jpg",
    keywords:
      "bathroom cleaning Adelaide, toilet cleaning Adelaide, end of lease bathroom clean",
  });

  return (
    <ServiceTemplate
      data={{
        title: "Bathroom & Toilet Cleaning",
        metaTitle:
          "Bathroom & Toilet Cleaning Adelaide | Deep Clean | Tru Bond Cleaning",
        metaDescription:
          "Deep bathroom and toilet cleaning in Adelaide for end of lease. We scrub tiles, grout, shower screens, vanity and toilet. Book your bond clean today.",
        h1: "Deep Bathroom & Toilet Cleaning Adelaide",
        tagline:
          "We scrub tiles, grout, shower screens, vanity, and toilets until they're spotless. Bathrooms are always passed at our standard.",
        intro:
          "Bathrooms are one of the most closely inspected areas during an end of lease inspection in Adelaide. They accumulate soap scum, lime scale, mould, mildew, and grime that builds up over time and is very difficult to remove without professional products and techniques. The shower screen alone can take significant effort to bring back to a clean standard. At Tru End of Lease Cleaning Adelaide, our bathroom cleaning team tackles even the most challenging bathrooms with professional-grade products and thorough technique.",
        image: "/assets/generated/service-bathroom-cleaning.dim_800x500.jpg",
        imageAlt:
          "Tru End of Lease Cleaning Adelaide - professional bathroom and toilet deep cleaning service for bond return",
        sections: [
          {
            heading: "What We Clean in Your Bathroom",
            content:
              "We clean every surface of every bathroom in your property. The shower and bath get a full scrub — including the shower screen (which we treat for soap scum and hard water deposits), shower walls and floor tiles, the showerhead, taps and fittings, and the bath itself if applicable. The toilet gets a complete clean inside and out — bowl, under the rim, the seat, the lid, the cistern, and the exterior. The vanity gets its basin scrubbed, the mirror cleaned to streak-free, and the cupboards wiped inside and out. Tiles and grout across the entire bathroom get scrubbed using appropriate products. We also clean the bathroom exhaust fan.",
          },
          {
            heading: "Shower Screens — Adelaide's Toughest Clean",
            content:
              "Adelaide's hard water creates significant calcium and mineral build-up on shower screens over time. This shows up as white haze and scale deposits that regular cleaning can't shift. We use professional limescale removers specifically formulated for glass surfaces that dissolve mineral deposits without scratching the glass. In most cases we can restore a heavily scaled shower screen to a clear, clean state. However, if the glass has been physically scratched or etched from years of abrasive cleaning, that damage cannot be reversed — we'll let you know upfront if that's the case.",
          },
          {
            heading: "Tile and Grout Cleaning",
            content:
              "Grout is porous and absorbs dirt, mould, and soap residue over time. Dirty, dark grout is one of the most common reasons property managers are unhappy with a bathroom clean. We use specialist tile and grout cleaners along with stiff-bristle brushes to clean grout lines throughout the bathroom. In most cases we can restore grout to a significantly lighter, cleaner colour. For severe mould penetration deep in the grout, we use mould-kill products that eliminate the mould rather than just cleaning the surface.",
          },
          {
            heading: "Mould Removal in Bathrooms",
            content:
              "Mould is common in Adelaide bathrooms, particularly around the shower recess and on silicone seals around the bath and shower base. We treat mould with professional mould-kill products that destroy mould at the root, not just at the surface. After treatment, we physically scrub the affected areas clean. Note that if silicone seals have been stained black by mould for an extended period, the staining may be permanent. In this case, re-sealing is required — which is a landlord responsibility due to normal wear and tear.",
          },
          {
            heading: "Pricing for Bathroom Cleaning in Adelaide",
            content:
              "Bathroom cleaning is included as part of our full end of lease cleaning packages. As a standalone service, a standard bathroom deep clean starts from $80. Ensuites and powder rooms are typically $50–$70 as standalone. When you book bathroom cleaning as part of a full bond clean, you get the best value — and the peace of mind of our 100% Bond Back Guarantee covering the entire property.",
          },
        ],
        included: [
          "Shower & bath scrubbed",
          "Shower screen (soap scum & scale)",
          "Tiles & grout throughout",
          "Toilet (bowl, seat, cistern, exterior)",
          "Vanity basin, mirror, cabinets",
          "Taps & fittings polished",
          "Exhaust fan cleaned",
          "Floors mopped",
          "Mould treatment",
          "Towel rails & accessories wiped",
        ],
        pricingItems: [
          { label: "Per bathroom (standalone)", price: "$80–$120" },
          { label: "Ensuite (standalone)", price: "$50–$70" },
          { label: "Part of full bond clean", price: "Included" },
        ],
        relatedServices: [
          {
            label: "End of Lease Cleaning",
            href: "/services/end-of-lease-cleaning",
          },
          { label: "Bond Cleaning", href: "/services/bond-cleaning" },
          {
            label: "Oven & Kitchen Cleaning",
            href: "/services/oven-kitchen-cleaning",
          },
        ],
      }}
    />
  );
}
