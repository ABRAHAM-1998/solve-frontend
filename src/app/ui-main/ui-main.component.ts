import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChatboxComponent } from '../chatbox/chatbox.component';
import { ComplaintstatusComponent } from '../complaintstatus/complaintstatus.component';
import { ComplaintboxComponent } from '../complaintbox/complaintbox.component';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-ui-main',
  templateUrl: './ui-main.component.html',
  styleUrls: ['./ui-main.component.css']
})
export class UiMainComponent implements OnInit {
   
  public userObj: any = {};
  constructor(private modalServ: NgbModal,
              private route: Router,
              private ServUser: UserService) {
    
   }

  ngOnInit() {
    console.log("test");
    this.fn_get_user_detail();
  }

  fn_get_user_detail() {
    this.ServUser.serv_get_user_details().subscribe(res => {
      if (res['status']) {
        this.userObj = res['details'];
      }
    });
  }

  open_chat_comp() {
    this.modalServ.open(ChatboxComponent, {size:'lg'});
  }
  open_status_comp(){
    this.modalServ.open(ComplaintstatusComponent, {size: 'lg'})

  }
  open_reg_comp(){
    this.modalServ.open(ComplaintboxComponent,{size: 'lg'})
  }
  fn_view_profile(){
    this.modalServ.open(ProfileComponent,{ size:'lg'})
  }

  fn_logout() {
    localStorage.clear();
    this.route.navigate(['/home/login']);
  }
    
}
