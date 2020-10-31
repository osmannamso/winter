import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {
  TICKET_CLASSES,
  TRIP_OPTIONS,
  TRIP_RESIDENCE_CLASSES,
  TRIP_RESIDENCES,
  TRIP_TRANSFERS,
  TRIP_VEHICLE_CLASS
} from '../../../values/variables';
import {FormGroup} from '@angular/forms';
import {TripService} from '../../../services/trip.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss']
})
export class CreateTripComponent implements OnInit {
  twoWay = false;
  step: 1 | 2 | 3 = 1;
  tripRequestForm: FormGroup;

  tripOptions = TRIP_OPTIONS;
  ticketClasses = TICKET_CLASSES;
  tripResidences = TRIP_RESIDENCES;
  tripResidenceClasses = TRIP_RESIDENCE_CLASSES;
  tripTransfers = TRIP_TRANSFERS;
  tripVehicleClasses = TRIP_VEHICLE_CLASS;

  constructor(
    private dialogRef: MatDialogRef<CreateTripComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private tripService: TripService
  ) { }

  ngOnInit(): void {
    this.tripRequestForm = this.tripService.getTripForm();
  }

  close(): void {
    this.dialogRef.close();
  }

  prevStep(): void {
    this.step -= 1;
  }

  nextStep(): void {
    if (this.step == 3) {
      this.tripService.createTripRequest(this.tripRequestForm)
        .pipe(take(1))
        .subscribe((data) => {
          console.log(data);
        });
    } else {
      this.step += 1;
    }
  }
}
