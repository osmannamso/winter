import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {
  constructor(
    private http: HttpClient
  ) {}

  getFullUri(uri: string): Observable<any> {
    return this.http.get(uri);
  }

  get(uri: string, data: any = {}): Observable<any> {
    return this.http.get(`${environment.apiUrl}${uri}`, {params: data});
  }

  post(uri: string, data: any = {}): Observable<any> {
    return this.http.post(`${environment.apiUrl}${uri}`, data);
  }

  put(uri: string, data: any = {}): Observable<any> {
    return this.http.put(`${environment.apiUrl}${uri}`, data);
  }

  delete(uri: string, data: any = {}): Observable<any> {
    return this.http.delete(`${environment.apiUrl}${uri}`, {body: data} as any);
  }
}
