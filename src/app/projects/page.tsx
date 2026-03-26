import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import MapWrapper from "@/components/MapWrapper";
import type { MapPin } from "@/components/ProjectsMap";
import ExpandablePropertyGrid from "@/components/ExpandablePropertyGrid";
import type { Property } from "@/components/ExpandablePropertyGrid";

export const metadata: Metadata = {
  title: "Projects | BirchBuild",
  description:
    "BirchBuild project portfolio — construction and renovation projects across Chicago's West Town, Ukrainian Village, Wicker Park, and beyond.",
};

// All real addresses from birchbuild.org with confirmed listing photos
export const allProperties: Property[] = [
  { address: "1350 N. Campbell",  neighborhood: "Wicker Park",       type: "Residential", slug: "1350-n-campbell",   img: "https://img.urbanre.com/propertyimage/500x375/MRD11369958/6378530604/1350-N-Campbell-Unit-2-Chicago-IL-60622-0.jpg" },
  { address: "2647 W. Haddon",    neighborhood: "Ukrainian Village",  type: "Residential", slug: "2647-w-haddon",     img: "https://d229qcohg01jma.cloudfront.net/MRED/09/976/063/1.jpg" },
  { address: "2029 W. Rice",      neighborhood: "Ukrainian Village",  type: "Residential", slug: "2029-w-rice",       img: "https://resources.atproperties.com/images/MRED/12/421/970/68811b2107658/1.jpg" },
  { address: "2027 W. Rice",      neighborhood: "Ukrainian Village",  type: "Residential", slug: "2027-w-rice",       img: "https://d229qcohg01jma.cloudfront.net/MRED/08/942/270/1.jpg" },
  { address: "1849 W. Armitage",  neighborhood: "Bucktown",           type: "Residential", slug: "1849-w-armitage",   img: "https://pi.movoto.com/p/461/12276996_0_jzAIqn_p.webp" },
  { address: "2032 W. Superior",  neighborhood: "Ukrainian Village",  type: "Residential", slug: "2032-w-superior",   img: "https://resources.atproperties.com/images/MRED/11/024/504/6052b6033f013/1.jpg" },
  { address: "1037 N. Marshfield",neighborhood: "Noble Square",       type: "Residential", slug: "1037-n-marshfield", img: "https://resources.atproperties.com/images/MRED/11/904/571/6525943c7eec2/1.jpg" },
  { address: "1039 N. Marshfield",neighborhood: "Noble Square",       type: "Residential", slug: "1039-n-marshfield", img: "https://resources.atproperties.com/images/MRED/12/476/230/68d30f9a114d6/1.jpg" },
  { address: "2702-12 W. Chicago",neighborhood: "Ukrainian Village",  type: "Mixed-Use",   slug: "2702-w-chicago",    img: "https://resources.atproperties.com/images/MRED/11/692/560/63c03e35241c4/1.jpg" },
  { address: "2241 W. Roscoe",    neighborhood: "Roscoe Village",     type: "Residential", slug: "2241-w-roscoe",     img: "https://resources.atproperties.com/images/MRED/12/586/613/69baf2cba8791/1.jpg" },
  { address: "2243 W. Roscoe",    neighborhood: "Roscoe Village",     type: "Residential", slug: "2243-w-roscoe",     img: "https://img.urbanre.com/propertyimage/500x375/MRD10783533/6373086828/2243-W-Roscoe-Unit-2-Chicago-IL-60618-0.jpg" },
  { address: "1331 N. Mohawk",    neighborhood: "Old Town",           type: "Residential", slug: "1331-n-mohawk",     img: "https://resources.atproperties.com/images/MRED/12/001/349/66058dad2d82f/1.jpg" },
  { address: "2116 W. Barry",     neighborhood: "Lakeview",           type: "Residential", slug: "2116-w-barry",      img: "https://resources.atproperties.com/images/MRED/10/927/492/5fb81d68bb594/1.jpg" },
  { address: "1438 N. Wood",      neighborhood: "Wicker Park",        type: "Residential", slug: "1438-n-wood",       img: "https://resources.atproperties.com/images/MRED/12/004/070/65f3928d2a1c6/1.jpg" },
  { address: "922 N. Hermitage",  neighborhood: "Noble Square",       type: "Residential", slug: "922-n-hermitage",   img: "https://resources.atproperties.com/images/MRED/12/411/779/686c685b326f0/1.jpg" },
  { address: "1527 W. Chestnut",  neighborhood: "Noble Square",       type: "Residential", slug: "1527-w-chestnut",   img: "https://resources.atproperties.com/images/MRED/11/213/465/613a202cd41f2/1.jpg" },
  { address: "1074 N. Paulina",   neighborhood: "Noble Square",       type: "Residential", slug: "1074-n-paulina",    img: "https://resources.atproperties.com/images/MRED/10/712/510/5ebf38f60d147/1.jpg" },
  { address: "1108 W. Fry",       neighborhood: "Noble Square",       type: "Residential", slug: "1108-w-fry",        img: "https://d229qcohg01jma.cloudfront.net/MRED/09/483/252/1.jpg" },
  { address: "814-20 N. Wood",    neighborhood: "East Village",       type: "Residential", slug: "814-n-wood",        img: "https://resources.atproperties.com/images/MRED/11/749/131/64270e98aea39/1.jpg" },
  { address: "1517 W. Pearson",   neighborhood: "Noble Square",       type: "Residential", slug: "1517-w-pearson",    img: "https://resources.atproperties.com/images/MRED/11/004/099/603824ca37722/1.jpg" },
  { address: "2207 W. Chicago",   neighborhood: "Ukrainian Village",  type: "Residential", slug: "2207-w-chicago",    img: "https://resources.atproperties.com/images/MRED/12/370/404/682cc915dc488/1.jpg" },
  { address: "532 N. Hermitage",  neighborhood: "Noble Square",       type: "Residential", slug: "532-n-hermitage",   img: "https://resources.atproperties.com/images/MRED/11/707/603/63dab3a4ad9b4/1.jpg" },
  { address: "1457 W. Erie",      neighborhood: "Noble Square",       type: "Residential", slug: "1457-w-erie",       img: "https://resources.atproperties.com/images/MRED/12/554/940/6984e7a6ed6b0/1.jpg" },
  { address: "1013 N. Honore",    neighborhood: "Noble Square",       type: "Residential", slug: "1013-n-honore",     img: "https://d229qcohg01jma.cloudfront.net/MRED/09/498/055/1.jpg" },
  { address: "1731 N. Richmond",  neighborhood: "Wicker Park",        type: "Residential", slug: "1731-n-richmond",   img: "https://resources.atproperties.com/images/MRED/11/253/427/6179fc6d3cae0/1.jpg" },
  { address: "1002 N. Hermitage", neighborhood: "Noble Square",       type: "Residential", slug: "1002-n-hermitage",  img: "https://resources.atproperties.com/images/MRED/10/877/570/5f6a433954d6c/1.jpg" },
  { address: "756 N. Leavitt",    neighborhood: "Noble Square",       type: "Residential", slug: "756-n-leavitt",     img: "https://resources.atproperties.com/images/MRED/12/093/033/6679e1734d95a/1.jpg" },
  { address: "1809 W. Chicago",   neighborhood: "Ukrainian Village",  type: "Residential", slug: "1809-w-chicago",    img: "https://resources.atproperties.com/images/MRED/11/939/157/6570abbb19692/1.jpg" },
  { address: "1756 W. Wabansia",  neighborhood: "Wicker Park",        type: "Residential", slug: "1756-w-wabansia",   img: "https://d229qcohg01jma.cloudfront.net/MRED/09/220/012/1.jpg" },
  { address: "1305 W. Chicago",   neighborhood: "Noble Square",       type: "Residential", slug: "1305-w-chicago",    img: "https://resources.atproperties.com/images/MRED/10/587/148/5de96df38c366/1.jpg" },
  { address: "1944 W. Crystal",   neighborhood: "Ukrainian Village",  type: "Residential", slug: "1944-w-crystal",    img: "https://resources.atproperties.com/images/MRED/12/106/279/668ee6bb110f9/1.jpg" },
  { address: "1433 N. Ashland",   neighborhood: "Wicker Park",        type: "Residential", slug: "1433-n-ashland",    img: "https://resources.atproperties.com/images/MRED/12/381/274/683dc1eb16218/1.jpg" },
  { address: "1512 W. Huron",     neighborhood: "Noble Square",       type: "Residential", slug: "1512-w-huron",      img: "https://img.urbanre.com/propertyimage/500x375/MRD12346426/6388104366/1512-W-Huron-Unit-1-Chicago-IL-60642-0.jpg" },
  { address: "1106 N. Marshfield",neighborhood: "Noble Square",       type: "Residential", slug: "1106-n-marshfield", img: "https://resources.atproperties.com/images/MRED/11/309/968/61eed3c7cd430/1.jpg" },
  { address: "1468 N. Ashland",   neighborhood: "Wicker Park",        type: "Mixed-Use",   slug: "1468-n-ashland",    img: "https://resources.atproperties.com/images/MRED/11/195/395/6148ced3a6578/1.jpg" },
  { address: "1739 W. Julian",    neighborhood: "Ukrainian Village",  type: "Residential", slug: "1739-w-julian",     img: "https://resources.atproperties.com/images/MRED/10/926/342/5fa46e4dbce37/1.jpg" },
  { address: "1314 N. Greenview", neighborhood: "Old Town",           type: "Residential", slug: "1314-n-greenview",  img: "https://resources.atproperties.com/images/MRED/11/266/642/618ade91cf478/1.jpg" },
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
    name: "2702-12 W. Chicago Ave",
    neighborhood: "Ukrainian Village",
    type: "Mixed-Use",
    slug: "2702-w-chicago",
    address: "2702-12 W. Chicago Ave, Chicago, IL 60622",
    img: "https://resources.atproperties.com/images/MRED/11/692/560/63c03e35241c4/1.jpg",
    description:
      "Multi-unit mixed-use development anchoring the Chicago Avenue corridor in Ukrainian Village. Ground-floor commercial with residential units above.",
    highlights: ["Mixed-use ground-up", "Chicago Ave corridor", "Ukrainian Village"],
  },
  {
    name: "1849 W. Armitage Ave",
    neighborhood: "Bucktown",
    type: "Residential",
    slug: "1849-w-armitage",
    address: "1849 W. Armitage Ave, Chicago, IL 60622",
    img: "https://pi.movoto.com/p/461/12276996_0_jzAIqn_p.webp",
    description:
      "Boutique commercial and residential buildout on the Armitage retail strip in Bucktown. Custom millwork, high-end finishes, and tight urban site logistics.",
    highlights: ["Armitage retail corridor", "Boutique commercial", "Bucktown"],
  },
  {
    name: "1350 N. Campbell Ave",
    neighborhood: "Wicker Park",
    type: "Residential",
    slug: "1350-n-campbell",
    address: "1350 N. Campbell Ave, Chicago, IL 60622",
    img: "https://img.urbanre.com/propertyimage/500x375/MRD11369958/6378530604/1350-N-Campbell-Unit-2-Chicago-IL-60622-0.jpg",
    description:
      "New construction residential project in Wicker Park. Full structural build with modern facade, open floor plans, and rooftop deck.",
    highlights: ["New construction", "Rooftop deck", "Wicker Park"],
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
          <div className="space-y-6">
            {featuredProjects.map((p) => (
              <div
                key={p.name}
                className="border border-[#B5CCE5] rounded-xl overflow-hidden grid md:grid-cols-[340px_1fr] hover:border-[#1A4F8A] hover:shadow-sm transition-all"
              >
                <div className="relative h-52 md:h-auto min-h-[200px]">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 340px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="bg-[#1A4F8A]/80 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full">
                      {p.type}
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <div className="text-xs text-[#4A82B5] font-semibold uppercase tracking-widest mb-1">
                    {p.neighborhood}
                  </div>
                  <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#0B2A4A] mb-1">
                    {p.name}
                  </h2>
                  <div className="text-xs text-[#2980B9] mb-3">{p.address}</div>
                  <p className="text-sm text-[#1C3050] leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs bg-[#EEF4FB] text-[#1C3050] border border-[#B5CCE5] px-3 py-1 rounded-full"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#1A4F8A] hover:text-[#0B2A4A] transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
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
