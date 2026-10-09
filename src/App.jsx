// KerjaYuk — Routing utama + guard berbasis role
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

import MasukAkun from './pages/MasukAkun';
import DaftarPelamar from './pages/DaftarPelamar';
import SesiBerakhir from './pages/SesiBerakhir';
import KatalogLowongan from './pages/KatalogLowongan';
import DetailLowongan from './pages/DetailLowongan';
import LamaranSaya from './pages/LamaranSaya';
import ProfilPelamar from './pages/ProfilPelamar';
import RingkasanRecruiter from './pages/RingkasanRecruiter';
import LowonganRecruiter from './pages/LowonganRecruiter';
import KandidatRecruiter from './pages/KandidatRecruiter';

function Guard({ roles, children }) {
  const { user, loading } = useAuth();
  if (loading) {
    return <div className="min-h-screen bg-slate-50 flex justify-center items-center text-slate-500">Memuat…</div>;
  }
  if (!user) return <Navigate to="/masuk" replace />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/" replace />;
  return children;
}

// Arahkan "/" sesuai role yang sedang login
function Home() {
  const { user, loading } = useAuth();
  if (loading) return <div className="min-h-screen bg-slate-50 flex justify-center items-center text-slate-500">Memuat…</div>;
  if (!user) return <Navigate to="/masuk" replace />;
  if (user.role === 'RECRUITER') return <Navigate to="/recruiter" replace />;
  if (user.role === 'ADMIN') return <Navigate to="/admin" replace />;
  return <Navigate to="/lowongan" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="w-full min-h-screen bg-slate-50">
          <Routes>
            {/* Publik */}
            <Route path="/masuk" element={<MasukAkun />} />
            <Route path="/daftar" element={<DaftarPelamar />} />
            <Route path="/sesi-berakhir" element={<SesiBerakhir />} />

            {/* Pelamar */}
            <Route path="/lowongan" element={<Guard roles={['PELAMAR']}><KatalogLowongan /></Guard>} />
            <Route path="/lowongan/:id" element={<Guard roles={['PELAMAR']}><DetailLowongan /></Guard>} />
            <Route path="/lamaran" element={<Guard roles={['PELAMAR']}><LamaranSaya /></Guard>} />
            <Route path="/profil" element={<Guard roles={['PELAMAR']}><ProfilPelamar /></Guard>} />

            {/* Recruiter */}
            <Route path="/recruiter" element={<Guard roles={['RECRUITER', 'ADMIN']}><RingkasanRecruiter /></Guard>} />
            <Route path="/recruiter/lowongan" element={<Guard roles={['RECRUITER', 'ADMIN']}><LowonganRecruiter /></Guard>} />
            <Route path="/recruiter/lamaran" element={<Guard roles={['RECRUITER', 'ADMIN']}><KandidatRecruiter /></Guard>} />

            {/* Admin memakai halaman recruiter (tinjau lamaran) */}
            <Route path="/admin" element={<Guard roles={['ADMIN', 'RECRUITER']}><RingkasanRecruiter /></Guard>} />

            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}