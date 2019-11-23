import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowDataService } from '../show-data.service';
import { AreaDataService } from '../area-data.service';


@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  show;  // 演唱會表演
  areaData; // 小巨蛋各區資料

  agreeChecked; // 是否勾選"我同意"
  qtyAll; // 所有選擇張數總和
  showButton;  // 是否disable"下一步"按鈕

  selectSession; // 選擇第幾場
  choiceArea; // 點選完下一步，產生訂單資料用

  constructor(
    private route: ActivatedRoute,
    private showDatasvc: ShowDataService,
    private areaDatasvc: AreaDataService) { }

  ngOnInit() {
    this.selectSession = 0;
    this.qtyAll = 0;
    this.showButton = false;
    this.agreeChecked = false;
    this.getShowData();
    this.getAreaData();
  }

  doAdd(section: any) {
    if (section.qty < 4) {
    section.qty++ ;
    this.calculatQty();
    }
  }

  doDecrease(section: any) {
   if (section.qty > 0) {
    section.qty-- ;
    this.calculatQty();
   }
  }

  getShowData() {
    const showId = this.route.snapshot.paramMap.get('id');

    // this.showDatasvc.getData().subscribe(result => {
    //   this.showData = result ;
    // });

    this.show = this.showDatasvc.getData().filter(s => {
      return s.id === showId;
    })[0];
  }

  getAreaData() {

    // this.showDatasvc.getData().subscribe(result => {
    //   this.showData = result ;
    // });

    this.areaData = this.areaDatasvc.getData();
  }

  calculatQty() {
    this.qtyAll = 0;
    this.areaData.forEach((data) => {
      data.sections.forEach((s) => {
        this.qtyAll = this.qtyAll + s.qty;
        });
      });

    if (this.agreeChecked && this.qtyAll > 0) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
  }

  changedCkeckBox(check) {
    this.agreeChecked = check;
    if (this.agreeChecked && this.qtyAll > 0) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }

  getSelectedShow($event) {
    this.selectSession = $event.target.value;
  }

  getTicket() {

    const areas = [];
    this.areaData.forEach((data) => {
      data.sections.forEach((s) => {
        if (s.qty > 0 ) {
          s['unit_price'] = data.unit_price;
          areas.push(s);
        }
        });
      });

    this.choiceArea = {
      showId : this.show.id,
      name : this.show.name,
      show : this.show.sessions[this.selectSession],
      area : areas
    };
    console.log(this.choiceArea);
  }
}
