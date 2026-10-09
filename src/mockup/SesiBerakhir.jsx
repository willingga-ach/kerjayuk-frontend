import React from 'react';

export default function SesiBerakhir() {
  return (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col justify-start items-start overflow-hidden">
      
      {/* ========================================= */}
      {/* === 1. NAVBAR (Bilah Aplikasi Atas) ====== */}
      {/* ========================================= */}
      <div className="self-stretch h-20 px-16 bg-white border-b border-slate-200 flex justify-between items-center overflow-hidden">
        
        {/* Logo */}
        <div className="flex justify-start items-center gap-2.5 overflow-hidden">
          <div className="w-8 h-8 bg-blue-600 rounded-[10px] flex justify-center items-center overflow-hidden">
            <div className="w-5 h-5 relative overflow-hidden">
              <div className="w-4 h-3.5 left-[1.67px] top-[1.67px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-white" />
            </div>
          </div>
          <div className="justify-start text-blue-950 text-2xl font-bold font-['Inter'] cursor-pointer">KerjaYuk</div>
        </div>
        
        {/* Tautan Navigasi Publik */}
        <div className="flex justify-start items-center gap-8 overflow-hidden">
          <div className="justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5 cursor-pointer">Cari lowongan</div>
          <div className="justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5 cursor-pointer hover:text-blue-600">Untuk perusahaan</div>
        </div>
        
        {/* Tombol Akses (Masuk / Daftar) */}
        <div className="flex justify-start items-center gap-3 overflow-hidden">
          <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-white/0 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
            <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Masuk</div>
          </div>
          <div className="px-4 py-2.5 bg-blue-600 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/0 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-blue-700">
            <div className="justify-start text-white text-sm font-semibold font-['Inter'] leading-5">Daftar gratis</div>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* === 2. KONTEN UTAMA (Kartu Peringatan) === */}
      {/* ========================================= */}
      <div className="self-stretch flex-1 pb-20 flex flex-col justify-center items-center gap-6 overflow-hidden">
        
        {/* Kartu Sesi Berakhir */}
        <div className="w-[520px] p-10 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-6 overflow-hidden shadow-sm">
          
          {/* Ikon Peringatan (Kuning) */}
          <div className="w-16 h-16 bg-yellow-50 rounded-[100px] flex justify-center items-center overflow-hidden">
            <div className="w-7 h-7 relative overflow-hidden">
              <div className="w-6 h-6 left-[3.75px] top-[2.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-yellow-700" />
            </div>
          </div>
          
          {/* Judul & Deskripsi */}
          <div className="self-stretch flex flex-col justify-start items-start gap-3 overflow-hidden">
            <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">Sesi kamu telah berakhir.</div>
            <div className="self-stretch justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Untuk menjaga akunmu, masuk kembali sebelum melanjutkan aktivitas.</div>
          </div>
          
          {/* Banner Informasi Data Belum Disimpan */}
          <div className="self-stretch p-4 bg-yellow-50 rounded-lg flex justify-start items-start gap-3 overflow-hidden">
            <div className="w-4 h-4 relative overflow-hidden mt-0.5 shrink-0">
              <div className="w-4 h-3.5 left-[1.49px] top-[2.24px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-yellow-700" />
            </div>
            <div className="flex-1 flex flex-col justify-start items-start gap-1 overflow-hidden">
              <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Perubahan terakhir belum disimpan</div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Jika sedang mengisi formulir, periksa kembali isinya setelah masuk. Lamaran yang sudah terkirim tetap tersedia di Lamaran Saya.</div>
            </div>
          </div>
          
          {/* Tombol Tindakan */}
          <div className="self-stretch flex justify-start items-start gap-3 overflow-hidden">
            {/* Tombol Primary */}
            <div className="px-4 py-2.5 bg-blue-600 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/0 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-blue-700">
              <div className="justify-start text-white text-sm font-semibold font-['Inter'] leading-5">Masuk kembali</div>
            </div>
            {/* Tombol Secondary */}
            <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
              <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Ke katalog lowongan</div>
            </div>
          </div>
          
        </div>
        
        {/* Teks Footer Halaman */}
        <div className="justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">
          KerjaYuk · Akses akun yang aman, perjalanan yang nyaman.
        </div>
        
      </div>
    </div>
  );
}