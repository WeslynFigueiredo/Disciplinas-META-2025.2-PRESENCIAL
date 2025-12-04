// SQL PRÁTICO - DDL, DML, DQL
// 22 Slides completos com MySQL

const slidesData = [
    // ========== SLIDE 1: CAPA ==========
    {
        number: 1,
        type: "cover",
        title: "MÓDULO 1",
        subtitle: "SQL Prático: Gerenciando um Catálogo de Produtos",
        description: "Estrutura (DDL), Manipulação (DML) e Consulta (DQL)",
        icon: "🗄️"
    },

    // ========== SLIDE 2: OBJETIVOS ==========
    {
        number: 2,
        type: "content",
        title: "Objetivos de Aprendizagem",
        sections: [
            {
                title: "🎯 O que você vai aprender:",
                content: `
                    <ul style="margin-left: 20px; color: #cbd5e1;">
                        <li><strong>DDL (Data Definition Language):</strong> Criar e estruturar o banco de dados</li>
                        <li><strong>DML (Data Manipulation Language):</strong> Inserir, atualizar e deletar dados</li>
                        <li><strong>DQL (Data Query Language):</strong> Consultar e analisar informações</li>
                        <li><strong>MySQL:</strong> Sintaxe prática para MySQL 5.7+</li>
                        <li><strong>Cenário Real:</strong> Sistema de catálogo de produtos de loja virtual</li>
                    </ul>
                `
            },
            {
                title: "📊 Estrutura do Módulo:",
                content: `
                    <p><strong>Parte 1 (Slides 3-12):</strong> Criação, inserção e manipulação de dados</p>
                    <p><strong>Parte 2 (Slides 13-22):</strong> Consultas avançadas e análise</p>
                `
            }
        ]
    },

    // ========== SLIDE 3: INTRO - DQL vs DML ==========
    {
        number: 3,
        type: "content",
        title: "Introdução: DDL, DML e DQL",
        sections: [
            {
                title: "🔑 Três Linguagens SQL",
                content: `
                    <p><strong style="color: #f4b41a;">DDL (Data Definition Language):</strong> Define a ESTRUTURA</p>
                    <p style="margin-left: 20px; font-size: 14px;">Comandos: CREATE, ALTER, DROP</p>
                    
                    <p style="margin-top: 15px;"><strong style="color: #f4b41a;">DML (Data Manipulation Language):</strong> Manipula DADOS</p>
                    <p style="margin-left: 20px; font-size: 14px;">Comandos: INSERT, UPDATE, DELETE</p>
                    
                    <p style="margin-top: 15px;"><strong style="color: #f4b41a;">DQL (Data Query Language):</strong> CONSULTA DADOS</p>
                    <p style="margin-left: 20px; font-size: 14px;">Comando: SELECT</p>
                    
                    <div class="alert success" style="margin-top: 20px;">
                        <div class="alert-title">💡 Analogia</div>
                        <div class="alert-content">DDL = Construir o armário | DML = Organizar documentos | DQL = Encontrar documentos</div>
                    </div>
                `
            }
        ]
    },

    // ========== SLIDE 4: PREPARAÇÃO DO AMBIENTE ==========
    {
        number: 4,
        type: "content",
        title: "Parte 1: Estrutura e Dados (DDL e DML)",
        subtitle: "1. Preparação do Ambiente",
        sections: [
            {
                title: "📦 CREATE DATABASE e USE",
                content: `
                    <div class="code-block">
<span class="comment">-- Cria um novo banco de dados chamado catalogo_simples</span>
<span class="keyword">CREATE DATABASE</span> catalogo_simples;

<span class="comment">-- Seleciona o banco para usar nos próximos comandos</span>
<span class="keyword">USE</span> catalogo_simples;
                    </div>
                    
                    <p><strong style="color: #2da6b2;">Explicação:</strong></p>
                    <p><code style="background: #0a0e27; padding: 2px 6px; border-radius: 3px;">CREATE DATABASE</code> cria um novo banco vazio</p>
                    <p><code style="background: #0a0e27; padding: 2px 6px; border-radius: 3px;">USE</code> seleciona qual banco usar nos próximos comandos</p>
                `
            }
        ]
    },

    // ========== SLIDE 5: CREATE TABLE ==========
    {
        number: 5,
        type: "content",
        title: "2. Criação da Tabela (DDL - CREATE TABLE)",
        sections: [
            {
                title: "🏗️ Estrutura da Tabela Produtos",
                content: `
                    <div class="code-block">
<span class="keyword">CREATE TABLE</span> produtos (
    id <span class="keyword">INT PRIMARY KEY AUTO_INCREMENT</span>,
    nome <span class="keyword">VARCHAR</span>(100) <span class="keyword">NOT NULL</span>,
    categoria <span class="keyword">VARCHAR</span>(50),
    preco <span class="keyword">DECIMAL</span>(10, 2),
    estoque <span class="keyword">INT</span>
);
                    </div>
                    
                    <p style="margin-top: 15px;"><strong style="color: #2da6b2;">Tipos de Dados:</strong></p>
                    <p>• <code style="background: #0a0e27; padding: 2px 6px;">INT</code>: Números inteiros</p>
                    <p>• <code style="background: #0a0e27; padding: 2px 6px;">VARCHAR(n)</code>: Texto com limite de caracteres</p>
                    <p>• <code style="background: #0a0e27; padding: 2px 6px;">DECIMAL(10,2)</code>: Números com 2 casas decimais (dinheiro)</p>
                `
            }
        ]
    },

    // ========== SLIDE 6: PRIMARY KEY ==========
    {
        number: 6,
        type: "content",
        title: "PRIMARY KEY e Constraints",
        sections: [
            {
                title: "🔑 O que é PRIMARY KEY?",
                content: `
                    <p><strong style="color: #f4b41a;">PRIMARY KEY (Chave Primária):</strong></p>
                    <p style="margin-left: 20px;">✓ Identificador <strong>único</strong> para cada registro</p>
                    <p style="margin-left: 20px;">✓ <strong>Não pode ser nulo</strong> (vazio)</p>
                    <p style="margin-left: 20px;">✓ <strong>Não pode repetir</strong></p>
                    <p style="margin-left: 20px;">✓ MySQL: AUTO_INCREMENT incrementa automaticamente</p>
                    
                    <div class="alert success" style="margin-top: 20px;">
                        <div class="alert-title">💡 Analogia</div>
                        <div class="alert-content">A PRIMARY KEY é como o <strong>CPF de uma pessoa</strong> - cada um tem seu próprio, e não existem dois iguais!</div>
                    </div>
                    
                    <p style="margin-top: 20px;"><strong style="color: #f4b41a;">NOT NULL:</strong></p>
                    <p style="margin-left: 20px;">Garante que a coluna sempre terá um valor (não pode ficar em branco)</p>
                `
            }
        ]
    },

    // ========== SLIDE 7: INSERT INTO ==========
    {
        number: 7,
        type: "content",
        title: "3. Inserção de Dados (DML - INSERT INTO)",
        sections: [
            {
                title: "➕ Adicionando 5 Produtos",
                content: `
                    <div class="code-block">
<span class="keyword">INSERT INTO</span> produtos (id, nome, categoria, preco, estoque) <span class="keyword">VALUES</span>
(1, <span class="string">'Mouse Óptico USB'</span>, <span class="string">'Eletrônicos'</span>, 59.90, 25),
(2, <span class="string">'Teclado Mecânico RGB'</span>, <span class="string">'Eletrônicos'</span>, 329.90, 10),
(3, <span class="string">'Dom Quixote'</span>, <span class="string">'Livros'</span>, 49.90, 5),
(4, <span class="string">'Café em Grãos 500g'</span>, <span class="string">'Alimentos'</span>, 24.50, 40),
(5, <span class="string">'Monitor 24 Polegadas'</span>, <span class="string">'Eletrônicos'</span>, 899.00, 3);
                    </div>
                    
                    <p style="margin-top: 15px;"><strong style="color: #2da6b2;">Regras:</strong></p>
                    <p>• Ordem dos valores = ordem das colunas</p>
                    <p>• Textos entre aspas simples (')</p>
                    <p>• Números sem aspas</p>
                    <p>• IDs devem ser únicos</p>
                `
            }
        ]
    },

    // ========== SLIDE 8: UPDATE ==========
    {
        number: 8,
        type: "content",
        title: "4. Atualização de Dados (DML - UPDATE)",
        sections: [
            {
                title: "✏️ Alterando um Preço",
                content: `
                    <div class="code-block">
<span class="comment">-- O fornecedor aumentou o preço do café</span>
<span class="keyword">UPDATE</span> produtos
<span class="keyword">SET</span> preco = 29.90
<span class="keyword">WHERE</span> id = 4;
                    </div>
                    
                    <div class="alert critical" style="margin-top: 20px;">
                        <div class="alert-title">⚠️ ALERTA CRÍTICO - WHERE é OBRIGATÓRIO!</div>
                        <div class="alert-content">
                            <p><strong style="color: #ff5459;">❌ SEM WHERE (CATASTRÓFICO!):</strong></p>
                            <p style="margin-left: 10px;"><code>UPDATE produtos SET preco = 29.90;</code></p>
                            <p style="margin-left: 10px; font-size: 13px;">⚡ Vai atualizar TODOS os produtos para R$ 29,90!</p>
                        </div>
                    </div>
                `
            }
        ]
    },

    // ========== SLIDE 9: DELETE ==========
    {
        number: 9,
        type: "content",
        title: "5. Exclusão de Dados (DML - DELETE)",
        sections: [
            {
                title: "🗑️ Removendo um Produto",
                content: `
                    <div class="code-block">
<span class="comment">-- O livro 'Dom Quixote' foi descontinuado</span>
<span class="keyword">DELETE FROM</span> produtos
<span class="keyword">WHERE</span> id = 3;
                    </div>
                    
                    <div class="alert critical" style="margin-top: 20px;">
                        <div class="alert-title">🚨 ALERTA CRÍTICO - WHERE é ABSOLUTAMENTE OBRIGATÓRIO!</div>
                        <div class="alert-content">
                            <p><strong style="color: #ff5459;">❌ CATASTRÓFICO (SEM WHERE):</strong></p>
                            <p style="margin-left: 10px;"><code>DELETE FROM produtos;</code></p>
                            <p style="margin-left: 10px; font-size: 13px;">💀 Vai DELETAR TODOS os produtos! Não tem volta!</p>
                        </div>
                    </div>
                    
                    <p style="margin-top: 15px;"><strong style="color: #4ade80;">✅ Dica de Segurança:</strong></p>
                    <p>Sempre faça um SELECT com o mesmo WHERE antes de DELETE ou UPDATE!</p>
                `
            }
        ]
    },

    // ========== SLIDE 10: RESUMO DDL/DML ==========
    {
        number: 10,
        type: "content",
        title: "Resumo: DDL e DML",
        sections: [
            {
                title: "📋 Tabela Comparativa",
                content: `
                    <table class="comparison-table">
                        <tr>
                            <th>Comando</th>
                            <th>Tipo</th>
                            <th>Função</th>
                            <th>Afeta Estrutura?</th>
                        </tr>
                        <tr>
                            <td><strong style="color: #f4b41a;">CREATE</strong></td>
                            <td>DDL</td>
                            <td>Cria tabelas/banco</td>
                            <td>✅ Sim</td>
                        </tr>
                        <tr>
                            <td><strong style="color: #f4b41a;">INSERT</strong></td>
                            <td>DML</td>
                            <td>Adiciona dados</td>
                            <td>❌ Não</td>
                        </tr>
                        <tr>
                            <td><strong style="color: #f4b41a;">UPDATE</strong></td>
                            <td>DML</td>
                            <td>Altera dados</td>
                            <td>❌ Não</td>
                        </tr>
                        <tr>
                            <td><strong style="color: #f4b41a;">DELETE</strong></td>
                            <td>DML</td>
                            <td>Remove dados</td>
                            <td>❌ Não</td>
                        </tr>
                    </table>
                `
            }
        ]
    },

    // ========== SLIDE 11: DQL - SELECT BÁSICO ==========
    {
        number: 11,
        type: "content",
        title: "Parte 2: Consultas Avançadas (DQL)",
        subtitle: "1. Consulta 1 - Seleção Simples",
        sections: [
            {
                title: "🔍 SELECT nome, preco (Produtos Disponíveis)",
                content: `
                    <div class="code-block">
<span class="comment">-- Lista nome e preço de produtos com estoque > 0</span>
<span class="keyword">SELECT</span> nome, preco
<span class="keyword">FROM</span> produtos
<span class="keyword">WHERE</span> estoque > 0;
                    </div>
                    
                    <p style="margin-top: 15px;"><strong style="color: #2da6b2;">Explicação:</strong></p>
                    <p>• <code>SELECT nome, preco</code>: Seleciona apenas essas 2 colunas</p>
                    <p>• <code>FROM produtos</code>: Da tabela produtos</p>
                    <p>• <code>WHERE estoque > 0</code>: Filtra apenas produtos com estoque</p>
                    
                    <p style="margin-top: 15px;"><strong style="color: #f4b41a;">Resultado:</strong></p>
                    <p>Mouse Óptico USB (59.90), Teclado Mecânico RGB (329.90), Café (29.90), Monitor (899.00)</p>
                `
            }
        ]
    },

    // ========== SLIDE 12: FILTRAGEM POR CATEGORIA ==========
    {
        number: 12,
        type: "content",
        title: "2. Consulta 2 - Filtragem por Categoria",
        sections: [
            {
                title: "📂 SELECT * WHERE categoria = 'Livros'",
                content: `
                    <div class="code-block">
<span class="comment">-- Lista todos os campos dos produtos da categoria 'Livros'</span>
<span class="keyword">SELECT</span> *
<span class="keyword">FROM</span> produtos
<span class="keyword">WHERE</span> categoria = <span class="string">'Livros'</span>;
                    </div>
                    
                    <p style="margin-top: 15px;"><strong style="color: #2da6b2;">Explicação:</strong></p>
                    <p>• <code>SELECT *</code>: O asterisco (*) significa "TODAS as colunas"</p>
                    <p>• <code>WHERE categoria = 'Livros'</code>: Filtra apenas a categoria especificada</p>
                    <p>• Textos em SQL são case-sensitive (L maiúscula!)</p>
                    
                    <p style="margin-top: 15px;"><strong style="color: #f4b41a;">Resultado:</strong></p>
                    <p>3 | Dom Quixote | Livros | 49.90 | 5</p>
                `
            }
        ]
    },

    // ========== SLIDE 13: FILTRO COMBINADO ==========
    {
        number: 13,
        type: "content",
        title: "3. Consulta 3 - Filtro Combinado com AND",
        sections: [
            {
                title: "🔗 Produtos Caros E com Bom Estoque",
                content: `
                    <div class="code-block">
<span class="comment">-- Produtos com preço > 100 AND estoque > 5</span>
<span class="keyword">SELECT</span> nome, preco, estoque
<span class="keyword">FROM</span> produtos
<span class="keyword">WHERE</span> preco > 100.00 <span class="keyword">AND</span> estoque > 5;
                    </div>
                    
                    <p style="margin-top: 15px;"><strong style="color: #2da6b2;">Operadores Lógicos:</strong></p>
                    <p>• <code>AND</code>: AMBAS as condições devem ser verdadeiras</p>
                    <p>• <code>OR</code>: PELO MENOS UMA das condições deve ser verdadeira</p>
                    <p>• <code>NOT</code>: Negação da condição</p>
                    
                    <p style="margin-top: 15px;"><strong style="color: #f4b41a;">Resultado:</strong></p>
                    <p>Teclado Mecânico RGB (329.90, 10 unidades) - Monitor não aparece (só 3 em estoque)</p>
                `
            }
        ]
    },

    // ========== SLIDE 14: LIKE - BUSCA PARCIAL ==========
    {
        number: 14,
        type: "content",
        title: "4. Consulta 4 - Busca Parcial (LIKE)",
        sections: [
            {
                title: "🔎 Produtos que Começam com 'C'",
                content: `
                    <div class="code-block">
<span class="comment">-- Busca produtos cujo nome comece com 'C'</span>
<span class="keyword">SELECT</span> nome, categoria, preco
<span class="keyword">FROM</span> produtos
<span class="keyword">WHERE</span> nome <span class="keyword">LIKE</span> <span class="string">'C%'</span>;
                    </div>
                    
                    <p style="margin-top: 15px;"><strong style="color: #2da6b2;">Wildcards (Curingas):</strong></p>
                    <p>• <code>'C%'</code>: Começa com C (qualquer coisa depois)</p>
                    <p>• <code>'%C'</code>: Termina com C (qualquer coisa antes)</p>
                    <p>• <code>'%C%'</code>: Contém C em qualquer posição</p>
                    
                    <p style="margin-top: 15px;"><strong style="color: #f4b41a;">Resultado:</strong></p>
                    <p>Café em Grãos 500g | Alimentos | 29.90</p>
                `
            }
        ]
    },

    // ========== SLIDE 15: AVG - MÉDIA ==========
    {
        number: 15,
        type: "content",
        title: "5. Consulta 5 - Agregação com AVG",
        sections: [
            {
                title: "📊 Preço Médio dos Produtos",
                content: `
                    <div class="code-block">
<span class="comment">-- Calcula o preço médio de todos os produtos</span>
<span class="keyword">SELECT</span> <span class="keyword">AVG</span>(preco) <span class="keyword">AS</span> preco_medio
<span class="keyword">FROM</span> produtos;
                    </div>
                    
                    <p style="margin-top: 15px;"><strong style="color: #2da6b2;">Funções de Agregação:</strong></p>
                    <p>• <code>AVG()</code>: Calcula a média</p>
                    <p>• <code>MAX()</code>: Maior valor</p>
                    <p>• <code>MIN()</code>: Menor valor</p>
                    <p>• <code>COUNT()</code>: Conta registros</p>
                    <p>• <code>SUM()</code>: Soma valores</p>
                    
                    <p style="margin-top: 15px;"><strong style="color: #f4b41a;">Resultado:</strong></p>
                    <p>preco_medio = 272.64</p>
                    <p style="font-size: 13px;">(59.90 + 329.90 + 49.90 + 29.90 + 899.00) / 5 = 272.64</p>
                `
            }
        ]
    },

    // ========== SLIDE 16: MAX E MIN ==========
    {
        number: 16,
        type: "content",
        title: "6. Consulta 6 - MAX e MIN",
        sections: [
            {
                title: "📈 Produto Mais Caro e Mais Barato",
                content: `
                    <div class="code-block">
<span class="comment">-- Encontra o preço máximo e mínimo</span>
<span class="keyword">SELECT</span> 
    <span class="keyword">MAX</span>(preco) <span class="keyword">AS</span> preco_maximo,
    <span class="keyword">MIN</span>(preco) <span class="keyword">AS</span> preco_minimo
<span class="keyword">FROM</span> produtos;
                    </div>
                    
                    <p style="margin-top: 15px;"><strong style="color: #2da6b2;">Explicação:</strong></p>
                    <p>• <code>MAX(preco)</code>: Retorna o MAIOR preço da coluna</p>
                    <p>• <code>MIN(preco)</code>: Retorna o MENOR preço da coluna</p>
                    <p>• <code>AS</code>: Renomeia a coluna do resultado (alias)</p>
                    
                    <p style="margin-top: 15px;"><strong style="color: #f4b41a;">Resultado:</strong></p>
                    <p>preco_maximo = 899.00 | preco_minimo = 24.50</p>
                `
            }
        ]
    },

    // ========== SLIDE 17: ORDER BY E LIMIT ==========
    {
        number: 17,
        type: "content",
        title: "7. Consulta 7 - Ordenação e Limitação",
        sections: [
            {
                title: "🏆 Top 3 Produtos com Maior Estoque",
                content: `
                    <div class="code-block">
<span class="comment">-- Lista os 3 produtos com maior estoque</span>
<span class="keyword">SELECT</span> nome, estoque, preco
<span class="keyword">FROM</span> produtos
<span class="keyword">ORDER BY</span> estoque <span class="keyword">DESC</span>
<span class="keyword">LIMIT</span> 3;
                    </div>
                    
                    <p style="margin-top: 15px;"><strong style="color: #2da6b2;">Explicação:</strong></p>
                    <p>• <code>ORDER BY estoque DESC</code>: Ordena por estoque (DESC = decrescente/maior primeiro)</p>
                    <p>• <code>ASC</code>: Ascendente (menor primeiro) - padrão</p>
                    <p>• <code>LIMIT 3</code>: Retorna apenas os 3 primeiros</p>
                    
                    <p style="margin-top: 15px;"><strong style="color: #f4b41a;">Resultado:</strong></p>
                    <p>1. Café em Grãos 500g (40 unidades)</p>
                    <p>2. Mouse Óptico USB (25 unidades)</p>
                    <p>3. Teclado Mecânico RGB (10 unidades)</p>
                `
            }
        ]
    },

    // ========== SLIDE 18: RESUMO DQL ==========
    {
        number: 18,
        type: "content",
        title: "Resumo: Comandos DQL Essenciais",
        sections: [
            {
                title: "🎯 Cláusulas SELECT",
                content: `
                    <table class="comparison-table">
                        <tr>
                            <th>Cláusula</th>
                            <th>Função</th>
                            <th>Exemplo</th>
                        </tr>
                        <tr>
                            <td><strong>SELECT</strong></td>
                            <td>Especifica as colunas</td>
                            <td>SELECT nome, preco</td>
                        </tr>
                        <tr>
                            <td><strong>FROM</strong></td>
                            <td>Define a tabela</td>
                            <td>FROM produtos</td>
                        </tr>
                        <tr>
                            <td><strong>WHERE</strong></td>
                            <td>Filtra registros</td>
                            <td>WHERE preco > 100</td>
                        </tr>
                        <tr>
                            <td><strong>ORDER BY</strong></td>
                            <td>Ordena resultados</td>
                            <td>ORDER BY preco DESC</td>
                        </tr>
                        <tr>
                            <td><strong>LIMIT</strong></td>
                            <td>Limita quantidade</td>
                            <td>LIMIT 3</td>
                        </tr>
                    </table>
                `
            }
        ]
    },

    // ========== SLIDE 19: CRUD COMPLETO ==========
    {
        number: 19,
        type: "content",
        title: "CRUD Completo",
        sections: [
            {
                title: "🔄 As 4 Operações Fundamentais",
                content: `
                    <p><strong style="color: #f4b41a;">CREATE (Inserir):</strong> INSERT INTO</p>
                    <p style="margin-left: 20px; font-size: 14px;">Adiciona novos registros na tabela</p>
                    
                    <p style="margin-top: 15px;"><strong style="color: #f4b41a;">READ (Consultar):</strong> SELECT</p>
                    <p style="margin-left: 20px; font-size: 14px;">Recupera e exibe dados existentes</p>
                    
                    <p style="margin-top: 15px;"><strong style="color: #f4b41a;">UPDATE (Atualizar):</strong> UPDATE</p>
                    <p style="margin-left: 20px; font-size: 14px;">Modifica dados existentes (sempre com WHERE!)</p>
                    
                    <p style="margin-top: 15px;"><strong style="color: #f4b41a;">DELETE (Excluir):</strong> DELETE</p>
                    <p style="margin-left: 20px; font-size: 14px;">Remove registros (sempre com WHERE!)</p>
                    
                    <div class="alert success" style="margin-top: 20px;">
                        <div class="alert-title">✅ Mapeamento HTTP</div>
                        <div class="alert-content">CREATE=POST | READ=GET | UPDATE=PUT/PATCH | DELETE=DELETE</div>
                    </div>
                `
            }
        ]
    },

    // ========== SLIDE 20: ATIVIDADE ==========
    {
        number: 20,
        type: "content",
        title: "Atividade Prática: CRUD Completo",
        sections: [
            {
                title: "📝 Exercício Proposto",
                content: `
                    <p><strong style="color: #f4b41a;">Considere a tabela Livros com:</strong> ID (PK), Titulo, Autor, Status</p>
                    
                    <p style="margin-top: 15px;"><strong>Tarefa 1 (CREATE):</strong> Inserir livro "Dom Quixote" de "Miguel de Cervantes" com Status "Disponível"</p>
                    
                    <p style="margin-top: 15px;"><strong>Tarefa 2 (READ):</strong> Exibir Titulo e Status de todos os livros, ordenados por Autor</p>
                    
                    <p style="margin-top: 15px;"><strong>Tarefa 3 (UPDATE):</strong> Mudar Status de "Dom Quixote" para "Emprestado"</p>
                    
                    <p style="margin-top: 15px;"><strong>Tarefa 4 (READ):</strong> Exibir apenas títulos dos livros "Emprestados"</p>
                    
                    <p style="margin-top: 15px;"><strong>Tarefa 5 (DELETE):</strong> Excluir o livro "Dom Quixote"</p>
                    
                    <p style="margin-top: 15px;"><strong style="color: #2da6b2;">Próximo slide:</strong> Veja a solução completa!</p>
                `
            }
        ]
    },

    // ========== SLIDE 21: SOLUÇÃO ==========
    {
        number: 21,
        type: "content",
        title: "Solução Passo a Passo",
        sections: [
            {
                title: "✅ Código SQL Completo",
                content: `
                    <p style="margin-bottom: 10px;"><strong style="color: #f4b41a;">1. CREATE (Inserir):</strong></p>
                    <div class="code-block" style="margin-bottom: 15px;">
<span class="keyword">INSERT INTO</span> Livros (Titulo, Autor, Status) <span class="keyword">VALUES</span> (<span class="string">'Dom Quixote'</span>, <span class="string">'Miguel de Cervantes'</span>, <span class="string">'Disponível'</span>);
                    </div>
                    
                    <p style="margin-bottom: 10px;"><strong style="color: #f4b41a;">2. READ (Consultar):</strong></p>
                    <div class="code-block" style="margin-bottom: 15px;">
<span class="keyword">SELECT</span> Titulo, Status <span class="keyword">FROM</span> Livros <span class="keyword">ORDER BY</span> Autor;
                    </div>
                    
                    <p style="margin-bottom: 10px;"><strong style="color: #f4b41a;">3. UPDATE:</strong></p>
                    <div class="code-block" style="margin-bottom: 15px;">
<span class="keyword">UPDATE</span> Livros <span class="keyword">SET</span> Status = <span class="string">'Emprestado'</span> <span class="keyword">WHERE</span> Titulo = <span class="string">'Dom Quixote'</span>;
                    </div>
                    
                    <p style="margin-bottom: 10px;"><strong style="color: #f4b41a;">4. READ com filtro:</strong></p>
                    <div class="code-block" style="margin-bottom: 15px;">
<span class="keyword">SELECT</span> Titulo <span class="keyword">FROM</span> Livros <span class="keyword">WHERE</span> Status = <span class="string">'Emprestado'</span>;
                    </div>
                    
                    <p style="margin-bottom: 10px;"><strong style="color: #f4b41a;">5. DELETE:</strong></p>
                    <div class="code-block">
<span class="keyword">DELETE FROM</span> Livros <span class="keyword">WHERE</span> Titulo = <span class="string">'Dom Quixote'</span>;
                    </div>
                `
            }
        ]
    },

    // ========== SLIDE 22: CONCLUSÃO ==========
    {
        number: 22,
        type: "cover",
        title: "Parabéns! 🎉",
        subtitle: "Você completou o módulo de SQL Prático",
        description: "Agora você sabe: DDL (estrutura), DML (manipulação) e DQL (consultas) + CRUD completo!",
        icon: "✅"
    }
];

