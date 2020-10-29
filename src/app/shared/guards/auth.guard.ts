import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../../services/user.service';
import {LocalStorageService} from '../../services/local-storage.service';
import {TOKEN_KEY} from '../../values/local-storage-keys';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private localStorage: LocalStorageService
  ) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.localStorage.getItem(TOKEN_KEY)) {
      this.userService.logOut();
      return false;
    }
    return true;
  }
}
