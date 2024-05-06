import { Routes } from '@angular/router';
import { DiscoverComponent } from './components/discover/discover.component';
import { SearchComponent } from './components/search/search.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

export const routes: Routes = [
     { path: '', component: DiscoverComponent },
     { path: "movie/:id", component: MovieDetailsComponent},
     { path: 'search', component:SearchComponent}
];
