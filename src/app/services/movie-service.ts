import { Injectable } from "@angular/core";
import { Movie } from "../models/movie.type";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";

@Injectable({
     providedIn: 'root'
})
export class MovieService {
     //private movies: Movie[];
     constructor(private http: HttpClient) {
          
     }

     getTrendingMovies(): Observable<any> {
          const url = 'https://api.themoviedb.org/3/discover/movie?language=en-US&page=5&sort_by=popularity.desc';
          const headers = new HttpHeaders({
               'Authorization': `Bearer ${environment.accessToken}`,
               'accept': 'application/json'
          });
          return this.http.get(url, { headers });
     }
}