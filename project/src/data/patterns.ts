export interface Pattern {
  id: number;
  nomeFabrica: string | null;
  nomeFlaviense: string;
  fornecedor: string;
  similares: string[];
  foto: string | null;
}

// Base de dados local de equivalências de padrões MDF Flaviense.
//
// Campos:
//   nomeFabrica   — "Nome na Fábrica" conforme página 1 do PDF
//   nomeFlaviense — nome do padrão Flaviense (resultado principal)
//   fornecedor    — fornecedor do padrão Flaviense
//   similares     — materiais similares para busca (páginas 2 e 3 do PDF)
//   foto          — caminho local da imagem em public/fotos/ ou null
//
// Para adicionar fotos: coloque o arquivo em public/fotos/ e preencha
// o campo "foto" com o caminho, ex: "/fotos/doce-de-leite.jpg"
export const patterns: Pattern[] = [
  {
    id: 1,
    nomeFabrica: "Imbuia",
    nomeFlaviense: "Imbuia Paraná",
    fornecedor: "Sudati",
    similares: ["", "ESCARLATE", "IMBUIA", "IMBUIA REAL", "CABIUANA", "IMBUIA"],
    foto: null
  },
  {
    id: 2,
    nomeFabrica: "Nogueira Boreal",
    nomeFlaviense: "Boreal",
    fornecedor: "Fibraplac",
    similares: ["CARVALHO MONIQUE", "AMEIXA NEGRA", "ALABAMA", "SOLANUM", "FREIJÓ NATURA", "NOGUEIRA ITALIA"],
    foto: null
  },
  {
    id: 3,
    nomeFabrica: "Acácia Carmel",
    nomeFlaviense: "Caramelo",
    fornecedor: "Arauco",
    similares: ["ITAPUA", "ACACIA CARMEL", "SAVANA", "LOURO FREIJÓ GRANN", "SERRANO", ""],
    foto: null
  },
  {
    id: 4,
    nomeFabrica: "Freijó",
    nomeFlaviense: "Freijó Carioca",
    fornecedor: "Fibraplac",
    similares: ["NOGUEIRA ASTI", "FREIJÓ", "", "FRASSINO ALMENDRA", "FREIJÓ NATURA", "ITAÚBA"],
    foto: null
  },
  {
    id: 5,
    nomeFabrica: "Corazzi",
    nomeFlaviense: "Coração Latino",
    fornecedor: "Sudati",
    similares: ["LARNACA", "JEQUITIBATREND", "SAVANA", "GENGIBRE", "", "CARVALHO LINO"],
    foto: null
  },
  {
    id: 6,
    nomeFabrica: "Itauba",
    nomeFlaviense: "Itaúba Wood",
    fornecedor: "Sudati",
    similares: ["FREIJÓ PURO", "", "FREIJÓ", "", "NOGUEIRA NATIVA", "ITAÚBA"],
    foto: null
  },
  {
    id: 7,
    nomeFabrica: "Amêndoa Suave",
    nomeFlaviense: "Amêndoa",
    fornecedor: "Fibraplac",
    similares: ["TEKA SOHO", "ATLANTICA", "CURUPIXA", "PEROBA", "AMENDOA SUAVE", "PALISSANDRO DOURADO"],
    foto: null
  },
  {
    id: 8,
    nomeFabrica: "Tauari",
    nomeFlaviense: "Tauari Wood",
    fornecedor: "Sudati",
    similares: ["ITAPUA", "CUMARU TREND", "FRESNO AVEIRO", "GENGIBRE", "SERRANO", "CORAZZI"],
    foto: null
  },
  {
    id: 9,
    nomeFabrica: "Carvalho Tropical",
    nomeFlaviense: "Tropical",
    fornecedor: "Fibraplac",
    similares: ["CARVALHO MALVA", "CARVALHO", "NOGUEIRA AMBAR", "CARVALHO TREVISO", "CARVALHO TROPICAL", "CARVALHO LINO"],
    foto: null
  },
  {
    id: 10,
    nomeFabrica: "Carvalho Dian",
    nomeFlaviense: "Cardin",
    fornecedor: "Duratex",
    similares: ["CARVALHO DIAN", "CARVALHO", "CARVALHO NATURAL", "CARVALHO JAPANDI", "CARVALHO TROPICAL", "CARVALHO NATURAL"],
    foto: null
  },
  {
    id: 11,
    nomeFabrica: "Carvalho Natural",
    nomeFlaviense: "Carvalho Wood",
    fornecedor: "Sudati",
    similares: ["CARVALHO LIR", "CILIEGIO", "CARVALHO NATURAL", "CARVALHO TREVISO", "CARVALHO LATINO", "IMBIREMA"],
    foto: null
  },
  {
    id: 12,
    nomeFabrica: "Noce Mare",
    nomeFlaviense: "Mare Mare",
    fornecedor: "Duratex",
    similares: ["NOCE MARE", "CASTANHEIRA NATURAL", "ARAUCARIA", "CHIARO VEL", "CARVALHO LATINO", "CARVALHO MILENAR"],
    foto: null
  },
  {
    id: 13,
    nomeFabrica: "Preto TR",
    nomeFlaviense: "Preto Trama",
    fornecedor: "Fibraplac",
    similares: ["PRETO", "PRETO", "NERO", "PRETO", "PRETO TRAMA", "ARGEL"],
    foto: null
  },
  {
    id: 14,
    nomeFabrica: "Versato",
    nomeFlaviense: "Cinza Versátil",
    fornecedor: "Fibraplac",
    similares: ["GRAFITE", "GRAFITO", "GRAFITE", "CHUMBO", "VERSATO", "MANHATAN"],
    foto: null
  },
  {
    id: 15,
    nomeFabrica: "Mocca",
    nomeFlaviense: "Cocada",
    fornecedor: "Fibraplac",
    similares: ["CACÃO", "GIANDUIA", "TERRINO", "PECAN VEL", "MOCCA", "SANTIAGO"],
    foto: null
  },
  {
    id: 16,
    nomeFabrica: "Pana",
    nomeFlaviense: "Doce de Leite",
    fornecedor: "Fibraplac",
    similares: ["TITANEO TRAMA", "FRAPÊ", "AREIA", "NUDE VEL", "PANNA", "PALMAS"],
    foto: null
  },
  {
    id: 17,
    nomeFabrica: "Asti",
    nomeFlaviense: "Pratinha",
    fornecedor: "Sudati",
    similares: ["CINZA FOSSIL", "BETON", "CINZA PERFEITO", "CINZA COBALTO", "CINZA CALCARIO", "ASTI"],
    foto: null
  },
  {
    id: 18,
    nomeFabrica: "Oceano Liso",
    nomeFlaviense: "Azul Decor",
    fornecedor: "Fibraplac",
    similares: ["AZUL SECRETO", "OCEANO", "AZUL ARDOSIA", "AZUL VEL", "OCEANO", "PIPA"],
    foto: null
  },
  {
    id: 19,
    nomeFabrica: "Amazônia",
    nomeFlaviense: "Verde Premium",
    fornecedor: "Sudati",
    similares: ["VERDE FLORESTA", "SALVIA", "ERVA MATE", "", "RAPHIA", "AMAZONIA"],
    foto: null
  },
  {
    id: 20,
    nomeFabrica: "Sakura Liso",
    nomeFlaviense: "Salmão Sakura",
    fornecedor: "Fibraplac",
    similares: ["ROSA INFINITO", "SAL ROSA", "ROSA MILKSHAKE", "MILLENAL", "SAKURA", "MARAJO"],
    foto: null
  },
  {
    id: 21,
    nomeFabrica: "Linho Belga",
    nomeFlaviense: "Linho Top",
    fornecedor: "Duratex",
    similares: ["LINHO BELGA", "LINHO COURO", "MILANO", "LANA", "LINHO FEDI", "LINA"],
    foto: null
  },
  {
    id: 22,
    nomeFabrica: "Vulcano",
    nomeFlaviense: "Pedra Branca Premium",
    fornecedor: "Sudati",
    similares: ["THASSO", "ATENNA", "QUARTZO", "VOLASKAS", "", "VULCANO"],
    foto: null
  },
  {
    id: 23,
    nomeFabrica: "Neve Argentina",
    nomeFlaviense: "Off White",
    fornecedor: "Fibraplac",
    similares: ["OFF WHITE", "CRISTALINA", "LUME/BRISA", "CINZA ARGILA", "SAARA", ""],
    foto: null
  },
  {
    id: 24,
    nomeFabrica: "Branco Larissa",
    nomeFlaviense: "Branco Nobre",
    fornecedor: "Fibraplac",
    similares: ["BRANCO DIAMANTE", "", "BRANCO MAX", "BRANCO DESIGN", "LARISSA", "JERI"],
    foto: null
  }
];
