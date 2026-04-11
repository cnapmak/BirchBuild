import type { Metadata } from "next";
import Link from "next/link";
import MapWrapper from "@/components/MapWrapper";
import type { MapPin } from "@/components/ProjectsMap";
import ExpandablePropertyGrid from "@/components/ExpandablePropertyGrid";
import type { Property } from "@/components/ExpandablePropertyGrid";
import FeaturedProjectCards from "@/components/FeaturedProjectCards";

export const metadata: Metadata = {
  title: "Projects | BirchBuild",
  description:
    "BirchBuild project portfolio — construction and renovation projects across Chicago's West Town, Ukrainian Village, Wicker Park, and beyond.",
};

// All real addresses from birchbuild.org — sorted most recent first
export const allProperties: Property[] = [
  // 2020
  {
    address: "1305 W. Chicago", neighborhood: "Noble Square", type: "Mixed-Use", slug: "1305-w-chicago",
    img: "/projects/1305-w-chicago/facade.jpg",
    extraImages: [
      "/projects/1305-w-chicago/facade-wide.jpg",
      "/projects/1305-w-chicago/kitchen-living.jpg",
      "/projects/1305-w-chicago/living-room.jpg",
      "/projects/1305-w-chicago/master-bedroom.jpg",
      "/projects/1305-w-chicago/bathroom.jpg",
      "/projects/1305-w-chicago/second-bedroom.jpg",
      "/projects/1305-w-chicago/rooftop-deck.jpg",
    ],
    description: "Six-unit boutique elevator building spanning 1305-1311 W. Chicago Avenue in Noble Square, completed in 2020. Units feature three bedrooms and two baths across 1,660 sq ft with dark oak hardwood floors, custom Italian cabinetry, quartz countertops, and a shared rooftop deck with Chicago skyline views.",
  },
  {
    address: "1314 N. Greenview", neighborhood: "Old Town", type: "Residential", slug: "1314-n-greenview",
    img: "https://resources.atproperties.com/images/MRED/11/266/642/618ade91cf478/1.jpg",
    extraImages: ["/projects/1314-n-greenview/1.png"],
    description: "Two-unit new construction building in the Noble Square-Old Town border area, completed in 2020. Residences feature white oak herringbone floors, an Archisesto kitchen with Thermador appliances, heated bathroom floors, 8-ft solid core doors, and high ceilings throughout.",
  },
  {
    address: "1739 W. Julian", neighborhood: "Ukrainian Village", type: "Residential", slug: "1739-w-julian",
    img: "https://resources.atproperties.com/images/MRED/10/926/342/5fa46e4dbce37/1.jpg",
    extraImages: ["/projects/1739-w-julian/1.png"],
    description: "Two-unit new construction condo building in Ukrainian Village, completed in 2020. The building features a duplex-down and penthouse unit, each with three bedrooms and 1,800 sq ft. Interiors include white oak herringbone floors, Thermador appliances, and a large kitchen island with butcher block countertops.",
  },
  // 2018
  {
    address: "1433 N. Ashland", neighborhood: "Wicker Park", type: "Residential", slug: "1433-n-ashland",
    img: "https://resources.atproperties.com/images/MRED/12/381/274/683dc1eb16218/1.jpg",
    description: "Nine-unit boutique elevator building in Wicker Park, built in 2018. Units offer approximately 1,600 to 1,700 sq ft with three bedrooms, two baths, and contemporary finishes throughout. The building features modern construction with luxury appointments.",
  },
  {
    address: "1106 N. Marshfield", neighborhood: "Noble Square", type: "Residential", slug: "1106-n-marshfield",
    img: "https://resources.atproperties.com/images/MRED/11/309/968/61eed3c7cd430/1.jpg",
    description: "Three-unit, three-story all-brick building in Noble Square, built in 2018. Units feature floor-to-ceiling windows, gas fireplaces, chef's kitchens with quartz countertops, heated bathroom floors, steam showers, and included garage parking.",
  },
  // 2017
  {
    address: "1512 W. Huron", neighborhood: "Noble Square", type: "Residential", slug: "1512-w-huron",
    img: "https://img.urbanre.com/propertyimage/500x375/MRD12346426/6388104366/1512-W-Huron-Unit-1-Chicago-IL-60642-0.jpg",
    description: "All-brick condo building in Noble Square, built in 2017. The ground-floor residence spans 2,587 sq ft with three bedrooms, while upper units offer two-bedroom layouts. All units include modern finishes and garage parking.",
  },
  // 2016
  {
    address: "1756 W. Wabansia", neighborhood: "Wicker Park", type: "Residential", slug: "1756-w-wabansia",
    img: "/projects/1756-w-wabansia/facade.jpg",
    extraImages: [
      "/projects/1756-w-wabansia/exterior-summer.jpg",
      "/projects/1756-w-wabansia/living-room.jpg",
      "/projects/1756-w-wabansia/kitchen.jpg",
      "/projects/1756-w-wabansia/bedroom.jpg",
      "/projects/1756-w-wabansia/bathroom.jpg",
      "/projects/1756-w-wabansia/lower-level.jpg",
      "/projects/1756-w-wabansia/basement.jpg",
    ],
    description: "New construction residence in Wicker Park built in 2016. The 3,500 sq ft main home features four bedrooms, a Gaggenau kitchen, white oak floors, custom floating stairs with glass railings, a cedar garage deck, and specialty lighting throughout.",
  },
  {
    address: "1944 W. Crystal", neighborhood: "Ukrainian Village", type: "Residential", slug: "1944-w-crystal",
    img: "https://resources.atproperties.com/images/MRED/12/106/279/668ee6bb110f9/1.jpg",
    extraImages: ["/projects/1944-w-crystal/1.jpg"],
    description: "Two-unit luxury condo building on a tree-lined Ukrainian Village block, built in 2016. Residences feature designer kitchens, heated floors, and private outdoor spaces across three- and four-bedroom layouts up to 2,400 sq ft.",
  },
  // 2014
  {
    address: "1013 N. Honore", neighborhood: "Noble Square", type: "Residential", slug: "1013-n-honore",
    img: "https://d229qcohg01jma.cloudfront.net/MRED/09/498/055/1.jpg",
    description: "Three-unit condo building in Noble Square, built in 2014. The ground-floor duplex spans 2,400 sq ft with three bedrooms. All units feature Thermador appliances, custom cabinetry, hardwood floors, and in-unit laundry.",
  },
  {
    address: "1731 N. Richmond", neighborhood: "Wicker Park", type: "Residential", slug: "1731-n-richmond",
    img: "https://resources.atproperties.com/images/MRED/11/253/427/6179fc6d3cae0/1.jpg",
    description: "Single-family home built in 2014, steps from the 606 trail. The 2,422 sq ft residence features 13-ft ceilings, 35 linear feet of Italian kitchen cabinetry, Bosch appliances, custom light fixtures with reclaimed wood from the original home, an oversized walk-out deck, and a rooftop area.",
  },
  // 2013
  {
    address: "1457 W. Erie", neighborhood: "Noble Square", type: "Residential", slug: "1457-w-erie",
    img: "https://resources.atproperties.com/images/MRED/12/554/940/6984e7a6ed6b0/1.jpg",
    extraImages: ["/projects/1457-w-erie/1.jpg"],
    description: "Three-unit condo building in Noble Square built in 2013 by Db Develops. Units feature clean-line contemporary design with custom imported finishes and duplex-style layouts. Residences range from 1,350 to 2,400 sq ft with two- and three-bedroom configurations.",
  },
  {
    address: "1002 N. Hermitage", neighborhood: "Noble Square", type: "Residential", slug: "1002-n-hermitage",
    img: "https://resources.atproperties.com/images/MRED/10/877/570/5f6a433954d6c/1.jpg",
    extraImages: ["/projects/1002-n-hermitage/1.jpg"],
    description: "Multi-unit condo building in Noble Square, built in 2013. Residences offer approximately 2,200 sq ft with three bedrooms and modern finishes throughout.",
  },
  {
    address: "756 N. Leavitt", neighborhood: "Ukrainian Village", type: "Mixed-Use", slug: "756-n-leavitt",
    img: "https://resources.atproperties.com/images/MRED/12/093/033/6679e1734d95a/1.jpg",
    description: "Boutique elevator building on a corner lot in Ukrainian Village, built in 2013. The mixed-use building features extra-wide layouts over 23 ft across, hardwood floors, attached garage parking, and 500 sq ft private rooftop decks with skyline views.",
  },
  {
    address: "1809 W. Chicago", neighborhood: "Ukrainian Village", type: "Residential", slug: "1809-w-chicago",
    img: "https://resources.atproperties.com/images/MRED/11/939/157/6570abbb19692/1.jpg",
    extraImages: ["/projects/1809-w-chicago/1.jpg"],
    description: "Nine-unit, four-story condo building on Chicago Avenue in Ukrainian Village, built in 2013. Units feature three-bedroom layouts with approximately 1,500 to 1,600 sq ft, in-unit laundry, and heated garage parking.",
  },
  // 2012
  {
    address: "814-20 N. Wood", neighborhood: "East Village", type: "Residential", slug: "814-n-wood",
    img: "https://resources.atproperties.com/images/MRED/11/749/131/64270e98aea39/1.jpg",
    description: "Multi-unit development spanning 814-820 N. Wood on an oversized corner lot in East Village, built in 2012. Residences include duplex-down units with private roof decks, hardwood floors, quartz countertops, and spa-style primary baths with heated floors and steam showers.",
  },
  {
    address: "2207 W. Chicago", neighborhood: "Ukrainian Village", type: "Residential", slug: "2207-w-chicago",
    img: "https://resources.atproperties.com/images/MRED/12/370/404/682cc915dc488/1.jpg",
    description: "Six-unit elevator building on Chicago Avenue in Ukrainian Village, built in 2012. All units feature three bedrooms and two baths with 11-ft ceilings, floor-to-ceiling windows, two-car tandem garage parking, and private rooftop access. Units range from 1,650 to 1,800 sq ft.",
  },
  {
    address: "532 N. Hermitage", neighborhood: "Noble Square", type: "Residential", slug: "532-n-hermitage",
    img: "https://resources.atproperties.com/images/MRED/11/707/603/63dab3a4ad9b4/1.jpg",
    description: "Two-unit contemporary condo building in Noble Square, built in 2012. Residences offer 2,400 sq ft with three bedrooms, large east-facing windows, modern finishes, and garage parking. Located near the Division Street Blue Line station.",
  },
  // 2011
  {
    address: "1527 W. Chestnut", neighborhood: "Noble Square", type: "Residential", slug: "1527-w-chestnut",
    img: "https://resources.atproperties.com/images/MRED/11/213/465/613a202cd41f2/1.jpg",
    description: "Three-unit boutique condo building in Noble Square, part of the Ogden Haus development built in 2011. The ground-floor unit offers 2,100 sq ft with three bedrooms, while upper residences provide two-bedroom layouts with modern finishes.",
  },
  {
    address: "1517 W. Pearson", neighborhood: "Noble Square", type: "Residential", slug: "1517-w-pearson",
    img: "https://resources.atproperties.com/images/MRED/11/004/099/603824ca37722/1.jpg",
    extraImages: ["/projects/1517-w-pearson/1.jpg"],
    description: "Two-unit boutique condo building in Noble Square, part of the Ogden Haus development. Both residences feature three-bedroom layouts with modern finishes and open floor plans.",
  },
  {
    address: "1074 N. Paulina", neighborhood: "Noble Square", type: "Residential", slug: "1074-n-paulina",
    img: "https://resources.atproperties.com/images/MRED/10/712/510/5ebf38f60d147/1.jpg",
    description: "Multi-unit condo building in Noble Square on the border of Wicker Park, built in 2011. The building features three- and two-bedroom residences with contemporary finishes throughout.",
  },
  {
    address: "1108 W. Fry", neighborhood: "Noble Square", type: "Residential", slug: "1108-w-fry",
    img: "https://d229qcohg01jma.cloudfront.net/MRED/09/483/252/1.jpg",
    description: "Two-unit condo building on a quiet Noble Square side street, built in 2011. The upper residence offers 2,000 sq ft with three bedrooms and three baths in a modern, open layout.",
  },
  // 2009
  {
    address: "922 N. Hermitage", neighborhood: "Noble Square", type: "Residential", slug: "922-n-hermitage",
    img: "https://resources.atproperties.com/images/MRED/12/411/779/686c685b326f0/1.jpg",
    description: "Three-unit, three-story condo building in Noble Square, built in 2009. The 2,600 sq ft ground-floor duplex features luxury finishes, a wet bar, and steam shower. Upper units range from 1,300 to 1,650 sq ft.",
  },
  // 2008
  {
    address: "1331 N. Mohawk", neighborhood: "Old Town", type: "Residential", slug: "1331-n-mohawk",
    img: "https://resources.atproperties.com/images/MRED/12/001/349/66058dad2d82f/1.jpg",
    description: "Contemporary multi-unit condo building in Old Town, built in 2008. The building features 11-ft ceilings, stone fireplaces, Dacor appliances, walnut cabinetry, and spa-style primary baths with steam showers. Units have private outdoor spaces and separate entrances.",
  },
  {
    address: "1438 N. Wood", neighborhood: "Wicker Park", type: "Residential", slug: "1438-n-wood",
    img: "https://resources.atproperties.com/images/MRED/12/004/070/65f3928d2a1c6/1.jpg",
    description: "Multi-unit condo building in Wicker Park, built in 2008. The ground-floor residence spans 2,300 sq ft with three bedrooms and three baths. Upper units offer two-bedroom layouts, all with modern finishes and garage parking.",
  },
  // 2007
  {
    address: "1039 N. Marshfield", neighborhood: "Noble Square", type: "Residential", slug: "1039-n-marshfield",
    img: "https://resources.atproperties.com/images/MRED/12/476/230/68d30f9a114d6/1.jpg",
    description: "Three-story masonry building adjacent to 1037 N. Marshfield in Noble Square, built in 2007. The three-unit building features a 1,800 sq ft ground-floor residence and 1,400 sq ft upper units.",
  },
  {
    address: "2702-12 W. Chicago", neighborhood: "Ukrainian Village", type: "Mixed-Use", slug: "2702-w-chicago",
    img: "https://resources.atproperties.com/images/MRED/11/692/560/63c03e35241c4/1.jpg",
    description: "Large mixed-use development spanning 2702-2712 W. Chicago Avenue with approximately 15 residential units and ground-floor commercial space. Built in 2007, the building features 9-10 ft ceilings, gas fireplaces, walnut cabinetry, a shared rooftop deck, and private balconies. The 1,400 sq ft storefront anchors the Chicago Avenue corridor.",
  },
  {
    address: "2243 W. Roscoe", neighborhood: "Roscoe Village", type: "Residential", slug: "2243-w-roscoe",
    img: "https://img.urbanre.com/propertyimage/500x375/MRD10783533/6373086828/2243-W-Roscoe-Unit-2-Chicago-IL-60618-0.jpg",
    description: "Three-unit brick building next door to 2241 W. Roscoe in Roscoe Village, built in 2007. The ground-floor duplex-down offers four bedrooms and 3,020 sq ft with a 31x15 ft rec room on the lower level. Upper units feature gas fireplaces and quartz countertops.",
  },
  // 2006
  {
    address: "1849 W. Armitage", neighborhood: "Bucktown", type: "Residential", slug: "1849-w-armitage",
    img: "https://pi.movoto.com/p/461/12276996_0_jzAIqn_p.webp",
    description: "Three-story brick building with three condos on Bucktown's main Armitage corridor, built in 2006. Units include hardwood floors, in-unit laundry, gas fireplaces, and a detached garage.",
  },
  {
    address: "2032 W. Superior", neighborhood: "Ukrainian Village", type: "Residential", slug: "2032-w-superior",
    img: "https://resources.atproperties.com/images/MRED/11/024/504/6052b6033f013/1.jpg",
    description: "Multi-unit condo building from 2006 on Superior Street in Ukrainian Village. The building offers two- and three-bedroom residences with modern finishes in a walkable location close to the Division Street corridor.",
  },
  {
    address: "1037 N. Marshfield", neighborhood: "Noble Square", type: "Residential", slug: "1037-n-marshfield",
    img: "https://resources.atproperties.com/images/MRED/11/904/571/6525943c7eec2/1.jpg",
    description: "Three-story all-brick building with three condos in Noble Square, built in 2006. The ground-floor duplex spans 2,400 sq ft with three bedrooms, while upper units offer two-bedroom layouts with hardwood floors and modern finishes.",
  },
  // 2005
  {
    address: "2241 W. Roscoe", neighborhood: "Roscoe Village", type: "Residential", slug: "2241-w-roscoe",
    img: "https://resources.atproperties.com/images/MRED/12/586/613/69baf2cba8791/1.jpg",
    description: "Brick-and-limestone condo building in the Audubon Elementary school district in Roscoe Village, built in 2005. Units range up to 2,500 sq ft, with the penthouse offering a 1,400 sq ft private rooftop deck. Gated parking included.",
  },
  {
    address: "2116 W. Barry", neighborhood: "Lakeview", type: "Residential", slug: "2116-w-barry",
    img: "https://resources.atproperties.com/images/MRED/10/927/492/5fb81d68bb594/1.jpg",
    description: "All-brick condo building near Hamlin Park in Lakeview, built around 2005. The intimate building offers two- and three-bedroom residences ranging from 1,300 to 1,600 sq ft on a quiet residential street.",
  },
  // 2004
  {
    address: "2027 W. Rice", neighborhood: "Ukrainian Village", type: "Residential", slug: "2027-w-rice",
    img: "https://d229qcohg01jma.cloudfront.net/MRED/08/942/270/1.jpg",
    description: "Three-unit condo building from 2004 sitting adjacent to 2029 W. Rice on the same Ukrainian Village block. Units range from 1,250 to 2,200 sq ft with two- and three-bedroom layouts.",
  },
  {
    address: "2029 W. Rice", neighborhood: "Ukrainian Village", type: "Residential", slug: "2029-w-rice",
    img: "https://resources.atproperties.com/images/MRED/12/421/970/68811b2107658/1.jpg",
    description: "Brick-and-limestone condo building on a quiet Ukrainian Village side street. The three-unit building features a 2,200 sq ft duplex-down and upper-level residences with contemporary finishes throughout.",
  },
  // 2002
  {
    address: "2647 W. Haddon", neighborhood: "Ukrainian Village", type: "Residential", slug: "2647-w-haddon",
    img: "https://d229qcohg01jma.cloudfront.net/MRED/09/976/063/1.jpg",
    description: "Three-unit condo building built in 2002 in the heart of Ukrainian Village. The building includes a spacious ground-floor duplex with three bedrooms and three baths, plus two upper-level residences.",
  },
  // Renovations / undated
  {
    address: "1468 N. Ashland", neighborhood: "Wicker Park", type: "Mixed-Use", slug: "1468-n-ashland",
    img: "https://resources.atproperties.com/images/MRED/11/195/395/6148ced3a6578/1.jpg",
    description: "Mixed-use boutique building on Ashland Avenue in Wicker Park. The original 1875 structure was redeveloped into an upscale building with ground-floor commercial and retail space and residential units above.",
  },
  {
    address: "1350 N. Campbell", neighborhood: "Wicker Park", type: "Residential", slug: "1350-n-campbell",
    img: "https://img.urbanre.com/propertyimage/500x375/MRD11369958/6378530604/1350-N-Campbell-Unit-2-Chicago-IL-60622-0.jpg",
    description: "A four-unit building in a 1909 solid-brick structure on a tree-lined Wicker Park block. Units feature modern fireplaces, Juliette balconies, renovated baths with Moroccan tile, in-unit laundry, and garage parking.",
  },
];

