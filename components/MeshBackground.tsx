export default function MeshBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden bg-[#f4f5fb] dark:bg-[#05050a]"
    >
      {/* Drifting color blobs */}
      <div className="absolute -left-[10%] -top-[10%] h-[55vw] w-[55vw] animate-mesh-drift rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.55),transparent_60%)] blur-3xl" />
      <div className="absolute right-[-15%] top-[5%] h-[50vw] w-[50vw] animate-mesh-drift-slow rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.45),transparent_60%)] blur-3xl" />
      <div className="absolute bottom-[-20%] left-[20%] h-[60vw] w-[60vw] animate-mesh-drift rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.45),transparent_60%)] blur-3xl" />
      <div className="absolute bottom-[5%] right-[10%] h-[40vw] w-[40vw] animate-mesh-drift-slow rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.4),transparent_60%)] blur-3xl" />

      {/* Subtle noise / grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Vignette to deepen edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.25)_100%)]" />
    </div>
  );
}
