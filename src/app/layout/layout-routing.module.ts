import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FreshLayoutComponent } from './fresh-layout/fresh-layout.component';

import { LandingPageComponent } from '../pages/landing-page/landing-page.component';
import { SecondPageComponent } from '../pages/second-page/second-page.component';
import { ThirdPageComponent } from '../pages/third-page/third-page.component';

const routes: Routes = [
  {
    path: '',
    component: FreshLayoutComponent,
    children: [
      { path: '', component: LandingPageComponent },
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'second-page', component: SecondPageComponent, data: { animation: 'SecondPage' } },
      { path: 'third-page', component: ThirdPageComponent, data: { animation: 'ThirdPage' } },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
