import { Injectable } from "@angular/core";
import { Movie } from "../models/movie.type";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";

@Injectable({
     providedIn: 'root'
})
export class PersonService {
     //private movies: Movie[];
     constructor(private http: HttpClient) {

     }

     getPersonById(personId: number): Observable<any> {
          const url = `https://api.themoviedb.org/3/person/${personId}?language=en-US`;
          const headers = new HttpHeaders({
               'Authorization': `Bearer ${environment.accessToken}`,
               'accept': 'application/json'
          });
          return this.http.get(url, { headers });
     }

     getMoviesOfAPersonById(personId: number): Observable<any> {
          const url = `https://api.themoviedb.org/3/person/${personId}/movie_credits?language=en-US`;
          const headers = new HttpHeaders({
               'Authorization': `Bearer ${environment.accessToken}`,
               'accept': 'application/json'
          });
          return this.http.get(url, { headers });
     }
}