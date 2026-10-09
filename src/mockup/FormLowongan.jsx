import React from 'react';

export default function FormLowongan() {
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
          
          <div className="self-stretch p-3 bg-indigo-50 rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer">
            <div className="size-4 relative overflow-hidden">
              <div className="size-3.5 left-[1.50px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-blue-600" />
            </div>
            <div className="flex-1 justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Lowongan</div>
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
        {/* === 3. MAIN CONTENT (Formulir Lowongan) == */}
        {/* ========================================= */}
        <div className="flex-1 p-10 flex flex-col justify-start items-start gap-6 overflow-hidden">
          
          {/* Header Konten */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
            <div className="self-stretch justify-start text-slate-500 text-xs font-medium font-['Inter'] leading-4">Lowongan / LWG-101</div>
            <div className="self-stretch flex justify-start items-center gap-6 overflow-hidden">
              <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">Formulir lowongan</div>
                <div className="self-stretch justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Lengkapi informasi yang dibutuhkan pelamar untuk mengenal peran ini.</div>
              </div>
              <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
                <div className="size-4 relative overflow-hidden">
                  <div className="size-2.5 left-[3.33px] top-[3.33px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                </div>
                <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Kembali</div>
              </div>
            </div>
          </div>
          
          {/* Tab Form (Buat Baru / Edit) */}
          <div className="self-stretch border-b border-slate-200 flex justify-start items-start gap-7 overflow-hidden">
            <div className="py-3 border-b-2 border-white/0 flex justify-start items-start overflow-hidden cursor-pointer hover:border-slate-300">
              <div className="justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Buat lowongan baru</div>
            </div>
            <div className="py-3 border-b-2 border-blue-600 flex justify-start items-start overflow-hidden cursor-pointer">
              <div className="justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Edit lowongan</div>
            </div>
          </div>
          
          {/* Container Kolom Form (Kiri & Kanan) */}
          <div className="self-stretch flex justify-start items-start gap-6 overflow-hidden">
            
            {/* Kolom Kiri: Input Utama */}
            <div className="flex-1 flex flex-col justify-start items-start gap-6 overflow-hidden">
              
              {/* Kartu: Informasi Dasar */}
              <div className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Informasi dasar</div>
                </div>
                
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Judul lowongan *</div>
                  <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
                    <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Magang UI/UX Designer</div>
                  </div>
                </div>
                
                <div className="self-stretch flex justify-start items-start gap-5 overflow-hidden">
                  <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                    <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Jenis pekerjaan *</div>
                    <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
                      <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Magang</div>
                      <div className="size-4 relative overflow-hidden">
                        <div className="w-2 h-1 left-[4px] top-[6px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                    <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Sistem kerja *</div>
                    <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
                      <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Hibrida</div>
                      <div className="size-4 relative overflow-hidden">
                        <div className="w-2 h-1 left-[4px] top-[6px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="self-stretch flex justify-start items-start gap-5 overflow-hidden">
                  <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                    <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Lokasi *</div>
                    <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
                      <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Bandung, Jawa Barat</div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                    <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Durasi</div>
                    <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
                      <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">6 bulan</div>
                    </div>
                  </div>
                </div>
                
                <div className="self-stretch flex justify-start items-start gap-5 overflow-hidden">
                  <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                    <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Gaji minimum (Rp / bulan) *</div>
                    <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
                      <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">2.000.000</div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                    <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Gaji maksimum (Rp / bulan) *</div>
                    <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
                      <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">3.000.000</div>
                    </div>
                  </div>
                </div>
                
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Batas lamaran *</div>
                  <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
                    <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">31 / 10 / 2026</div>
                    <div className="size-4 relative overflow-hidden">
                      <div className="size-3.5 left-[2.25px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                    </div>
                  </div>
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Lowongan tidak menerima lamaran baru setelah batas ini.</div>
                </div>
              </div>
              
              {/* Kartu: Deskripsi & Kualifikasi */}
              <div className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Deskripsi &amp; kualifikasi</div>
                </div>
                
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Deskripsi pekerjaan *</div>
                  <div className="self-stretch min-h-28 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
                    <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Bergabung bersama tim produk Nusa Digital. Melakukan riset pengguna, membuat wireframe dan prototipe di Figma, serta berkolaborasi dengan pengembang untuk membangun pengalaman digital yang bermanfaat.</div>
                  </div>
                </div>
                
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Kualifikasi *</div>
                  <div className="self-stretch min-h-28 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
                    <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Mahasiswa semester 5 ke atas. Memahami dasar UI/UX dan Figma. Memiliki minimal satu studi kasus desain. Teliti, komunikatif, dan siap bekerja secara hibrida.</div>
                  </div>
                </div>
                
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Manfaat &amp; fasilitas</div>
                  <div className="self-stretch min-h-28 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
                    <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Uang saku Rp2–3 juta per bulan, pendampingan desainer senior, jadwal fleksibel mengikuti kuliah, serta pengalaman membangun produk nyata.</div>
                  </div>
                </div>
              </div>
              
              {/* Tombol Aksi Simpan */}
              <div className="self-stretch flex justify-start items-start gap-3 overflow-hidden">
                <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
                  <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Batal</div>
                </div>
                <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
                  <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Simpan sebagai draf</div>
                </div>
                <div className="px-4 py-2.5 bg-blue-600 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/0 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-blue-700">
                  <div className="justify-start text-white text-sm font-semibold font-['Inter'] leading-5">Simpan perubahan</div>
                </div>
              </div>
            </div>
            
            {/* Kolom Kanan: Pengaturan Status Publikasi */}
            <div className="w-72 flex flex-col justify-start items-start gap-6 overflow-hidden">
              
              {/* Status & Kontrol Publikasi */}
              <div className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Status publikasi</div>
                </div>
                
                <div className="px-2.5 py-1 bg-emerald-50 rounded-md flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-emerald-700 text-xs font-semibold font-['Inter'] leading-4">Terbit</div>
                </div>
                <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">
                  Nusa Digital · LWG-101<br/>Terbit 5 Oktober 2026<br/>24 lamaran masuk
                </div>
                
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Publikasi</div>
                  <div className="self-stretch min-h-11 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden cursor-pointer">
                    <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Terbit di katalog</div>
                    <div className="size-4 relative overflow-hidden">
                      <div className="w-2 h-1 left-[4px] top-[6px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
                    </div>
                  </div>
                </div>
                
                <div className="self-stretch px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
                  <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Pratinjau lowongan</div>
                </div>
                <div className="self-stretch px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
                  <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Tutup lowongan</div>
                </div>
                <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Tutup untuk menghentikan lamaran baru tanpa menghapus data seleksi.</div>
              </div>
              
              {/* Info Tambahan */}
              <div className="self-stretch p-4 bg-indigo-50 rounded-lg flex justify-start items-start gap-3 overflow-hidden">
                <div className="size-4 relative overflow-hidden shrink-0">
                  <div className="size-3.5 left-[1.50px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-blue-600" />
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-1 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Untuk lowongan baru</div>
                  <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Pilih Buat lowongan baru, isi formulir ini, lalu terbitkan atau simpan sebagai draf. Pada mode edit, perubahan langsung memperbarui lowongan yang dipilih.</div>
                </div>
              </div>
              
              {/* Arsip */}
              <div className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Arsipkan lowongan</div>
                </div>
                <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Lowongan disembunyikan dari katalog. Riwayat dan data lamaran tetap tersedia.</div>
                <div className="self-stretch px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
                  <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Arsipkan</div>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Teks Footer */}
          <div className="self-stretch justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4">KerjaYuk · Data contoh untuk ilustrasi · 7 Oktober 2026</div>
        </div>
      </div>
    </div>
  );
}