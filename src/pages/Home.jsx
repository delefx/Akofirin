
// import { motion } from "framer-motion";
// // If you already have images, uncomment these and use them below:
// // import heroImg from "../assets/hero.jpg";
// // import rockImg from "../assets/akofirin-rock.jpg";
// // import danceImg from "../assets/dance.jpg";
// // import cuisineImg from "../assets/cuisine.jpg";

// const fadeUp = {
//   hidden: { opacity: 0, y: 28 },
//   show: { opacity: 1, y: 0 },
// };

// function Home() {
//   return (
//     <main>
//       {/* HERO */}
//       <section className="bg-gradient-to-br from-[#f8f5f0] via-[#f2e7c9] to-[#e3efe6]">
//         <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <motion.h1
//               initial="hidden"
//               animate="show"
//               variants={fadeUp}
//               transition={{ duration: 0.9, ease: "easeOut" }}
//               className="text-4xl md:text-6xl font-bold leading-tight"
//             >
//               Akofirin Cultural Festival
//             </motion.h1>

//             <motion.p
//               initial="hidden"
//               animate="show"
//               variants={fadeUp}
//               transition={{ duration: 0.9, delay: 0.15 }}
//               className="mt-6 text-lg md:text-xl text-gray-700 max-w-xl"
//             >
//               Celebrating the heritage, unity, and cultural identity of the Oke-Offin
//               people — preserving tradition and promoting cultural tourism in Kogi State.
//             </motion.p>

//             <motion.div
//               initial="hidden"
//               animate="show"
//               variants={fadeUp}
//               transition={{ duration: 0.9, delay: 0.3 }}
//               className="mt-8 flex flex-wrap gap-4"
//             >
//               <a
//                 href="/about"
//                 className="px-8 py-3 rounded-full bg-[#2f5d3a] text-white font-medium hover:opacity-95 transition"
//               >
//                 Learn More
//               </a>

//               <a
//                 href="/2026"
//                 className="px-8 py-3 rounded-full border border-[#2f5d3a] text-[#2f5d3a] font-medium hover:bg-[#2f5d3a]/10 transition"
//               >
//                 Akofirin 2026
//               </a>
//             </motion.div>

//             <div className="mt-10 grid grid-cols-3 gap-4 max-w-md text-sm">
//               <Stat label="Founded" value="2018" />
//               <Stat label="Location" value="Oke-Offin" />
//               <Stat label="Return" value="2026" />
//             </div>
//           </div>

//           {/* Hero Image Slot */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.98 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//             className="relative"
//           >
//             <div className="rounded-3xl overflow-hidden shadow-lg border border-black/5 bg-white">
//               {/* Replace this block with <img src={heroImg} ... /> when you have images */}
//               <div className="h-[360px] md:h-[440px] bg-gradient-to-br from-black/5 via-black/0 to-black/5 flex items-center justify-center text-gray-500">
//                 Hero Image Here
//               </div>
//             </div>

//             {/* little badge */}
//             <div className="absolute -bottom-5 left-6 bg-white rounded-2xl px-4 py-3 shadow-md border border-black/5">
//               <p className="text-sm font-semibold">Oja-Okuta • Akofirin Site</p>
//               <p className="text-xs text-gray-600">Heritage • Culture • Tourism</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ABOUT PREVIEW */}
//       <Section>
//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={fadeUp}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold">About Akofirin</h2>
//             <p className="mt-4 text-gray-700 leading-relaxed">
//               Akofirin is named after a unique natural opening at Oja-Okuta — a historic rock
//               site associated with community memory, indigenous music, and cultural identity.
//               The festival celebrates Oke-Offin’s heritage and promotes peaceful cultural exchange.
//             </p>

//             <div className="mt-6">
//               <a
//                 href="/about"
//                 className="inline-flex items-center gap-2 text-[#2f5d3a] font-semibold hover:underline"
//               >
//                 Read the full story <span aria-hidden>→</span>
//               </a>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8 }}
//             className="rounded-3xl overflow-hidden shadow-md border border-black/5 bg-white"
//           >
//             {/* Replace with rock image later */}
//             <div className="h-[320px] bg-gradient-to-br from-black/5 via-black/0 to-black/5 flex items-center justify-center text-gray-500">
//               Akofirin Rock / Site Image
//             </div>
//           </motion.div>
//         </div>
//       </Section>

