import "./globals.css";
import ScrollFX from "../components/ScrollFX";

// As fontes (Fraunces, Inter, IBM Plex Mono) são carregadas via Google Fonts
// no <head> abaixo em vez de next/font, porque o ambiente onde este site foi
// gerado não tem acesso de rede ao Google Fonts para o build "self-host".
// Isso funciona perfeitamente e não afeta o SEO — mas se preferir, dá para
// trocar por next/font/google (self-hosted, zero requisição externa) rodando
// `npm run build` num ambiente com acesso à internet.

// IMPORTANTE: troque este valor pelo domínio definitivo do site assim que
// ele for registrado/publicado — ele é usado nas tags de SEO (canonical,
// Open Graph) e no sitemap.
const SITE_URL = "https://www.mouraprimeempreendimentos.com.br";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Terreno à venda na CE-085, Trairi-CE | 11,53 ha | Moura Prime Empreendimentos",
    template: "%s | Moura Prime Empreendimentos",
  },
  description:
    "11,53 hectares à venda em Miranda III, Trairi-CE, com frente para a CE-085 (Via Estruturante), entre o Complexo do Pecém e as praias de Flecheiras, Mundaú e Guajiru. Água encanada (SISAR) e energia de alta, média e baixa tensão. Aceita permuta por serviços ou materiais de obra.",
  keywords: [
    "terreno à venda Trairi",
    "terreno CE-085",
    "terreno Miranda III Trairi",
    "área comercial litoral oeste Ceará",
    "terreno próximo Pecém",
    "investimento imobiliário Ceará",
    "permuta terreno Ceará",
  ],
  authors: [{ name: "Moura Prime Empreendimentos" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Moura Prime Empreendimentos",
    title: "11,53 ha à venda na CE-085, Trairi-CE | Moura Prime Empreendimentos",
    description:
      "Terreno com matrícula própria, água e energia trifásica disponíveis, entre o Complexo do Pecém e o litoral de Flecheiras, Mundaú e Guajiru. Valor sob consulta — aceita permuta.",
    images: [{ url: "/moura-prime-logo.webp", width: 560, height: 278, alt: "Moura Prime Empreendimentos" }],
  },
  twitter: {
    card: "summary",
    title: "11,53 ha à venda na CE-085, Trairi-CE | Moura Prime Empreendimentos",
    description:
      "Terreno com matrícula própria, água e energia trifásica, entre o Complexo do Pecém e o litoral de Flecheiras, Mundaú e Guajiru.",
    images: ["/moura-prime-logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/moura-prime-icon.webp",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "Terreno de 11,53 ha na CE-085 — Miranda III, Trairi-CE",
  description:
    "Terreno comercial de 11,5276 hectares com frente para a Rodovia Estadual CE-085, em Miranda III, Trairi-CE. Água encanada via SISAR e energia elétrica de alta, média e baixa tensão. Matrícula própria N° 5.420. Aceita permuta por serviços ou materiais de obra.",
  url: SITE_URL,
  image: `${SITE_URL}/moura-prime-logo.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Miranda III, s/n, às margens da CE-085",
    addressLocality: "Trairi",
    addressRegion: "CE",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -3.4416,
    longitude: -39.2892,
  },
  floorSize: {
    "@type": "QuantitativeValue",
    value: "115276",
    unitCode: "MTK",
  },
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      description: "Valor sob consulta",
    },
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "RealEstateAgent",
      name: "Moura Prime Empreendimentos",
      telephone: "+55-85-98659-4653",
      email: "mouraprimeemprendimentos@gmail.com",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <svg className="grain" aria-hidden="true">
          <filter id="n">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#n)" />
        </svg>
        {children}
        <ScrollFX />
      </body>
    </html>
  );
}
