import React from 'react';

export default function LamaranSaya() {
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
        
        {/* Judul Halaman Aktif */}
        <div className="flex justify-start items-center gap-3 overflow-hidden">
          <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
            <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Pelamar</div>
          </div>
          <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Ruang kariermu</div>
        </div>
        
        {/* Profil Mini */}
        <div className="flex justify-start items-center gap-4 overflow-hidden cursor-pointer">
          <div className="size-4 relative overflow-hidden">
            <div className="size-3.5 left-[2.25px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
          </div>
          <div className="size-9 bg-indigo-50 rounded-[100px] flex justify-center items-center overflow-hidden">
            <div className="justify-start text-blue-600 text-sm font-bold font-['Inter'] leading-5">NP</div>
          </div>
          <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Nadia Putri</div>
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
          <div className="self-stretch justify-start text-slate-400 text-xs font-bold font-['Inter'] leading-4">RUANG PELAMAR</div>
          
          <div className="self-stretch p-3 bg-white rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer hover:bg-slate-50">
            <div className="size-4 relative overflow-hidden">
              <div className="size-3.5 left-[2.25px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
            <div className="flex-1 justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Cari lowongan</div>
          </div>
          
          <div className="self-stretch p-3 bg-indigo-50 rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer">
            <div className="size-4 relative overflow-hidden">
              <div className="size-3.5 left-[1.50px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-blue-600" />
            </div>
            <div className="flex-1 justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Lamaran Saya</div>
          </div>
          
          <div className="self-stretch p-3 bg-white rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer hover:bg-slate-50">
            <div className="size-4 relative overflow-hidden">
              <div className="w-3 h-3.5 left-[3px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
            <div className="flex-1 justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Profil Saya</div>
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
            <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-4">Langkah kecil, peluang besar</div>
            <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Lengkapi profil dan temukan pengalaman kerja pertamamu.</div>
          </div>
        </div>

        {/* ========================================= */}
        {/* === 3. MAIN CONTENT (Area Kerja Utama) === */}
        {/* ========================================= */}
        <div className="flex-1 p-10 flex flex-col justify-start items-start gap-6 overflow-hidden">
          
          {/* Header Konten */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
            <div className="self-stretch justify-start text-slate-500 text-xs font-medium font-['Inter'] leading-4">RUANG PELAMAR</div>
            <div className="self-stretch flex justify-start items-center gap-6 overflow-hidden">
              <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">Lamaran Saya</div>
                <div className="self-stretch justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Setiap langkah tercatat. Pantau perkembangan 4 lamaranmu di sini.</div>
              </div>
              <div className="px-4 py-2.5 bg-blue-600 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/0 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-blue-700">
                <div className="size-4 relative overflow-hidden">
                  <div className="size-3 left-[2px] top-[2px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-white" />
                </div>
                <div className="justify-start text-white text-sm font-semibold font-['Inter'] leading-5">Cari lowongan</div>
              </div>
            </div>
          </div>
          
          {/* Widget Statistik */}
          <div className="self-stretch flex justify-start items-start gap-3 overflow-hidden">
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Terkirim</div>
              </div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">1</div>
            </div>
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="px-2.5 py-1 bg-yellow-50 rounded-md flex justify-start items-start overflow-hidden">
                <div className="justify-start text-yellow-700 text-xs font-semibold font-['Inter'] leading-4">Dibaca</div>
              </div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">1</div>
            </div>
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="px-2.5 py-1 bg-violet-100 rounded-md flex justify-start items-start overflow-hidden">
                <div className="justify-start text-purple-800 text-xs font-semibold font-['Inter'] leading-4">Diproses</div>
              </div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">1</div>
            </div>
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="px-2.5 py-1 bg-emerald-50 rounded-md flex justify-start items-start overflow-hidden">
                <div className="justify-start text-emerald-700 text-xs font-semibold font-['Inter'] leading-4">Diterima</div>
              </div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">0</div>
            </div>
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="px-2.5 py-1 bg-rose-50 rounded-md flex justify-start items-start overflow-hidden">
                <div className="justify-start text-rose-700 text-xs font-semibold font-['Inter'] leading-4">Ditolak</div>
              </div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">1</div>
            </div>
          </div>
          
          {/* Tab Filter */}
          <div className="self-stretch border-b border-slate-200 flex justify-start items-start gap-7 overflow-hidden">
            <div className="py-3 border-b-2 border-blue-600 flex justify-start items-start overflow-hidden cursor-pointer">
              <div className="justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Semua lamaran (4)</div>
            </div>
            <div className="py-3 border-b-2 border-white/0 flex justify-start items-start overflow-hidden cursor-pointer hover:border-slate-300">
              <div className="justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Aktif (3)</div>
            </div>
            <div className="py-3 border-b-2 border-white/0 flex justify-start items-start overflow-hidden cursor-pointer hover:border-slate-300">
              <div className="justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Selesai (1)</div>
            </div>
          </div>
          
          {/* Baris Search & Sort */}
          <div className="self-stretch flex justify-start items-end gap-3 overflow-hidden">
            <div className="flex-1 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2.5 overflow-hidden">
              <div className="size-4 relative overflow-hidden">
                <div className="size-3.5 left-[2.25px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
              </div>
              <div className="flex-1 justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Cari posisi atau perusahaan</div>
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
          
          {/* Daftar Kartu Lamaran */}
          <div className="self-stretch flex justify-start items-start gap-6 overflow-hidden">
            
            {/* Kartu 1: Terkirim */}
            <div className="flex-1 p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
              <div className="self-stretch flex justify-start items-start gap-4 overflow-hidden">
                <div className="flex-1 flex flex-col justify-start items-start gap-1 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Frontend Developer</div>
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Aksara Teknologi · APL-202</div>
                </div>
                <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Terkirim</div>
                </div>
              </div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Dikirim 7 Okt 2026 · Nadia Putri</div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
                <div className="self-stretch justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Terkirim · 7 Okt, 09.15</div>
                <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Belum dibaca. Portofolio dan catatan pengantar masih dapat kamu ubah.</div>
              </div>
              <div className="self-stretch flex justify-between items-center overflow-hidden mt-auto">
                <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
                  <div className="size-4 relative overflow-hidden">
                    <div className="size-3.5 left-[1.33px] top-[1.33px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                  </div>
                  <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Edit lamaran</div>
                </div>
                <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-5 cursor-pointer hover:underline">Lihat riwayat ↗</div>
              </div>
            </div>
            
            {/* Kartu 2: Dibaca */}
            <div className="flex-1 p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
              <div className="self-stretch flex justify-start items-start gap-4 overflow-hidden">
                <div className="flex-1 flex flex-col justify-start items-start gap-1 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Magang UI/UX Designer</div>
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Nusa Digital · APL-101</div>
                </div>
                <div className="px-2.5 py-1 bg-yellow-50 rounded-md flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-yellow-700 text-xs font-semibold font-['Inter'] leading-4">Dibaca</div>
                </div>
              </div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Dikirim 6 Okt 2026 · Nadia Putri</div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
                <div className="self-stretch justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Terkirim · 6 Okt → Dibaca · 7 Okt</div>
                <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Lamaranmu telah dibaca oleh Raka Pratama pada 7 Okt, 10.05.</div>
              </div>
              <div className="self-stretch flex justify-between items-center overflow-hidden mt-auto">
                <div className="flex justify-start items-center gap-1.5 overflow-hidden">
                  <div className="size-3.5 relative overflow-hidden">
                    <div className="w-2.5 h-3 left-[1.75px] top-[1.17px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                  </div>
                  <div className="justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Edit terkunci</div>
                </div>
                <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-5 cursor-pointer hover:underline">Lihat riwayat ↗</div>
              </div>
            </div>
          </div>
          
          <div className="self-stretch flex justify-start items-start gap-6 overflow-hidden">
            
            {/* Kartu 3: Diproses */}
            <div className="flex-1 p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
              <div className="self-stretch flex justify-start items-start gap-4 overflow-hidden">
                <div className="flex-1 flex flex-col justify-start items-start gap-1 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Magang Data Analyst</div>
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Orbit Analitika · APL-203</div>
                </div>
                <div className="px-2.5 py-1 bg-violet-100 rounded-md flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-purple-800 text-xs font-semibold font-['Inter'] leading-4">Diproses</div>
                </div>
              </div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Dikirim 2 Okt 2026 · Nadia Putri</div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
                <div className="self-stretch justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Terkirim → Dibaca → Diproses → Ditolak → Diproses</div>
                <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Koreksi admin · 7 Okt, 09.30: “Koreksi salah klik oleh recruiter”. Riwayat sebelumnya tetap tersimpan.</div>
              </div>
              <div className="self-stretch flex justify-between items-center overflow-hidden mt-auto">
                <div className="flex justify-start items-center gap-1.5 overflow-hidden">
                  <div className="size-3.5 relative overflow-hidden">
                    <div className="w-2.5 h-3 left-[1.75px] top-[1.17px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                  </div>
                  <div className="justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Edit terkunci</div>
                </div>
                <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-5 cursor-pointer hover:underline">Lihat riwayat ↗</div>
              </div>
            </div>
            
            {/* Kartu 4: Ditolak */}
            <div className="flex-1 p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
              <div className="self-stretch flex justify-start items-start gap-4 overflow-hidden">
                <div className="flex-1 flex flex-col justify-start items-start gap-1 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Magang Content Writer</div>
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Langkah Kreatif · APL-204</div>
                </div>
                <div className="px-2.5 py-1 bg-rose-50 rounded-md flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-rose-700 text-xs font-semibold font-['Inter'] leading-4">Ditolak</div>
                </div>
              </div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Dikirim 1 Okt 2026 · Nadia Putri</div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
                <div className="self-stretch justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Terkirim → Dibaca → Diproses → Ditolak · 6 Okt</div>
                <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Evaluasi: Portofolio belum menunjukkan penulisan artikel panjang. Terima kasih atas minat dan usahamu.</div>
              </div>
              <div className="self-stretch flex justify-between items-center overflow-hidden mt-auto">
                <div className="flex justify-start items-center gap-1.5 overflow-hidden">
                  <div className="size-3.5 relative overflow-hidden">
                    <div className="w-2.5 h-3 left-[1.75px] top-[1.17px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                  </div>
                  <div className="justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Edit terkunci</div>
                </div>
                <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-5 cursor-pointer hover:underline">Lihat riwayat ↗</div>
              </div>
            </div>
            
          </div>
          
          {/* Footer / Info Tambahan */}
          <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Portofolio dan catatan pengantar hanya dapat diedit saat status Terkirim. Setelah Dibaca, isi lamaran dikunci.</div>
          <div className="self-stretch justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">KerjaYuk · Data contoh untuk ilustrasi · 7 Oktober 2026</div>
          
        </div>
      </div>
    </div>
  );
}