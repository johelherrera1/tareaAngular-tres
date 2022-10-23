import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { TeamComponent } from './team/team.component';
import { TarjetaProgramadorComponent } from './tarjeta-programador/tarjeta-programador.component';
import { TarjetaDinamica2Component } from './tarjeta-dinamica2/tarjeta-dinamica2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    InfoComponent,
    TeamComponent,
    TarjetaProgramadorComponent,
    TarjetaDinamica2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
