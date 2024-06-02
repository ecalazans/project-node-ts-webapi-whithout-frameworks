# Podcast Menager

### Descrição

Um app ao estilo netflix, onde eu possa centralizar diferentes episódios
podcasts separados por categorias

### Domínio

Podcasts feitos em vídeo

### Features

- Listar os podcasts em sessões de categorias
  - [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como

### Feature

Listar os podcasts em sessões de categorias

### Como vou implementar:

Vou retornar em uma API REST (json):

- nome podcast, nome eposódio, imagem de capa, link, categorias

- GET: retorna lista de episódios

```js
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

- GET: retorna lista de episódios baseado em um parâmetro enviado pelo cliente do nome do podcast
