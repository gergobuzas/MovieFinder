import { Component } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { Movie } from '../../models/movie.type';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { GenreService } from '../../services/genre-service';


@Component({
     selector: 'app-discover',
     standalone: true,
     imports: [CommonModule, NgFor],
     templateUrl: './discover.component.html',
     styleUrl: './discover.component.css'
})
export class DiscoverComponent {
     movies: Movie[] | undefined;

     constructor(private genreService: GenreService, private movieService: MovieService, private router: Router, private route: ActivatedRoute) {

     }

     ngOnInit(): void {
          this.route.paramMap.subscribe(params => {
               const id = params.get('id');
               if (id == null)
                    this.getTrendingMovies();
               else
                    this.getGenreMovies(parseInt(id, 10));
          })
     }

     getTrendingMovies() {
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

     getGenreMovies(id: number) {
          console.log('Getting genre movies!');
          this.movieService.getMoviesBasedOnGenre(id).subscribe(
               (response) => {
                    // Handle the response here
                    console.log(response.results)
                    this.movies = response.results;
                    console.log('MOVIES');
                    console.log(this.movies);
                    //console.log(this.movies);
               },
               (error) => {
                    // Handle errors
                    console.error('Error fetching trending movies:', error);
               }
          )
     }

     navigateToMovieDetails(movie: Movie) {
          this.router.navigate([`/movie/${movie.id}`]);
     }

}
