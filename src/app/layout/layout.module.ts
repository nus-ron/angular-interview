import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreshLayoutComponent } from './fresh-layout/fresh-layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component'
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [],
  declarations: [
    FreshLayoutComponent,
    MainLayoutComponent,
    HeaderComponent,

  ]
})
export class LayoutModule { }
