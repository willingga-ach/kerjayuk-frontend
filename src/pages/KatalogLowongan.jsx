// KerjaYuk — Katalog Lowongan (pelamar): live dari GET /api/lowongan (AC-5 paginasi)
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';
import DashboardLayout from '../components/DashboardLayout';
import { useAuth } from '../context/AuthContext';

export default function KatalogLowongan() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState(null);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    setError('');
    try {
      const q = new URLSearchParams({ page: String(page), limit: 6 });
      if (status) q.set('status', status);
      const res = await api(`/lowongan?${q}`);
      setData(res.data);
      setMeta(res.meta);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, status]);

  return (
    <DashboardLayout roleLabel="Pelamar" role="PELAMAR" nama={user?.nama} onLogout={() => { logout(); navigate('/masuk'); }}>
      <div className="flex flex-col gap-2">
        <div className="text-slate-500 text-xs font-medium">RUANG PELAMAR</div>
        <div className="flex justify-between items-center">
          <div className="text-blue-950 text-3xl font-bold">Cari Lowongan</div>
          <div className="flex gap-3">
            <select
              value={status}
              onChange={(e) => { setPage(1); setStatus(e.target.value); }}
              className="p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 text-sm text-blue-950"
            >
              <option value="">Semua lowongan</option>
              <option value="buka">Yang masih buka</option>
              <option value="tutup">Yang sudah tutup</option>
            </select>
          </div>
        </div>
        {meta && (
          <div className="text-slate-500 text-sm">
            {meta.total} lowongan · halaman {meta.page} dari {meta.total_pages || 1}
          </div>
        )}
      </div>

      {error && <div className="p-4 bg-rose-50 rounded-lg text-rose-700 text-sm">{error}</div>}
      {loading && <div className="text-slate-500 text-sm">Memuat lowongan…</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.map((l) => (
          <div key={l.id} className="p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-indigo-50 rounded-[10px] flex items-center justify-center text-blue-600 text-xl font-bold">
                {(l.perusahaan || '?')[0].toUpperCase()}
              </div>
              <div>
                <div className="text-blue-950 text-sm font-semibold">{l.perusahaan}</div>
                <div className="text-slate-500 text-xs">oleh {l.recruiter?.nama || '—'}</div>
              </div>
              <span className={`ml-auto px-2.5 py-1 rounded-md text-xs font-semibold leading-4 ${l.is_open ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-200 text-slate-500'}`}>
                {l.is_open ? 'Buka' : 'Ditutup'}
              </span>
            </div>
            <div>
              <div className="text-blue-950 text-lg font-semibold leading-7">{l.judul}</div>
              <div className="text-slate-500 text-xs mt-1 line-clamp-2">{l.deskripsi}</div>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <div className="text-slate-400 text-xs">
                {l.jumlah_pelamar} pelamar · {new Date(l.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
              </div>
              <button
                onClick={() => navigate(`/lowongan/${l.id}`)}
                disabled={!l.is_open}
                className="text-blue-600 text-sm font-semibold hover:underline disabled:text-slate-400 disabled:no-underline disabled:cursor-not-allowed"
              >
                {l.is_open ? 'Lihat detail →' : 'Ditutup'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {meta && meta.total_pages > 1 && (
        <div className="flex justify-between items-center">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page <= 1}
            className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 text-sm font-semibold text-blue-950 disabled:opacity-40"
          >
            Sebelumnya
          </button>
          <div className="text-slate-500 text-sm">Halaman {meta.page} / {meta.total_pages}</div>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, meta.total_pages))}
            disabled={page >= meta.total_pages}
            className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 text-sm font-semibold text-blue-950 disabled:opacity-40"
          >
            Berikutnya
          </button>
        </div>
      )}
    </DashboardLayout>
  );
}
