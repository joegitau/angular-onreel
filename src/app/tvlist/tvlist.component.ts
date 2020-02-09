import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-tvlist",
  templateUrl: "./tvlist.component.html",
  styleUrls: ["./tvlist.component.scss"]
})
export class TvlistComponent implements OnInit {
  public tvList: object;

  constructor(private movieService: DataService) {}

  ngOnInit() {
    this.movieService.fetchTvShows("tv").subscribe(
      data => (this.tvList = data),
      error => console.error("Something got broke... ", error)
    );
  }
}
