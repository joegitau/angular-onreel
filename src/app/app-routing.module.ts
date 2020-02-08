import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { MovielistComponent } from "./movielist/movielist.component";
import { MovieComponent } from "./movie/movie.component";
import { TvlistComponent } from "./tvlist/tvlist.component";
import { TvshowComponent } from "./tvshow/tvshow.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "movielist", component: MovielistComponent },
  { path: "movie", component: MovieComponent },
  { path: "tvlist", component: TvlistComponent },
  { path: "tvshow", component: TvshowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
