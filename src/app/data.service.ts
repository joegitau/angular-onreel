import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  public readonly BASE_URL: string = "";
  constructor(private http: HttpClient) {}
}