let currentSlide = 0;

// Renderizar slides
function renderSlides() {
    const container = document.getElementById('slidesContainer');
    const totalSlides = slidesData.length;
    
    // Renderizar apenas o slide atual
    const slide = slidesData[currentSlide];
    container.innerHTML = createSlideHTML(slide);
    
    // Atualizar contadores
    document.getElementById('currentSlide').textContent = currentSlide + 1;
    document.getElementById('totalSlides').textContent = totalSlides;
    document.getElementById('slideNumber').textContent = currentSlide + 1;
    document.getElementById('slideTotalNumber').textContent = totalSlides;
    
    // Atualizar barra de progresso
    const progress = ((currentSlide + 1) / totalSlides) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    // Habilitar/desabilitar botões
    document.getElementById('prevBtn').disabled = currentSlide === 0;
    document.getElementById('nextBtn').disabled = currentSlide === totalSlides - 1;
}

function createSlideHTML(slide) {
    if (slide.type === 'cover') {
        return `
            <div class="slide cover">
                <h1 class="slide-title">${slide.title}</h1>
                <h2 class="slide-subtitle">${slide.subtitle}</h2>
                <div class="slide-icon">${slide.icon}</div>
                <p class="slide-description">${slide.description}</p>
            </div>
        `;
    } else if (slide.type === 'content') {
        let html = `
            <div class="slide content">
                <h2 class="slide-title">${slide.title}</h2>
                ${slide.subtitle ? `<h3 style="color: #2da6b2; margin-bottom: 20px;">${slide.subtitle}</h3>` : ''}
        `;
        
        if (slide.sections) {
            slide.sections.forEach(section => {
                html += `
                    <div class="slide-section">
                        <h3>${section.title}</h3>
                        <div>${section.content}</div>
                    </div>
                `;
            });
        }
        
        html += `</div>`;
        return html;
    }
}

function nextSlide() {
    if (currentSlide < slidesData.length - 1) {
        currentSlide++;
        renderSlides();
        window.scrollTo(0, 0);
    }
}

function previousSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        renderSlides();
        window.scrollTo(0, 0);
    }
}

// Navegação por teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') previousSlide();
});

// Inicializar
window.addEventListener('DOMContentLoaded', renderSlides);
