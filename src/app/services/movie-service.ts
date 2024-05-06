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

     getTrendingMovies(pageNumber: number): Observable<any> {
          const url = `https://api.themoviedb.org/3/discover/movie?language=en-US&page=${pageNumber}&sort_by=popularity.desc`;
          const headers = new HttpHeaders({
               'Authorization': `Bearer ${environment.accessToken}`,
               'accept': 'application/json'
          });
          return this.http.get(url, { headers });
     }

     getMovieDataById(id: number): Observable<any> {
          const url = `https://api.themoviedb.org/3/movie/${id}`;
          const headers = new HttpHeaders({
               'Authorization': `Bearer ${environment.accessToken}`,
               'accept': 'application/json'
          });
          return this.http.get(url, { headers });
     }

     getMoviesBasedOnGenre(genreId: number): Observable<any>  {
          const url = `https://api.themoviedb.org/3/discover/movie?page=1&sort_by=popularity.desc&with_genres=${genreId}`;
          const headers = new HttpHeaders({
               'Authorization': `Bearer ${environment.accessToken}`,  
               'accept': 'application/json'
          });
          return this.http.get(url, { headers });
     }

     searchForMovie(query: string): Observable<any> {
          const url = `https://api.themoviedb.org/3/search/movie?query=${query}&page=1`;
          const headers = new HttpHeaders({
               'Authorization': `Bearer ${ environment.accessToken }`,  
               'accept': 'application/json'
          });
          return this.http.get(url, { headers });
     }

     getActorsOfAMovie(movieId: number): Observable<any> {
          const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
          const headers = new HttpHeaders({
               'Authorization': `Bearer ${environment.accessToken}`,
               'accept': 'application/json'
          });
          return this.http.get(url, { headers });
     }
}