// KerjaYuk — Klien API terpusat
// Semua fetch ke backend lewat sini: token otomatis dilampirkan,
// 401 otomatis memicu logout (SesiBerakhir).
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export function getToken() {
  return localStorage.getItem('kerjayuk_token');
}

export function setToken(token) {
  if (token) localStorage.setItem('kerjayuk_token', token);
  else localStorage.removeItem('kerjayuk_token');
}

export class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

export async function api(path, { method = 'GET', body } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  let data = {};
  try {
    data = await res.json();
  } catch {
    /* respons tanpa body */
  }

  // 401 = token hilang/kedaluwarsa/dicabut (AC-3) -> bersihkan sesi
  if (res.status === 401) {
    setToken(null);
    localStorage.removeItem('kerjayuk_user');
    if (!path.startsWith('/auth/login')) {
      window.dispatchEvent(new CustomEvent('kerjayuk:unauthorized'));
    }
  }

  if (!res.ok) {
    throw new ApiError(res.status, data.error || `Terjadi kesalahan (${res.status})`);
  }
  return data;
}
