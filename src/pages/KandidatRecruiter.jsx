// KerjaYuk — Recruiter/Admin: Tinjau Kandidat
// AC-1: Compare-and-Swap — current_version dikirim saat update status;
//       jika 409 (data diubah pihak lain), tampilkan peringatan & muat ulang.
// AC-2: transisi DITOLAK -> DIPROSES wajib notes (server menolak 400 jika kosong).
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { api } from '../lib/api';
import DashboardLayout, { StatusBadge } from '../components/DashboardLayout';
import { useAuth } from '../context/AuthContext';

const STATUS_OPSI = ['DIPROSES', 'DITERIMA', 'DITOLAK'];

export default function KandidatRecruiter() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // state form per baris: { status, notes, busy, alert }
  const [form, setForm] = useState({});
  const [logFor, setLogFor] = useState(null); // id lamaran yang log-nya dibuka
  const [logs, setLogs] = useState([]);

  async function load() {
    setLoading(true);
    setError('');
    try {
      const res = await api('/lamaran?limit=50&page=1');
      setData(res.data);
      setForm({});
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  function getForm(id) {
    return form[id] || { status: '', notes: '', busy: false, alert: null };
  }
  function setFormVal(id, patch) {
    setForm((prev) => ({ ...prev, [id]: { ...getForm(id), ...patch } }));
  }

  /**
   * AC-1: kirim current_version dari data baris.
   * Jika sukses -> version +1 di server; jika 409 -> tampilkan peringatan.
   */
  async function updateStatus(lam) {
    const f = getForm(lam.id);
    if (!f.status) return;
    setFormVal(lam.id, { busy: true, alert: null });
    try {
      const res = await api(`/lamaran/${lam.id}/status`, {
        method: 'PATCH',
        body: { status_baru: f.status, current_version: lam.version, notes: f.notes || undefined },
      });
      // sukses: version baru dari server
      setData((prev) => prev.map((r) => (r.id === lam.id ? { ...r, ...res.lamaran } : r)));
      setFormVal(lam.id, { busy: false, alert: { type: 'ok', text: 'Status berhasil diperbarui' }, status: '', notes: '' });
    } catch (err) {
      if (err.status === 409) {
        // AC-1: versi sudah berubah -> refresh baris dari server
        setFormVal(lam.id, { busy: false });
        await load();
        setError('Konflik: data telah diubah oleh recruiter lain. Daftar sudah dimuat ulang — coba lagi.');
      } else {
        // 400: misal undo tanpa notes (AC-2)
        setFormVal(lam.id, { busy: false, alert: { type: 'err', text: err.message } });
      }
    }
  }

  async function bukaLog(id) {
    if (logFor === id) { setLogFor(null); return; }
    try {
      const res = await api(`/lamaran/${id}/log`);
      setLogs(res.logs);
      setLogFor(id);
    } catch (err) {
      setError(err.message);
    }
  }

  const isUndoPenolakan = (lam) => lam.status === 'DITOLAK' && getForm(lam.id).status === 'DIPROSES';

  return (
    <DashboardLayout
      roleLabel={user?.role === 'ADMIN' ? 'Admin' : 'Recruiter'}
      role={user?.role === 'ADMIN' ? 'ADMIN' : 'RECRUITER'}
      nama={user?.nama}
      onLogout={() => { logout(); navigate('/masuk'); }}
    >
      <div className="flex flex-col gap-2">
        <div className="text-slate-500 text-xs font-medium">
          {user?.role === 'ADMIN' ? 'RUANG ADMIN' : 'RUANG RECRUITER'}
        </div>
        <div className="text-blue-950 text-3xl font-bold">Kandidat &amp; Status Lamaran</div>
        <div className="text-slate-500 text-sm">
          Ubah status kandidat. Perubahan dilindungi Compare-and-Swap: jika recruiter lain mengubah lebih dulu, kamu akan diminta memuat ulang (HTTP 409).
        </div>
      </div>

      {error && (
        <div className="p-4 bg-amber-50 rounded-lg text-amber-800 text-sm border border-amber-200">{error}</div>
      )}
      {loading && <div className="text-slate-500 text-sm">Memuat…</div>}

      <div className="flex flex-col gap-4">
        {!loading && data.length === 0 && (
          <div className="p-6 bg-white rounded-xl text-slate-500 text-sm">Belum ada lamaran masuk.</div>
        )}
        {data.map((lam) => {
          const f = getForm(lam.id);
          return (
            <div key={lam.id} className="p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-4">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="text-blue-950 text-lg font-semibold leading-7">{lam.lowongan?.judul}</div>
                  <div className="text-slate-500 text-xs">
                    {lam.lowongan?.perusahaan} · v{lam.version} · {new Date(lam.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </div>
                </div>
                <StatusBadge status={lam.status} />
              </div>

              <div className="flex flex-wrap items-end gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-blue-950 text-xs font-semibold">Status baru</label>
                  <select
                    value={f.status}
                    onChange={(e) => setFormVal(lam.id, { status: e.target.value })}
                    className="min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 text-sm text-blue-950"
                  >
                    <option value="">— pilih —</option>
                    {STATUS_OPSI.map((s) => (
                      <option key={s} value={s}>
                        {s === 'DIPROSES' && lam.status === 'DITOLAK' ? 'Diproses (undo penolakan)' : s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5 flex-1 min-w-64">
                  <label className="text-blue-950 text-xs font-semibold">
                    Catatan {isUndoPenolakan(lam) && <span className="text-rose-600">* wajib untuk undo penolakan (AC-2)</span>}
                  </label>
                  <input
                    value={f.notes}
                    onChange={(e) => setFormVal(lam.id, { notes: e.target.value })}
                    placeholder="Catatan evaluasi…"
                    className={`min-h-11 p-3 rounded-lg outline outline-1 outline-offset-[-1px] text-sm ${isUndoPenolakan(lam) && !f.notes.trim() ? 'outline-rose-400' : 'outline-slate-200 focus:outline-blue-600'}`}
                  />
                </div>
                <button
                  onClick={() => updateStatus(lam)}
                  disabled={!f.status || f.busy}
                  className="px-4 py-2.5 bg-blue-600 rounded-lg text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-40"
                >
                  {f.busy ? 'Menyimpan…' : 'Perbarui status'}
                </button>
                <button
                  onClick={() => bukaLog(lam.id)}
                  className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 text-sm font-semibold text-blue-950 hover:bg-slate-50"
                >
                  {logFor === lam.id ? 'Tutup riwayat' : 'Lihat riwayat'}
                </button>
              </div>

              {f.alert && (
                <div className={`p-3 rounded-lg text-xs ${f.alert.type === 'ok' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                  {f.alert.text}
                </div>
              )}

              {logFor === lam.id && (
                <div className="rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden">
                  <div className="px-4 py-3 bg-slate-50 text-slate-500 text-xs font-semibold">
                    Riwayat perubahan status ({logs.length})
                  </div>
                  {logs.length === 0 && <div className="px-4 py-3 text-slate-400 text-xs">Belum ada perubahan.</div>}
                  {logs.map((lg) => (
                    <div key={lg.id} className="px-4 py-3 border-t border-slate-200 text-xs flex gap-4 items-center">
                      <span className="text-slate-400 w-36">{new Date(lg.created_at).toLocaleString('id-ID')}</span>
                      <span className="text-blue-950">
                        {lg.status_lama || '—'} → <strong>{lg.status_baru}</strong>
                      </span>
                      {lg.notes && <span className="text-slate-500 flex-1">“{lg.notes}”</span>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
}
