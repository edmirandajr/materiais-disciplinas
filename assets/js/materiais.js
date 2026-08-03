/* ==========================================================================
   materiais.js — dados e renderização do índice de materiais

   PARA ADICIONAR UM MATERIAL: acrescente uma linha em MATERIAIS abaixo.
   Nada mais precisa ser alterado.

   Campos:
     titulo      texto exibido
     descricao   uma ou duas frases sobre o material
     categoria   'photoshop' | 'publicidade' | 'tcc'   (ver CATEGORIAS)
     tipo        'PDF' | 'PPTX' | 'DOCX' | 'PSD' | 'JPG' | 'PNG'
                 | 'Slides' | 'Vídeo'
     href        caminho do arquivo em arquivos/… ou URL completa
     tamanho     opcional; '4,0 MB'. Use em arquivos hospedados aqui.
     externo     opcional; true para links (slides, vídeos) — abre em nova aba
     atualizado  opcional; 'AAAA-MM-DD'
   ========================================================================== */

const CATEGORIAS = [
  { id: 'photoshop', rotulo: 'Oficina de Photoshop', titulo: 'Oficina de Photoshop — CAPACITA 2026' },
  { id: 'publicidade', rotulo: 'Criação Publicitária', titulo: 'Criação Publicitária — Campanha AV2' },
  { id: 'tcc', rotulo: 'TCC', titulo: 'TCC e Projeto Experimental' },
];

