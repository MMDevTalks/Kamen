import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AnonymousGuard } from './core/guards/anonymous.guard';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AnonymousGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
