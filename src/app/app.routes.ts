import { Routes } from '@angular/router';
import { DiscoverComponent } from './components/discover/discover.component';
import { SearchComponent } from './components/search/search.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';

export const routes: Routes = [
     { path: '', component: DiscoverComponent },
     { path: "movie/:id", component: MovieDetailsComponent },
     { path: "actor/:id", component: PersonDetailsComponent},
     { path: 'search', component: SearchComponent },
     { path: "genre/:id", component: DiscoverComponent }
];
