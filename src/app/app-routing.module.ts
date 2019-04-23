import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { MovieComponent } from './movie/movie.component';
import { RegisterComponent } from './register/register.component';
import { EditMovieComponent } from './edit.movie/edit.movie.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {path:'login', component:LoginComponent},
  {path:'addmovie', component:AddmovieComponent},
  {path:'movie', component:MovieComponent},
  {path:'register', component:RegisterComponent},
  {path: 'edit-movie/:id', component:EditMovieComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