const MATERIAIS = [
  /* --- Oficina de Photoshop — CAPACITA 2026 ------------------------------ */
  {
    titulo: 'Apostila — Photoshop: Primeiros Passos',
    descricao: 'Material de apoio completo da oficina prática de 3 horas: interface, camadas, ferramentas essenciais, ajustes de cor e exportação para redes sociais.',
    categoria: 'photoshop',
    tipo: 'PDF',
    href: 'arquivos/photoshop/photoshop-apostila-primeiros-passos.pdf',
    tamanho: '177 KB',
    atualizado: '2026-07-23',
  },
  {
    titulo: 'Guia rápido — Edição gráfica para iniciantes',
    descricao: 'Infográfico de uma página com o resumo visual dos conceitos essenciais do Photoshop.',
    categoria: 'photoshop',
    tipo: 'PNG',
    href: 'arquivos/photoshop/photoshop-guia-rapido.png',
    tamanho: '4,8 MB',
    atualizado: '2026-07-23',
  },
  {
    titulo: 'Photoshop Essentials — resumo visual',
    descricao: 'Guia ilustrado com o fluxo de trabalho, ferramentas, atalhos e dimensões para redes sociais.',
    categoria: 'photoshop',
    tipo: 'PDF',
    href: 'arquivos/photoshop/photoshop-essentials.pdf',
    tamanho: '4,0 MB',
    atualizado: '2026-07-23',
  },
  {
    titulo: 'Photoshop Essentials — vídeo-resumo',
    descricao: 'Visão geral em vídeo dos conceitos e do fluxo de trabalho apresentados no guia.',
    categoria: 'photoshop',
    tipo: 'Vídeo',
    href: 'https://notebooklm.google.com/notebook/70c6b361-13ca-4263-a3ac-6105cc84a812/artifact/dccfbdee-6b73-44df-8947-265fb908f156',
    externo: true,
  },
  {
    titulo: 'Tutorial — Círculo cromático no Photoshop',
    descricao: 'Passo a passo para montar o círculo cromático usado no exercício prático.',
    categoria: 'photoshop',
    tipo: 'Vídeo',
    href: 'https://youtu.be/f4uwR7Rpgas',
    externo: true,
  },
  {
    titulo: 'Tutorial — Camada colorida no Photoshop',
    descricao: 'Como aplicar uma camada de cor sobre uma foto para criar o efeito duotone.',
    categoria: 'photoshop',
    tipo: 'Vídeo',
    href: 'https://youtu.be/Q307DLMA5v8',
    externo: true,
  },
  {
    titulo: 'Tutorial — Recorte simples no Photoshop',
    descricao: 'Como isolar um elemento do fundo usando seleção e máscara de camada.',
    categoria: 'photoshop',
    tipo: 'Vídeo',
    href: 'https://youtu.be/bvzmV48E-TE',
    externo: true,
  },
  {
    titulo: 'Slides — Referências Magritte',
    descricao: 'Apresentação de referências visuais para o exercício de fotomontagem surrealista.',
    categoria: 'photoshop',
    tipo: 'Slides',
    href: 'https://docs.google.com/presentation/d/e/2PACX-1vTOyvBFc-KKGVT3ZAeI6W-i3TuSG77k3kJpeQjvuIizvmyn9sJ9c6ocu2hyLXwOv31kLUHseLbydpDV/pub?start=false&loop=false&delayms=3000',
    externo: true,
  },
  {
    titulo: 'Slides — Fotomontagem surrealista',
    descricao: 'Exemplos e etapas para a construção de fotomontagens no estilo surrealista.',
    categoria: 'photoshop',
    tipo: 'Slides',
    href: 'https://docs.google.com/presentation/d/e/2PACX-1vTBDLQkZaNTums10HCcySF6T2OdlBvZdFYEuFJJ__PBEj52__9dMT4uF08xawYkmQ8U3qlI2Y_tKkVN/pub?start=false&loop=false&delayms=3000',
    externo: true,
  },
  {
    titulo: 'Prática — Retrato (arquivo do Photoshop)',
    descricao: 'Arquivo de trabalho com camadas para o exercício de retrato com camada colorida.',
    categoria: 'photoshop',
    tipo: 'PSD',
    href: 'arquivos/photoshop/photoshop-pratica-retrato.psd',
    tamanho: '13,8 MB',
    atualizado: '2026-07-23',
  },
  {
    titulo: 'Prática — Retrato: foto original',
    descricao: 'Imagem de base para o exercício de camada colorida.',
    categoria: 'photoshop',
    tipo: 'JPG',
    href: 'arquivos/photoshop/photoshop-pratica-retrato-original.jpg',
    tamanho: '1,8 MB',
    atualizado: '2026-07-23',
  },
  {
    titulo: 'Prática — Retrato: resultado com camada colorida',
    descricao: 'Exemplo do resultado final do exercício, para conferência.',
    categoria: 'photoshop',
    tipo: 'JPG',
    href: 'arquivos/photoshop/photoshop-pratica-retrato-editada.jpg',
    tamanho: '367 KB',
    atualizado: '2026-07-23',
  },
  {
    titulo: 'Prática — Círculo cromático: modelo em branco',
    descricao: 'Estrutura do círculo cromático para preencher durante o exercício.',
    categoria: 'photoshop',
    tipo: 'JPG',
    href: 'arquivos/photoshop/photoshop-pratica-circulo-cromatico-original.jpg',
    tamanho: '1,7 MB',
    atualizado: '2026-07-23',
  },
  {
    titulo: 'Prática — Círculo cromático: gabarito preenchido',
    descricao: 'Versão de referência com o círculo cromático já preenchido.',
    categoria: 'photoshop',
    tipo: 'JPG',
    href: 'arquivos/photoshop/photoshop-pratica-circulo-cromatico-preenchido.jpg',
    tamanho: '1,7 MB',
    atualizado: '2026-07-23',
  },

  /* --- Criação Publicitária — Campanha AV2 ------------------------------- */
  {
    titulo: 'AV2 prática — Apresentação da campanha',
    descricao: 'Guia completo para criação, estratégia, execução e apresentação da campanha publicitária da AV2.',
    categoria: 'publicidade',
    tipo: 'PDF',
    href: 'arquivos/publicidade/av2-pratica-apresentacao-da-campanha.pdf',
    tamanho: '2,8 MB',
  },
  {
    titulo: 'Roteiro audiovisual — Ação promocional da campanha AV2',
    descricao: 'Material de consulta para o desenvolvimento do roteiro audiovisual da atividade.',
    categoria: 'publicidade',
    tipo: 'PDF',
    href: 'arquivos/publicidade/roteiro-audiovisual-acao-promocional-av2.pdf',
    tamanho: '6,2 MB',
  },

  /* --- TCC e Projeto Experimental ---------------------------------------- */
  {
    titulo: 'Template TCC — Projeto Experimental',
    descricao: 'Modelo em Word para elaboração do relatório técnico de TCC em Publicidade e Propaganda.',
    categoria: 'tcc',
    tipo: 'DOCX',
    href: 'arquivos/tcc/template-tcc-projeto-experimental.docx',
    tamanho: '171 KB',
  },
  {
    titulo: 'Modelo de pitch de TCC',
    descricao: 'Apresentação em PowerPoint para exposições rápidas da pesquisa.',
    categoria: 'tcc',
    tipo: 'PPTX',
    href: 'arquivos/tcc/modelo-pitch-tcc-uni7.pptx',
    tamanho: '220 KB',
  },
];

