export interface ITvShow {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  number_of_episodes: number;
  number_of_seasons: number;
  backdrop_path?: string;
  vote_average?: number;
  status: string;
}
