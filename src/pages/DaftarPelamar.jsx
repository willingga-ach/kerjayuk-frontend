// KerjaYuk — Halaman Registrasi Pelamar (AC-4: validasi URL portofolio)
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const ALLOWLIST_HINT = 'Domain yang diterima: github.com, linkedin.com, dribbble.com, behance.net, medium.com (boleh pakai www).';

function cekDomainClient(url) {
  if (!url.trim()) return null; // opsional
  try {
    const u = new URL(url.trim());
    if (u.protocol !== 'https:') return 'URL harus menggunakan https://';
    if (u.username || u.password) return 'URL tidak boleh mengandung kredensial';
    const host = u.hostname.toLowerCase().replace(/^www\./, '');
    const ok = ['github.com', 'gitlab.com', 'linkedin.com', 'dribbble.com', 'behance.net', 'medium.com'];
    if (!ok.includes(host)) return 'Domain belum diizinkan. Gunakan tautan GitHub, LinkedIn, atau sejenisnya.';
    return null;
  } catch {
    return 'URL tidak valid';
  }
}

// Tombol tema berdiri sendiri (pojok kanan atas)
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
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      )}
    </button>
  );
}

export default function DaftarPelamar() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ nama: '', email: '', password: '', portfolio_url: '' });
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const domainError = cekDomainClient(form.portfolio_url);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (domainError) return;
    setBusy(true);
    try {
      await register(form);
      alert('Registrasi berhasil! Silakan login.');
      navigate('/masuk');
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-950 flex justify-center items-center p-6 relative">
      <div className="absolute top-4 right-4 z-20"><ThemeToggle /></div>
      <div className="w-full max-w-md p-8 bg-white dark:bg-slate-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 dark:outline-slate-700 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <div className="text-blue-950 dark:text-slate-100 text-2xl font-bold">Buat akun pelamar.</div>
          <div className="text-slate-500 dark:text-slate-400 text-sm">Mulai langkah kariermu di KerjaYuk.</div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-blue-950 dark:text-slate-100 text-xs font-semibold">Nama lengkap</label>
            <input required value={form.nama} onChange={set('nama')} className="min-h-11 p-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 dark:outline-slate-700 focus:outline-blue-600 text-sm" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-blue-950 dark:text-slate-100 text-xs font-semibold">Email</label>
            <input type="email" required value={form.email} onChange={set('email')} className="min-h-11 p-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 dark:outline-slate-700 focus:outline-blue-600 text-sm" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-blue-950 dark:text-slate-100 text-xs font-semibold">Kata sandi (min. 8 karakter)</label>
            <input type="password" required minLength={8} value={form.password} onChange={set('password')} className="min-h-11 p-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 dark:outline-slate-700 focus:outline-blue-600 text-sm" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-blue-950 dark:text-slate-100 text-xs font-semibold">URL portofolio (opsional)</label>
            <input
              value={form.portfolio_url}
              onChange={set('portfolio_url')}
              placeholder="https://github.com/username"
              className={`min-h-11 p-3 rounded-lg outline outline-1 outline-offset-[-1px] text-sm ${domainError ? 'outline-rose-700' : 'outline-slate-200 dark:outline-slate-700 focus:outline-blue-600'}`}
            />
            <div className="text-slate-500 dark:text-slate-400 text-xs">{ALLOWLIST_HINT}</div>
            {domainError && <div className="text-rose-700 dark:text-rose-300 text-xs">{domainError}</div>}
            <div className="text-slate-400 dark:text-slate-500 text-xs">Pemeriksaan akhir domain dilakukan oleh server (AC-4).</div>
          </div>

          {error && <div className="p-3 bg-rose-50 dark:bg-rose-500/20 rounded-lg text-rose-700 dark:text-rose-300 text-xs">{error}</div>}

          <button
            type="submit"
            disabled={busy || !!domainError}
            className="px-4 py-2.5 bg-blue-600 rounded-lg text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {busy ? 'Mendaftarkan…' : 'Daftar'}
          </button>
        </form>

        <Link to="/masuk" className="text-blue-600 dark:text-indigo-300 text-sm hover:underline">
          Sudah punya akun? Masuk →
        </Link>
      </div>
    </div>
  );
}
