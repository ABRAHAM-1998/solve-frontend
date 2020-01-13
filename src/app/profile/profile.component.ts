import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';
import { Subscriber } from 'rxjs';
import { AdminService } from '../admin/admin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public userdetail: any = {};
  @Input() userId;
  constructor(
    private modalServ: NgbModal,
    private ServAdmin: AdminService) { }

  ngOnInit() { 
    this.fn_viewprof();
  }

  fn_viewprof(){
    this.ServAdmin.serv_get_user_detail(this.userId).subscribe(res =>{
      if (res['status']){
        this.userdetail = res['details']                                                                                                                                                                                                                                                                                                                                                                      
      }
    })
  }

}
