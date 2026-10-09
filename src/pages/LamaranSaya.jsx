// KerjaYuk — Lamaran Saya (pelamar): daftar lamaran live + statistik
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';
import DashboardLayout, { StatusBadge } from '../components/DashboardLayout';
import { useAuth } from '../context/AuthContext';

const STAT_CARDS = [
  { key: 'DIPROSES', label: 'Diproses', cls: 'bg-violet-100 text-purple-800' },
  { key: 'DITERIMA', label: 'Diterima', cls: 'bg-emerald-50 text-emerald-700' },
  { key: 'DITOLAK', label: 'Ditolak', cls: 'bg-rose-50 text-rose-700' },
];

export default function LamaranSaya() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState(null);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api(`/lamaran?page=${page}&limit=10`)
      .then((res) => {
        setData(res.data);
        setMeta(res.meta);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [page]);

  const jumlah = { DIPROSES: 0, DITERIMA: 0, DITOLAK: 0 };
  data.forEach((l) => { jumlah[l.status] = (jumlah[l.status] || 0) + 1; });

  return (
    <DashboardLayout roleLabel="Pelamar" role="PELAMAR" nama={user?.nama} onLogout={() => { logout(); navigate('/masuk'); }}>
      <div className="flex flex-col gap-2">
        <div className="text-slate-500 text-xs font-medium">RUANG PELAMAR</div>
        <div className="text-blue-950 text-3xl font-bold">Lamaran Saya</div>
        <div className="text-slate-500 text-sm">Setiap langkah tercatat. Pantau perkembangan lamaranmu di sini.</div>
      </div>

      {/* Statistik: bertumpuk di mobile, menyamping di desktop */}
      <div className="flex flex-col md:flex-row gap-4">
        {STAT_CARDS.map((s) => (
          <div key={s.key} className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-2.5">
            <span className={`px-2.5 py-1 rounded-md text-xs font-semibold leading-4 w-fit ${s.cls}`}>{s.label}</span>
            <div className="text-blue-950 text-3xl font-bold">{loading ? '—' : jumlah[s.key]}</div>
          </div>
        ))}
      </div>

      {error && <div className="p-4 bg-rose-50 rounded-lg text-rose-700 text-sm">{error}</div>}

      {/* Tabel lamaran */}
      <div className="p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-5">
        <div className="text-blue-950 text-lg font-semibold">Daftar lamaran</div>
        {!loading && data.length === 0 && (
          <div className="text-slate-500 text-sm">Belum ada lamaran. Yuk mulai dari katalog lowongan!</div>
        )}
        <div className="rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden">
          <div className="overflow-x-auto w-full">
            <div className="min-w-[560px]">
              <div className="px-4 py-3.5 bg-slate-50 flex gap-3.5">
                <div className="flex-1 text-slate-500 text-xs font-semibold">Lowongan</div>
                <div className="flex-1 text-slate-500 text-xs font-semibold">Perusahaan</div>
                <div className="flex-1 text-slate-500 text-xs font-semibold">Status</div>
                <div className="w-24 text-slate-500 text-xs font-semibold">Versi</div>
              </div>
              {data.map((l) => (
                <div key={l.id} className="min-h-16 px-4 py-4 border-t border-slate-200 flex items-center gap-3.5">
                  <div className="flex-1 text-blue-950 text-xs font-semibold">{l.lowongan?.judul}</div>
                  <div className="flex-1 text-blue-950 text-xs">{l.lowongan?.perusahaan}</div>
                  <div className="flex-1"><StatusBadge status={l.status} /></div>
                  <div className="w-24 text-slate-400 text-xs">v{l.version}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {meta && meta.total_pages > 1 && (
          <div className="flex justify-between items-center">
            <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page <= 1} className="px-4 py-2 rounded-lg outline outline-1 outline-slate-200 text-sm font-semibold text-blue-950 disabled:opacity-40">Sebelumnya</button>
            <div className="text-slate-500 text-xs">Halaman {meta.page} / {meta.total_pages}</div>
            <button onClick={() => setPage((p) => Math.min(p + 1, meta.total_pages))} disabled={page >= meta.total_pages} className="px-4 py-2 rounded-lg outline outline-1 outline-slate-200 text-sm font-semibold text-blue-950 disabled:opacity-40">Berikutnya</button>
          </div>
        )}
      </div>

      <div className="text-slate-400 text-xs mt-auto">
        Perubahan status dan catatan evaluasi tersimpan dalam riwayat lamaran. Nomor versi (v) menunjukkan seberapa banyak status sudah diperbarui.
      </div>
    </DashboardLayout>
  );
}
