import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '../components/layout/layout.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HeroesComponent } from '../components/heroes/heroes.component';
import { HeroDetailComponent } from '../components/hero-detail/hero-detail.component';
import { MessagesComponent } from '../components/messages/messages.component';
import { HeroSearchComponent } from '../components/hero-search/hero-search.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/app/services/in-memory-data.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    RouterModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    LayoutComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
