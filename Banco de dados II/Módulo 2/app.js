// MÓDULO 2: DQL e DML - O Poder do CRUD no SQL
// Complete Application Logic with 20 Slides

const slidesData = [
  {
    number: 1,
    title: "MÓDULO 2",
    subtitle: "DQL e DML: O Poder do CRUD no SQL",
    description: "Banco de Dados II - Manipulação e Consulta",
    type: "cover",
    icon: "🗄️"
  },
  {
    number: 2,
    title: "Objetivos de Aprendizagem",
    type: "objectives",
    objectives: [
      { icon: "🔍", title: "SELECT (DQL)", description: "Dominar consultas de dados" },
      { icon: "➕", title: "INSERT (DML)", description: "Inserir novos registros" },
      { icon: "✏️", title: "UPDATE (DML)", description: "Alterar dados existentes" },
      { icon: "🗑️", title: "DELETE (DML)", description: "Excluir registros" },
      { icon: "🔄", title: "CRUD", description: "Aplicar operações completas" },
      { icon: "📝", title: "Atividade 7", description: "Resolver problemas práticos" }
    ]
  },
  {
    number: 3,
    title: "Introdução: DQL vs DML",
    type: "comparison",
    content: {
      dql: {
        name: "DQL - Data Query Language",
        purpose: "Linguagem de CONSULTA de dados",
        focus: "LEITURA (Read)",
        command: "SELECT"
      },
      dml: {
        name: "DML - Data Manipulation Language",
        purpose: "Linguagem de MANIPULAÇÃO de dados",
        focus: "ESCRITA (Create, Update, Delete)",
        commands: "INSERT, UPDATE, DELETE"
      },
      table: [
        { aspect: "O que faz", dql: "LÊ dados", dml: "MODIFICA dados" },
        { aspect: "Comandos", dql: "SELECT", dml: "INSERT, UPDATE, DELETE" },
        { aspect: "Afeta estrutura", dql: "❌ Não", dml: "❌ Não (só dados)" },
        { aspect: "Pode reverter", dql: "✅ Sempre (só lê)", dml: "⚠️ Difícil (altera dados)" }
      ]
    }
  },
  {
    number: 4,
    title: "DQL - SELECT Básico",
    type: "content",
    content: {
      definition: "SELECT é o comando fundamental para CONSULTAR dados",
      syntax: [
        { code: "SELECT * FROM NomeTabela;", desc: "Seleciona TODAS as colunas" },
        { code: "SELECT Coluna1, Coluna2 FROM NomeTabela;", desc: "Seleciona colunas ESPECÍFICAS" }
      ],
      parts: [
        { part: "SELECT *", meaning: "Seleciona TODAS as colunas" },
        { part: "SELECT Coluna1, Coluna2", meaning: "Seleciona colunas ESPECÍFICAS" },
        { part: "FROM NomeTabela", meaning: "De qual tabela ler" }
      ],
      example: "-- Selecionar todas colunas\nSELECT * FROM Clientes;\n\n-- Selecionar colunas específicas\nSELECT Nome, Email FROM Clientes;"
    }
  },
  {
    number: 5,
    title: "SELECT - Exemplos Práticos",
    type: "examples",
    examples: [
      {
        query: "SELECT * FROM Clientes;",
        description: "Retorna TODAS colunas de TODOS clientes",
        columns: ["ID", "Nome", "Email", "Cidade", "Status"]
      },
      {
        query: "SELECT Nome, Email FROM Clientes;",
        description: "Retorna APENAS Nome e Email",
        columns: ["Nome", "Email"]
      },
      {
        query: "SELECT Titulo, Autor FROM Livros;",
        description: "Livros: apenas Título e Autor",
        columns: ["Titulo", "Autor"]
      }
    ]
  },
  {
    number: 6,
    title: "WHERE - Filtrando Dados",
    type: "content",
    content: {
      purpose: "WHERE permite FILTRAR linhas com base em uma CONDIÇÃO",
      syntax: "SELECT * FROM Tabela WHERE Condição;",
      operators: [
        { symbol: "=", name: "Igual", example: "WHERE Status = 'Ativo'" },
        { symbol: "!=", name: "Diferente", example: "WHERE Cidade != 'SP'" },
        { symbol: ">", name: "Maior que", example: "WHERE Preco > 50.00" },
        { symbol: "<", name: "Menor que", example: "WHERE Idade < 18" },
        { symbol: ">=", name: "Maior ou igual", example: "WHERE Quantidade >= 10" },
        { symbol: "<=", name: "Menor ou igual", example: "WHERE Nota <= 7.0" }
      ],
      fullExample: "-- Produtos com preço maior que 50\nSELECT * FROM Produtos WHERE Preco > 50.00;\n\n-- Clientes de São Paulo\nSELECT * FROM Clientes WHERE Cidade = 'São Paulo';"
    }
  },
  {
    number: 7,
    title: "WHERE - Múltiplos Exemplos",
    type: "examples",
    examples: [
      {
        query: "SELECT * FROM Clientes WHERE Status = 'Ativo';",
        description: "Apenas clientes ativos"
      },
      {
        query: "SELECT Nome, Idade FROM Usuarios WHERE Idade >= 18;",
        description: "Usuários maiores de idade"
      },
      {
        query: "SELECT * FROM Produtos WHERE Preco < 100.00 AND Estoque > 0;",
        description: "Produtos baratos E em estoque (AND lógico)"
      },
      {
        query: "SELECT Titulo FROM Livros WHERE Status = 'Disponível' OR Status = 'Reservado';",
        description: "Livros disponíveis OU reservados (OR lógico)"
      }
    ]
  },
  {
    number: 8,
    title: "ORDER BY - Ordenando Resultados",
    type: "content",
    content: {
      purpose: "ORDER BY ordena os resultados com base em uma ou mais colunas",
      syntax: "SELECT * FROM Tabela ORDER BY Coluna ASC/DESC;",
      types: [
        {
          name: "ASC (Ascending)",
          meaning: "Ordem CRESCENTE (padrão)",
          example: "A → Z, 1 → 9, antigo → recente"
        },
        {
          name: "DESC (Descending)",
          meaning: "Ordem DECRESCENTE",
          example: "Z → A, 9 → 1, recente → antigo"
        }
      ],
      fullExample: "-- Ordenar por nome (A-Z)\nSELECT * FROM Clientes ORDER BY Nome ASC;\n\n-- Ordenar por preço (maior para menor)\nSELECT * FROM Produtos ORDER BY Preco DESC;"
    }
  },
  {
    number: 9,
    title: "ORDER BY - Exemplos Práticos",
    type: "examples",
    examples: [
      {
        query: "SELECT Nome, Email FROM Clientes ORDER BY Nome ASC;",
        description: "Clientes ordenados alfabeticamente (A-Z)",
        order: "Ana → Bruno → Carlos → Diana"
      },
      {
        query: "SELECT Titulo, Preco FROM Produtos ORDER BY Preco DESC;",
        description: "Produtos do mais caro para o mais barato",
        order: "R$ 500 → R$ 300 → R$ 150 → R$ 50"
      },
      {
        query: "SELECT * FROM Pedidos ORDER BY DataPedido DESC;",
        description: "Pedidos mais recentes primeiro",
        order: "2024-11-13 → 2024-11-10 → 2024-11-01"
      }
    ]
  },
  {
    number: 10,
    title: "DML - INSERT (Create)",
    type: "content",
    content: {
      purpose: "INSERT adiciona NOVOS registros (linhas) em uma tabela",
      syntax: "INSERT INTO NomeTabela (Coluna1, Coluna2, Coluna3)\nVALUES (Valor1, Valor2, Valor3);",
      rules: [
        "✅ Número de colunas = Número de valores",
        "✅ Tipos de dados devem ser compatíveis",
        "✅ Strings usam aspas simples: 'texto'",
        "✅ Números não usam aspas: 100"
      ],
      example: "-- Inserir novo cliente\nINSERT INTO Clientes (Nome, Email, Cidade)\nVALUES ('João Silva', 'joao@email.com', 'São Paulo');"
    }
  },
  {
    number: 11,
    title: "INSERT - Exemplo Prático",
    type: "code_example",
    content: {
      examples: [
        {
          description: "Inserir produto",
          code: "INSERT INTO Produtos (Nome, Preco, Estoque)\nVALUES ('Notebook', 2500.00, 10);"
        },
        {
          description: "Inserir múltiplos valores",
          code: "INSERT INTO Categorias (Nome, Descricao)\nVALUES \n  ('Eletrônicos', 'Produtos eletrônicos'),\n  ('Livros', 'Livros e revistas'),\n  ('Roupas', 'Vestuário em geral');"
        }
      ],
      goodPractice: {
        title: "✅ Boa Prática",
        tip: "Sempre especifique as colunas, mesmo que seja para inserir em todas. Isso torna o código mais legível e evita erros se a estrutura da tabela mudar."
      }
    }
  },
  {
    number: 12,
    title: "DML - UPDATE (Update)",
    type: "content",
    content: {
      purpose: "UPDATE altera dados em linhas EXISTENTES",
      syntax: "UPDATE NomeTabela\nSET Coluna = NovoValor\nWHERE Condição;",
      warning: {
        title: "⚠️ WHERE É OBRIGATÓRIO!",
        message: "Esquecer WHERE altera TODAS as linhas da tabela!",
        danger: "UPDATE Clientes SET Status = 'Inativo'; -- ❌ TODOS ficam inativos!",
        safe: "UPDATE Clientes SET Status = 'Inativo' WHERE ID = 5; -- ✅ Apenas ID 5"
      },
      example: "-- Alterar preço de um produto específico\nUPDATE Produtos\nSET Preco = 99.90\nWHERE ID = 5;"
    }
  },
  {
    number: 13,
    title: "UPDATE - Exemplos",
    type: "code_example",
    content: {
      examples: [
        {
          description: "Atualizar preço de produto",
          code: "UPDATE Produtos\nSET Preco = 149.90\nWHERE Nome = 'Mouse Gamer';"
        },
        {
          description: "Atualizar status de cliente",
          code: "UPDATE Clientes\nSET Status = 'Inativo'\nWHERE UltimaCompra < '2023-01-01';"
        },
        {
          description: "Atualizar múltiplas colunas",
          code: "UPDATE Livros\nSET Status = 'Emprestado', DataEmprestimo = '2024-11-13'\nWHERE Titulo = 'Dom Quixote';"
        }
      ],
      beforeAfter: {
        before: "Status: Disponível",
        after: "Status: Emprestado"
      }
    }
  },
  {
    number: 14,
    title: "DML - DELETE (Delete)",
    type: "content",
    content: {
      purpose: "DELETE remove linhas COMPLETAMENTE da tabela",
      syntax: "DELETE FROM NomeTabela\nWHERE Condição;",
      megaWarning: {
        title: "🔴 WHERE É CRÍTICO!",
        danger: "DELETE sem WHERE = DELETAR TUDO!",
        catastrophe: "DELETE FROM Clientes; -- ❌ DESASTRE! Todos deletados",
        safe: "DELETE FROM Clientes WHERE ID = 10; -- ✅ Apenas ID 10"
      },
      bestPractices: [
        "✅ Sempre fazer BACKUP antes",
        "✅ Testar SELECT antes do DELETE",
        "✅ Usar WHERE muito específico",
        "✅ Confirmar em produção"
      ],
      example: "-- Deletar produto sem estoque\nDELETE FROM Produtos WHERE Estoque = 0;"
    }
  },
  {
    number: 15,
    title: "DELETE - Exemplos",
    type: "code_example",
    content: {
      examples: [
        {
          description: "Deletar produtos sem estoque",
          code: "DELETE FROM Produtos WHERE Estoque = 0;"
        },
        {
          description: "Deletar clientes antigos",
          code: "DELETE FROM Clientes WHERE DataCadastro < '2020-01-01';"
        },
        {
          description: "Deletar pedido específico",
          code: "DELETE FROM Pedidos WHERE ID = 150;"
        }
      ],
      safetyCheck: {
        title: "✅ Checagem de Segurança",
        steps: [
          "1. Fazer SELECT primeiro: SELECT * FROM Tabela WHERE Condição",
          "2. Verificar se são as linhas corretas",
          "3. Fazer backup",
          "4. Executar DELETE"
        ]
      }
    }
  },
  {
    number: 16,
    title: "Analogia: DQL vs DML",
    type: "analogy",
    content: {
      title: "📚 Analogia do Livro",
      items: [
        {
          operation: "SELECT (DQL)",
          action: "LER um livro",
          description: "Você apenas olha, não modifica nada",
          icon: "📖"
        },
        {
          operation: "INSERT (DML)",
          action: "ESCREVER nova página",
          description: "Adiciona conteúdo novo no livro",
          icon: "✍️"
        },
        {
          operation: "UPDATE (DML)",
          action: "EDITAR página existente",
          description: "Corrige ou muda algo que já estava lá",
          icon: "✏️"
        },
        {
          operation: "DELETE (DML)",
          action: "ARRANCAR página do livro",
          description: "Remove completamente (irreversível!)",
          icon: "🗑️"
        }
      ]
    }
  },
  {
    number: 17,
    title: "CRUD Completo",
    type: "crud",
    content: {
      definition: {
        c: "Create = INSERT (criar novo)",
        r: "Read = SELECT (ler/consultar)",
        u: "Update = UPDATE (atualizar existente)",
        d: "Delete = DELETE (deletar)"
      },
      formula: "CRUD = INSERT + SELECT + UPDATE + DELETE",
      importance: "CRUD são as 4 operações fundamentais em QUALQUER banco de dados. Domine-as e você pode trabalhar com qualquer sistema!",
      mapping: [
        { http: "POST", crud: "Create", sql: "INSERT" },
        { http: "GET", crud: "Read", sql: "SELECT" },
        { http: "PUT/PATCH", crud: "Update", sql: "UPDATE" },
        { http: "DELETE", crud: "Delete", sql: "DELETE" }
      ]
    }
  },
  {
    number: 18,
    title: "Atividade 7 - Enunciado",
    type: "activity",
    content: {
      table: {
        name: "Livros",
        columns: [
          { name: "ID", type: "INT", constraint: "PRIMARY KEY" },
          { name: "Titulo", type: "VARCHAR(200)", constraint: "" },
          { name: "Autor", type: "VARCHAR(100)", constraint: "" },
          { name: "Status", type: "VARCHAR(20)", constraint: "'Disponível' ou 'Emprestado'" }
        ]
      },
      tasks: [
        {
          number: "1",
          operation: "INSERT (Create)",
          description: "Inserir novo livro: 'Dom Quixote', autor 'Miguel de Cervantes', status 'Disponível'"
        },
        {
          number: "2",
          operation: "SELECT (Read)",
          description: "Exibir Titulo e Status de TODOS os livros, ordenados alfabeticamente pelo Autor"
        },
        {
          number: "3",
          operation: "UPDATE (Update)",
          description: "Mudar Status do livro 'Dom Quixote' para 'Emprestado'"
        },
        {
          number: "4",
          operation: "SELECT com WHERE (Read)",
          description: "Exibir SOMENTE os títulos dos livros com Status 'Emprestado'"
        },
        {
          number: "5",
          operation: "DELETE (Delete)",
          description: "Excluir o livro 'Dom Quixote' da tabela"
        }
      ]
    }
  },
  {
    number: 19,
    title: "Atividade 7 - Solução Completa",
    type: "solution",
    content: {
      tasks: [
        {
          title: "✅ Tarefa 1: INSERT",
          code: "INSERT INTO Livros (Titulo, Autor, Status)\nVALUES ('Dom Quixote', 'Miguel de Cervantes', 'Disponível');",
          explanation: "Insere novo livro com título, autor e status inicial"
        },
        {
          title: "✅ Tarefa 2: SELECT ordenado",
          code: "SELECT Titulo, Status\nFROM Livros\nORDER BY Autor ASC;",
          explanation: "Retorna Titulo e Status de todos, ordenados por Autor (A-Z)"
        },
        {
          title: "✅ Tarefa 3: UPDATE",
          code: "UPDATE Livros\nSET Status = 'Emprestado'\nWHERE Titulo = 'Dom Quixote';",
          explanation: "Altera status APENAS do livro 'Dom Quixote'. WHERE é essencial!"
        },
        {
          title: "✅ Tarefa 4: SELECT com WHERE",
          code: "SELECT Titulo\nFROM Livros\nWHERE Status = 'Emprestado';",
          explanation: "Retorna APENAS títulos dos livros emprestados"
        },
        {
          title: "✅ Tarefa 5: DELETE",
          code: "DELETE FROM Livros\nWHERE Titulo = 'Dom Quixote';",
          explanation: "Remove completamente o livro. ⚠️ Operação irreversível!"
        }
      ],
      summary: [
        "✅ CREATE - Inseriu novo registro",
        "✅ READ - Consultou dados",
        "✅ UPDATE - Alterou registro",
        "✅ DELETE - Removeu registro"
      ]
    }
  },
  {
    number: 20,
    title: "Parabéns! Você Completou o Módulo",
    type: "conclusion",
    content: {
      message: "🎉 Você domina DQL e DML!",
      achievements: [
        "✅ Consultar dados com SELECT",
        "✅ Filtrar com WHERE",
        "✅ Ordenar com ORDER BY",
        "✅ Inserir com INSERT",
        "✅ Alterar com UPDATE",
        "✅ Deletar com DELETE",
        "✅ Aplicar CRUD completo",
        "✅ Resolveu Atividade 7"
      ],
      nextModule: {
        title: "Próximo: Módulo 3",
        topics: [
          "JOINs (relacionar tabelas)",
          "Subconsultas (queries dentro de queries)",
          "Funções agregadas (COUNT, SUM, AVG)",
          "GROUP BY e HAVING"
        ]
      },
      encouragement: "Continue praticando! A prática leva à perfeição em SQL! 💪"
    }
  }
];

