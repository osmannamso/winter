import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CreateTripComponent} from '../../../shared/modals/create-trip/create-trip.component';
import {TripService} from '../../../services/trip.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private tripService: TripService
  ) { }

  ngOnInit(): void {
    this.tripService.getTripRequests().subscribe((data) => {
      console.log(data);
    });
  }

  openCreateTrip(): void {
    this.dialog.open(CreateTripComponent);
  }
}
