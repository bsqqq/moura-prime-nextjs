import IconSprite from "../components/Icons";

/* ============================================================= topbar */
function Topbar() {
  return (
    <header className="topbar" id="topbar">
      <a href="#hero" className="brand">
        <img src="/moura-prime-icon.webp" width={150} height={41} style={{ height: 30, width: "auto" }} alt="Moura Prime Empreendimentos" />
        <span className="brand-name">Moura Prime</span>
      </a>
      <a className="cta" href="https://wa.me/5585986594653" target="_blank" rel="noopener noreferrer">
        <svg><use href="#i-chat" /></svg> (85) 98659-4653
      </a>
    </header>
  );
}

/* ============================================================= dotnav */
function DotNav() {
  const items = [
    ["hero", "Início"],
    ["ficha", "Terreno"],
    ["local", "Localização"],
    ["potencial", "Potencial"],
    ["infra", "Infraestrutura"],
    ["negociacao", "Negociação"],
    ["doc", "Documentação"],
    ["contato", "Contato"],
  ];
  return (
    <>
      <div className="progress-rail"><div className="progress-fill" id="progressFill" /></div>
      <nav className="dotnav" id="dotnav" aria-label="Navegação da página">
        {items.map(([id, label]) => (
          <a className="dot" data-target={id} href={`#${id}`} key={id}>
            <span className="label">{label}</span><span className="bead" />
          </a>
        ))}
      </nav>
    </>
  );
}

/* ============================================================= hero */
function Hero() {
  return (
    <header className="hero" id="hero">
      <div className="blob blob-a" />
      <div className="blob blob-b" />
      <div className="wrap hero-grid">
        <div>
          <div className="hero-mark reveal is-visible">
            <img
              src="/moura-prime-logo.webp"
              width={560}
              height={278}
              style={{ height: 64, width: "auto" }}
              alt="Moura Prime Empreendimentos — Estrutura sólida para grandes negócios"
              fetchPriority="high"
            />
          </div>
          <h1 className="reveal is-visible">
            <em>Entre o Porto do Pecém e o litoral de Flecheiras,</em>
            11,53 hectares prontos para o seu próximo negócio.
          </h1>
          <p className="hero-sub reveal is-visible reveal-delay-1">
            Terreno com <strong>matrícula própria</strong>, água encanada pelo <strong>SISAR</strong> e energia de{" "}
            <strong>alta, média e baixa tensão</strong> já disponíveis, com frente para a <strong>CE-085</strong> — a
            Via Estruturante que liga o litoral oeste do Ceará ao Complexo Industrial e Portuário do Pecém.
          </p>
          <div className="hero-actions reveal is-visible reveal-delay-2">
            <a className="btn btn-primary" href="https://wa.me/5585986594653" target="_blank" rel="noopener noreferrer">
              <svg><use href="#i-chat" /></svg>Falar no WhatsApp
            </a>
            <a className="btn btn-ghost" href="#ficha">
              <svg><use href="#i-arrow-down" /></svg>Ver ficha técnica
            </a>
          </div>
          <div className="hero-chips reveal is-visible reveal-delay-3">
            <div className="chip"><b>11,5276 ha</b><span>Área total</span></div>
            <div className="chip"><b>1.371,81 m</b><span>Perímetro</span></div>
            <div className="chip"><b>N&deg; 5.420</b><span>Matrícula</span></div>
            <div className="chip"><b>CE-085</b><span>Rodovia</span></div>
          </div>
        </div>

        <div className="hero-art reveal is-visible reveal-delay-2">
          <svg viewBox="0 0 400 500" aria-label="Contorno do perímetro do terreno, conforme levantamento topográfico">
            <g className="compass" opacity="0.5">
              <line x1="370" y1="30" x2="370" y2="60" stroke="var(--slate)" strokeWidth="1" />
              <path d="M370 20 l5 12 -5 -4 -5 4 z" fill="var(--gold-light)" />
              <text x="370" y="16" textAnchor="middle" className="plot-label" fontSize="9">N</text>
            </g>
            <polygon
              id="plotPath"
              className="plot-path"
              points="49,40 225,81 322,105 345,350 340,459 216,428 40,384"
            />
            <g className="plot-verts" fontFamily="'IBM Plex Mono', monospace">
              <circle className="plot-vertex" cx="49" cy="40" r="3.5" /><text className="plot-label" x="55" y="34">V1</text>
              <circle className="plot-vertex" cx="225" cy="81" r="3.5" /><text className="plot-label" x="231" y="76">V2</text>
              <circle className="plot-vertex" cx="322" cy="105" r="3.5" /><text className="plot-label" x="328" y="101">V3</text>
              <circle className="plot-vertex" cx="345" cy="350" r="3.5" /><text className="plot-label" x="351" y="354">V4</text>
              <circle className="plot-vertex" cx="340" cy="459" r="3.5" /><text className="plot-label" x="346" y="463">V5</text>
              <circle className="plot-vertex" cx="216" cy="428" r="3.5" /><text className="plot-label" x="196" y="446">V6</text>
              <circle className="plot-vertex" cx="40" cy="384" r="3.5" /><text className="plot-label" x="4" y="380">V7</text>
            </g>
            <text x="192" y="248" textAnchor="middle" className="plot-tag" fontSize="15">11,5276 ha</text>
            <text x="192" y="266" textAnchor="middle" className="plot-label" fontSize="10">Mat. N&deg; 5.420 · Miranda III, Trairi-CE</text>
          </svg>
        </div>
      </div>
      <div className="scroll-cue">
        <span className="mono" style={{ fontSize: 10.5, letterSpacing: ".1em" }}>ROLE</span>
        <svg><use href="#i-chevron" /></svg>
      </div>
    </header>
  );
}

