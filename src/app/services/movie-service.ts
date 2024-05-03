import { Injectable } from "@angular/core";
import { Movie } from "../models/movie.type";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class MovieService{
     private movies: Movie[];
     constructor(private http: HttpClient) {
          
     }

     getTrendingMovies() {
          this.http.get(`https://api.themoviedb.org/3/movie/343611?api_key=${environment.apiKey}`)
               .pipe(
                    map((response: any) => this.movies.push(response)) // Adjust this line to extract the specific data you want
               );
     }
}