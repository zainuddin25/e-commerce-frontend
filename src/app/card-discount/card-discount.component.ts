import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-discount',
  templateUrl: './card-discount.component.html',
  styleUrls: ['./card-discount.component.css']
})
export class CardDiscountComponent {
  dataProductDiscount: any = []

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDiscountProduct()
  }

  getDiscountProduct() {
    this.http.get<any>('http://localhost:3222/discount', {
      observe: 'response'
    })
    .subscribe(
      response => {
        this.dataProductDiscount = response.body.data
        console.log(this.dataProductDiscount)
      }
    )
  }
}
