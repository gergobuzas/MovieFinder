import { Injectable } from "@angular/core";
import { Movie } from "../models/movie.type";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { Genre } from "../models/genre.type";

@Injectable({
     providedIn: 'root'
})
export class GenreService {
     private genres!: Genre[];
     constructor(private http: HttpClient) {
          this.getGenres();
     }

     getGenres(){
          const url = `https://api.themoviedb.org/3/genre/movie/list?language=en`;
          const headers = new HttpHeaders({
               'Authorization': `Bearer ${environment.accessToken}`,
               'accept': 'application/json'
          });
          this.http.get<Genre[]>(url, { headers })
          .subscribe((response) => {
               this.genres = response;
               console.log(this.genres);
          },
          (error) => {
               console.error('Error fetching genres:', error);
          })
     }


     getGenreNameById(id: number) {
          const genre = this.genres.find(genre => genre.id === id);
          return genre ? genre.name : 'Unknown';
     }

}