// Pins for the map
export const allPins: MapPin[] = [
  { address: "1350 N. Campbell", lat: 41.9056, lng: -87.6978, type: "Residential" },
  { address: "2647 W. Haddon", lat: 41.9188, lng: -87.7090, type: "Residential" },
  { address: "2029 W. Rice", lat: 41.9212, lng: -87.6858, type: "Residential" },
  { address: "2027 W. Rice", lat: 41.9212, lng: -87.6855, type: "Residential" },
  { address: "1849 W. Armitage", lat: 41.9175, lng: -87.6802, type: "Mixed-Use" },
  { address: "2032 W. Superior", lat: 41.8952, lng: -87.6858, type: "Commercial" },
  { address: "1037 N. Marshfield", lat: 41.8993, lng: -87.6736, type: "Residential" },
  { address: "1039 N. Marshfield", lat: 41.8993, lng: -87.6736, type: "Residential" },
  { address: "2702-12 W. Chicago", lat: 41.8960, lng: -87.7092, type: "Mixed-Use" },
  { address: "2241 W. Roscoe", lat: 41.9385, lng: -87.6932, type: "Residential" },
  { address: "2243 W. Roscoe", lat: 41.9385, lng: -87.6932, type: "Residential" },
  { address: "1331 N. Mohawk", lat: 41.9058, lng: -87.6472, type: "Residential" },
  { address: "2116 W. Barry", lat: 41.9370, lng: -87.6900, type: "Residential" },
  { address: "1438 N. Wood", lat: 41.9082, lng: -87.6720, type: "Residential" },
  { address: "922 N. Hermitage", lat: 41.8979, lng: -87.6736, type: "Residential" },
  { address: "1527 W. Chestnut", lat: 41.8980, lng: -87.6710, type: "Commercial" },
  { address: "1074 N. Paulina", lat: 41.9000, lng: -87.6736, type: "Residential" },
  { address: "1108 W. Fry", lat: 41.8989, lng: -87.6618, type: "Commercial" },
  { address: "814-20 N. Wood", lat: 41.8960, lng: -87.6720, type: "Mixed-Use" },
  { address: "1517 W. Pearson", lat: 41.9000, lng: -87.6708, type: "Residential" },
  { address: "2207 W. Chicago", lat: 41.8960, lng: -87.6928, type: "Mixed-Use" },
  { address: "532 N. Hermitage", lat: 41.8890, lng: -87.6736, type: "Commercial" },
  { address: "1457 W. Erie", lat: 41.8920, lng: -87.6680, type: "Commercial" },
  { address: "1013 N. Honore", lat: 41.8993, lng: -87.6748, type: "Residential" },
  { address: "1731 N. Richmond", lat: 41.9150, lng: -87.7012, type: "Residential" },
  { address: "1002 N. Hermitage", lat: 41.8993, lng: -87.6736, type: "Residential" },
  { address: "756 N. Leavitt", lat: 41.8939, lng: -87.6820, type: "Residential" },
  { address: "1809 W. Chicago", lat: 41.8960, lng: -87.6802, type: "Mixed-Use" },
  { address: "1756 W. Wabansia", lat: 41.9118, lng: -87.6776, type: "Residential" },
  { address: "1305 W. Chicago", lat: 41.8960, lng: -87.6650, type: "Commercial" },
  { address: "1944 W. Crystal", lat: 41.9000, lng: -87.6830, type: "Residential" },
  { address: "1433 N. Ashland", lat: 41.9082, lng: -87.6692, type: "Mixed-Use" },
  { address: "1512 W. Huron", lat: 41.8929, lng: -87.6708, type: "Commercial" },
  { address: "1106 N. Marshfield", lat: 41.9009, lng: -87.6736, type: "Residential" },
  { address: "1468 N. Ashland", lat: 41.9089, lng: -87.6692, type: "Mixed-Use" },
  { address: "1739 W. Julian", lat: 41.9180, lng: -87.6776, type: "Residential" },
  { address: "1314 N. Greenview", lat: 41.9058, lng: -87.6710, type: "Residential" },
];

