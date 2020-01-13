import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private ApiUrl = environment.ApiUrl;
  constructor(private http: HttpClient) { }

  serv_get_user_details() {
    return this.http.post(this.ApiUrl + 'getUserDetail/', {userId: localStorage.getItem('userId')});
  }

  serv_check_userid() {
    if (localStorage.getItem('userId')) {
      return true;
    }
  }

  serv_get_all_priorities() {
    return this.http.get(this.ApiUrl + 'getAllPriorities');
  }
  
}
