import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormGroup} from '@angular/forms';
import {EmployeeService} from '../../../services/employee.service';
import {EMPLOYEE_GENDERS, EMPLOYEE_POSITIONS} from '../../../values/variables';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  employeeForm: FormGroup;
  file: File;

  employeeGenders = EMPLOYEE_GENDERS;
  employeePositions = EMPLOYEE_POSITIONS;

  constructor(
    private dialogRef: MatDialogRef<CreateUserComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.employeeForm = this.employeeService.getEmployeeForm();
  }

  close(): void {
    this.dialogRef.close();
  }

  handleFileInput(files: FileList): void {
    this.file = files.item(0);
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
      .subscribe((data) => {
        this.close();

      });
  }
}
