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
  // 2019
  {
    address: "1314 N. Greenview", neighborhood: "Noble Square", type: "Residential", slug: "1314-n-greenview",
    img: "/projects/1314-n-greenview/main.jpg",
    extraImages: [
      "/projects/1314-n-greenview/living-room.jpg",
      "/projects/1314-n-greenview/dining.jpg",
      "/projects/1314-n-greenview/1.png",
      "/projects/1314-n-greenview/bedroom.jpg",
      "/projects/1314-n-greenview/bath.jpg",
      "/projects/1314-n-greenview/stairs.jpg",
      "/projects/1314-n-greenview/deck.jpg",
    ],
    description: "Two-unit new construction building in Noble Square near the Wicker Park border, completed in 2019, totaling 4,000 sq ft. Residences feature white oak herringbone floors, an Archisesto kitchen with Thermador appliances, heated bathroom floors, 8-ft solid core doors, and high ceilings throughout.",
  },
  {
    address: "1739 W. Julian", neighborhood: "Wicker Park", type: "Residential", slug: "1739-w-julian",
    img: "/projects/1739-w-julian/main.jpg",
    extraImages: [
      "/projects/1739-w-julian/living-room.jpg",
      "/projects/1739-w-julian/living-room-herringbone.jpg",
      "/projects/1739-w-julian/kitchen-island.jpg",
      "/projects/1739-w-julian/kitchen-thermador.jpg",
      "/projects/1739-w-julian/white-oak-staircase.jpg",
      "/projects/1739-w-julian/bedroom.jpg",
      "/projects/1739-w-julian/lower-level-bedroom.jpg",
      "/projects/1739-w-julian/primary-bath.jpg",
      "/projects/1739-w-julian/second-bath.jpg",
      "/projects/1739-w-julian/cedar-deck.jpg",
      "/projects/1739-w-julian/cedar-deck-2.jpg",
    ],
    description: "Two-unit new construction condo building in Wicker Park, completed in 2019, totaling 3,600 sq ft. The building pairs a duplex-down and a penthouse, each with three bedrooms and 1,800 sq ft. Interiors include white oak herringbone floors, Thermador appliances, and a large kitchen island with butcher block countertops.",
  },
  // 2017
  {
    address: "1106 N. Marshfield", neighborhood: "East Village", type: "Residential", slug: "1106-n-marshfield",
    img: "/projects/1106-n-marshfield/main.jpg",
    extraImages: [
      "/projects/1106-n-marshfield/gallery-2.jpg",
      "/projects/1106-n-marshfield/gallery-3.jpg",
      "/projects/1106-n-marshfield/gallery-4.jpg",
      "/projects/1106-n-marshfield/gallery-5.jpg",
      "/projects/1106-n-marshfield/gallery-6.jpg",
      "/projects/1106-n-marshfield/gallery-7.jpg",
      "/projects/1106-n-marshfield/gallery-8.jpg",
      "/projects/1106-n-marshfield/gallery-9.jpg",
      "/projects/1106-n-marshfield/gallery-10.jpg",
    ],
    description: "Three-unit, three-story all-brick building in East Village, built in 2017, totaling 4,800 sq ft. Units feature floor-to-ceiling windows, gas fireplaces, chef's kitchens with quartz countertops, heated bathroom floors, steam showers, and included garage parking.",
  },
  {
    address: "1468 N. Ashland", neighborhood: "Wicker Park", type: "Mixed-Use", slug: "1468-n-ashland",
    img: "/projects/1468-n-ashland/main.jpg",
    extraImages: [
      "/projects/1468-n-ashland/gallery-2.jpg",
      "/projects/1468-n-ashland/gallery-3.jpg",
      "/projects/1468-n-ashland/gallery-4.jpg",
      "/projects/1468-n-ashland/gallery-5.jpg",
      "/projects/1468-n-ashland/gallery-6.jpg",
      "/projects/1468-n-ashland/gallery-7.jpg",
      "/projects/1468-n-ashland/gallery-8.jpg",
      "/projects/1468-n-ashland/gallery-9.jpg",
      "/projects/1468-n-ashland/gallery-10.jpg",
      "/projects/1468-n-ashland/gallery-11.jpg",
      "/projects/1468-n-ashland/gallery-12.jpg",
    ],
    description: "Mixed-use boutique building on Ashland Avenue in Wicker Park. The original 1875 structure was redeveloped in 2017 into an upscale building totaling 4,200 sq ft, with ground-floor commercial and retail space and four residences above.",
  },
  // 2016
  {
    address: "1433 N. Ashland", neighborhood: "Wicker Park", type: "Residential", slug: "1433-n-ashland",
    img: "/projects/1433-n-ashland/main.jpg",
    extraImages: [
      "/projects/1433-n-ashland/gallery-2.jpg",
      "/projects/1433-n-ashland/gallery-3.jpg",
      "/projects/1433-n-ashland/gallery-4.jpg",
      "/projects/1433-n-ashland/gallery-5.jpg",
      "/projects/1433-n-ashland/gallery-6.jpg",
      "/projects/1433-n-ashland/gallery-7.jpg",
      "/projects/1433-n-ashland/gallery-8.jpg",
      "/projects/1433-n-ashland/gallery-9.jpg",
      "/projects/1433-n-ashland/gallery-10.jpg",
      "/projects/1433-n-ashland/gallery-11.jpg",
      "/projects/1433-n-ashland/gallery-12.jpg",
      "/projects/1433-n-ashland/gallery-13.jpg",
      "/projects/1433-n-ashland/gallery-14.jpg",
      "/projects/1433-n-ashland/gallery-15.jpg",
    ],
    description: "Ten-unit boutique elevator building in Wicker Park, built in 2016, totaling 18,000 sq ft. Units offer approximately 1,600 to 1,700 sq ft with three bedrooms, two baths, and contemporary finishes throughout, with modern construction and luxury appointments.",
  },
  {
    address: "1512 W. Huron", neighborhood: "Noble Square", type: "Residential", slug: "1512-w-huron",
    img: "/projects/1512-w-huron/main.jpg",
    extraImages: [
      "/projects/1512-w-huron/living-room.jpg",
      "/projects/1512-w-huron/gallery-3.jpg",
      "/projects/1512-w-huron/gallery-4.jpg",
      "/projects/1512-w-huron/kitchen-peninsula.jpg",
      "/projects/1512-w-huron/dining-room.jpg",
      "/projects/1512-w-huron/gallery-14.jpg",
      "/projects/1512-w-huron/staircase.jpg",
      "/projects/1512-w-huron/primary-bedroom.jpg",
      "/projects/1512-w-huron/gallery-11.jpg",
      "/projects/1512-w-huron/gallery-12.jpg",
      "/projects/1512-w-huron/primary-bath.jpg",
      "/projects/1512-w-huron/private-deck.jpg",
      "/projects/1512-w-huron/deck-roof-access.jpg",
    ],
    description: "All-brick, three-unit condo building in Noble Square, built in 2016, totaling 4,800 sq ft. The ground-floor residence spans 2,587 sq ft with three bedrooms, while upper units offer two-bedroom layouts. All units include modern finishes and garage parking.",
  },
  {
    address: "1944 W. Crystal", neighborhood: "Wicker Park", type: "Residential", slug: "1944-w-crystal",
    img: "/projects/1944-w-crystal/main.jpg",
    extraImages: [
      "/projects/1944-w-crystal/1.jpg",
      "/projects/1944-w-crystal/kitchen-living.jpg",
      "/projects/1944-w-crystal/living-room.jpg",
      "/projects/1944-w-crystal/dining.jpg",
      "/projects/1944-w-crystal/living-stairs.jpg",
      "/projects/1944-w-crystal/staircase.jpg",
      "/projects/1944-w-crystal/railing-detail.jpg",
      "/projects/1944-w-crystal/living-from-stairs.jpg",
      "/projects/1944-w-crystal/kitchen-island.jpg",
      "/projects/1944-w-crystal/gallery-6.jpg",
      "/projects/1944-w-crystal/gallery-7.jpg",
      "/projects/1944-w-crystal/bedroom.jpg",
      "/projects/1944-w-crystal/primary-bath.jpg",
      "/projects/1944-w-crystal/gallery-13.jpg",
      "/projects/1944-w-crystal/gallery-14.jpg",
      "/projects/1944-w-crystal/mudroom.jpg",
      "/projects/1944-w-crystal/roof-deck.jpg",
      "/projects/1944-w-crystal/roof-deck-2.jpg",
    ],
    description: "Two-unit luxury condo building on a tree-lined Wicker Park block, built in 2016, totaling 4,200 sq ft. Residences feature designer kitchens, heated floors, and private outdoor spaces across three- and four-bedroom layouts.",
  },
  // 2015
  {
    address: "1305 W. Chicago", neighborhood: "Noble Square", type: "Mixed-Use", slug: "1305-w-chicago",
    img: "/projects/1305-w-chicago/facade.jpg",
    extraImages: [
      "/projects/1305-w-chicago/hallway.jpg",
      "/projects/1305-w-chicago/kitchen-living.jpg",
      "/projects/1305-w-chicago/living-room.jpg",
      "/projects/1305-w-chicago/master-bedroom.jpg",
      "/projects/1305-w-chicago/bathroom.jpg",
      "/projects/1305-w-chicago/second-bedroom.jpg",
      "/projects/1305-w-chicago/rooftop-deck.jpg",
    ],
    description: "Seven-unit boutique elevator building spanning 1305-1311 W. Chicago Avenue in Noble Square, completed in 2015, totaling 12,000 sq ft. Units feature three bedrooms and two baths across roughly 1,660 sq ft with dark oak hardwood floors, custom Italian cabinetry, quartz countertops, and private elevator-accessed rooftop decks with Chicago skyline views.",
  },
  {
    address: "1756 W. Wabansia", neighborhood: "Bucktown", type: "Residential", slug: "1756-w-wabansia",
    img: "/projects/1756-w-wabansia/facade.jpg",
    extraImages: [
      "/projects/1756-w-wabansia/living-room.jpg",
      "/projects/1756-w-wabansia/dining.jpg",
      "/projects/1756-w-wabansia/kitchen.jpg",
      "/projects/1756-w-wabansia/stairs.jpg",
      "/projects/1756-w-wabansia/primary-bedroom.jpg",
      "/projects/1756-w-wabansia/primary-bath.jpg",
      "/projects/1756-w-wabansia/lower-level.jpg",
      "/projects/1756-w-wabansia/gym.jpg",
      "/projects/1756-w-wabansia/covered-deck.jpg",
      "/projects/1756-w-wabansia/roof-deck.jpg",
    ],
    description: "New construction single-family residence in Bucktown, built in 2015, with roughly 3,000 sq ft of living space. The home features four bedrooms, a Gaggenau kitchen, white oak floors, custom floating stairs with glass railings, a cedar garage deck, and specialty lighting throughout.",
  },
  // 2014
  {
    address: "756 N. Leavitt", neighborhood: "Ukrainian Village", type: "Mixed-Use", slug: "756-n-leavitt",
    img: "/projects/756-n-leavitt/main.jpg",
    extraImages: [
      "/projects/756-n-leavitt/gallery-5.jpg",
      "/projects/756-n-leavitt/gallery-6.jpg",
      "/projects/756-n-leavitt/gallery-7.jpg",
      "/projects/756-n-leavitt/gallery-8.jpg",
      "/projects/756-n-leavitt/gallery-9.jpg",
      "/projects/756-n-leavitt/gallery-10.jpg",
      "/projects/756-n-leavitt/gallery-12.jpg",
      "/projects/756-n-leavitt/gallery-13.jpg",
      "/projects/756-n-leavitt/gallery-14.jpg",
      "/projects/756-n-leavitt/bedroom.jpg",
      "/projects/756-n-leavitt/bath.jpg",
      "/projects/756-n-leavitt/roof-deck.jpg",
      "/projects/756-n-leavitt/roof-deck-skyline.jpg",
    ],
    description: "Boutique mixed-use elevator building on a corner lot in Ukrainian Village, built in 2014, with eight residences totaling 16,000 sq ft. A ground-floor restaurant anchors the building, with extra-wide layouts over 23 ft across, hardwood floors, attached heated garage parking, and 500 sq ft private rooftop decks with skyline views.",
  },
  {
    address: "1809 W. Chicago", neighborhood: "Ukrainian Village", type: "Residential", slug: "1809-w-chicago",
    img: "/projects/1809-w-chicago/main.jpg",
    extraImages: [
      "/projects/1809-w-chicago/gallery-2.jpg",
      "/projects/1809-w-chicago/gallery-3.jpg",
      "/projects/1809-w-chicago/gallery-4.jpg",
      "/projects/1809-w-chicago/gallery-5.jpg",
      "/projects/1809-w-chicago/gallery-6.jpg",
      "/projects/1809-w-chicago/gallery-7.jpg",
      "/projects/1809-w-chicago/gallery-8.jpg",
      "/projects/1809-w-chicago/gallery-9.jpg",
      "/projects/1809-w-chicago/gallery-10.jpg",
      "/projects/1809-w-chicago/gallery-11.jpg",
      "/projects/1809-w-chicago/gallery-12.jpg",
      "/projects/1809-w-chicago/gallery-13.jpg",
      "/projects/1809-w-chicago/gallery-14.jpg",
      "/projects/1809-w-chicago/gallery-15.jpg",
      "/projects/1809-w-chicago/1.jpg",
    ],
    description: "Ten-unit, four-story condo building on Chicago Avenue in Ukrainian Village, built in 2014, totaling 18,000 sq ft. Units feature three-bedroom layouts of roughly 1,500 to 1,800 sq ft, in-unit laundry, and heated garage parking.",
  },
  // 2013
  {
    address: "1457 W. Erie", neighborhood: "Noble Square", type: "Residential", slug: "1457-w-erie",
    img: "/projects/1457-w-erie/main.jpg",
    extraImages: [
      "/projects/1457-w-erie/gallery-2.jpg",
      "/projects/1457-w-erie/gallery-3.jpg",
      "/projects/1457-w-erie/gallery-4.jpg",
      "/projects/1457-w-erie/gallery-5.jpg",
      "/projects/1457-w-erie/gallery-6.jpg",
      "/projects/1457-w-erie/gallery-7.jpg",
      "/projects/1457-w-erie/gallery-8.jpg",
      "/projects/1457-w-erie/gallery-9.jpg",
      "/projects/1457-w-erie/gallery-10.jpg",
      "/projects/1457-w-erie/gallery-11.jpg",
      "/projects/1457-w-erie/gallery-12.jpg",
      "/projects/1457-w-erie/gallery-13.jpg",
      "/projects/1457-w-erie/gallery-14.jpg",
      "/projects/1457-w-erie/1.jpg",
    ],
    description: "Three-unit condo building in Noble Square built in 2013 by Db Develops, totaling 4,600 sq ft. Units feature clean-line contemporary design with custom imported finishes and duplex-style layouts, ranging from 1,350 to 2,400 sq ft with two- and three-bedroom configurations.",
  },
  {
    address: "1013 N. Honore", neighborhood: "East Village", type: "Residential", slug: "1013-n-honore",
    img: "/projects/1013-n-honore/main.jpg",
    extraImages: [
      "/projects/1013-n-honore/living-room.jpg",
      "/projects/1013-n-honore/gallery-3.jpg",
      "/projects/1013-n-honore/kitchen-birch.jpg",
      "/projects/1013-n-honore/gallery-4.jpg",
      "/projects/1013-n-honore/dining.jpg",
      "/projects/1013-n-honore/gallery-7.jpg",
      "/projects/1013-n-honore/roof-deck.jpg",
    ],
    description: "Three-unit condo building in East Village, built in 2013, totaling 4,800 sq ft. The ground-floor duplex spans 2,400 sq ft with three bedrooms. All units feature Thermador appliances, custom cabinetry, hardwood floors, and in-unit laundry.",
  },
  {
    address: "1002 N. Hermitage", neighborhood: "East Village", type: "Residential", slug: "1002-n-hermitage",
    img: "/projects/1002-n-hermitage/main.jpg",
    extraImages: ["/projects/1002-n-hermitage/1.jpg"],
    description: "Two-unit condo building in East Village, built in 2013, totaling 4,200 sq ft. Residences offer roughly 2,100 sq ft with three bedrooms and modern finishes throughout.",
  },
  {
    address: "1731 N. Richmond", neighborhood: "Logan Square", type: "Residential", slug: "1731-n-richmond",
    img: "/projects/1731-n-richmond/main.jpg",
    description: "Single-family home in Logan Square built in 2013, steps from the 606 trail. The roughly 2,200 sq ft residence features 13-ft ceilings, 35 linear feet of Italian kitchen cabinetry, Bosch appliances, custom light fixtures with reclaimed wood from the original home, an oversized walk-out deck, and a rooftop area.",
  },
  // 2012
  {
    address: "2207 W. Chicago", neighborhood: "Ukrainian Village", type: "Residential", slug: "2207-w-chicago",
    img: "/projects/2207-w-chicago/main.jpg",
    extraImages: [
      "/projects/2207-w-chicago/gallery-3.jpg",
      "/projects/2207-w-chicago/gallery-4.jpg",
      "/projects/2207-w-chicago/gallery-7.jpg",
      "/projects/2207-w-chicago/gallery-8.jpg",
      "/projects/2207-w-chicago/gallery-9.jpg",
      "/projects/2207-w-chicago/kitchen.jpg",
      "/projects/2207-w-chicago/bedroom.jpg",
      "/projects/2207-w-chicago/gallery-11.jpg",
      "/projects/2207-w-chicago/gallery-13.jpg",
      "/projects/2207-w-chicago/gallery-17.jpg",
      "/projects/2207-w-chicago/roof-deck-lights.jpg",
    ],
    description: "Seven-unit elevator building on Chicago Avenue in Ukrainian Village, built in 2012, totaling 12,000 sq ft. Units feature three bedrooms and two baths with 11-ft ceilings, floor-to-ceiling windows, two-car tandem garage parking, and private rooftop access, ranging from 1,650 to 1,800 sq ft.",
  },
  {
    address: "532 N. Hermitage", neighborhood: "West Town", type: "Residential", slug: "532-n-hermitage",
    img: "/projects/532-n-hermitage/main.jpg",
    extraImages: [
      "/projects/532-n-hermitage/living-room.jpg",
      "/projects/532-n-hermitage/living-room-open-plan.jpg",
      "/projects/532-n-hermitage/floating-staircase.jpg",
      "/projects/532-n-hermitage/gallery-6.jpg",
      "/projects/532-n-hermitage/gallery-9.jpg",
      "/projects/532-n-hermitage/gallery-10.jpg",
      "/projects/532-n-hermitage/kitchen-detail.jpg",
      "/projects/532-n-hermitage/kitchen-island.jpg",
      "/projects/532-n-hermitage/gallery-14.jpg",
      "/projects/532-n-hermitage/primary-bedroom.jpg",
      "/projects/532-n-hermitage/guest-bedroom.jpg",
      "/projects/532-n-hermitage/primary-bathroom.jpg",
      "/projects/532-n-hermitage/terrace.jpg",
      "/projects/532-n-hermitage/terrace-stair-tower.jpg",
      "/projects/532-n-hermitage/exterior-steel-stairs.jpg",
    ],
    description: "Four-unit contemporary condo building in West Town, built in 2012, totaling 8,000 sq ft. Residences offer roughly 2,000 sq ft with three bedrooms, large east-facing windows, modern finishes, and attached garage parking.",
  },
  // 2011
  {
    address: "814-20 N. Wood", neighborhood: "East Village", type: "Residential", slug: "814-n-wood",
    img: "/projects/814-n-wood/main.jpg",
    extraImages: [
      "/projects/814-n-wood/gallery-2.jpg",
      "/projects/814-n-wood/gallery-3.jpg",
      "/projects/814-n-wood/gallery-4.jpg",
      "/projects/814-n-wood/gallery-5.jpg",
      "/projects/814-n-wood/gallery-6.jpg",
      "/projects/814-n-wood/gallery-7.jpg",
      "/projects/814-n-wood/gallery-8.jpg",
      "/projects/814-n-wood/gallery-9.jpg",
      "/projects/814-n-wood/gallery-10.jpg",
      "/projects/814-n-wood/gallery-11.jpg",
      "/projects/814-n-wood/gallery-12.jpg",
      "/projects/814-n-wood/gallery-13.jpg",
      "/projects/814-n-wood/gallery-14.jpg",
      "/projects/814-n-wood/gallery-15.jpg",
    ],
    description: "Six-unit development spanning 814-820 N. Wood on an oversized corner lot in East Village, built in 2011, totaling 9,600 sq ft. Residences include duplex-down units with private roof decks, hardwood floors, quartz countertops, and spa-style primary baths with heated floors and steam showers.",
  },
  {
    address: "1517 W. Pearson", neighborhood: "Noble Square", type: "Residential", slug: "1517-w-pearson",
    img: "/projects/1517-w-pearson/main.jpg",
    extraImages: [
      "/projects/1517-w-pearson/gallery-2.jpg",
      "/projects/1517-w-pearson/gallery-3.jpg",
      "/projects/1517-w-pearson/gallery-4.jpg",
      "/projects/1517-w-pearson/gallery-5.jpg",
      "/projects/1517-w-pearson/gallery-6.jpg",
      "/projects/1517-w-pearson/gallery-7.jpg",
      "/projects/1517-w-pearson/gallery-8.jpg",
      "/projects/1517-w-pearson/gallery-9.jpg",
    ],
    description: "Two-unit boutique condo building in Noble Square, part of the Ogden Haus development, built in 2011 and totaling 4,000 sq ft. Both residences feature three-bedroom layouts with modern finishes, open floor plans, and Bosch and Dacor appliances.",
  },
  // 2010
  {
    address: "1108 W. Fry", neighborhood: "Noble Square", type: "Residential", slug: "1108-w-fry",
    img: "/projects/1108-w-fry/main.jpg",
    extraImages: [
      "/projects/1108-w-fry/gallery-2.jpg",
      "/projects/1108-w-fry/gallery-4.jpg",
      "/projects/1108-w-fry/gallery-9.jpg",
      "/projects/1108-w-fry/gallery-11.jpg",
      "/projects/1108-w-fry/gallery-14.jpg",
      "/projects/1108-w-fry/gallery-15.jpg",
      "/projects/1108-w-fry/deck-lounge.jpg",
      "/projects/1108-w-fry/roof-bar.jpg",
      "/projects/1108-w-fry/roof-dining.jpg",
      "/projects/1108-w-fry/skyline-view.jpg",
    ],
    description: "Two-unit condo building on a quiet Noble Square side street, built in 2010, totaling 4,000 sq ft. The upper residence offers 2,000 sq ft with three bedrooms and three baths in a modern, open layout.",
  },
  // 2009
  {
    address: "1527 W. Chestnut", neighborhood: "Noble Square", type: "Residential", slug: "1527-w-chestnut",
    img: "/projects/1527-w-chestnut/main.jpg",
    description: "Three-unit boutique condo building in Noble Square, part of the Ogden Haus development, built in 2009 and totaling 5,600 sq ft. The ground-floor unit offers 2,100 sq ft with three bedrooms, while upper residences provide two-bedroom layouts with modern finishes.",
  },
  {
    address: "922 N. Hermitage", neighborhood: "East Village", type: "Residential", slug: "922-n-hermitage",
    img: "/projects/922-n-hermitage/main.jpg",
    extraImages: [
      "/projects/922-n-hermitage/gallery-2.jpg",
      "/projects/922-n-hermitage/gallery-3.jpg",
      "/projects/922-n-hermitage/gallery-4.jpg",
      "/projects/922-n-hermitage/gallery-5.jpg",
      "/projects/922-n-hermitage/gallery-6.jpg",
      "/projects/922-n-hermitage/gallery-7.jpg",
      "/projects/922-n-hermitage/gallery-8.jpg",
      "/projects/922-n-hermitage/gallery-9.jpg",
      "/projects/922-n-hermitage/gallery-10.jpg",
      "/projects/922-n-hermitage/gallery-11.jpg",
      "/projects/922-n-hermitage/gallery-12.jpg",
      "/projects/922-n-hermitage/gallery-13.jpg",
      "/projects/922-n-hermitage/gallery-14.jpg",
      "/projects/922-n-hermitage/gallery-15.jpg",
    ],
    description: "Three-unit, three-story condo building in East Village, built in 2009, totaling 4,800 sq ft. The ground-floor duplex features luxury finishes, a wet bar, and a steam shower, with two-bedroom residences above.",
  },
  {
    address: "1074 N. Paulina", neighborhood: "East Village", type: "Residential", slug: "1074-n-paulina",
    img: "/projects/1074-n-paulina/main.jpg",
    description: "Three-unit condo building in East Village on the border of Wicker Park, built in 2009, totaling 4,800 sq ft. The building features three- and two-bedroom residences with contemporary finishes throughout.",
  },
  // 2008
  {
    address: "1331 N. Mohawk", neighborhood: "Old Town", type: "Residential", slug: "1331-n-mohawk",
    img: "/projects/1331-n-mohawk/main.jpg",
    extraImages: [
      "/projects/1331-n-mohawk/gallery-3.jpg",
      "/projects/1331-n-mohawk/gallery-4.jpg",
      "/projects/1331-n-mohawk/gallery-8.jpg",
      "/projects/1331-n-mohawk/gallery-9.jpg",
    ],
    description: "Contemporary three-unit condo building in Old Town, built in 2008, totaling 4,800 sq ft. The building features 11-ft ceilings, stone fireplaces, Dacor appliances, walnut cabinetry, and spa-style primary baths with steam showers. Units have private outdoor spaces and separate entrances.",
  },
  {
    address: "1438 N. Wood", neighborhood: "Wicker Park", type: "Residential", slug: "1438-n-wood",
    img: "/projects/1438-n-wood/main.jpg",
    extraImages: [
      "/projects/1438-n-wood/living-room.jpg",
      "/projects/1438-n-wood/gallery-3.jpg",
      "/projects/1438-n-wood/open-concept-living.jpg",
      "/projects/1438-n-wood/kitchen-white.jpg",
      "/projects/1438-n-wood/gallery-5.jpg",
      "/projects/1438-n-wood/gallery-6.jpg",
      "/projects/1438-n-wood/dining-room.jpg",
      "/projects/1438-n-wood/glass-staircase.jpg",
      "/projects/1438-n-wood/lower-level-family-room.jpg",
      "/projects/1438-n-wood/primary-bedroom.jpg",
      "/projects/1438-n-wood/gallery-10.jpg",
      "/projects/1438-n-wood/gallery-12.jpg",
      "/projects/1438-n-wood/primary-bath.jpg",
      "/projects/1438-n-wood/private-deck.jpg",
      "/projects/1438-n-wood/roof-deck.jpg",
    ],
    description: "Three-unit condo building in Wicker Park, built in 2008, totaling 4,800 sq ft. The ground-floor residence spans 2,300 sq ft with three bedrooms and three baths, while upper units offer two-bedroom layouts, all with modern finishes and garage parking.",
  },
  {
    address: "2116 W. Barry", neighborhood: "Roscoe Village", type: "Residential", slug: "2116-w-barry",
    img: "/projects/2116-w-barry/main.jpg",
    description: "All-brick, three-unit condo building near Hamlin Park in Roscoe Village, built in 2008, totaling 4,800 sq ft. Residences range from 1,300 to 2,300 sq ft with two- and three-bedroom layouts on a quiet residential street.",
  },
  // 2007
  {
    address: "2702-12 W. Chicago", neighborhood: "Humboldt Park", type: "Mixed-Use", slug: "2702-w-chicago",
    img: "/projects/2702-w-chicago/main.jpg",
    extraImages: [
      "/projects/2702-w-chicago/gallery-2.jpg",
      "/projects/2702-w-chicago/living-fireplace.jpg",
      "/projects/2702-w-chicago/living-room.jpg",
      "/projects/2702-w-chicago/gallery-5.jpg",
      "/projects/2702-w-chicago/kitchen.jpg",
      "/projects/2702-w-chicago/kitchen-detail.jpg",
      "/projects/2702-w-chicago/gallery-7.jpg",
      "/projects/2702-w-chicago/gallery-9.jpg",
      "/projects/2702-w-chicago/bedroom.jpg",
      "/projects/2702-w-chicago/primary-bath.jpg",
      "/projects/2702-w-chicago/gallery-11.jpg",
      "/projects/2702-w-chicago/gallery-13.jpg",
      "/projects/2702-w-chicago/balcony-skyline.jpg",
      "/projects/2702-w-chicago/rooftop-deck.jpg",
    ],
    description: "Large mixed-use development spanning 2702-2712 W. Chicago Avenue, built in 2007, with twenty residences and ground-floor commercial space totaling 32,000 sq ft. The building features 9-10 ft ceilings, gas fireplaces, walnut cabinetry, a shared rooftop deck, and private balconies, with a 1,400 sq ft storefront anchoring the Chicago Avenue corridor.",
  },
  {
    address: "2241 W. Roscoe", neighborhood: "Roscoe Village", type: "Residential", slug: "2241-w-roscoe",
    img: "/projects/2241-w-roscoe/main.jpg",
    extraImages: [
      "/projects/2241-w-roscoe/gallery-2.jpg",
      "/projects/2241-w-roscoe/gallery-3.jpg",
      "/projects/2241-w-roscoe/gallery-4.jpg",
      "/projects/2241-w-roscoe/gallery-5.jpg",
      "/projects/2241-w-roscoe/gallery-6.jpg",
      "/projects/2241-w-roscoe/gallery-7.jpg",
      "/projects/2241-w-roscoe/gallery-8.jpg",
      "/projects/2241-w-roscoe/gallery-9.jpg",
      "/projects/2241-w-roscoe/gallery-10.jpg",
      "/projects/2241-w-roscoe/gallery-11.jpg",
      "/projects/2241-w-roscoe/gallery-12.jpg",
      "/projects/2241-w-roscoe/gallery-13.jpg",
      "/projects/2241-w-roscoe/gallery-14.jpg",
      "/projects/2241-w-roscoe/gallery-15.jpg",
    ],
    description: "Brick-and-limestone, three-unit condo building in the Audubon Elementary school district in Roscoe Village, built in 2007, totaling 6,200 sq ft. Units range up to 2,500 sq ft, with the penthouse holding exclusive rooftop rights. Covered parking included.",
  },
  {
    address: "2243 W. Roscoe", neighborhood: "Roscoe Village", type: "Residential", slug: "2243-w-roscoe",
    img: "/projects/2243-w-roscoe/main.jpg",
    extraImages: [
      "/projects/2243-w-roscoe/gallery-3.jpg",
      "/projects/2243-w-roscoe/gallery-4.jpg",
      "/projects/2243-w-roscoe/gallery-5.jpg",
      "/projects/2243-w-roscoe/gallery-8.jpg",
      "/projects/2243-w-roscoe/gallery-10.jpg",
      "/projects/2243-w-roscoe/gallery-11.jpg",
    ],
    description: "Three-unit brick building next door to 2241 W. Roscoe in Roscoe Village, built in 2007, totaling 6,200 sq ft. The ground-floor duplex-down offers four bedrooms and 3,020 sq ft with a 31x15 ft rec room on the lower level. Upper units feature gas fireplaces and quartz countertops.",
  },
  {
    address: "1037 N. Marshfield", neighborhood: "East Village", type: "Residential", slug: "1037-n-marshfield",
    img: "/projects/1037-n-marshfield/main.jpg",
    extraImages: [
      "/projects/1037-n-marshfield/gallery-2.jpg",
      "/projects/1037-n-marshfield/gallery-3.jpg",
      "/projects/1037-n-marshfield/gallery-4.jpg",
      "/projects/1037-n-marshfield/gallery-5.jpg",
      "/projects/1037-n-marshfield/gallery-6.jpg",
      "/projects/1037-n-marshfield/gallery-7.jpg",
      "/projects/1037-n-marshfield/gallery-8.jpg",
      "/projects/1037-n-marshfield/gallery-9.jpg",
      "/projects/1037-n-marshfield/gallery-10.jpg",
      "/projects/1037-n-marshfield/gallery-11.jpg",
      "/projects/1037-n-marshfield/gallery-12.jpg",
      "/projects/1037-n-marshfield/gallery-13.jpg",
      "/projects/1037-n-marshfield/gallery-14.jpg",
      "/projects/1037-n-marshfield/gallery-15.jpg",
    ],
    description: "Three-story, all-brick, three-unit building in East Village, built in 2007, totaling 4,800 sq ft. The ground-floor duplex spans 2,400 sq ft with three bedrooms, while upper units offer two-bedroom layouts with hardwood floors and modern finishes.",
  },
  {
    address: "1039 N. Marshfield", neighborhood: "East Village", type: "Residential", slug: "1039-n-marshfield",
    img: "/projects/1039-n-marshfield/main.jpg",
    extraImages: [
      "/projects/1039-n-marshfield/gallery-2.jpg",
      "/projects/1039-n-marshfield/gallery-3.jpg",
      "/projects/1039-n-marshfield/gallery-4.jpg",
      "/projects/1039-n-marshfield/gallery-5.jpg",
      "/projects/1039-n-marshfield/gallery-6.jpg",
      "/projects/1039-n-marshfield/gallery-7.jpg",
      "/projects/1039-n-marshfield/gallery-8.jpg",
      "/projects/1039-n-marshfield/gallery-9.jpg",
      "/projects/1039-n-marshfield/gallery-10.jpg",
      "/projects/1039-n-marshfield/gallery-11.jpg",
      "/projects/1039-n-marshfield/gallery-12.jpg",
      "/projects/1039-n-marshfield/gallery-13.jpg",
      "/projects/1039-n-marshfield/gallery-14.jpg",
      "/projects/1039-n-marshfield/gallery-15.jpg",
    ],
    description: "Three-story masonry building adjacent to 1037 N. Marshfield in East Village, built in 2007, totaling 4,800 sq ft across three units, with an 1,800 sq ft ground-floor residence and 1,400 sq ft upper units.",
  },
  // 2006
  {
    address: "1849 W. Armitage", neighborhood: "Bucktown", type: "Residential", slug: "1849-w-armitage",
    img: "/projects/1849-w-armitage/main.webp",
    description: "Three-story brick building with three condos on Bucktown's main Armitage corridor, built in 2006, totaling 4,800 sq ft. Units include hardwood floors, in-unit laundry, gas fireplaces, and a detached garage.",
  },
  {
    address: "2032 W. Superior", neighborhood: "Ukrainian Village", type: "Residential", slug: "2032-w-superior",
    img: "/projects/2032-w-superior/main.jpg",
    description: "Three-unit condo building on Superior Street in Ukrainian Village, built in 2006, totaling 5,400 sq ft. The building offers two- and three-bedroom residences with modern finishes in a walkable location one block off the Chicago Avenue corridor.",
  },
  // 2005
  {
    address: "1350 N. Campbell", neighborhood: "Humboldt Park", type: "Residential", slug: "1350-n-campbell",
    img: "/projects/1350-n-campbell/main.jpg",
    extraImages: [
      "/projects/1350-n-campbell/gallery-2.jpg",
      "/projects/1350-n-campbell/gallery-3.jpg",
      "/projects/1350-n-campbell/gallery-4.jpg",
      "/projects/1350-n-campbell/gallery-5.jpg",
      "/projects/1350-n-campbell/gallery-6.jpg",
      "/projects/1350-n-campbell/gallery-7.jpg",
      "/projects/1350-n-campbell/gallery-8.jpg",
      "/projects/1350-n-campbell/gallery-9.jpg",
      "/projects/1350-n-campbell/gallery-10.jpg",
      "/projects/1350-n-campbell/gallery-11.jpg",
      "/projects/1350-n-campbell/gallery-12.jpg",
      "/projects/1350-n-campbell/gallery-13.jpg",
      "/projects/1350-n-campbell/gallery-14.jpg",
      "/projects/1350-n-campbell/gallery-15.jpg",
    ],
    description: "Four-unit building in a 1909 solid-brick structure on a tree-lined block steps from Humboldt Park, redeveloped in 2005 and totaling 4,200 sq ft. Units feature modern fireplaces, Juliette balconies, renovated baths with Moroccan tile, in-unit laundry, and garage parking.",
  },  {
    address: "2647 W. Haddon", neighborhood: "West Town", type: "Residential", slug: "2647-w-haddon",
    img: "/projects/2647-w-haddon/main.jpg",
    extraImages: [
      "/projects/2647-w-haddon/living-room.jpg",
      "/projects/2647-w-haddon/living-room-fireplace.jpg",
      "/projects/2647-w-haddon/gallery-4.jpg",
      "/projects/2647-w-haddon/gallery-6.jpg",
      "/projects/2647-w-haddon/gallery-7.jpg",
      "/projects/2647-w-haddon/gallery-8.jpg",
      "/projects/2647-w-haddon/gallery-10.jpg",
      "/projects/2647-w-haddon/gallery-11.jpg",
      "/projects/2647-w-haddon/balcony.jpg",
      "/projects/2647-w-haddon/roof-deck.jpg",
    ],
    description: "Three-unit condo building built in 2005 just west of Ukrainian Village, near the California Avenue corridor, totaling 4,800 sq ft. The building includes a spacious ground-floor duplex with three bedrooms and three baths, plus two upper-level residences.",
  },
  {
    address: "2027 W. Rice", neighborhood: "Ukrainian Village", type: "Residential", slug: "2027-w-rice",
    img: "/projects/2027-w-rice/main.jpg",
    extraImages: [
      "/projects/2027-w-rice/living-room.jpg",
      "/projects/2027-w-rice/open-concept.jpg",
      "/projects/2027-w-rice/kitchen.jpg",
      "/projects/2027-w-rice/kitchen-island.jpg",
      "/projects/2027-w-rice/primary-bedroom.jpg",
      "/projects/2027-w-rice/primary-bath.jpg",
      "/projects/2027-w-rice/lower-level-family-room.jpg",
      "/projects/2027-w-rice/balcony.jpg",
      "/projects/2027-w-rice/patio.jpg",
    ],
    description: "Three-unit condo building built in 2005, adjacent to 2029 W. Rice on the same Ukrainian Village block, totaling 4,800 sq ft. Units range from 1,250 to 2,200 sq ft with two- and three-bedroom layouts.",
  },
  {
    address: "2029 W. Rice", neighborhood: "Ukrainian Village", type: "Residential", slug: "2029-w-rice",
    img: "/projects/2029-w-rice/main.jpg",
    extraImages: [
      "/projects/2029-w-rice/gallery-2.jpg",
      "/projects/2029-w-rice/gallery-3.jpg",
      "/projects/2029-w-rice/gallery-4.jpg",
      "/projects/2029-w-rice/gallery-5.jpg",
      "/projects/2029-w-rice/gallery-6.jpg",
      "/projects/2029-w-rice/gallery-7.jpg",
      "/projects/2029-w-rice/gallery-8.jpg",
      "/projects/2029-w-rice/gallery-9.jpg",
      "/projects/2029-w-rice/gallery-10.jpg",
      "/projects/2029-w-rice/gallery-11.jpg",
      "/projects/2029-w-rice/gallery-12.jpg",
      "/projects/2029-w-rice/gallery-13.jpg",
      "/projects/2029-w-rice/gallery-14.jpg",
      "/projects/2029-w-rice/gallery-15.jpg",
    ],
    description: "Brick-and-limestone, three-unit condo building on a quiet Ukrainian Village side street, built in 2005 and totaling 4,800 sq ft. The building features a 2,200 sq ft duplex-down and upper-level residences with contemporary finishes throughout.",
  },
];

