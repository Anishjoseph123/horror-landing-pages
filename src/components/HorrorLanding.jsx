import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HorrorLanding() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-gray-200 overflow-hidden">
      {/* Cursor Glow */}
      <div
        className="pointer-events-none fixed w-40 h-40 rounded-full bg-purple-700/20 blur-3xl"
        style={{
          left: cursor.x - 80,
          top: cursor.y - 80,
        }}
      />

      {/* Fog Layers */}
      <div className="absolute inset-0 fog" />
      <div className="absolute inset-0 fog opacity-50" />

      {/* Vignette */}
      <div className="absolute inset-0 vignette" />

      {/* Hero */}
      <div className="relative flex flex-col items-center justify-center h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glitch text-6xl md:text-8xl font-extrabold tracking-widest flicker"
          data-text="PARANORMAL"
        >
          PARANORMAL
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 max-w-xl text-gray-400"
        >
          Something is watching you. Not everything here wants to be found.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-10 px-10 py-3 border border-purple-700 hover:bg-purple-900 transition-all"
        >
          Enter the Unknown
        </motion.button>
      </div>

      {/* Haunted Section */}
      <div className="relative py-32 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl text-purple-400"
        >
          The Darkness Calls
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-2xl mx-auto text-gray-500"
        >
          Every shadow hides a story. Every whisper carries a warning.
        </motion.p>
      </div>

      {/* Floating Ghost Elements */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute left-10 bottom-20 text-3xl opacity-40"
      >
        👻
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute right-10 top-40 text-2xl opacity-30"
      >
        💀
      </motion.div>

      {/* Footer */}
      <div className="py-10 text-center text-gray-600">
        <p>© 2026 Paranormal — Do not stay too long.</p>
      </div>
    </div>
  );
}
