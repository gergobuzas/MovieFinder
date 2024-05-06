import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person-service';
import { Person } from '../../models/person.type';
import { NgFor, NgIf } from '@angular/common';
import { Movie } from '../../models/movie.type';

@Component({
  selector: 'app-person-details',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css'
})
export class PersonDetailsComponent {
     person!: Person;
     movies: Movie[] = [];
     constructor(private route: ActivatedRoute, private personService: PersonService, private router: Router) {
          
     }

     ngOnInit(): void {
          //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
          //Add 'implements OnInit' to the class.
          this.route.paramMap.subscribe(params => {
               const id = params.get('id');
               if (id == null)
                    return;
               //console.log('ID:', id);
               // Use the id parameter as needed
               this.personService.getPersonById(parseInt(id, 10)).subscribe(
                    (response) => {
                         this.person = response;
                    },
                    (error) => {
                         // Handle errors
                         console.error('Error fetching movie data', error);
                         this.router.navigate(['/']);
                    }
               );

               this.personService.getMoviesOfAPersonById(parseInt(id, 10)).subscribe(
                    (response) => {
                         this.movies = response.cast;
                    },
                    (error) => {
                         // Handle errors
                         console.error('Error fetching movie data', error);
                         this.router.navigate(['/']);
                    }
               );
          });
     }

     navigateToMovieDetails(id: number) {
          this.router.navigate([`/movie/${id}`]);
     }
}
