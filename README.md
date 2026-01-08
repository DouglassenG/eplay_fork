# 🎮 ePlay - Loja de Games Digital

![Status](https://img.shields.io/badge/Status-Concluído-green)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6)
![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC)
![Styled Components](https://img.shields.io/badge/Style-Styled_Components-db7093)

## 💻 Sobre o Projeto

O **ePlay** é uma aplicação Single Page Application (SPA) que simula o ecossistema de uma loja de jogos digitais. O foco do projeto foi implementar uma arquitetura escalável capaz de lidar com múltiplas categorias de produtos, promoções e um fluxo de compra intuitivo.

Este projeto demonstra a capacidade de integrar interfaces ricas com lógicas de negócio complexas no Front-end, utilizando o ecossistema moderno do React.

## ⚙️ Arquitetura e Tecnologias

A stack tecnológica foi escolhida visando performance e tipagem estática:

* **[React](https://reactjs.org/):** Biblioteca core para construção da interface.
* **[TypeScript](https://www.typescriptlang.org/):** Utilizado extensivamente para tipar props, estados e respostas da API, garantindo robustez ao código.
* **[Redux Toolkit](https://redux-toolkit.js.org/):** Gerenciamento de estado global para controlar o carrinho de compras e o status dos pedidos.
* **[Styled Components](https://styled-components.com/):** Estilização baseada em componentes, permitindo temas globais e manutenção facilitada do CSS.
* **[React Router DOM](https://reactrouter.com/):** Gerenciamento de rotas (Home, Categorias, Produto Detalhado, Checkout).
* **[ESLint & Prettier](https://eslint.org/):** Padronização de código e boas práticas.

## 🧩 Funcionalidades Principais

1.  **Vitrine Dinâmica:**
    * Seção de Destaques (Hero Banner).
    * Listagem de jogos por categorias (Ação, RPG, Esportes, etc.).
    * Seção de "Em Breve" e "Promoções".
2.  **Página de Produto:** Detalhes técnicos, galeria de imagens e botão de compra.
3.  **Carrinho de Compras (Overlay):**
    * Adição/Remoção de jogos.
    * Cálculo automático de total.
4.  **Checkout:**
    * Formulário de cadastro e endereço.
    * Validação de dados de pagamento (simulado).
    * Feedback de sucesso na compra.

## 📂 Estrutura do Código

A organização de pastas favorece a separação de responsabilidades:

```text
src/
├── components/      # Componentes de UI (Button, Card, Gallery, Hero, etc.)
├── pages/           # Páginas da aplicação (Home, Categories, Product, Checkout)
├── models/          # Modelos de dados e Interfaces TypeScript
├── store/           # Configuração do Redux (Slices de Carrinho e API)
├── styles/          # Estilos globais (GlobalStyle) e Variáveis de tema
├── services/        # Configuração de endpoints (API)
├── utils/           # Formatadores (Preço, Data)
└── routes.tsx       # Configuração das rotas da aplicação
