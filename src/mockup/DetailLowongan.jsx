import React from 'react';

export default function DetailLowongan() {
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

      {/* ========================================= */}
      {/* === 2. KONTEN DETAIL (Isi Lowongan) ====== */}
      {/* ========================================= */}
      <div className="self-stretch px-28 py-8 flex flex-col justify-start items-start gap-6 overflow-hidden">
        <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Cari lowongan / Nusa Digital / Magang UI/UX Designer</div>
        
        {/* -- Kartu Header Lowongan -- */}
        <div className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
          <div className="self-stretch flex justify-start items-center gap-6 overflow-hidden">
            <div className="size-16 bg-indigo-50 rounded-2xl flex justify-center items-center overflow-hidden">
              <div className="justify-start text-blue-600 text-4xl font-bold font-['Inter'] leading-10">N</div>
            </div>
            <div className="flex-1 flex flex-col justify-start items-start gap-2 overflow-hidden">
              <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">Magang UI/UX Designer</div>
              <div className="self-stretch justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Nusa Digital · Bandung, Jawa Barat</div>
              <div className="inline-flex justify-start items-start gap-2 overflow-hidden">
                <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Magang</div>
                </div>
                <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Hibrida</div>
                </div>
                <div className="px-2.5 py-1 bg-emerald-50 rounded-md flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-emerald-700 text-xs font-semibold font-['Inter'] leading-4">Terbit</div>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col justify-start items-start gap-3 overflow-hidden">
              <div className="px-4 py-2.5 bg-blue-600 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/0 inline-flex justify-center items-center gap-2 overflow-hidden">
                <div className="size-4 relative overflow-hidden">
                  <div className="size-3.5 left-[1.33px] top-[1.33px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-white" />
                </div>
                <div className="justify-start text-white text-sm font-semibold font-['Inter'] leading-5">Lamar sekarang</div>
              </div>
              <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-center items-center gap-2 overflow-hidden">
                <div className="size-4 relative overflow-hidden">
                  <div className="w-2.5 h-3 left-[3.33px] top-[2px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                </div>
                <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Simpan lowongan</div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-px bg-slate-200" />
          <div className="self-stretch flex justify-start items-start gap-9 overflow-hidden">
            <div className="flex justify-start items-center gap-2 overflow-hidden">
              <div className="size-4 relative overflow-hidden">
                <div className="w-3.5 h-2 left-[1.33px] top-[4px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
              </div>
              <div className="justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Rp2–3 juta / bulan</div>
            </div>
            <div className="flex justify-start items-center gap-2 overflow-hidden">
              <div className="size-4 relative overflow-hidden">
                <div className="w-3 h-3.5 left-[2px] top-[1.33px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
              </div>
              <div className="justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Batas: 31 Oktober 2026</div>
            </div>
            <div className="flex justify-start items-center gap-2 overflow-hidden">
              <div className="size-4 relative overflow-hidden">
                <div className="size-3.5 left-[1.33px] top-[1.33px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
              </div>
              <div className="justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Durasi: 6 bulan</div>
            </div>
            <div className="flex justify-start items-center gap-2 overflow-hidden">
              <div className="size-4 relative overflow-hidden">
                <div className="w-3.5 h-3 left-[1.33px] top-[2px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
              </div>
              <div className="justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">24 pelamar</div>
            </div>
          </div>
        </div>
        
        {/* -- Area Deskripsi Utama -- */}
        <div className="self-stretch flex justify-start items-start gap-6 overflow-hidden">
          
          {/* Kolom Kiri: Detail Pekerjaan */}
          <div className="flex-1 p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
              <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Tentang peran ini</div>
            </div>
            <div className="self-stretch justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Kami mencari mahasiswa yang ingin membangun pengalaman produk digital yang bermanfaat. Kamu akan bekerja bersama tim desain dan pengembang untuk menyederhanakan pengalaman pengguna pada produk Nusa Digital.</div>
            <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Yang akan kamu kerjakan</div>
            <div className="self-stretch justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">• Melakukan riset pengguna dan merangkum temuan menjadi peluang desain.<br/>• Membuat alur pengguna, wireframe, dan prototipe interaktif di Figma.<br/>• Mengembangkan komponen antarmuka bersama tim produk.<br/>• Mendokumentasikan keputusan desain dan mengikuti uji kegunaan.</div>
            <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Kualifikasi</div>
            <div className="self-stretch justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">• Mahasiswa semester 5 ke atas, terbuka untuk semua jurusan.<br/>• Memahami dasar UI/UX dan mampu menggunakan Figma.<br/>• Memiliki portofolio berisi minimal satu studi kasus desain.<br/>• Komunikatif, teliti, dan dapat berkolaborasi secara hibrida.</div>
            <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Apa yang kamu dapatkan</div>
            <div className="self-stretch justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Uang saku Rp2–3 juta per bulan, pendampingan desainer senior, jam kerja yang menyesuaikan jadwal kuliah, serta pengalaman membangun produk nyata.</div>
            <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Diterbitkan 5 Oktober 2026 · Kode lowongan LWG-101</div>
          </div>
          
          {/* Kolom Kanan: Profil Perusahaan */}
          <div className="w-80 flex flex-col justify-start items-start gap-6 overflow-hidden">
            <div className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
              <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Nusa Digital</div>
              </div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Teknologi informasi · 50–100 karyawan</div>
              <div className="self-stretch justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Nusa Digital membantu bisnis lokal menghadirkan layanan digital yang lebih mudah digunakan.</div>
              <div className="self-stretch flex justify-start items-start gap-2 overflow-hidden">
                <div className="size-4 relative overflow-hidden">
                  <div className="w-3 h-3.5 left-[3px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                </div>
                <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Bandung, Indonesia</div>
              </div>
              <div className="self-stretch justify-start text-blue-600 text-sm font-normal font-['Inter'] leading-5">nusadigital.id ↗</div>
            </div>
            <div className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
              <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Siapkan lamaranmu</div>
              </div>
              <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Sertakan tautan portofolio dari GitHub, LinkedIn, atau Google Drive. Catatan pengantar bersifat opsional.</div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Masuk atau daftar sebagai pelamar untuk mengirim lamaran. Kamu dapat mengubahnya selama status masih Terkirim.</div>
              <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden">
                <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Masuk untuk melamar</div>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* -- Catatan Bawah -- */}
        <div className="self-stretch justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">Data perusahaan dan lowongan merupakan contoh ilustratif.</div>
      </div>
      
    </div>
  );
}