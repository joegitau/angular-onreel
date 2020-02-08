import { Component, OnInit } from "@angular/core";

import { DataService } from "../data.service";

@Component({
  selector: "app-movielist",
  templateUrl: "./movielist.component.html",
  styleUrls: ["./movielist.component.scss"]
})
export class MovielistComponent implements OnInit {
  public movieList = {};
  constructor(private movieService: DataService) {}

  ngOnInit() {
    this.movieService.fetchMovies("movie").subscribe(
      data => {
        console.log(data);
        this.movieList = data;
        // this.movieList = Object.entries(data);
        // for (let key in data) {
        //   if (data.hasOwnProperty(key)) {
        //     this.movieList.push(data[key]);
        //   }
        // }
      },
      error => console.log(error)
    );
  }
}
