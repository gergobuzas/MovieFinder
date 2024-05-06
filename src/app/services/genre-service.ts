import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Genre } from "../models/genre.type";

@Injectable({
     providedIn: 'root'
})
export class GenreService {
     private genres: Genre[] = [];

     constructor(private http: HttpClient) { }

     private fetchGenres(): Observable<Genre[]> {
          const url = `https://api.themoviedb.org/3/genre/movie/list?language=en`;
          const headers = new HttpHeaders({
               'Authorization': `Bearer ${environment.accessToken}`,
               'accept': 'application/json'
          });
          return this.http.get<any>(url, { headers }).pipe(
               map((response) => {
                    this.genres = response.genres;
                    console.log('INSIDE THE SERVICE');
                    console.log(this.genres);
                    return this.genres;
               }),
               catchError((error) => {
                    console.error('Error fetching genres:', error);
                    throw error;
               })
          );
     }

     private async ensureGenresFetched(): Promise<void> {
          if (this.genres.length === 0) {
               await this.fetchGenres().toPromise();
          }
     }

     async getGenreNameById(id: number): Promise<string> {
          await this.ensureGenresFetched();
          const genre = this.genres.find(genre => genre.id === id);
          return genre ? genre.name : 'Unknown';
     }
}