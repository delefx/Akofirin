import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["All", "Culture", "People", "Places", "Cuisine"];

// For now we use placeholders (no fake images).
// Later: replace `src` with real imports (recommended) or URLs.
const PHOTOS = [
  { id: 1, title: "Cultural Performance", category: "Culture", src: null },
  { id: 2, title: "Traditional Dance", category: "Culture", src: null },
  { id: 3, title: "Community Gathering", category: "People", src: null },
  { id: 4, title: "Festival Moments", category: "People", src: null },
  { id: 5, title: "Oja-Okuta Environment", category: "Places", src: null },
  { id: 6, title: "Landscape View", category: "Places", src: null },
  { id: 7, title: "Local Cuisine", category: "Cuisine", src: null },
  { id: 8, title: "Traditional Attire", category: "Culture", src: null },
  { id: 9, title: "Craft & Culture", category: "Culture", src: null },
  { id: 10, title: "Visitors & Guests", category: "People", src: null },
  { id: 11, title: "Heritage Setting", category: "Places", src: null },
  { id: 12, title: "Cuisine Display", category: "Cuisine", src: null },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (active === "All") return PHOTOS;
    return PHOTOS.filter((p) => p.category === active);
  }, [active]);

  return (
    <main className="bg-[#fbfaf7]">
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#f8f5f0] via-[#f2e7c9] to-[#e3efe6] border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-18">
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-sm font-semibold tracking-wide text-[#2f5d3a]"
          >
            GALLERY
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="mt-3 text-4xl md:text-5xl font-bold text-gray-900"
          >
            Moments from Akofirin
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed"
          >
            A curated collection of culture, people, places, and cuisine — presented respectfully.
            As new photos are confirmed, the gallery will continue to grow.
          </motion.p>

          {/* Filters */}
          <div className="mt-8 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  active === c
                    ? "bg-[#2f5d3a] text-white border-[#2f5d3a]"
                    : "bg-white text-gray-800 border-black/10 hover:bg-black/5"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.button
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setSelected(p)}
                  className="text-left rounded-3xl overflow-hidden bg-white border border-black/5 shadow-sm hover:shadow-md transition"
                >
                  <div className="relative">
                    {p.src ? (
                      <img
                        src={p.src}
                        alt={p.title}
                        className="h-[230px] w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-[230px] w-full bg-gradient-to-br from-black/10 via-black/0 to-black/10 flex items-center justify-center text-gray-600">
                        Image Placeholder
                      </div>
                    )}

                    <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full bg-white/85 border border-black/10">
                      {p.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <p className="font-semibold text-gray-900">{p.title}</p>
                    <p className="mt-1 text-sm text-gray-600">
                      Click to view
                    </p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-3xl bg-white rounded-3xl overflow-hidden border border-black/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-black/5">
                <div>
                  <p className="text-sm text-gray-600">{selected.category}</p>
                  <p className="font-semibold text-gray-900">{selected.title}</p>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="w-10 h-10 rounded-xl border border-black/10 hover:bg-black/5 transition"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <div className="bg-[#fbfaf7]">
                {selected.src ? (
                  <img
                    src={selected.src}
                    alt={selected.title}
                    className="w-full max-h-[70vh] object-contain"
                  />
                ) : (
                  <div className="w-full h-[420px] bg-gradient-to-br from-black/10 via-black/0 to-black/10 flex items-center justify-center text-gray-600">
                    Full Image Placeholder
                  </div>
                )}
              </div>

              <div className="px-5 py-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Caption: {selected.title}. (Replace with verified caption when real images are added.)
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#6b4f1d] via-[#2f5d3a] to-[#1f3d2b]">
        <div className="max-w-7xl mx-auto px-6 py-14 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Have official photos to add?</h2>
          <p className="mt-3 text-white/85 max-w-2xl">
            We welcome verified images from the festival, community, and organizing team.
          </p>
        </div>
      </section>
    </main>
  );
}
