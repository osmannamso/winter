import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  isActiveNotifications = false;
  isActiveWallet = false;

  @ViewChild('notificationDropdown') notificationDropdown: ElementRef;
  @ViewChild('walletDropdown') walletDropdown: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  onGlobalClick(event): void {
    if (!this.notificationDropdown.nativeElement.contains(event.target)) {
      this.isActiveNotifications = false;
    }

    if (!this.walletDropdown.nativeElement.contains(event.target)) {
      this.isActiveWallet = false;
    }
  }

  toggleNotifications(): void {
    this.isActiveNotifications = !this.isActiveNotifications;
  }

  toggleWallet(): void {
    this.isActiveWallet = !this.isActiveWallet;
  }
}
