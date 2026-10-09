import React from 'react';

export default function PelamarLowonganDitutup() {
  return (
    <div className="w-full min-h-screen relative bg-slate-50 flex flex-col justify-start items-start overflow-hidden">
      
      {/* ========================================= */}
      {/* === 1. NAVBAR (Bilah Aplikasi Atas) ====== */}
      {/* ========================================= */}
      <div className="self-stretch h-20 px-8 bg-white border-b border-slate-200 flex justify-between items-center overflow-hidden">
        
        {/* Logo */}
        <div className="flex justify-start items-center gap-2.5 overflow-hidden">
          <div className="w-8 h-8 bg-blue-600 rounded-[10px] flex justify-center items-center overflow-hidden">
            <div className="w-5 h-5 relative overflow-hidden">
              <div className="w-4 h-3.5 left-[1.67px] top-[1.67px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-white" />
            </div>
          </div>
          <div className="justify-start text-blue-950 text-2xl font-bold font-['Inter']">KerjaYuk</div>
        </div>
        
        {/* Label Peran Pelamar */}
        <div className="flex justify-start items-center gap-3 overflow-hidden">
          <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
            <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Pelamar</div>
          </div>
          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Ruang kariermu</div>
        </div>
        
        {/* Profil Mini */}
        <div className="flex justify-start items-center gap-4 overflow-hidden cursor-pointer hover:opacity-80">
          <div className="w-4 h-4 relative overflow-hidden">
            <div className="w-3.5 h-3.5 left-[2.25px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
          </div>
          <div className="w-9 h-9 bg-indigo-50 rounded-[100px] flex justify-center items-center overflow-hidden">
            <div className="justify-start text-blue-600 text-sm font-bold font-['Inter'] leading-5">NP</div>
          </div>
          <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Nadia Putri</div>
          <div className="w-4 h-4 relative overflow-hidden">
            <div className="w-2 h-1 left-[4px] top-[6px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* === CONTAINER BAWAH (Sidebar & Konten) === */}
      {/* ========================================= */}
      <div className="self-stretch flex-1 flex justify-start items-start overflow-hidden">
        
        {/* ========================================= */}
        {/* === 2. SIDEBAR (Menu Navigasi Kiri) ====== */}
        {/* ========================================= */}
        <div className="w-60 self-stretch px-5 py-7 bg-white border-r border-slate-200 flex flex-col justify-start items-start gap-3 overflow-hidden">
          <div className="self-stretch justify-start text-slate-400 text-xs font-bold font-['Inter'] leading-4">RUANG PELAMAR</div>
          
          <div className="self-stretch p-3 bg-white rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer hover:bg-slate-50">
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-3.5 h-3.5 left-[2.25px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
            <div className="flex-1 justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Cari lowongan</div>
          </div>
          
          {/* Menu Aktif: Lamaran Saya */}
          <div className="self-stretch p-3 bg-indigo-50 rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer">
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-3.5 h-3.5 left-[1.50px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-blue-600" />
            </div>
            <div className="flex-1 justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Lamaran Saya</div>
          </div>
          
          <div className="self-stretch p-3 bg-white rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer hover:bg-slate-50">
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-3 h-3.5 left-[3px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
            <div className="flex-1 justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Profil Saya</div>
          </div>
          
          <div className="self-stretch h-px bg-slate-200" />
          
          <div className="self-stretch p-3 flex justify-start items-start gap-3 overflow-hidden cursor-pointer hover:bg-slate-50">
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-3.5 h-3.5 left-[1.50px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
            <div className="flex-1 justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Pusat bantuan</div>
          </div>
          
          <div className="self-stretch p-3 flex justify-start items-start gap-3 overflow-hidden cursor-pointer hover:bg-slate-50">
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-3.5 h-3.5 left-[2.25px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
            <div className="flex-1 justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Keluar</div>
          </div>
          
          <div className="self-stretch p-4 bg-slate-50 rounded-lg flex flex-col justify-start items-start gap-2 overflow-hidden mt-auto">
            <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-4">Langkah kecil, peluang besar</div>
            <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Lengkapi profil dan temukan pengalaman kerja pertamamu.</div>
          </div>
        </div>

        {/* ========================================= */}
        {/* === 3. MAIN CONTENT (Halaman Dasbor) ===== */}
        {/* ========================================= */}
        <div className="flex-1 p-10 flex flex-col justify-start items-start gap-6 overflow-hidden">
          
          {/* Header Konten */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
            <div className="self-stretch justify-start text-slate-500 text-xs font-medium font-['Inter'] leading-4">RUANG PELAMAR</div>
            <div className="self-stretch flex justify-start items-center gap-6 overflow-hidden">
              <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">Lamaran Saya</div>
                <div className="self-stretch justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Pantau informasi dan riwayat lamaran di satu tempat.</div>
              </div>
            </div>
          </div>
          
          {/* Tabel Daftar Lamaran */}
          <div className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
              <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Lamaran terpilih</div>
            </div>
            
            <div className="self-stretch bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start overflow-hidden">
              {/* Header Tabel */}
              <div className="self-stretch px-4 py-3.5 bg-slate-50 flex justify-start items-start gap-3.5 overflow-hidden">
                <div className="flex-1 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Pelamar</div>
                </div>
                <div className="flex-1 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Lowongan</div>
                </div>
                <div className="flex-1 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Perusahaan</div>
                </div>
                <div className="flex-1 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Status</div>
                </div>
              </div>
              
              {/* Baris 1: Aksara Teknologi (Terkirim) */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden cursor-pointer hover:bg-slate-50">
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Nadia Putri</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Frontend Developer</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Aksara Teknologi</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Terkirim</div>
                  </div>
                </div>
              </div>
              
              {/* Baris 2: Nusa Digital (Dibaca) */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden cursor-pointer hover:bg-slate-50">
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Nadia Putri</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Magang UI/UX Designer</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Nusa Digital</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-yellow-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-yellow-700 text-xs font-semibold font-['Inter'] leading-4">Dibaca</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Informasi Seleksi */}
          <div className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
              <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Informasi seleksi</div>
            </div>
            <div className="self-stretch justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Terkirim → Dibaca → Diproses → Diterima / Ditolak</div>
            <div className="self-stretch justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Perubahan status dan catatan evaluasi disimpan dalam riwayat lamaran.</div>
          </div>
          
          {/* Teks Footer */}
          <div className="self-stretch justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4 mt-auto">
            KerjaYuk · Data contoh untuk ilustrasi · 7 Oktober 2026
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* === 4. MODAL OVERLAY (Lowongan Ditutup) ==== */}
      {/* ========================================= */}
      <div className="absolute inset-0 bg-blue-950/50 z-10 flex justify-center items-center">
        <div className="w-[640px] p-8 bg-white rounded-2xl shadow-[0px_16px_48px_0px_rgba(20,46,88,0.15)] flex flex-col justify-start items-start gap-6 overflow-hidden">
          
          {/* Header Modal */}
          <div className="self-stretch flex justify-start items-start gap-5 overflow-hidden">
            <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
              <div className="self-stretch justify-start text-blue-950 text-2xl font-bold font-['Inter'] leading-8">Lowongan baru saja ditutup</div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Magang Backend Developer · Nusa Digital · LWG-102</div>
            </div>
            <div className="w-5 h-5 relative overflow-hidden cursor-pointer hover:opacity-70">
              <div className="w-2.5 h-2.5 left-[5px] top-[5px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
          </div>
          
          {/* Label Status Ditutup */}
          <div className="px-2.5 py-1 bg-yellow-50 rounded-md flex justify-start items-start overflow-hidden">
            <div className="justify-start text-yellow-700 text-xs font-semibold font-['Inter'] leading-4">Ditutup</div>
          </div>
          
          {/* Banner Informasi Lamaran Gagal */}
          <div className="self-stretch p-4 bg-yellow-50 rounded-lg flex justify-start items-start gap-3 overflow-hidden">
            <div className="w-4 h-4 relative overflow-hidden mt-0.5 shrink-0">
              <div className="w-4 h-3.5 left-[1.49px] top-[2.24px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-yellow-700" />
            </div>
            <div className="flex-1 flex flex-col justify-start items-start gap-1 overflow-hidden">
              <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Lamaran belum terkirim</div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Perusahaan menutup lowongan saat kamu mengirim formulir. Tidak ada lamaran baru yang disimpan dan tidak ada status Terkirim yang dibuat.</div>
            </div>
          </div>
          
          {/* Penjelasan Singkat */}
          <div className="self-stretch justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">
            Skenario alternatif · Ditutup 7 Oktober 2026, 10.07. Kamu dapat menyalin catatan di bawah sebelum mencari peluang lain.
          </div>
          
          {/* Area Catatan Pengantar (Read-Only) */}
          <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
            <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Catatanmu tetap tersedia di sini</div>
            <div className="self-stretch min-h-28 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
              <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">
                Saya ingin mengembangkan kemampuan backend dan berkolaborasi dalam membangun produk digital. Portofolio saya memuat proyek API layanan kampus.
              </div>
            </div>
          </div>
          
          {/* Tombol Aksi */}
          <div className="self-stretch flex justify-end items-start gap-3 overflow-hidden mt-2">
            {/* Tombol Sekunder (Salin) */}
            <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
              <div className="w-4 h-4 relative overflow-hidden">
                <div className="w-3.5 h-3.5 left-[1.33px] top-[1.33px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
              </div>
              <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Salin catatan</div>
            </div>
            {/* Tombol Primary (Cari Lowongan Lain) */}
            <div className="px-4 py-2.5 bg-blue-600 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/0 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-blue-700">
              <div className="w-4 h-4 relative overflow-hidden">
                <div className="w-3 h-3 left-[2px] top-[2px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-white" />
              </div>
              <div className="justify-start text-white text-sm font-semibold font-['Inter'] leading-5">Cari lowongan lain</div>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}