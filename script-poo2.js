const chapters = [
  {
    id: "cap-1",
    title: "JavaFX",
    fullTitle: "Capítulo 1 — JavaFX: Interface Gráfica",
    slides: `
      <h3>Slides</h3>
      <iframe class="slides-iframe" src="slides/Cap01-JavaFX-Slides.pdf#toolbar=0&navpanes=0&view=FitH" width="100%" style="border:0;" loading="lazy"></iframe>
      <p class="note">Seu navegador não embute PDF. <a href="slides/Cap01-JavaFX-Slides.pdf" target="_blank" rel="noopener">Abra/baixe o arquivo</a>.</p>
      <iframe class="slides-iframe" src="slides/Cap01-JavaFX-Slides-Google.pdf#toolbar=0&navpanes=0&view=FitH" width="100%" style="border:0;" loading="lazy"></iframe>
      <p class="note">Slides (Google). <a href="slides/Cap01-JavaFX-Slides-Google.pdf" target="_blank" rel="noopener">Abra/baixe o arquivo</a>.</p>
    `,
    infographic: `
      <h3>Infográfico</h3>
      <div class="infographic-container">
        <img class="infographic-img" src="infograficos/Cap01-JavaFX-Infografico.png" alt="Infográfico - Capítulo 1: JavaFX" loading="lazy" />
      </div>
    `,
    podcast: `
      <h3>Podcast</h3>
      <div class="podcast-container">
        <audio controls class="podcast-player">
          <source src="podcasts/Cap01-JavaFX-Slides-Podcast.m4a" type="audio/mp4">
          Seu navegador não suporta o elemento de áudio. <a href="podcasts/Cap01-JavaFX-Slides-Podcast.m4a" target="_blank" rel="noopener">Baixe o podcast</a>.
        </audio>
      </div>
    `,
    video: `
      <h3>Vídeo</h3>
      <div class="video-container">
        <iframe
          class="video-player youtube-iframe"
          src="https://www.youtube-nocookie.com/embed/videoseries?list=PL-mvLy2ws8IJ67KgbRQbE4QoIgmn9CeyK"
          title="Capítulo 1 — Playlist JavaFX"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          style="aspect-ratio:16/9"
        ></iframe>
        <p class="note youtube-link">Playlist no YouTube: <a href="https://www.youtube.com/watch?v=M-kMpOWTAZA&list=PL-mvLy2ws8IJ67KgbRQbE4QoIgmn9CeyK" target="_blank" rel="noopener">abrir</a>.</p>
        <video controls class="video-player" preload="metadata">
          <source src="videos/Cap01-JavaFX-Video-Google.mp4" type="video/mp4">
          Seu navegador não suporta o elemento de vídeo. <a href="videos/Cap01-JavaFX-Video-Google.mp4" target="_blank" rel="noopener">Baixe o vídeo</a>.
        </video>
      </div>
    `,
    contentUrl: "https://ravarmes.github.io/book-poo2/OEBPS/text/cap01_javafx.html",
    sections: [
      {
        id: "1.1",
        title: "Introdução ao JavaFX",
        practiceUrl: "praticas/cap-1/1-1/index.html",
        practice: `
          <p>Monte um "Hello JavaFX" e identifique <strong>Stage</strong>, <strong>Scene</strong> e o nó raiz.</p>
          <ul>
            <li>Crie uma janela com um <code>Label</code> e um <code>Button</code>.</li>
            <li>Altere o título do <code>Stage</code> e o tamanho da <code>Scene</code>.</li>
            <li>Explique o que acontece dentro do método <code>start</code>.</li>
          </ul>
        `,
        exercises: [
          { type: "mc", prompt: "Em JavaFX, a classe base que inicia a aplicação é...", options: ["Thread", "Application", "Stage"], answerIndex: 1 },
          { type: "mc", prompt: "O método chamado pelo runtime para montar a UI é...", options: ["main()", "run()", "start(Stage primaryStage)"], answerIndex: 2 },
        ],
      },
      {
        id: "1.2",
        title: "Estrutura Básica: Stage, Scene e Nodes",
        practiceUrl: "praticas/cap-1/1-2/index.html",
        practice: `
          <p>Desenhe o <strong>Scene Graph</strong> de uma tela simples.</p>
          <ul>
            <li>Nó raiz: um <code>VBox</code></li>
            <li>Filhos: <code>Label</code>, <code>TextField</code> e <code>Button</code></li>
            <li>Explique por que a UI deve ser atualizada na JavaFX Application Thread</li>
          </ul>
        `,
        exercises: [
          { type: "mc", prompt: "Qual item representa a árvore hierárquica de nós do JavaFX?", options: ["JVM Stack", "Scene Graph", "Class Loader"], answerIndex: 1 },
          { type: "mc", prompt: "Em uma aplicação JavaFX, o Stage é...", options: ["A janela principal", "O layout raiz", "Um controle de formulário"], answerIndex: 0 },
        ],
      },
      {
        id: "1.3",
        title: "Layouts: BorderPane e AnchorPane",
        practiceUrl: "praticas/cap-1/1-3/index.html",
        practice: `
          <p>Modele uma tela com cabeçalho, conteúdo e rodapé usando <strong>BorderPane</strong>.</p>
          <ul>
            <li>Top: barra com título</li>
            <li>Center: formulário</li>
            <li>Bottom: botões de ação</li>
          </ul>
        `,
        exercises: [
          { type: "mc", prompt: "No BorderPane, a região usada tipicamente para o conteúdo principal é...", options: ["Top", "Center", "Right"], answerIndex: 1 },
          { type: "mc", prompt: "Qual layout é útil para posicionamento relativo às bordas do contêiner?", options: ["AnchorPane", "StackPane", "FlowPane"], answerIndex: 0 },
        ],
      },
      {
        id: "1.4",
        title: "Controles: Componentes de Interface",
        practiceUrl: "praticas/cap-1/1-4/index.html",
        practice: `
          <p>Crie um pequeno formulário usando controles JavaFX.</p>
          <ul>
            <li><code>TextField</code> para nome</li>
            <li><code>PasswordField</code> para senha</li>
            <li><code>ChoiceBox</code> ou <code>ComboBox</code> para seleção</li>
            <li><code>Button</code> para enviar e validar</li>
          </ul>
        `,
        exercises: [
          { type: "mc", prompt: "Qual controle é apropriado para entrada de senha com mascaramento?", options: ["TextField", "PasswordField", "Label"], answerIndex: 1 },
          { type: "mc", prompt: "Qual controle apresenta uma lista suspensa de opções?", options: ["ComboBox", "HBox", "GridPane"], answerIndex: 0 },
        ],
      },
    ],

  },
  {
    id: "cap-2",
    title: "Java JDBC",
    fullTitle: "Capítulo 2 — Java JDBC: Persistência de Dados",
    slides: `
      <h3>Slides</h3>
      <iframe class="slides-iframe" src="slides/Cap02-JavaJDBC-Slides.pdf#toolbar=0&navpanes=0&view=FitH" width="100%" style="border:0;" loading="lazy"></iframe>
      <p class="note">Seu navegador não embute PDF. <a href="slides/Cap02-JavaJDBC-Slides.pdf" target="_blank" rel="noopener">Abra/baixe o arquivo</a>.</p>
      <iframe class="slides-iframe" src="slides/Cap02-JavaJDBC-Slides-Google.pdf#toolbar=0&navpanes=0&view=FitH" width="100%" style="border:0;" loading="lazy"></iframe>
      <p class="note">Slides (Google). <a href="slides/Cap02-JavaJDBC-Slides-Google.pdf" target="_blank" rel="noopener">Abra/baixe o arquivo</a>.</p>
    `,
    infographic: `
      <h3>Infográfico</h3>
      <div class="infographic-container">
        <img class="infographic-img" src="infograficos/Cap02-JavaJDBC-Infografico.png" alt="Infográfico - Capítulo 2: Java JDBC" loading="lazy" />
      </div>
    `,
    podcast: `
      <h3>Podcast</h3>
      <div class="podcast-container">
        <audio controls class="podcast-player">
          <source src="podcasts/Cap02-JavaJDBC-PodCast.m4a" type="audio/mp4">
          Seu navegador não suporta o elemento de áudio. <a href="podcasts/Cap02-JavaJDBC-PodCast.m4a" target="_blank" rel="noopener">Baixe o podcast</a>.
        </audio>
      </div>
    `,
    video: `
      <h3>Vídeo</h3>
      <div class="video-container">
        <iframe
          class="video-player youtube-iframe"
          src="https://www.youtube-nocookie.com/embed/videoseries?list=PL-mvLy2ws8IK43iGS3DU2dS1GDwix5Qy7"
          title="Capítulo 2 — Playlist Java JDBC"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          style="aspect-ratio:16/9"
        ></iframe>
        <p class="note youtube-link">Playlist no YouTube: <a href="https://www.youtube.com/watch?v=D-By3tUHcys&list=PL-mvLy2ws8IK43iGS3DU2dS1GDwix5Qy7" target="_blank" rel="noopener">abrir</a>.</p>
        <video controls class="video-player" preload="metadata">
          <source src="videos/Cap02-JavaJDBC-Video-Google.mp4" type="video/mp4">
          Seu navegador não suporta o elemento de vídeo. <a href="videos/Cap02-JavaJDBC-Video-Google.mp4" target="_blank" rel="noopener">Baixe o vídeo</a>.
        </video>
      </div>
    `,
    contentUrl: "https://ravarmes.github.io/book-poo2/OEBPS/text/cap02_jdbc.html",
    sections: [
      {
        id: "2.1",
        title: "Introdução ao JDBC",
        practiceUrl: "praticas/cap-2/2-1/index.html",
        practice: `
          <p>Identifique as responsabilidades de <strong>Driver</strong>, <strong>Connection</strong>, <strong>Statement</strong> e <strong>ResultSet</strong>.</p>
          <ul>
            <li>Desenhe um fluxo: conectar → executar → ler resultado → fechar</li>
            <li>Liste boas práticas de fechamento (try-with-resources)</li>
          </ul>
        `,
        exercises: [
          { type: "mc", prompt: "Em JDBC, a interface que representa uma conexão aberta com o banco é...", options: ["Connection", "Session", "Socket"], answerIndex: 0 },
          { type: "mc", prompt: "Para garantir fechamento automático de recursos em Java, usa-se...", options: ["try-with-resources", "finalize()", "Thread.sleep()"], answerIndex: 0 },
        ],
      },
      {
        id: "2.2",
        title: "Bancos de Dados Relacionais",
        practiceUrl: "praticas/cap-2/2-2/index.html",
        practice: `
          <p>Modele duas tabelas simples (ex.: <em>Aluno</em> e <em>Turma</em>), com chaves e relacionamento.</p>
          <ul>
            <li>Defina uma chave primária e uma chave estrangeira</li>
            <li>Explique o que é integridade referencial</li>
          </ul>
        `,
        exercises: [
          { type: "mc", prompt: "Em um banco relacional, uma chave estrangeira serve para...", options: ["Criptografar dados", "Referenciar uma chave primária em outra tabela", "Acelerar qualquer consulta automaticamente"], answerIndex: 1 },
          { type: "mc", prompt: "Integridade referencial garante que...", options: ["Não existam duplicatas em colunas", "Referências apontem para registros válidos", "O banco nunca fique indisponível"], answerIndex: 1 },
        ],
      },
      {
        id: "2.3",
        title: "SQL: Comandos Básicos",
        practiceUrl: "praticas/cap-2/2-3/index.html",
        practice: `
          <p>Escreva comandos SQL para criar, inserir e consultar dados.</p>
          <ul>
            <li><code>CREATE TABLE</code> com PK e FK</li>
            <li><code>INSERT</code> em duas tabelas relacionadas</li>
            <li><code>SELECT</code> com <code>JOIN</code></li>
          </ul>
        `,
        exercises: [
          { type: "mc", prompt: "Qual comando é usado para consultar dados em SQL?", options: ["SELECT", "UPDATE", "DROP"], answerIndex: 0 },
          { type: "mc", prompt: "JOIN é usado para...", options: ["Combinar linhas de tabelas relacionadas", "Criptografar tabelas", "Gerar índices automaticamente"], answerIndex: 0 },
        ],
      },
      {
        id: "2.4",
        title: "Conectando e Consultando o Banco de Dados",
        practiceUrl: "praticas/cap-2/2-4/index.html",
        practice: `
          <p>Implemente um repositório JDBC para listar e inserir registros.</p>
          <ul>
            <li>Abra a conexão usando URL, usuário e senha</li>
            <li>Faça um <code>SELECT</code> e mapeie para um objeto</li>
            <li>Feche os recursos corretamente</li>
          </ul>
        `,
        exercises: [
          { type: "mc", prompt: "Para executar uma consulta SQL e obter linhas, costuma-se usar...", options: ["Statement/PreparedStatement + executeQuery()", "System.out.println()", "Thread.start()"], answerIndex: 0 },
          { type: "mc", prompt: "No mapeamento JDBC → objeto, o ResultSet fornece...", options: ["Colunas e valores da linha atual", "Somente metadados da conexão", "Somente o número de linhas"], answerIndex: 0 },
        ],
      },
    ],
  },
  {
    id: "cap-3",
    title: "Padrões",
    fullTitle: "Capítulo 3 — MVC: Padrões de Projeto",
    slides: `
      <h3>Slides</h3>
      <iframe class="slides-iframe" src="slides/Cap03-MVC-Slides.pdf#toolbar=0&navpanes=0&view=FitH" width="100%" style="border:0;" loading="lazy"></iframe>
      <p class="note">Seu navegador não embute PDF. <a href="slides/Cap03-MVC-Slides.pdf" target="_blank" rel="noopener">Abra/baixe o arquivo</a>.</p>
      <iframe class="slides-iframe" src="slides/Cap03-Padroes-Slides-Google.pdf#toolbar=0&navpanes=0&view=FitH" width="100%" style="border:0;" loading="lazy"></iframe>
      <p class="note">Slides (Google). <a href="slides/Cap03-Padroes-Slides-Google.pdf" target="_blank" rel="noopener">Abra/baixe o arquivo</a>.</p>
    `,
    infographic: `
      <h3>Infográfico</h3>
      <div class="infographic-container">
        <img class="infographic-img" src="infograficos/Cap03-Padroes-Infografico.png" alt="Infográfico - Capítulo 3: Padrões" loading="lazy" />
      </div>
    `,
    podcast: `
      <h3>Podcast</h3>
      <div class="podcast-container">
        <audio controls class="podcast-player">
          <source src="podcasts/Cap03-Padroes-PodCast.m4a" type="audio/mp4">
          Seu navegador não suporta o elemento de áudio. <a href="podcasts/Cap03-Padroes-PodCast.m4a" target="_blank" rel="noopener">Baixe o podcast</a>.
        </audio>
      </div>
    `,
    video: `
      <h3>Vídeo</h3>
      <div class="video-container">
        <iframe
          class="video-player youtube-iframe"
          src="https://www.youtube-nocookie.com/embed/videoseries?list=PL-mvLy2ws8ILNrs8jtEAwaZMxDZvlMj48"
          title="Capítulo 3 — Playlist MVC e Padrões"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          style="aspect-ratio:16/9"
        ></iframe>
        <p class="note youtube-link">Playlist no YouTube: <a href="https://www.youtube.com/watch?v=_Ke7CiTdmiI&list=PL-mvLy2ws8ILNrs8jtEAwaZMxDZvlMj48" target="_blank" rel="noopener">abrir</a>.</p>
        <video controls class="video-player" preload="metadata">
          <source src="videos/Cap03-Padroes-Video.mp4" type="video/mp4">
          Seu navegador não suporta o elemento de vídeo. <a href="videos/Cap03-Padroes-Video.mp4" target="_blank" rel="noopener">Baixe o vídeo</a>.
        </video>
      </div>
    `,
    contentUrl: "https://ravarmes.github.io/book-poo2/OEBPS/text/cap03_padroes.html",
    sections: [
      {
        id: "3.1",
        title: "Introdução: O Princípio da Separação MVC",
        practiceUrl: "praticas/cap-3/3-1/index.html",
        practice: `
          <p>Escolha um exemplo de aplicação (cadastro, agenda, estoque) e separe em <strong>Model</strong>, <strong>View</strong> e <strong>Controller</strong>.</p>
          <ul>
            <li>Model: regras e dados</li>
            <li>View: componentes JavaFX</li>
            <li>Controller: eventos, validação e chamadas ao Model</li>
          </ul>
        `,
        exercises: [
          { type: "mc", prompt: "No MVC, o objetivo principal é...", options: ["Misturar responsabilidades", "Separar responsabilidades", "Evitar classes"], answerIndex: 1 },
          { type: "mc", prompt: "Em geral, a View é responsável por...", options: ["Persistência em banco", "Interface e interação", "Regras de negócio complexas"], answerIndex: 1 },
        ],
      },
      {
        id: "3.2",
        title: "O Padrão Controlador",
        practiceUrl: "praticas/cap-3/3-2/index.html",
        practice: `
          <p>Implemente um Controller para um formulário.</p>
          <ul>
            <li>Capture evento de clique do botão</li>
            <li>Valide campos</li>
            <li>Chame um serviço do Model (ex.: <code>salvar()</code>)</li>
          </ul>
        `,
        exercises: [
          { type: "mc", prompt: "O Controller costuma lidar com...", options: ["Eventos e coordenação", "Renderização do PDF", "Configuração do banco"], answerIndex: 0 },
          { type: "mc", prompt: "Uma boa prática em MVC é...", options: ["View acessar diretamente o banco", "Controller delegar persistência ao DAO/serviço", "Controller concentrar toda a lógica e persistência"], answerIndex: 1 },
        ],
      },
      {
        id: "3.3",
        title: "O Padrão DAO (Data Access Object)",
        practiceUrl: "praticas/cap-3/3-3/index.html",
        practice: `
          <p>Desenhe a interface de um DAO e suas operações básicas.</p>
          <ul>
            <li><code>inserir</code>, <code>atualizar</code>, <code>remover</code>, <code>listar</code></li>
            <li>Explique por que isso facilita testes e troca de banco</li>
          </ul>
        `,
        exercises: [
          { type: "mc", prompt: "DAO tem como finalidade...", options: ["Separar acesso a dados da lógica", "Substituir o Controller", "Evitar o uso de classes"], answerIndex: 0 },
          { type: "mc", prompt: "Uma vantagem do DAO é...", options: ["UI acoplada ao banco", "Trocar estratégia de persistência com menos impacto", "Remover necessidade de SQL"], answerIndex: 1 },
        ],
      },
      {
        id: "3.4",
        title: "O Padrão Factory",
        practiceUrl: "praticas/cap-3/3-4/index.html",
        practice: `
          <p>Crie uma Factory para instanciar DAOs.</p>
          <ul>
            <li>Implemente <code>DaoFactory.getAlunoDao()</code></li>
            <li>Centralize criação e dependências</li>
          </ul>
        `,
        exercises: [
          { type: "mc", prompt: "Factory é usada para...", options: ["Criar objetos encapsulando instâncias concretas", "Persistir dados automaticamente", "Controlar threads"], answerIndex: 0 },
          { type: "mc", prompt: "Uma motivação para Factory é...", options: ["Aumentar acoplamento", "Centralizar criação e permitir substituições", "Evitar métodos"], answerIndex: 1 },
        ],
      },
      {
        id: "3.5",
        title: "Estrutura Completa do Projeto",
        practiceUrl: "praticas/cap-3/3-5/index.html",
        practice: `
          <p>Organize o projeto em pacotes e dependências.</p>
          <ul>
            <li><code>model</code>, <code>dao</code>, <code>controller</code>, <code>view</code></li>
            <li>Indique o fluxo: View → Controller → DAO → Banco</li>
          </ul>
        `,
        exercises: [
          { type: "mc", prompt: "Em uma arquitetura MVC + DAO, a UI deve chamar diretamente...", options: ["Tabelas do banco", "DAO via Controller/Serviço", "Driver JDBC sempre"], answerIndex: 1 },
          { type: "mc", prompt: "Separar em pacotes ajuda principalmente a...", options: ["Organizar e reduzir acoplamento", "Aumentar dependências cruzadas", "Eliminar testes"], answerIndex: 0 },
        ],
      },
    ],
  },
  {
    id: "cap-4",
    title: "Java Thread",
    fullTitle: "Capítulo 4 — Threads: Programação Concorrente",
    slides: `
      <h3>Slides</h3>
      <iframe class="slides-iframe" src="slides/Cap04-JavaThreads-Slides.pdf#toolbar=0&navpanes=0&view=FitH" width="100%" style="border:0;" loading="lazy"></iframe>
      <p class="note">Seu navegador não embute PDF. <a href="slides/Cap04-JavaThreads-Slides.pdf" target="_blank" rel="noopener">Abra/baixe o arquivo</a>.</p>
      <iframe class="slides-iframe" src="slides/Cap04-JavaThread-Slides-Google.pdf#toolbar=0&navpanes=0&view=FitH" width="100%" style="border:0;" loading="lazy"></iframe>
      <p class="note">Slides (Google). <a href="slides/Cap04-JavaThread-Slides-Google.pdf" target="_blank" rel="noopener">Abra/baixe o arquivo</a>.</p>
    `,
    infographic: `
      <h3>Infográfico</h3>
      <div class="infographic-container">
        <img class="infographic-img" src="infograficos/Cap04-JavaThread-Infografico.png" alt="Infográfico - Capítulo 4: Java Thread" loading="lazy" />
      </div>
    `,
    podcast: `
      <h3>Podcast</h3>
      <div class="podcast-container">
        <audio controls class="podcast-player">
          <source src="podcasts/Cap04-JavaThread-PodCast.m4a" type="audio/mp4">
          Seu navegador não suporta o elemento de áudio. <a href="podcasts/Cap04-JavaThread-PodCast.m4a" target="_blank" rel="noopener">Baixe o podcast</a>.
        </audio>
      </div>
    `,
    video: `
      <h3>Vídeo</h3>
      <div class="video-container">
        <iframe
          class="video-player youtube-iframe"
          src="https://www.youtube-nocookie.com/embed/videoseries?list=PL-mvLy2ws8IJQlIm-OIU9WO-hJPlARq_W"
          title="Capítulo 4 — Playlist Java Threads"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          style="aspect-ratio:16/9"
        ></iframe>
        <p class="note youtube-link">Playlist no YouTube: <a href="https://www.youtube.com/watch?v=bCmrhSma5bw&list=PL-mvLy2ws8IJQlIm-OIU9WO-hJPlARq_W" target="_blank" rel="noopener">abrir</a>.</p>
        <video controls class="video-player" preload="metadata">
          <source src="videos/Cap04-JavaThreads-Video.mp4" type="video/mp4">
          Seu navegador não suporta o elemento de vídeo. <a href="videos/Cap04-JavaThreads-Video.mp4" target="_blank" rel="noopener">Baixe o vídeo</a>.
        </video>
      </div>
    `,
    contentUrl: "https://ravarmes.github.io/book-poo2/OEBPS/text/cap04_threads.html",
    sections: [
      {
        id: "4.1",
        title: "Introdução",
        practiceUrl: "praticas/cap-4/4-1/index.html",
        practice: `
          <p>Liste situações em que concorrência é útil e quando ela pode atrapalhar.</p>
          <ul>
            <li>Tarefas independentes (download, processamento)</li>
            <li>UI responsiva (não bloquear a thread da interface)</li>
          </ul>
        `,
        exercises: [
          { type: "mc", prompt: "Concorrência é útil quando...", options: ["Há tarefas independentes", "Só existe 1 tarefa", "Não há I/O"], answerIndex: 0 },
          { type: "mc", prompt: "Em apps com UI, uma preocupação comum é...", options: ["Bloquear a interface", "Excluir classes", "Remover eventos"], answerIndex: 0 },
        ],
      },
      {
        id: "4.2",
        title: "Estado de thread: ciclo de vida",
        practiceUrl: "praticas/cap-4/4-2/index.html",
        practice: `
          <p>Descreva o ciclo de vida de uma thread (criada, pronta/rodando, bloqueada/espera, finalizada).</p>
          <ul>
            <li>Cite exemplos que levam a bloqueio (I/O, <code>sleep</code>, locks)</li>
          </ul>
        `,
        exercises: [
          { type: "mc", prompt: "Uma thread entra em estado de espera/bloqueio quando...", options: ["Executa I/O ou aguarda lock", "Compila código", "É instanciada com new"], answerIndex: 0 },
          { type: "mc", prompt: "Após terminar o método run, a thread fica...", options: ["Em loop infinito", "Finalizada", "Em estado NEW"], answerIndex: 1 },
        ],
      },
      {
        id: "4.3",
        title: "Prioridades e agendamento de threads",
        practiceUrl: "praticas/cap-4/4-3/index.html",
        practice: `
          <p>Discuta prioridade de threads e por que ela não é garantia de ordem de execução.</p>
          <ul>
            <li>Pesquise diferenças de agendador entre sistemas operacionais</li>
          </ul>
        `,
        exercises: [
          { type: "mc", prompt: "Prioridade de thread em Java...", options: ["Garante execução imediata", "É apenas uma sugestão ao agendador", "Elimina necessidade de sincronização"], answerIndex: 1 },
          { type: "mc", prompt: "Em concorrência, ordem de execução é...", options: ["Determinística sempre", "Não-determinística em geral", "Igual à ordem de criação"], answerIndex: 1 },
        ],
      },
      {
        id: "4.4",
        title: "Criando e executando threads",
        practiceUrl: "praticas/cap-4/4-4/index.html",
        practice: `
          <p>Implemente uma tarefa em background de duas formas: estendendo <code>Thread</code> e usando <code>Runnable</code>.</p>
          <ul>
            <li>Compare vantagens do <code>Runnable</code> (composição)</li>
          </ul>
        `,
        exercises: [
          { type: "mc", prompt: "Qual é uma forma comum de definir trabalho para uma thread?", options: ["Runnable", "Serializable", "Closeable"], answerIndex: 0 },
          { type: "mc", prompt: "Para iniciar uma thread, chama-se...", options: ["start()", "run()", "sleep()"], answerIndex: 0 },
        ],
      },
      {
        id: "4.5",
        title: "Sincronização de threads",
        practiceUrl: "praticas/cap-4/4-5/index.html",
        practice: `
          <p>Crie um contador compartilhado e proteja com sincronização.</p>
          <ul>
            <li>Mostre o problema de corrida sem sincronizar</li>
            <li>Corrija com <code>synchronized</code> ou locks</li>
          </ul>
        `,
        exercises: [
          { type: "mc", prompt: "Condição de corrida ocorre quando...", options: ["Threads acessam dados compartilhados sem coordenação", "Só existe uma thread", "Não há variáveis"], answerIndex: 0 },
          { type: "mc", prompt: "Uma forma de proteger uma seção crítica em Java é...", options: ["synchronized", "System.gc()", "finalize()"], answerIndex: 0 },
        ],
      },
      {
        id: "4.6",
        title: "Multithreading com GUI",
        practiceUrl: "praticas/cap-4/4-6/index.html",
        practice: `
          <p>Implemente uma tarefa longa e atualize a UI corretamente.</p>
          <ul>
            <li>Execute o trabalho fora da thread da UI</li>
            <li>Use um mecanismo de atualização seguro (ex.: <code>Platform.runLater</code>)</li>
          </ul>
        `,
        exercises: [
          { type: "mc", prompt: "Atualizar componentes JavaFX deve ocorrer...", options: ["Na JavaFX Application Thread", "Em qualquer thread", "Só no main()"], answerIndex: 0 },
          { type: "mc", prompt: "Uma estratégia comum é...", options: ["Executar trabalho pesado em background", "Bloquear a UI até terminar", "Remover eventos"], answerIndex: 0 },
        ],
      },
    ],
  },
  {
    id: "cap-5",
    title: "Java Sockets",
    fullTitle: "Capítulo 5 — Sockets: Programação Distribuída",
    slides: `
      <h3>Slides</h3>
      <iframe class="slides-iframe" src="slides/Cap05-JavaSockets-Slides.pdf#toolbar=0&navpanes=0&view=FitH" width="100%" style="border:0;" loading="lazy"></iframe>
      <p class="note">Seu navegador não embute PDF. <a href="slides/Cap05-JavaSockets-Slides.pdf" target="_blank" rel="noopener">Abra/baixe o arquivo</a>.</p>
      <iframe class="slides-iframe" src="slides/Cap05-JavaSockets-Slides-Google.pdf#toolbar=0&navpanes=0&view=FitH" width="100%" style="border:0;" loading="lazy"></iframe>
      <p class="note">Slides (Google). <a href="slides/Cap05-JavaSockets-Slides-Google.pdf" target="_blank" rel="noopener">Abra/baixe o arquivo</a>.</p>
    `,
    infographic: `
      <h3>Infográfico</h3>
      <div class="infographic-container">
        <img class="infographic-img" src="infograficos/Cap05-JavaSockets-Infografico.png" alt="Infográfico - Capítulo 5: Java Sockets" loading="lazy" />
      </div>
    `,
    podcast: `
      <h3>Podcast</h3>
      <div class="podcast-container">
        <audio controls class="podcast-player">
          <source src="podcasts/Cap05-JavaSockets-PodCast.m4a" type="audio/mp4">
          Seu navegador não suporta o elemento de áudio. <a href="podcasts/Cap05-JavaSockets-PodCast.m4a" target="_blank" rel="noopener">Baixe o podcast</a>.
        </audio>
      </div>
    `,
    video: `
      <h3>Vídeo</h3>
      <div class="video-container">
        <iframe
          class="video-player youtube-iframe"
          src="https://www.youtube-nocookie.com/embed/videoseries?list=PL-mvLy2ws8IIGRMem0tQrKc-h4jHPhadk"
          title="Capítulo 5 — Playlist Java Sockets"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          style="aspect-ratio:16/9"
        ></iframe>
        <p class="note youtube-link">Playlist no YouTube: <a href="https://www.youtube.com/watch?v=gUUdOmNDgPg&list=PL-mvLy2ws8IIGRMem0tQrKc-h4jHPhadk" target="_blank" rel="noopener">abrir</a>.</p>
        <video controls class="video-player" preload="metadata">
          <source src="videos/Cap05-JavaSockets-Video.mp4" type="video/mp4">
          Seu navegador não suporta o elemento de vídeo. <a href="videos/Cap05-JavaSockets-Video.mp4" target="_blank" rel="noopener">Baixe o vídeo</a>.
        </video>
      </div>
    `,
    contentUrl: "https://ravarmes.github.io/book-poo2/OEBPS/text/cap05_sockets.html",
    sections: [
      {
        id: "5.1",
        title: "Sockets",
        practiceUrl: "praticas/cap-5/5-1/index.html",
        practice: `
          <p>Explique o que é um socket e como ele se relaciona com IP e porta.</p>
          <ul>
            <li>Descreva cliente vs servidor</li>
            <li>O que significa “porta 8080”?</li>
          </ul>
        `,
        exercises: [
          { type: "mc", prompt: "Um socket é...", options: ["Uma conexão lógica de comunicação", "Uma classe do JavaFX", "Um arquivo PDF"], answerIndex: 0 },
          { type: "mc", prompt: "Porta em rede identifica...", options: ["Um computador", "Um serviço/aplicação no host", "Um cabo físico"], answerIndex: 1 },
        ],
      },
      {
        id: "5.2",
        title: "Tipos de sockets",
        practiceUrl: "praticas/cap-5/5-2/index.html",
        practice: `
          <p>Compare TCP e UDP.</p>
          <ul>
            <li>Quando usar TCP?</li>
            <li>Quando UDP pode ser adequado?</li>
          </ul>
        `,
        exercises: [
          { type: "mc", prompt: "TCP é conhecido por...", options: ["Entrega confiável e ordenada", "Ausência total de conexão", "Ser sempre mais rápido"], answerIndex: 0 },
          { type: "mc", prompt: "UDP é caracterizado por...", options: ["Conexão com handshake", "Baixa sobrecarga e sem garantias de entrega", "Transação ACID"], answerIndex: 1 },
        ],
      },
      {
        id: "5.3",
        title: "Sockets TCP",
        practiceUrl: "praticas/cap-5/5-3/index.html",
        practice: `
          <p>Desenhe o fluxo de conexão TCP (cliente conecta, servidor aceita, troca de dados).</p>
          <ul>
            <li>Explique o papel do <code>ServerSocket</code> e do <code>Socket</code></li>
          </ul>
        `,
        exercises: [
          { type: "mc", prompt: "No Java, o servidor que “escuta” uma porta TCP usa...", options: ["ServerSocket", "DatagramSocket", "ThreadGroup"], answerIndex: 0 },
          { type: "mc", prompt: "Após aceitar uma conexão, a comunicação costuma ocorrer via...", options: ["Socket + streams", "FXML", "ResultSet"], answerIndex: 0 },
        ],
      },
      {
        id: "5.4",
        title: "Sockets Java",
        practiceUrl: "praticas/cap-5/5-4/index.html",
        practice: `
          <p>Implemente um cliente que envia mensagem e um servidor que responde.</p>
          <ul>
            <li>Defina um protocolo simples (ex.: linha de texto por mensagem)</li>
            <li>Trate encerramento de conexão e erros</li>
          </ul>
        `,
        exercises: [
          { type: "mc", prompt: "Para enviar dados em um Socket TCP, uma opção comum é usar...", options: ["InputStream/OutputStream", "BorderPane", "PreparedStatement"], answerIndex: 0 },
          { type: "mc", prompt: "Em um chat simples, o servidor geralmente precisa...", options: ["Aceitar várias conexões", "Executar apenas uma vez e encerrar", "Rodar sem threads sempre"], answerIndex: 0 },
        ],
      },
    ],
  },
];

