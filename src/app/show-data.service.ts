import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowDataService {

  showData;

  constructor(private http: HttpClient) { }

  // getData() {
  //   return this.http.get('http://localhost:4200/api/shows.json');
  // }

  getData() {
    this.showData = [
      {
            "id": "show1",
            "name": "Mr.Children 巡迴-台灣場",
            "location": "台北小巨蛋",
            "date": "2019/04/19(五)~2019/04/20(六)",
            "pic": "assets/images/mrchildren.jpg",
            "sessions": [
              "2019/04/19(五)18:00 Mr.Children against all gravity Tour ",
              "2019/04/20(六)16:30 Mr.Children against all gravity Tour ",
              "2019/04/21(日)16:30 Mr.Children against all gravity Tour "
            ]

      },
          {
            "id": "show2",
            "name": "Spitz 30週年-台北站",
            "location": "台北小巨蛋",
            "date": "2019/05/18(六)~2019/05/19(日)",
            "pic": "assets/images/spitz.jpg",
            "sessions": [
              "2019/05/18(六)19:00 Spitz 30th anniversary tour",
              "2019/05/19(日)18:00 Spitz 30th anniversary tour"
            ]
      },
          {
            "id": "show3",
            "name": "安室復出演唱會",
            "location": "台北小巨蛋",
            "date": "2019/07/20(六)~2019/07/22(ㄧ)",
            "pic": "assets/images/namie.jpg",
            "sessions": [
              "2019/07/20(六)18:00 Namie amuro back tour 2019",
              "2019/07/21(日)19:00 Namie amuro back tour 2019",
              "2019/07/22(ㄧ)19:00 Namie amuro back tour 2019"
            ]},
          {
            "id": "show4",
            "name": "GReeeeN 奇蹟-高雄站",
            "location": "高雄巨蛋",
            "date": "2019/08/03(六)~2019/08/04(日)",
            "pic": "assets/images/greeeen.jpg",
            "sessions": [
              "2019/08/03(六)18:00 Greeeen tour 2019",
              "2019/08/04(日)19:00 Greeeen tour 2019"
            ]},
          {
            "id": "show5",
            "name": "秦基博 向日葵的約定",
            "location": "台大體育館",
            "date": "2019/09/07(六)",
            "pic": "assets/images/hata.jpg",
            "sessions": [
              "2019/09/07(六)17:00 Hata Motohiro concert tour"
            ]},
          {
            "id": "show6",
            "name": "One Ok Rock 亞洲巡迴",
            "location": "南港展覽館",
            "date": "2019/09/28(六)~2019/09/29(日)",
            "pic": "assets/images/oor.jpg",
            "sessions":  [
              "2019/09/28(六)17:00 On Ok Rock Asia 2019 in Taiwan",
              "2019/09/29(日)18:30 On Ok Rock Asia 2019 in Taiwan"
            ]}
    ];
    return this.showData;
  }

}
