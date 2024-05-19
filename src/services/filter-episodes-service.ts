import { repositoryPodcast } from "../data/podcasts-repositories"
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { HttpStatusCode } from "../utils/http-status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  }; 

  const queryString = podcastName?.split("?v=")[1] || "";

  const data = await repositoryPodcast(queryString);
  
  responseFormat.statusCode = data.length !== 0 ? HttpStatusCode.OK : HttpStatusCode.NO_CONTENT;

  responseFormat.body = data;

  return responseFormat;
}