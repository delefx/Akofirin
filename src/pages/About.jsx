import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
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
              ABOUT AKOFIRIN
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-3 text-4xl md:text-5xl font-bold leading-tight text-gray-900"
            >
              A heritage celebration rooted in Oke-Offin history
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-5 text-lg text-gray-700 leading-relaxed max-w-xl"
            >
              Akofirin Cultural Festival celebrates the heritage, unity, and cultural identity
              of the Oke-Offin people in Bunu District, Kogi State. The festival is inspired by
              the Akofirin site at Oja-Okuta — a distinctive natural formation with deep cultural value.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-7 flex flex-wrap gap-4"
            >
              <Link
                to="/history"
                className="px-7 py-3 rounded-full bg-[#2f5d3a] text-white font-medium hover:opacity-95 transition"
              >
                View Festival History
              </Link>

              <Link
                to="/2026"
                className="px-7 py-3 rounded-full border border-[#2f5d3a] text-[#2f5d3a] font-medium hover:bg-[#2f5d3a]/10 transition"
              >
                Akofirin 2026 Vision
              </Link>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md text-sm">
              <Stat label="Community" value="Oke-Offin" />
              <Stat label="District" value="Bunu" />
              <Stat label="State" value="Kogi" />
            </div>
          </div>

          {/* Image slot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-3xl overflow-hidden shadow-lg border border-black/5 bg-white"
          >
            {/* Replace with a real photo of Oja-Okuta / environment when you have it */}
            <div className="h-[340px] md:h-[420px] bg-gradient-to-br from-black/10 via-black/0 to-black/10 flex items-center justify-center text-gray-600">
              About Page Image (Oja-Okuta / Oke-Offin)
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT IS AKOFIRIN */}
      <Section>
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
              What is Akofirin?
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Akofirin refers to a small opening at the Oja-Okuta rock site. It is historically
              described as a natural water-holding point that served passers-by and indigenes.
              Close to it is a natural stone drum associated with seven distinct tones.
            </p>

            <div className="mt-6 rounded-3xl bg-white border border-black/5 p-6">
              <p className="text-sm font-semibold text-gray-900">Tone A approach</p>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                We present Akofirin as heritage and tourism: history, community identity,
                cultural experience, and a visitor-friendly environment.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <InfoTile
              title="Heritage Site"
              text="A historic location tied to community memory and identity at Oja-Okuta."
            />
            <InfoTile
              title="Indigenous Music"
              text="A natural stone drum tradition associated with seven distinct sounds."
            />
            <InfoTile
              title="Cultural Exchange"
              text="A gathering point for performances, tradition, and community pride."
            />
            <InfoTile
              title="Tourism Value"
              text="A serene natural environment suitable for visitors and partners."
            />
          </div>
        </div>
      </Section>

      {/* WHY IT MATTERS */}
      <Section className="bg-white border-y border-black/5">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why the festival matters
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Akofirin Cultural Festival strengthens community identity, preserves tradition,
              and creates a platform for cultural tourism. It supports local enterprise through
              crafts, cuisine, and cultural showcases while promoting peace and unity.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <Bullet title="Preservation" text="Safeguards heritage, stories, and cultural values." />
              <Bullet title="Tourism" text="Creates a destination experience rooted in culture and nature." />
              <Bullet title="Economy" text="Supports local vendors, crafts, and community businesses." />
              <Bullet title="Unity" text="Brings people together across Okun land and beyond." />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-md border border-black/5 bg-[#fbfaf7]"
          >
            {/* Replace later with cultural performance / crowd photo */}
            <div className="h-[320px] bg-gradient-to-br from-black/10 via-black/0 to-black/10 flex items-center justify-center text-gray-600">
              Cultural Performance / Community Image
            </div>
          </motion.div>
        </div>
      </Section>

      {/* QUICK FACTS */}
      <Section>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Quick facts
        </motion.h2>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FactCard title="Name Origin" value="Akofirin" note="A tiny opening at Oja-Okuta rock site." />
          <FactCard title="Cultural Feature" value="Stone Drum" note="Associated with seven distinct tones." />
          <FactCard title="First Edition" value="2018" note="The maiden edition took place in December." />
          <FactCard title="Return Edition" value="2026" note="A renewed vision for heritage and tourism." />
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#6b4f1d] via-[#2f5d3a] to-[#1f3d2b]">
        <div className="max-w-7xl mx-auto px-6 py-14 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Explore more</h2>
          <p className="mt-3 text-white/85 max-w-2xl">
            Discover the festival journey, the 2026 vision, and the moments that define Akofirin.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/history"
              className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:opacity-95 transition"
            >
              Festival History
            </Link>
            <Link
              to="/gallery"
              className="px-8 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition"
            >
              View Gallery
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- UI Helpers ---------- */

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

function InfoTile({ title, text }) {
  return (
    <div className="rounded-3xl bg-white shadow-sm border border-black/5 p-6">
      <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}

function Bullet({ title, text }) {
  return (
    <div className="rounded-3xl bg-[#fbfaf7] border border-black/5 p-5">
      <p className="font-semibold text-gray-900">{title}</p>
      <p className="mt-1 text-gray-700">{text}</p>
    </div>
  );
}

function FactCard({ title, value, note }) {
  return (
    <div className="rounded-3xl bg-white border border-black/5 p-6 shadow-sm hover:shadow-md transition">
      <p className="text-sm font-semibold text-gray-900">{title}</p>
      <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
      <p className="mt-2 text-sm text-gray-700 leading-relaxed">{note}</p>
    </div>
  );
}
