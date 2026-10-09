import React from 'react';

export default function RingkasanAdmin() {
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
        
        {/* Label Admin */}
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
          
          <div className="self-stretch p-3 bg-indigo-50 rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer">
            <div className="size-4 relative overflow-hidden">
              <div className="size-3.5 left-[2.25px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-blue-600" />
            </div>
            <div className="flex-1 justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Ringkasan</div>
          </div>
          
          <div className="self-stretch p-3 bg-white rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer hover:bg-slate-50">
            <div className="size-4 relative overflow-hidden">
              <div className="w-3 h-3.5 left-[3px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
            <div className="flex-1 justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Tinjauan lamaran</div>
          </div>
          
          <div className="self-stretch p-3 bg-white rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer hover:bg-slate-50">
            <div className="size-4 relative overflow-hidden">
              <div className="size-3.5 left-[1.50px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
            <div className="flex-1 justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Pengguna</div>
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
        {/* === 3. MAIN CONTENT (Dasbor Admin) ======= */}
        {/* ========================================= */}
        <div className="flex-1 p-10 flex flex-col justify-start items-start gap-6 overflow-hidden">
          
          {/* Header Konten */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
            <div className="self-stretch justify-start text-slate-500 text-xs font-medium font-['Inter'] leading-4">ADMIN / SELURUH PLATFORM</div>
            <div className="self-stretch flex justify-start items-center gap-6 overflow-hidden">
              <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">Ringkasan platform</div>
                <div className="self-stretch justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Pantau perusahaan, pengguna, dan aktivitas seleksi lintas perusahaan.</div>
              </div>
              <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
                <div className="size-4 relative overflow-hidden">
                  <div className="size-3 left-[2px] top-[2px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                </div>
                <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Muat ulang</div>
              </div>
            </div>
          </div>
          
          {/* Kartu Metrik Utama */}
          <div className="self-stretch flex justify-start items-start gap-4 overflow-hidden">
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Perusahaan</div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">42</div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Perusahaan terdaftar</div>
            </div>
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Lowongan terbit</div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">128</div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">86 magang · 42 penuh waktu</div>
            </div>
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Pengguna</div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">932</div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">864 pelamar · 64 recruiter · 4 admin</div>
            </div>
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Total lamaran</div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">1.248</div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Semua perusahaan &amp; lowongan</div>
            </div>
          </div>
          
          {/* Widget Distribusi Status */}
          <div className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
              <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Distribusi status lamaran</div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Status terkini setelah koreksi terakhir · 7 Oktober 2026</div>
            </div>
            <div className="self-stretch flex justify-start items-start gap-3 overflow-hidden">
              <div className="flex-1 flex flex-col justify-start items-start gap-3 overflow-hidden">
                <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Terkirim</div>
                </div>
                <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">220</div>
              </div>
              <div className="flex-1 flex flex-col justify-start items-start gap-3 overflow-hidden">
                <div className="px-2.5 py-1 bg-yellow-50 rounded-md flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-yellow-700 text-xs font-semibold font-['Inter'] leading-4">Dibaca</div>
                </div>
                <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">312</div>
              </div>
              <div className="flex-1 flex flex-col justify-start items-start gap-3 overflow-hidden">
                <div className="px-2.5 py-1 bg-violet-100 rounded-md flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-purple-800 text-xs font-semibold font-['Inter'] leading-4">Diproses</div>
                </div>
                <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">428</div>
              </div>
              <div className="flex-1 flex flex-col justify-start items-start gap-3 overflow-hidden">
                <div className="px-2.5 py-1 bg-emerald-50 rounded-md flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-emerald-700 text-xs font-semibold font-['Inter'] leading-4">Diterima</div>
                </div>
                <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">186</div>
              </div>
              <div className="flex-1 flex flex-col justify-start items-start gap-3 overflow-hidden">
                <div className="px-2.5 py-1 bg-rose-50 rounded-md flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-rose-700 text-xs font-semibold font-['Inter'] leading-4">Ditolak</div>
                </div>
                <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">102</div>
              </div>
            </div>
          </div>
          
          {/* Log Aktivitas Sistem */}
          <div className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
              <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Log aktivitas status</div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Catatan perubahan tidak dihapus, termasuk koreksi admin.</div>
            </div>
            
            {/* Filter Log */}
            <div className="self-stretch flex justify-start items-end gap-3 overflow-hidden">
              <div className="flex-1 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2.5 overflow-hidden">
                <div className="size-4 relative overflow-hidden">
                  <div className="size-3.5 left-[2.25px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                </div>
                <div className="flex-1 justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Cari kandidat atau kode lamaran</div>
              </div>
              <div className="p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-4 overflow-hidden cursor-pointer">
                <div className="justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Semua perusahaan</div>
                <div className="size-4 relative overflow-hidden">
                  <div className="w-2 h-1 left-[4px] top-[6px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                </div>
              </div>
              <div className="p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-4 overflow-hidden cursor-pointer">
                <div className="justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">7 Okt 2026</div>
                <div className="size-4 relative overflow-hidden">
                  <div className="w-2 h-1 left-[4px] top-[6px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                </div>
              </div>
              <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
                <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Terapkan</div>
              </div>
            </div>
            
            {/* Tabel Log */}
            <div className="self-stretch bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start overflow-hidden">
              
              {/* Header Tabel */}
              <div className="self-stretch px-4 py-3.5 bg-slate-50 flex justify-start items-start gap-3.5 overflow-hidden">
                <div className="w-24 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Waktu</div>
                </div>
                <div className="w-60 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Lamaran &amp; perusahaan</div>
                </div>
                <div className="w-44 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Perubahan</div>
                </div>
                <div className="w-36 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Pelaku</div>
                </div>
                <div className="w-64 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Catatan</div>
                </div>
              </div>
              
              {/* Baris Log 1 */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50">
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">7 Okt<br/>10.05</div>
                </div>
                <div className="w-60 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">APL-101 · Nadia Putri<br/>Nusa Digital</div>
                </div>
                <div className="w-44 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Terkirim → Dibaca</div>
                </div>
                <div className="w-36 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Raka Pratama<br/>Recruiter</div>
                </div>
                <div className="w-64 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Detail lamaran dibuka.</div>
                </div>
              </div>
              
              {/* Baris Log 2 */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50">
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">7 Okt<br/>09.45</div>
                </div>
                <div className="w-60 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">APL-102 · Dimas Saputra<br/>Nusa Digital</div>
                </div>
                <div className="w-44 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Dibaca → Diproses</div>
                </div>
                <div className="w-36 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Raka Pratama<br/>Recruiter</div>
                </div>
                <div className="w-64 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Lanjut evaluasi portofolio.</div>
                </div>
              </div>
              
              {/* Baris Log 3 */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50">
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">7 Okt<br/>09.30</div>
                </div>
                <div className="w-60 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">APL-203 · Nadia Putri<br/>Orbit Analitika</div>
                </div>
                <div className="w-44 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Ditolak → Diproses</div>
                </div>
                <div className="w-36 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Sari Wulandari<br/>Admin</div>
                </div>
                <div className="w-64 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Koreksi salah klik oleh recruiter.</div>
                </div>
              </div>
              
              {/* Baris Log 4 */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50">
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">7 Okt<br/>09.15</div>
                </div>
                <div className="w-60 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">APL-202 · Nadia Putri<br/>Aksara Teknologi</div>
                </div>
                <div className="w-44 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Baru → Terkirim</div>
                </div>
                <div className="w-36 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Nadia Putri<br/>Pelamar</div>
                </div>
                <div className="w-64 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Lamaran baru diterima.</div>
                </div>
              </div>
              
              {/* Baris Log 5 */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50">
                <div className="w-24 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">6 Okt<br/>16.20</div>
                </div>
                <div className="w-60 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">APL-105 · Intan Lestari<br/>Nusa Digital</div>
                </div>
                <div className="w-44 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Diproses → Diterima</div>
                </div>
                <div className="w-36 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Raka Pratama<br/>Recruiter</div>
                </div>
                <div className="w-64 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Kandidat memenuhi kualifikasi.</div>
                </div>
              </div>
            </div>
            
            {/* Paginasi Bawah */}
            <div className="self-stretch flex justify-between items-center overflow-hidden mt-2">
              <div className="justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Menampilkan 1–5 dari 3.416 aktivitas · 5 per halaman ⌄</div>
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
                  <span className="mx-1">684</span>
                </div>
                <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
                  <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Berikutnya</div>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Teks Footer */}
          <div className="self-stretch flex flex-col gap-2 mt-auto">
            <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Log diurutkan dari aktivitas terbaru, lalu kode aktivitas. Catatan koreksi juga muncul di riwayat pelamar.</div>
            <div className="self-stretch justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">KerjaYuk · Data contoh untuk ilustrasi · 7 Oktober 2026</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}