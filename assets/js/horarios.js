/* ==========================================================================
   horarios.js — dados e renderização da grade de horários

   PARA ATUALIZAR O HORÁRIO: edite apenas SEMESTRE, AULAS e LEGENDA abaixo.
   A sala digitada aqui é a que todos os alunos veem.

   Campos de uma aula:
     dia    'seg' | 'ter' | 'qua' | 'qui' | 'sex' | 'sab'
     tipo   classe de cor definida em assets/css/horarios.css
     nome   nome da disciplina
     turma  opcional; semestre da turma
     inicio / fim   'HH:MM'
     sala   texto livre
     nota   opcional; aparece nos detalhes
   ========================================================================== */

const SEMESTRE = '2026.2';

const AULAS = [
  { dia: 'seg', tipo: 'ext2-pm',    nome: 'Extensão II',              turma: '4º', inicio: '18:30', fim: '20:10', sala: 'a definir', nota: 'turma da noite' },
  { dia: 'seg', tipo: 'orient',     nome: 'Orientação',                            inicio: '11:00', fim: '12:00', sala: 'a definir' },
  { dia: 'seg', tipo: 'orient',     nome: 'Orientação',                            inicio: '17:00', fim: '18:00', sala: 'a definir' },

  { dia: 'ter', tipo: 'projexp',    nome: 'Projeto Experimental II',  turma: '8º', inicio: '07:30', fim: '08:20', sala: 'a definir' },
  { dia: 'ter', tipo: 'semiot-am',  nome: 'Semiótica',                turma: '4º', inicio: '09:10', fim: '10:50', sala: 'a definir', nota: 'turma da manhã' },
  { dia: 'ter', tipo: 'orient',     nome: 'Orientação',                            inicio: '11:00', fim: '12:00', sala: 'a definir' },
  { dia: 'ter', tipo: 'orient',     nome: 'Orientação',                            inicio: '17:00', fim: '18:00', sala: 'a definir' },
  { dia: 'ter', tipo: 'semiot-pm',  nome: 'Semiótica',                turma: '4º', inicio: '18:30', fim: '20:10', sala: 'a definir', nota: 'turma da noite' },
  { dia: 'ter', tipo: 'designprod', nome: 'Design e Produção Gráfica',turma: '6º', inicio: '20:10', fim: '21:50', sala: 'a definir' },

  { dia: 'qui', tipo: 'ext2-am',    nome: 'Extensão II',              turma: '4º', inicio: '07:30', fim: '09:10', sala: 'a definir', nota: 'turma da manhã' },
  { dia: 'qui', tipo: 'novastec',   nome: 'Novas Tecnologias',        turma: '8º', inicio: '09:10', fim: '10:50', sala: 'a definir' },
  { dia: 'qui', tipo: 'orient',     nome: 'Orientação',                            inicio: '11:00', fim: '12:00', sala: 'a definir' },
  { dia: 'qui', tipo: 'orient',     nome: 'Orientação',                            inicio: '17:00', fim: '18:00', sala: 'a definir' },

  { dia: 'sab', tipo: 'ext1',       nome: 'Extensão I',               turma: '2º', inicio: '08:20', fim: '12:30', sala: 'a definir' },
];

const LEGENDA = [
  { cls: 'ext1',       rotulo: 'Extensão I (2º)' },
  { cls: 'ext2-am',    rotulo: 'Extensão II (4º) — manhã' },
  { cls: 'ext2-pm',    rotulo: 'Extensão II (4º) — noite' },
  { cls: 'projexp',    rotulo: 'Projeto Experimental II (8º)' },
  { cls: 'semiot-am',  rotulo: 'Semiótica (4º) — manhã' },
  { cls: 'semiot-pm',  rotulo: 'Semiótica (4º) — noite' },
  { cls: 'designprod', rotulo: 'Design e Produção Gráfica (6º)' },
  { cls: 'novastec',   rotulo: 'Novas Tecnologias (8º)' },
  { cls: 'orient',     rotulo: 'Orientação (atendimento)' },
];

/* ==========================================================================
   Renderização — a partir daqui não é preciso editar
   ========================================================================== */

