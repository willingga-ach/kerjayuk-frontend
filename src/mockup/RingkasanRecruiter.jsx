import React from 'react';

export default function RingkasanRecruiter() {
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
          
          <div className="self-stretch p-3 bg-indigo-50 rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer">
            <div className="size-4 relative overflow-hidden">
              <div className="size-3.5 left-[2.25px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-blue-600" />
            </div>
            <div className="flex-1 justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Ringkasan</div>
          </div>
          
          <div className="self-stretch p-3 bg-white rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer hover:bg-slate-50">
            <div className="size-4 relative overflow-hidden">
              <div className="size-3.5 left-[1.50px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
            <div className="flex-1 justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Lowongan</div>
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
        {/* === 3. MAIN CONTENT (Dasbor Ringkasan) === */}
        {/* ========================================= */}
        <div className="flex-1 p-10 flex flex-col justify-start items-start gap-6 overflow-hidden">
          
          {/* Header Konten */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
            <div className="self-stretch justify-start text-slate-500 text-xs font-medium font-['Inter'] leading-4">NUSA DIGITAL / RINGKASAN</div>
            <div className="self-stretch flex justify-start items-center gap-6 overflow-hidden">
              <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">Selamat pagi, Raka.</div>
                <div className="self-stretch justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Ada 12 lamaran yang belum dibaca. Mari temukan talenta berikutnya.</div>
              </div>
              <div className="px-4 py-2.5 bg-blue-600 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/0 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-blue-700">
                <div className="size-4 relative overflow-hidden">
                  <div className="size-2.5 left-[3.33px] top-[3.33px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-white" />
                </div>
                <div className="justify-start text-white text-sm font-semibold font-['Inter'] leading-5">Buat lowongan</div>
              </div>
            </div>
          </div>
          
          {/* Baris Metrik Utama */}
          <div className="self-stretch flex justify-start items-start gap-5 overflow-hidden">
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Total lowongan</div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">4</div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">3 terbit · 1 ditutup</div>
            </div>
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Lamaran masuk</div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">68</div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Di seluruh lowongan Nusa Digital</div>
            </div>
            <div className="flex-1 p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Kandidat diterima</div>
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">10</div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Hasil akhir dari 68 lamaran</div>
            </div>
          </div>
          
          {/* Area Analitik Alur Seleksi & Peringatan */}
          <div className="self-stretch flex justify-start items-start gap-6 overflow-hidden">
            
            {/* Diagram Alur Seleksi */}
            <div className="flex-1 p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
              <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Alur seleksi</div>
                <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">68 lamaran · Status terkini</div>
              </div>
              
              {/* Progress Bar Multi-Warna */}
              <div className="self-stretch h-4 rounded-[100px] flex justify-start items-start overflow-hidden">
                <div className="w-28 h-4 bg-blue-600" />
                <div className="w-40 h-4 bg-yellow-700" />
                <div className="w-60 h-4 bg-purple-800" />
                <div className="w-24 h-4 bg-emerald-700" />
                <div className="w-14 h-4 bg-rose-700" />
              </div>
              
              {/* Rincian Status */}
              <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
                <div className="self-stretch flex justify-between items-center overflow-hidden">
                  <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Terkirim</div>
                  </div>
                  <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">12 lamaran</div>
                </div>
                <div className="self-stretch flex justify-between items-center overflow-hidden">
                  <div className="px-2.5 py-1 bg-yellow-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-yellow-700 text-xs font-semibold font-['Inter'] leading-4">Dibaca</div>
                  </div>
                  <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">16 lamaran</div>
                </div>
                <div className="self-stretch flex justify-between items-center overflow-hidden">
                  <div className="px-2.5 py-1 bg-violet-100 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-purple-800 text-xs font-semibold font-['Inter'] leading-4">Diproses</div>
                  </div>
                  <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">24 lamaran</div>
                </div>
                <div className="self-stretch flex justify-between items-center overflow-hidden">
                  <div className="px-2.5 py-1 bg-emerald-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-emerald-700 text-xs font-semibold font-['Inter'] leading-4">Diterima</div>
                  </div>
                  <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">10 lamaran</div>
                </div>
                <div className="self-stretch flex justify-between items-center overflow-hidden">
                  <div className="px-2.5 py-1 bg-rose-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-rose-700 text-xs font-semibold font-['Inter'] leading-4">Ditolak</div>
                  </div>
                  <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">6 lamaran</div>
                </div>
              </div>
            </div>
            
            {/* Widget Peringatan (Perlu Perhatian) */}
            <div className="w-96 p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
              <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Perlu perhatian</div>
              </div>
              <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">12 belum dibaca</div>
              </div>
              <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Kandidat baru menunggumu.</div>
              <div className="self-stretch justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Baca portofolio dan lanjutkan kandidat yang sesuai ke tahap Diproses.</div>
              <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
                <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Tinjau kandidat</div>
              </div>
              <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5 mt-2">Batas lamaran terdekat</div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Junior Product Designer<br/>24 Oktober 2026 · 16 pelamar</div>
              <div className="self-stretch justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">Kelola lowongan →</div>
            </div>
          </div>
          
          {/* Tabel Aktivitas Terbaru */}
          <div className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
              <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Aktivitas terbaru</div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Perubahan status terakhir di perusahaanmu</div>
            </div>
            
            <div className="self-stretch bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start overflow-hidden">
              
              {/* Header Tabel */}
              <div className="self-stretch px-4 py-3.5 bg-slate-50 flex justify-start items-start gap-3.5 overflow-hidden">
                <div className="flex-1 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Kandidat</div>
                </div>
                <div className="flex-1 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Lowongan</div>
                </div>
                <div className="flex-1 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Status</div>
                </div>
                <div className="flex-1 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Waktu</div>
                </div>
                <div className="flex-1 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Oleh</div>
                </div>
              </div>
              
              {/* Baris Tabel 1 */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50 cursor-pointer">
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Nadia Putri</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Magang UI/UX Designer</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-yellow-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-yellow-700 text-xs font-semibold font-['Inter'] leading-4">Dibaca</div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">7 Okt · 10.05</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Raka Pratama</div>
                </div>
              </div>
              
              {/* Baris Tabel 2 */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50 cursor-pointer">
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Dimas Saputra</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Magang UI/UX Designer</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-violet-100 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-purple-800 text-xs font-semibold font-['Inter'] leading-4">Diproses</div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">7 Okt · 09.45</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Raka Pratama</div>
                </div>
              </div>
              
              {/* Baris Tabel 3 */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden hover:bg-slate-50 cursor-pointer">
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Intan Lestari</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Magang UI/UX Designer</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-emerald-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-emerald-700 text-xs font-semibold font-['Inter'] leading-4">Diterima</div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">6 Okt · 16.20</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Raka Pratama</div>
                </div>
              </div>
              
            </div>
          </div>
          
          <div className="self-stretch justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">KerjaYuk · Data contoh untuk ilustrasi · 7 Oktober 2026</div>
        </div>
      </div>
    </div>
  );
}