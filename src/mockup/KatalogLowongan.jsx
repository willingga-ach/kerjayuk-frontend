import React from 'react';

export default function KatalogLowonganPublik() {
  return (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col justify-start items-start overflow-hidden">
      
      {/* ========================================= */}
      {/* === 1. NAVIGASI PUBLIK (Header/Navbar) === */}
      {/* ========================================= */}
      <div className="self-stretch h-20 px-16 bg-white border-b border-slate-200 flex justify-between items-center overflow-hidden">
        <div className="flex justify-start items-center gap-2.5 overflow-hidden">
          <div className="size-8 bg-blue-600 rounded-[10px] flex justify-center items-center overflow-hidden">
            <div className="size-5 relative overflow-hidden">
              <div className="w-4 h-3.5 left-[1.67px] top-[1.67px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-white" />
            </div>
          </div>
          <div className="justify-start text-blue-950 text-2xl font-bold font-['Inter']">KerjaYuk</div>
        </div>
        <div className="flex justify-start items-center gap-8 overflow-hidden">
          <div className="justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Cari lowongan</div>
          <div className="justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Untuk perusahaan</div>
        </div>
        <div className="flex justify-start items-center gap-3 overflow-hidden">
          <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-white/0 flex justify-center items-center gap-2 overflow-hidden">
            <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Masuk</div>
          </div>
          <div className="px-4 py-2.5 bg-blue-600 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/0 flex justify-center items-center gap-2 overflow-hidden">
            <div className="justify-start text-white text-sm font-semibold font-['Inter'] leading-5">Daftar gratis</div>
          </div>
        </div>
      </div>

      {/* ============================================== */}
      {/* === 2. PENCARIAN PELUANG (Hero & Search Bar) === */}
      {/* ============================================== */}
      <div className="self-stretch px-16 py-9 bg-indigo-50 flex flex-col justify-start items-start gap-5 overflow-hidden">
        <div className="self-stretch flex justify-between items-center overflow-hidden">
          <div className="w-[850px] flex flex-col justify-start items-start gap-2 overflow-hidden">
            <div className="self-stretch justify-start text-blue-950 text-4xl font-bold font-['Inter'] leading-10">Temukan tempatmu untuk bertumbuh.</div>
            <div className="self-stretch justify-start text-slate-500 text-base font-normal font-['Inter'] leading-6">128 lowongan dari 42 perusahaan. Pilih peluang yang sesuai dengan langkah kariermu.</div>
          </div>
          <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
            <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Untuk mahasiswa &amp; talenta muda</div>
          </div>
        </div>
        <div className="self-stretch flex justify-start items-end gap-3 overflow-hidden">
          <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
            <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Kata kunci</div>
            <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
              <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Cari posisi, perusahaan, atau keahlian</div>
            </div>
          </div>
          <div className="w-64 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
            <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Jenis pekerjaan</div>
            <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
              <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Semua jenis</div>
              <div className="size-4 relative overflow-hidden">
                <div className="w-2 h-1 left-[4px] top-[6px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
              </div>
            </div>
          </div>
          <div className="px-4 py-2.5 bg-blue-600 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/0 flex justify-center items-center gap-2 overflow-hidden">
            <div className="size-4 relative overflow-hidden">
              <div className="size-3 left-[2px] top-[2px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-white" />
            </div>
            <div className="justify-start text-white text-sm font-semibold font-['Inter'] leading-5">Cari lowongan</div>
          </div>
        </div>
      </div>

      {/* ==================================================== */}
      {/* === 3. HASIL PENCARIAN (Filter & Daftar Lowongan) === */}
      {/* ==================================================== */}
      <div className="self-stretch px-16 py-8 flex justify-start items-start gap-7 overflow-hidden">
        
        {/* -- Bagian Kiri: Filter -- */}
        <div className="w-56 flex flex-col justify-start items-start gap-5 overflow-hidden">
          <div className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
              <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Saring lowongan</div>
            </div>
            <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Jenis pekerjaan</div>
            <div className="self-stretch justify-start text-blue-600 text-sm font-normal font-['Inter'] leading-5">☑ Semua jenis</div>
            <div className="self-stretch justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">☐ Magang · 86</div>
            <div className="self-stretch justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">☐ Penuh waktu · 42</div>
            <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
              <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Lokasi</div>
              <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
                <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Semua lokasi</div>
                <div className="size-4 relative overflow-hidden">
                  <div className="w-2 h-1 left-[4px] top-[6px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                </div>
              </div>
            </div>
            <div className="px-4 py-2.5 bg-blue-600 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/0 flex justify-center items-center gap-2 overflow-hidden">
              <div className="justify-start text-white text-sm font-semibold font-['Inter'] leading-5">Terapkan filter</div>
            </div>
            <div className="self-stretch justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5">Reset filter</div>
          </div>
          
          <div className="self-stretch p-5 bg-indigo-50 rounded-xl flex flex-col justify-start items-start gap-3 overflow-hidden">
            <div className="size-4 relative overflow-hidden">
              <div className="size-3.5 left-[1.50px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-blue-600" />
            </div>
            <div className="self-stretch justify-start text-blue-950 text-base font-semibold font-['Inter'] leading-6">Peluang dimulai dari profilmu.</div>
            <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Daftar dan tunjukkan keahlian serta portofoliomu ke perusahaan.</div>
            <div className="self-stretch justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Buat akun pelamar →</div>
          </div>
        </div>

        {/* -- Bagian Kanan: List Kartu Lowongan -- */}
        <div className="flex-1 flex flex-col justify-start items-start gap-5 overflow-hidden">
          <div className="self-stretch flex justify-between items-start overflow-hidden">
            <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">128 lowongan tersedia</div>
            <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Urutkan: Terbaru ⌄</div>
          </div>
          
          {/* Baris 1 */}
          <div className="self-stretch flex justify-start items-start gap-5 overflow-hidden">
            <div className="flex-1 p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="self-stretch flex justify-start items-center gap-3 overflow-hidden">
                <div className="size-11 bg-indigo-50 rounded-[10px] flex justify-center items-center overflow-hidden">
                  <div className="justify-start text-blue-600 text-xl font-bold font-['Inter'] leading-7">A</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-0.5 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Aksara Teknologi</div>
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Jakarta · Jarak jauh</div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Frontend Developer</div>
                <div className="flex justify-start items-start gap-2 overflow-hidden">
                  <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Penuh waktu</div>
                  </div>
                  <div className="justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">React · TypeScript</div>
                </div>
              </div>
              <div className="self-stretch justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Rp7–10 juta / bulan</div>
              <div className="self-stretch flex justify-between items-center overflow-hidden">
                <div className="flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Batas lamaran: 28 Okt 2026</div>
                  <div className="self-stretch justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">1 hari lalu</div>
                </div>
                <div className="justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Lihat detail →</div>
              </div>
            </div>
            
            <div className="flex-1 p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="self-stretch flex justify-start items-center gap-3 overflow-hidden">
                <div className="size-11 bg-indigo-50 rounded-[10px] flex justify-center items-center overflow-hidden">
                  <div className="justify-start text-blue-600 text-xl font-bold font-['Inter'] leading-7">N</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-0.5 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Nusa Digital</div>
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Bandung · Hibrida</div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Magang UI/UX Designer</div>
                <div className="flex justify-start items-start gap-2 overflow-hidden">
                  <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Magang</div>
                  </div>
                  <div className="justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Figma · Riset pengguna</div>
                </div>
              </div>
              <div className="self-stretch justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Rp2–3 juta / bulan</div>
              <div className="self-stretch flex justify-between items-center overflow-hidden">
                <div className="flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Batas lamaran: 31 Okt 2026</div>
                  <div className="self-stretch justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">2 hari lalu</div>
                </div>
                <div className="justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Lihat detail →</div>
              </div>
            </div>
          </div>

          {/* Baris 2 */}
          <div className="self-stretch flex justify-start items-start gap-5 overflow-hidden">
            <div className="flex-1 p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="self-stretch flex justify-start items-center gap-3 overflow-hidden">
                <div className="size-11 bg-indigo-50 rounded-[10px] flex justify-center items-center overflow-hidden">
                  <div className="justify-start text-blue-600 text-xl font-bold font-['Inter'] leading-7">L</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-0.5 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Langkah Kreatif</div>
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Yogyakarta · Hibrida</div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Magang Digital Marketing</div>
                <div className="flex justify-start items-start gap-2 overflow-hidden">
                  <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Magang</div>
                  </div>
                  <div className="justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Media sosial · Analitik</div>
                </div>
              </div>
              <div className="self-stretch justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Rp1,5–2,5 juta / bulan</div>
              <div className="self-stretch flex justify-between items-center overflow-hidden">
                <div className="flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Batas lamaran: 26 Okt 2026</div>
                  <div className="self-stretch justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">2 hari lalu</div>
                </div>
                <div className="justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Lihat detail →</div>
              </div>
            </div>
            
            <div className="flex-1 p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="self-stretch flex justify-start items-center gap-3 overflow-hidden">
                <div className="size-11 bg-indigo-50 rounded-[10px] flex justify-center items-center overflow-hidden">
                  <div className="justify-start text-blue-600 text-xl font-bold font-['Inter'] leading-7">O</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-0.5 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Orbit Analitika</div>
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Jakarta · Hibrida</div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Magang Data Analyst</div>
                <div className="flex justify-start items-start gap-2 overflow-hidden">
                  <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Magang</div>
                  </div>
                  <div className="justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">SQL · Python</div>
                </div>
              </div>
              <div className="self-stretch justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Rp2,5–3,5 juta / bulan</div>
              <div className="self-stretch flex justify-between items-center overflow-hidden">
                <div className="flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Batas lamaran: 25 Okt 2026</div>
                  <div className="self-stretch justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">3 hari lalu</div>
                </div>
                <div className="justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Lihat detail →</div>
              </div>
            </div>
          </div>

          {/* Baris 3 */}
          <div className="self-stretch flex justify-start items-start gap-5 overflow-hidden">
            <div className="flex-1 p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="self-stretch flex justify-start items-center gap-3 overflow-hidden">
                <div className="size-11 bg-indigo-50 rounded-[10px] flex justify-center items-center overflow-hidden">
                  <div className="justify-start text-blue-600 text-xl font-bold font-['Inter'] leading-7">N</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-0.5 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Nusa Digital</div>
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Bandung · Hibrida</div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Magang Backend Developer</div>
                <div className="flex justify-start items-start gap-2 overflow-hidden">
                  <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Magang</div>
                  </div>
                  <div className="justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Node.js · PostgreSQL</div>
                </div>
              </div>
              <div className="self-stretch justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Rp2,5–3,5 juta / bulan</div>
              <div className="self-stretch flex justify-between items-center overflow-hidden">
                <div className="flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Batas lamaran: 30 Okt 2026</div>
                  <div className="self-stretch justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">4 hari lalu</div>
                </div>
                <div className="justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Lihat detail →</div>
              </div>
            </div>
            
            <div className="flex-1 p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="self-stretch flex justify-start items-center gap-3 overflow-hidden">
                <div className="size-11 bg-indigo-50 rounded-[10px] flex justify-center items-center overflow-hidden">
                  <div className="justify-start text-blue-600 text-xl font-bold font-['Inter'] leading-7">N</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-0.5 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Nusa Digital</div>
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Bandung · Di kantor</div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Junior Product Designer</div>
                <div className="flex justify-start items-start gap-2 overflow-hidden">
                  <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Penuh waktu</div>
                  </div>
                  <div className="justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Desain produk · Figma</div>
                </div>
              </div>
              <div className="self-stretch justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Rp6–8 juta / bulan</div>
              <div className="self-stretch flex justify-between items-center overflow-hidden">
                <div className="flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Batas lamaran: 24 Okt 2026</div>
                  <div className="self-stretch justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">5 hari lalu</div>
                </div>
                <div className="justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Lihat detail →</div>
              </div>
            </div>
          </div>

          {/* -- Pagination (Bawah) -- */}
          <div className="self-stretch flex justify-between items-center overflow-hidden">
            <div className="justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Menampilkan 1–6 dari 128 lowongan · 6 per halaman ⌄</div>
            <div className="flex justify-start items-center gap-2 overflow-hidden">
              <div className="px-4 py-2.5 bg-slate-200 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/0 flex justify-center items-center gap-2 overflow-hidden">
                <div className="justify-start text-slate-400 text-sm font-semibold font-['Inter'] leading-5">Sebelumnya</div>
              </div>
              <div className="px-3.5 py-2.5 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                <div className="justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">1</div>
              </div>
              <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">2  3  ...  22</div>
              <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden">
                <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Berikutnya</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ======================================= */}
      {/* === 4. CATATAN KATALOG (Footer Bawah) === */}
      {/* ======================================= */}
      <div className="self-stretch px-16 pb-7 flex justify-start items-start overflow-hidden">
        <div className="flex-1 justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">
          © 2026 KerjaYuk · Data lowongan ilustratif · Urutan terbaru tetap konsisten antarhalaman.
        </div>
      </div>

    </div>
  );
}