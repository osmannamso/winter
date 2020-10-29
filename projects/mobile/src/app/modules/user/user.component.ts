import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MobilePage} from '../../shared/interfaces/mobile-page';
import {MobilePagesService} from '../../services/mobile-pages.service';
import {ReplaySubject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {MOBILE_PAGES} from '../../values/variables';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  isActiveAdditionalMenu = false;
  mobilePage: MobilePage;
  defaultMobilePage = MOBILE_PAGES.DEFAULT;

  destroyed$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  @ViewChild('additionalMenu') additionalMenu: ElementRef;

  constructor(
    private mobilePagesService: MobilePagesService
  ) { }

  ngOnInit(): void {
    this.mobilePagesService.currentMobilePage
      .pipe(takeUntil(this.destroyed$))
      .subscribe((mobilePage) => {
        this.mobilePage = mobilePage;
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    if (!this.additionalMenu.nativeElement.contains(targetElement)) {
      this.isActiveAdditionalMenu = false;
    }
  }

  toggleAdditionalMenu(): void {
    this.isActiveAdditionalMenu = !this.isActiveAdditionalMenu;
  }
}