//       {/* HIGHLIGHTS */}
//       <Section className="bg-[#fbfaf7] border-y border-black/5">
//         <div className="max-w-7xl mx-auto px-6 py-14">
//           <motion.h2
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={fadeUp}
//             transition={{ duration: 0.8 }}
//             className="text-3xl md:text-4xl font-bold"
//           >
//             Festival Highlights
//           </motion.h2>

//           <p className="mt-3 text-gray-700 max-w-2xl">
//             A dignified celebration of culture, community, and tourism — designed for families,
//             visitors, and partners.
//           </p>

//           <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             <HighlightCard
//               title="Cultural Performances"
//               desc="Traditional music, dance, drumming and cultural troupes from across Okun land."
//             />
//             <HighlightCard
//               title="Cuisine & Craft"
//               desc="Local dishes, traditional attire, and indigenous crafts on display and on sale."
//             />
//             <HighlightCard
//               title="Heritage Tourism"
//               desc="A serene natural setting with cultural significance and a unique rock site experience."
//             />
//           </div>
//         </div>
//       </Section>

//       {/* AKOFIRIN 2026 */}
//       <Section>
//         <div className="grid lg:grid-cols-3 gap-8 items-start">
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={fadeUp}
//             transition={{ duration: 0.8 }}
//             className="lg:col-span-1"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold">Akofirin 2026</h2>
//             <p className="mt-4 text-gray-700 leading-relaxed">
//               The festival returns in 2026 with improved planning, stronger partnerships, and a
//               renewed vision to place Oke-Offin on the cultural tourism map.
//             </p>

//             <div className="mt-6 flex gap-3">
//               <a
//                 href="/2026"
//                 className="px-6 py-3 rounded-full bg-black text-white font-medium hover:opacity-90 transition"
//               >
//                 View the 2026 Vision
//               </a>
//             </div>
//           </motion.div>

//           <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
//             <InfoTile title="Tourism & Global Reach" text="Website presence, media coverage, and visitor-friendly experience." />
//             <InfoTile title="Infrastructure & Comfort" text="Better stage setup, conveniences, and improved venue readiness." />
//             <InfoTile title="Security & Safety" text="A secure, well-coordinated environment for guests and tourists." />
//             <InfoTile title="Community & Partners" text="Traditional institutions, government support, and corporate sponsors." />
//           </div>
//         </div>
//       </Section>

//       {/* GALLERY PREVIEW */}
//       <Section className="bg-[#fbfaf7] border-t border-black/5">
//         <div className="max-w-7xl mx-auto px-6 py-14">
//           <div className="flex items-end justify-between gap-6 flex-wrap">
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold">Gallery</h2>
//               <p className="mt-3 text-gray-700 max-w-2xl">
//                 Moments, people, and places that define the Akofirin experience.
//               </p>
//             </div>

//             <a href="/gallery" className="text-[#2f5d3a] font-semibold hover:underline">
//               View all photos →
//             </a>
//           </div>

//           <div className="mt-10 grid md:grid-cols-3 gap-6">
//             <GallerySlot label="Cultural Dance" />
//             <GallerySlot label="Cuisine & Attire" />
//             <GallerySlot label="Oja-Okuta Site" />
//           </div>
//         </div>
//       </Section>

//       {/* CTA */}
//       <section className="bg-gradient-to-r from-[#6b4f1d] via-[#2f5d3a] to-[#1f3d2b]">
//         <div className="max-w-7xl mx-auto px-6 py-14 text-white">
//           <h2 className="text-3xl md:text-4xl font-bold">Be part of Akofirin 2026</h2>
//           <p className="mt-3 text-white/85 max-w-2xl">
//             For partnerships, media enquiries, or community support, reach out to the organizing team.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-4">
//             <a
//               href="/contact"
//               className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:opacity-95 transition"
//             >
//               Contact Us
//             </a>
//             <a
//               href="/gallery"
//               className="px-8 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition"
//             >
//               Explore Gallery
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// function Section({ children, className = "" }) {
//   return (
//     <section className={className}>
//       <div className="max-w-7xl mx-auto px-6 py-14">{children}</div>
//     </section>
//   );
// }

// function Stat({ label, value }) {
//   return (
//     <div className="rounded-2xl bg-white/70 backdrop-blur border border-black/5 px-4 py-3">
//       <p className="text-xs text-gray-600">{label}</p>
//       <p className="text-base font-semibold">{value}</p>
//     </div>
//   );
// }

