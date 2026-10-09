// KerjaYuk — Komponen Logo
// Monogram "kY" sambung di dalam kartu bulat, bersanding dengan wordmark "KerjaYuk".
// Ukuran mengikuti teks di sekitarnya (h-8/h-9), tidak mengubah layout.

export function LogoMark({ className = 'w-8 h-8' }) {
  return (
    <img
      src="/logo-ky.jpg"
      alt="KerjaYuk Logo"
      className={`${className} object-contain rounded-[10px] shrink-0`}
      aria-hidden="true"
    />
  );
}

export default function Logo({ size = 'h-8', text = 'text-2xl font-bold' }) {
  return (
    <div className="flex items-center gap-2.5">
      <LogoMark className={size} />
      <span className={`text-blue-950 leading-none ${text}`}>KerjaYuk</span>
    </div>
  );
}
