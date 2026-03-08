export interface SuburbData {
  slug: string;
  name: string;
  description: string;
  landmark: string;
  character: string;
  pricingNote: string;
}

export const suburbsData: SuburbData[] = [
  {
    slug: "adelaide-cbd",
    name: "Adelaide CBD",
    description:
      "End of lease cleaning in Adelaide CBD is in high demand, with hundreds of apartments and rental properties right in the heart of the city.",
    landmark: "Near Victoria Square and Rundle Mall",
    character: "apartment-heavy inner-city precinct with high tenant turnover",
    pricingNote:
      "1-bed apartment: $270–$320 | 2-bed: $320–$400 | 3-bed: $400–$500",
  },
  {
    slug: "north-adelaide",
    name: "North Adelaide",
    description:
      "North Adelaide is one of Adelaide's most prestigious suburbs, known for its heritage homes and tree-lined streets.",
    landmark: "Close to Adelaide Oval and the River Torrens",
    character: "heritage-character suburb with large period homes",
    pricingNote:
      "1-bed unit: $260–$310 | 2-bed home: $340–$420 | 3-bed: $400–$520",
  },
  {
    slug: "norwood",
    name: "Norwood",
    description:
      "Norwood is a vibrant inner-east suburb popular with young professionals and families, with a thriving café and restaurant scene on The Parade.",
    landmark: "The Parade shopping strip",
    character:
      "trendy inner-east suburb with a mix of apartments and heritage cottages",
    pricingNote: "1-bed: $260–$310 | 2-bed: $320–$400 | 3-bed: $380–$480",
  },
  {
    slug: "glenelg",
    name: "Glenelg",
    description:
      "Glenelg is Adelaide's favourite beach suburb, with a huge number of short-stay and long-term rental properties near the water.",
    landmark: "Glenelg Beach and Jetty Road",
    character: "beachside suburb with high rental demand",
    pricingNote: "1-bed unit: $260–$320 | 2-bed: $320–$420 | 3-bed: $380–$500",
  },
  {
    slug: "prospect",
    name: "Prospect",
    description:
      "Prospect is a popular inner-north suburb known for its character homes, great cafés, and easy access to the CBD.",
    landmark: "Prospect Road café strip",
    character:
      "leafy inner-north suburb with character cottages and modern townhouses",
    pricingNote: "1-bed: $250–$300 | 2-bed: $310–$390 | 3-bed: $370–$470",
  },
  {
    slug: "unley",
    name: "Unley",
    description:
      "Unley is an affluent inner-south suburb with some of Adelaide's most beautiful homes and gardens.",
    landmark: "King William Road and Unley shopping precinct",
    character: "upmarket inner-south suburb with large family homes",
    pricingNote: "1-bed: $260–$310 | 2-bed: $330–$410 | 3-bed: $400–$520",
  },
  {
    slug: "burnside",
    name: "Burnside",
    description:
      "Burnside is an eastern suburb known for its quiet streets, excellent schools, and lovely family homes.",
    landmark: "Near the Adelaide Hills foothills",
    character: "family-friendly eastern suburb with spacious homes and gardens",
    pricingNote: "2-bed: $330–$420 | 3-bed: $390–$500 | 4-bed: $460–$600",
  },
  {
    slug: "campbelltown",
    name: "Campbelltown",
    description:
      "Campbelltown is a growing suburb in Adelaide's north-east, popular with families and professionals.",
    landmark: "Newton Village and Para River",
    character: "established north-east suburb with family homes and units",
    pricingNote: "1-bed: $250–$300 | 2-bed: $310–$390 | 3-bed: $360–$460",
  },
  {
    slug: "marion",
    name: "Marion",
    description:
      "Marion is a large southern suburb with a strong rental market, anchored by the Westfield Marion shopping centre.",
    landmark: "Westfield Marion",
    character: "established southern suburb with diverse rental properties",
    pricingNote: "1-bed: $250–$300 | 2-bed: $300–$380 | 3-bed: $360–$450",
  },
  {
    slug: "tea-tree-gully",
    name: "Tea Tree Gully",
    description:
      "Tea Tree Gully is a popular northern suburbs area offering a mix of established homes and newer developments.",
    landmark: "Tea Tree Plaza and the Para Hills foothills",
    character:
      "large northern suburb with family homes and growing apartment market",
    pricingNote: "1-bed: $250–$295 | 2-bed: $300–$380 | 3-bed: $360–$450",
  },
  {
    slug: "salisbury",
    name: "Salisbury",
    description:
      "Salisbury is a major northern suburb and one of Adelaide's fastest-growing areas, with strong rental demand.",
    landmark: "Salisbury City Centre and John Street",
    character: "rapidly growing northern suburb with diverse rental properties",
    pricingNote: "1-bed: $240–$290 | 2-bed: $290–$370 | 3-bed: $350–$440",
  },
  {
    slug: "parafield",
    name: "Parafield",
    description:
      "Parafield is a northern suburb close to Parafield Airport, popular with workers and families looking for affordable rentals.",
    landmark: "Parafield Airport and Parafield Gardens",
    character: "affordable northern suburb with strong rental activity",
    pricingNote: "1-bed: $240–$290 | 2-bed: $290–$365 | 3-bed: $345–$430",
  },
  {
    slug: "morphett-vale",
    name: "Morphett Vale",
    description:
      "Morphett Vale is a large southern suburb with a wide variety of rental properties and excellent transport links.",
    landmark: "Colonnades Shopping Centre and Noarlunga Centre",
    character: "southern coastal suburb with affordable family homes and units",
    pricingNote: "1-bed: $240–$285 | 2-bed: $285–$360 | 3-bed: $340–$440",
  },
  {
    slug: "mawson-lakes",
    name: "Mawson Lakes",
    description:
      "Mawson Lakes is a modern, master-planned suburb popular with University of South Australia students and young professionals.",
    landmark: "University of South Australia Mawson Lakes campus and the Lakes",
    character:
      "contemporary planned suburb with modern apartments and townhouses",
    pricingNote: "1-bed: $250–$300 | 2-bed: $305–$385 | 3-bed: $360–$460",
  },
  {
    slug: "modbury",
    name: "Modbury",
    description:
      "Modbury is a well-established north-east suburb with great schools, shops, and parks, making it very popular with families.",
    landmark: "Tea Tree Plaza and Hollywood Plaza",
    character:
      "well-established north-east suburb with a strong family rental market",
    pricingNote: "1-bed: $245–$295 | 2-bed: $295–$375 | 3-bed: $355–$445",
  },
];

export const allSuburbs = suburbsData.map((s) => s.name);
