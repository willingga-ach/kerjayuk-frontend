import React from 'react';

export default function ProfilPelamar() {
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
          
          <div className="self-stretch p-3 bg-white rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer hover:bg-slate-50">
            <div className="size-4 relative overflow-hidden">
              <div className="size-3.5 left-[1.50px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
            <div className="flex-1 justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Lamaran Saya</div>
          </div>
          
          <div className="self-stretch p-3 bg-indigo-50 rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer">
            <div className="size-4 relative overflow-hidden">
              <div className="w-3 h-3.5 left-[3px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-blue-600" />
            </div>
            <div className="flex-1 justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Profil Saya</div>
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
        {/* === 3. MAIN CONTENT (Area Profil) ======== */}
        {/* ========================================= */}
        <div className="flex-1 p-10 flex flex-col justify-start items-start gap-6 overflow-hidden">
          
          {/* Header Konten */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
            <div className="self-stretch justify-start text-slate-500 text-xs font-medium font-['Inter'] leading-4">RUANG PELAMAR</div>
            <div className="self-stretch flex justify-start items-center gap-6 overflow-hidden">
              <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">Profil Saya</div>
                <div className="self-stretch justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Perkenalkan dirimu lewat pendidikan, minat, dan keahlian.</div>
              </div>
            </div>
          </div>
          
          <div className="self-stretch flex justify-start items-start gap-6 overflow-hidden">
            
            {/* Kolom Kiri Konten (Info Kartu & Kelengkapan) */}
            <div className="w-72 flex flex-col justify-start items-start gap-6 overflow-hidden">
              
              <div className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-center gap-3 overflow-hidden text-center">
                  <div className="size-20 bg-indigo-50 rounded-[100px] flex justify-center items-center overflow-hidden">
                    <div className="justify-start text-blue-600 text-3xl font-bold font-['Inter'] leading-9">NP</div>
                  </div>
                  <div className="justify-start text-blue-950 text-xl font-semibold font-['Inter'] leading-8">Nadia Putri</div>
                  <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Pelamar</div>
                  </div>
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">
                    Universitas Padjadjaran<br/>Teknik Informatika · Semester 7
                  </div>
                </div>
                <div className="self-stretch px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
                  <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Ubah foto</div>
                </div>
                <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">
                  Bergabung 1 Oktober 2026<br/>4 lamaran telah dikirim
                </div>
              </div>
              
              <div className="self-stretch p-4 bg-emerald-50 rounded-lg flex justify-start items-start gap-3 overflow-hidden">
                <div className="size-4 relative overflow-hidden shrink-0">
                  <div className="size-3.5 left-[1.50px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-emerald-700" />
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-1 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Profil lengkap</div>
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Profilmu siap dilihat recruiter bersama lamaran yang kamu kirim.</div>
                </div>
              </div>
            </div>
            
            {/* Kolom Kanan Konten (Formulir Detail Profil) */}
            <div className="flex-1 p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
              <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Informasi pribadi</div>
                <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Perubahan profil tidak mengubah isi lamaran yang sudah dikunci.</div>
              </div>
              
              {/* Tab Navigasi Form */}
              <div className="self-stretch border-b border-slate-200 flex justify-start items-start gap-7 overflow-hidden">
                <div className="py-3 border-b-2 border-blue-600 flex justify-start items-start overflow-hidden cursor-pointer">
                  <div className="justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Profil</div>
                </div>
                <div className="py-3 border-b-2 border-white/0 flex justify-start items-start overflow-hidden cursor-pointer hover:border-slate-300">
                  <div className="justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Keamanan akun</div>
                </div>
              </div>
              
              {/* Baris Form 1 */}
              <div className="self-stretch flex justify-start items-start gap-5 overflow-hidden">
                <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Nama lengkap *</div>
                  <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
                    <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Nadia Putri</div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Alamat email</div>
                  <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
                    <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">nadia.putri@email.com</div>
                  </div>
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Email digunakan untuk masuk ke akun.</div>
                </div>
              </div>
              
              {/* Baris Form 2 */}
              <div className="self-stretch flex justify-start items-start gap-5 overflow-hidden">
                <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Nomor telepon</div>
                  <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
                    <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">0812 3456 7890</div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Domisili</div>
                  <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
                    <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Bandung, Jawa Barat</div>
                  </div>
                </div>
              </div>
              
              {/* Baris Form 3 */}
              <div className="self-stretch flex justify-start items-start gap-5 overflow-hidden">
                <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Kampus *</div>
                  <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
                    <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Universitas Padjadjaran</div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Jurusan *</div>
                  <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
                    <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Teknik Informatika</div>
                  </div>
                </div>
              </div>
              
              {/* Area Tentang Saya */}
              <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Tentang saya</div>
                <div className="self-stretch min-h-28 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
                  <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Mahasiswa Teknik Informatika yang tertarik pada desain produk dan pengembangan antarmuka. Senang menerjemahkan hasil riset menjadi pengalaman pengguna yang sederhana.</div>
                </div>
              </div>
              
              {/* Keahlian & Tags */}
              <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Keahlian dasar</div>
                <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
                  <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Figma, Riset pengguna, HTML, CSS</div>
                </div>
                <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Pisahkan dengan koma. Pilih keahlian yang paling menggambarkanmu.</div>
              </div>
              <div className="flex justify-start items-start gap-2 overflow-hidden flex-wrap">
                <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Figma</div>
                </div>
                <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">Riset pengguna</div>
                </div>
                <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">HTML</div>
                </div>
                <div className="px-2.5 py-1 bg-indigo-50 rounded-md flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-blue-600 text-xs font-semibold font-['Inter'] leading-4">CSS</div>
                </div>
              </div>
              
              {/* Tombol Aksi Bawah */}
              <div className="self-stretch flex justify-end items-start gap-3 overflow-hidden mt-4">
                <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
                  <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Batal</div>
                </div>
                <div className="px-4 py-2.5 bg-blue-600 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/0 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-blue-700">
                  <div className="justify-start text-white text-sm font-semibold font-['Inter'] leading-5">Simpan perubahan</div>
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