import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxCarouselModule } from 'ngx-carousel';
import { AgmCoreModule } from '@agm/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    GalleryComponent,
    
  ],
  imports: [
    BrowserModule,
    NgxCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvHUwyT-bkLoOzixgv5jgXKjxPZuTWhuw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
