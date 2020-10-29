import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  setItem(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItem(key: string): void {
    window.localStorage.removeItem(key);
  }

  async asyncGetItem(key: string): Promise<any> {
    return new Promise<any>((resolve) => {
      resolve(this.getItem(key));
    });
  }

  async asyncSetItem(key: string, value: any): Promise<void> {
    return new Promise<void>((resolved) => {
      resolved(this.setItem(key, value));
    });
  }
}
