# Tur Carajás

Plataforma digital de turismo para Canaã dos Carajás (PA), conectando visitantes a roteiros personalizados e negócios locais (guias, comerciantes, agricultores e artesãos) em um único ambiente. Projeto desenvolvido para o Hacka Start no Futuro 2026 (eixo Turismo).

## Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) (mobile-first)
- [React Router](https://reactrouter.com/)
- [Zustand](https://zustand-demo.pmnd.rs/) (estado global do questionário)

Nesta etapa o projeto é **somente frontend**: os dados de atrativos, negócios e restaurantes são mockados em JSON (`src/data/`) e acessados por uma camada de serviços (`src/services/`) que simula chamadas de API — quando o backend existir, basta trocar a implementação interna desses serviços.

## Como rodar localmente

```bash
npm install
npm run dev
```

## Estrutura de pastas

```
src/
├── components/
│   ├── ui/           # botões, inputs, badges genéricos
│   └── layout/       # Header, Footer, menu mobile
├── pages/
│   ├── Home/
│   ├── Questionario/
│   ├── Roteiro/
│   ├── Catalogo/
│   └── PerfilNegocio/
├── data/              # mocks: atrativos.json, negocios.json, restaurantes.json
├── services/          # camada de acesso aos dados (hoje lê JSON local)
├── hooks/
├── types/             # interfaces TS: Atrativo, Negocio, Restaurante, RespostaQuestionario
├── router/
├── store/             # Zustand
└── styles/
```

## Convenção de branches

- `main`: branch estável
- `dev`: branch de integração
- `feature/nome-da-tela`: branches de desenvolvimento de cada tela/funcionalidade
