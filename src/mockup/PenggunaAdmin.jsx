import React from 'react';

export default function PenggunaAdmin() {
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
        
        {/* Label Peran Admin */}
        <div className="flex justify-start items-center gap-3 overflow-hidden">
          <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
            <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Admin</div>
          </div>
          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Seluruh platform</div>
        </div>
        
        {/* Profil Mini */}
        <div className="flex justify-start items-center gap-4 overflow-hidden cursor-pointer hover:opacity-80">
          <div className="size-4 relative overflow-hidden">
            <div className="size-3.5 left-[2.25px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
          </div>
          <div className="size-9 bg-indigo-50 rounded-[100px] flex justify-center items-center overflow-hidden">
            <div className="justify-start text-blue-600 text-sm font-bold font-['Inter'] leading-5">SW</div>
          </div>
          <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Sari Wulandari</div>
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
          <div className="self-stretch justify-start text-slate-400 text-xs font-bold font-['Inter'] leading-4">RUANG ADMIN</div>
          
          <div className="self-stretch p-3 bg-white rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer hover:bg-slate-50">
            <div className="size-4 relative overflow-hidden">
              <div className="size-3.5 left-[2.25px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
            <div className="flex-1 justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Ringkasan</div>
          </div>
          
          <div className="self-stretch p-3 bg-white rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer hover:bg-slate-50">
            <div className="size-4 relative overflow-hidden">
              <div className="w-3 h-3.5 left-[3px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
            <div className="flex-1 justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Tinjauan lamaran</div>
          </div>
          
          <div className="self-stretch p-3 bg-indigo-50 rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer">
            <div className="size-4 relative overflow-hidden">
              <div className="size-3.5 left-[1.50px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-blue-600" />
            </div>
            <div className="flex-1 justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Pengguna</div>
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
            <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-4">Akses administrator</div>
            <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Setiap koreksi dicatat untuk menjaga riwayat tetap transparan.</div>
          </div>
        </div>

        {/* ========================================= */}
        {/* === 3. MAIN CONTENT (Manajemen Pengguna) == */}
        {/* ========================================= */}
        <div className="flex-1 p-10 flex flex-col justify-start items-start gap-6 overflow-hidden">
          
          {/* Header Konten */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
            <div className="self-stretch justify-start text-slate-500 text-xs font-medium font-['Inter'] leading-4">ADMIN / PENGGUNA</div>
            <div className="self-stretch flex justify-start items-center gap-6 overflow-hidden">
              <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">Pengguna platform</div>
                <div className="self-stretch justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Kelola akses akun pelamar, recruiter, dan admin tanpa menghapus riwayat mereka.</div>
              </div>
            </div>
          </div>
          
          {/* Kartu Statistik Cepat */}
          <div className="self-stretch flex justify-start items-start gap-5 overflow-hidden">
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Total pengguna</div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">932</div>
            </div>
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Pelamar</div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">864</div>
            </div>
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Recruiter</div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">64</div>
            </div>
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Admin</div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">4</div>
            </div>
          </div>
          
          {/* Tab Filter Peran */}
          <div className="self-stretch border-b border-slate-200 flex justify-start items-start gap-7 overflow-hidden">
            <div className="py-3 border-b-2 border-blue-600 flex justify-start items-start overflow-hidden cursor-pointer">
              <div className="justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Semua peran</div>
            </div>
            <div className="py-3 border-b-2 border-transparent flex justify-start items-start overflow-hidden cursor-pointer hover:border-slate-300">
              <div className="justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Pelamar</div>
            </div>
            <div className="py-3 border-b-2 border-transparent flex justify-start items-start overflow-hidden cursor-pointer hover:border-slate-300">
              <div className="justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Recruiter</div>
            </div>
            <div className="py-3 border-b-2 border-transparent flex justify-start items-start overflow-hidden cursor-pointer hover:border-slate-300">
              <div className="justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Admin</div>
            </div>
          </div>
          
          {/* Tabel Utama Pengguna */}
          <div className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
            
            {/* Filter & Search Bar */}
            <div className="self-stretch flex justify-start items-end gap-3 overflow-hidden">
              <div className="flex-1 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2.5 overflow-hidden">
                <div className="size-4 relative overflow-hidden">
                  <div className="size-3.5 left-[2.25px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                </div>
                <div className="flex-1 justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Cari nama atau alamat email</div>
              </div>
              <div className="p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-4 overflow-hidden cursor-pointer hover:bg-slate-50">
                <div className="justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Semua status</div>
                <div className="size-4 relative overflow-hidden">
                  <div className="w-2 h-1 left-[4px] top-[6px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                </div>
              </div>
              <div className="p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-4 overflow-hidden cursor-pointer hover:bg-slate-50">
                <div className="justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Terbaru</div>
                <div className="size-4 relative overflow-hidden">
                  <div className="w-2 h-1 left-[4px] top-[6px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                </div>
              </div>
              <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
                <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Terapkan</div>
              </div>
            </div>
            
            {/* Table Area */}
            <div className="self-stretch bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start overflow-hidden">
              
              {/* Table Header */}
              <div className="self-stretch px-4 py-3.5 bg-slate-50 flex justify-start items-start gap-3.5 overflow-hidden">
                <div className="w-64 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Pengguna</div>
                </div>
                <div className="w-24 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Peran</div>
                </div>
                <div className="w-56 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Kampus / perusahaan</div>
                </div>
                <div className="w-24 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Status</div>
                </div>
                <div className="w-28 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Bergabung</div>
                </div>
                <div className="w-28 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Tindakan</div>
                </div>
              </div>
              
              {/* Row 1: Nadia Putri */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50">
                <div className="w-64 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Nadia Putri<br/>nadia.putri@email.com</div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Pelamar</div>
                </div>
                <div className="w-56 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Universitas Padjadjaran</div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-emerald-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-emerald-700 text-xs font-semibold font-['Inter'] leading-4">Aktif</div>
                  </div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">1 Okt 2026</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">Nonaktifkan</div>
                </div>
              </div>
              
              {/* Row 2: Raka Pratama */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50">
                <div className="w-64 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Raka Pratama<br/>raka@nusadigital.id</div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Recruiter</div>
                </div>
                <div className="w-56 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Nusa Digital</div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-emerald-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-emerald-700 text-xs font-semibold font-['Inter'] leading-4">Aktif</div>
                  </div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">20 Sep 2026</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">Nonaktifkan</div>
                </div>
              </div>
              
              {/* Row 3: Dewi Anggraini */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50">
                <div className="w-64 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Dewi Anggraini<br/>dewi@orbitanalitika.id</div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Recruiter</div>
                </div>
                <div className="w-56 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Orbit Analitika</div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-emerald-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-emerald-700 text-xs font-semibold font-['Inter'] leading-4">Aktif</div>
                  </div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">18 Sep 2026</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">Nonaktifkan</div>
                </div>
              </div>
              
              {/* Row 4: Dimas Saputra */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50">
                <div className="w-64 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Dimas Saputra<br/>dimas.saputra@email.com</div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Pelamar</div>
                </div>
                <div className="w-56 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Institut Teknologi Bandung</div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-emerald-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-emerald-700 text-xs font-semibold font-['Inter'] leading-4">Aktif</div>
                  </div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">15 Sep 2026</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">Nonaktifkan</div>
                </div>
              </div>
              
              {/* Row 5: Arif Maulana */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50">
                <div className="w-64 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Arif Maulana<br/>arif.maulana@email.com</div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Pelamar</div>
                </div>
                <div className="w-56 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Universitas Indonesia</div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-rose-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-rose-700 text-xs font-semibold font-['Inter'] leading-4">Nonaktif</div>
                  </div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">12 Sep 2026</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">Lihat detail</div>
                </div>
              </div>
              
              {/* Row 6: Sari Wulandari */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50">
                <div className="w-64 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Sari Wulandari<br/>sari@kerjayuk.id</div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Admin</div>
                </div>
                <div className="w-56 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">KerjaYuk</div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-emerald-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-emerald-700 text-xs font-semibold font-['Inter'] leading-4">Aktif</div>
                  </div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">1 Sep 2026</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5 cursor-not-allowed">Akun Anda</div>
                </div>
              </div>
            </div>
            
            {/* Paginasi Data */}
            <div className="self-stretch flex justify-between items-center overflow-hidden mt-2">
              <div className="justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Menampilkan 1–6 dari 932 pengguna · 6 per halaman ⌄</div>
              <div className="flex justify-start items-center gap-2 overflow-hidden">
                <div className="px-4 py-2.5 bg-slate-200 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/0 flex justify-center items-center gap-2 overflow-hidden cursor-not-allowed opacity-50">
                  <div className="justify-start text-slate-400 text-sm font-semibold font-['Inter'] leading-5">Sebelumnya</div>
                </div>
                <div className="px-3.5 py-2.5 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden cursor-pointer">
                  <div className="justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">1</div>
                </div>
                <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5 cursor-pointer hover:text-blue-600">
                  <span className="mx-1">2</span>
                  <span className="mx-1">3</span>
                  <span className="mx-1">…</span>
                  <span className="mx-1">156</span>
                </div>
                <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
                  <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Berikutnya</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Note Info Widget */}
          <div className="self-stretch p-4 bg-yellow-50 rounded-lg flex justify-start items-start gap-3 overflow-hidden">
            <div className="size-4 relative overflow-hidden mt-0.5 shrink-0">
              <div className="w-4 h-3.5 left-[1.49px] top-[2.24px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-yellow-700" />
            </div>
            <div className="flex-1 flex flex-col justify-start items-start gap-1 overflow-hidden">
              <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Nonaktifkan akses, pertahankan data</div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Pengguna nonaktif tidak dapat masuk. Profil, lamaran, dan jejak aktivitas tetap tersimpan. Akun Anda sendiri tidak dapat dinonaktifkan dari daftar ini.</div>
            </div>
          </div>
          
          {/* Teks Footer */}
          <div className="self-stretch flex flex-col gap-2 mt-auto">
            <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Tidak ada tindakan hapus permanen. Urutan pengguna berdasarkan tanggal bergabung terbaru, lalu kode akun.</div>
            <div className="self-stretch justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">KerjaYuk · Data contoh untuk ilustrasi · 7 Oktober 2026</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}