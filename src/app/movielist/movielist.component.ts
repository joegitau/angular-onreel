import { Component, OnInit } from "@angular/core";

import { DataService } from "../data.service";

@Component({
  selector: "app-movielist",
  templateUrl: "./movielist.component.html",
  styleUrls: ["./movielist.component.scss"]
})
export class MovielistComponent implements OnInit {
  public movieList: object;
  constructor(private movieService: DataService) {}

  ngOnInit() {
    this.movieService.fetchMovies("movie").subscribe(
      data => {
        console.log(data);
        this.movieList = data;
      },
      error => console.log(error)
    );
  }
}
