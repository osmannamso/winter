import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TICKET_CLASSES, TRIP_OPTIONS} from '../../../values/variables';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss']
})
export class CreateTripComponent implements OnInit {
  twoWay = false;
  tripOption: TRIP_OPTIONS;
  ticketClass: TICKET_CLASSES;

  tripOptions = TRIP_OPTIONS;
  ticketClasses = TICKET_CLASSES;

  constructor(
    private dialogRef: MatDialogRef<CreateTripComponent>,
    @Inject(MAT_DIALOG_DATA) private data
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }
}
