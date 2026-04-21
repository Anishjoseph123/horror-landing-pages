import { motion } from "framer-motion";

export default function ParanormalLandingPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans overflow-hidden">
      
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center h-screen text-center px-6">
        
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-widest text-purple-500"
        >
          PARANORMAL
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 max-w-xl text-lg text-gray-400"
        >
          Explore the unknown. Uncover mysteries beyond reality. Enter if you dare.
        </motion.p>

        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 120 }}
          className="mt-8 px-8 py-3 bg-purple-700 hover:bg-purple-900 rounded-full shadow-lg flicker"
        >
          Begin Investigation
        </motion.button>

        {/* Floating Ghost */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute bottom-10 text-4xl"
        >
          👻
        </motion.div>
      </div>

      {/* About Section */}
      <div className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold text-purple-400"
        >
          What Lies Beyond?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-2xl mx-auto text-gray-400"
        >
          From haunted locations to unexplained phenomena, we bring you real
          stories, evidence, and chilling encounters from around the world.
        </motion.p>
      </div>

      {/* Features */}
      <div className="py-20 px-6 grid md:grid-cols-3 gap-10 bg-black">
        {["Haunted Places", "Ghost Stories", "Investigations"].map(
          (item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 }}
              className="p-6 border border-purple-800 rounded-xl hover:shadow-purple-900 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-purple-300">{item}</h3>
              <p className="mt-3 text-gray-500">
                Dive deep into the darkness and uncover secrets hidden from the living.
              </p>
            </motion.div>
          )
        )}
      </div>

      {/* Footer */}
      <div className="py-10 text-center bg-gray-900 text-gray-500">
        <p>© 2026 Paranormal. All rights reserved.</p>
      </div>
    </div>
  );
}