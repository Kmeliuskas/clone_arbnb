# Clone do Airbnb

Este projeto é um clone moderno e responsivo da interface do **Airbnb**, desenvolvido com **Next.js** (App Router), **TypeScript** e **Tailwind CSS**. A aplicação consome dados dinâmicos de uma API externa para listar acomodações, categorias de filtros e exibir detalhes específicos de cada estadia, incluindo avaliações e comodidades.

---

## 🚀 Tecnologias Utilizadas

A stack principal do projeto foi escolhida para garantir alta performance, tipagem estática e facilidade de estilização:

- **[Next.js 15](https://nextjs.org/)** (App Router) - Framework React para aplicações web de alta performance.
- **[React 19](https://react.dev/)** - Biblioteca para construção de interfaces de usuário baseadas em componentes.
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript para tipagem estática e segurança do código.
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework utilitário de CSS para estilização rápida e moderna.
- **[Swiper](https://swiperjs.com/)** - Biblioteca de carrossel utilizada para a navegação de filtros horizontais de categorias.
- **[Tabler Icons](https://tabler.io/icons)** (`@tabler/icons-react`) - Biblioteca de ícones vetoriais de alta qualidade.

---

## 🛠️ Funcionalidades e Recursos

### 1. Página Inicial (Listagem de Acomodações)
* **Barra Superior (`BarraSuperior` & `Logo`)**: Contém a logo oficial estilizada (em formato SVG responsivo), abas para alternar entre "Acomodações" e "Experiências" e botão de perfil/login com ícone de usuário.
* **Barra de Pesquisa (`BarraPesquisa`)**: Campo de pesquisa com design oval clássico do Airbnb e botão de busca com o vermelho característico da marca.
* **Categorias Horizontais (`NavegacaoAbasHorizontal`)**: Carrossel responsivo construído com Swiper, exibindo categorias com ícones obtidos dinamicamente da API e um botão fixo para acionar filtros.
* **Grid de Acomodações (`Acomodacoes`)**: Sistema de grid fluido e totalmente responsivo (de 1 coluna em celulares a até 6 colunas em telas ultra-wide).
* **Card de Acomodação (`Acomodacao`)**:
  * Carrega a imagem principal do local.
  * Exibe selo de "Preferido dos Hóspedes" caso a propriedade tenha destaque na API (`hasBadge: true`).
  * Botão de favoritar (coração) posicionado sobre a imagem.
  * Informações detalhadas: Localização, nota média (estrela), nome do anfitrião, datas disponíveis e preço por noite.
  * Links amigáveis baseados no `slug` de cada acomodação.

### 2. Página de Detalhes da Acomodação (`/[id]`)
Ao clicar em qualquer acomodação na home, o usuário é redirecionado para a rota dinâmica `/[id]` (baseada no slug da acomodação), onde os seguintes elementos são carregados:
* **Galeria de Imagens (`Galeria`)**: Exibe até 9 fotos da propriedade em um layout de grid, destacando a primeira foto em tamanho maior.
* **Informações Detalhadas (`AcomodacaoDetalhes`)**: Apresenta dados da propriedade (número de hóspedes suportados, quartos, camas e banheiros) e uma lista visual com as comodidades oferecidas (Wi-Fi, piscina, cozinha, etc.).
* **Depoimentos (`AcomodacaoDepoimentos`)**: Listagem das avaliações deixadas por hóspedes anteriores, exibindo a foto do perfil, o nome, a data da estadia e o comentário.
* **Tratamento de 404 (Not Found)**: Caso o `slug` acessado não corresponda a nenhuma acomodação válida na API, a aplicação renderiza a página de erro correspondente por meio da função `notFound()` do Next.js.

---

## 📂 Estrutura do Projeto

A organização de pastas segue boas práticas do Next.js e separa responsabilidades de forma clara:

```
src/
├── app/                  # Rotas e páginas da aplicação (App Router)
│   ├── [id]/            # Rota dinâmica para a página de detalhes da acomodação
│   │   └── page.tsx      # Página de detalhes
│   ├── globals.css       # Estilos globais e importação do Tailwind CSS v4
│   ├── layout.tsx        # Layout raiz do projeto
│   └── page.tsx          # Página principal (Home)
├── assets/               # Recursos estáticos (centralização dos ícones do Tabler)
│   └── icones.tsx
├── components/           # Componentes menores e reutilizáveis da interface
│   ├── Acomodacao/       # Card individual de acomodação
│   ├── BotaoIcone/       # Botão padronizado com suporte a ícones
│   └── Logo/             # Componente com a logo em SVG
├── types/                # Definições de tipos e interfaces do TypeScript
│   └── AirbnbDados.ts    # Tipos para acomodações, depoimentos, fotos e ícones
├── utils/                # Funções de suporte e consumo de APIs
│   └── api.ts            # Consumo do endpoint externo (fetchData e fetchDatabyId)
└── widgets/              # Componentes de seção ou nível de bloco de página
    ├── AcomodacaoDepoimentos.tsx
    ├── AcomodacaoDetalhes.tsx
    ├── Acomodacoes.tsx
    ├── BarraPesquisa.tsx
    ├── BarraSuperior.tsx
    ├── Galeria.tsx
    ├── NavegacaoAbasHorizontal.tsx
    └── Rodape.tsx
```

---

## 🔌 Consumo de API

Os dados são consumidos dinamicamente de uma API externa por meio de requisições nativas utilizando `fetch`:
* **Endpoint base**: `https://web.codans.com.br/airbnb`
* As funções de consumo estão localizadas em `src/utils/api.ts` e são executadas no lado do servidor (Server Components) para melhor SEO e velocidade de carregamento.

---

## 💻 Como Executar o Projeto Localmente

Siga o passo a passo para rodar o projeto em sua máquina:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/clone_arbnb.git
   cd clone_arbnb
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   Abra [http://localhost:3000](http://localhost:3000) para ver o projeto em execução.