const totalSlides = 20;
let currentSlide = 1;

function init() {
  renderSlides();
  showSlide(1);
  updateProgress();
  setupNavigation();
}

function renderSlides() {
  const container = document.getElementById('slidesContainer');
  container.innerHTML = '';

  slidesData.forEach(slide => {
    const slideEl = document.createElement('div');
    slideEl.className = 'slide';
    slideEl.dataset.slide = slide.number;

    const contentEl = document.createElement('div');
    contentEl.className = 'slide-content';

    if (slide.type === 'cover') {
      contentEl.className += ' title-slide';
      contentEl.innerHTML = `
        <h1 class="main-title">${slide.title}</h1>
        <h2 class="main-subtitle">${slide.subtitle}</h2>
        <p class="subtitle">${slide.description}</p>
        <div class="icon-large">${slide.icon}</div>
        <p class="intro-text">Bem-vindo ao seu guia completo de DQL e DML no SQL</p>
      `;
    } else if (slide.type === 'objectives') {
      contentEl.innerHTML = `
        <h2 class="slide-title">${slide.title}</h2>
        <p>Ao final deste módulo, você será capaz de:</p>
        <div class="concept-grid">
          ${slide.objectives.map(obj => `
            <div class="concept-card">
              <div class="concept-icon">${obj.icon}</div>
              <div class="concept-name">${obj.title}</div>
              <p>${obj.description}</p>
            </div>
          `).join('')}
        </div>
      `;
    } else if (slide.type === 'comparison') {
      contentEl.innerHTML = renderComparisonSlide(slide);
    } else if (slide.type === 'content') {
      contentEl.innerHTML = renderContentSlide(slide);
    } else if (slide.type === 'examples') {
      contentEl.innerHTML = renderExamplesSlide(slide);
    } else if (slide.type === 'code_example') {
      contentEl.innerHTML = renderCodeExampleSlide(slide);
    } else if (slide.type === 'analogy') {
      contentEl.innerHTML = renderAnalogySlide(slide);
    } else if (slide.type === 'crud') {
      contentEl.innerHTML = renderCrudSlide(slide);
    } else if (slide.type === 'activity') {
      contentEl.innerHTML = renderActivitySlide(slide);
    } else if (slide.type === 'solution') {
      contentEl.innerHTML = renderSolutionSlide(slide);
    } else if (slide.type === 'conclusion') {
      contentEl.className += ' conclusion-slide';
      contentEl.innerHTML = renderConclusionSlide(slide);
    }

    slideEl.appendChild(contentEl);
    container.appendChild(slideEl);
  });
}

