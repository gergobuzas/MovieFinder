import { Component } from '@angular/core';
import { MovieService } from '../../services/movie-service';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css'
})
export class DiscoverComponent {
     constructor(private movieService: MovieService) {
          this.getTrendingMovies();
     }
     
     getTrendingMovies() {
          this.movieService.getTrendingMovies();
     }
}
