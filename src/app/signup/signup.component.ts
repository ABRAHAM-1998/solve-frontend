import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public inputTouched = false;
  public inputTouched1 = false;
  public inputTouched2 = false;
  public inputTouched3 = false;
  public signUpObj: any = {
    name: '',
    email: '',
    mobile: '',
    password: ''
  };
  public err_msg;
  public username_exists = false;
  public email_exists = false;
  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit() {
  }

  fn_signup() {
  this.http.post('http://127.0.0.1:8000/api/signup/', this.signUpObj).subscribe(res => {
    if (res['status']) {
      this.signUpObj = {};
      this.route.navigate(['/home/login']);
    } else {
      this.err_msg = res['msg']
    }
  });
  }

  fn_check_name(){
    const data = {
      name: this.signUpObj.name
    };
    this.http.post('http://127.0.0.1:8000/api/checkUsernameExists/', data).subscribe(res => {
      this.username_exists = res['status']
    });
    // this.http.post('http://127.0.0.1:8000/api/checkUsernameExists/', data).subscribe(function(res){
    //   if (res['status']) {
        
    //   }
    // });
    
  }
  
  fn_check_mail(){
    const maildata = {
      mail: this.signUpObj.email
    };
    this.http.post('http://127.0.0.1:8000/api/emailexist/', maildata).subscribe(res => {
      this.email_exists = res['status']
      console.log(this.email_exists)
    })
  }

      // ****************************** VALIDATION FNS *******************
  fn_input_touched() {
    this.inputTouched = true;
  }
  fn_inputtouched1(){
    this.inputTouched1= true;
  }

  fn_inputtouched2(){
    this.inputTouched2 =true;
  }

  fn_inputtouched3(){
    this.inputTouched3= true;
  }


}
                                                                    