import { PodcastModel } from "./podcast-model";

//criando contrato(regras/padrão)
export interface PodcastTransferModel {
  statusCode: number;
  body: PodcastModel[];
}