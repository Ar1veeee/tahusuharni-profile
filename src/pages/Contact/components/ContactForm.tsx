import React, { useState, useEffect } from 'react';
import { Send, Sparkles, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Auto-refresh setelah 2 detik jika sukses
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 2000); // 2 detik

      return () => clearTimeout(timer); // Cleanup
    }
  }, [submitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError('Konfigurasi email belum lengkap.');
      return;
    }

    setLoading(true);
    setError('');
    setSubmitted(false);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Gagal mengirim. Coba lagi atau hubungi WA kami.');
      console.error('EmailJS Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/20">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="text-amber-500" size={24} />
        <h3 className="text-2xl font-bold text-gray-900">Kirim Pesan</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nama kamu siapa?"
          required
          className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border border-amber-200 rounded-2xl focus:ring-4 focus:ring-amber-300 focus:border-amber-400 transition-all placeholder-gray-500"
          disabled={loading}
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email aktif ya!"
          required
          className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border border-amber-200 rounded-2xl focus:ring-4 focus:ring-amber-300 focus:border-amber-400 transition-all placeholder-gray-500"
          disabled={loading}
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Mau tanya apa? Atau pesan langsung?"
          required
          className="w-full px-5 py-4 bg-white/50 backdrop-blur-sm border border-amber-200 rounded-2xl focus:ring-4 focus:ring-amber-300 focus:border-amber-400 transition-all placeholder-gray-500 resize-none"
          disabled={loading}
        />

        <button
          type="submit"
          disabled={loading || submitted}
          className="w-full py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Mengirim...
            </>
          ) : submitted ? (
            <>
              <CheckCircle size={22} />
              Terkirim!
            </>
          ) : (
            <>
              <Send size={22} className="group-hover:translate-x-1 transition-transform" />
              Kirim Pesan
            </>
          )}
        </button>
      </form>

      {/* Notifikasi Sukses */}
      {submitted && (
        <div className="mt-6 p-4 bg-gradient-to-r from-emerald-400 to-teal-500 text-white rounded-2xl text-center font-bold">
          <CheckCircle size={20} className="inline-block mb-2 mr-2" />
          Pesan terkirim! Kami balas dalam 24 jam.
          <p className="text-xs mt-2 opacity-80">Halaman akan refresh dalam 2 detik...</p>
        </div>
      )}

      {/* Notifikasi Error */}
      {error && (
        <div className="mt-6 p-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-2xl text-center font-bold animate-pulse">
          {error}
        </div>
      )}
    </div>
  );
};