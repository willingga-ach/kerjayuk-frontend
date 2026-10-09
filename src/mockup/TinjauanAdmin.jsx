import React from 'react';

export default function TinjauanAdmin() {
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
          
          <div className="self-stretch p-3 bg-indigo-50 rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer">
            <div className="size-4 relative overflow-hidden">
              <div className="w-3 h-3.5 left-[3px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-blue-600" />
            </div>
            <div className="flex-1 justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Tinjauan lamaran</div>
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
        {/* === 3. MAIN CONTENT (Tinjauan Lamaran) === */}
        {/* ========================================= */}
        <div className="flex-1 p-10 flex flex-col justify-start items-start gap-6 overflow-hidden">
          
          {/* Header Konten */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
            <div className="self-stretch justify-start text-slate-500 text-xs font-medium font-['Inter'] leading-4">ADMIN / TINJAUAN LINTAS PERUSAHAAN</div>
            <div className="self-stretch flex justify-start items-center gap-6 overflow-hidden">
              <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">Tinjauan lamaran</div>
                <div className="self-stretch justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Akses lowongan dan lamaran seluruh perusahaan. Koreksi selalu disertai alasan.</div>
              </div>
            </div>
          </div>
          
          {/* Tabel Pencarian Lamaran Seluruh Perusahaan */}
          <div className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
              <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Lamaran seluruh perusahaan</div>
            </div>
            
            {/* Alat Filter & Pencarian */}
            <div className="self-stretch flex justify-start items-end gap-3 overflow-hidden">
              <div className="flex-1 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2.5 overflow-hidden">
                <div className="size-4 relative overflow-hidden">
                  <div className="size-3.5 left-[2.25px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                </div>
                <div className="flex-1 justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Cari kandidat, lowongan, atau kode lamaran</div>
              </div>
              <div className="p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-4 overflow-hidden cursor-pointer hover:bg-slate-50">
                <div className="justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Semua perusahaan</div>
                <div className="size-4 relative overflow-hidden">
                  <div className="w-2 h-1 left-[4px] top-[6px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                </div>
              </div>
              <div className="p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-4 overflow-hidden cursor-pointer hover:bg-slate-50">
                <div className="justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Semua status</div>
                <div className="size-4 relative overflow-hidden">
                  <div className="w-2 h-1 left-[4px] top-[6px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                </div>
              </div>
              <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
                <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Terapkan</div>
              </div>
            </div>
            
            {/* Tabel Data */}
            <div className="self-stretch bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start overflow-hidden">
              
              {/* Header Tabel */}
              <div className="self-stretch px-4 py-3.5 bg-slate-50 flex justify-start items-start gap-3.5 overflow-hidden">
                <div className="w-44 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Kandidat</div>
                </div>
                <div className="w-96 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Perusahaan &amp; lowongan</div>
                </div>
                <div className="w-28 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Status</div>
                </div>
                <div className="w-28 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Dikirim</div>
                </div>
                <div className="w-28 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Tindakan</div>
                </div>
              </div>
              
              {/* Baris 1 */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50 cursor-pointer">
                <div className="w-44 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Nadia Putri · APL-101</div>
                </div>
                <div className="w-96 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Nusa Digital<br/>Magang UI/UX Designer</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-yellow-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-yellow-700 text-xs font-semibold font-['Inter'] leading-4">Dibaca</div>
                  </div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">6 Okt 2026</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 hover:underline">Tinjau</div>
                </div>
              </div>
              
              {/* Baris 2 */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50 cursor-pointer">
                <div className="w-44 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Nadia Putri · APL-202</div>
                </div>
                <div className="w-96 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Aksara Teknologi<br/>Frontend Developer</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Terkirim</div>
                  </div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">7 Okt 2026</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 hover:underline">Tinjau</div>
                </div>
              </div>
              
              {/* Baris 3 (Dipilih) */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden bg-blue-50/50 hover:bg-blue-50 cursor-pointer">
                <div className="w-44 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Nadia Putri · APL-203</div>
                </div>
                <div className="w-96 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Orbit Analitika<br/>Magang Data Analyst</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-violet-100 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-purple-800 text-xs font-semibold font-['Inter'] leading-4">Diproses</div>
                  </div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">2 Okt 2026</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-600 text-xs font-bold font-['Inter'] leading-5">Tinjau ✓</div>
                </div>
              </div>
              
              {/* Baris 4 */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50 cursor-pointer">
                <div className="w-44 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Nadia Putri · APL-204</div>
                </div>
                <div className="w-96 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Langkah Kreatif<br/>Magang Content Writer</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-rose-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-rose-700 text-xs font-semibold font-['Inter'] leading-4">Ditolak</div>
                  </div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">1 Okt 2026</div>
                </div>
                <div className="w-28 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 hover:underline">Tinjau</div>
                </div>
              </div>
            </div>
            
            {/* Paginasi Data */}
            <div className="self-stretch flex justify-between items-center overflow-hidden">
              <div className="justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Menampilkan 1–4 dari 1.248 lamaran · 4 per halaman ⌄</div>
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
                  <span className="mx-1">312</span>
                </div>
                <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
                  <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Berikutnya</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Detail Tinjauan Lamaran (Panel Bawah Bersebelahan) */}
          <div className="self-stretch flex justify-start items-start gap-6 overflow-hidden">
            
            {/* Kolom Kiri: Riwayat/Timeline Lamaran */}
            <div className="flex-1 p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
              <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">APL-203 · Nadia Putri</div>
                <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Magang Data Analyst · Orbit Analitika</div>
              </div>
              <div className="self-stretch flex justify-between items-center overflow-hidden">
                <div className="px-2.5 py-1 bg-violet-100 rounded-md flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-purple-800 text-xs font-semibold font-['Inter'] leading-4">Diproses</div>
                </div>
                <div className="justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">Lihat portofolio ↗</div>
              </div>
              
              {/* Alert Koreksi Admin */}
              <div className="self-stretch p-4 bg-emerald-50 rounded-lg flex justify-start items-start gap-3 overflow-hidden">
                <div className="size-4 relative overflow-hidden mt-0.5 shrink-0">
                  <div className="size-3.5 left-[1.50px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-emerald-700" />
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-1 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Koreksi admin tersimpan</div>
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">7 Oktober 2026, 09.30 · Sari Wulandari mengembalikan Ditolak menjadi Diproses. Pelamar melihat catatan yang sama pada riwayatnya.</div>
                </div>
              </div>
              
              <div className="self-stretch justify-start text-blue-950 text-base font-semibold font-['Inter'] leading-6 mt-2">Riwayat lengkap</div>
              
              {/* Timeline Container */}
              <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                
                {/* Node 1: Terkirim */}
                <div className="self-stretch flex justify-start items-start gap-3.5 overflow-hidden">
                  <div className="w-4 flex flex-col justify-start items-center overflow-hidden">
                    <div className="size-3 bg-slate-200 rounded-[100px] mt-1" />
                    <div className="w-0.5 h-20 bg-slate-200" />
                  </div>
                  <div className="flex-1 pb-5 flex flex-col justify-start items-start gap-1 overflow-hidden">
                    <div className="self-stretch flex justify-between items-start overflow-hidden">
                      <div className="justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Terkirim</div>
                      <div className="justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">2 Okt · 11.00</div>
                    </div>
                    <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Nadia Putri mengirim lamaran.</div>
                  </div>
                </div>
                
                {/* Node 2: Dibaca */}
                <div className="self-stretch flex justify-start items-start gap-3.5 overflow-hidden">
                  <div className="w-4 flex flex-col justify-start items-center overflow-hidden">
                    <div className="size-3 bg-slate-200 rounded-[100px] mt-1" />
                    <div className="w-0.5 h-20 bg-slate-200" />
                  </div>
                  <div className="flex-1 pb-5 flex flex-col justify-start items-start gap-1 overflow-hidden">
                    <div className="self-stretch flex justify-between items-start overflow-hidden">
                      <div className="justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Dibaca</div>
                      <div className="justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">3 Okt · 08.40</div>
                    </div>
                    <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Dewi Anggraini membuka detail lamaran.</div>
                  </div>
                </div>
                
                {/* Node 3: Diproses */}
                <div className="self-stretch flex justify-start items-start gap-3.5 overflow-hidden">
                  <div className="w-4 flex flex-col justify-start items-center overflow-hidden">
                    <div className="size-3 bg-slate-200 rounded-[100px] mt-1" />
                    <div className="w-0.5 h-20 bg-slate-200" />
                  </div>
                  <div className="flex-1 pb-5 flex flex-col justify-start items-start gap-1 overflow-hidden">
                    <div className="self-stretch flex justify-between items-start overflow-hidden">
                      <div className="justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Diproses</div>
                      <div className="justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">4 Okt · 13.10</div>
                    </div>
                    <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Dewi Anggraini melanjutkan evaluasi kandidat.</div>
                  </div>
                </div>
                
                {/* Node 4: Ditolak */}
                <div className="self-stretch flex justify-start items-start gap-3.5 overflow-hidden">
                  <div className="w-4 flex flex-col justify-start items-center overflow-hidden">
                    <div className="size-3 bg-slate-200 rounded-[100px] mt-1" />
                    <div className="w-0.5 h-20 bg-slate-200" />
                  </div>
                  <div className="flex-1 pb-5 flex flex-col justify-start items-start gap-1 overflow-hidden">
                    <div className="self-stretch flex justify-between items-start overflow-hidden">
                      <div className="justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Ditolak</div>
                      <div className="justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">6 Okt · 15.00</div>
                    </div>
                    <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Dewi Anggraini: “Hasil evaluasi belum sesuai kebutuhan posisi.”</div>
                  </div>
                </div>
                
                {/* Node 5: Diproses (Koreksi Admin) */}
                <div className="self-stretch flex justify-start items-start gap-3.5 overflow-hidden">
                  <div className="w-4 flex flex-col justify-start items-center overflow-hidden">
                    <div className="size-3 bg-blue-600 rounded-[100px] mt-1" />
                  </div>
                  <div className="flex-1 pb-5 flex flex-col justify-start items-start gap-1 overflow-hidden">
                    <div className="self-stretch flex justify-between items-start overflow-hidden">
                      <div className="justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Diproses · Koreksi admin</div>
                      <div className="justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">7 Okt · 09.30</div>
                    </div>
                    <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Sari Wulandari: “Koreksi salah klik oleh recruiter”. Peristiwa penolakan sebelumnya tetap tercatat.</div>
                  </div>
                </div>
                
              </div>
            </div>
            
            {/* Kolom Kanan: Alat Admin & Info Lowongan */}
            <div className="w-80 flex flex-col justify-start items-start gap-6 overflow-hidden">
              
              {/* Kartu 1: Alat Koreksi */}
              <div className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Koreksi khusus admin</div>
                </div>
                <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Koreksi hanya tersedia untuk status Ditolak dan hanya mengembalikan lamaran ke Diproses.</div>
                
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Status saat ini</div>
                  <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
                    <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Diproses · sudah dikoreksi</div>
                  </div>
                </div>
                
                <div className="px-4 py-2.5 bg-slate-200 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/0 flex justify-center items-center gap-2 overflow-hidden cursor-not-allowed opacity-70">
                  <div className="justify-start text-slate-400 text-sm font-semibold font-['Inter'] leading-5">Koreksi tidak tersedia</div>
                </div>
                <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Catatan koreksi wajib diisi sebelum penyimpanan. Recruiter tidak memiliki akses ke tindakan ini.</div>
              </div>
              
              {/* Kartu 2: Info Lowongan Terkait */}
              <div className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Lowongan terkait</div>
                </div>
                <div className="px-2.5 py-1 bg-emerald-50 rounded-md flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-emerald-700 text-xs font-semibold font-['Inter'] leading-4">Terbit</div>
                </div>
                <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Magang Data Analyst</div>
                <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Orbit Analitika · LWG-203<br/>Jakarta · Hibrida<br/>Batas: 25 Oktober 2026<br/>Rp2,5–3,5 juta / bulan</div>
                <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
                  <div className="size-4 relative overflow-hidden">
                    <div className="size-3 left-[2px] top-[2px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                  </div>
                  <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Lihat detail lowongan</div>
                </div>
                
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden mt-2">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Akses lowongan perusahaan lain</div>
                  <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
                    <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Semua perusahaan</div>
                    <div className="size-4 relative overflow-hidden">
                      <div className="w-2 h-1 left-[4px] top-[6px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                    </div>
                  </div>
                </div>
                
                <div className="self-stretch justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">Nusa Digital · 3 terbit →</div>
                <div className="self-stretch justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">Aksara Teknologi · lihat lowongan →</div>
              </div>
            </div>
            
          </div>
          
          {/* Teks Footer */}
          <div className="self-stretch flex flex-col gap-2 mt-auto">
            <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Catatan audit AKT-3091 · Koreksi tidak menghapus evaluasi lama dan tidak mengganti isi portofolio atau catatan pengantar.</div>
            <div className="self-stretch justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">KerjaYuk · Data contoh untuk ilustrasi · 7 Oktober 2026</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}