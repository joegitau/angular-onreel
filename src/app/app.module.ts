import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { MovielistComponent } from "./movielist/movielist.component";
import { MovieComponent } from "./movie/movie.component";
import { TvlistComponent } from "./tvlist/tvlist.component";
import { TvshowComponent } from "./tvshow/tvshow.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MovielistComponent,
    MovieComponent,
    TvlistComponent,
    TvshowComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
