import React from 'react';

export default function DaftarPelamar() {
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
      {/* === 2. AREA AUTENTIKASI (Kolom Kanan / Form Daftar) === */}
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
          <div className="px-2.5 py-1 bg-indigo-50 rounded-md inline-flex justify-start items-start overflow-hidden">
            <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Akun Pelamar</div>
          </div>
          <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">Mulai langkah kariermu.</div>
          <div className="self-stretch justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Buat akun gratis untuk menemukan dan melamar peluang.</div>
        </div>
        
        {/* Area Input Form */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
          
          <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
            <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Nama lengkap *</div>
            <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
              <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Nadia Putri</div>
            </div>
          </div>
          
          <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
            <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Alamat email *</div>
            <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
              <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">nadia.putri@email.com</div>
            </div>
          </div>
          
          <div className="self-stretch flex justify-start items-start gap-4 overflow-hidden">
            <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
              <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Kata sandi *</div>
              <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
                <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">••••••••••••</div>
                <div className="size-4 relative overflow-hidden">
                  <div className="w-3.5 h-2.5 left-[1.50px] top-[3.75px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
              <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Konfirmasi kata sandi *</div>
              <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
                <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">••••••••••••</div>
                <div className="size-4 relative overflow-hidden">
                  <div className="w-3.5 h-2.5 left-[1.50px] top-[3.75px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Gunakan minimal 8 karakter dengan huruf dan angka.</div>
          
          <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
            <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Kampus / perguruan tinggi *</div>
            <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
              <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Universitas Padjadjaran</div>
            </div>
          </div>
          
          <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
            <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Jurusan *</div>
            <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
              <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Teknik Informatika</div>
            </div>
          </div>
          
          <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
            <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Keahlian dasar</div>
            <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
              <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Figma, Riset pengguna, HTML, CSS</div>
            </div>
            <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Pisahkan keahlian dengan koma. Kamu bisa mengubahnya di profil.</div>
          </div>
          
          <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5 cursor-pointer">☑ Saya menyetujui Ketentuan Layanan dan Kebijakan Privasi KerjaYuk.</div>
          
          <div className="self-stretch px-4 py-2.5 bg-blue-600 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/0 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-blue-700">
            <div className="justify-start text-white text-sm font-semibold font-['Inter'] leading-5">Buat akun pelamar</div>
          </div>
        </div>
        
        {/* Tautan Masuk & Footer Kanan */}
        <div className="self-stretch flex flex-col gap-2 mt-auto">
          <div className="self-stretch justify-start text-blue-600 text-xs font-normal font-['Inter'] leading-5 cursor-pointer hover:underline">
            Sudah punya akun? Masuk →
          </div>
          <div className="self-stretch justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">Data akun pada desain ini bersifat ilustratif.</div>
        </div>
        
      </div>
    </div>
  );
}