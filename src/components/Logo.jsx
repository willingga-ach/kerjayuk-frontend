// KerjaYuk — Komponen Logo
// Monogram "kY" sambung di dalam kartu bulat, bersanding dengan wordmark "KerjaYuk".
// Ukuran mengikuti teks di sekitarnya (h-8/h-9), tidak mengubah layout.

export function LogoMark({ className = 'w-8 h-8' }) {
  return (
    <div
      className={`${className} bg-blue-600 rounded-[10px] flex items-center justify-center shrink-0`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 32 32" fill="none" className="w-[62%] h-[62%]">
        {/* garis dasar monogram kY sambung */}
        <path
          d="M6 26 L10 6"
          stroke="white"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* batang + lengkung "k" */}
        <path
          d="M10 17 C12 14.5, 15 14.5, 15 17.5 C15 19.5, 13 20.5, 11.5 19"
          stroke="white"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
        />
        {/* huruf "Y" sambung: dua lengan menyatu lalu ekor melengkung */}
        <path
          d="M18 12 C18 15, 19.5 17, 22 17 C25.5 17, 26 13.5, 23 13 C21.5 12.8, 20 14, 20.5 16 L22.5 24 C23 26.2, 25.5 26.5, 26.5 25"
          stroke="white"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
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
