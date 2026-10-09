// KerjaYuk — Halaman Sesi Berakhir (dipakai saat 401 / logout)
import { Link } from 'react-router-dom';

export default function SesiBerakhir() {
  return (
    <div className="w-full min-h-screen bg-slate-50 flex justify-center items-center p-6">
      <div className="max-w-md p-8 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col gap-4 text-center">
        <div className="text-blue-950 text-2xl font-bold">Sesi berakhir.</div>
        <div className="text-slate-500 text-sm leading-6">
          Sesi loginmu telah dicabut atau kedaluwarsa demi keamanan akun. Silakan masuk kembali untuk melanjutkan.
        </div>
        <Link to="/masuk" className="px-4 py-2.5 bg-blue-600 rounded-lg text-white text-sm font-semibold hover:bg-blue-700 w-fit mx-auto">
          Masuk kembali
        </Link>
      </div>
    </div>
  );
}
