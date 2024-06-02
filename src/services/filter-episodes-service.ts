import { IncomingMessage } from "http"
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { PodcastTransferModel } from "../models/podcast-transfer-model"
import { StatusCode } from "../utils/status-code"

export const serviceFilterEpisodes =
  async (podcastName: string | undefined): Promise<PodcastTransferModel> => {

    //definindo contrato de retorno
    let responseFormat: PodcastTransferModel = {
      statusCode: 0,
      body: [],
    }

    //buscando os dados
    const queryString = podcastName?.split("?p=")[1] || ""
    const data = await repositoryPodcast(queryString)

    //varificando se tem conteúdo
    responseFormat.statusCode =
      data.length !== 0 ? StatusCode.OK : StatusCode.NoContent

    responseFormat.body = data

    return responseFormat
  }