import {Injectable} from '@angular/core';
import {CustomHttpService} from './custom-http.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EMPLOYEE_GENDERS, EMPLOYEE_POSITIONS} from '../values/variables';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(
    private http: CustomHttpService,
    private fb: FormBuilder
  ) {}

  getEmployeeForm(): FormGroup {
    return this.fb.group({
      position: EMPLOYEE_POSITIONS[0].value,
      name: '',
      last_name: '',
      patronymic: '',
      sex: EMPLOYEE_GENDERS.MALE,
      born_date: '',
      document_type: '',
      issue_country: '',
      number: '',
      phone: '',
      email: '',
      comment: ''
    });
  }

  // http queries below

  createEmployee(formData: FormData): Observable<any> {
    return this.http.post('/corp/employee/', formData);
  }
}
