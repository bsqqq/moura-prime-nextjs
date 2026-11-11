# Moura Prime Empreendimentos — site do terreno (Next.js)

Site em Next.js (App Router), gerado como página estática (SSG/static export) —
todo o conteúdo é renderizado em HTML no build, então ele é 100% indexável pelo
Google e por qualquer outro buscador, com ou sem JavaScript habilitado no
navegador de quem acessa. O JavaScript só é usado para as animações
(reveal ao rolar, contadores, o desenho do polígono do terreno etc.) — é
puro "tempero" visual por cima do conteúdo, nunca a fonte do conteúdo.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Gerando o site para publicar

```bash
npm run build
```

Isso cria a pasta `out/` com HTML, CSS, JS e imagens 100% estáticos — pode
subir essa pasta em qualquer hospedagem (Hostgator, cPanel, Netlify,
GitHub Pages, S3, etc.) ou, mais simples ainda, publicar direto no
**Vercel** (empresa criadora do Next.js, tem plano gratuito e é a forma
mais simples: conecte o repositório e o deploy acontece sozinho a cada
alteração).

## Antes de publicar de verdade, ajuste:

1. **Domínio real**: troque `https://www.mouraprimeempreendimentos.com.br`
   pelo domínio definitivo em três arquivos:
   - `app/layout.js` (constante `SITE_URL`, usada nas tags de SEO/Open Graph)
   - `public/robots.txt` (linha `Sitemap:`)
   - `public/sitemap.xml` (tag `<loc>`)
2. **Valor do terreno**: hoje o site mostra "Valor sob consulta" em vários
   pontos — se um dia quiser exibir um valor fixo, edite as seções
   `Negociacao()` e o card de preço em `app/page.js`.
3. **Fotos reais**: as ilustrações usadas (ícones, o polígono do terreno)
   foram desenhadas em SVG a partir dos dados reais do levantamento
   topográfico, sem depender de fotos de banco de imagens (evita problemas
   de direitos autorais e links quebrados). Se quiser, é fácil substituir
   ou completar com fotos reais do terreno/região: basta colocar os
   arquivos em `public/` e referenciá-los em `app/page.js`.

## Por que isso resolve a indexação no Google

- Cada seção (ficha técnica, localização, potencial de uso, infraestrutura,
  negociação, documentação, contato) é texto de verdade no HTML gerado no
  build (`npm run build` → `out/index.html`), não é montado via JavaScript
  depois que a página carrega.
- `app/layout.js` define título, descrição, Open Graph, Twitter Card e um
  bloco de dados estruturados (JSON-LD, schema.org `RealEstateListing`) —
  o formato que o Google usa para entender que a página é um anúncio de
  imóvel e eventualmente exibir informações mais ricas no resultado de
  busca.
- `public/robots.txt` libera a indexação e aponta para `public/sitemap.xml`,
  que lista a URL da página para o Google rastrear.

## Estrutura

```
app/
  layout.js      → <head>, fontes, metadata de SEO, JSON-LD
  page.js        → todo o conteúdo da página (Server Component)
  globals.css    → design system (cores, tipografia, layout, animações)
components/
  Icons.js       → sprite com os ícones em SVG usados na página
  ScrollFX.js    → animações de rolagem (Client Component)
public/
  moura-prime-logo.webp, moura-prime-icon.webp → logomarca
  robots.txt, sitemap.xml
```
