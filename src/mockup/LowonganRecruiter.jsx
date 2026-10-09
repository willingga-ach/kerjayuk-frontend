import React from 'react';

export default function LowonganRecruiter() {
  return (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col justify-start items-start overflow-hidden">
      
      {/* ========================================= */}
      {/* === 1. NAVBAR (Bilah Aplikasi Atas) ====== */}
      {/* ========================================= */}
      <div className="self-stretch h-20 px-8 bg-white border-b border-slate-200 flex justify-between items-center overflow-hidden">
        
        {/* Logo */}
        <div className="flex justify-start items-center gap-2.5 overflow-hidden">
          <div className="size-8 bg-blue-600 rounded-[10px] flex justify-center items-center overflow-hidden">
            <div className="size-5 relative overflow-hidden">
              <div className="w-4 h-3.5 left-[1.67px] top-[1.67px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-white" />
            </div>
          </div>
          <div className="justify-start text-blue-950 text-2xl font-bold font-['Inter']">KerjaYuk</div>
        </div>
        
        {/* Judul Perusahaan */}
        <div className="flex justify-start items-center gap-3 overflow-hidden">
          <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
            <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Recruiter</div>
          </div>
          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Nusa Digital</div>
        </div>
        
        {/* Profil Mini */}
        <div className="flex justify-start items-center gap-4 overflow-hidden cursor-pointer">
          <div className="size-4 relative overflow-hidden">
            <div className="size-3.5 left-[2.25px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
          </div>
          <div className="size-9 bg-indigo-50 rounded-[100px] flex justify-center items-center overflow-hidden">
            <div className="justify-start text-blue-600 text-sm font-bold font-['Inter'] leading-5">RP</div>
          </div>
          <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Raka Pratama</div>
          <div className="size-4 relative overflow-hidden">
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
          <div className="self-stretch justify-start text-slate-400 text-xs font-bold font-['Inter'] leading-4">RUANG RECRUITER</div>
          
          <div className="self-stretch p-3 bg-white rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer hover:bg-slate-50">
            <div className="size-4 relative overflow-hidden">
              <div className="size-3.5 left-[2.25px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
            <div className="flex-1 justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Ringkasan</div>
          </div>
          
          <div className="self-stretch p-3 bg-indigo-50 rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer">
            <div className="size-4 relative overflow-hidden">
              <div className="size-3.5 left-[1.50px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-blue-600" />
            </div>
            <div className="flex-1 justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Lowongan</div>
          </div>
          
          <div className="self-stretch p-3 bg-white rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer hover:bg-slate-50">
            <div className="size-4 relative overflow-hidden">
              <div className="size-3.5 left-[1.50px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
            <div className="flex-1 justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Kandidat</div>
          </div>
          
          <div className="self-stretch h-px bg-slate-200" />
          
          <div className="self-stretch p-3 flex justify-start items-start gap-3 overflow-hidden cursor-pointer hover:bg-slate-50">
            <div className="size-4 relative overflow-hidden">
              <div className="size-3.5 left-[1.50px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
            <div className="flex-1 justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Pusat bantuan</div>
          </div>
          
          <div className="self-stretch p-3 flex justify-start items-start gap-3 overflow-hidden cursor-pointer hover:bg-slate-50">
            <div className="size-4 relative overflow-hidden">
              <div className="size-3.5 left-[2.25px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
            <div className="flex-1 justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Keluar</div>
          </div>
          
          <div className="self-stretch p-4 bg-slate-50 rounded-lg flex flex-col justify-start items-start gap-2 overflow-hidden mt-auto">
            <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-4">Akses perusahaan</div>
            <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Kelola lowongan dan kandidat Nusa Digital di satu tempat.</div>
          </div>
        </div>

        {/* ========================================= */}
        {/* === 3. MAIN CONTENT (Daftar Lowongan) ==== */}
        {/* ========================================= */}
        <div className="flex-1 p-10 flex flex-col justify-start items-start gap-6 overflow-hidden">
          
          {/* Header Konten */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
            <div className="self-stretch justify-start text-slate-500 text-xs font-medium font-['Inter'] leading-4">NUSA DIGITAL / LOWONGAN</div>
            <div className="self-stretch flex justify-start items-center gap-6 overflow-hidden">
              <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">Lowongan perusahaan</div>
                <div className="self-stretch justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Kelola publikasi, batas lamaran, dan akses kandidat di satu tempat.</div>
              </div>
              <div className="px-4 py-2.5 bg-blue-600 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/0 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-blue-700">
                <div className="size-4 relative overflow-hidden">
                  <div className="size-2.5 left-[3.33px] top-[3.33px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-white" />
                </div>
                <div className="justify-start text-white text-sm font-semibold font-['Inter'] leading-5">Buat lowongan</div>
              </div>
            </div>
          </div>
          
          {/* Baris Ringkasan Jumlah Lowongan */}
          <div className="self-stretch flex justify-start items-start gap-5 overflow-hidden">
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Total lowongan</div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">4</div>
            </div>
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Terbit</div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">3</div>
            </div>
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Ditutup</div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">1</div>
            </div>
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Diarsipkan</div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">0</div>
            </div>
          </div>
          
          {/* Tab Filter Status */}
          <div className="self-stretch border-b border-slate-200 flex justify-start items-start gap-7 overflow-hidden">
            <div className="py-3 border-b-2 border-blue-600 flex justify-start items-start overflow-hidden cursor-pointer">
              <div className="justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Semua (4)</div>
            </div>
            <div className="py-3 border-b-2 border-white/0 flex justify-start items-start overflow-hidden cursor-pointer hover:border-slate-300">
              <div className="justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Terbit (3)</div>
            </div>
            <div className="py-3 border-b-2 border-white/0 flex justify-start items-start overflow-hidden cursor-pointer hover:border-slate-300">
              <div className="justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Ditutup (1)</div>
            </div>
            <div className="py-3 border-b-2 border-white/0 flex justify-start items-start overflow-hidden cursor-pointer hover:border-slate-300">
              <div className="justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Diarsipkan (0)</div>
            </div>
          </div>
          
          {/* Tabel Daftar Lowongan dengan Area Pencarian */}
          <div className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
            
            {/* Baris Pencarian & Sortir */}
            <div className="self-stretch flex justify-start items-end gap-3 overflow-hidden">
              <div className="flex-1 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2.5 overflow-hidden">
                <div className="size-4 relative overflow-hidden">
                  <div className="size-3.5 left-[2.25px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                </div>
                <div className="flex-1 justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Cari judul lowongan</div>
              </div>
              <div className="p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-4 overflow-hidden cursor-pointer">
                <div className="justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Semua jenis</div>
                <div className="size-4 relative overflow-hidden">
                  <div className="w-2 h-1 left-[4px] top-[6px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                </div>
              </div>
              <div className="p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-4 overflow-hidden cursor-pointer">
                <div className="justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Terbaru</div>
                <div className="size-4 relative overflow-hidden">
                  <div className="w-2 h-1 left-[4px] top-[6px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                </div>
              </div>
              <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
                <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Terapkan</div>
              </div>
            </div>
            
            {/* Tabel Utama */}
            <div className="self-stretch bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start overflow-hidden">
              
              {/* Header Tabel */}
              <div className="self-stretch px-4 py-3.5 bg-slate-50 flex justify-start items-start gap-3.5 overflow-hidden">
                <div className="w-64 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Lowongan</div>
                </div>
                <div className="w-28 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Jenis</div>
                </div>
                <div className="w-24 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Status</div>
                </div>
                <div className="w-16 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Pelamar</div>
                </div>
                <div className="w-32 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Batas lamaran</div>
                </div>
                <div className="w-44 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Tindakan</div>
                </div>
              </div>
              
              {/* Baris Lowongan 1 */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50">
                <div className="w-64 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Magang UI/UX Designer<br/>LWG-101 · Bandung</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Magang</div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-emerald-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-emerald-700 text-xs font-semibold font-['Inter'] leading-4">Terbit</div>
                  </div>
                </div>
                <div className="w-16 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">24</div>
                </div>
                <div className="w-32 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">31 Okt 2026</div>
                </div>
                <div className="w-44 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">Edit · Kandidat<br/>Tutup · Arsipkan</div>
                </div>
              </div>
              
              {/* Baris Lowongan 2 */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50">
                <div className="w-64 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Magang Backend Developer<br/>LWG-102 · Bandung</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Magang</div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-emerald-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-emerald-700 text-xs font-semibold font-['Inter'] leading-4">Terbit</div>
                  </div>
                </div>
                <div className="w-16 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">18</div>
                </div>
                <div className="w-32 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">30 Okt 2026</div>
                </div>
                <div className="w-44 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">Edit · Kandidat<br/>Tutup · Arsipkan</div>
                </div>
              </div>
              
              {/* Baris Lowongan 3 */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50">
                <div className="w-64 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Junior Product Designer<br/>LWG-103 · Bandung</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Penuh waktu</div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-emerald-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-emerald-700 text-xs font-semibold font-['Inter'] leading-4">Terbit</div>
                  </div>
                </div>
                <div className="w-16 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">16</div>
                </div>
                <div className="w-32 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">24 Okt 2026</div>
                </div>
                <div className="w-44 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">Edit · Kandidat<br/>Tutup · Arsipkan</div>
                </div>
              </div>
              
              {/* Baris Lowongan 4 */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50">
                <div className="w-64 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Content Designer<br/>LWG-104 · Bandung</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Penuh waktu</div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-yellow-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-yellow-700 text-xs font-semibold font-['Inter'] leading-4">Ditutup</div>
                  </div>
                </div>
                <div className="w-16 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">10</div>
                </div>
                <div className="w-32 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">5 Okt 2026</div>
                </div>
                <div className="w-44 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">Edit · Kandidat<br/>Arsipkan</div>
                </div>
              </div>
              
            </div>
            
            {/* Paginasi Bawah */}
            <div className="self-stretch flex justify-between items-center overflow-hidden mt-2">
              <div className="justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Menampilkan 1–4 dari 4 lowongan · 4 per halaman ⌄</div>
              <div className="flex justify-start items-center gap-2 overflow-hidden">
                <div className="px-4 py-2.5 bg-slate-200 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/0 flex justify-center items-center gap-2 overflow-hidden cursor-not-allowed opacity-50">
                  <div className="justify-start text-slate-400 text-sm font-semibold font-['Inter'] leading-5">Sebelumnya</div>
                </div>
                <div className="px-3.5 py-2.5 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden cursor-pointer">
                  <div className="justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">1</div>
                </div>
                <div className="px-4 py-2.5 bg-slate-200 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/0 flex justify-center items-center gap-2 overflow-hidden cursor-not-allowed opacity-50">
                  <div className="justify-start text-slate-400 text-sm font-semibold font-['Inter'] leading-5">Berikutnya</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Note Info */}
          <div className="self-stretch p-4 bg-indigo-50 rounded-lg flex justify-start items-start gap-3 overflow-hidden">
            <div className="size-4 relative overflow-hidden shrink-0 mt-0.5">
              <div className="size-3.5 left-[1.50px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-blue-600" />
            </div>
            <div className="flex-1 flex flex-col justify-start items-start gap-1 overflow-hidden">
              <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Tutup atau arsipkan, bukan hapus permanen</div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Menutup lowongan menghentikan lamaran baru. Mengarsipkan menyembunyikannya dari katalog; data pelamar dan riwayat seleksi tetap tersimpan.</div>
            </div>
          </div>
          
          {/* Footer Teks Bawah */}
          <div className="self-stretch flex flex-col gap-2 mt-auto">
            <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Urutan: tanggal dibuat terbaru, lalu kode lowongan. Status dan jumlah pelamar diperbarui saat data dimuat ulang.</div>
            <div className="self-stretch justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">KerjaYuk · Data contoh untuk ilustrasi · 7 Oktober 2026</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}