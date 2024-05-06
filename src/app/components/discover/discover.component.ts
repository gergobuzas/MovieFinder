import { Component } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { Movie } from '../../models/movie.type';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
     selector: 'app-discover',
     standalone: true,
     imports: [CommonModule, NgFor],
     templateUrl: './discover.component.html',
     styleUrl: './discover.component.css'
})
export class DiscoverComponent {
     movies: Movie[] | undefined;

     constructor(private movieService: MovieService, private router: Router) {

     }

     ngOnInit(): void {
          this.movieService.getTrendingMovies(1).subscribe(
               (response) => {
                    // Handle the response here
                    this.movies = response.results;
                    //console.log(this.movies);
               },
               (error) => {
                    // Handle errors
                    console.error('Error fetching trending movies:', error);
               }
          );
     }

     navigateToMovieDetails(movie: Movie) {
          this.router.navigate([`/movie/${movie.id}`]);
     }

}
