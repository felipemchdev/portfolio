"use client"

export default function ChatbotLoading() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <div className="flex gap-3">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-4 w-4 rounded-full border-2 border-white/30 bg-transparent animate-pulse-dot"
            style={{
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes pulse-dot {
          0%,
          100% {
            background-color: transparent;
            border-color: rgba(255, 255, 255, 0.3);
          }
          50% {
            background-color: #fa8072;
            border-color: #fa8072;
          }
        }
        .animate-pulse-dot {
          animation: pulse-dot 1.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
