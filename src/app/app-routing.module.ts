import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAreaComponent } from './page-area/page-area.component';
import { PageOrderComponent } from './page-order/page-order.component';
import { PageConcertComponent } from './page-concert/page-concert.component';

const routes: Routes = [
  { path: '', redirectTo: '/concert', pathMatch: 'full' },
  { path: 'concert', component: PageConcertComponent },
  { path: 'area/:id', component: PageAreaComponent },
  { path: 'order', component: PageOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
