import React from 'react';

export default function KandidatRecruiter() {
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
          
          <div className="self-stretch p-3 bg-white rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer hover:bg-slate-50">
            <div className="size-4 relative overflow-hidden">
              <div className="size-3.5 left-[1.50px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
            <div className="flex-1 justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Lowongan</div>
          </div>
          
          <div className="self-stretch p-3 bg-indigo-50 rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer">
            <div className="size-4 relative overflow-hidden">
              <div className="size-3.5 left-[1.50px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-blue-600" />
            </div>
            <div className="flex-1 justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Kandidat</div>
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
        {/* === 3. MAIN CONTENT (Daftar Kandidat) ==== */}
        {/* ========================================= */}
        <div className="flex-1 p-10 flex flex-col justify-start items-start gap-6 overflow-hidden">
          
          {/* Header Konten */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
            <div className="self-stretch justify-start text-slate-500 text-xs font-medium font-['Inter'] leading-4">NUSA DIGITAL / KANDIDAT</div>
            <div className="self-stretch flex justify-start items-center gap-6 overflow-hidden">
              <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">Kandidat lowongan</div>
                <div className="self-stretch justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Tinjau profil dan portofolio, lalu lanjutkan kandidat secara bertahap.</div>
              </div>
              <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
                <div className="size-4 relative overflow-hidden">
                  <div className="size-3 left-[2px] top-[2px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                </div>
                <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Muat ulang</div>
              </div>
            </div>
          </div>
          
          {/* Dropdown Pemilih Lowongan */}
          <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
            <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Lowongan terpilih</div>
            <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
              <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Magang UI/UX Designer · LWG-101 · 24 pelamar</div>
              <div className="size-4 relative overflow-hidden">
                <div className="w-2 h-1 left-[4px] top-[6px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
              </div>
            </div>
          </div>
          
          {/* Widget Statistik Status Pelamar */}
          <div className="self-stretch flex justify-start items-start gap-3 overflow-hidden">
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Terkirim</div>
              </div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">4</div>
            </div>
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="px-2.5 py-1 bg-yellow-50 rounded-md flex justify-start items-start overflow-hidden">
                <div className="justify-start text-yellow-700 text-xs font-semibold font-['Inter'] leading-4">Dibaca</div>
              </div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">6</div>
            </div>
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="px-2.5 py-1 bg-violet-100 rounded-md flex justify-start items-start overflow-hidden">
                <div className="justify-start text-purple-800 text-xs font-semibold font-['Inter'] leading-4">Diproses</div>
              </div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">8</div>
            </div>
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="px-2.5 py-1 bg-emerald-50 rounded-md flex justify-start items-start overflow-hidden">
                <div className="justify-start text-emerald-700 text-xs font-semibold font-['Inter'] leading-4">Diterima</div>
              </div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">4</div>
            </div>
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="px-2.5 py-1 bg-rose-50 rounded-md flex justify-start items-start overflow-hidden">
                <div className="justify-start text-rose-700 text-xs font-semibold font-['Inter'] leading-4">Ditolak</div>
              </div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">2</div>
            </div>
          </div>
          
          {/* Tabel Daftar Kandidat */}
          <div className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
            
            {/* Filter dan Pencarian Tabel */}
            <div className="self-stretch flex justify-start items-end gap-3 overflow-hidden">
              <div className="flex-1 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2.5 overflow-hidden">
                <div className="size-4 relative overflow-hidden">
                  <div className="size-3.5 left-[2.25px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                </div>
                <div className="flex-1 justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Cari nama atau kampus kandidat</div>
              </div>
              <div className="p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-4 overflow-hidden cursor-pointer">
                <div className="justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Semua status</div>
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
            
            <div className="self-stretch bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start overflow-hidden">
              
              {/* Header Tabel */}
              <div className="self-stretch px-4 py-3.5 bg-slate-50 flex justify-start items-start gap-3.5 overflow-hidden">
                <div className="w-48 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Kandidat</div>
                </div>
                <div className="w-52 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Kampus</div>
                </div>
                <div className="w-28 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Dikirim</div>
                </div>
                <div className="w-24 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Status</div>
                </div>
                <div className="w-24 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Portofolio</div>
                </div>
                <div className="w-28 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Tindakan</div>
                </div>
              </div>
              
              {/* Baris Tabel 1 */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50">
                <div className="w-48 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Nadia Putri<br/>APL-101</div>
                </div>
                <div className="w-52 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Universitas Padjadjaran</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">6 Okt · 14.20</div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-yellow-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-yellow-700 text-xs font-semibold font-['Inter'] leading-4">Dibaca</div>
                  </div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">GitHub ↗</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">Lihat detail</div>
                </div>
              </div>
              
              {/* Baris Tabel 2 */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50">
                <div className="w-48 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Dimas Saputra<br/>APL-102</div>
                </div>
                <div className="w-52 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Institut Teknologi Bandung</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">6 Okt · 11.15</div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-violet-100 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-purple-800 text-xs font-semibold font-['Inter'] leading-4">Diproses</div>
                  </div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">LinkedIn ↗</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">Lihat detail</div>
                </div>
              </div>
              
              {/* Baris Tabel 3 */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50">
                <div className="w-48 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Alya Rahma<br/>APL-103</div>
                </div>
                <div className="w-52 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Universitas Telkom</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">6 Okt · 10.10</div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Terkirim</div>
                  </div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">Drive ↗</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">Lihat detail</div>
                </div>
              </div>
              
              {/* Baris Tabel 4 */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50">
                <div className="w-48 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Bima Prakoso<br/>APL-104</div>
                </div>
                <div className="w-52 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Universitas Pendidikan Indonesia</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">5 Okt · 15.40</div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Terkirim</div>
                  </div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">GitHub ↗</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">Lihat detail</div>
                </div>
              </div>
              
              {/* Baris Tabel 5 */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50">
                <div className="w-48 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Intan Lestari<br/>APL-105</div>
                </div>
                <div className="w-52 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Universitas Padjadjaran</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">4 Okt · 09.20</div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-emerald-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-emerald-700 text-xs font-semibold font-['Inter'] leading-4">Diterima</div>
                  </div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">Drive ↗</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">Lihat detail</div>
                </div>
              </div>
              
              {/* Baris Tabel 6 */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50">
                <div className="w-48 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Fajar Nugraha<br/>APL-106</div>
                </div>
                <div className="w-52 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Universitas Telkom</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">3 Okt · 13.00</div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-rose-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-rose-700 text-xs font-semibold font-['Inter'] leading-4">Ditolak</div>
                  </div>
                </div>
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">LinkedIn ↗</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">Lihat detail</div>
                </div>
              </div>
            </div>
            
            {/* Paginasi Bawah */}
            <div className="self-stretch flex justify-between items-center overflow-hidden mt-2">
              <div className="justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Menampilkan 1–6 dari 24 kandidat · 6 per halaman ⌄</div>
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
                  <span className="mx-1">4</span>
                </div>
                <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
                  <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Berikutnya</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Note Info Widget */}
          <div className="self-stretch p-4 bg-indigo-50 rounded-lg flex justify-start items-start gap-3 overflow-hidden">
            <div className="size-4 relative overflow-hidden mt-0.5 shrink-0">
              <div className="size-3.5 left-[1.50px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-blue-600" />
            </div>
            <div className="flex-1 flex flex-col justify-start items-start gap-1 overflow-hidden">
              <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Membuka detail menandai lamaran sebagai Dibaca</div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Nadia telah dibaca pada 7 Oktober, 10.05. Lamaran Terkirim lainnya akan berubah menjadi Dibaca saat detailnya dibuka. Portofolio dibuka di tab baru.</div>
            </div>
          </div>
          
          {/* Teks Footer Bawah */}
          <div className="self-stretch flex flex-col gap-2 mt-auto">
            <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Urutan: waktu pengiriman terbaru, lalu kode lamaran. Pilihan halaman dibatasi sesuai jumlah hasil.</div>
            <div className="self-stretch justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">KerjaYuk · Data contoh untuk ilustrasi · 7 Oktober 2026</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}