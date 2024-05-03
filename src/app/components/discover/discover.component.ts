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
     }
     
     ngOnInit(): void {
          this.movieService.getTrendingMovies().subscribe(
               (response) => {
                    // Handle the response here
                    console.log(response);
               },
               (error) => {
                    // Handle errors
                    console.error('Error fetching trending movies:', error);
               }
          );
     }

}