// function HighlightCard({ title, desc }) {
//   return (
//     <div className="rounded-3xl bg-white shadow-sm border border-black/5 p-6 hover:shadow-md transition">
//       <h3 className="font-semibold text-lg">{title}</h3>
//       <p className="mt-2 text-gray-700 leading-relaxed">{desc}</p>
//     </div>
//   );
// }

// function InfoTile({ title, text }) {
//   return (
//     <div className="rounded-3xl bg-white shadow-sm border border-black/5 p-6">
//       <h3 className="font-semibold text-lg">{title}</h3>
//       <p className="mt-2 text-gray-700 leading-relaxed">{text}</p>
//     </div>
//   );
// }

// function GallerySlot({ label }) {
//   return (
//     <div className="rounded-3xl overflow-hidden shadow-sm border border-black/5 bg-white">
//       <div className="h-[220px] bg-gradient-to-br from-black/5 via-black/0 to-black/5 flex items-center justify-center text-gray-500">
//         Image Slot
//       </div>
//       <div className="p-4">
//         <p className="font-semibold">{label}</p>
//         <p className="text-sm text-gray-600">Preview</p>
//       </div>
//     </div>
//   );
// }

// export default Home;



import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#f8f5f0] via-[#f2e7c9] to-[#e3efe6]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold leading-tight text-gray-900"
            >
              Akofirin Cultural Festival
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="mt-6 text-lg md:text-xl text-gray-700 max-w-xl"
            >
              Celebrating the heritage, unity, and cultural identity of the Oke-Offin
              people — preserving tradition and promoting cultural tourism in Kogi State.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/about"
                className="px-8 py-3 rounded-full bg-[#2f5d3a] text-white font-medium hover:opacity-95 transition"
              >
                Learn More
              </Link>

              <Link
                to="/2026"
                className="px-8 py-3 rounded-full border border-[#2f5d3a] text-[#2f5d3a] font-medium hover:bg-[#2f5d3a]/10 transition"
              >
                Akofirin 2026
              </Link>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md text-sm">
              <Stat label="Founded" value="2018" />
              <Stat label="Location" value="Oke-Offin" />
              <Stat label="Return" value="2026" />
            </div>
          </div>

          {/* Hero Image Slot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg border border-black/5 bg-white">
              {/* Replace this with your real hero image later */}
              <div className="h-[360px] md:h-[460px] bg-gradient-to-br from-black/10 via-black/0 to-black/10 flex items-center justify-center text-gray-600">
                Hero Image Here
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -bottom-5 left-6 bg-white rounded-2xl px-4 py-3 shadow-md border border-black/5">
              <p className="text-sm font-semibold">Oja-Okuta • Akofirin Site</p>
              <p className="text-xs text-gray-600">Heritage • Culture • Tourism</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <Section>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About Akofirin
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Akofirin is named after a unique natural opening at Oja-Okuta — a historic
              rock site associated with community memory, indigenous music, and cultural
              identity. The festival celebrates Oke-Offin’s heritage and promotes peaceful
              cultural exchange.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#2f5d3a] font-semibold hover:underline"
              >
                Read the full story <span aria-hidden>→</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-md border border-black/5 bg-white"
          >
            {/* Replace with site image later */}
            <div className="h-[320px] bg-gradient-to-br from-black/10 via-black/0 to-black/10 flex items-center justify-center text-gray-600">
              Akofirin Rock / Site Image
            </div>
          </motion.div>
        </div>
      </Section>

      {/* HIGHLIGHTS */}
      <Section className="bg-[#fbfaf7] border-y border-black/5">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Festival Highlights
        </motion.h2>

        <p className="mt-3 text-gray-700 max-w-2xl">
          A dignified celebration of culture, community, and tourism — designed for families,
          visitors, and partners.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <HighlightCard
            title="Cultural Performances"
            desc="Traditional music, dance, drumming and cultural troupes from across Okun land."
          />
          <HighlightCard
            title="Cuisine & Craft"
            desc="Local dishes, traditional attire, and indigenous crafts on display and on sale."
          />
          <HighlightCard
            title="Heritage Tourism"
            desc="A serene natural setting with cultural significance and a unique rock site experience."
          />
        </div>
      </Section>

      {/* EXPERIENCE STRIP (image room + bullets) */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-md border border-black/5 bg-white lg:col-span-1"
          >
            <div className="h-[260px] bg-gradient-to-br from-black/10 via-black/0 to-black/10 flex items-center justify-center text-gray-600">
              Cultural Moment Image
            </div>
          </motion.div>

          <div className="lg:col-span-2">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              A calm, authentic cultural experience
            </h3>
            <p className="mt-3 text-gray-700 max-w-2xl">
              Akofirin is designed to be welcoming and safe — a space where tradition, community,
              and visitors meet respectfully.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Bullet title="Family-friendly" text="A wholesome environment for guests of all ages." />
              <Bullet title="Community pride" text="Showcasing the richness of Oke-Offin and Okun heritage." />
              <Bullet title="Tourism value" text="A destination experience rooted in culture and nature." />
              <Bullet title="Partnership-ready" text="Structured for sponsors, media, and cultural institutions." />
            </div>
          </div>
        </div>
      </Section>

      {/* AKOFIRIN 2026 */}
      <Section className="bg-[#fbfaf7] border-y border-black/5">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Akofirin 2026
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              The festival returns in 2026 with improved planning, stronger partnerships, and
              a renewed vision to place Oke-Offin on the cultural tourism map.
            </p>

            <div className="mt-6">
              <Link
                to="/2026"
                className="px-6 py-3 rounded-full bg-black text-white font-medium hover:opacity-90 transition inline-block"
              >
                View the 2026 Vision
              </Link>
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <InfoTile title="Tourism & Global Reach" text="Website presence, media coverage, and visitor-friendly experience." />
            <InfoTile title="Infrastructure & Comfort" text="Better stage setup, conveniences, and improved venue readiness." />
            <InfoTile title="Security & Safety" text="A secure, well-coordinated environment for guests and tourists." />
            <InfoTile title="Community & Partners" text="Traditional institutions, government support, and corporate sponsors." />
          </div>
        </div>
      </Section>

      {/* GALLERY PREVIEW */}
      <Section>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Gallery</h2>
            <p className="mt-3 text-gray-700 max-w-2xl">
              Moments, people, and places that define the Akofirin experience.
            </p>
          </div>

          <Link to="/gallery" className="text-[#2f5d3a] font-semibold hover:underline">
            View all photos →
          </Link>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <GallerySlot label="Cultural Dance" />
          <GallerySlot label="Cuisine & Attire" />
          <GallerySlot label="Oja-Okuta Site" />
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#6b4f1d] via-[#2f5d3a] to-[#1f3d2b]">
        <div className="max-w-7xl mx-auto px-6 py-14 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Be part of Akofirin 2026</h2>
          <p className="mt-3 text-white/85 max-w-2xl">
            For partnerships, media enquiries, or community support, reach out to the organizing team.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:opacity-95 transition"
            >
              Contact Us
            </Link>
            <Link
              to="/gallery"
              className="px-8 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition"
            >
              Explore Gallery
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Small Components (keeps Home clean) ---------- */

function Section({ children, className = "" }) {
  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-6 py-14">{children}</div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur border border-black/5 px-4 py-3">
      <p className="text-xs text-gray-600">{label}</p>
      <p className="text-base font-semibold text-gray-900">{value}</p>
    </div>
  );
}

function HighlightCard({ title, desc }) {
  return (
    <div className="rounded-3xl bg-white shadow-sm border border-black/5 p-6 hover:shadow-md transition">
      <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-700 leading-relaxed">{desc}</p>
    </div>
  );
}

function InfoTile({ title, text }) {
  return (
    <div className="rounded-3xl bg-white shadow-sm border border-black/5 p-6">
      <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}

function GallerySlot({ label }) {
  return (
    <div className="rounded-3xl overflow-hidden shadow-sm border border-black/5 bg-white">
      <div className="h-[220px] bg-gradient-to-br from-black/10 via-black/0 to-black/10 flex items-center justify-center text-gray-600">
        Image Slot
      </div>
      <div className="p-4">
        <p className="font-semibold text-gray-900">{label}</p>
        <p className="text-sm text-gray-600">Preview</p>
      </div>
    </div>
  );
}

function Bullet({ title, text }) {
  return (
    <div className="rounded-3xl bg-white border border-black/5 p-5">
      <p className="font-semibold text-gray-900">{title}</p>
      <p className="mt-1 text-gray-700">{text}</p>
    </div>
  );
}
