import { animate, spring, timeline } from "framer-motion";
import HeroParallax from "@/components/HeroParallax";
import { motion } from "framer-motion";
import { stagger, fadeUp } from "@/lib/animations";

export default function Home() {
  return (
    <>
      <HeroParallax />

      <section id="rooms" className="max-w-6xl mx-auto px-4 py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="text-3xl font-serif mb-4">Rooms</motion.h2>
          <motion.p variants={fadeUp} className="mb-6">Explore our curated rooms.</motion.p>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeUp} className="h-48 bg-gray-100 rounded-lg" />
            <motion.div variants={fadeUp} className="h-48 bg-gray-100 rounded-lg" />
            <motion.div variants={fadeUp} className="h-48 bg-gray-100 rounded-lg" />
          </div>
        </motion.div>
      </section>

      <section id="dining" className="max-w-6xl mx-auto px-4 py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="text-3xl font-serif mb-4">Dining</motion.h2>
          <motion.p variants={fadeUp}>Our dining options celebrate the region.</motion.p>
        </motion.div>
      </section>

      <section id="services" className="max-w-6xl mx-auto px-4 py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="text-3xl font-serif mb-4">Guest Services</motion.h2>
          <motion.p variants={fadeUp}>Everything you need for a comfortable stay.</motion.p>
        </motion.div>
      </section>
    </>
  );
}
