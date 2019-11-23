import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreaDataService {

  areaData;

  constructor(private http: HttpClient) { }

  // getData() {
  //   return this.http.get('http://localhost:4200/api/area.json');
  // }

  getData() {
    this.areaData =
    [
      {
        "id": "area1",
        "name": "搖滾區5800",
        "color": "#007f00",
        "unit_price": 5800,
        "sections": [
          {
            "name": "搖滾A區5800",
            "qty":0,
            "status":"剩少量"},
          {
            "name": "搖滾B區5800",
            "qty":0,
            "status":"熱賣中"}]

    },
      {
        "id": "area2",
        "name": "搖滾區5200",
        "color": "#4cbf8d",
        "unit_price": 5200,
        "sections": [
          {
            "name":"搖滾C區5200",
            "qty":0,
            "status":"熱賣中"}]

    },
      {
        "id": "area3",
        "name": "座位區4800",
        "color": "#f9581d",
        "unit_price": 4800,
        "sections": [
          {
            "name":"紅2B區4800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"紅2C區4800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"紅2D區4800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"紫2B區4800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"紫2C區4800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"紫2D區4800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃2B區4800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃2C區4800",
            "qty":0,
            "status":"剩少量"},
          {
            "name":"黃2D區4800",
            "qty":0,
            "status":"剩少量"}
            ]
      },
      {
        "id": "area4",
        "name": "座位區4500",
        "color": "#0072e5",
        "unit_price": 4500,
        "sections": [
          {
            "name":"紅2E區4500",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"紫2E區4500",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃2A區4500",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃2E區4500",
            "qty":0,
            "status":"熱賣中"}
            ]
      },
      {
        "id": "area5",
        "name": "座位區3800",
        "color": "#f7a820",
        "unit_price": 3800,
        "sections": [
          {
            "name":"黃3C區3800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃3D區3800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃3E區3800",
            "qty":0,
            "status":"剩少量"},
          {
            "name":"黃3F區3800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃3G區3800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃3H區3800",
            "qty":0,
            "status":"熱賣中"}
            ]
      },
      {
        "id": "area6",
        "name": "座位區2800",
        "color": "#f7a820",
        "unit_price": 2800,
        "sections":  [
          {
            "name":"黃3A區2800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃3B區2800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃3C區2800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃3D區2800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃3E區2800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃3F區2800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃3G區2800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃3H區2800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃3I區2800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃3J區2800",
            "qty":0,
            "status":"熱賣中"}
            ]
      },
      {
        "id": "area7",
        "name": "座位區1800",
        "color": "#f7a820",
        "unit_price": 1800,
        "sections":  [
          {
            "name":"黃3B區1800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃3C區1800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃3D區1800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃3E區1800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃3F區1800",
            "qty":0,
            "status":"剩少量"},
          {
            "name":"黃3G區1800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃3H區1800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃3I區1800",
            "qty":0,
            "status":"熱賣中"}
            ]
      },
      {
        "id": "area8",
        "name": "座位區800",
        "color": "#ffffaa",
        "unit_price": 800,
        "sections":  [
          {
            "name":"黃3C區800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃3D區800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃3E區800",
            "qty":0,
            "status":"熱賣中"},
          {
            "name":"黃3F區800",
            "qty":0,
            "status":"剩少量"},
          {
            "name":"黃3G區800",
            "qty":0,
            "status":"剩少量"},
          {
            "name":"黃3H區800",
            "qty":0,
            "status":"剩少量"}
            ]
      }
    ];
    return this.areaData;
  }
}
