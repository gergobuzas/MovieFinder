import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieFinderNavbarComponent } from "./components/movie-finder-navbar/movie-finder-navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MovieFinderNavbarComponent]
})
export class AppComponent {
  title = 'MovieFinder';
}
