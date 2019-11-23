import { Component, OnInit } from '@angular/core';
import { OrderDataService } from 'src/app/order-data.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orderData;

  constructor(private orderDatasvc: OrderDataService) { }

  ngOnInit() {
    // this.orderDatasvc.getData().subscribe(result => {
    //   this.orderData = result ;
    // });

    this.orderData = this.orderDatasvc.getData();
  }

  doModify($event: any) {

    // map去mapping一個新的陣列 => *ngFor會重跑
    // 某物件下的屬性改變，建立一個全新物件 => 執行ngOnChanges(Angular偵測到改變)
    this.orderData = this.orderData.map((order) => {
      // tslint:disable-next-line: triple-equals
        if (order.id == $event.id ) {
          return Object.assign({}, order, $event);
        }
        return order;
      });
      console.log(this.orderData);
  }

  doDelete(item) {
    this.orderData = this.orderData.map((v) => {
      if (v.id === item.id) {
        v.area = v.area.filter((a) => {
          return a.name !== item.name;
        });
      }
      return v;
    });
  }

}
