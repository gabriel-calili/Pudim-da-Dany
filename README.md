# 🍮 Pudim da Dany

Um site elegante, moderno e totalmente responsivo desenvolvido em **React + Vite** para a doceria **Pudim da Dany**. O projeto combina um visual premium com recursos práticos e dinâmicos para a venda de pudins artesanais.

---

## ✨ Funcionalidades

- **Hero Banner Interativo**: Imagem principal em alta resolução com enquadramento adaptável e botão de ação ("Conheça nossos produtos") com rolagem suave.
- **Catálogo de Produtos Completo**: Exibição de 8 sabores de pudim com fotos reais, design minimalista e efeitos dinâmicos ao passar o mouse:
  - Leite Condensado, Coco, Chocolate, Maracujá, Doce de Leite, Ninho com Nutella, Cachaça e Whisky.
- **Carrinho de Compras Integrado (WhatsApp)**:
  - Seleção de tamanhos ao adicionar ao carrinho: *Porção Individual (120g)*, *Pra Repetir (500g)* e *Tamanho Família (1,1kg)*.
  - Carrinho flutuante persistente com badge de quantidade de itens.
  - Painel lateral deslizante com resumo do pedido, opção de remover itens individualmente e botão para enviar o pedido montado diretamente para o WhatsApp oficial da loja.
- **Depoimentos Reais**: Carrossel dinâmico com fotos de perfil de clientes e avaliações reais.
- **Seção Sobre Nós**: Apresentação da Dany e a história da confeitaria com transições fluidas.
- **Scrollspy Inteligente**: Menu de navegação inteligente que destaca a sessão atual em tempo real conforme a rolagem da página.
- **Decorações Animadas**: Estrelas brilhantes e corações flutuantes animados que decoram as laterais do site de forma leve e premium.

---

## 🛠️ Tecnologias Utilizadas

- **Core**: [React 18](https://react.dev/) + [Vite](https://vite.dev/) (para carregamento e build extremamente rápidos)
- **Estilização**: Vanilla CSS (CSS puro moderno utilizando variáveis customizáveis)
- **Animações**: CSS Keyframes (para efeitos suaves de brilho/flutuação e transições)
- **Ícones**: SVG inline (leves e responsivos)
- **Histórico & Controle de Versão**: Git

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passos para Instalação e Execução

1. **Clonar ou baixar a pasta do projeto**:
   ```bash
   git clone https://github.com/seu-usuario/pudim-da-dany.git
   cd pudim-da-dany
   ```

2. **Instalar as dependências**:
   ```bash
   npm install
   ```

3. **Iniciar o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   *Após rodar o comando, o terminal exibirá o endereço local (geralmente `http://localhost:5173`). Abra este link no navegador.*

4. **Gerar versão de produção (Build)**:
   ```bash
   npm run build
   ```
   *Os arquivos otimizados serão gerados na pasta `/dist`, prontos para hospedagem (Netlify, Vercel, GitHub Pages, etc).*

---

## 📁 Estrutura de Pastas Principal

```text
├── src/
│   ├── assets/          # Imagens, avatares e banners
│   ├── components/      # Componentes do site (Header, Hero, Cart, Categories, About, Footer)
│   ├── hooks/           # Custom hooks (ScrollReveal para efeitos de entrada)
│   ├── App.jsx          # Componente principal do App (gerenciador de estado do carrinho)
│   ├── main.jsx         # Ponto de entrada do React
│   └── index.css        # Folha de estilos global e variáveis do design system
├── index.html           # Template HTML5 principal
└── vite.config.js       # Configuração do Vite
```

---

## ✉️ Contatos da Doceria

- **WhatsApp**: (31) 99930-2308
- **Instagram**: [@pudimdadanyjm](https://instagram.com/pudimdadanyjm)