const layoutEl = document.getElementById("layout");
const sidebarEl = document.getElementById("sidebar");
const listEl = document.getElementById("chapter-list");
const contentEl = document.getElementById("content");
const titleEl = document.getElementById("chapter-title");
const menuBtn = document.getElementById("menu-btn");
const collapseBtn = document.getElementById("collapse-sidebar-btn");

function buildSidebar() {
  const frag = document.createDocumentFragment();
  chapters.forEach((ch) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${ch.id}`;
    a.className = "chapter-link";
    a.textContent = ch.title;
    a.setAttribute("data-id", ch.id);
    li.appendChild(a);
    frag.appendChild(li);
  });
  listEl.innerHTML = "";
  listEl.appendChild(frag);
}

function renderPracticesSectioned(sections = []) {
  return `
    <h3>Práticas</h3>
    ${sections.map((s) => `
      <div class="subsection">
        <h4>${s.id} — ${s.title}</h4>
        ${s.practiceUrl
      ? `<iframe class="practice-iframe" src="${s.practiceUrl}" width="100%" style="border:0;" loading="lazy"></iframe>`
      : `<div>${s.practice || "<p>Sem prática definida.</p>"}</div>`}
      </div>
    `).join("")}
  `;
}

function renderContentsSectioned(sections = []) {
  return `
    <h3>Conteúdos</h3>
    ${sections.map((s) => `
      <div class="subsection">
        <h4>${s.id} — ${s.title}</h4>
        <div>${s.content || "<p>Sem conteúdo definido.</p>"}</div>
      </div>
    `).join("")}
  `;
}

function renderExercisesSectioned(sections = []) {
  if (!sections.length) return "<p>Sem exercícios por enquanto.</p>";
  return `
    <h3>Exercícios</h3>
    ${sections.map((s, secIdx) => `
      <div class="subsection" data-sec-index="${secIdx}">
        <h4>${s.id} — ${s.title}</h4>
        ${s.exerciseUrl
      ? `<iframe class="exercise-iframe" src="${s.exerciseUrl}" width="100%" style="border:0;" loading="lazy"></iframe>`
      : `${(s.exercises || []).map((ex, exIdx) => {
        if (ex.type === "mc") {
          const order = Array.from({ length: ex.options.length }, (_, i) => i).sort(() => Math.random() - 0.5);
          return `
            <div class="exercise" data-type="mc" data-sec-index="${secIdx}" data-ex-index="${exIdx}">
              <h4>${ex.prompt}</h4>
              <div class="options">
                ${order.map((origI) => `<button class="option-btn" data-i="${origI}">${ex.options[origI]}</button>`).join("")}
              </div>
              <div class="exercise-actions"><button class="redo-btn" type="button">Refazer</button></div>
              <div class="feedback" aria-live="polite"></div>
            </div>
          `;
        }
        return "";
      }).join("")}`}
      </div>
    `).join("")}
  `;
}

function wireExercisesSectioned(containerEl, sections) {
  containerEl.querySelectorAll('.exercise[data-type="mc"]').forEach((exEl) => {
    const secIdx = Number(exEl.getAttribute("data-sec-index"));
    const exIdx = Number(exEl.getAttribute("data-ex-index"));
    const data = sections?.[secIdx]?.exercises?.[exIdx];
    const fb = exEl.querySelector(".feedback");
    const optsEl = exEl.querySelector(".options");

    const getFallbackExplanation = () => {
      const s = sections?.[secIdx];
      if (!s) return `<div class="explanation">Releia os conceitos desta subseção.</div>`;
      if (s.content) return `<div class="explanation">${s.content}</div>`;
      return `<div class="explanation">Releia a seção ${s.id} — ${s.title}.</div>`;
    };

    const explanationHTMLIncorrect = data?.explanation ? `<div class="explanation">${data.explanation}</div>` : getFallbackExplanation();
    const explanationHTMLCorrect = data?.explanation ? `<div class="explanation">${data.explanation}</div>` : "";

    const bindOptionHandlers = () => {
      exEl.querySelectorAll(".option-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const chosen = Number(btn.getAttribute("data-i"));
          const correct = chosen === data?.answerIndex;
          exEl.querySelectorAll(".option-btn").forEach((b) => b.classList.remove("correct", "incorrect"));
          btn.classList.add(correct ? "correct" : "incorrect");
          fb.innerHTML = correct
            ? `Correto! ✅${explanationHTMLCorrect}`
            : `Incorreto. <details class="why"><summary>Por quê?</summary>${explanationHTMLIncorrect}</details>`;
        });
      });
    };

    bindOptionHandlers();

    const redoBtn = exEl.querySelector(".redo-btn");
    redoBtn?.addEventListener("click", () => {
      const order = Array.from({ length: data.options.length }, (_, i) => i).sort(() => Math.random() - 0.5);
      optsEl.innerHTML = order.map((origI) => `<button class="option-btn" data-i="${origI}">${data.options[origI]}</button>`).join("");
      fb.textContent = "";
      bindOptionHandlers();
    });
  });
}

function wireSlidesPanel(panelEl) {
  const iframes = Array.from(panelEl.querySelectorAll(".slides-iframe"));
  if (!iframes.length) return;

  iframes.forEach((iframe) => {
    const baseSrc = (iframe.getAttribute("src") || "").split("#")[0];
    const isGoogle = /-Google\.pdf$/i.test(baseSrc);
    const presBtn = document.createElement("button");
    presBtn.className = "present-btn";
    presBtn.textContent = isGoogle ? "Apresentação (Google)" : "Apresentação";
    panelEl.insertBefore(presBtn, iframe);

    let loaded = false;
    iframe.addEventListener("load", () => { loaded = true; });

    const setHeight = () => {
      iframe.style.height = Math.max(600, window.innerHeight - 180) + "px";
    };
    setHeight();
    window.addEventListener("resize", setHeight);

    presBtn.addEventListener("click", () => {
      const url = `${baseSrc}#page=1&view=FitH`;
      const win = window.open(url, "_blank");
      if (!win) {
        alert("Permita pop-ups para abrir a apresentação em nova aba.");
      } else {
        try { win.focus(); } catch (e) { }
      }
    });

    setTimeout(() => {
      if (loaded) return;
      const warning = document.createElement("div");
      warning.className = "note";
      warning.textContent = "Não foi possível embutir os slides (bloqueado pelo domínio). Use o link abaixo.";
      const fallback = iframe.nextElementSibling;
      if (fallback && fallback.classList.contains("note")) {
        panelEl.insertBefore(warning, fallback);
      } else {
        panelEl.appendChild(warning);
      }
    }, 3000);
  });
}

