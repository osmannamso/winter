import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CreateTripComponent} from '../../../shared/modals/create-trip/create-trip.component';
import {TripService} from '../../../services/trip.service';
import {take} from 'rxjs/operators';
import {TripRequestPagination} from '../../../shared/interfaces/trip-request-pagination';
import {
  TRIP_RU_OPTIONS,
  TRIP_RU_RESIDENCE_CLASS, TRIP_RU_RESIDENCES,
  TRIP_RU_STATUSES,
  TRIP_RU_TICKET_CLASSES, TRIP_RU_TRANSFERS,
  TRIP_RU_VEHICLE_CLASS,
  TRIP_STATUSES
} from '../../../values/variables';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {
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
    private dialog: MatDialog,
    private tripService: TripService
  ) { }

  ngOnInit(): void {
    this.getTrips();
  }

  openCreateTrip(): void {
    this.dialog.open(CreateTripComponent).afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.getTrips();
      });
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