/* ==========================================================================
   Renderização — a partir daqui não é preciso editar
   ========================================================================== */

(function () {
  const lista = document.getElementById('lista-materiais');
  const filtros = document.getElementById('filtros');
  const busca = document.getElementById('busca');
  const contagem = document.getElementById('contagem');

  if (!lista) return;

  let categoriaAtiva = 'todos';
  let termo = '';

  function escapar(txt) {
    return String(txt).replace(/[&<>"]/g, (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])
    );
  }

  function semAcento(txt) {
    return txt.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  function rotuloAcao(item) {
    if (item.tipo === 'Vídeo') return 'Assistir';
    if (item.tipo === 'Slides') return 'Abrir slides';
    return 'Baixar';
  }

  function dataBR(iso) {
    if (!iso) return '';
    const [ano, mes, dia] = iso.split('-');
    return `${dia}/${mes}/${ano}`;
  }

  function montarFiltros() {
    const opcoes = [{ id: 'todos', rotulo: 'Todos' }, ...CATEGORIAS];
    filtros.innerHTML = opcoes
      .map(
        (o) =>
          `<button class="filtro" type="button" data-categoria="${o.id}" aria-pressed="${
            o.id === categoriaAtiva
          }">${escapar(o.rotulo)}</button>`
      )
      .join('');
  }

  function corresponde(item) {
    if (categoriaAtiva !== 'todos' && item.categoria !== categoriaAtiva) return false;
    if (!termo) return true;
    const alvo = semAcento(`${item.titulo} ${item.descricao} ${item.tipo}`);
    return semAcento(termo)
      .split(/\s+/)
      .filter(Boolean)
      .every((palavra) => alvo.includes(palavra));
  }

  function montarItem(item) {
    const externo = item.externo ? ' target="_blank" rel="noopener"' : '';
    const baixar = !item.externo ? ' download' : '';

    const meta = [`<span class="selo">${escapar(item.tipo)}</span>`];
    if (item.tamanho) meta.push(`<span>${escapar(item.tamanho)}</span>`);
    if (item.atualizado) meta.push(`<span>atualizado em ${dataBR(item.atualizado)}</span>`);
    if (item.externo) meta.push('<span>abre em nova aba</span>');

    return `
      <article class="item">
        <div class="item-info">
          <h3>${escapar(item.titulo)}</h3>
          <p>${escapar(item.descricao)}</p>
          <div class="meta">${meta.join('')}</div>
        </div>
        <a class="acao" href="${escapar(item.href)}"${externo}${baixar}
           aria-label="${rotuloAcao(item)}: ${escapar(item.titulo)}">${rotuloAcao(item)}</a>
      </article>`;
  }

  function renderizar() {
    const visiveis = MATERIAIS.filter(corresponde);

    if (visiveis.length === 0) {
      lista.innerHTML = `<p class="vazio">Nenhum material encontrado para essa busca. Tente outra palavra ou escolha “Todos”.</p>`;
      contagem.textContent = '';
      return;
    }

    lista.innerHTML = CATEGORIAS.map((cat) => {
      const itens = visiveis.filter((m) => m.categoria === cat.id);
      if (itens.length === 0) return '';
      return (
        `<h2 class="grupo-titulo">${escapar(cat.titulo)}</h2>` +
        itens.map(montarItem).join('')
      );
    }).join('');

    const total = MATERIAIS.length;
    contagem.textContent =
      visiveis.length === total
        ? `${total} materiais disponíveis`
        : `${visiveis.length} de ${total} materiais`;
  }

  filtros.addEventListener('click', (e) => {
    const botao = e.target.closest('.filtro');
    if (!botao) return;
    categoriaAtiva = botao.dataset.categoria;
    filtros.querySelectorAll('.filtro').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.categoria === categoriaAtiva));
    });
    renderizar();
  });

  busca.addEventListener('input', () => {
    termo = busca.value.trim();
    renderizar();
  });

  montarFiltros();
  renderizar();
})();