function wireVideosPanel(panelEl) {
  const isFile = window.location.protocol === "file:";
  if (!isFile) return;

  panelEl.querySelectorAll(".youtube-iframe").forEach((iframe) => {
    iframe.style.display = "none";
  });
  panelEl.querySelectorAll(".youtube-link").forEach((link) => {
    link.innerHTML = `${link.innerHTML} <span>(para embutir, abra o site via http://)</span>`;
  });
}

const githubReposByChapterId = {
  "cap-1": [
    { name: "javafx-introducao", url: "https://github.com/ravarmes/javafx-introducao" },
  ],
  "cap-2": [
    { name: "jdbc-dao-java", url: "https://github.com/ravarmes/jdbc-dao-java" },
    { name: "jdbc-exemplos-java", url: "https://github.com/ravarmes/jdbc-exemplos-java" },
  ],
  "cap-3": [
    { name: "javafx-crud-mvc", url: "https://github.com/ravarmes/javafx-crud-mvc" },
  ],
  "cap-4": [
    {
      group: "Introdução",
      repos: [
        { name: "threads-extendsthread-java", url: "https://github.com/ravarmes/threads-extendsthread-java" },
        { name: "threads-implementsrunnable-java", url: "https://github.com/ravarmes/threads-implementsrunnable-java" },
        { name: "threads-multithreadingcontadoras-java", url: "https://github.com/ravarmes/threads-multithreadingcontadoras-java" },
        { name: "threads-processadores-java", url: "https://github.com/ravarmes/threads-processadores-java" },
      ],
    },
    {
      group: "Métodos Importantes",
      repos: [
        { name: "threads-join-java", url: "https://github.com/ravarmes/threads-join-java" },
        { name: "threads-yield-java", url: "https://github.com/ravarmes/threads-yield-java" },
        { name: "threads-sleep-java", url: "https://github.com/ravarmes/threads-sleep-java" },
      ],
    },
    {
      group: "Sincronização de Threads",
      repos: [
        { name: "threads-synchronized1iphone-java", url: "https://github.com/ravarmes/threads-synchronized1iphone-java" },
        { name: "threads-synchronized2iphone-java", url: "https://github.com/ravarmes/threads-synchronized2iphone-java" },
        { name: "threads-waitnotifypedestal-java", url: "https://github.com/ravarmes/threads-waitnotifypedestal-java" },
        { name: "threads-deadlock-java", url: "https://github.com/ravarmes/threads-deadlock-java" },
      ],
    },
    {
      group: "Multithreading com GUI",
      repos: [
        { name: "threads-contadoras-javafx", url: "https://github.com/ravarmes/threads-contadoras-javafx" },
        { name: "threads-paresimpares-javafx", url: "https://github.com/ravarmes/threads-paresimpares-javafx" },
        { name: "threads-primosperfeitos-javafx", url: "https://github.com/ravarmes/threads-primosperfeitos-javafx" },
        { name: "threads-multithreadingtabela-javafx", url: "https://github.com/ravarmes/threads-multithreadingtabela-javafx" },
        { name: "threads-yieldsleepjoin-javafx", url: "https://github.com/ravarmes/threads-yieldsleepjoin-javafx" },
        { name: "threads-corridacavalos-javafx", url: "https://github.com/ravarmes/threads-corridacavalos-javafx" },
        { name: "threads-corridacavalosclassificacao-javafx", url: "https://github.com/ravarmes/threads-corridacavalosclassificacao-javafx" },
      ],
    },
  ],
  "cap-5": [
    { name: "sockets-clienteservidor-java", url: "https://github.com/ravarmes/sockets-clienteservidor-java" },
    { name: "sockets-primos-javafx", url: "https://github.com/ravarmes/sockets-primos-javafx" },
    { name: "sockets-jogodavelha-javafx", url: "https://github.com/ravarmes/sockets-jogodavelha-javafx" },
    { name: "sockets-chatreservado-javafx", url: "https://github.com/ravarmes/sockets-chatreservado-javafx" },
  ],
};