const featuredProjects = [
  {
    name: "756 N. Leavitt St",
    neighborhood: "Ukrainian Village",
    type: "Mixed-Use",
    slug: "756-n-leavitt",
    address: "756 N. Leavitt St, Chicago, IL 60622",
    img: "https://resources.atproperties.com/images/MRED/12/093/033/6679e1734d95a/1.jpg",
    description:
      "Boutique elevator building on a corner lot in Ukrainian Village, built in 2013. The mixed-use building features extra-wide layouts over 23 ft across, hardwood floors, attached garage parking, and 500 sq ft private rooftop decks with skyline views.",
    highlights: ["New construction", "Full-scale build", "Ukrainian Village"],
  },
  {
    name: "1756 W. Wabansia",
    neighborhood: "Wicker Park",
    type: "Residential",
    slug: "1756-w-wabansia",
    address: "1756 W. Wabansia, Chicago, IL 60622",
    img: "/projects/1756-w-wabansia/facade.jpg",
    description:
      "New construction residence in Wicker Park built in 2016. The 3,500 sq ft main home features four bedrooms, a Gaggenau kitchen, white oak floors, custom floating stairs with glass railings, a cedar garage deck, and specialty lighting throughout.",
    highlights: ["Custom single-family", "High-end finishes", "Wicker Park"],
  },
  {
    name: "2702-12 W. Chicago Ave",
    neighborhood: "Ukrainian Village",
    type: "Mixed-Use",
    slug: "2702-w-chicago",
    address: "2702-12 W. Chicago Ave, Chicago, IL 60622",
    img: "https://resources.atproperties.com/images/MRED/11/692/560/63c03e35241c4/1.jpg",
    description:
      "Mixed-use development spanning 2702-2712 W. Chicago Ave with approximately 15 residential units and ground-floor commercial space. Built in 2007, the building features 9-10 ft ceilings, gas fireplaces, walnut cabinetry, a shared rooftop deck, and private balconies.",
    highlights: ["Mixed-use ground-up", "Chicago Ave corridor", "Ukrainian Village"],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-[#EEF4FB] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-3">
            Chicago, Illinois
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#0B2A4A] mb-5">
            Project Portfolio
          </h1>
          <p className="text-lg text-[#1C3050] max-w-2xl leading-relaxed">
            35+ completed projects across Chicago&apos;s West Town, Ukrainian Village,
            Wicker Park, Bucktown, and Lincoln Park neighborhoods.
          </p>
        </div>
      </section>

      {/* Featured case studies */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-8">
            Featured Projects
          </div>
          <FeaturedProjectCards projects={featuredProjects} />
        </div>
      </section>

      {/* Map */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-3">
              Project Locations
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#0B2A4A]">
              Built Across Chicago
            </h2>
            <p className="text-sm text-[#1C3050] mt-2">
              {allPins.length} completed projects concentrated in West Town, Ukrainian Village,
              Wicker Park, and Bucktown.
            </p>
          </div>
          <MapWrapper pins={allPins} properties={allProperties} />
        </div>
      </section>

      {/* All properties — expandable grid */}
      <section className="bg-[#EEF4FB] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#4A82B5] mb-2">
            All Properties — Chicago, IL
          </div>
          <p className="text-xs text-[#1C3050] mb-8">Click any property to expand</p>
          <ExpandablePropertyGrid properties={allProperties} />
        </div>
      </section>

      <section className="bg-[#0B2A4A] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-4">
            Building in Chicago?
          </h2>
          <p className="text-[#7BB5D8] mb-8">
            We know these neighborhoods. Let&apos;s talk about your project.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#2980B9] text-white px-8 py-4 rounded font-medium hover:bg-[#1565A0] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
