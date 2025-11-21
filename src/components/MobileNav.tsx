import { animate, spring, timeline } from "framer-motion";
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // lock scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const sheet = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  const overlay = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const items = [
    { href: "#home", label: "Home" },
    { href: "#rooms", label: "Rooms" },
    { href: "#dining", label: "Dining" },
    { href: "#services", label: "Guest Services" },
    { href: "/rooms", label: "Rooms (page)" },
    { href: "/dining", label: "Dining (page)" },
    { href: "/guest-services", label: "Guest Services (page)" },
  ];

  return (
    <>
      <button
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlay}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 z-40"
            />

            <motion.aside
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sheet}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 h-full w-[80%] max-w-xs bg-white dark:bg-slate-900 z-50 p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="text-xl font-semibold">Menu</div>
                <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {items.map((it) => (
                  <a
                    key={it.href}
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium tracking-wide"
                  >
                    {it.label}
                  </a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
