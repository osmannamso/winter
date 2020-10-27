import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  isActiveAdditionalMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleAdditionalMenu(): void {
    this.isActiveAdditionalMenu = !this.isActiveAdditionalMenu;
  }
}
