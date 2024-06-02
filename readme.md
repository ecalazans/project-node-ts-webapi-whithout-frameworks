# Podcast Manager

### Descrição

Um app ao estilo Netflix, onde você pode centralizar diferentes episódios de podcasts separados por categorias.

### Domínio

Podcasts feitos em vídeo.

### Features

- Listar os podcasts em sessões de categorias
  - [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como

### Feature

Listar os podcasts em sessões de categorias.

### Como vou implementar:

Vou retornar em uma API REST (JSON):

- Nome do podcast, nome do episódio, imagem de capa, link, categorias.

- **GET**: retorna lista de episódios

#### Exemplo de resposta:

```json
[
  {
    "podcastName": "Flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30&pp=ygUMY2J1bSBubyBmbG93",
    "category": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "Flow",
    "episode": "IGORFINA - Extra Flow",
    "videoId": "vhykXU7PPVc",
    "cover": "https://i.ytimg.com/vi/vhykXU7PPVc/hqdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30&pp=ygUMY2J1bSBubyBmbG93",
    "category": ["comédia", "humor", "cinema"]
  }
]
```

- **GET**: retorna lista de episódios baseado em um parâmetro enviado pelo cliente do nome do podcast.

#### Controllers

Aqui você deve implementar a lógica para `getListEpisodes` e `getFilterEpisodes` no arquivo `./controllers/podscasts-controller`.

#### Rotas

Defina suas rotas no arquivo `./routes/routes`:

```typescript
export const Routes = {
  LIST: "/podcasts",
  EPISODE: "/episodes",
};
```

#### Métodos HTTP

Utilize métodos HTTP definidos no arquivo `./utils/http-methods`:

```typescript
export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}
```

#### Endpoints

A API fornece os seguintes endpoints:

- GET /podcasts: Retorna uma lista de todos os episódios de podcasts.

```typescript
[
  {
    podcastName: "Flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30&pp=ygUMY2J1bSBubyBmbG93",
    category: ["saúde", "esporte", "bodybuilder"],
  },
  {
    podcastName: "Flow",
    episode: "IGORFINA - Extra Flow",
    videoId: "vhykXU7PPVc",
    cover: "https://i.ytimg.com/vi/vhykXU7PPVc/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30&pp=ygUMY2J1bSBubyBmbG93",
    category: ["comédia", "humor", "cinema"],
  },
];
```

- GET /episodes: Retorna uma lista de episódios filtrados pelo nome do podcast.

Parâmetros de Query: podcastName _(Nome do podcast para filtrar os episódios_).

```typescript
[
  {
    podcastName: "Flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30&pp=ygUMY2J1bSBubyBmbG93",
    category: ["saúde", "esporte", "bodybuilder"],
  },
];
```

### Como Rodar o Projeto

1. Clone o repositório.
2. Instale as dependências usando `npm install`.
3. Inicie o servidor com `npm rum start:dev`.

### Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias e pacotes:

- @types/node: Tipos TypeScript para Node.js, proporcionando tipagem estática para o desenvolvimento em Node.js.

- tsup: Bundler para TypeScript, usado para empacotar o código fonte.

- tsx: Ferramenta para execução de arquivos TypeScript com suporte a watch mode e outras funcionalidades de desenvolvimento.

- typescript: Superset do JavaScript que adiciona tipagem estática e outros recursos, facilitando o desenvolvimento robusto e escalável.
