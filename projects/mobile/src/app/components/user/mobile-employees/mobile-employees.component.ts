import { Component, OnInit } from '@angular/core';
import {MobilePagesService} from '../../../services/mobile-pages.service';
import {MOBILE_PAGES} from '../../../values/variables';
import {EmployeePagination} from '../../../../../../../src/app/shared/interfaces/employee-pagination';
import {
  EMPLOYEE_NO_AVATAR,
  EMPLOYEE_RU_DOCUMENT_TYPES,
  EMPLOYEE_RU_GENDERS,
  EMPLOYEE_RU_POSITIONS
} from '../../../../../../../src/app/values/variables';
import {MatDialog} from '@angular/material/dialog';
import {EmployeeService} from '../../../../../../../src/app/services/employee.service';
import {LocalStorageService} from '../../../../../../../src/app/services/local-storage.service';
import {take} from 'rxjs/operators';
import {COMPANY_KEY} from '../../../../../../../src/app/values/local-storage-keys';

@Component({
  selector: 'app-mobile-employees',
  templateUrl: './mobile-employees.component.html',
  styleUrls: ['./mobile-employees.component.scss']
})
export class MobileEmployeesComponent implements OnInit {
  employeePagination: EmployeePagination;

  noAvatar = EMPLOYEE_NO_AVATAR;
  employeeRuPositions = EMPLOYEE_RU_POSITIONS;
  employeeRuDocumentTypes = EMPLOYEE_RU_DOCUMENT_TYPES;
  employeeRuGenders = EMPLOYEE_RU_GENDERS;

  constructor(
    private dialog: MatDialog,
    private employeeService: EmployeeService,
    private localStorage: LocalStorageService,
    private mobilePagesService: MobilePagesService
  ) { }

  ngOnInit(): void {
    this.getEmployees();
    this.mobilePagesService.setMobilePage(MOBILE_PAGES.EMPLOYEES);
  }

  expandEmployee(index: number): void {
    this.employeePagination.results[index].expanded = !this.employeePagination.results[index].expanded;
  }

  getEmployees(): void {
    const companyId = this.localStorage.getItem(COMPANY_KEY).id;
    this.employeeService.getEmployees(companyId)
      .pipe(take(1))
      .subscribe((data) => {
        this.employeePagination = data;
      });
  }
}
