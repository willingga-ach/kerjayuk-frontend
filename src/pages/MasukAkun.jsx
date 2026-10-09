// KerjaYuk — Halaman Login (dibangun dari desain MasukAkun.jsx)
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function MasukAkun() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setBusy(true);
    try {
      const user = await login(email, password);
      if (user.role === 'RECRUITER') navigate('/recruiter');
      else if (user.role === 'ADMIN') navigate('/admin');
      else navigate('/lowongan');
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="w-full min-h-screen bg-white flex">
      {/* Kolom kiri: pesan karier */}
      <div className="hidden lg:flex w-[600px] p-14 bg-indigo-50 flex-col gap-9">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-blue-600 rounded-[10px]" />
          <div className="text-blue-950 text-2xl font-bold">KerjaYuk</div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-blue-950 text-4xl font-bold leading-[50px]">
            Langkah pertamamu, peluang berikutnya.
          </div>
          <div className="text-slate-500 leading-6">
            Temukan magang dan pekerjaan yang memberi ruang untuk tumbuh. Mulai perjalananmu bersama KerjaYuk.
          </div>
        </div>
        <img className="h-80 rounded-2xl object-cover" src="https://placehold.co/488x320" alt="Ilustrasi KerjaYuk" />
        <div className="flex flex-col gap-4 text-blue-950 text-sm leading-5">
          <div>• Lowongan magang &amp; pekerjaan penuh waktu</div>
          <div>• Riwayat lamaran yang transparan</div>
          <div>• Portofolio untuk menunjukkan potensimu</div>
        </div>
        <div className="text-slate-500 text-xs mt-auto">© 2026 KerjaYuk · Ruang bertumbuh untuk talenta muda</div>
      </div>

      {/* Kolom kanan: form login */}
      <div className="flex-1 px-8 lg:px-24 py-12 flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <div className="text-blue-950 text-3xl font-bold leading-9">Selamat datang kembali.</div>
          <div className="text-slate-500 text-sm">Masuk untuk melanjutkan perjalanan kariermu.</div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-blue-950 text-xs font-semibold leading-5">Alamat email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nadia.putri@email.com"
              className="min-h-11 p-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 focus:outline-blue-600 text-sm text-blue-950"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-blue-950 text-xs font-semibold leading-5">Kata sandi</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="min-h-11 p-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 focus:outline-blue-600 text-sm text-blue-950"
            />
          </div>

          {error && (
            <div className="p-3 bg-rose-50 rounded-lg text-rose-700 text-xs">{error}</div>
          )}

          <button
            type="submit"
            disabled={busy}
            className="px-4 py-2.5 bg-blue-600 rounded-lg text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            {busy ? 'Memproses…' : 'Masuk'}
          </button>
          <div className="text-slate-500 text-xs">
            Akses pelamar, recruiter, atau admin mengikuti peran akunmu.
          </div>
        </form>

        <Link to="/daftar" className="text-blue-600 text-sm hover:underline">
          Belum punya akun? Daftar sebagai pelamar →
        </Link>

        {/* Kartu info akun demo */}
        <div className="p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <div className="text-blue-950 text-lg font-semibold leading-7">Coba ruang recruiter</div>
            <div className="text-slate-500 text-xs">Demo untuk proyek perkuliahan</div>
          </div>
          <span className="px-2.5 py-1 bg-indigo-50 rounded-md text-blue-600 text-xs font-semibold leading-4 w-fit">
            Recruiter · Nusa Digital
          </span>
          <div className="text-slate-500 text-xs">
            Jelajahi dashboard, lowongan, dan alur seleksi. Akun demo:
            <div className="mt-1 font-mono text-blue-950">recruiter@kerjayuk.id / pelamar@kerjayuk.id</div>
            <div className="font-mono text-blue-950">password: password123</div>
          </div>
        </div>

        <div className="text-slate-500 text-xs mt-auto">
          Dengan masuk, kamu menyetujui Ketentuan Layanan dan Kebijakan Privasi KerjaYuk.
        </div>
      </div>
    </div>
  );
}
