import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-title',
  templateUrl: './order-title.component.html',
  styleUrls: ['./order-title.component.css']
})
export class OrderTitleComponent implements OnInit {

  @Input()
  order;

  @Output()
  showDetail = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }


  doDisplay() {
    // tslint:disable-next-line: triple-equals
        if (this.order.showDetail == '隱藏明細') {
          this.order.showDetail = '顯示明細';
        } else {
          this.order.showDetail = '隱藏明細';
        }
        this.showDetail.emit(this.order);
      }
}
