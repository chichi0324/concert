import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ShowsComponent } from './shows/shows.component';
import { PageConcertComponent } from './page-concert/page-concert.component';
import { PageAreaComponent } from './page-area/page-area.component';
import { PageOrderComponent } from './page-order/page-order.component';
import { AreaComponent } from './area/area.component';
import { HeadComponent } from './head/head.component';
import { ShowDataService } from './show-data.service';
import { HttpClientModule } from '@angular/common/http';
import { AreaDataService } from './area-data.service';
import { MemberOrderModule } from './member-order/member-order.module';
import { OrderDataService } from './order-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    MenuComponent,
    FooterComponent,
    ShowsComponent,
    PageConcertComponent,
    PageAreaComponent,
    PageOrderComponent,
    AreaComponent,
    HeadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MemberOrderModule,
  ],
  providers: [
    ShowDataService,
    AreaDataService,
    OrderDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
