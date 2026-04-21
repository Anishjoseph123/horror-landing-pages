export default function HorrorPage() {
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center relative overflow-hidden">
      {/* Flickering light */}
      <div className="absolute top-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl flicker-light opacity-70"></div>

      {/* Room floor glow */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-gray-900 to-transparent"></div>

      {/* Ghostly shadow */}
      <div className="ghost-shadow absolute w-32 h-32 bg-gray-700 opacity-30 rounded-full blur-2xl"></div>

      {/* Content (optional) */}
      <h1 className="text-gray-300 text-xl tracking-widest">
        Something is here...
      </h1>
      <button className="bg-red-600 text-white px-6 py-2 rounded-md flicker">
        Click Me
      </button>
    </div>
  );
}
