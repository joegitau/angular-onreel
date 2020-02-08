import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-movielist",
  templateUrl: "./movielist.component.html",
  styleUrls: ["./movielist.component.scss"]
})
export class MovielistComponent implements OnInit {
  public movieList = [];
  constructor() {}

  ngOnInit() {}
}
