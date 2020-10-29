import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';
import {MobilePage} from '../shared/interfaces/mobile-page';

@Injectable({
  providedIn: 'root'
})
export class MobilePagesService {
  currentMobilePage: ReplaySubject<MobilePage> = new ReplaySubject<MobilePage>(1);

  constructor() {}

  setMobilePage(mobilePage: MobilePage): void {
    setTimeout(() => {
      this.currentMobilePage.next(mobilePage);
    });
  }
}
