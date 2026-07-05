/* Premium branded placeholder for upcoming projects that don't have a render
   yet - a deep-blue brand panel with a subtle architectural skyline silhouette
   and an elegant "Launching Soon" label. Shared by the home page and the
   residential / commercial category pages so the treatment stays consistent. */

const BLUE = "#0C2A4D";
const BLUE_DEEP = "#081E38";
const ORANGE = "#EF7320";

/* Layered city silhouette pinned to the bottom of the panel. Two rows of
   buildings (back + front) give a sense of depth; one rooftop carries a small
   orange beacon to tie in the brand accent. */
function Skyline() {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full"
      viewBox="0 0 400 130"
      preserveAspectRatio="xMidYMax slice"
      fill="none"
      aria-hidden="true"
    >
      {/* back row - faint */}
      <g fill="#FFFFFF" fillOpacity="0.05">
        <rect x="6" y="58" width="34" height="72" />
        <rect x="48" y="40" width="26" height="90" />
        <rect x="150" y="50" width="30" height="80" />
        <rect x="250" y="44" width="28" height="86" />
        <rect x="330" y="56" width="40" height="74" />
        <rect x="376" y="46" width="22" height="84" />
      </g>
      {/* front row - a touch stronger */}
      <g fill="#FFFFFF" fillOpacity="0.09">
        <rect x="20" y="78" width="30" height="52" />
        <rect x="70" y="64" width="34" height="66" />
        <rect x="112" y="86" width="24" height="44" />
        <rect x="188" y="70" width="30" height="60" />
        <rect x="226" y="90" width="22" height="40" />
        <rect x="288" y="66" width="36" height="64" />
        <rect x="350" y="82" width="26" height="48" />
      </g>
      {/* tallest tower */}
      <rect x="140" y="30" width="22" height="100" fill="#FFFFFF" fillOpacity="0.12" />
    </svg>
  );
}

export function LaunchingSoonMedia({ label = "Launching Soon" }: { label?: string }) {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ background: `linear-gradient(155deg, ${BLUE} 0%, ${BLUE_DEEP} 58%, #123a63 100%)` }}
    >
      {/* soft glow */}
      <div
        className="absolute -top-16 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full blur-3xl"
        style={{ background: "rgba(239,115,32,0.16)" }}
      />
      <Skyline />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <span className="block w-10 h-px" style={{ background: ORANGE }} />
        <p className="mt-4 font-display text-2xl md:text-[26px] text-white/95">{label}</p>
        <p className="mt-2 text-[10px] tracking-[0.32em] uppercase text-white/50">
          Scaling Ventures
        </p>
      </div>
    </div>
  );
}
