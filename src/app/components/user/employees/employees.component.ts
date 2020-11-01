import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CreateUserComponent} from '../create-user/create-user.component';
import {EmployeeService} from '../../../services/employee.service';
import {take} from 'rxjs/operators';
import {LocalStorageService} from '../../../services/local-storage.service';
import {COMPANY_KEY} from '../../../values/local-storage-keys';
import {EmployeePagination} from '../../../shared/interfaces/employee-pagination';
import {EMPLOYEE_NO_AVATAR, EMPLOYEE_RU_DOCUMENT_TYPES, EMPLOYEE_RU_GENDERS, EMPLOYEE_RU_POSITIONS} from '../../../values/variables';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employeePagination: EmployeePagination;

  noAvatar = EMPLOYEE_NO_AVATAR;
  employeeRuPositions = EMPLOYEE_RU_POSITIONS;
  employeeRuDocumentTypes = EMPLOYEE_RU_DOCUMENT_TYPES;
  employeeRuGenders = EMPLOYEE_RU_GENDERS;

  constructor(
    private dialog: MatDialog,
    private employeeService: EmployeeService,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  openCreateEmployee(): void {
    this.dialog.open(CreateUserComponent).afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.getEmployees();
      });
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
