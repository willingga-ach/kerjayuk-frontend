// KerjaYuk — Layout dashboard bersama (navbar + sidebar) sesuai desain
import { NavLink } from 'react-router-dom';

const BADGE = {
  DIPROSES: 'bg-violet-100 text-purple-800',
  DITERIMA: 'bg-emerald-50 text-emerald-700',
  DITOLAK: 'bg-rose-50 text-rose-700',
};

export function StatusBadge({ status }) {
  const label = { DIPROSES: 'Diproses', DITERIMA: 'Diterima', DITOLAK: 'Ditolak' }[status] || status;
  return (
    <span className={`px-2.5 py-1 rounded-md text-xs font-semibold leading-4 ${BADGE[status] || 'bg-indigo-50 text-blue-600'}`}>
      {label}
    </span>
  );
}

function MenuItem({ to, label, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `self-stretch p-3 rounded-lg flex items-center gap-3 cursor-pointer ${
          isActive ? 'bg-indigo-50 text-blue-600 font-semibold' : 'bg-white text-slate-500 font-medium hover:bg-slate-50'
        }`
      }
    >
      <span className="flex-1 text-sm leading-5">{label}</span>
    </NavLink>
  );
}

export default function DashboardLayout({ roleLabel, role, nama, onLogout, children }) {
  const inisial = (nama || 'U')
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col">
      {/* Navbar */}
      <div className="h-20 px-8 bg-white border-b border-slate-200 flex justify-between items-center">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-blue-600 rounded-[10px] flex items-center justify-center">
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
              <rect x="1" y="1" width="16" height="14" rx="2" stroke="white" strokeWidth="1.7" />
              <path d="M5 6h8M5 9h5" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </div>
          <div className="text-blue-950 text-2xl font-bold">KerjaYuk</div>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 bg-indigo-50 rounded-md text-blue-600 text-xs font-semibold leading-4">{roleLabel}</span>
          <span className="text-slate-500 text-sm">Ruang kariermu</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 bg-indigo-50 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold">
            {inisial}
          </div>
          <div className="text-blue-950 text-sm font-semibold">{nama}</div>
          <button
            onClick={onLogout}
            className="text-slate-500 text-xs hover:text-rose-600 underline-offset-2 hover:underline"
          >
            Keluar
          </button>
        </div>
      </div>

      {/* Sidebar + Konten */}
      <div className="flex-1 flex">
        <div className="w-60 px-5 py-7 bg-white border-r border-slate-200 flex flex-col gap-3">
          <div className="text-slate-400 text-xs font-bold leading-4">{roleLabel.toUpperCase()}</div>
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
          <div className="h-px bg-slate-200" />
          <button
            onClick={onLogout}
            className="p-3 rounded-lg text-slate-500 text-sm text-left hover:bg-slate-50"
          >
            Keluar
          </button>
          <div className="p-4 bg-slate-50 rounded-lg mt-auto">
            <div className="text-blue-950 text-xs font-semibold leading-4">Langkah kecil, peluang besar</div>
            <div className="text-slate-500 text-xs leading-4 mt-2">
              Lengkapi profil dan temukan pengalaman kerja pertamamu.
            </div>
          </div>
        </div>

        <div className="flex-1 p-10 flex flex-col gap-6">{children}</div>
      </div>
    </div>
  );
}
