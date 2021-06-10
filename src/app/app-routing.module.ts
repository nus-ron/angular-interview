import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { ThirdPageComponent } from './pages/third-page/third-page.component';

const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
	{ path: 'second-page', component:SecondPageComponent  },
	{ path: 'third-page', component: ThirdPageComponent },
	{ path: '**', redirectTo: '/landing-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
