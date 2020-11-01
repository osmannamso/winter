import {Injectable} from '@angular/core';
import {CustomHttpService} from './custom-http.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EMPLOYEE_DOCUMENT_TYPES, EMPLOYEE_GENDERS, EMPLOYEE_POSITIONS} from '../values/variables';
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
      document_type: EMPLOYEE_DOCUMENT_TYPES[0].value,
      issue_country: '',
      number: '',
      phone: '',
      email: ['', Validators.email],
      comment: ''
    });
  }

  // http queries below

  createEmployee(formData: FormData): Observable<any> {
    return this.http.post('/corp/employee/', formData);
  }

  getEmployees(companyId: number): Observable<any> {
    return this.http.get('/corp/employee/', {company: companyId, page_size: 200});
  }
}
