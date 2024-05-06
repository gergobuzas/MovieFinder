import { Component } from '@angular/core';
import { MovieService } from '../../services/movie-service'
import { Movie } from '../../models/movie.type';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { NgIf, NgFor } from '@angular/common';
import { DiscoverComponent } from '../discover/discover.component';

@Component({
     selector: 'app-search',
     standalone: true,
     imports: [FormsModule, NgIf, NgFor, DiscoverComponent],
     templateUrl: './search.component.html',
     styleUrl: './search.component.css'
})
export class SearchComponent {
     searchQuery: string = '';
     movies: Movie[] = [];

     constructor(private movieService: MovieService) { }

     search() {
          if (this.searchQuery.trim() !== '') {
               this.movieService.searchForMovie(this.searchQuery).subscribe(
                    (results) => {
                         console.log(results);
                         this.movies = results.results;
                    },
                    (error) => {
                         console.error('Error searching:', error);
                    }
               );
          }
     }
}