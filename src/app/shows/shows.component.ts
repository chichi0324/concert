import { Component, OnInit } from '@angular/core';
import { ShowDataService } from '../show-data.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  showData;

  constructor(private showDatasvc: ShowDataService) { }

  ngOnInit() {
    // this.showDatasvc.getData().subscribe(result => {
    //   this.showData = result ;
    // });

    this.showData = this.showDatasvc.getData();
  }

}
