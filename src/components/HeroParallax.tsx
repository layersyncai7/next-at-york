import { animate, spring, timeline } from "framer-motion";
"use client";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function HeroParallax({ image = "/nest-frontview.jpg", children }: { image?: string; children?: React.ReactNode }) {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 400], [0, -80]); // subtle parallax

  return (
    <section className="relative h-[70vh] flex items-end" aria-label="Hero">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-cover bg-center"
        //@ts-ignore
        initial={{ opacity: 0.95 }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}/>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto p-6 text-white">
        <h1 className="text-4xl md:text-6xl font-serif leading-tight">Welcome to Nest at York</h1>
        <p className="mt-4 max-w-xl">A refined stay — subtle motion and considered typography</p>
      </div>
    </section>
  );
}
