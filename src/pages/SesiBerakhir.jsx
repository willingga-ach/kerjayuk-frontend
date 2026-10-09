// KerjaYuk — Halaman Sesi Berakhir (dipakai saat 401 / logout)
import { Link } from 'react-router-dom';

// Tombol tema berdiri sendiri (pojok kanan atas)
function ThemeToggle() {
  const { dark, toggle } = useTheme();
  return (
    <button
      type="button"
      aria-label={dark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
      onClick={toggle}
      className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      {dark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      )}
    </button>
  );
}

export default function SesiBerakhir() {
  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-950 flex justify-center items-center p-6 relative">
      <div className="absolute top-4 right-4 z-20"><ThemeToggle /></div>
      <div className="max-w-md p-8 bg-white dark:bg-slate-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 dark:outline-slate-700 flex flex-col gap-4 text-center">
        <div className="text-blue-950 dark:text-slate-100 text-2xl font-bold">Sesi berakhir.</div>
        <div className="text-slate-500 dark:text-slate-400 text-sm leading-6">
          Sesi loginmu telah dicabut atau kedaluwarsa demi keamanan akun. Silakan masuk kembali untuk melanjutkan.
        </div>
        <Link to="/masuk" className="px-4 py-2.5 bg-blue-600 rounded-lg text-white text-sm font-semibold hover:bg-blue-700 w-fit mx-auto">
          Masuk kembali
        </Link>
      </div>
    </div>
  );
}
