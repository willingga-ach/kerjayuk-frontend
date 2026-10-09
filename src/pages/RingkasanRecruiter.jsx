// KerjaYuk — Ringkasan Recruiter
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';
import DashboardLayout, { StatusBadge } from '../components/DashboardLayout';
import { useAuth } from '../context/AuthContext';

export default function RingkasanRecruiter() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [lamaran, setLamaran] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    api('/lamaran?limit=50')
      .then((r) => setLamaran(r.data))
      .catch((e) => setError(e.message));
  }, []);

  const jumlah = { DIPROSES: 0, DITERIMA: 0, DITOLAK: 0 };
  lamaran.forEach((l) => { jumlah[l.status] = (jumlah[l.status] || 0) + 1; });

  return (
    <DashboardLayout roleLabel="Recruiter" role="RECRUITER" nama={user?.nama} onLogout={() => { logout(); navigate('/masuk'); }}>
      <div className="flex flex-col gap-2">
        <div className="text-slate-500 text-xs font-medium">RUANG RECRUITER</div>
        <div className="text-blue-950 text-3xl font-bold">Ringkasan</div>
        <div className="text-slate-500 text-sm">Selamat datang kembali, {user?.nama}.</div>
      </div>

      {error && <div className="p-4 bg-rose-50 rounded-lg text-rose-700 text-sm">{error}</div>}

      <div className="flex gap-3">
        {[
          { label: 'Diproses', cls: 'bg-violet-100 text-purple-800', n: jumlah.DIPROSES },
          { label: 'Diterima', cls: 'bg-emerald-50 text-emerald-700', n: jumlah.DITERIMA },
          { label: 'Ditolak', cls: 'bg-rose-50 text-rose-700', n: jumlah.DITOLAK },
          { label: 'Total lamaran', cls: 'bg-indigo-50 text-blue-600', n: lamaran.length },
        ].map((s) => (
          <div key={s.label} className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-2.5">
            <span className={`px-2.5 py-1 rounded-md text-xs font-semibold leading-4 w-fit ${s.cls}`}>{s.label}</span>
            <div className="text-blue-950 text-3xl font-bold">{error ? '—' : s.n}</div>
          </div>
        ))}
      </div>

      <div className="p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-4">
        <div className="text-blue-950 text-lg font-semibold">Lamaran terbaru</div>
        {lamaran.slice(0, 5).map((l) => (
          <div key={l.id} className="flex items-center gap-4 border-t border-slate-100 pt-3">
            <div className="flex-1 text-blue-950 text-sm font-semibold">{l.lowongan?.judul}</div>
            <div className="text-slate-500 text-xs flex-1">{l.lowongan?.perusahaan}</div>
            <StatusBadge status={l.status} />
          </div>
        ))}
        {lamaran.length === 0 && !error && <div className="text-slate-400 text-sm">Belum ada lamaran masuk.</div>}
        <button onClick={() => navigate('/recruiter/lamaran')} className="text-blue-600 text-sm font-semibold hover:underline w-fit">
          Tinjau semua kandidat →
        </button>
      </div>
    </DashboardLayout>
  );
}
