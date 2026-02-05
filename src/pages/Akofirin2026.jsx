import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

export default function Akofirin2026() {
  return (
    <main className="bg-[#fbfaf7]">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#f8f5f0] via-[#f2e7c9] to-[#e3efe6] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="text-sm font-semibold tracking-wide text-[#2f5d3a]"
            >
              AKOFIRIN 2026
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="mt-3 text-4xl md:text-5xl font-bold leading-tight text-gray-900"
            >
              Planning, partnerships, and a renewed vision
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.18 }}
              className="mt-5 text-lg text-gray-700 leading-relaxed max-w-xl"
            >
              Akofirin Cultural Festival returns in 2026 with a structured plan to enhance
              visitor experience, strengthen cultural preservation, and support heritage tourism
              in Oke-Offin and the wider Okun community.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.28 }}
              className="mt-7 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="px-7 py-3 rounded-full bg-[#2f5d3a] text-white font-medium hover:opacity-95 transition"
              >
                Partner / Sponsor
              </Link>

              <Link
                to="/history"
                className="px-7 py-3 rounded-full border border-[#2f5d3a] text-[#2f5d3a] font-medium hover:bg-[#2f5d3a]/10 transition"
              >
                See 2018 Recap
              </Link>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md text-sm">
              <Stat label="Edition" value="2026" />
              <Stat label="Focus" value="Tourism" />
              <Stat label="Theme" value="Heritage" />
            </div>

            <div className="mt-7 rounded-3xl bg-white/70 backdrop-blur border border-black/5 p-5">
              <p className="text-sm font-semibold text-gray-900">Important note</p>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Items and timelines on this page are presented as plans and proposals,
                subject to confirmation by the organizing committee.
              </p>
            </div>
          </div>

          {/* Image slot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="rounded-3xl overflow-hidden shadow-lg border border-black/5 bg-white"
          >
            <div className="h-[340px] md:h-[420px] bg-gradient-to-br from-black/10 via-black/0 to-black/10 flex items-center justify-center text-gray-600">
              Planning / Community Image
            </div>
          </motion.div>
        </div>
      </section>

      {/* PLANNING PILLARS */}
      <Section>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Key planning pillars
        </motion.h2>
        <p className="mt-3 text-gray-700 max-w-3xl leading-relaxed">
          Our approach for 2026 focuses on infrastructure readiness, visitor comfort, cultural excellence,
          and credible partnerships—positioning Akofirin as a destination-worthy cultural experience.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Digital presence"
            text="A dedicated website and global media visibility to improve awareness and coordination."
          />
          <Card
            title="Venue readiness"
            text="Stage setup, improved access planning, and a structured layout for performances and exhibitions."
          />
          <Card
            title="Visitor comfort"
            text="Conveniences, water supply considerations, and guest-friendly arrangements."
          />
          <Card
            title="Safety & security"
            text="A secure, well-coordinated environment for tourists, guests, and community members."
          />
          <Card
            title="Cultural quality"
            text="Costume, curation, and refined programming to deliver a dignified cultural showcase."
          />
          <Card
            title="Partnerships"
            text="Engagement with institutions, corporate sponsors, and friends of Oke-Offin."
          />
        </div>
      </Section>

      {/* PROPOSED ACTIVITIES */}
      <Section className="bg-white border-y border-black/5">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Proposed activities
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              The festival programme is being structured to combine culture and tourism-friendly experiences,
              including sports and community activities.
            </p>

            <div className="mt-6 rounded-3xl bg-[#fbfaf7] border border-black/5 p-6">
              <p className="text-sm font-semibold text-gray-900">Event planning note</p>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Final schedules, routes and participation guidelines will be published on confirmation.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <InfoTile
              title="Day 1 (Proposed)"
              text="Biking / Racing activities and community games."
            />
            <InfoTile
              title="Day 2 (Proposed)"
              text="Cultural performances and heritage showcases (building on the 2018 format)."
            />
            <InfoTile
              title="Marathon concept"
              text="A marathon/race concept is being explored to strengthen tourism visibility."
            />
            <InfoTile
              title="Benchmarking"
              text="A learning visit to study best practices from other major events is proposed."
            />
          </div>
        </div>
      </Section>

      {/* SPONSORSHIP & STAKEHOLDERS */}
      <Section>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Stakeholders & partnerships
            </h2>
            <p className="mt-3 text-gray-700 max-w-3xl leading-relaxed">
              Akofirin 2026 is planned as a collaborative effort involving traditional institutions,
              community leadership, government support, and corporate partnerships.
            </p>
          </div>

          <Link
            to="/contact"
            className="text-[#2f5d3a] font-semibold hover:underline"
          >
            Become a partner →
          </Link>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <ListCard
            title="People & institutions to engage (selected)"
            items={[
              "Traditional rulers across Okun land",
              "Community leadership and friends of Oke-Offin",
              "Cultural stakeholders and heritage advocates",
            ]}
          />
          <ListCard
            title="Sponsorship outreach (selected)"
            items={[
              "Corporate sponsors and foundations",
              "State and Local Government partners across Okunland",
              "Private sector supporters (CSR and tourism development)",
            ]}
          />
        </div>

        <div className="mt-8 rounded-3xl bg-white border border-black/5 p-6">
          <p className="font-semibold text-gray-900">Transparency note</p>
          <p className="mt-2 text-gray-700 leading-relaxed">
            Sponsorship and partnership announcements will be published only when formally confirmed.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#6b4f1d] via-[#2f5d3a] to-[#1f3d2b]">
        <div className="max-w-7xl mx-auto px-6 py-14 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Support Akofirin 2026</h2>
          <p className="mt-3 text-white/85 max-w-2xl">
            Partner with us to promote cultural heritage, community development, and tourism.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:opacity-95 transition"
            >
              Contact the Team
            </Link>
            <Link
              to="/gallery"
              className="px-8 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition"
            >
              Explore Gallery
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition"
            >
              About Akofirin
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- UI helpers ---------- */

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

function Card({ title, text }) {
  return (
    <div className="rounded-3xl bg-white border border-black/5 p-6 shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}

function InfoTile({ title, text }) {
  return (
    <div className="rounded-3xl bg-[#fbfaf7] border border-black/5 p-6">
      <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}

function ListCard({ title, items }) {
  return (
    <div className="rounded-3xl bg-white border border-black/5 p-6 shadow-sm">
      <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
      <ul className="mt-3 space-y-2 text-gray-700">
        {items.map((it) => (
          <li key={it} className="flex gap-2">
            <span className="mt-[7px] h-2 w-2 rounded-full bg-[#2f5d3a]" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
