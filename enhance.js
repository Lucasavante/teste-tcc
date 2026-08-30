(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const app = $('#app');

  const mascotSvg = `
    <div class="capybara" aria-hidden="true">
      <div class="capy-face">
        <i class="capy-eye l"></i><i class="capy-eye r"></i>
        <i class="capy-nose"></i><i class="capy-mouth"></i>
      </div>
      <i class="capy-leaf"></i>
    </div>`;

  function addChrome() {
    if (!$('#bloomChat')) {
      document.body.insertAdjacentHTML('beforeend', `
        <button class="bloom-chat-launcher" id="bloomChatLauncher" aria-label="Abrir assistente Bloom">✦</button>
        <aside class="bloom-chat" id="bloomChat" aria-label="Assistente Bloom">
          <div class="chat-header">
            <div class="chat-avatar">🌿</div>
            <div><strong>Assistente Bloom</strong><small>apoio para organizar, estudar e pausar</small></div>
            <button class="chat-close" id="bloomChatClose" aria-label="Fechar">×</button>
          </div>
          <div class="chat-body" id="bloomChatBody">
            <div class="chat-msg bot">Oi, Ana. Eu sou o assistente do Bloom. Posso ajudar você a encontrar uma função ou escolher um próximo passo mais leve.</div>
            <div class="chat-quick" id="bloomQuick">
              <button data-chat="organizar">Organizar meu dia</button>
              <button data-chat="estudar">Quero estudar</button>
              <button data-chat="respirar">Preciso de uma pausa</button>
              <button data-chat="apoio">Encontrar apoio</button>
            </div>
          </div>
          <form class="chat-form" id="bloomChatForm">
            <input id="bloomChatInput" autocomplete="off" placeholder="Escreva uma mensagem…" aria-label="Mensagem">
            <button type="submit">Enviar</button>
          </form>
        </aside>
        <div class="bloom-mascot" id="bloomMascot">
          <div class="mascot-bubble" id="mascotBubble">Oi, Ana! Eu fico por aqui quando você precisar. 🌱</div>
          <button class="mascot-btn" id="mascotButton" aria-label="Mascote Bloom">${mascotSvg}</button>
        </div>`);
    }

    if (!document.querySelector('.lang')) {
      const right = $('.nav-right');
      if (right) {
        const lang = document.createElement('span');
        lang.className = 'lang';
        lang.title = 'Idioma';
        lang.textContent = 'ES';
        right.prepend(lang);
      }
    }

    wireChat();
  }

  function wireChat() {
    const launcher = $('#bloomChatLauncher');
    const panel = $('#bloomChat');
    const close = $('#bloomChatClose');
    const form = $('#bloomChatForm');
    const input = $('#bloomChatInput');
    const body = $('#bloomChatBody');
    const mascot = $('#mascotButton');
    const bubble = $('#mascotBubble');
    if (!launcher || launcher.dataset.bound) return;
    launcher.dataset.bound = '1';

    const open = () => { panel.classList.add('open'); input.focus(); };
    const toggle = () => panel.classList.toggle('open');
    launcher.addEventListener('click', toggle);
    close.addEventListener('click', () => panel.classList.remove('open'));
    mascot.addEventListener('click', () => {
      if (panel.classList.contains('open')) panel.classList.remove('open');
      else { open(); bubble.classList.remove('show'); }
    });
    mascot.addEventListener('dblclick', () => bubble.classList.toggle('show'));

    const reply = (text, user = false) => {
      const d = document.createElement('div');
      d.className = 'chat-msg ' + (user ? 'user' : 'bot');
      d.textContent = text;
      body.appendChild(d);
      body.scrollTop = body.scrollHeight;
    };

    const respond = (text) => {
      const t = text.toLowerCase();
      if (t.includes('organ') || t.includes('agenda') || t.includes('tarefa')) {
        return 'Vamos por partes. Acesse Organizar para ver suas tarefas, calendário e hábitos. Uma boa opção agora é escolher apenas a próxima atividade.';
      }
      if (t.includes('estud') || t.includes('foco') || t.includes('pomodoro')) {
        return 'Para estudar, você pode abrir Estudar e iniciar um Pomodoro. Comece com uma sessão curta e faça uma pausa ao terminar.';
      }
      if (t.includes('respir') || t.includes('pausa') || t.includes('ans') || t.includes('sobrecar')) {
        return 'Que tal fazer uma pausa de um minuto? Abra Bem-estar → Respiração. O Bloom também pode registrar como você está se sentindo.';
      }
      if (t.includes('apoio') || t.includes('ajuda')) {
        return 'Você pode encontrar serviços em Bem-estar → Encontrar apoio ou solicitar acolhimento dentro de Instituição.';
      }
      if (t.includes('notifica')) {
        return 'Você pode organizar seus lembretes por categoria em Organizar → Lembretes e também em Configurações.';
      }
      return 'Posso orientar você sobre Organizar, Estudar, Bem-estar, apoio e notificações. O que você gostaria de fazer agora?';
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;
      reply(text, true);
      input.value = '';
      setTimeout(() => reply(respond(text)), 280);
    });

    body.addEventListener('click', (e) => {
      const b = e.target.closest('[data-chat]');
      if (!b) return;
      const label = b.textContent;
      const key = b.dataset.chat;
      reply(label, true);
      setTimeout(() => reply(respond(key)), 220);
    });
  }

  // Torna cada tela um pouco mais respirada e corrige layouts legados sem tocar na lógica existente.
  function polish() {
    addChrome();
    if (!app) return;

    // Na tela de lembretes, garante que cada categoria vire uma linha visual completa.
    const rows = app.querySelectorAll('.setting-row');
    rows.forEach((row) => {
      row.style.display = 'flex';
      row.style.alignItems = 'center';
      row.style.justifyContent = 'space-between';
      row.style.gap = '18px';
    });

    // Foco visual no módulo atual sem exagerar em cantos e sombras.
    app.querySelectorAll('.card').forEach((card) => {
      card.style.overflow = 'hidden';
    });
  }

  // app.js já chama render() internamente. O observer reaplica o acabamento sempre que o conteúdo muda de rota.
  const observer = new MutationObserver(() => polish());
  if (app) observer.observe(app, { childList: true, subtree: true });
  polish();
})();
