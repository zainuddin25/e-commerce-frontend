import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-tabel',
  templateUrl: './product-tabel.component.html',
  styleUrls: ['./product-tabel.component.css']
})
export class ProductTabelComponent {

  page: number = 1
  limit: number = 6
  search: string = ''
  category: string = 'all'
  totalPage: number = 0
  dataProducts: any = []
  dataCategorys: any = []

  constructor(private http: HttpClient) {}


  ngOnInit() {
    this.getDataProducts(this.search, this.category)
    this.getCategoryList()
  }

  getDataProducts(search: string, category: string) {
    const token = localStorage.getItem('accessToken')
    
    this.http.get<any>(`http://localhost:3222/product?page=${this.page}&limit=${this.limit}&search=${search}&category=${category}`, {
      headers: ({
        'Authorization' : `Bearer ${token}`
      }),
      observe: 'response'
    })
    .subscribe(
      response => {
        this.dataProducts = response.body.items
        const totalProduct = response.body.meta.totalItems
        const page = Math.ceil(totalProduct / this.limit)
        this.totalPage = page
      }
    )
  }

  getCategoryList() {
    this.http.get<any>('http://localhost:3222/category', {
      observe: 'response'
    })
    .subscribe(
      response => {
        this.dataCategorys = response.body.data
      }
    )
  }

  handleSearch(event : any) {
    this.search = event.target.value
    this.getDataProducts(this.search, this.category)
  }

  onChangeValue(event: any) {
    this.category = event.target.value
    this.getDataProducts(this.search, this.category)
  }
  
  nextPage() {
    if (this.page == Math.ceil(this.totalPage)) {
      this.page = this.totalPage
      this.getDataProducts(this.search, this.category)
    } else {
      this.page += 1
      this.getDataProducts(this.search, this.category)
    }
    console.log('clicked next')
  }

  backPage() {
    if (this.page == 1) {
      this.page = 1
      this.getDataProducts(this.search, this.category)
    } else {
      this.page -= 1
      this.getDataProducts(this.search, this.category)
    }
  }

}
