import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../complaint.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';

@Component({
  selector: 'app-complaintbox',
  templateUrl: './complaintbox.component.html',
  styleUrls: ['./complaintbox.component.css']
})
export class ComplaintboxComponent implements OnInit {

  public priorites = [];
  public imageArray = [];
  public imagePreviewArray = [];
  public comp_obj: any= {
    complaint:'',
    priority:''
  }
  constructor(private ServComp: ComplaintService, private ActiveModel: NgbActiveModal, private ServUser: UserService) { }

  ngOnInit() {
    this.fn_get_all_priorities();
  }

  fn_get_all_priorities() {
    this.ServUser.serv_get_all_priorities().subscribe(res => {
      if (res['status']) {
        this.priorites = res['priorities']
      }
    });
  }

  fn_remove_img(index) {
    this.imagePreviewArray.splice(index, 1);
    this.imageArray.splice(index, 1);
  }

  onFileInput(e) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      this.imageArray.push(file);
      const reader = new FileReader();
      reader.onload = e => this.imagePreviewArray.push(reader.result);
      reader.readAsDataURL(file);
    }
  }

  fn_reg_comp(){
    const formData = new FormData();
    formData.append('compaint', this.comp_obj.complaint);
    formData.append('priority', this.comp_obj.priority);
    console.log(formData)
    this.imageArray.forEach(img => {
      formData.append(img.name, img);
      console.log(img.name);
    });
    this.ServComp.serv_register_complaint(formData).subscribe(res => {
      if (res['status']) {
        this.imageArray = [];
        this.imagePreviewArray = [];
        this.comp_obj = {};
        this.ActiveModel.dismiss();
      }
    });
  }

}
