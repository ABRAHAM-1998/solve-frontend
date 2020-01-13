import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   public login_obj: any ={
     username: '',
     password:''
   }
  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit() {
  }
  
  fn_login_email(){
    this.http.post('http://127.0.0.1:8000/api/loginemail/', this.login_obj).subscribe((data) => {
      if (data['status']) {
        localStorage.setItem('userId', data['userId']);
        if (data['role'] == 'user') {
          this.route.navigate(['/home/mainui']);
        } else {
          this.route.navigate(['/admin']);
        }
      }
    });
  }

}
