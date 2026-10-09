// KerjaYuk — Layout dashboard bersama (navbar + sidebar + drawer mobile + tema gelap/terang)
// Scroll native-app: navbar & sidebar terkunci, hanya area konten yang scroll.
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';
import { useTheme } from '../context/ThemeContext';

const BADGE = {
  DIPROSES: 'bg-violet-100 text-purple-800 dark:bg-violet-500/20 dark:text-violet-300',
  DITERIMA: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300',
  DITOLAK: 'bg-rose-50 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300',
};

export function StatusBadge({ status }) {
  const label = { DIPROSES: 'Diproses', DITERIMA: 'Diterima', DITOLAK: 'Ditolak' }[status] || status;
  return (
    <span className={`px-2.5 py-1 rounded-md text-xs font-semibold leading-4 ${BADGE[status] || 'bg-indigo-50 text-blue-600 dark:bg-indigo-500/20 dark:text-indigo-300'}`}>
      {label}
    </span>
  );
}

function MenuItem({ to, label, end, onNavigate }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onNavigate}
      className={({ isActive }) =>
        `self-stretch p-3 rounded-lg flex items-center gap-3 cursor-pointer ${
          isActive
            ? 'bg-indigo-50 text-blue-600 font-semibold dark:bg-indigo-500/20 dark:text-indigo-300'
            : 'bg-white text-slate-500 font-medium hover:bg-slate-50 dark:bg-transparent dark:text-slate-400 dark:hover:bg-slate-800'
        }`
      }
    >
      <span className="flex-1 text-sm leading-5">{label}</span>
    </NavLink>
  );
}

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
        // ikon matahari (mode gelap aktif -> tawarkan terang)
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        // ikon bulan (mode terang aktif -> tawarkan gelap)
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      )}
    </button>
  );
}

