import { Routes } from '@angular/router';
import { DiscoverComponent } from './components/discover/discover.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
     { path: '', component: DiscoverComponent },
     {path: 'search', component:SearchComponent}
];
