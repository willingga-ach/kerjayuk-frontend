// KerjaYuk — Auth Context: menyimpan sesi user (JWT + profil)
import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { api, setToken, getToken } from '../lib/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('kerjayuk_user')) || null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(!!getToken());

  // Validasi sesi tersimpan saat pertama kali dibuka
  useEffect(() => {
    if (!getToken()) {
      setLoading(false);
      return;
    }
    api('/auth/me')
      .then((d) => {
        setUser(d.user);
        localStorage.setItem('kerjayuk_user', JSON.stringify(d.user));
      })
      .catch(() => {
        setToken(null);
        localStorage.removeItem('kerjayuk_user');
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const login = useCallback(async (email, password) => {
    const d = await api('/auth/login', { method: 'POST', body: { email, password } });
    setToken(d.token);
    localStorage.setItem('kerjayuk_user', JSON.stringify(d.user));
    setUser(d.user);
    return d.user;
  }, []);

  const register = useCallback(async (payload) => {
    return api('/auth/register', { method: 'POST', body: payload });
  }, []);

  const logout = useCallback(async () => {
    try {
      await api('/auth/logout', { method: 'POST' }); // AC-3: revoke token_version
    } catch {
      /* tetap keluar walau panggilan gagal */
    }
    setToken(null);
    localStorage.removeItem('kerjayuk_user');
    setUser(null);
  }, []);

  // 401 dari panggilan API mana pun -> paksa keluar
  useEffect(() => {
    const onUnauthorized = () => setUser(null);
    window.addEventListener('kerjayuk:unauthorized', onUnauthorized);
    return () => window.removeEventListener('kerjayuk:unauthorized', onUnauthorized);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
