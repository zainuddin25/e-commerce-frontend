import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users-tabel',
  templateUrl: './users-tabel.component.html',
  styleUrls: ['./users-tabel.component.css']
})
export class UsersTabelComponent {

  limit: number = 6
  page: number = 1
  search: string = ''
  role: string = 'all'
  dataUsers: any = []
  totalPage: number = 0
  totalUsers: number = 0

  selectedValue: string = '';
  selectedCar: string = '';

  constructor(private http: HttpClient) {}


  ngOnInit() {
    this.getDataUsers(this.role, this.search)
  }

  getDataUsers(role: string, search: string) {
    const token = localStorage.getItem('accessToken')

    this.http.get<any>(`http://localhost:3222/users?limit=${this.limit}&page=${this.page}&role=${role}&search=${search}`, {
      headers: {
        'Authorization' : `Bearer ${token}`
      }
    })
    .subscribe(
      response => {
        this.dataUsers = response.items
        this.totalUsers = response.meta.totalItems
        this.totalPage = Math.ceil(this.totalUsers / this.limit)
      }
    )
  }

  changeValueOption(event : any) {
    this.role = event.target.value
    this.getDataUsers(this.role, this.search)
  }

  onChangeSearch(event: any) {
    this.search = event.target.value
    this.getDataUsers(this.role, this.search)
  }

  nextPage() {
    const totalPageNext = this.totalUsers / this.limit
    if (this.page == Math.ceil(this.totalPage)) {
      this.page = this.totalPage
      this.getDataUsers(this.role, this.search)
    } else {
      this.page += 1 
      this.getDataUsers(this.role, this.search)
    }
  }

  backPage() {
    if (this.page == 1) {
      this.page = 1
      this.getDataUsers(this.role, this.search)
    } else {
      this.page = 1
      this.getDataUsers(this.role, this.search)
    }
  }
}
