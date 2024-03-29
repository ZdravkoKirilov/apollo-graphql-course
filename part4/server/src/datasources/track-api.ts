import { RESTDataSource } from "@apollo/datasource-rest";

import { TrackModel } from "../models";

export class TrackAPI extends RESTDataSource {
  // the Catstronauts catalog is hosted on this server
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksForHome() {
    return this.get("tracks");
  }

  getAuthor(authorId: string) {
    return this.get(`author/${authorId}`);
  }

  getTrack(trackId: string) {
    return this.get(`track/${trackId}`);
  }

  getTrackModules(trackId: string) {
    return this.get(`track/${trackId}/modules`);
  }

  getModule(moduleId: string) {
    return this.get(`module/${moduleId}`);
  }

  incrementTrackViews(trackId: string) {
    return this.patch<TrackModel>(`track/${trackId}/numberOfViews`);
  }
}
