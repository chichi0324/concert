import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit , OnChanges{

  @Input()
  order;

  isEdit = false;

  sum = 0;
  fee = 60;

  @Output()
  qtyChanged = new EventEmitter<any>();

  @Output()
  delete = new EventEmitter<any>();

  orig_order ;

  constructor() { }

  ngOnInit() {

  }

  doCalculate() {
    this.sum = 0;
    this.order.area.forEach((data) => {
      this.sum = this.sum + (data.unit_pric * data.qty);
      });
  }


  doCancel() {
    console.log('doCancel');
    this.order = Object.assign({} , this.orig_order);
    this.isEdit = false;
  }

  doEdit() {
    console.log('doEdit');
    this.qtyChanged.emit(this.order);
    this.isEdit = false;
  }

  deleteTicketItem() {
    const deleteItem = {
      id : this.order.id,
      area : this.order.area
    };
    this.delete.emit(deleteItem);
  }

  ngOnChanges(changes) {
    if (changes.order) {
      console.log('ngOnChanges');
      this.orig_order = changes.order.currentValue;
      this.order = Object.assign({} , changes.order.currentValue);
    }
  }

}
