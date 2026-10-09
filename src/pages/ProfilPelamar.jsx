// KerjaYuk — Profil Pelamar: update nama & URL portofolio (AC-4)
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';
import DashboardLayout from '../components/DashboardLayout';
import { useAuth } from '../context/AuthContext';

const ALLOWLIST = ['github.com', 'gitlab.com', 'linkedin.com', 'dribbble.com', 'behance.net', 'medium.com'];

function cekDomainClient(url) {
  if (!url.trim()) return null;
  try {
    const u = new URL(url.trim());
    if (u.protocol !== 'https:') return 'URL harus menggunakan https://';
    const host = u.hostname.toLowerCase().replace(/^www\./, '');
    if (!ALLOWLIST.includes(host)) return `Domain belum diizinkan. Gunakan: ${ALLOWLIST.join(', ')}`;
    return null;
  } catch {
    return 'URL tidak valid';
  }
}

export default function ProfilPelamar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [nama, setNama] = useState(user?.nama || '');
  const [portfolio, setPortfolio] = useState(user?.portfolio_url || '');
  const [msg, setMsg] = useState(null); // {type, text}
  const [busy, setBusy] = useState(false);

  const domainError = cekDomainClient(portfolio);

  async function simpan(e) {
    e.preventDefault();
    setMsg(null);
    if (domainError) return;
    setBusy(true);
    try {
      const res = await api('/auth/profile', {
        method: 'PATCH',
        body: { nama, portfolio_url: portfolio },
      });
      // refresh user di context/localStorage
      localStorage.setItem('kerjayuk_user', JSON.stringify(res.user));
      window.dispatchEvent(new CustomEvent('kerjayuk:profile-updated', { detail: res.user }));
      setMsg({ type: 'ok', text: res.message });
    } catch (err) {
      setMsg({ type: 'err', text: err.message });
    } finally {
      setBusy(false);
    }
  }

  return (
    <DashboardLayout roleLabel="Pelamar" role="PELAMAR" nama={user?.nama} onLogout={() => { logout(); navigate('/masuk'); }}>
      <div className="flex flex-col gap-2">
        <div className="text-slate-500 dark:text-slate-400 text-xs font-medium">RUANG PELAMAR</div>
        <div className="text-blue-950 dark:text-slate-100 text-3xl font-bold">Profil Saya</div>
        <div className="text-slate-500 dark:text-slate-400 text-sm">Kelola identitas dan portofoliomu.</div>
      </div>

      <form onSubmit={simpan} className="max-w-xl p-8 bg-white dark:bg-slate-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 dark:outline-slate-700 flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-blue-950 dark:text-slate-100 text-xs font-semibold">Nama lengkap</label>
          <input value={nama} onChange={(e) => setNama(e.target.value)} required className="min-h-11 p-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 dark:outline-slate-700 focus:outline-blue-600 text-sm" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-blue-950 dark:text-slate-100 text-xs font-semibold">Email (tidak dapat diubah)</label>
          <input value={user?.email || ''} disabled className="min-h-11 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 outline outline-1 outline-offset-[-1px] outline-slate-200 dark:outline-slate-700 text-sm text-slate-400 dark:text-slate-500" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-blue-950 dark:text-slate-100 text-xs font-semibold">URL portofolio</label>
          <input
            value={portfolio}
            onChange={(e) => setPortfolio(e.target.value)}
            placeholder="https://github.com/username"
            className={`min-h-11 p-3 rounded-lg outline outline-1 outline-offset-[-1px] text-sm ${domainError ? 'outline-rose-700' : 'outline-slate-200 dark:outline-slate-700 focus:outline-blue-600'}`}
          />
          <div className="text-slate-500 dark:text-slate-400 text-xs">
            Domain yang diterima: {ALLOWLIST.join(', ')} (boleh pakai www).
          </div>
          {domainError && <div className="text-rose-700 dark:text-rose-300 text-xs">{domainError}</div>}
          <div className="text-slate-400 dark:text-slate-500 text-xs">Pemeriksaan akhir domain dilakukan oleh server (AC-4 — anti domain spoofing &amp; SSRF).</div>
        </div>

        {msg && (
          <div className={`p-4 rounded-lg text-sm ${msg.type === 'ok' ? 'bg-emerald-50 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300' : 'bg-rose-50 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300'}`}>
            {msg.text}
          </div>
        )}

        <button
          type="submit"
          disabled={busy || !!domainError}
          className="px-4 py-2.5 bg-blue-600 rounded-lg text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed w-fit"
        >
          {busy ? 'Menyimpan…' : 'Simpan perubahan'}
        </button>
      </form>
    </DashboardLayout>
  );
}