/* ============================================================= ficha */
function Ficha() {
  return (
    <section id="ficha" className="bg-soil">
      <div className="wrap">
        <div className="head reveal">
          <div className="eyebrow">Ficha técnica</div>
          <h2>O terreno, documentado do jeito certo.</h2>
          <p>
            Nada de &ldquo;área aproximada, sem escritura&rdquo;. Este lote nasceu de um levantamento topográfico
            planimétrico certificado e de um processo de desmembramento formal, com matrícula própria — pronto
            para transacionar.
          </p>
        </div>

        <div className="stat-grid">
          <div className="stat reveal reveal-delay-1"><b className="mono" data-count="11.5276" data-suffix=" ha">0 ha</b><span>Área total</span></div>
          <div className="stat reveal reveal-delay-1"><b className="mono" data-count="1371.81" data-suffix=" m">0 m</b><span>Perímetro</span></div>
          <div className="stat reveal reveal-delay-2"><b className="mono">≈280 × 363 m</b><span>Dimensões aproximadas</span></div>
          <div className="stat reveal reveal-delay-2"><b className="mono">N&deg; 5.420</b><span>Matrícula</span></div>
          <div className="stat reveal reveal-delay-3"><b className="mono">24M</b><span>Zona UTM · SIRGAS2000</span></div>
          <div className="stat reveal reveal-delay-3"><b className="mono">Remanescente</b><span>Situação — já desmembrada</span></div>
        </div>

        <div className="toggle-row reveal">
          <button className="toggle-btn" id="coordToggle" aria-expanded="false" aria-controls="coordPanel" type="button">
            Ver coordenadas do levantamento topográfico <svg><use href="#i-chevron" /></svg>
          </button>
        </div>
        <div className="coord-panel" id="coordPanel">
          <div className="coord-inner">
            <p className="note">
              Vértices de referência do polígono, extraídos do levantamento topográfico planimétrico (ART
              CE20190540190) e da planta de situação para desmembramento (ART CE20241551469), responsabilidade
              técnica do eng. civil Raimundo Hilton Castro Melo — CREA-CE 345721.
            </p>
            <table className="coord-table">
              <thead><tr><th>Vértice</th><th>Coord. Este (UTM)</th><th>Coord. Norte (UTM)</th></tr></thead>
              <tbody>
                <tr><td>V1</td><td>468.143,911</td><td>9.619.520,800</td></tr>
                <tr><td>V2</td><td>468.330,725</td><td>9.619.476,817</td></tr>
                <tr><td>V3</td><td>468.434,614</td><td>9.619.451,429</td></tr>
                <tr><td>V4</td><td>468.459,070</td><td>9.619.190,580</td></tr>
                <tr><td>V5</td><td>468.452,767</td><td>9.619.074,739</td></tr>
                <tr><td>V6</td><td>468.321,489</td><td>9.619.108,007</td></tr>
                <tr><td>V7</td><td>468.134,161</td><td>9.619.154,420</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================= localizacao */
function Localizacao() {
  return (
    <section id="local" className="bg-ink">
      <div className="wrap">
        <div className="head local-copy reveal">
          <div className="eyebrow">Localização</div>
          <h2>Na rota que liga a indústria ao litoral.</h2>
          <p>
            A CE-085 é conhecida como <strong style={{ color: "var(--sand)" }}>Via Estruturante</strong> — a estrada
            que recebe o fluxo de veículos leves entre o Complexo Industrial e Portuário do Pecém e as praias do
            litoral oeste cearense. É exatamente nesse eixo, no trecho de Miranda III, em Trairi, que o terreno tem
            sua frente principal.
          </p>
        </div>

        <div className="axis-wrap">
          <div className="axis reveal">
            <div className="axis-title"><svg><use href="#i-container" /></svg>Eixo industrial e portuário</div>
            <div className="axis-line">
              <div className="axis-node"><span className="pt" /><b>Fortaleza</b><span className="dist">referência</span><span className="sub">Capital do Ceará</span></div>
              <div className="axis-node"><span className="pt" /><b>Complexo do Pecém</b><span className="dist">~70 km*</span><span className="sub">Porto industrial, ZPE Ceará, siderúrgica e polo energético</span></div>
              <div className="axis-node here"><span className="pt" /><b>Seu terreno</b><span className="dist">Miranda III · CE-085</span><span className="sub">Frente direta para a Via Estruturante</span></div>
            </div>
            <p className="axis-note">*Estimativa de trajeto pela CE-085. O Complexo do Pecém fica a cerca de 60&nbsp;km de Fortaleza; Trairi, a cerca de 112&nbsp;km.</p>
          </div>

          <div className="axis reveal">
            <div className="axis-title"><svg><use href="#i-house" /></svg>Eixo turístico do litoral oeste</div>
            <div className="axis-line">
              <div className="axis-node here"><span className="pt" /><b>Seu terreno</b><span className="dist">Miranda III · CE-085</span><span className="sub">Ponto de partida</span></div>
              <div className="axis-node"><span className="pt" /><b>Trairi (centro)</b><span className="dist">~112 km de Fortaleza</span><span className="sub">Sede do município</span></div>
              <div className="axis-node"><span className="pt" /><b>Flecheiras</b><span className="dist">~14 km do centro</span><span className="sub">Praia mais estruturada, piscinas naturais</span></div>
              <div className="axis-node"><span className="pt" /><b>Guajiru</b><span className="dist">~18 km do centro</span><span className="sub">Referência mundial em kitesurf</span></div>
              <div className="axis-node"><span className="pt" /><b>Mundaú</b><span className="dist">~17 km do centro</span><span className="sub">Encontro do rio com o mar</span></div>
              <div className="axis-node"><span className="pt" /><b>Emboaca</b><span className="dist">~10 km do centro</span><span className="sub">Vila de pescadores</span></div>
            </div>
            <p className="axis-note">Praias ligadas por via pavimentada, parte do mesmo corredor turístico consolidado do litoral de Trairi.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================= potencial */
function Potencial() {
  const cards = [
    ["i-fuel", "Posto de combustíveis & conveniência", "Fluxo constante de veículos leves e caminhões na CE-085, rota alternativa para o Pecém e para as praias do litoral oeste.", "Alto tráfego diário"],
    ["i-house", "Pousada & hotel boutique", "A poucos quilômetros de Flecheiras, Guajiru, Mundaú e Emboaca — destino já consolidado de kitesurf e turismo de natureza.", "Mercado hoteleiro em expansão"],
    ["i-tire", "Oficina mecânica & borracharia", "Apoio à frota que circula diariamente pela via — caminhões de carga, vans de turismo e veículos de passeio.", "Serviço essencial de rodovia"],
    ["i-store", "Open mall / centro comercial", "Formato de baixo investimento estrutural para reunir farmácia, mercado, lanchonete e outros serviços num só ponto.", "Comércio de bairro"],
    ["i-container", "Porto seco & logística", "Proximidade com o Complexo do Pecém e sua ZPE favorece operações de apoio logístico e alfandegado na região.", "Corredor logístico"],
    ["i-warehouse", "Galpões de armazenamento", "Terreno plano e extenso, com energia trifásica disponível — pronto para armazenagem geral ou centro de distribuição.", "11,53 ha de área útil"],
    ["i-bolt", "Eletroposto — recarga de VEs", "Energia de alta e média tensão já disponível no local viabiliza carregadores rápidos ao longo do corredor turístico.", "Tendência em crescimento"],
    ["i-scale", "Seu projeto aqui", "Fale com a gente — podemos pensar juntos no melhor uso para o seu negócio, considerando escala e investimento.", "Vamos conversar"],
  ];
  return (
    <section id="potencial" className="bg-sand">
      <div className="wrap">
        <div className="head reveal">
          <div className="eyebrow">Potencial de uso</div>
          <h2>Um terreno, muitos negócios possíveis.</h2>
          <p>
            A combinação de localização, infraestrutura e tráfego permite pensar em soluções voltadas tanto a quem
            viaja rumo ao Pecém quanto a quem viaja rumo à praia. Alguns caminhos possíveis:
          </p>
        </div>
        <div className="card-grid reveal">
          {cards.map(([icon, title, text, tag]) => (
            <div className="card" key={title}>
              <div className="badge"><svg><use href={`#${icon}`} /></svg></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="tag">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================= infra */
function Infra() {
  return (
    <section id="infra" className="bg-teal">
      <div className="wrap">
        <div className="head reveal">
          <div className="eyebrow">Infraestrutura</div>
          <h2>Pronto para sair do papel.</h2>
          <p>Os dois principais gargalos de qualquer projeto — água e energia — já estão resolvidos no local.</p>
        </div>
        <div className="infra-grid">
          <div className="infra-item reveal reveal-delay-1">
            <div className="badge"><svg><use href="#i-drop" /></svg></div>
            <h3>Água encanada</h3>
            <p>Abastecimento via SISAR (Sistema Integrado de Saneamento Rural), garantindo fornecimento contínuo para uso comercial ou industrial.</p>
            <div className="flow-line" />
          </div>
          <div className="infra-item reveal reveal-delay-2">
            <div className="badge"><svg><use href="#i-bolt" /></svg></div>
            <h3>Energia trifásica</h3>
            <p>Rede elétrica de alta, média e baixa tensão disponível na via — viabiliza desde uma pequena loja até galpões, frigoríficos ou recarga rápida de veículos.</p>
            <div className="flow-line" />
          </div>
          <div className="infra-item reveal reveal-delay-3">
            <div className="badge"><svg><use href="#i-road" /></svg></div>
            <h3>Acesso direto à CE-085</h3>
            <p>Frente para rodovia estadual pavimentada, de tráfego constante — a Via Estruturante do litoral oeste do Ceará.</p>
            <div className="flow-line" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================= negociacao */
function Negociacao() {
  return (
    <section id="negociacao" className="bg-soil">
      <div className="wrap">
        <div className="neg-layout">
          <div className="neg-copy reveal">
            <div className="eyebrow">Negociação</div>
            <h2>Valor sob consulta — e espaço real para negociar.</h2>
            <p>
              A Moura Prime está aberta a propostas de compra à vista ou financiada. Também aceitamos{" "}
              <strong style={{ color: "var(--sand)" }}>permuta total ou parcial</strong> — troca do terreno por
              serviços ou materiais de obra, como terraplanagem, construção civil e insumos. Fale com a gente e
              vamos entender juntos o melhor formato para o seu projeto.
            </p>
            <ul className="chip-list">
              <li><svg><use href="#i-cash" /></svg>Compra à vista</li>
              <li><svg><use href="#i-swap" /></svg>Permuta por serviços</li>
              <li><svg><use href="#i-warehouse" /></svg>Permuta por materiais de obra</li>
            </ul>
          </div>
          <div className="neg-panel reveal reveal-delay-2">
            <h4>Como funciona a permuta</h4>
            <ul>
              <li><svg><use href="#i-check" /></svg>Você apresenta a proposta: serviço, material ou combinação com parte em dinheiro.</li>
              <li><svg><use href="#i-check" /></svg>Avaliamos o valor de mercado do terreno frente ao que está sendo oferecido.</li>
              <li><svg><use href="#i-check" /></svg>Formalizamos as condições em contrato, com segurança para as duas partes.</li>
              <li><svg><use href="#i-check" /></svg>Ideal para construtoras, empreiteiras e fornecedores de materiais de obra.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================= documentacao */
function Documentacao() {
  return (
    <section id="doc" className="bg-ink">
      <div className="wrap">
        <div className="head reveal">
          <div className="eyebrow">Documentação</div>
          <h2>Segurança jurídica, do jeito que negócio sério exige.</h2>
        </div>
        <div className="doc-layout">
          <ul className="doc-list reveal">
            <li>
              <div className="badge"><svg><use href="#i-doc" /></svg></div>
              <div><b>Levantamento topográfico planimétrico certificado</b><span>Compatível com o cadastro georreferenciado do INCRA — sem sobreposição com outra área cadastrada.</span></div>
            </li>
            <li>
              <div className="badge"><svg><use href="#i-check" /></svg></div>
              <div><b>ART registrada</b><span>Responsabilidade técnica do levantamento (CE20190540190) e da planta de situação para desmembramento (CE20241551469).</span></div>
            </li>
            <li>
              <div className="badge"><svg><use href="#i-doc" /></svg></div>
              <div><b>Planta de situação assinada digitalmente</b><span>Via gov.br, pelo eng. civil Raimundo Hilton Castro Melo — CREA-CE 345721 / RNP 061901401-6.</span></div>
            </li>
            <li>
              <div className="badge"><svg><use href="#i-check" /></svg></div>
              <div><b>Matrícula própria</b><span>N&deg; 5.420 — área remanescente já oficialmente desmembrada do imóvel original de 21,5276 ha.</span></div>
            </li>
          </ul>
          <div className="doc-seal reveal reveal-delay-2">
            <h4>Resumo do registro</h4>
            <div className="row"><span>Proprietário</span><span>Gilmar Meireles de Sousa</span></div>
            <div className="row"><span>Matrícula</span><span>N&deg; 5.420</span></div>
            <div className="row"><span>Local</span><span>Miranda III, Trairi-CE</span></div>
            <div className="row"><span>Município limítrofe</span><span>São Luís do Curu</span></div>
            <div className="row"><span>Zona UTM</span><span>24M · SIRGAS2000</span></div>
            <p style={{ marginTop: 20 }}>Código de certificação do levantamento georreferenciado:</p>
            <div className="seal-code">bba38967-34af-447f-a976-3a63b8ebbf25</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================= contato */
function Contato() {
  return (
    <section id="contato" className="bg-gold-deep">
      <div className="wrap contato-inner">
        <div className="eyebrow eyebrow-center">Próximo passo</div>
        <h2 className="reveal">Vamos conversar sobre o seu projeto?</h2>
        <p className="lede reveal reveal-delay-1">
          Água, energia, matrícula própria e frente para a CE-085 — o terreno está pronto. Falta só combinar os
          detalhes do seu negócio.
        </p>
        <div className="contato-actions reveal reveal-delay-2">
          <a className="btn btn-primary" href="https://wa.me/5585986594653" target="_blank" rel="noopener noreferrer">
            <svg><use href="#i-chat" /></svg>Falar no WhatsApp
          </a>
          <a className="btn btn-ghost" href="mailto:mouraprimeemprendimentos@gmail.com">
            <svg><use href="#i-mail" /></svg>Enviar e-mail
          </a>
        </div>
        <div className="contact-cards reveal reveal-delay-3">
          <a href="https://wa.me/5585986594653" target="_blank" rel="noopener noreferrer">
            <div className="badge"><svg><use href="#i-phone" /></svg></div>
            <div><b>WhatsApp / Telefone</b><span>(85) 98659-4653</span></div>
          </a>
          <a href="mailto:mouraprimeemprendimentos@gmail.com">
            <div className="badge"><svg><use href="#i-mail" /></svg></div>
            <div><b>E-mail</b><span>mouraprimeemprendimentos@gmail.com</span></div>
          </a>
          <a href="#hero">
            <div className="badge"><svg><use href="#i-pin" /></svg></div>
            <div><b>Endereço</b><span>Miranda III, s/n, Trairi-CE</span></div>
          </a>
        </div>
        <p className="tagline-close reveal reveal-delay-4">&ldquo;Estrutura sólida para grandes negócios.&rdquo;</p>
      </div>
    </section>
  );
}

/* ============================================================= footer */
function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/moura-prime-logo.webp" width={560} height={278} style={{ height: 56, width: "auto" }} alt="Moura Prime Empreendimentos" />
          </div>
          <div className="footer-links">
            <div>
              <b>Navegação</b>
              <ul>
                <li><a href="#ficha">Ficha técnica</a></li>
                <li><a href="#local">Localização</a></li>
                <li><a href="#potencial">Potencial de uso</a></li>
                <li><a href="#doc">Documentação</a></li>
              </ul>
            </div>
            <div>
              <b>Contato</b>
              <ul>
                <li><a href="https://wa.me/5585986594653" target="_blank" rel="noopener noreferrer">(85) 98659-4653</a></li>
                <li><a href="mailto:mouraprimeemprendimentos@gmail.com">mouraprimeemprendimentos@gmail.com</a></li>
              </ul>
            </div>
            <div>
              <b>Endereço</b>
              <ul>
                <li>Miranda III, s/n</li>
                <li>Trairi &ndash; CE, às margens da CE-085</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© Moura Prime Empreendimentos — Estrutura sólida para grandes negócios.</span>
          <span>Terreno Mat. N&deg; 5.420 · Valor sob consulta</span>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsapp() {
  return (
    <a className="float-wa" href="https://wa.me/5585986594653" target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
      <svg><use href="#i-chat" /></svg><span>Falar no WhatsApp</span>
    </a>
  );
}

/* ============================================================= page */
export default function Page() {
  return (
    <>
      <IconSprite />
      <Topbar />
      <DotNav />
      <Hero />
      <main>
        <Ficha />
        <Localizacao />
        <Potencial />
        <Infra />
        <Negociacao />
        <Documentacao />
        <Contato />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