// Pins for the map
export const allPins: MapPin[] = [
  { address: "1350 N. Campbell", lat: 41.9056, lng: -87.6978, type: "Residential" },
  { address: "2647 W. Haddon", lat: 41.9021, lng: -87.6935, type: "Residential" },
  { address: "2029 W. Rice", lat: 41.8968, lng: -87.6780, type: "Residential" },
  { address: "2027 W. Rice", lat: 41.8968, lng: -87.6778, type: "Residential" },
  { address: "1849 W. Armitage", lat: 41.9175, lng: -87.6735, type: "Residential" },
  { address: "2032 W. Superior", lat: 41.8952, lng: -87.6858, type: "Residential" },
  { address: "1037 N. Marshfield", lat: 41.8993, lng: -87.6736, type: "Residential" },
  { address: "1039 N. Marshfield", lat: 41.8993, lng: -87.6736, type: "Residential" },
  { address: "2702-12 W. Chicago", lat: 41.8960, lng: -87.7092, type: "Mixed-Use" },
  { address: "2241 W. Roscoe", lat: 41.9385, lng: -87.6932, type: "Residential" },
  { address: "2243 W. Roscoe", lat: 41.9385, lng: -87.6932, type: "Residential" },
  { address: "1331 N. Mohawk", lat: 41.9058, lng: -87.6472, type: "Residential" },
  { address: "2116 W. Barry", lat: 41.9370, lng: -87.6900, type: "Residential" },
  { address: "1438 N. Wood", lat: 41.9082, lng: -87.6720, type: "Residential" },
  { address: "922 N. Hermitage", lat: 41.8979, lng: -87.6736, type: "Residential" },
  { address: "1527 W. Chestnut", lat: 41.8980, lng: -87.6710, type: "Residential" },
  { address: "1074 N. Paulina", lat: 41.9000, lng: -87.6736, type: "Residential" },
  { address: "1108 W. Fry", lat: 41.8989, lng: -87.6618, type: "Residential" },
  { address: "814-20 N. Wood", lat: 41.8960, lng: -87.6720, type: "Residential" },
  { address: "1517 W. Pearson", lat: 41.9000, lng: -87.6708, type: "Residential" },
  { address: "2207 W. Chicago", lat: 41.8960, lng: -87.6928, type: "Residential" },
  { address: "532 N. Hermitage", lat: 41.8890, lng: -87.6736, type: "Residential" },
  { address: "1457 W. Erie", lat: 41.8920, lng: -87.6680, type: "Residential" },
  { address: "1013 N. Honore", lat: 41.8993, lng: -87.6748, type: "Residential" },
  { address: "1731 N. Richmond", lat: 41.9150, lng: -87.7012, type: "Residential" },
  { address: "1002 N. Hermitage", lat: 41.8993, lng: -87.6736, type: "Residential" },
  { address: "756 N. Leavitt", lat: 41.8939, lng: -87.6820, type: "Mixed-Use" },
  { address: "1809 W. Chicago", lat: 41.8960, lng: -87.6802, type: "Residential" },
  { address: "1756 W. Wabansia", lat: 41.9118, lng: -87.6776, type: "Residential" },
  { address: "1305 W. Chicago", lat: 41.8960, lng: -87.6650, type: "Mixed-Use" },
  { address: "1944 W. Crystal", lat: 41.9039, lng: -87.6760, type: "Residential" },
  { address: "1433 N. Ashland", lat: 41.9082, lng: -87.6692, type: "Residential" },
  { address: "1512 W. Huron", lat: 41.8929, lng: -87.6708, type: "Residential" },
  { address: "1106 N. Marshfield", lat: 41.9009, lng: -87.6736, type: "Residential" },
  { address: "1468 N. Ashland", lat: 41.9089, lng: -87.6692, type: "Mixed-Use" },
  { address: "1739 W. Julian", lat: 41.9074, lng: -87.6708, type: "Residential" },
  { address: "1314 N. Greenview", lat: 41.9058, lng: -87.6710, type: "Residential" },
];

