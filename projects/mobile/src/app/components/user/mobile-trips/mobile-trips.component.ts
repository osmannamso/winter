import { Component, OnInit } from '@angular/core';
import {MobilePagesService} from '../../../services/mobile-pages.service';
import {MOBILE_PAGES} from '../../../values/variables';
import {TripRequestPagination} from '../../../../../../../src/app/shared/interfaces/trip-request-pagination';
import {
  TRIP_RU_OPTIONS,
  TRIP_RU_RESIDENCE_CLASS,
  TRIP_RU_RESIDENCES,
  TRIP_RU_STATUSES, TRIP_RU_TICKET_CLASSES,
  TRIP_RU_TRANSFERS,
  TRIP_RU_VEHICLE_CLASS,
  TRIP_STATUSES
} from '../../../../../../../src/app/values/variables';
import {TripService} from '../../../../../../../src/app/services/trip.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-mobile-trips',
  templateUrl: './mobile-trips.component.html',
  styleUrls: ['./mobile-trips.component.scss']
})
export class MobileTripsComponent implements OnInit {
  tripPagination: TripRequestPagination;

  tripRuStatuses = TRIP_RU_STATUSES;
  tripStatuses = TRIP_STATUSES;
  tripRuTransfers = TRIP_RU_TRANSFERS;
  tripRuResidences = TRIP_RU_RESIDENCES;
  tripRuVehicleClasses = TRIP_RU_VEHICLE_CLASS;
  tripRuResidenceClass = TRIP_RU_RESIDENCE_CLASS;
  tripRuOptions = TRIP_RU_OPTIONS;
  tripRuTicketClasses = TRIP_RU_TICKET_CLASSES;

  constructor(
    private mobilePagesService: MobilePagesService,
    private tripService: TripService
  ) { }

  ngOnInit(): void {
    this.mobilePagesService.setMobilePage(MOBILE_PAGES.TRIPS);
    this.getTrips();
  }

  getTrips(): void {
    this.tripService.getTripRequests()
      .pipe(take(1))
      .subscribe((data) => {
        this.tripPagination = data;
      });
  }

  expandTrip(index: number): void {
    this.tripPagination.results[index].expanded = !this.tripPagination.results[index].expanded;
  }
}
