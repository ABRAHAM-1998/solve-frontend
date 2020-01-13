import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChatboxComponent } from 'src/app/chatbox/chatbox.component';
import { UsercomplaintsComponent } from '../usercomplaints/usercomplaints.component';
import { ProfileComponent } from 'src/app/profile/profile.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users = [];
  constructor(private ServUser: AdminService,private modalServ: NgbModal) { }

  ngOnInit() {
    this.fn_get_all_users();
  }
  
  fn_get_all_users() {
    this.ServUser.serv_get_all_users().subscribe(res => {
      if (res['status']) {
        this.users = res['users'];
      }
    });
  }

  fn_activeFlag(id, activeFlag, index) {
    this.ServUser.serv_change_activeflag(id, activeFlag).subscribe(res => {
      if (res['status']) {
        this.users[index].active_flag = res['active_flag'];
      }
    });
  }
  open_chat_comp() {
    this.modalServ.open(ChatboxComponent, {size:'lg'});
  }
  
  fn_open_usercomp(){
    this.modalServ.open(UsercomplaintsComponent,{size: 'lg'})
  }

  fn_viewprofile(userId) {
    const modelRef = this.modalServ.open(ProfileComponent,{size: 'lg'});
    modelRef.componentInstance.userId = userId;
  }

}