function renderGitHubPanel(chapter) {
  const model = chapter.githubRepos || githubReposByChapterId[chapter.id] || [];
  const isGrouped = Array.isArray(model) && model.length > 0 && typeof model[0] === "object" && "group" in model[0];

  const renderRepoList = (repos) => `
    <ul class="gh-repo-list">
      ${repos.map((r) => `
        <li class="gh-repo">
          <a class="gh-repo-link" href="${r.url}" target="_blank" rel="noopener"><img src="images/icon-github.png" alt="" class="gh-icon" style="width:18px;height:18px;vertical-align:middle;margin-right:8px;">${r.name}</a>
        </li>
      `).join("")}
    </ul>
  `;



  const items = model.length
    ? `
      ${isGrouped
      ? model.map((g) => `
            <h4 class="gh-repo-group">${g.group}</h4>
            ${renderRepoList(g.repos || [])}
          `).join("")
      : renderRepoList(model)}
    `
    : "<p>Sem repositórios cadastrados para este capítulo.</p>";

  return `
    <h3>GitHub</h3>
    <p>Repositórios de exemplos usados neste capítulo.</p>
    ${items}
  `;
}

function renderChapter(chapterId) {
  const chapter = chapters.find((c) => c.id === chapterId) || chapters[0];
  titleEl.textContent = chapter.fullTitle || chapter.title;

  document.querySelectorAll(".chapter-link").forEach((a) => {
    const isActive = a.getAttribute("data-id") === chapter.id;
    a.classList.toggle("active", isActive);
  });

  const tabs = [
    { key: "infographics", label: "Infográficos" },
    { key: "contents", label: "Conteúdos" },
    { key: "slides", label: "Slides" },
    { key: "podcasts", label: "Podcasts" },
    { key: "videos", label: "Vídeos" },
    { key: "exercises", label: "Exercícios" },
    { key: "practices", label: "Práticas" },
    { key: "github", label: "GitHub" },
  ];

  const toolbar = document.createElement("div");
  toolbar.className = "toolbar";
  const fsBtn = document.createElement("button");
  fsBtn.textContent = "Tela cheia";
  fsBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      contentEl.requestFullscreen?.();
      fsBtn.textContent = "Sair da tela cheia";
    } else {
      document.exitFullscreen?.();
      fsBtn.textContent = "Tela cheia";
    }
  });
  toolbar.appendChild(fsBtn);

  const tabbar = document.createElement("div");
  tabbar.className = "tabbar";
  const panels = document.createElement("div");

  tabs.forEach(({ key, label }, idx) => {
    const t = document.createElement("button");
    t.className = "tab" + (idx === 0 ? " active" : "");
    t.setAttribute("data-key", key);
    t.textContent = label;
    tabbar.appendChild(t);

    const p = document.createElement("div");
    p.className = "panel" + (idx === 0 ? " active" : "");
    p.setAttribute("data-key", key);

    if (key === "infographics") {
      p.innerHTML = chapter.infographic || "<p>Sem infográfico disponível.</p>";
    } else if (key === "podcasts") {
      p.innerHTML = chapter.podcast || "<p>Sem podcast disponível.</p>";
    } else if (key === "videos") {
      p.innerHTML = chapter.video || "<p>Sem vídeo disponível.</p>";
      wireVideosPanel(p);
    } else if (key === "exercises") {
      if (chapter.sections?.length) {
        p.innerHTML = renderExercisesSectioned(chapter.sections);
        wireExercisesSectioned(p, chapter.sections);
      } else {
        p.innerHTML = "<h3>Exercícios</h3><p>Exercícios serão adicionados em breve.</p>";
      }
    } else if (key === "practices") {
      if (chapter.sections?.length) {
        p.innerHTML = renderPracticesSectioned(chapter.sections);
        const iframes = p.querySelectorAll(".practice-iframe");
        const adjust = () => {
          const h = Math.max(460, window.innerHeight - 260);
          iframes.forEach((ifr) => { ifr.style.height = h + "px"; });
        };
        adjust();
        window.addEventListener("resize", adjust);
      } else {
        p.innerHTML = "<h3>Práticas</h3><p>Práticas serão adicionadas em breve.</p>";
      }
    } else if (key === "contents") {
      if (chapter.contentUrl) {
        p.innerHTML = `
          <h3>Conteúdos</h3>
          <iframe class="content-iframe" src="${chapter.contentUrl}" width="100%" style="border:0;" loading="lazy"></iframe>
        `;
        const iframe = p.querySelector(".content-iframe");
        const setHeight = () => { iframe.style.height = Math.max(700, window.innerHeight - 180) + "px"; };
        setHeight();
        window.addEventListener("resize", setHeight);
      } else if (chapter.sections?.length) {
        p.innerHTML = renderContentsSectioned(chapter.sections);
      } else {
        p.innerHTML = "<h3>Conteúdos</h3><p>Sem conteúdos por enquanto.</p>";
      }
    } else if (key === "slides") {
      p.innerHTML = chapter.slides || "<p>Sem slides disponíveis.</p>";
      wireSlidesPanel(p);
    } else if (key === "github") {
      p.innerHTML = renderGitHubPanel(chapter);
    }

    panels.appendChild(p);
  });

  contentEl.innerHTML = "";
  contentEl.appendChild(toolbar);
  contentEl.appendChild(tabbar);
  contentEl.appendChild(panels);

  tabbar.addEventListener("click", (ev) => {
    const btn = ev.target.closest(".tab");
    if (!btn) return;
    const key = btn.getAttribute("data-key");
    tabbar.querySelectorAll(".tab").forEach((b) => b.classList.toggle("active", b === btn));
    panels.querySelectorAll(".panel").forEach((panel) => panel.classList.toggle("active", panel.getAttribute("data-key") === key));
  });

  if (window.innerWidth <= 960) {
    sidebarEl.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
}

