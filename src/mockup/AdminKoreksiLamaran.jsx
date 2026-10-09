import React from 'react';

export default function AdminKoreksiLamaran() {
  return (
    <div className="w-full min-h-screen relative bg-slate-50 flex flex-col justify-start items-start overflow-hidden">
      
      {/* ========================================= */}
      {/* === 1. NAVBAR (Bilah Aplikasi Atas) ====== */}
      {/* ========================================= */}
      <div className="self-stretch h-20 px-8 bg-white border-b border-slate-200 flex justify-between items-center overflow-hidden">
        
        {/* Logo */}
        <div className="flex justify-start items-center gap-2.5 overflow-hidden">
          <div className="w-8 h-8 bg-blue-600 rounded-[10px] flex justify-center items-center overflow-hidden">
            <div className="w-5 h-5 relative overflow-hidden">
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
          <div className="w-4 h-4 relative overflow-hidden">
            <div className="w-3.5 h-3.5 left-[2.25px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
          </div>
          <div className="w-9 h-9 bg-indigo-50 rounded-[100px] flex justify-center items-center overflow-hidden">
            <div className="justify-start text-blue-600 text-sm font-bold font-['Inter'] leading-5">SW</div>
          </div>
          <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Sari Wulandari</div>
          <div className="w-4 h-4 relative overflow-hidden">
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
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-3.5 h-3.5 left-[2.25px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
            <div className="flex-1 justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Ringkasan</div>
          </div>
          
          {/* Menu Aktif: Tinjauan Lamaran */}
          <div className="self-stretch p-3 bg-indigo-50 rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer">
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-3 h-3.5 left-[3px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-blue-600" />
            </div>
            <div className="flex-1 justify-start text-blue-600 text-sm font-semibold font-['Inter'] leading-5">Tinjauan lamaran</div>
          </div>
          
          <div className="self-stretch p-3 bg-white rounded-lg flex justify-start items-center gap-3 overflow-hidden cursor-pointer hover:bg-slate-50">
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-3.5 h-3.5 left-[1.50px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
            <div className="flex-1 justify-start text-slate-500 text-sm font-medium font-['Inter'] leading-5">Pengguna</div>
          </div>
          
          <div className="self-stretch h-px bg-slate-200" />
          
          <div className="self-stretch p-3 flex justify-start items-start gap-3 overflow-hidden cursor-pointer hover:bg-slate-50">
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-3.5 h-3.5 left-[1.50px] top-[1.50px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
            <div className="flex-1 justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Pusat bantuan</div>
          </div>
          
          <div className="self-stretch p-3 flex justify-start items-start gap-3 overflow-hidden cursor-pointer hover:bg-slate-50">
            <div className="w-4 h-4 relative overflow-hidden">
              <div className="w-3.5 h-3.5 left-[2.25px] top-[2.25px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
            <div className="flex-1 justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Keluar</div>
          </div>
          
          <div className="self-stretch p-4 bg-slate-50 rounded-lg flex flex-col justify-start items-start gap-2 overflow-hidden mt-auto">
            <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-4">Akses administrator</div>
            <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Setiap koreksi dicatat untuk menjaga riwayat tetap transparan.</div>
          </div>
        </div>

        {/* ========================================= */}
        {/* === 3. MAIN CONTENT (Halaman Dasbor) ===== */}
        {/* ========================================= */}
        <div className="flex-1 p-10 flex flex-col justify-start items-start gap-6 overflow-hidden">
          
          {/* Header Konten */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
            <div className="self-stretch justify-start text-slate-500 text-xs font-medium font-['Inter'] leading-4">ADMIN / TINJAUAN</div>
            <div className="self-stretch flex justify-start items-center gap-6 overflow-hidden">
              <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                <div className="self-stretch justify-start text-blue-950 text-3xl font-bold font-['Inter'] leading-9">Tinjauan lamaran</div>
                <div className="self-stretch justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Pantau informasi dan riwayat lamaran di satu tempat.</div>
              </div>
            </div>
          </div>
          
          {/* Tabel Daftar Lamaran Terpilih */}
          <div className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
              <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Lamaran terpilih</div>
            </div>
            
            <div className="self-stretch bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start overflow-hidden">
              {/* Header Tabel */}
              <div className="self-stretch px-4 py-3.5 bg-slate-50 flex justify-start items-start gap-3.5 overflow-hidden">
                <div className="flex-1 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Pelamar</div>
                </div>
                <div className="flex-1 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Lowongan</div>
                </div>
                <div className="flex-1 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Perusahaan</div>
                </div>
                <div className="flex-1 flex justify-start items-start overflow-hidden">
                  <div className="flex-1 justify-start text-slate-500 text-xs font-semibold font-['Inter'] leading-4">Status</div>
                </div>
              </div>
              
              {/* Baris 1: Nadia Putri (Ditolak) */}
              <div className="self-stretch min-h-20 px-4 py-4 border-t border-slate-200 flex justify-start items-center gap-3.5 overflow-hidden cursor-pointer hover:bg-slate-50">
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Nadia Putri</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Magang Data Analyst</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5">Orbit Analitika</div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
                  <div className="px-2.5 py-1 bg-rose-50 rounded-md flex justify-start items-start overflow-hidden">
                    <div className="justify-start text-rose-700 text-xs font-semibold font-['Inter'] leading-4">Ditolak</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Informasi Seleksi */}
          <div className="self-stretch p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start gap-5 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
              <div className="self-stretch justify-start text-blue-950 text-lg font-semibold font-['Inter'] leading-7">Informasi seleksi</div>
            </div>
            <div className="self-stretch justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Terkirim → Dibaca → Diproses → Diterima / Ditolak</div>
            <div className="self-stretch justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">Perubahan status dan catatan evaluasi disimpan dalam riwayat lamaran.</div>
          </div>
          
          {/* Teks Footer */}
          <div className="self-stretch justify-start text-slate-400 text-xs font-normal font-['Inter'] leading-4 mt-auto">
            KerjaYuk · Data contoh untuk ilustrasi · 7 Oktober 2026
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* === 4. MODAL OVERLAY (Koreksi Lamaran) ==== */}
      {/* ========================================= */}
      <div className="absolute inset-0 bg-blue-950/50 z-10 flex justify-center items-center">
        <div className="w-[640px] p-8 bg-white rounded-2xl shadow-[0px_16px_48px_0px_rgba(20,46,88,0.15)] flex flex-col justify-start items-start gap-6 overflow-hidden">
          
          {/* Header Modal */}
          <div className="self-stretch flex justify-start items-start gap-5 overflow-hidden">
            <div className="flex-1 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
              <div className="self-stretch justify-start text-blue-950 text-2xl font-bold font-['Inter'] leading-8">Koreksi status lamaran</div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Nadia Putri · Orbit Analitika · Magang Data Analyst · APL-203</div>
            </div>
            <div className="w-5 h-5 relative overflow-hidden cursor-pointer hover:opacity-70">
              <div className="w-2.5 h-2.5 left-[5px] top-[5px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-slate-500" />
            </div>
          </div>
          
          {/* Indikator Waktu & Perubahan Status */}
          <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Sebelum koreksi · 7 Oktober 2026, 09.30</div>
          <div className="self-stretch flex justify-start items-center gap-4 overflow-hidden">
            <div className="px-2.5 py-1 bg-rose-50 rounded-md flex justify-start items-start overflow-hidden">
              <div className="justify-start text-rose-700 text-xs font-semibold font-['Inter'] leading-4">Ditolak</div>
            </div>
            <div className="justify-start text-slate-500 text-sm font-normal font-['Inter'] leading-5">→</div>
            <div className="px-2.5 py-1 bg-violet-100 rounded-md flex justify-start items-start overflow-hidden">
              <div className="justify-start text-purple-800 text-xs font-semibold font-['Inter'] leading-4">Diproses</div>
            </div>
          </div>
          
          {/* Form Input: Catatan Koreksi */}
          <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
            <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Catatan koreksi *</div>
            <div className="self-stretch min-h-28 p-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-start items-start gap-2 overflow-hidden">
              <div className="flex-1 justify-start text-blue-950 text-sm font-normal font-['Inter'] leading-5">Koreksi salah klik oleh recruiter</div>
            </div>
            <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">Wajib diisi. Catatan ditampilkan pada riwayat pelamar dan log aktivitas admin.</div>
          </div>
          
          <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-4">
            Catatan tidak boleh kosong. Penyimpanan ditolak jika hanya berisi spasi.
          </div>
          
          {/* Banner Peringatan Koreksi Admin */}
          <div className="self-stretch p-4 bg-yellow-50 rounded-lg flex justify-start items-start gap-3 overflow-hidden">
            <div className="w-4 h-4 relative overflow-hidden mt-0.5 shrink-0">
              <div className="w-4 h-3.5 left-[1.49px] top-[2.24px] absolute outline outline-[1.70px] outline-offset-[-0.85px] outline-yellow-700" />
            </div>
            <div className="flex-1 flex flex-col justify-start items-start gap-1 overflow-hidden">
              <div className="self-stretch justify-start text-blue-950 text-xs font-semibold font-['Inter'] leading-5">Riwayat sebelumnya tetap tersimpan</div>
              <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter'] leading-5">Penolakan oleh Dewi Anggraini pada 6 Oktober tidak dihapus. Koreksi dicatat sebagai peristiwa baru oleh Sari Wulandari dan status kembali menjadi Diproses.</div>
            </div>
          </div>
          
          {/* Konfirmasi Persetujuan */}
          <div className="self-stretch flex justify-start items-start gap-2 overflow-hidden">
            <div className="flex-1 justify-start text-blue-950 text-xs font-normal font-['Inter'] leading-5 flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked readOnly className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
              <span>Saya telah memeriksa alasan koreksi dan lamaran yang dipilih.</span>
            </div>
          </div>
          
          {/* Tombol Aksi */}
          <div className="self-stretch flex justify-end items-start gap-3 overflow-hidden mt-2">
            <div className="px-4 py-2.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-slate-50">
              <div className="justify-start text-blue-950 text-sm font-semibold font-['Inter'] leading-5">Batal</div>
            </div>
            {/* Tombol Primary (Simpan) */}
            <div className="px-4 py-2.5 bg-blue-600 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/0 flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-blue-700">
              <div className="justify-start text-white text-sm font-semibold font-['Inter'] leading-5">Simpan koreksi</div>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}