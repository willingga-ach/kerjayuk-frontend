// KerjaYuk — Recruiter: Ringkasan + Lowongan Saya (buat/toggle)
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';
import DashboardLayout from '../components/DashboardLayout';
import { useAuth } from '../context/AuthContext';

export default function LowonganRecruiter() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ judul: '', deskripsi: '', perusahaan: '' });
  const [busy, setBusy] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const res = await api('/lowongan?limit=50&page=1');
      // tampilkan semua; milik recruiter ditandai
      setData(res.data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function buatLowongan(e) {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      await api('/lowongan', { method: 'POST', body: form });
      setShowForm(false);
      setForm({ judul: '', deskripsi: '', perusahaan: '' });
      load();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  async function toggle(id) {
    setError('');
    try {
      const res = await api(`/lowongan/${id}/toggle`, { method: 'PATCH' });
      setData((prev) => prev.map((l) => (l.id === id ? { ...l, is_open: res.lowongan.is_open } : l)));
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <DashboardLayout roleLabel="Recruiter" role="RECRUITER" nama={user?.nama} onLogout={() => { logout(); navigate('/masuk'); }}>
      <div className="flex flex-col gap-2">
        <div className="text-slate-500 text-xs font-medium">RUANG RECRUITER</div>
        <div className="flex justify-between items-center">
          <div className="text-blue-950 text-3xl font-bold">Lowongan</div>
          <button onClick={() => setShowForm(true)} className="px-4 py-2.5 bg-blue-600 rounded-lg text-white text-sm font-semibold hover:bg-blue-700">
            + Buat lowongan
          </button>
        </div>
        <div className="text-slate-500 text-sm">Kelola lowongan dan buka/tutup pendaftaran.</div>
      </div>

      {error && <div className="p-4 bg-rose-50 rounded-lg text-rose-700 text-sm">{error}</div>}
      {loading && <div className="text-slate-500 text-sm">Memuat…</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.map((l) => (
          <div key={l.id} className="p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-blue-950 text-lg font-semibold leading-7">{l.judul}</div>
                <div className="text-slate-500 text-xs">{l.perusahaan}</div>
              </div>
              <span className={`px-2.5 py-1 rounded-md text-xs font-semibold leading-4 ${l.is_open ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-200 text-slate-500'}`}>
                {l.is_open ? 'Buka' : 'Ditutup'}
              </span>
            </div>
            <div className="text-slate-500 text-xs line-clamp-2">{l.deskripsi}</div>
            <div className="flex justify-between items-center mt-auto">
              <div className="text-slate-400 text-xs">{l.jumlah_pelamar} pelamar</div>
              <div className="flex gap-3">
                <button
                  onClick={() => navigate(`/recruiter/lamaran?lowongan=${l.id}`)}
                  className="text-blue-600 text-sm font-semibold hover:underline"
                >
                  Lihat kandidat →
                </button>
                <button
                  onClick={() => toggle(l.id)}
                  className="px-3 py-1.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 text-xs font-semibold text-blue-950 hover:bg-slate-50"
                >
                  {l.is_open ? 'Tutup' : 'Buka'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal buat lowongan */}
      {showForm && (
        <div className="fixed inset-0 bg-blue-950/50 z-10 flex justify-center items-center p-4">
          <form onSubmit={buatLowongan} className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-xl flex flex-col gap-4">
            <div className="text-blue-950 text-2xl font-bold">Buat lowongan baru</div>
            <div className="flex flex-col gap-1.5">
              <label className="text-blue-950 text-xs font-semibold">Judul posisi</label>
              <input required value={form.judul} onChange={(e) => setForm({ ...form, judul: e.target.value })} className="min-h-11 p-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 focus:outline-blue-600 text-sm" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-blue-950 text-xs font-semibold">Perusahaan</label>
              <input required value={form.perusahaan} onChange={(e) => setForm({ ...form, perusahaan: e.target.value })} className="min-h-11 p-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 focus:outline-blue-600 text-sm" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-blue-950 text-xs font-semibold">Deskripsi</label>
              <textarea required rows={4} value={form.deskripsi} onChange={(e) => setForm({ ...form, deskripsi: e.target.value })} className="p-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 focus:outline-blue-600 text-sm" />
            </div>
            <div className="flex justify-end gap-3 mt-2">
              <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 text-sm font-semibold text-blue-950">Batal</button>
              <button type="submit" disabled={busy} className="px-4 py-2.5 bg-blue-600 rounded-lg text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-50">
                {busy ? 'Menyimpan…' : 'Simpan'}
              </button>
            </div>
          </form>
        </div>
      )}
    </DashboardLayout>
  );
}
