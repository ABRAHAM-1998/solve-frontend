import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddNewPriorityComponent } from './add-new-priority/add-new-priority.component';
import { AdminService } from '../admin.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.css']
})
export class PriorityComponent implements OnInit {

  public priorites = [];
  constructor(private modalServ: NgbModal, private ServUser: UserService, private ServAdmin: AdminService) { }

  ngOnInit() {
    this.fn_get_all_priorities();
  }

  fn_get_all_priorities() {
    this.ServUser.serv_get_all_priorities().subscribe(res => {
      if (res['status']) {
        this.priorites = res['priorities'];
      }
    });
  }

  fn_add_priority(){
    const dialogRef = this.modalServ.open(AddNewPriorityComponent);
    dialogRef.result.then(res => {
      this.fn_get_all_priorities();
    })
  }

  fn_delete_prio(prio_id, index) {
    this.ServAdmin.serv_delete_priority(prio_id).subscribe(res => {
      if (res['status']) {
        this.priorites.splice(index, 1);
      }
    });
  }

}
