import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  private ApiUrl = environment.ApiUrl;
  constructor(private http: HttpClient) { }

  serv_register_complaint(data) {
    data.append('userId', localStorage.getItem('userId'));
    console.log(data);
    return this.http.post(this.ApiUrl + 'registerComplaint/', data);
  }

}
