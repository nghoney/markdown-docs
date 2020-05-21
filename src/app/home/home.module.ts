import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../_shared/mats';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { ContentComponent } from './news/content/content.component';

@NgModule({
  declarations: [HomeComponent,FooterComponent, NewsComponent, ContentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers: [
    {provide: Window, useValue: window},
  ]
})
export class HomeModule { }