function renderComparisonSlide(slide) {
  return `
    <h2 class="slide-title">${slide.title}</h2>
    <div class="content-box" style="background: var(--color-bg-1);">
      <h3>${slide.content.dql.name}</h3>
      <p><strong>Propósito:</strong> ${slide.content.dql.purpose}</p>
      <p><strong>Foco:</strong> ${slide.content.dql.focus}</p>
      <p><strong>Comando:</strong> <code>${slide.content.dql.command}</code></p>
    </div>
    <div class="content-box" style="background: var(--color-bg-2);">
      <h3>${slide.content.dml.name}</h3>
      <p><strong>Propósito:</strong> ${slide.content.dml.purpose}</p>
      <p><strong>Foco:</strong> ${slide.content.dml.focus}</p>
      <p><strong>Comandos:</strong> <code>${slide.content.dml.commands}</code></p>
    </div>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Aspecto</th>
            <th>DQL</th>
            <th>DML</th>
          </tr>
        </thead>
        <tbody>
          ${slide.content.table.map(row => `
            <tr>
              <td><strong>${row.aspect}</strong></td>
              <td>${row.dql}</td>
              <td>${row.dml}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderContentSlide(slide) {
  let html = `<h2 class="slide-title">${slide.title}</h2>`;

  if (slide.content.definition) {
    html += `<div class="content-box"><h3>Definição</h3><p>${slide.content.definition}</p></div>`;
  }

  if (slide.content.purpose) {
    html += `<div class="content-box" style="background: var(--color-bg-3);"><h3>Propósito</h3><p>${slide.content.purpose}</p></div>`;
  }

  if (slide.content.syntax) {
    if (typeof slide.content.syntax === 'string') {
      html += `<div class="content-box"><h3>Sintaxe</h3><div class="code-block"><pre>${slide.content.syntax}</pre></div></div>`;
    } else if (Array.isArray(slide.content.syntax)) {
      html += `<div class="content-box"><h3>Sintaxe</h3>`;
      slide.content.syntax.forEach(s => {
        html += `<div class="code-block"><pre>${s.code}</pre></div><p>${s.desc}</p>`;
      });
      html += `</div>`;
    }
  }

  if (slide.content.parts) {
    html += `<div class="content-box"><h3>Componentes</h3><ul>`;
    slide.content.parts.forEach(part => {
      html += `<li><code>${part.part}</code> → ${part.meaning}</li>`;
    });
    html += `</ul></div>`;
  }

  if (slide.content.operators) {
    html += `<div class="content-box"><h3>Operadores</h3>`;
    slide.content.operators.forEach(op => {
      html += `<p><code>${op.symbol}</code> <strong>${op.name}:</strong> ${op.example}</p>`;
    });
    html += `</div>`;
  }

  if (slide.content.types) {
    html += `<div class="content-box"><h3>Tipos de Ordenação</h3>`;
    slide.content.types.forEach(type => {
      html += `<p><strong>${type.name}:</strong> ${type.meaning}<br><em>Exemplo: ${type.example}</em></p>`;
    });
    html += `</div>`;
  }

  if (slide.content.rules) {
    html += `<div class="content-box success"><h3>Regras</h3><ul>`;
    slide.content.rules.forEach(rule => {
      html += `<li>${rule}</li>`;
    });
    html += `</ul></div>`;
  }

  if (slide.content.warning) {
    html += `
      <div class="content-box error">
        <h3>${slide.content.warning.title}</h3>
        <p>${slide.content.warning.message}</p>
        <div class="code-block" style="border: 2px solid var(--color-error);"><pre>${slide.content.warning.danger}</pre></div>
        <div class="code-block" style="border: 2px solid var(--color-success);"><pre>${slide.content.warning.safe}</pre></div>
      </div>
    `;
  }

  if (slide.content.megaWarning) {
    html += `
      <div class="content-box error">
        <h3>${slide.content.megaWarning.title}</h3>
        <p style="font-size: 18px; font-weight: 600;">${slide.content.megaWarning.danger}</p>
        <div class="code-block" style="border: 2px solid var(--color-error);"><pre>${slide.content.megaWarning.catastrophe}</pre></div>
        <div class="code-block" style="border: 2px solid var(--color-success);"><pre>${slide.content.megaWarning.safe}</pre></div>
      </div>
    `;
  }

  if (slide.content.bestPractices) {
    html += `<div class="content-box success"><h3>Boas Práticas</h3><ul>`;
    slide.content.bestPractices.forEach(bp => {
      html += `<li>${bp}</li>`;
    });
    html += `</ul></div>`;
  }

  if (slide.content.example) {
    html += `<div class="code-block"><pre>${slide.content.example}</pre></div>`;
  }

  if (slide.content.fullExample) {
    html += `<div class="code-block"><pre>${slide.content.fullExample}</pre></div>`;
  }

  return html;
}

function renderExamplesSlide(slide) {
  let html = `<h2 class="slide-title">${slide.title}</h2>`;

  slide.examples.forEach((ex, i) => {
    html += `
      <div class="content-box" style="background: var(--color-bg-${(i % 8) + 1});">
        <div class="code-block"><pre>${ex.query}</pre></div>
        <p><strong>📖 Descrição:</strong> ${ex.description}</p>
        ${ex.columns ? `<p><strong>Colunas retornadas:</strong> ${ex.columns.join(', ')}</p>` : ''}
        ${ex.order ? `<p><strong>Ordem:</strong> ${ex.order}</p>` : ''}
      </div>
    `;
  });

  return html;
}

function renderCodeExampleSlide(slide) {
  let html = `<h2 class="slide-title">${slide.title}</h2>`;

  slide.content.examples.forEach((ex, i) => {
    html += `
      <div class="content-box" style="background: var(--color-bg-${(i % 8) + 1});">
        <h3>${ex.description}</h3>
        <div class="code-block"><pre>${ex.code}</pre></div>
      </div>
    `;
  });

  if (slide.content.goodPractice) {
    html += `
      <div class="content-box success">
        <h3>${slide.content.goodPractice.title}</h3>
        <p>${slide.content.goodPractice.tip}</p>
      </div>
    `;
  }

  if (slide.content.beforeAfter) {
    html += `
      <div class="content-box">
        <h3>Antes e Depois</h3>
        <p><strong>Antes:</strong> ${slide.content.beforeAfter.before}</p>
        <p><strong>Depois:</strong> ${slide.content.beforeAfter.after}</p>
      </div>
    `;
  }

  if (slide.content.safetyCheck) {
    html += `
      <div class="content-box warning">
        <h3>${slide.content.safetyCheck.title}</h3>
        <ol>`;
    slide.content.safetyCheck.steps.forEach(step => {
      html += `<li>${step}</li>`;
    });
    html += `</ol></div>`;
  }

  return html;
}

function renderAnalogySlide(slide) {
  return `
    <h2 class="slide-title">${slide.title}</h2>
    <div class="content-box" style="background: var(--color-bg-2);">
      <h3>${slide.content.title}</h3>
    </div>
    <div class="concept-grid">
      ${slide.content.items.map(item => `
        <div class="concept-card">
          <div class="concept-icon">${item.icon}</div>
          <div class="concept-name">${item.operation}</div>
          <p><strong>${item.action}</strong></p>
          <p>${item.description}</p>
        </div>
      `).join('')}
    </div>
  `;
}

function renderCrudSlide(slide) {
  return `
    <h2 class="slide-title">${slide.title}</h2>
    <div class="content-box" style="background: var(--color-bg-1);">
      <h3>Definição CRUD</h3>
      <p><strong>C</strong> - ${slide.content.definition.c}</p>
      <p><strong>R</strong> - ${slide.content.definition.r}</p>
      <p><strong>U</strong> - ${slide.content.definition.u}</p>
      <p><strong>D</strong> - ${slide.content.definition.d}</p>
    </div>
    <div class="content-box" style="background: var(--color-bg-3);">
      <h3>Fórmula</h3>
      <p style="font-size: 20px; font-weight: 600;">${slide.content.formula}</p>
    </div>
    <div class="content-box success">
      <h3>Importância</h3>
      <p>${slide.content.importance}</p>
    </div>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>HTTP Verb</th>
            <th>CRUD</th>
            <th>SQL</th>
          </tr>
        </thead>
        <tbody>
          ${slide.content.mapping.map(m => `
            <tr>
              <td><code>${m.http}</code></td>
              <td>${m.crud}</td>
              <td><code>${m.sql}</code></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderActivitySlide(slide) {
  return `
    <h2 class="slide-title">${slide.title}</h2>
    <div class="content-box" style="background: var(--color-bg-2);">
      <h3>Estrutura da Tabela: ${slide.content.table.name}</h3>
      <table>
        <thead>
          <tr>
            <th>Coluna</th>
            <th>Tipo</th>
            <th>Constraint</th>
          </tr>
        </thead>
        <tbody>
          ${slide.content.table.columns.map(col => `
            <tr>
              <td><strong>${col.name}</strong></td>
              <td>${col.type}</td>
              <td>${col.constraint}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    <div class="content-box">
      <h3>Tarefas</h3>
      ${slide.content.tasks.map(task => `
        <p><strong>Tarefa ${task.number} - ${task.operation}:</strong><br>${task.description}</p>
      `).join('')}
    </div>
    <div class="content-box success">
      <p><strong>💡 Dica:</strong> Tente resolver mentalmente antes de ver a solução!</p>
    </div>
  `;
}

function renderSolutionSlide(slide) {
  let html = `
    <h2 class="slide-title">${slide.title}</h2>
  `;

  slide.content.tasks.forEach((task, i) => {
    html += `
      <div class="content-box" style="background: var(--color-bg-${(i % 8) + 1});">
        <h3>${task.title}</h3>
        <div class="code-block"><pre>${task.code}</pre></div>
        <p><strong>📖 Explicação:</strong> ${task.explanation}</p>
      </div>
    `;
  });

  html += `
    <div class="content-box success">
      <h3>🎯 Resumo - Você completou o CRUD!</h3>
      <ul>`;
  slide.content.summary.forEach(s => {
    html += `<li>${s}</li>`;
  });
  html += `</ul></div>`;

  return html;
}

function renderConclusionSlide(slide) {
  return `
    <h1 class="conclusion-title">${slide.title}</h1>
    <h2 class="conclusion-subtitle">${slide.content.message}</h2>
    <div class="conclusion-box">
      <p class="conclusion-message">O que você aprendeu:</p>
      <div class="achievement-list">
        ${slide.content.achievements.map(ach => `<p>${ach}</p>`).join('')}
      </div>
      <div style="margin-top: 32px; padding: 20px; background: var(--color-bg-3); border-radius: 8px;">
        <h3>${slide.content.nextModule.title}</h3>
        <ul>
          ${slide.content.nextModule.topics.map(topic => `<li>${topic}</li>`).join('')}
        </ul>
      </div>
      <p style="font-size: 18px; margin-top: 24px;">${slide.content.encouragement}</p>
    </div>
  `;
}

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  if (n > totalSlides) currentSlide = totalSlides;
  if (n < 1) currentSlide = 1;
  else currentSlide = n;

  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentSlide - 1].classList.add('active');

  updateProgress();
  updateNavButtons();
}

function updateProgress() {
  const progress = (currentSlide / totalSlides) * 100;
  document.getElementById('progressBar').style.width = `${progress}%`;
  document.getElementById('progressText').textContent = `Slide ${currentSlide} de ${totalSlides}`;
  document.getElementById('slideIndicator').textContent = `Slide ${currentSlide} de ${totalSlides}`;
}

function updateNavButtons() {
  document.getElementById('prevBtn').disabled = currentSlide === 1;
  document.getElementById('nextBtn').disabled = currentSlide === totalSlides;
}

function setupNavigation() {
  document.getElementById('prevBtn').addEventListener('click', () => {
    showSlide(currentSlide - 1);
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    showSlide(currentSlide + 1);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') showSlide(currentSlide - 1);
    if (e.key === 'ArrowRight') showSlide(currentSlide + 1);
  });
}

init();