import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string = "Super"
  role:string = "Super Admin"
  constructor() { }

  ngOnInit(): void {
  }

}
