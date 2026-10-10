import { useMemo, useState, useCallback } from 'react';
import {
  Search,
  Copy,
  Check,
  PackageSearch,
  ImageOff,
  Download,
  Share2,
  ZoomIn,
  MessageCircle,
} from 'lucide-react';
import { patterns, type Pattern } from '@/data/patterns';
import { matchesQuery, normalize } from '@/utils/search';
import PhotoModal from '@/components/PhotoModal';
import WhatsAppModal from '@/components/WhatsAppModal';

export default function App() {
  const [query, setQuery] = useState('');
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [zoomPhoto, setZoomPhoto] = useState<{ src: string; alt: string } | null>(null);
  const [whatsappModal, setWhatsappModal] = useState<{ pattern: Pattern; matchedRef: string } | null>(null);
  const [sharedPhotoId, setSharedPhotoId] = useState<number | null>(null);

  const results = useMemo<Pattern[]>(() => {
    const q = query.trim();
    if (!q) return [];
    return patterns
      .filter(
        (p) =>
          p.similares.some((s) => matchesQuery(q, s)) ||
          matchesQuery(q, p.nomeFlaviense) ||
          (p.nomeFabrica !== null && matchesQuery(q, p.nomeFabrica))
      )
      .sort((a, b) => {
        const normalizedQuery = normalize(q);
        const getPriority = (pattern: Pattern): number => {
          const factoryName = pattern.nomeFabrica ? normalize(pattern.nomeFabrica) : '';
          const flavienseName = normalize(pattern.nomeFlaviense);

          if (factoryName === normalizedQuery) return 0;
          if (flavienseName === normalizedQuery) return 1;
          if (factoryName.includes(normalizedQuery)) return 2;
          if (flavienseName.includes(normalizedQuery)) return 3;
          return 4;
        };

        return getPriority(a) - getPriority(b);
      });
  }, [query]);

    const buildMessage = useCallback((p: Pattern, matchedRef: string): string => {
    const refText = matchedRef || query.trim();
    const fotoLink = p.foto ? `${window.location.origin}${p.foto}` : '';
    return (
      `Olá! Você solicitou a referência ${refText}.\n` +
      `Como alternativa, temos o padrão Flaviense ${p.nomeFlaviense}, do fornecedor, com tonalidade e acabamento similares.\n` +
      (fotoLink ? `Segue a foto para sua avaliação: ${fotoLink}\n` : '') +
      `A tonalidade pode variar conforme a tela.`
    );
  }, [query]);

  const handleCopy = useCallback(async (p: Pattern, matchedRef: string) => {
    const text =
      `Olá! Para a referência que você solicitou, temos esta opção Flaviense:\n\n` +
      `Padrão: ${p.nomeFlaviense}\n` +
      `Fornecedor: ${p.fornecedor}\n\n` +
      `Segue a imagem para você conferir e aprovar. A tonalidade pode variar conforme a tela; se necessário, podemos confirmar pela amostra física.`;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(p.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // ignore
    }
  }, []);

  const handleWhatsAppOpen = useCallback((pattern: Pattern, matchedRef: string) => {
    setWhatsappModal({ pattern, matchedRef });
  }, []);

    const handleWhatsAppSend = useCallback(
    (phone: string | null) => {
      if (!whatsappModal) return;
      const msg = buildMessage(whatsappModal.pattern, whatsappModal.matchedRef);
      const encoded = encodeURIComponent(msg);
      const fullPhone = phone && phone.length <= 11 ? `55${phone}` : phone;
      const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

      const url = isMobile
        ? fullPhone
          ? `https://wa.me/${fullPhone}?text=${encoded}`
          : `https://wa.me/?text=${encoded}`
        : `https://web.whatsapp.com/send?${fullPhone ? `phone=${fullPhone}&` : ''}text=${encoded}`;

      window.open(url, 'whatsapp');
      setWhatsappModal(null);
    },
    [whatsappModal, buildMessage]
  );

  const handleSharePhoto = useCallback(async (p: Pattern) => {
    if (!p.foto) return;
    const photoPath = p.foto;
    setSharedPhotoId(p.id);
    setTimeout(() => setSharedPhotoId(null), 3000);

    try {
      const response = await fetch(photoPath);
      const blob = await response.blob();
      const file = new File([blob], `${p.nomeFlaviense}.jpg`, { type: blob.type });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          text: `Padrão Flaviense: ${p.nomeFlaviense} — Fornecedor: ${p.fornecedor}`,
        });
        return;
      }
    } catch {
      // fall through to download
    }

    // Fallback: download the photo
    const link = document.createElement('a');
    link.href = photoPath;
    link.download = `${p.nomeFlaviense}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const hasSearched = query.trim().length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 text-slate-800">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0">
            <PackageSearch size={22} />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">Equivalências MDF</h1>
            <p className="text-xs text-slate-500 leading-tight">Consulta de padrões Flaviense</p>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Digite a referência de fábrica..."
            className="w-full pl-12 pr-20 py-3.5 rounded-xl border border-slate-300 bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-700 focus:border-transparent transition-all"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-sm font-medium px-2"
            >
              Limpar
            </button>
          )}
        </div>

        {/* Empty states */}
        {hasSearched && results.length === 0 && (
          <div className="text-center py-16">
            <PackageSearch className="mx-auto text-slate-300 mb-3" size={48} />
            <p className="text-slate-500 font-medium">Nenhuma correspondência encontrada</p>
            <p className="text-slate-400 text-sm mt-1">
              Verifique a referência ou cadastre um novo padrão.
            </p>
          </div>
        )}

        {!hasSearched && (
          <div className="text-center py-16">
            <Search className="mx-auto text-slate-300 mb-3" size={48} />
            <p className="text-slate-500 font-medium">Comece digitando uma referência</p>
            <p className="text-slate-400 text-sm mt-1">
              A busca é parcial e ignora maiúsculas e acentos.
            </p>
          </div>
        )}

        {/* Results */}
        <div className="space-y-4">
          {results.map((p) => {
            const matchedRefs = p.similares.filter((s) => s && matchesQuery(query, s));
            const matchedRef = matchedRefs[0] || '';
            return (
              <div
                key={p.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all hover:shadow-md"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Photo — left on desktop, top on mobile */}
                  <div className="sm:w-48 shrink-0 bg-slate-100 relative group">
                    {p.foto ? (
                      <button
                        onClick={() => setZoomPhoto({ src: p.foto as string, alt: p.nomeFlaviense })}
                        className="block w-full"
                        aria-label="Ampliar foto"
                      >
                        <div className="relative aspect-[5/3] overflow-hidden">
                          <img
                            src={p.foto as string}
                            alt={p.nomeFlaviense}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end justify-end p-2">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-md px-2 py-1 text-xs font-medium text-slate-700 flex items-center gap-1">
                              <ZoomIn size={14} /> Ampliar
                            </span>
                          </div>
                        </div>
                      </button>
                    ) : (
                      <div className="aspect-[5/3] flex flex-col items-center justify-center text-slate-400 gap-2">
                        <ImageOff size={36} />
                        <span className="text-xs font-medium">Foto não cadastrada</span>
                      </div>
                    )}
                  </div>

                  {/* Info — right on desktop, below on mobile */}
                  <div className="flex-1 p-4 sm:p-5">
                    {/* 1. Nome Flaviense — destaque principal */}
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                        Padrão Flaviense
                      </span>
                      <h2 className="text-xl font-bold text-slate-800 leading-snug">
                        {p.nomeFlaviense}
                      </h2>
                    </div>

                    {/* 2. Fornecedor */}
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                        Fornecedor Flaviense
                      </span>
                      <p className="text-sm text-slate-700 font-medium">{p.fornecedor}</p>
                    </div>

                    {/* 4. Referências da mesma linha */}
                    {p.similares.some((s) => s) && (
                      <div className="mb-4">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                          Referências da mesma linha
                        </span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {p.similares.filter((s) => s).map((ref, i) => {
                            const isMatched = matchesQuery(query, ref);
                            return (
                              <span
                                key={`${ref}-${i}`}
                                className={`inline-block text-xs font-medium px-2.5 py-1 rounded-md border transition-colors ${
                                  isMatched
                                    ? 'bg-slate-800 text-white border-slate-800'
                                    : 'bg-slate-50 text-slate-600 border-slate-200'
                                }`}
                              >
                                {ref}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* 5. Botões */}
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => handleCopy(p, matchedRef)}
                        className="flex items-center gap-1.5 text-xs font-medium px-3 py-2.5 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors"
                      >
                        {copiedId === p.id ? (
                          <>
                            <Check size={15} /> Copiado
                          </>
                        ) : (
                          <>
                            <Copy size={15} /> Copiar informações
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => handleWhatsAppOpen(p, matchedRef)}
                        className="flex items-center gap-1.5 text-xs font-medium px-3 py-2.5 rounded-lg bg-green-600 text-white hover:bg-green-500 transition-colors"
                      >
                        <MessageCircle size={15} /> Enviar pelo WhatsApp
                      </button>

                      {p.foto && (
                        <button
                          onClick={() => handleSharePhoto(p)}
                          className="flex items-center gap-1.5 text-xs font-medium px-3 py-2.5 rounded-lg bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors"
                        >
                          {sharedPhotoId === p.id ? (
                            <>
                              <Check size={15} /> Compartilhado
                            </>
                          ) : (
                            <>
                              <Share2 size={15} /> Compartilhar foto
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    {sharedPhotoId === p.id && (
                      <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                        <Download size={12} />
                        Se o compartilhamento nativo não abriu, a foto foi baixada. Anexe-a manualmente no WhatsApp.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <footer className="text-center py-6 text-xs text-slate-400">
        {patterns.length} padrões cadastrados
      </footer>

      {/* Modals */}
      {zoomPhoto && (
        <PhotoModal src={zoomPhoto.src} alt={zoomPhoto.alt} onClose={() => setZoomPhoto(null)} />
      )}

      {whatsappModal && (
        <WhatsAppModal
          message={buildMessage(whatsappModal.pattern, whatsappModal.matchedRef)}
          onSend={handleWhatsAppSend}
          onClose={() => setWhatsappModal(null)}
        />
      )}
    </div>
  );
}
