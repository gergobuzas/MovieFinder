import { Component } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie.type';
import { Router } from '@angular/router';
import { NgIf, NgFor} from '@angular/common';
import { GenreService } from '../../services/genre-service';
import { Genre } from '../../models/genre.type';


@Component({
     selector: 'app-movie-details',
     standalone: true,
     imports: [NgIf, NgFor],
     templateUrl: './movie-details.component.html',
     styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
     movie!: Movie;

     constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) {
          
     }

     ngOnInit(): void {
          this.route.paramMap.subscribe(params => {
               const id = params.get('id');
               if (id == null)
                    return;
               //console.log('ID:', id);
               // Use the id parameter as needed
               this.movieService.getMovieDataById(parseInt(id, 10)).subscribe(
                    (response) => {
                         // Handle the response here
                         if (response == null || response == undefined) {
                              this.router.navigate(['']);
                         }
                         this.movie = response;
                         //console.log(this.movie);
                    },
                    (error) => {
                         // Handle errors
                         console.error('Error fetching movie data', error);
                         this.router.navigate(['']);
                    }
               );
          });
     }

}