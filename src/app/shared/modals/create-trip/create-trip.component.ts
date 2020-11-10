import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {
  INPUT_TYPE_DATE, INPUT_TYPE_TEXT,
  TICKET_CLASSES,
  TRIP_OPTIONS,
  TRIP_RESIDENCE_CLASSES,
  TRIP_RESIDENCES,
  TRIP_TRANSFERS,
  TRIP_VEHICLE_CLASS
} from '../../../values/variables';
import {FormControl, FormGroup} from '@angular/forms';
import {TripService} from '../../../services/trip.service';
import {take} from 'rxjs/operators';
import {CreateUserComponent} from '../../../components/user/create-user/create-user.component';
import {COMPANY_KEY} from '../../../values/local-storage-keys';
import {LocalStorageService} from '../../../services/local-storage.service';
import {EmployeeService} from '../../../services/employee.service';
import {EmployeePagination} from '../../interfaces/employee-pagination';
import {Employee} from '../../interfaces/employee';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TRIP_CREATE_SUCCESS} from '../../../../../projects/mobile/src/app/values/variables';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss']
})
export class CreateTripComponent implements OnInit {
  twoWay = false;
  step: 1 | 2 | 3 = 1;
  tripRequestForm: FormGroup;
  selectedEmployees: Array<Employee> = [];
  employeePagination: EmployeePagination;

  tripOptions = TRIP_OPTIONS;
  ticketClasses = TICKET_CLASSES;
  tripResidences = TRIP_RESIDENCES;
  tripResidenceClasses = TRIP_RESIDENCE_CLASSES;
  tripTransfers = TRIP_TRANSFERS;
  tripVehicleClasses = TRIP_VEHICLE_CLASS;

  constructor(
    private dialogRef: MatDialogRef<CreateTripComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private tripService: TripService,
    private localStorage: LocalStorageService,
    private dialog: MatDialog,
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.tripRequestForm = this.tripService.getTripForm();
    this.getEmployees();
  }

  close(): void {
    this.dialogRef.close();
  }

  prevStep(): void {
    this.step -= 1;
  }

  nextStep(): void {
    if (this.step == 3) {
      if (!this.tripRequestForm.get('trip_date_to') || !this.tripRequestForm.get('trip_date_to').value) {
        this.tripRequestForm.removeControl('trip_date_to');
      }
      if (!this.tripRequestForm.get('hour_amount').value) {
        this.tripRequestForm.get('hour_amount').setValue(0);
      }
      const employeeIds = this.selectedEmployees.map((employee) => employee.id);
      this.tripRequestForm.get('employees').setValue(employeeIds);
      this.tripService.createTripRequest(this.tripRequestForm)
        .pipe(take(1))
        .subscribe(() => {
          this.close();
          this.snackBar.open(TRIP_CREATE_SUCCESS, '', {
            duration: 2000,
          });
        }, () => {
          this.tripRequestForm.addControl('trip_date_to', new FormControl(''));
        });
    } else {
      this.step += 1;
    }
  }

  openCreateEmployee(): void {
    this.dialog.open(CreateUserComponent).afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.getEmployees();
      });
  }

  getEmployees(): void {
    const companyId = this.localStorage.getItem(COMPANY_KEY).id;
    this.employeeService.getEmployees(companyId)
      .pipe(take(1))
      .subscribe((data) => {
        this.employeePagination = data;
      });
  }

  selectEmployee($event: any) {
    if (this.selectedEmployees.indexOf($event.target.value) == -1) {
      this.selectedEmployees.push(this.employeePagination.results[$event.target.value]);
    }
  }

  removeEmployee(i: number): void {
    this.selectedEmployees.splice(i, 1);
  }

  changeTypeDate(event: any): void {
    event.target.type = INPUT_TYPE_DATE;
  }

  changeTypeText(event: any) {
    if (!event.target.value) {
      event.target.type = INPUT_TYPE_TEXT;
    }
  }
}
