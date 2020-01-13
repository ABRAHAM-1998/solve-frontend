import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from '../../admin.service';


@Component({
  selector: 'app-add-new-priority',
  templateUrl: './add-new-priority.component.html',
  styleUrls: ['./add-new-priority.component.css']
})
export class AddNewPriorityComponent implements OnInit {
  
  public priority_obj: any = {};
  constructor(public activeModel: NgbActiveModal, private ServAdmin:  AdminService) { }

  ngOnInit() {
  }

  fn_save_priority() {
    this.ServAdmin.serv_add_priority(this.priority_obj).subscribe(res => {
      if (res['status']) {
        this.activeModel.close(this.priority_obj);
      }
    });
  }

}
