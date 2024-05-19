import { repositoryPodcast } from "../data/podcasts-repositories"
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { HttpStatusCode } from "../utils/http-status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  }; 

  const data = await repositoryPodcast()

  responseFormat.statusCode = data.length !== 0 ? HttpStatusCode.OK : HttpStatusCode.NO_CONTENT;

  responseFormat.body = data;

  return responseFormat;
}