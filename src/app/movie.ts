export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  release_date?: Date;
  overview: string;
  backdrop_path: string;
  homepage: string;
  tagline?: string;
  budget?: number;
  revenue?: number;
  original_language?: string;
}
