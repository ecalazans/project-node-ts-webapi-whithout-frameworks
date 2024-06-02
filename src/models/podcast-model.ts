//criando contrato(regras/padrão)
export interface PodcastModel {
  podcastName: string;
  episode: string;
  videoId: string;
  category: string[];
}