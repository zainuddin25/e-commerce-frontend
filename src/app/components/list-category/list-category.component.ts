import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent {

  dataCategory: any = []

  constructor(private httpClient : HttpClient) {}

  ngOnInit() {
    this.getCategory()
  }

  getCategory() {
    this.httpClient.get<any>(`http://localhost:3222/category`, {
      observe: 'response'
    })
    .subscribe(
      response => {
        this.dataCategory = response.body.data
      }
    )
  }

}
