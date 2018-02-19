import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RoomsComponent } from './rooms/rooms.component';
import { EventsComponent } from './events/events.component';
import { ResturantComponent } from './resturant/resturant.component';


const routes: Routes = [
    // Declaring where the application will go if there is nothing in the site url
    { path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: 'home' , component: AboutComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'rooms', component: RoomsComponent},
    {path: 'events', component: EventsComponent},
    {path: 'resturant', component: ResturantComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
