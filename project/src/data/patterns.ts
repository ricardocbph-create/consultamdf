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
//   foto          — caminho da imagem em public/images/ ou null
export const patterns: Pattern[] = [
  {
    id: 1,
    nomeFabrica: "Imbuia",
    nomeFlaviense: "Imbuia Paraná",
    fornecedor: "Sudati",
    similares: ["", "ESCARLATE", "IMBUIA", "IMBUIA REAL", "CABIUANA", "IMBUIA"],
    foto: "/images/01_imbuia_parana.png"
  },
  {
    id: 2,
    nomeFabrica: "Nogueira Boreal",
    nomeFlaviense: "Boreal",
    fornecedor: "Fibraplac",
    similares: ["CARVALHO MONIQUE", "AMEIXA NEGRA", "ALABAMA", "SOLANUM", "FREIJÓ NATURA", "NOGUEIRA ITALIA"],
    foto: "/images/03_boreal.png"
  },
  {
    id: 3,
    nomeFabrica: "Acácia Carmel",
    nomeFlaviense: "Caramelo",
    fornecedor: "Arauco",
    similares: ["ITAPUA", "ACACIA CARMEL", "SAVANA", "LOURO FREIJÓ GRANN", "SERRANO", ""],
    foto: "/images/08_caramelo.png"
  },
  {
    id: 4,
    nomeFabrica: "Freijó",
    nomeFlaviense: "Freijó Carioca",
    fornecedor: "Fibraplac",
    similares: ["NOGUEIRA ASTI", "FREIJÓ", "", "FRASSINO ALMENDRA", "FREIJÓ NATURA", "ITAÚBA"],
    foto: "/images/02_freijo_carioca.png"
  },
  {
    id: 5,
    nomeFabrica: "Corazzi",
    nomeFlaviense: "Coração Latino",
    fornecedor: "Sudati",
    similares: ["LARNACA", "JEQUITIBATREND", "SAVANA", "GENGIBRE", "", "CARVALHO LINO"],
    foto: "/images/05_coracao_latino.png"
  },
  {
    id: 6,
    nomeFabrica: "Itauba",
    nomeFlaviense: "Itaúba Wood",
    fornecedor: "Sudati",
    similares: ["FREIJÓ PURO", "", "FREIJÓ", "", "NOGUEIRA NATIVA", "ITAÚBA"],
    foto: "/images/06_itauba_wood.png"
  },
  {
    id: 7,
    nomeFabrica: "Amêndoa Suave",
    nomeFlaviense: "Amêndoa",
    fornecedor: "Fibraplac",
    similares: ["TEKA SOHO", "ATLANTICA", "CURUPIXA", "PEROBA", "AMENDOA SUAVE", "PALISSANDRO DOURADO"],
    foto: "/images/04_amendoa.png"
  },
  {
    id: 8,
    nomeFabrica: "Tauari",
    nomeFlaviense: "Tauari Wood",
    fornecedor: "Sudati",
    similares: ["ITAPUA", "CUMARU TREND", "FRESNO AVEIRO", "GENGIBRE", "SERRANO", "CORAZZI"],
    foto: "/images/07_tauari_wood.png"
  },
  {
    id: 9,
    nomeFabrica: "Carvalho Tropical",
    nomeFlaviense: "Tropical",
    fornecedor: "Fibraplac",
    similares: ["CARVALHO MALVA", "CARVALHO", "NOGUEIRA AMBAR", "CARVALHO TREVISO", "CARVALHO TROPICAL", "CARVALHO LINO"],
    foto: "/images/09_tropical.png"
  },
  {
    id: 10,
    nomeFabrica: "Carvalho Dian",
    nomeFlaviense: "Cardin",
    fornecedor: "Duratex",
    similares: ["CARVALHO DIAN", "CARVALHO", "CARVALHO NATURAL", "CARVALHO JAPANDI", "CARVALHO TROPICAL", "CARVALHO NATURAL"],
    foto: "/images/12_cardin.png"
  },
  {
    id: 11,
    nomeFabrica: "Carvalho Natural",
    nomeFlaviense: "Carvalho Wood",
    fornecedor: "Sudati",
    similares: ["CARVALHO LIR", "CILIEGIO", "CARVALHO NATURAL", "CARVALHO TREVISO", "CARVALHO LATINO", "IMBIREMA"],
    foto: "/images/10_carvalho_wood.png"
  },
  {
    id: 12,
    nomeFabrica: "Noce Mare",
    nomeFlaviense: "Mare Mare",
    fornecedor: "Duratex",
    similares: ["NOCE MARE", "CASTANHEIRA NATURAL", "ARAUCARIA", "CHIARO VEL", "CARVALHO LATINO", "CARVALHO MILENAR"],
    foto: "/images/11_maremare.png"
  },
  {
    id: 13,
    nomeFabrica: "Preto TR",
    nomeFlaviense: "Preto Trama",
    fornecedor: "Fibraplac",
    similares: ["PRETO", "PRETO", "NERO", "PRETO", "PRETO TRAMA", "ARGEL"],
    foto: "/images/24_preto_trama.png"
  },
  {
    id: 14,
    nomeFabrica: "Versato",
    nomeFlaviense: "Cinza Versátil",
    fornecedor: "Fibraplac",
    similares: ["GRAFITE", "GRAFITO", "GRAFITE", "CHUMBO", "VERSATO", "MANHATAN"],
    foto: "/images/21_cinza_versatil.png"
  },
  {
    id: 15,
    nomeFabrica: "Mocca",
    nomeFlaviense: "Cocada",
    fornecedor: "Fibraplac",
    similares: ["CACÃO", "GIANDUIA", "TERRINO", "PECAN VEL", "MOCCA", "SANTIAGO"],
    foto: "/images/19_cocada.png"
  },
  {
    id: 16,
    nomeFabrica: "Pana",
    nomeFlaviense: "Doce de Leite",
    fornecedor: "Fibraplac",
    similares: ["TITANEO TRAMA", "FRAPÊ", "AREIA", "NUDE VEL", "PANNA", "PALMAS"],
    foto: "/images/18_doce_de_leite.png"
  },
  {
    id: 17,
    nomeFabrica: "Asti",
    nomeFlaviense: "Pratinha",
    fornecedor: "Sudati",
    similares: ["CINZA FOSSIL", "BETON", "CINZA PERFEITO", "CINZA COBALTO", "CINZA CALCARIO", "ASTI"],
    foto: "/images/16_pratinha.png"
  },
  {
    id: 18,
    nomeFabrica: "Oceano Liso",
    nomeFlaviense: "Azul Decor",
    fornecedor: "Fibraplac",
    similares: ["AZUL SECRETO", "OCEANO", "AZUL ARDOSIA", "AZUL VEL", "OCEANO", "PIPA"],
    foto: "/images/22_azul_decor.png"
  },
  {
    id: 19,
    nomeFabrica: "Amazônia",
    nomeFlaviense: "Verde Premium",
    fornecedor: "Sudati",
    similares: ["VERDE FLORESTA", "SALVIA", "ERVA MATE", "", "RAPHIA", "AMAZONIA"],
    foto: "/images/23_verde_premium.png"
  },
  {
    id: 20,
    nomeFabrica: "Sakura Liso",
    nomeFlaviense: "Salmão Sakura",
    fornecedor: "Fibraplac",
    similares: ["ROSA INFINITO", "SAL ROSA", "ROSA MILKSHAKE", "MILLENAL", "SAKURA", "MARAJO"],
    foto: "/images/20_sakura.png"
  },
  {
    id: 21,
    nomeFabrica: "Linho Belga",
    nomeFlaviense: "Linho Top",
    fornecedor: "Duratex",
    similares: ["LINHO BELGA", "LINHO COURO", "MILANO", "LANA", "LINHO FEDI", "LINA"],
    foto: "/images/17_linho_top.png"
  },
  {
    id: 22,
    nomeFabrica: "Vulcano",
    nomeFlaviense: "Pedra Branca Premium",
    fornecedor: "Sudati",
    similares: ["THASSO", "ATENNA", "QUARTZO", "VOLASKAS", "", "VULCANO"],
    foto: "/images/14_pedra_branca.png"
  },
  {
    id: 23,
    nomeFabrica: "Neve Argentina",
    nomeFlaviense: "Off White",
    fornecedor: "Fibraplac",
    similares: ["OFF WHITE", "CRISTALINA", "LUME/BRISA", "CINZA ARGILA", "SAARA", ""],
    foto: "/images/15_off_white.png"
  },
  {
    id: 24,
    nomeFabrica: "Branco Larissa",
    nomeFlaviense: "Branco Nobre",
    fornecedor: "Fibraplac",
    similares: ["BRANCO DIAMANTE", "", "BRANCO MAX", "BRANCO DESIGN", "LARISSA", "JERI"],
    foto: "/images/13_branco_nobre.png"
  }
];
