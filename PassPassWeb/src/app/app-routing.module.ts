import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ViewPasswordComponent } from './view-password/view-password.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'view/:id', component: ViewPasswordComponent },
  { path: '**', redirectTo: '/' }
];

// const routes: Routes = [
//   { path: 'first-component', component: FirstComponent },
//   { path: 'second-component', component: SecondComponent },
//   { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
//   { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
