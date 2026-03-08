import { useSEO } from "@/hooks/useSEO";
import { ServiceTemplate } from "./ServiceTemplate";

export function BondCleaningPage() {
  useSEO({
    title: "Bond Cleaning Adelaide | 100% Bond Back Guarantee | Tru Cleaning",
    description:
      "Adelaide bond cleaning specialists. We guarantee you get your full bond back. Same-day bookings, upfront pricing, all suburbs covered. Get a free quote now.",
    ogImage: "/assets/generated/bond-cleaning-checklist.dim_800x500.jpg",
    keywords:
      "bond cleaning Adelaide, bond clean Adelaide, bond back guarantee Adelaide",
  });

  return (
    <ServiceTemplate
      data={{
        title: "Bond Cleaning",
        metaTitle:
          "Bond Cleaning Adelaide | 100% Bond Back Guarantee | Tru Cleaning",
        metaDescription:
          "Adelaide bond cleaning specialists. We guarantee you get your full bond back. Same-day bookings, upfront pricing, all suburbs covered. Get a free quote now.",
        h1: "Bond Cleaning Adelaide — 100% Bond Back Guarantee",
        tagline:
          "We're Adelaide's dedicated bond cleaning specialists. Our 100% Bond Back Guarantee means you get every dollar of your deposit back.",
        intro:
          "Your bond (also called a security deposit) represents up to four weeks' rent — in Adelaide, that's often $1,500 to $3,000 or more sitting in the hands of your landlord. The only thing standing between you and getting that money back is how clean your property is when you leave. At Tru End of Lease Cleaning Adelaide, we specialise in bond cleaning and we're passionate about making sure you don't lose a single cent.",
        image: "/assets/generated/bond-cleaning-checklist.dim_800x500.jpg",
        imageAlt:
          "Tru Bond Cleaning Adelaide - 100% bond back guarantee, professional bond cleaners serving all Adelaide suburbs",
        sections: [
          {
            heading: "What Makes a Great Bond Clean?",
            content:
              "A great bond clean is one that satisfies your property manager at the final inspection — full stop. That means cleaning every area on the standard real estate inspection form, not just the areas that look dirty. Property managers check things most people don't think about: the top of door frames, inside light fittings, behind the toilet, the seals on the oven door, the inside of every cupboard, the exhaust fan filters, and more. Our team has seen hundreds of inspection checklists across Adelaide — we know exactly what gets checked and we make sure it's all done.",
          },
          {
            heading: "Our Bond Cleaning Process",
            content:
              "When our team arrives, we start with a walkthrough of the property to note any existing damage and plan our approach. We then work methodically through the property from top to bottom, room by room. We begin with high areas first — ceiling fans, light fittings, air vents — then work down to walls, surfaces, and finally floors. The kitchen and bathrooms always get extra attention because these are the areas most closely inspected. Before we leave, we do a final quality check against the same checklist that property managers use. We don't leave until we're satisfied everything is perfect.",
          },
          {
            heading: "The Bond Back Guarantee — How It Works",
            content:
              "Our 100% Bond Back Guarantee is simple: if your property manager finds any issue with our cleaning within 72 hours of the final inspection, call us and we'll come back and fix it at no extra charge. No arguments, no excuses. We stand behind our work. This guarantee is available on every booking, for every client, across all Adelaide suburbs. It's our way of telling you that we're serious about delivering results, not just turning up and going through the motions.",
          },
          {
            heading: "How Much Does a Bond Clean Cost in Adelaide?",
            content:
              "Bond cleaning in Adelaide typically costs between $250 for a small apartment and $600 for a large family home. The price depends on the number of bedrooms and bathrooms, the condition of the property, and any extras you add on like carpet steam cleaning or professional oven cleaning. At Tru, we give you a clear, upfront quote before we start — no surprises. We also never charge extra for travelling within the Adelaide metro area.",
          },
          {
            heading: "When Should I Book My Bond Clean?",
            content:
              "Ideally, you should book your bond clean for the day after your last day in the property, before you hand back the keys. This way the property is empty, making it easier for us to clean every area thoroughly. If you're still moving things out, let us know and we can work around your schedule. We accept same-day bookings, so even if you're in a rush, we'll do our best to get there. The sooner you book, the more flexibility you'll have with timing.",
          },
        ],
        included: [
          "Complete top-to-bottom clean",
          "Real estate-approved checklist",
          "Kitchen deep clean (oven, rangehood, cupboards)",
          "Bathroom & toilet scrub",
          "Window cleaning (inside)",
          "All floors vacuumed & mopped",
          "Skirting boards & architraves",
          "Light fittings & ceiling fans",
          "Cobweb removal & wall spot-clean",
          "100% Bond Back Guarantee",
        ],
        pricingItems: [
          { label: "1 Bed / 1 Bath", price: "$250–$320" },
          { label: "2 Bed / 1 Bath", price: "$300–$380" },
          { label: "3 Bed / 2 Bath", price: "$380–$480" },
          { label: "4 Bed / 2 Bath", price: "$450–$600" },
        ],
        relatedServices: [
          {
            label: "End of Lease Cleaning",
            href: "/services/end-of-lease-cleaning",
          },
          {
            label: "Carpet Steam Cleaning",
            href: "/services/carpet-steam-cleaning",
          },
          {
            label: "Oven & Kitchen Cleaning",
            href: "/services/oven-kitchen-cleaning",
          },
          {
            label: "Bathroom & Toilet Cleaning",
            href: "/services/bathroom-toilet-cleaning",
          },
        ],
      }}
    />
  );
}
