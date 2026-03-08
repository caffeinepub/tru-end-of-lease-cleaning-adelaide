import { useSEO } from "@/hooks/useSEO";
import { ServiceTemplate } from "./ServiceTemplate";

export function EndOfLeaseCleaningPage() {
  useSEO({
    title: "End of Lease Cleaning Adelaide | Professional Bond Cleaners | Tru",
    description:
      "Professional end of lease cleaning in Adelaide. 100% bond back guarantee. Fully trained cleaners follow real estate-approved checklist. Book online today.",
    ogImage: "/assets/generated/bond-cleaning-checklist.dim_800x500.jpg",
    keywords:
      "end of lease cleaning Adelaide, professional end of lease cleaners Adelaide",
  });

  return (
    <ServiceTemplate
      data={{
        title: "End of Lease Cleaning",
        metaTitle:
          "End of Lease Cleaning Adelaide | Professional Bond Cleaners | Tru",
        metaDescription:
          "Professional end of lease cleaning in Adelaide. 100% bond back guarantee. Fully trained cleaners follow real estate-approved checklist. Book online today.",
        h1: "Professional End of Lease Cleaning in Adelaide",
        tagline:
          "We clean every inch of your rental property so you pass the final inspection and get your full bond back — first time, every time.",
        intro:
          "End of lease cleaning (also called bond cleaning or vacate cleaning) is one of the most important things you do before handing back the keys to your rental property. Property managers across Adelaide have high standards, and if your property doesn't meet them, they can deduct money from your bond to pay for a professional clean. At Tru End of Lease Cleaning Adelaide, we take the stress out of moving by doing an outstanding job every single time.",
        image: "/assets/generated/bond-cleaning-checklist.dim_800x500.jpg",
        imageAlt:
          "Tru End of Lease Cleaning Adelaide - real estate approved bond cleaning checklist ensuring full bond return",
        sections: [
          {
            heading: "What Does End of Lease Cleaning Include?",
            content:
              "Our end of lease cleaning service covers every single area of your rental property. We clean all bedrooms, living rooms, and common areas — vacuuming, mopping, dusting, and wiping down all surfaces. We deep clean the kitchen including oven, rangehood, stovetop, benches, splashback, and cupboards inside and out. We scrub every bathroom and toilet until they gleam. We clean all windows (inside), blinds, skirting boards, light switches, power points, light fittings, ceiling fans, air conditioning filters, and door frames. We remove cobwebs, spot-clean walls, and make sure every single item on the real estate checklist is ticked off before we leave.",
          },
          {
            heading: "Why Choose Tru for Your End of Lease Clean?",
            content:
              "We specialise exclusively in end of lease cleaning — it's the only thing we do. That focus makes us exceptionally good at it. Our team knows exactly what Adelaide property managers look for during final inspections, and we make sure your property meets that standard. We use professional-grade cleaning products and equipment that deliver results that are simply not achievable with standard household cleaning supplies. Every clean comes with our 100% Bond Back Guarantee: if your property manager finds anything we missed, we come back and fix it at no charge to you.",
          },
          {
            heading: "How We're Different from Other Cleaners",
            content:
              "Many general cleaning companies offer end of lease cleaning as a side service. At Tru, it's our entire business. That means our team is trained specifically in bond cleaning standards, our checklists are based on the actual inspection forms used by Adelaide real estate agents, and we understand the specific requirements of South Australian tenancy laws. We also offer completely transparent pricing — no surprise add-on fees when we arrive. What you're quoted upfront is exactly what you pay. We're available 7 days a week including public holidays, and we can often accommodate same-day or next-day bookings for urgent move-outs.",
          },
          {
            heading: "The Cleaning Products We Use",
            content:
              "We use professional-grade, eco-conscious cleaning products that are tough on grime but safe for your surfaces. Our arsenal includes heavy-duty oven and grill cleaners for baked-on grease, mould and mildew removers for bathrooms, limescale removers for taps and shower screens, streak-free glass cleaners for windows and mirrors, and pH-neutral floor cleaners for timber, tiles, and vinyl. We bring all our own equipment — professional vacuums, microfibre cloths, steam mops, and specialist tools for hard-to-reach areas. You don't need to provide anything.",
          },
          {
            heading: "Pricing for End of Lease Cleaning in Adelaide",
            content:
              "Our pricing is clear and upfront. A standard 1-bedroom apartment starts from $250. A 3-bedroom house is typically $380–$480. We price based on the number of bedrooms and bathrooms, plus any extras you need like carpet steam cleaning or oven cleaning. We never charge extra for travel within Adelaide metro. Get in touch for a free, no-obligation quote — we'll give you an exact price before we start any work.",
          },
        ],
        included: [
          "All rooms (bedrooms, living, dining)",
          "Kitchen — oven, rangehood, stovetop, benches",
          "Bathrooms, showers, and toilets",
          "Laundry room",
          "Windows (inside)",
          "Blinds (dusted)",
          "Skirting boards & door frames",
          "Light fittings & ceiling fans",
          "Air conditioning filters",
          "Cupboards (inside & out)",
          "Floors (vacuumed & mopped)",
          "Cobweb removal",
          "Wall spot-cleaning",
        ],
        pricingItems: [
          { label: "1 Bed / 1 Bath", price: "$250–$300" },
          { label: "2 Bed / 1 Bath", price: "$300–$380" },
          { label: "3 Bed / 2 Bath", price: "$380–$480" },
          { label: "4 Bed / 2 Bath", price: "$450–$600" },
          { label: "Carpet steam cleaning", price: "+$60–$100/room" },
        ],
        relatedServices: [
          { label: "Bond Cleaning", href: "/services/bond-cleaning" },
          {
            label: "Carpet Steam Cleaning",
            href: "/services/carpet-steam-cleaning",
          },
          {
            label: "Oven & Kitchen Cleaning",
            href: "/services/oven-kitchen-cleaning",
          },
          { label: "Window Cleaning", href: "/services/window-cleaning" },
        ],
      }}
    />
  );
}
