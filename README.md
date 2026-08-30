# Bloom — Módulo Estudante

Frontend estático do Bloom para demonstração do TCC. Não possui backend, banco de dados ou autenticação real. Os dados são fictícios e podem ser persistidos apenas no navegador via `localStorage`.

## O que está implementado

### Pessoal / Emocional
- Diário pessoal com criação, edição, exclusão e suporte visual para imagem/áudio simulados.
- Check-in emocional com emoções, fatores, observação e histórico.
- Autoconhecimento com questionários/reflexões e resultados apresentados como observação pessoal.
- Caixa de ideias com captura rápida, arquivamento e conversão para tarefa.
- Mensagens motivadoras e recomendações diárias demonstrativas.
- Busca demonstrativa de instituições de saúde mental com raio de referência, distância, endereço, avaliação, horário, telefone, WhatsApp e mapa.
- Práticas de bem-estar: respiração, meditação, pausas e relaxamento.

### Organização pessoal
- Calendário mensal demonstrativo.
- Tarefas com criação, edição, exclusão, prioridade, prazo, categoria e conclusão.
- Hábitos com metas, frequência, registro e progresso.
- Notificações e lembretes por categoria.
- Caixa de ideias integrada às tarefas.

### Estudos
- Pomodoro com início, pausa, reinício e modos 25/5, 50/10 e personalizado.
- Modo Foco.
- Sons ambientes com seleção, volume, duração e favoritos simulados.
- Progresso com horas, sessões, metas e evolução visual.

### Conta
- Perfil do estudante.
- Personalização de tema, cor de destaque e informações mostradas na Home.
- Privacidade e gerenciamento/exportação de dados locais.
- Fluxo de conta demonstrativo, sem autenticação real.

### Integração institucional
- Vínculo por convite/código simulado.
- Agenda acadêmica.
- Encerramento do vínculo com confirmação e explicação sobre os dados.
- Apoio e acolhimento com solicitação e acompanhamento de status.
- Comunidades com entrar/sair, publicações, curtidas e comentários.
- Feedback de matérias, professores, carga e instituição.
- Canal de denúncias com opção de anonimato, data, horário, local e anexos simulados.
- Comunicação institucional com avisos, campanhas e conteúdos.
- Eventos e campanhas com participação, lembrete, calendário e pergunta anônima.

## Executar

Abra `index.html` em um navegador. O app também pode ser servido por qualquer servidor HTTP estático.

## GitHub Pages

O projeto usa uma aplicação estática com Hash Routing (`#/...`), adequada ao GitHub Pages. Em GitHub → Settings → Pages, selecione `Deploy from a branch`, branch `main` e pasta `/ (root)`.

As informações persistidas pelo protótipo ficam no navegador do usuário e não são enviadas para servidor.
