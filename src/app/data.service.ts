import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { _APIKEY } from "./_keys";
import { IMovie } from "./movie";
import { ITvShow } from "./tvshow";

@Injectable({
  providedIn: "root"
})
export class DataService {
  public URL_TYPE = {
    tv: "tv/on-the-air",
    movie: "movie/now_playing"
  };

  getUrl(urlType: string) {
    if (urlType === "tv") {
      return `https://api.themoviedb.org/3/${this.URL_TYPE.tv}?api_key=${_APIKEY}`;
    } else if (urlType === "movie") {
      return `https://api.themoviedb.org/3/${this.URL_TYPE.movie}?api_key=${_APIKEY}`;
    }
  }

  constructor(private http: HttpClient) {}

  // fetchMovies
  fetchMovies(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.getUrl("movie"));
  }

  // fetchTvshows
  fetchTvShows(): Observable<ITvShow[]> {
    return this.http.get<ITvShow[]>(this.getUrl("tv"));
  }
}
