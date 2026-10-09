export function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function collapseDuplicates(text: string): string {
  return text.replace(/(.)\1+/g, '$1');
}

export function matchesQuery(query: string, text: string): boolean {
  const q = normalize(query);
  const t = normalize(text);
  if (!q) return false;
  if (t.includes(q)) return true;
  // Fallback: tenta correspondência removendo letras duplicadas consecutivas
  // Ex: "Pana" encontra "Panna", "Grafite" encontra "Grafiite"
  return collapseDuplicates(t).includes(collapseDuplicates(q));
}
