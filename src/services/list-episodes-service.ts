import { PodcastTransferModel } from "../models/podcast-transfer-model"
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code"

export const serviceListEpisodes =
  async (): Promise<PodcastTransferModel> => {

    //definindo contrato de retorno
    let responseFormat: PodcastTransferModel = {
      statusCode: 0,
      body: [],
    }

    //buscando dados
    const data = await repositoryPodcast()

    //varificando se tem conteúdo e atribuindo ao contrado de resposta
    //outra maneira de fazer ;)
    responseFormat = {
      statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
      body: data,
    }

    return responseFormat
  }