(function () {
  const DIAS = [
    { chave: 'seg', sigla: 'SEG', nome: 'Segunda-feira', numero: 1 },
    { chave: 'ter', sigla: 'TER', nome: 'Terça-feira', numero: 2 },
    { chave: 'qua', sigla: 'QUA', nome: 'Quarta-feira', numero: 3 },
    { chave: 'qui', sigla: 'QUI', nome: 'Quinta-feira', numero: 4 },
    { chave: 'sex', sigla: 'SEX', nome: 'Sexta-feira', numero: 5 },
    { chave: 'sab', sigla: 'SÁB', nome: 'Sábado', numero: 6 },
  ];

  const HORA_INICIAL = 7;
  const HORA_FINAL = 22;
  const JANELA = (HORA_FINAL - HORA_INICIAL) * 60;
  const CHAVE_POR_DIA_SEMANA = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];

  const elGrade = document.getElementById('grade');
  const elAgenda = document.getElementById('agenda');
  const elLegenda = document.getElementById('legenda');
  const elAgora = document.getElementById('agora');
  const elSemestre = document.getElementById('semestre');

  if (!elGrade) return;

  /* --- utilidades --- */

  function escapar(txt) {
    return String(txt).replace(/[&<>"]/g, (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])
    );
  }

  const emMinutos = (t) => {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
  };

  const emPorcento = (t) => ((emMinutos(t) - HORA_INICIAL * 60) / JANELA) * 100;

  const horaBR = (t) => t.replace(':', 'h');

  const aulasDo = (chave) =>
    AULAS.filter((a) => a.dia === chave).sort((a, b) => emMinutos(a.inicio) - emMinutos(b.inicio));

  function descricao(aula, nomeDia) {
    const turma = aula.turma ? ` — ${aula.turma} semestre` : '';
    const nota = aula.nota ? ` (${aula.nota})` : '';
    return `${aula.nome}${turma} — ${nomeDia}, ${horaBR(aula.inicio)}–${horaBR(aula.fim)}${nota} — ${aula.sala}`;
  }

  /* --- legenda --- */

  function renderizarLegenda() {
    elLegenda.innerHTML = LEGENDA.map(
      (l) =>
        `<span class="legenda-item"><span class="amostra ${l.cls}"></span>${escapar(l.rotulo)}</span>`
    ).join('');
  }

  /* --- grade semanal --- */

  function renderizarGrade() {
    const hoje = new Date().getDay();
    let html = '<div class="eixo">';

    for (let h = HORA_INICIAL; h <= HORA_FINAL; h++) {
      const topo = (((h - HORA_INICIAL) * 60) / JANELA) * 100;
      html += `<div class="eixo-hora" style="top:${topo}%">${String(h).padStart(2, '0')}h</div>`;
    }
    html += '</div>';

    DIAS.forEach((d) => {
      const ehHoje = d.numero === hoje;
      const aulas = aulasDo(d.chave);

      html += `<div class="dia${ehHoje ? ' hoje' : ''}">`;
      html += `<div class="dia-cabecalho">${d.sigla}${ehHoje ? ' • HOJE' : ''}</div>`;

      if (aulas.length === 0) {
        html += '<div class="trilha livre"><div class="livre-aviso">sem aulas<br>fixas</div></div>';
      } else {
        html += '<div class="trilha">';
        aulas.forEach((a) => {
          const topo = emPorcento(a.inicio);
          const altura = emPorcento(a.fim) - topo;
          html += `<div class="bloco ${a.tipo}" style="top:${topo}%;height:${altura}%" title="${escapar(descricao(a, d.nome))}">`;
          html += `<span class="bloco-nome">${escapar(a.nome)}</span>`;
          if (a.turma) html += `<span class="bloco-turma">${escapar(a.turma)}</span>`;
          html += `<span class="bloco-hora">${horaBR(a.inicio)}–${horaBR(a.fim)}</span>`;
          html += `<span class="bloco-sala">${escapar(a.sala)}</span>`;
          html += '</div>';
        });
        html += '</div>';
      }
      html += '</div>';
    });

    elGrade.innerHTML = html;
  }

  /* --- agenda vertical (celular) --- */

  function renderizarAgenda() {
    const hoje = new Date().getDay();

    elAgenda.innerHTML = DIAS.map((d) => {
      const aulas = aulasDo(d.chave);
      const ehHoje = d.numero === hoje;

      const corpo =
        aulas.length === 0
          ? '<p class="agenda-livre">Sem aulas fixas.</p>'
          : aulas
              .map((a) => {
                const turma = a.turma ? `${a.turma} semestre · ` : '';
                const nota = a.nota ? ` · ${a.nota}` : '';
                return `
                  <div class="agenda-bloco ${a.tipo}">
                    <span class="agenda-hora">${horaBR(a.inicio)}<br>${horaBR(a.fim)}</span>
                    <span>
                      <span class="agenda-nome">${escapar(a.nome)}</span>
                      <span class="agenda-detalhe">${escapar(turma + a.sala + nota)}</span>
                    </span>
                  </div>`;
              })
              .join('');

      return `<section class="agenda-dia${ehHoje ? ' hoje' : ''}"><h2>${d.nome}</h2>${corpo}</section>`;
    }).join('');
  }

  /* --- linha do horário atual --- */

  function atualizarLinhaAgora() {
    document.querySelectorAll('.linha-agora, .marca-agora').forEach((n) => n.remove());

    const agora = new Date();
    const minutos = agora.getHours() * 60 + agora.getMinutes();
    if (minutos < HORA_INICIAL * 60 || minutos > HORA_FINAL * 60) return;

    const p = ((minutos - HORA_INICIAL * 60) / JANELA) * 100;

    document.querySelectorAll('.trilha').forEach((trilha) => {
      const linha = document.createElement('div');
      linha.className = 'linha-agora';
      linha.style.top = p + '%';
      trilha.appendChild(linha);
    });

    const eixo = document.querySelector('.eixo');
    if (!eixo) return;
    const marca = document.createElement('div');
    marca.className = 'marca-agora';
    marca.style.top = p + '%';
    marca.textContent =
      String(agora.getHours()).padStart(2, '0') + ':' + String(agora.getMinutes()).padStart(2, '0');
    eixo.appendChild(marca);
  }

  /* --- próxima atividade --- */

  function proximaAtividade() {
    const agora = new Date();
    const diaSemana = agora.getDay();
    const minutos = agora.getHours() * 60 + agora.getMinutes();

    for (let deslocamento = 0; deslocamento < 7; deslocamento++) {
      const chave = CHAVE_POR_DIA_SEMANA[(diaSemana + deslocamento) % 7];
      let aulas = aulasDo(chave);
      if (deslocamento === 0) aulas = aulas.filter((a) => emMinutos(a.fim) > minutos);
      if (aulas.length === 0) continue;

      const aula = aulas[0];
      const acontecendo =
        deslocamento === 0 && emMinutos(aula.inicio) <= minutos && minutos < emMinutos(aula.fim);
      return { aula, acontecendo, deslocamento, chave };
    }
    return null;
  }

  function renderizarAgora() {
    const info = proximaAtividade();
    if (!info) {
      elAgora.textContent = 'Nenhuma atividade cadastrada.';
      return;
    }

    const { aula, acontecendo, deslocamento, chave } = info;
    const turma = aula.turma ? ` (${aula.turma})` : '';
    const nomeDia = DIAS.find((d) => d.chave === chave).nome;

    if (acontecendo) {
      elAgora.innerHTML = `<strong>Agora:</strong> ${escapar(aula.nome + turma)} até ${horaBR(aula.fim)} — ${escapar(aula.sala)}`;
    } else if (deslocamento === 0) {
      elAgora.innerHTML = `<strong>Próxima aula:</strong> ${escapar(aula.nome + turma)} hoje às ${horaBR(aula.inicio)} — ${escapar(aula.sala)}`;
    } else {
      elAgora.innerHTML = `<strong>Próxima aula:</strong> ${escapar(aula.nome + turma)} — ${nomeDia} às ${horaBR(aula.inicio)} — ${escapar(aula.sala)}`;
    }
  }

  /* --- inicialização --- */

  if (elSemestre) elSemestre.textContent = SEMESTRE;

  renderizarLegenda();
  renderizarGrade();
  renderizarAgenda();
  atualizarLinhaAgora();
  renderizarAgora();

  setInterval(() => {
    atualizarLinhaAgora();
    renderizarAgora();
  }, 60000);
})();
