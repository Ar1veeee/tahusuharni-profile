import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => window.location.reload(), 2000);
      return () => clearTimeout(timer);
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
      setError('Gagal kirim. Coba WA aja yuk!');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl shadow-xl p-6 sm:p-8 border border-white/30 overflow-hidden">
      {/* Floating Sparkles */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-pink-400 rounded-full blur-3xl opacity-30 animate-pulse" />
      
      <div className="flex items-center gap-3 mb-7">
        <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Chat Yuk!</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Siapa nih? 😊"
          required
          className="w-full px-5 py-4 bg-white/60 backdrop-blur-sm border border-amber-200 rounded-2xl focus:ring-4 focus:ring-amber-300 focus:border-amber-500 transition-all placeholder-gray-500 text-gray-800 font-medium"
          disabled={loading}
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email aktif dong!"
          required
          className="w-full px-5 py-4 bg-white/60 backdrop-blur-sm border border-amber-200 rounded-2xl focus:ring-4 focus:ring-amber-300 focus:border-amber-500 transition-all placeholder-gray-500 text-gray-800 font-medium"
          disabled={loading}
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Mau tanya apa? Atau langsung pesen?"
          required
          className="w-full px-5 py-4 bg-white/60 backdrop-blur-sm border border-amber-200 rounded-2xl focus:ring-4 focus:ring-amber-300 focus:border-amber-500 transition-all placeholder-gray-500 text-gray-800 font-medium resize-none"
          disabled={loading}
        />

        <button
          type="submit"
          disabled={loading || submitted}
          className="w-full py-5 bg-gradient-to-r from-amber-500 to-pink-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-60 disabled:scale-100"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Lagi kirim...
            </>
          ) : submitted ? (
            <>
              <CheckCircle size={22} />
              Terkirim! 🎉
            </>
          ) : (
            <>
              <Send size={22} className="group-hover:translate-x-1 transition-transform" />
              Kirim Pesan
            </>
          )}
        </button>
      </form>

      {submitted && (
        <div className="mt-6 p-4 bg-gradient-to-r from-emerald-400 to-teal-500 text-white rounded-2xl text-center font-bold animate-fade-in">
          <CheckCircle size={20} className="inline-block mr-2" />
          Pesan masuk! Kami balas kurang dari 24 jam.
          <p className="text-xs mt-1 opacity-80">Refresh otomatis dalam 2 detik...</p>
        </div>
      )}

      {error && (
        <div className="mt-6 p-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-2xl text-center font-bold animate-pulse">
          {error}
        </div>
      )}
    </div>
  );
};