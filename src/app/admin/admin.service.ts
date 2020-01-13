import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private ApiUrl = environment.ApiUrl;
  constructor(private http: HttpClient) { }

  serv_get_all_users() {
    return this.http.post(this.ApiUrl + 'getAllUsers/', {userId: localStorage.getItem('userId')});
  }

  serv_change_activeflag(userId, activeFlag) {
    const payload = {
      adminId: localStorage.getItem('userId'),
      userId,
      activeFlag
    }
    return this.http.post(this.ApiUrl + 'changeActiveFlag/', payload);
  }

  serv_add_priority(data) {
    data.userId = localStorage.getItem('userId');
    return this.http.post(this.ApiUrl + 'addPriority/', data);
  }

  serv_get_user_detail(userId) {
    return this.http.post(this.ApiUrl + 'getUserDetail/', {userId});
  }

  serv_delete_priority(priority_id) {
    const payload = {
      priority_id,
      userId: localStorage.getItem('userId')
    };
    return this.http.post(this.ApiUrl + 'deletePriority/', payload);
  }

}
