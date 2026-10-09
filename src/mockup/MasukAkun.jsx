import React from 'react';

export default function MasukAkun() {
  return (
    <div className="w-full min-h-screen bg-white flex justify-start items-start overflow-hidden">
      
      {/* ==================================================== */}
      {/* === 1. PESAN KARIER (Kolom Kiri / Info Marketing) === */}
      {/* ==================================================== */}
      <div className="w-[600px] self-stretch p-14 bg-indigo-50 flex flex-col justify-start items-start gap-9 overflow-hidden">
        
        {/* Logo & Brand */}
        <div className="inline-flex justify-start items-center gap-2.5 overflow-hidden">
          <div className="size-8 bg-blue-600 rounded-[10px] flex justify-center items-center overflow-hidden">
            <div className="size-5 relative overflow-hidden">
              <div className="w-4 h-3.5 left-[1.67px] top-[1.67px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-white" />
            </div>
          </div>
          <div className="justify-start text-blue-950 text-2xl font-bold font-['Inter']">KerjaYuk</div>
        </div>
        
        {/* Headline */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
          <div className="self-stretch justify-start text-blue-950 text-4xl font-bold font-['Inter'] leading-[50px]">Langkah pertamamu, peluang berikutnya.</div>
          <div className="self-stretch justify-start text-slate-500 text-base font-normal font-['Inter'] leading-6">Temukan magang dan pekerjaan yang memberi ruang untuk tumbuh. Mulai perjalananmu bersama KerjaYuk.</div>
        </div>
        
        {/* Gambar / Ilustrasi */}
        <img className="self-stretch h-80 rounded-2xl object-cover" src="https://placehold.co/488x320" alt="Ilustrasi KerjaYuk" />
        
        {/* Poin-poin Fitur */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
          <div className="self-stretch inline-flex justify-start items-start gap-2.5 overflow-hidden">
            <div className="size-4 relative overflow-hidden">
              <div className="size-3.5 left-[1.50px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-blue-600" />
            </div>
            <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Lowongan magang &amp; pekerjaan penuh waktu</div>
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-2.5 overflow-hidden">
            <div className="size-4 relative overflow-hidden">
              <div className="size-3.5 left-[1.50px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-blue-600" />
            </div>
            <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Riwayat lamaran yang transparan</div>
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-2.5 overflow-hidden">
            <div className="size-4 relative overflow-hidden">
              <div className="size-3.5 left-[1.50px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-blue-600" />
            </div>
            <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Portofolio untuk menunjukkan potensimu</div>
          </div>
        </div>
        
        {/* Footer Kiri */}
        <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">© 2026 KerjaYuk · Ruang bertumbuh untuk talenta muda</div>
      </div>


      {/* ==================================================== */}
      {/* === 2. AREA AUTENTIKASI (Kolom Kanan / Form Login) === */}
      {/* ==================================================== */}
      <div className="flex-1 px-24 py-12 flex flex-col justify-start items-start gap-7 overflow-hidden">
        
        {/* Tombol Kembali */}
        <div className="self-stretch inline-flex justify-start items-start gap-2 overflow-hidden cursor-pointer hover:opacity-80">
          <div className="size-4 relative overflow-hidden">
            <div className="size-2.5 left-[3.33px] top-[3.33px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
          </div>
          <div className="flex-1 justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Kembali ke lowongan</div>
        </div>
        
        {/* Judul Form */}
        <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
          <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">Selamat datang kembali.</div>
          <div className="self-stretch justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Masuk untuk melanjutkan perjalanan kariermu.</div>
        </div>
        
        {/* Area Input Form */}
        <div className="self-stretch flex flex-col justify-start items-start gap-5 overflow-hidden">
          
          <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
            <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Alamat email</div>
            <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
              <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">nadia.putri@email.com</div>
            </div>
          </div>
          
          <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
            <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Kata sandi</div>
            <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
              <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">••••••••••••</div>
              <div className="size-4 relative overflow-hidden">
                <div className="w-3.5 h-2.5 left-[1.50px] top-[3.75px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
              </div>
            </div>
          </div>
          
          <div className="self-stretch flex justify-between items-start overflow-hidden">
            <div className="justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5 cursor-pointer">☑ Ingat saya</div>
            <div className="justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">Lupa kata sandi?</div>
          </div>
          
          <div className="self-stretch px-4 py-2.5 bg-blue-600 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/0 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-blue-700">
            <div className="justify-start text-white text-sm font-semibold font-['Inter'] leading-5">Masuk</div>
          </div>
          
          <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Akses pelamar, recruiter, atau admin mengikuti peran akunmu.</div>
        </div>
        
        {/* Tautan Daftar */}
        <div className="self-stretch justify-start text-blue-600 text-sm font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">
          Belum punya akun? Daftar sebagai pelamar →
        </div>
        
        {/* Kartu Demo Recruiter */}
        <div className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
          <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
            <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Coba ruang recruiter</div>
            <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Demo untuk proyek perkuliahan</div>
          </div>
          <div className="px-2.5 py-1 bg-indigo-50 rounded-md inline-flex justify-start items-start overflow-hidden">
            <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Recruiter · Nusa Digital</div>
          </div>
          <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Jelajahi dashboard, lowongan, dan alur seleksi menggunakan akun demo Raka Pratama. Semua data bersifat contoh.</div>
          <div className="self-stretch px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
            <div className="size-4 relative overflow-hidden">
              <div className="w-2.5 h-3 left-[3.33px] top-[2px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
            <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Masuk demo recruiter</div>
          </div>
        </div>
        
        {/* Footer Kanan */}
        <div className="self-stretch flex flex-col gap-2 mt-auto">
          <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Dengan masuk, kamu menyetujui Ketentuan Layanan dan Kebijakan Privasi KerjaYuk.</div>
          <div className="self-stretch justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">Data akun pada desain ini bersifat ilustratif.</div>
        </div>

      </div>
    </div>
  );
}