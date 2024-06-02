import fs from "fs"
import path from "path"
import { PodcastModel } from "../models/podcast-model"

const pathData = path.join(__dirname, "../repositories/podcasts.json")

export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
  const language = "utf-8"

  const data = fs.readFileSync(pathData, language)
  let jsonFile = JSON.parse(data) //convertendo em JSON / Objeto

  if (podcastName) {
    jsonFile = jsonFile.filter(
      (podcast: PodcastModel) => podcast.podcastName === podcastName
    )
  }

  return jsonFile
}