import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {InceptionResponseInterface} from "../shared/types/inception.interface";

const PARAMS: HttpParams = new HttpParams({
  fromObject: {
    action: "opensearch",
    format: "json",
    origin: "*"
  }
});

@Injectable({providedIn: "root"})
export class ApiService {

  private readonly API_KEY: string = "a2998a3f"
  private readonly URL: string = "http://www.omdbapi.com/?s=inception&apikey=a2998a3f"

  constructor(private http: HttpClient) {}

  getSomeData(): Observable<InceptionResponseInterface> {
    return this.http.get<InceptionResponseInterface>(this.URL)
  }

  getMovieById(id: string): Observable<any> {
    return this.http.get(`http://www.omdbapi.com/?i=${id}&apikey=${this.API_KEY}`)
  }

  searchGetMovie(term: string): Observable<any> {
    if(term === '') {
      return of([]);
    }

    return this.http.get(
      `http://www.omdbapi.com/?s=${term}&apikey=${this.API_KEY}`,
      {params: PARAMS.set('search', term)}
    )
  }

}
