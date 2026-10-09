// KerjaYuk — Lamaran Saya (pelamar): daftar lamaran live + statistik
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';
import DashboardLayout, { StatusBadge } from '../components/DashboardLayout';
import { useAuth } from '../context/AuthContext';

const STAT_CARDS = [
  { key: 'DIPROSES', label: 'Diproses', cls: 'bg-violet-100 text-purple-800 dark:text-violet-300' },
  { key: 'DITERIMA', label: 'Diterima', cls: 'bg-emerald-50 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300' },
  { key: 'DITOLAK', label: 'Ditolak', cls: 'bg-rose-50 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300' },
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
        <div className="text-slate-500 dark:text-slate-400 text-xs font-medium">RUANG PELAMAR</div>
        <div className="text-blue-950 dark:text-slate-100 text-3xl font-bold">Lamaran Saya</div>
        <div className="text-slate-500 dark:text-slate-400 text-sm">Setiap langkah tercatat. Pantau perkembangan lamaranmu di sini.</div>
      </div>

      {/* Statistik: bertumpuk di mobile, menyamping di desktop */}
      <div className="flex flex-col md:flex-row gap-4">
        {STAT_CARDS.map((s) => (
          <div key={s.key} className="flex-1 p-5 bg-white dark:bg-slate-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 dark:outline-slate-700 flex flex-col gap-2.5">
            <span className={`px-2.5 py-1 rounded-md text-xs font-semibold leading-4 w-fit ${s.cls}`}>{s.label}</span>
            <div className="text-blue-950 dark:text-slate-100 text-3xl font-bold">{loading ? '—' : jumlah[s.key]}</div>
          </div>
        ))}
      </div>

      {error && <div className="p-4 bg-rose-50 dark:bg-rose-500/20 rounded-lg text-rose-700 dark:text-rose-300 text-sm">{error}</div>}

      {/* Tabel lamaran */}
      <div className="p-6 bg-white dark:bg-slate-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 dark:outline-slate-700 flex flex-col gap-5">
        <div className="text-blue-950 dark:text-slate-100 text-lg font-semibold">Daftar lamaran</div>
        {!loading && data.length === 0 && (
          <div className="text-slate-500 dark:text-slate-400 text-sm">Belum ada lamaran. Yuk mulai dari katalog lowongan!</div>
        )}
        <div className="rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 dark:outline-slate-700 overflow-hidden">
          <div className="overflow-x-auto w-full">
            <div className="min-w-[560px]">
              <div className="px-4 py-3.5 bg-slate-50 dark:bg-slate-800/60 flex gap-3.5">
                <div className="flex-1 text-slate-500 dark:text-slate-400 text-xs font-semibold">Lowongan</div>
                <div className="flex-1 text-slate-500 dark:text-slate-400 text-xs font-semibold">Perusahaan</div>
                <div className="flex-1 text-slate-500 dark:text-slate-400 text-xs font-semibold">Status</div>
                <div className="w-32 text-slate-500 dark:text-slate-400 text-xs font-semibold">Terakhir Diubah</div>
              </div>
              {data.map((l) => (
                <div key={l.id} className="min-h-16 px-4 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3.5">
                  <div className="flex-1 text-blue-950 dark:text-slate-100 text-xs font-semibold">{l.lowongan?.judul}</div>
                  <div className="flex-1 text-blue-950 dark:text-slate-100 text-xs">{l.lowongan?.perusahaan}</div>
                  <div className="flex-1"><StatusBadge status={l.status} /></div>
                  <div className="w-32 text-slate-400 dark:text-slate-500 text-xs">
                    {new Date(l.updated_at ?? l.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {meta && meta.total_pages > 1 && (
          <div className="flex justify-between items-center">
            <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page <= 1} className="px-4 py-2 rounded-lg outline outline-1 outline-slate-200 dark:outline-slate-700 text-sm font-semibold text-blue-950 dark:text-slate-100 disabled:opacity-40">Sebelumnya</button>
            <div className="text-slate-500 dark:text-slate-400 text-xs">Halaman {meta.page} / {meta.total_pages}</div>
            <button onClick={() => setPage((p) => Math.min(p + 1, meta.total_pages))} disabled={page >= meta.total_pages} className="px-4 py-2 rounded-lg outline outline-1 outline-slate-200 dark:outline-slate-700 text-sm font-semibold text-blue-950 dark:text-slate-100 disabled:opacity-40">Berikutnya</button>
          </div>
        )}
      </div>

      <div className="text-slate-400 dark:text-slate-500 text-xs mt-auto">
        Perubahan status dan catatan evaluasi tersimpan dalam riwayat lamaran. Nomor versi (v) menunjukkan seberapa banyak status sudah diperbarui.
      </div>
    </DashboardLayout>
  );
}
