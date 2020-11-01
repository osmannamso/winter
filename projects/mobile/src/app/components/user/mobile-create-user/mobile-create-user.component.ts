import {Component, OnInit} from '@angular/core';
import {MobilePagesService} from '../../../services/mobile-pages.service';
import {EMPLOYEE_CREATE_SUCCESS, MOBILE_PAGES} from '../../../values/variables';
import {take} from 'rxjs/operators';
import {EmployeeService} from '../../../../../../../src/app/services/employee.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormGroup} from '@angular/forms';
import {EMPLOYEE_DOCUMENT_TYPES, EMPLOYEE_GENDERS, EMPLOYEE_POSITIONS} from '../../../../../../../src/app/values/variables';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mobile-create-user',
  templateUrl: './mobile-create-user.component.html',
  styleUrls: ['./mobile-create-user.component.scss']
})
export class MobileCreateUserComponent implements OnInit {
  employeeForm: FormGroup;
  file: File;

  employeeGenders = EMPLOYEE_GENDERS;
  employeePositions = EMPLOYEE_POSITIONS;
  employeeDocumentTypes = EMPLOYEE_DOCUMENT_TYPES;

  constructor(
    private mobilePagesService: MobilePagesService,
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mobilePagesService.setMobilePage(MOBILE_PAGES.CREATE_USER);
    this.employeeForm = this.employeeService.getEmployeeForm();
  }

  handleFileInput(event: any): void {
    this.file = event.target.files.item(0);
  }

  createEmployee(): void {
    const formData: FormData = new FormData();
    const employeeData = this.employeeForm.getRawValue();

    if (this.file) {
      formData.append('image', this.file, this.file.name);
    }
    Object.keys(employeeData).forEach((k: string) => {
      formData.append(k, employeeData[k]);
    });

    this.employeeService.createEmployee(formData)
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate(['/user/employees']).then(() => {
          this.snackBar.open(EMPLOYEE_CREATE_SUCCESS, '', {
            duration: 2000,
          });
        });
      });
  }
}
