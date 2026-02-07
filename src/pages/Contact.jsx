import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <main className="bg-[#fbfaf7]">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#f8f5f0] via-[#f2e7c9] to-[#e3efe6] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-sm font-semibold tracking-wide text-[#2f5d3a]"
          >
            CONTACT
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-3 text-4xl md:text-5xl font-bold text-gray-900"
          >
            Get in touch with us
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-lg text-gray-700 max-w-3xl leading-relaxed"
          >
            We are looking forward to welcoming you to Akofirin Cultural Festival.
            For partnerships, media enquiries, participation, or general information,
            please reach out using any of the options below.
          </motion.p>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="rounded-3xl bg-white border border-black/5 p-6 shadow-sm"
          >
            <h3 className="font-semibold text-lg text-gray-900">General Enquiries</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              For questions about the festival, programme updates, or attendance.
            </p>

            <p className="mt-4 text-sm text-gray-600">Email</p>
            <p className="font-medium text-gray-900">
              info@akofirinfestival.com
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl bg-white border border-black/5 p-6 shadow-sm"
          >
            <h3 className="font-semibold text-lg text-gray-900">Partnerships & Sponsorship</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              For organizations, institutions, and individuals interested in supporting
              Akofirin 2026.
            </p>

            <p className="mt-4 text-sm text-gray-600">Email</p>
            <p className="font-medium text-gray-900">
              partnerships@akofirinfestival.com
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-3xl bg-white border border-black/5 p-6 shadow-sm"
          >
            <h3 className="font-semibold text-lg text-gray-900">Media & Press</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              For interviews, press coverage, and official media requests.
            </p>

            <p className="mt-4 text-sm text-gray-600">Email</p>
            <p className="font-medium text-gray-900">
              media@akofirinfestival.com
            </p>
          </motion.div>
        </div>
      </section>


      {/* FINAL WELCOME CTA */}
      <section className="bg-gradient-to-r from-[#6b4f1d] via-[#2f5d3a] to-[#1f3d2b]">
        <div className="max-w-7xl mx-auto px-6 py-14 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            We look forward to having you at Akofirin Cultural Festival
          </h2>
          <p className="mt-3 text-white/85 max-w-3xl leading-relaxed">
            Akofirin is more than an event — it is a celebration of heritage, community,
            and shared identity. We warmly welcome visitors, partners, and friends
            to be part of the 2026 edition.
          </p>
        </div>
      </section>
    </main>
  );
}
