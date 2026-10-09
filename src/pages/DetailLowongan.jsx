// KerjaYuk — Detail Lowongan + Modal Lamar (POST /api/lamaran)
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api, ApiError } from '../lib/api';
import DashboardLayout from '../components/DashboardLayout';
import { useAuth } from '../context/AuthContext';

export default function DetailLowongan() {
  const { id } = useParams();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [lowongan, setLowongan] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [notes, setNotes] = useState('');
  const [result, setResult] = useState(null); // { type: 'ok'|'err', msg }
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    api(`/lowongan/${id}`).then(setLowongan).catch((e) => setResult({ type: 'err', msg: e.message }));
  }, [id]);

  async function kirimLamaran() {
    setBusy(true);
    setResult(null);
    try {
      const res = await api('/lamaran', { method: 'POST', body: { lowonganId: id } });
      setResult({ type: 'ok', msg: res.message });
      setShowModal(false);
    } catch (err) {
      // 409 duplikat / lowongan dihapus saat race; 400 lowongan ditutup
      setResult({ type: 'err', msg: err.message });
      setShowModal(false);
    } finally {
      setBusy(false);
    }
  }

  if (!lowongan) {
    return (
      <DashboardLayout roleLabel="Pelamar" role="PELAMAR" nama={user?.nama} onLogout={() => { logout(); navigate('/masuk'); }}>
        {result?.msg ? <div className="p-4 bg-rose-50 rounded-lg text-rose-700 text-sm">{result.msg}</div> : <div className="text-slate-500">Memuat…</div>}
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout roleLabel="Pelamar" role="PELAMAR" nama={user?.nama} onLogout={() => { logout(); navigate('/masuk'); }}>
      <button onClick={() => navigate('/lowongan')} className="text-slate-500 text-sm hover:underline w-fit">
        ← Kembali ke katalog
      </button>

      <div className="p-8 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-5">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-blue-950 text-3xl font-bold">{lowongan.judul}</div>
            <div className="text-slate-500 text-sm mt-1">
              {lowongan.perusahaan} · dibuka oleh {lowongan.recruiter?.nama}
            </div>
          </div>
          <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${lowongan.is_open ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-200 text-slate-500'}`}>
            {lowongan.is_open ? 'Lowongan buka' : 'Lowongan ditutup'}
          </span>
        </div>

        <div className="text-blue-950 text-sm whitespace-pre-wrap leading-6">{lowongan.deskripsi}</div>
        <div className="text-slate-400 text-xs">
          Dibuat {new Date(lowongan.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })} · {lowongan.jumlah_pelamar} pelamar sudah mendaftar
        </div>

        {result && (
          <div className={`p-4 rounded-lg text-sm ${result.type === 'ok' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
            {result.msg}
          </div>
        )}

        <button
          onClick={() => setShowModal(true)}
          disabled={!lowongan.is_open}
          className="px-4 py-2.5 bg-blue-600 rounded-lg text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed w-fit"
        >
          {lowongan.is_open ? 'Lamar sekarang' : 'Lamaran ditutup'}
        </button>
      </div>

      {/* Modal kirim lamaran */}
      {showModal && (
        <div className="fixed inset-0 bg-blue-950/50 z-10 flex justify-center items-center p-4">
          <div className="w-full max-w-[640px] p-8 bg-white rounded-2xl shadow-xl flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-blue-950 text-2xl font-bold leading-8">Kirim lamaran</div>
                <div className="text-slate-500 text-xs mt-1">
                  {lowongan.judul} · {lowongan.perusahaan}
                </div>
              </div>
              <button onClick={() => setShowModal(false)} className="text-slate-500 hover:text-blue-950">✕</button>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-blue-950 text-sm font-semibold">{user?.nama}</div>
              <span className="px-2.5 py-1 bg-indigo-50 rounded-md text-blue-600 text-xs font-semibold leading-4">Pelamar</span>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-blue-950 text-xs font-semibold">Catatan pengantar (opsional)</label>
              <textarea
                rows={4}
                maxLength={1000}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ceritakan singkat kenapa kamu cocok untuk posisi ini…"
                className="p-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 focus:outline-blue-600 text-sm"
              />
              <div className="text-slate-500 text-xs">Maksimal 1.000 karakter · {notes.length}/1000</div>
            </div>

            <div className="p-4 bg-indigo-50 rounded-lg text-blue-950 text-xs font-semibold">
              Status awal: Diproses — recruiter akan memantau perkembangan lamaranmu.
            </div>

            <div className="flex justify-end gap-3">
              <button onClick={() => setShowModal(false)} className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 text-sm font-semibold text-blue-950 hover:bg-slate-50">
                Batal
              </button>
              <button
                onClick={kirimLamaran}
                disabled={busy}
                className="px-4 py-2.5 bg-blue-600 rounded-lg text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-50"
              >
                {busy ? 'Mengirim…' : 'Kirim lamaran'}
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
