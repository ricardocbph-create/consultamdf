import { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';

interface WhatsAppModalProps {
  message: string;
  onSend: (phone: string | null) => void;
  onClose: () => void;
}

export default function WhatsAppModal({ message, onSend, onClose }: WhatsAppModalProps) {
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleDirectSend = () => {
    onSend(null);
  };

  const handlePhoneSend = () => {
    const digits = phone.replace(/\D/g, '');
    onSend(digits || null);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-green-600 text-white flex items-center justify-center">
              <MessageCircle size={18} />
            </div>
            <h3 className="font-bold text-slate-800">Enviar pelo WhatsApp</h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 transition-colors">
            <X size={22} />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
              Mensagem preparada
            </p>
            <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">{message}</p>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 block mb-1.5">
              Telefone do cliente (opcional)
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Ex: 5511999999999 (país + DDD + número)"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
            />
            <p className="text-xs text-slate-400 mt-1">
              Com código do país. Deixe vazio para escolher a conversa no WhatsApp.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={handlePhoneSend}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-600 text-white font-medium text-sm hover:bg-green-500 transition-colors"
            >
              <MessageCircle size={18} />
              {phone ? 'Abrir conversa com o telefone informado' : 'Abrir WhatsApp para escolher conversa'}
            </button>
            <button
              onClick={handleDirectSend}
              className="text-xs text-slate-500 hover:text-slate-700 transition-colors py-1"
            >
              Enviar sem telefone (escolher conversa manualmente)
            </button>
          </div>

          <p className="text-xs text-slate-400 text-center">
            A mensagem será aberta no WhatsApp. Confirme o envio manualmente.
            A imagem não é anexada automaticamente — use "Compartilhar foto" separadamente.
          </p>
        </div>
      </div>
    </div>
  );
}
