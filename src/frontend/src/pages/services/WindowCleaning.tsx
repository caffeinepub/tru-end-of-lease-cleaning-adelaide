import { useSEO } from "@/hooks/useSEO";
import { ServiceTemplate } from "./ServiceTemplate";

export function WindowCleaningPage() {
  useSEO({
    title: "Window Cleaning Adelaide | Streak-Free Results | Tru End of Lease",
    description:
      "Professional window cleaning in Adelaide as part of your end of lease clean. Streak-free results, inside windows included. Add on to your bond clean today.",
    ogImage: "/assets/generated/service-window-cleaning.dim_800x500.jpg",
    keywords:
      "window cleaning Adelaide, end of lease window cleaning Adelaide, streak free windows",
  });

  return (
    <ServiceTemplate
      data={{
        title: "Window Cleaning",
        metaTitle:
          "Window Cleaning Adelaide | Streak-Free Results | Tru End of Lease",
        metaDescription:
          "Professional window cleaning in Adelaide as part of your end of lease clean. Streak-free results, inside windows included. Add on to your bond clean today.",
        h1: "Window Cleaning Adelaide — Streak-Free, Every Time",
        tagline:
          "Clean, clear windows make your property shine at the final inspection. We deliver streak-free results on every pane, inside and out.",
        intro:
          "Clean windows are one of the things that make a big difference to how a property looks and feels at the final inspection. Dirty, streaky, or grimy windows stand out immediately — and they're one of the items specifically listed on the end of lease inspection checklist used by Adelaide property managers. At Tru End of Lease Cleaning Adelaide, we clean every window to a streak-free, crystal-clear standard using professional squeegees, microfibre cloths, and specialist glass cleaning solutions.",
        image: "/assets/generated/service-window-cleaning.dim_800x500.jpg",
        imageAlt:
          "Tru End of Lease Cleaning Adelaide - professional streak-free window cleaning service for end of lease bond clean",
        sections: [
          {
            heading: "What Our Window Cleaning Includes",
            content:
              "Our window cleaning service covers all accessible windows inside the property. We clean the glass panes on both sides (inside and reachable outside), the window frames and tracks, the sills, and any flyscreen frames. We remove built-up grime, fingerprints, water marks, paint spots, and dust from every surface. For sliding windows and doors, we also clean the tracks which accumulate significant dirt and grime over a tenancy. We use a professional squeegee technique that leaves zero streaks — no smears, no lint, no marks.",
          },
          {
            heading: "Why Window Cleaning Matters for Your Bond",
            content:
              "It's easy to overlook windows when you're deep in the stress of moving out, but property managers notice them straight away. A property with clean, bright windows instantly makes a better impression — and creates less opportunity for deductions. In Adelaide's bright climate, dirty windows are especially obvious when sunlight hits them at angle. The inside of windows accumulates fingerprints, dust, pet nose prints, and condensation marks over the course of a tenancy, and these need to be cleaned before you hand back the keys.",
          },
          {
            heading: "Window Tracks and Frames",
            content:
              "The window track is one of the messiest parts of a property to clean and one that property managers frequently check. Dirt, dead insects, dust, and grime accumulate in window tracks over months and years. We vacuum out loose debris and then use specialised tools to clean every part of the track channel until it's clean. Window frames, particularly around flyscreen clips and locking mechanisms, also get a thorough wipe-down. These details make the difference between a pass and a fail on your final inspection.",
          },
          {
            heading: "Inside vs Outside Window Cleaning",
            content:
              "For end of lease purposes, the inside windows are the most critical. All our end of lease packages include inside window cleaning as standard. Outside windows on ground-floor and lower-level properties are also included. For upper-floor exterior windows, we include what's safely accessible from the ground or internal areas. We don't do high-risk work from ladders without proper safety equipment. If your property has high exterior windows that need cleaning, let us know and we'll discuss the best approach.",
          },
          {
            heading: "Pricing for Window Cleaning in Adelaide",
            content:
              "Window cleaning is included as part of our full end of lease cleaning packages. As a standalone service or add-on, window cleaning starts at $80 for small apartments and $150 for larger homes with multiple windows. Pricing depends on the number of windows and their size. We always give you a clear, upfront price before we start — no surprises.",
          },
        ],
        included: [
          "All internal window glass (streak-free)",
          "Ground floor external windows",
          "Window frames & sills",
          "Window tracks (vacuumed & cleaned)",
          "Flyscreen frames",
          "Sliding door glass & tracks",
          "Bi-fold & French door glass",
        ],
        pricingItems: [
          { label: "Apartment / small unit", price: "$80–$120" },
          { label: "3-bed home", price: "$120–$180" },
          { label: "As add-on to bond clean", price: "From $80" },
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
