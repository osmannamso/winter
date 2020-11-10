import {Component, Inject, OnInit} from '@angular/core';
import {MobilePagesService} from '../../../services/mobile-pages.service';
import {MOBILE_PAGES, TRIP_CREATE_SUCCESS} from '../../../values/variables';
import {
  INPUT_TYPE_DATE, INPUT_TYPE_TEXT,
  TICKET_CLASSES,
  TRIP_OPTIONS,
  TRIP_RESIDENCE_CLASSES,
  TRIP_RESIDENCES,
  TRIP_TRANSFERS, TRIP_VEHICLE_CLASS
} from '../../../../../../../src/app/values/variables';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {TripService} from '../../../../../../../src/app/services/trip.service';
import {LocalStorageService} from '../../../../../../../src/app/services/local-storage.service';
import {EmployeeService} from '../../../../../../../src/app/services/employee.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, FormGroup} from '@angular/forms';
import {Employee} from '../../../../../../../src/app/shared/interfaces/employee';
import {EmployeePagination} from '../../../../../../../src/app/shared/interfaces/employee-pagination';
import {take} from 'rxjs/operators';
import {COMPANY_KEY} from '../../../../../../../src/app/values/local-storage-keys';

@Component({
  selector: 'app-mobile-create-trip',
  templateUrl: './mobile-create-trip.component.html',
  styleUrls: ['./mobile-create-trip.component.scss']
})
export class MobileCreateTripComponent implements OnInit {
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
    private mobilePagesService: MobilePagesService,
    private router: Router,
    private tripService: TripService,
    private localStorage: LocalStorageService,
    private dialog: MatDialog,
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.mobilePagesService.setMobilePage(MOBILE_PAGES.CREATE_TRIP_FIRST);
    this.tripRequestForm = this.tripService.getTripForm();
    this.getEmployees();
  }

  prevStep(): void {
    this.step -= 1;
    this.changeMobilePage();
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
          this.router.navigate(['/user/trips']).then(() => {
            this.snackBar.open(TRIP_CREATE_SUCCESS, '', {
              duration: 2000,
            });
          });
        }, () => {
          this.tripRequestForm.addControl('trip_date_to', new FormControl(''));
        });
    } else {
      this.step += 1;
    }
    this.changeMobilePage();
  }

  changeMobilePage(): void {
    if (this.step == 1) {
      this.mobilePagesService.setMobilePage(MOBILE_PAGES.CREATE_TRIP_FIRST);
    } else if (this.step == 2) {
      this.mobilePagesService.setMobilePage(MOBILE_PAGES.CREATE_TRIP_SECOND);
    } else {
      this.mobilePagesService.setMobilePage(MOBILE_PAGES.CREATE_TRIP_THIRD);
    }
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
