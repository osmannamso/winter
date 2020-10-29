import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  isActiveNotifications = false;
  isActiveWallet = false;
  isActiveSettings = false;

  @ViewChild('notificationDropdown') notificationDropdown: ElementRef;
  @ViewChild('walletDropdown') walletDropdown: ElementRef;
  @ViewChild('settingsDropdown') settingsDropdown: ElementRef;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

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

    if (!this.settingsDropdown.nativeElement.contains(event.target)) {
      this.isActiveSettings = false;
    }
  }

  toggleNotifications(): void {
    this.isActiveNotifications = !this.isActiveNotifications;
  }

  toggleWallet(): void {
    this.isActiveWallet = !this.isActiveWallet;
  }

  toggleSettings(): void {
    this.isActiveSettings = !this.isActiveSettings;
  }

  logOut(): void {
    this.router.navigate(['/']).then(() => {
      this.userService.logOut();
    });
  }
}
