import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderTitleComponent } from './order-title/order-title.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderDataService } from '../order-data.service';

@NgModule({
  declarations: [OrderListComponent, OrderTitleComponent, OrderDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    OrderDataService],
  exports: [ OrderListComponent ]
})
export class MemberOrderModule { }
