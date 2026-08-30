# Bloom — Módulo Estudante

Frontend estático do Bloom para demonstração do TCC. Não possui backend, banco de dados ou autenticação real. Os dados são fictícios e podem ser persistidos apenas no navegador via `localStorage`.

## Diretriz visual atual
- Paleta oficial do protótipo: `#FBF4E8`, `#F0E8D5`, `#C26747`, `#A35232`, `#332B25`, `#869176` e `#2D231E`.
- Interface mais limpa e profissional, com menos arredondamento, sombras discretas e melhor hierarquia.
- Navbar horizontal com apenas as cinco áreas principais: Início, Organizar, Estudar, Bem-estar e Instituição.
- Notificações, perfil e configurações ficam como ações secundárias, sem competir com a navegação principal.
- A antiga seção separada de “Lembretes” foi consolidada em Notificações + Configurações, evitando duplicidade.
- Ideias continuam disponíveis pela Caixa de Ideias, mas deixaram de ocupar uma aba permanente.
- Estudos foi reduzido aos fluxos centrais: visão geral, Pomodoro, Modo Foco e Progresso.
- O chatbot possui um único ponto de entrada: a capivara Bloom no canto inferior direito. O launcher preto duplicado foi removido.

## Funcionalidades principais

### Pessoal / Emocional
- Diário pessoal com criação, edição e exclusão e suporte visual para anexos de imagem/áudio.
- Check-in emocional com emoções, observação e histórico.
- Autoconhecimento com questionários/reflexões e resultados apresentados como observação pessoal.
- Caixa de ideias integrada às tarefas.
- Recomendações leves na Home.
- Busca demonstrativa de instituições de saúde mental com distância, endereço, avaliação, horário, telefone, WhatsApp e mapa.
- Práticas de bem-estar: respiração, meditação, pausas e relaxamento.

### Organização pessoal
- Calendário mensal.
- Tarefas com criar, editar, excluir, prioridade, prazo, categoria e conclusão.
- Hábitos com metas, frequência, registro e progresso.
- Notificações e lembretes por categoria em Configurações.
- Conversão de ideia em tarefa.

### Estudos
- Pomodoro.
- Modo Foco.
- Sons ambientes integrados ao foco.
- Progresso com horas, sessões, metas e evolução visual.

### Conta
- Perfil do estudante.
- Personalização básica de tema e preferências.
- Privacidade e gerenciamento/exportação de dados locais.
- Fluxo de conta demonstrativo, sem autenticação real.

### Integração institucional
- Vínculo por convite/código simulado.
- Agenda acadêmica.
- Encerramento do vínculo com confirmação e explicação.
- Apoio e acolhimento com solicitação e acompanhamento de status.
- Comunidades com entrar/sair e fluxo demonstrativo de publicação, curtida e comentário.
- Feedback de matérias, professores, carga e instituição.
- Canal de denúncias com anonimato e anexos simulados.
- Comunicação institucional com avisos, campanhas e conteúdos.
- Eventos e campanhas com participação, lembrete, calendário e pergunta anônima.

## Arquivos principais
- `index.html` — shell e entrada do site.
- `theme.css` — estilos-base originais.
- `refined.css` — ajustes visuais atuais e nova paleta.
- `app.js` — rotas, telas, dados mockados e interações do módulo estudante.
- `enhance.js` — chatbot e capivara Bloom.

## Executar

Abra `index.html` em um navegador. O app também pode ser servido por qualquer servidor HTTP estático.

## GitHub Pages

O projeto usa uma aplicação estática com Hash Routing (`#/...`), adequada ao GitHub Pages. Em GitHub → Settings → Pages, selecione `Deploy from a branch`, branch `main` e pasta `/ (root)`.

As informações persistidas pelo protótipo ficam no navegador do usuário e não são enviadas para servidor.