const featuredProjects = [
  {
    name: "756 N. Leavitt St",
    neighborhood: "Ukrainian Village",
    type: "Mixed-Use",
    slug: "756-n-leavitt",
    address: "756 N. Leavitt St, Chicago, IL 60612",
    img: "/projects/756-n-leavitt/main.jpg",
    description:
      "Boutique mixed-use elevator building on a corner lot in Ukrainian Village, built in 2014, with eight residences totaling 16,000 sq ft. A ground-floor restaurant anchors the building, with extra-wide layouts over 23 ft across, hardwood floors, attached heated garage parking, and 500 sq ft private rooftop decks with skyline views.",
    highlights: ["8 residences", "Ground-floor restaurant", "Ukrainian Village"],
  },
  {
    name: "1756 W. Wabansia",
    neighborhood: "Bucktown",
    type: "Residential",
    slug: "1756-w-wabansia",
    address: "1756 W. Wabansia, Chicago, IL 60622",
    img: "/projects/1756-w-wabansia/facade.jpg",
    description:
      "New construction single-family residence in Bucktown, built in 2015, with roughly 3,000 sq ft of living space. Four bedrooms, a Gaggenau kitchen, white oak floors, custom floating stairs with glass railings, a cedar garage deck, and specialty lighting throughout.",
    highlights: ["Custom single-family", "High-end finishes", "Bucktown"],
  },
  {
    name: "2702-12 W. Chicago Ave",
    neighborhood: "Humboldt Park",
    type: "Mixed-Use",
    slug: "2702-w-chicago",
    address: "2702-12 W. Chicago Ave, Chicago, IL 60622",
    img: "/projects/2702-w-chicago/main.jpg",
    description:
      "Mixed-use development spanning 2702-2712 W. Chicago Ave with twenty residences and ground-floor commercial space totaling 32,000 sq ft. Built in 2007, the building features 9-10 ft ceilings, gas fireplaces, walnut cabinetry, a shared rooftop deck, and private balconies.",
    highlights: ["20 residences", "Chicago Ave corridor", "Humboldt Park"],
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
            37 completed projects across Chicago&apos;s West Town, Ukrainian Village,
            Wicker Park, Bucktown, and surrounding neighborhoods.
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