export default function DashboardLayout({ roleLabel, role, nama, onLogout, children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const inisial = (nama || 'U')
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div className="w-full h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 flex flex-col">
      {/* Navbar — terkunci */}
      <div className="h-20 px-4 md:px-8 bg-white border-b border-slate-200 dark:bg-slate-900 dark:border-slate-800 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-3">
          {/* Tombol hamburger — hanya tampil di layar mobile */}
          <button
            type="button"
            aria-label="Buka menu"
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <span className="block w-5 h-[2px] bg-slate-600 dark:bg-slate-300 rounded" />
            <span className="block w-5 h-[2px] bg-slate-600 dark:bg-slate-300 rounded" />
            <span className="block w-5 h-[2px] bg-slate-600 dark:bg-slate-300 rounded" />
          </button>
          <Logo />
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <span className="px-2.5 py-1 bg-indigo-50 rounded-md text-blue-600 text-xs font-semibold leading-4 dark:bg-indigo-500/20 dark:text-indigo-300">{roleLabel}</span>
          <span className="text-slate-500 text-sm dark:text-slate-400">Ruang kariermu</span>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <div className="w-9 h-9 bg-indigo-50 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold dark:bg-indigo-500/20 dark:text-indigo-300">
            {inisial}
          </div>
          <div className="hidden md:block text-blue-950 text-sm font-semibold dark:text-slate-200">{nama}</div>
          <button
            onClick={onLogout}
            className="text-slate-500 text-xs hover:text-rose-600 underline-offset-2 hover:underline dark:text-slate-400 dark:hover:text-rose-400"
          >
            Keluar
          </button>
        </div>
      </div>

      {/* Sidebar + Konten — terkunci */}
      <div className="flex-1 flex overflow-hidden">
        {/* Mobile drawer: overlay + laci menu (hanya layar mobile) */}
        {isMobileMenuOpen && (
          <>
            {/* Overlay Gelap */}
            <div
              className="fixed inset-0 bg-slate-900/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Kotak Laci Menu */}
            <div className="fixed inset-y-0 left-0 w-64 bg-white z-50 flex flex-col gap-3 px-5 py-7 md:hidden shadow-2xl dark:bg-slate-900">
              <div className="flex justify-between items-center">
                <Logo size="h-9" text="text-xl font-bold" />
                <button
                  type="button"
                  aria-label="Tutup menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <div className="text-slate-400 text-xs font-bold leading-4 mt-2">{roleLabel.toUpperCase()}</div>
              {role === 'PELAMAR' && (
                <>
                  <MenuItem to="/lowongan" label="Cari lowongan" onNavigate={() => setIsMobileMenuOpen(false)} />
                  <MenuItem to="/lamaran" label="Lamaran Saya" onNavigate={() => setIsMobileMenuOpen(false)} />
                  <MenuItem to="/profil" label="Profil Saya" onNavigate={() => setIsMobileMenuOpen(false)} />
                </>
              )}
              {role === 'RECRUITER' && (
                <>
                  <MenuItem to="/recruiter" label="Ringkasan" onNavigate={() => setIsMobileMenuOpen(false)} />
                  <MenuItem to="/recruiter/lowongan" label="Lowongan Saya" onNavigate={() => setIsMobileMenuOpen(false)} />
                  <MenuItem to="/recruiter/lamaran" label="Kandidat" onNavigate={() => setIsMobileMenuOpen(false)} />
                </>
              )}
              {role === 'ADMIN' && (
                <>
                  <MenuItem to="/admin" label="Ringkasan" onNavigate={() => setIsMobileMenuOpen(false)} />
                  <MenuItem to="/recruiter/lamaran" label="Tinjau Lamaran" onNavigate={() => setIsMobileMenuOpen(false)} />
                </>
              )}
              <div className="h-px bg-slate-200" />
              <button
                onClick={() => { setIsMobileMenuOpen(false); onLogout(); }}
                className="p-3 rounded-lg text-slate-500 text-sm text-left hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"
              >
                Keluar
              </button>
              <div className="p-4 bg-slate-50 rounded-lg mt-auto dark:bg-slate-800/60">
                <div className="text-blue-950 text-xs font-semibold leading-4 dark:text-slate-200">Langkah kecil, peluang besar</div>
                <div className="text-slate-500 text-xs leading-4 mt-2 dark:text-slate-400">
                  Lengkapi profil dan temukan pengalaman kerja pertamamu.
                </div>
              </div>
            </div>
          </>
        )}

        {/* Sidebar desktop — terkunci, scroll sendiri jika menu panjang */}
        <div className="hidden md:flex w-60 px-5 py-7 bg-white border-r border-slate-200 dark:bg-slate-900 dark:border-slate-800 flex-col gap-3 overflow-y-auto scroll-slim">
          <Logo size="h-9" text="text-xl font-bold" />
          <div className="text-slate-400 text-xs font-bold leading-4 mt-2">{roleLabel.toUpperCase()}</div>
          {role === 'PELAMAR' && (
            <>
              <MenuItem to="/lowongan" label="Cari lowongan" />
              <MenuItem to="/lamaran" label="Lamaran Saya" />
              <MenuItem to="/profil" label="Profil Saya" />
            </>
          )}
          {role === 'RECRUITER' && (
            <>
              <MenuItem to="/recruiter" label="Ringkasan" />
              <MenuItem to="/recruiter/lowongan" label="Lowongan Saya" />
              <MenuItem to="/recruiter/lamaran" label="Kandidat" />
            </>
          )}
          {role === 'ADMIN' && (
            <>
              <MenuItem to="/admin" label="Ringkasan" />
              <MenuItem to="/recruiter/lamaran" label="Tinjau Lamaran" />
            </>
          )}
          <div className="h-px bg-slate-200 dark:bg-slate-800" />
          <button
            onClick={onLogout}
            className="p-3 rounded-lg text-slate-500 text-sm text-left hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            Keluar
          </button>
          <div className="p-4 bg-slate-50 rounded-lg mt-auto dark:bg-slate-800/60">
            <div className="text-blue-950 text-xs font-semibold leading-4 dark:text-slate-200">Langkah kecil, peluang besar</div>
            <div className="text-slate-500 text-xs leading-4 mt-2 dark:text-slate-400">
              Lengkapi profil dan temukan pengalaman kerja pertamamu.
            </div>
          </div>
        </div>

        {/* Area konten utama — SATU-SATUNYA yang scroll */}
        <div className="flex-1 p-4 md:p-10 flex flex-col gap-6 overflow-y-auto scroll-slim">{children}</div>
      </div>
    </div>
  );
}
