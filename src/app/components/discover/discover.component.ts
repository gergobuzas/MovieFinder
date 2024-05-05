import { Component } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { Movie } from '../../models/movie.type';

@Component({
     selector: 'app-discover',
     standalone: true,
     imports: [],
     templateUrl: './discover.component.html',
     styleUrl: './discover.component.css'
})
export class DiscoverComponent {
     private movies: Movie[] | undefined;

     constructor(private movieService: MovieService) {

     }

     ngOnInit(): void {
          this.movieService.getTrendingMovies(1).subscribe(
               (response) => {
                    // Handle the response here
                    this.movies = response.results;
                    console.log(this.movies);
                    this.movies?.forEach(element => {
                         console.log(element)
                    })
               },
               (error) => {
                    // Handle errors
                    console.error('Error fetching trending movies:', error);
               }
          );
     }

}
