import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {

  page: number = 1
  limit: number = 10
  search: string = ''
  category: string = 'all' 
  dataProducts: any = []

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http.get<any>(`http://localhost:3222/product?page=${this.page}&limit=${this.limit}&search=${this.search}&category=${this.category}`, {
      observe: 'response'
    })
    .subscribe(
      response => {
        // console.log(response.body.items)
        this.dataProducts = response.body.items
      }
    )
  }

}