function parseHash() {
  const hash = window.location.hash.replace("#", "");
  const chapterId = hash || (chapters[0] && chapters[0].id);
  return { chapterId };
}

function renderFromHash() {
  const { chapterId } = parseHash();
  renderChapter(chapterId);
}

window.addEventListener("hashchange", renderFromHash);
menuBtn.addEventListener("click", () => {
  const isOpen = sidebarEl.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});
collapseBtn.addEventListener("click", () => {
  const collapsed = layoutEl.classList.toggle("collapsed");
  collapseBtn.textContent = collapsed ? "Mostrar barra" : "Esconder barra";
  collapseBtn.setAttribute("aria-expanded", String(!collapsed));
});

document.addEventListener("fullscreenchange", () => {
  const isTarget = document.fullscreenElement === contentEl;
  contentEl.style.height = isTarget ? "100vh" : "";
  contentEl.style.overflow = isTarget ? "auto" : "";
});

function createLightbox() {
  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.innerHTML = `
    <button class="lightbox-close" aria-label="Fechar">&times;</button>
    <img class="lightbox-img" src="" alt="" />
  `;
  document.body.appendChild(overlay);

  const img = overlay.querySelector(".lightbox-img");
  const closeBtn = overlay.querySelector(".lightbox-close");

  function open(src, alt) {
    img.src = src;
    img.alt = alt || "";
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function close() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) close();
  });

  return { open, close };
}

const lightbox = createLightbox();

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("infographic-img") || e.target.classList.contains("zoomable-img")) {
    lightbox.open(e.target.src, e.target.alt);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  buildSidebar();
  renderFromHash();
});
