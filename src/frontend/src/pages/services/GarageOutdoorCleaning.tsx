import { useSEO } from "@/hooks/useSEO";
import { ServiceTemplate } from "./ServiceTemplate";

export function GarageOutdoorCleaningPage() {
  useSEO({
    title: "Garage & Outdoor Area Cleaning Adelaide | End of Lease | Tru",
    description:
      "Professional garage and outdoor area cleaning in Adelaide for end of lease. Sweep, mop, pressure wash. All property types covered. Get a free quote now.",
    ogImage: "/assets/generated/hero-banner.dim_1200x600.jpg",
    keywords:
      "garage cleaning Adelaide, outdoor cleaning Adelaide, end of lease garage clean",
  });

  return (
    <ServiceTemplate
      data={{
        title: "Garage & Outdoor Cleaning",
        metaTitle:
          "Garage & Outdoor Area Cleaning Adelaide | End of Lease | Tru",
        metaDescription:
          "Professional garage and outdoor area cleaning in Adelaide for end of lease. Sweep, mop, pressure wash. All property types covered. Get a free quote now.",
        h1: "Garage & Outdoor Area Cleaning Adelaide",
        tagline:
          "Don't let the garage or outdoor areas let you down. We sweep, mop, and pressure wash everything outside so you're fully covered for the final inspection.",
        intro:
          "Most tenants focus all their cleaning energy on the inside of the property and forget about the garage and outdoor areas — until the property manager points them out during the final inspection. Garages, carports, balconies, courtyards, and alfresco areas are part of your rental agreement and are checked during the inspection. At Tru End of Lease Cleaning Adelaide, we ensure your entire property — inside and out — is cleaned to the standard required to get your full bond back.",
        image: "/assets/generated/hero-banner.dim_1200x600.jpg",
        imageAlt:
          "Tru End of Lease Cleaning Adelaide - garage and outdoor area cleaning service for end of lease bond return",
        sections: [
          {
            heading: "What We Clean in the Garage",
            content:
              "The garage often accumulates years of dust, oil stains, cobwebs, and general mess over a tenancy. We start by removing all cobwebs from the ceiling, walls, and door frames. We sweep all surfaces thoroughly to remove dust and debris. We then mop the garage floor using appropriate cleaning solutions. Oil stains on concrete floors can be stubborn — we treat these with specialist degreasers. We also wipe down any shelving, the inside of the garage door, and the walls. The garage door mechanism and tracks get a wipe and check as well.",
          },
          {
            heading: "Balconies, Courtyards & Alfresco Areas",
            content:
              "Balconies and outdoor areas need to be swept clean, with balustrades and railings wiped down. Any outdoor tiles or pavers should be swept and mopped. Alfresco area ceilings are checked for cobwebs and dirt. Glass balustrades need to be cleaned in the same way as windows — and they're highly visible to property managers. We clean all outdoor glass, wipe down external walls within reason, and remove any rubbish or debris left in these areas.",
          },
          {
            heading: "Pressure Washing Services",
            content:
              "For properties with significant outdoor grime on driveways, pathways, and courtyard pavers, pressure washing delivers dramatic results. Years of weathering, mould, algae, and built-up dirt can be blasted away to restore surfaces close to their original appearance. We offer pressure washing as an add-on service. Note that pressure washing is particularly effective on concrete, brick pavers, and natural stone — and can make a significant difference to the overall impression your property leaves on the property manager.",
          },
          {
            heading: "Garden and Lawn Maintenance",
            content:
              "While we don't offer lawn mowing or full garden maintenance, we do remove obvious rubbish and debris from garden areas as part of our outdoor cleaning service. Your lease will typically require you to maintain the garden in a reasonable condition — mowing the lawn, trimming edges, and keeping garden beds reasonably tidy. We recommend organising lawn mowing separately if needed. We can advise on what level of garden maintenance is typically expected by Adelaide property managers.",
          },
          {
            heading: "Pricing for Garage and Outdoor Cleaning in Adelaide",
            content:
              "Garage cleaning as part of a full bond clean is included at no extra charge. As a standalone service, a standard single garage clean starts at $60–$100. Balcony and alfresco cleaning starts at $40–$80 depending on size. Pressure washing is priced separately based on the area to be cleaned. Get in touch for a free, no-obligation quote that covers your entire property.",
          },
        ],
        included: [
          "Garage floor sweep & mop",
          "Cobweb removal throughout",
          "Oil stain treatment",
          "Shelving & walls wiped",
          "Garage door interior",
          "Balcony sweep & mop",
          "Balustrade & railing clean",
          "Alfresco/courtyard area",
          "Outdoor glass cleaning",
          "Rubbish and debris removal",
        ],
        pricingItems: [
          { label: "Single garage", price: "$60–$100" },
          { label: "Double garage", price: "$90–$140" },
          { label: "Balcony / alfresco", price: "$40–$80" },
          { label: "Pressure wash (per m²)", price: "Ask for quote" },
        ],
        relatedServices: [
          {
            label: "End of Lease Cleaning",
            href: "/services/end-of-lease-cleaning",
          },
          { label: "Bond Cleaning", href: "/services/bond-cleaning" },
          { label: "Window Cleaning", href: "/services/window-cleaning" },
        ],
      }}
    />
  );
}
